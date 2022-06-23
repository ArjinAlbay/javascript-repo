let gorevListesi = [
  { id: 1, gorevAdi: "Görev1" },
  { id: 2, gorevAdi: "Görev2" },
  { id: 3, gorevAdi: "Görev3" },
  { id: 4, gorevAdi: "Görev4" },
];

ul = document.getElementById("task-list");

for (let item of gorevListesi) {
  let li = `
  <li class="task list-group-item">
  <div class="form-check">
      <input type="checkbox" id="${item.id}" class="form-check-input">
      <label for="${item.id}" class="form-check-label">${item.gorevAdi}</label>
  <div>
  </li>
  `;
  ul.insertAdjacentHTML("beforeend", li);
}

// document.querySelector(`#task-list`).children[2].remove();

// document.querySelector(`#task-list`).removeAttribute(`class`);

// let sonuc;

// sonuc = document.querySelector(`#task-list`).children[1].getAttribute(`class`);

// document.querySelector(`#task-list`).setAttribute(`class`, `aaa`);

// sonuc = document.querySelector("#task-list").children[0].classList;

// ul = document.querySelector("#task-list").classList[1];

document.querySelector("#task-list").children[2].classList.add(`bg-info`);
document.querySelector("#task-list").children[1].classList.add(`bg-danger`);

sonuc = document
  .querySelector("#task-list")
  .children[0].classList.contains("task"); // task clasının içinde olup olmadığını kontrol eder.

console.log(sonuc);
