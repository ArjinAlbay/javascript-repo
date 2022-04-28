let sonuc;

sonuc = document.getElementsByClassName("task")[0];
sonuc = document.getElementsByClassName("task")[1];

// taskList = document.getElementsByClassName("task");
// ul = document.getElementById("task-list");
// taskList = ul.getElementsByTagName("li");

taskList = document.querySelectorAll("li");

// for (let i = 0; i < taskList.length; i++) {
//   console.log(taskList[i]);
// }

for (let task of taskList) {
  console.log(task);
}

for (let task of taskList) {
  task.style.color = "red";
  task.style.fontSize = "35px";
  //   task.innerText = " item ";
}

// console.log(sonuc);
