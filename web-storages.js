// ********* Web Storages

// https://app.patika.dev/courses/javascript/localstorage-ile-veri-eklemek-duzenlemek-ve-silmek

// localStorage.clear() - to remove everything in the local storage

// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.

// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.

// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.

// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

// Öğeyi localStorage'a ayarlama // setting

localStorage.setItem(`key`, `value`);

// Dizeyi localStorage'da saklama

localStorage.setItem(`firstname`, `Arjin`);

console.log(localStorage);

// number veriyi localStorage'da saklama

localStorage.setItem(`age`, 200);

console.log(localStorage);

// Bir arrayı localStorage'da depolamak.
// Bir arrayı, objeyi veya obje arrayı depoluyorsak, önce objeyi string haline getirmeliyiz.

let skills = ["HTML", "CSS", "JS", "React"];

let skillsJson = JSON.stringify(skills);

localStorage.setItem(`skills`, skillsJson);

console.log(localStorage);

let skills1 = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJson = JSON.stringify(skills1);

localStorage.setItem(`skills`, skillJson);

console.log(localStorage);

//   Öğeyi localStorage'dan alma / getting

localStorage.getItem(`firstname`);

let age = localStorage.getItem(`age`);
let skillss = localStorage.getItem(`skills`);

console.log(age, skills);

// localStorage'dan saklanan öğeyi kaldır

localStorage.removeItem(`age`); // {}

// localStorage'ı temizleme

localStorage.clear();

// localStorage'da depolanan verileri görüntülemek için.

localStorage.key(`age`);
