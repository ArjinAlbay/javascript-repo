let newTask = (event) => {
  console.log(`clicked ekle`);
  event.preventDefault(); // sayfanın yenilenmesini engeller
};

let clearTask = () => {
  console.log(`clear temizle`);
};

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

document.querySelector(`#btnClear`).addEventListener("click", clearTask);
