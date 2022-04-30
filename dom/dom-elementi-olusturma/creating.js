// let gorevlistesi = ["Görev 1", "Görev 2", "Görev 3", "Görev 4"];

let gorevListesi = [
  { id: 1, gorevAdi: "Görev1" },
  { id: 2, gorevAdi: "Görev2" },
  { id: 3, gorevAdi: "Görev3" },
  { id: 4, gorevAdi: "Görev4" },
];

ul = document.getElementById("task-list");

// let count = ul.children.length;

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

// insertAdjacentHTML =>HTML kodunu belirtilen bir konuma ekler.

// https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
