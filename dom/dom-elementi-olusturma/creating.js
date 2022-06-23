// let gorevlistesi = ["Görev 1", "Görev 2", "Görev 3", "Görev 4"];

let gorevlistesi = [
  { id: 1, gorevAdi: "Görev1" },
  { id: 2, gorevAdi: "Görev2" },
  { id: 3, gorevAdi: "Görev3" },
  { id: 4, gorevAdi: "Görev4" },
];

let tasks = document.getElementById(`task-list`);

for (let gorev of gorevlistesi) {
  let taskShow = `
  <li class="task list-group-item">
  <div class="form-check">
      <input type="checkbox" id="${gorev.id}" class="form-check-input">
      <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
  <div>
  </li>
  `;
  tasks.insertAdjacentHTML(`beforeend`, taskShow);
}

// insertAdjacentHTML =>HTML kodunu belirtilen bir konuma ekler.

// https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
