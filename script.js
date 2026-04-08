const form = document.getElementById("formTugas");
const dataTugas = document.getElementById("dataTugas");

let daftar = JSON.parse(localStorage.getItem("tugas")) || [];

function tampilkanData() {
  dataTugas.innerHTML = "";
  daftar.forEach(item => {
    let row = `<tr>
      <td>${item.nama}</td>
      <td>${item.nim}</td>
      <td>${item.tugas}</td>
    </tr>`;
    dataTugas.innerHTML += row;
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const tugas = document.getElementById("tugas").value;

  daftar.push({ nama, nim, tugas });

  localStorage.setItem("tugas", JSON.stringify(daftar));

  form.reset();
  tampilkanData();
});

tampilkanData();
