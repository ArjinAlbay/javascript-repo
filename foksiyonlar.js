// fonksiyon = belirli bir görevi gerçekleştirmek için tasarlanmış yeniden kullanılabilir bir kod bloğu veya programlama ifadeleridir.

// Parametresiz fonksiyon ve dönüş

function sayhello() {
  console.log(`hello`);
}

sayhello(); // "hello"

// geriye değer döndüren fonksiyon

function printName() {
  let firstName = `arjin`;
  let lastName = `albay`;
  let space = ` `;
  let fulname = firstName + space + lastName;
  return fulname;
}

console.log(printName());

// parametreli fonksiyon

function sumNum(num1, num2) {
  return num1 * num2;
}

console.log(sumNum(35, 20));

//  çok fazla parametreli fonksiyonlar

let total = 0;
function sumArray(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    total += array[i];
  }
  return total;
}

let dizi = [1, 2, 3, 4, 5, 6];

sumArray(dizi);

console.log(`toplam`, total);

// arrow fonksiyonlar

// normal fonksiyon

function hello(name2, surname) {
  return `hello ${name2}  ${surname} `;
}

console.log(hello(`arjin`, `albay`));
// ok fonksiyonu (arrow functions)

let hello2 = (name2, surname) => `hello ${name2} ${surname}`;

console.log(hello2(`ahmet`, `altan`));

let square = (n) => n * n; // 9

console.log(square(3));

// ok fonksiyonlarda sınırsız sayıda parametre oluşturmak : rest operatörü

let numbers = (...args) => console.log(args);

numbers(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]

let sumOffNum = (num1, num2, ...arr) => {
  console.log(num1, num2, arr);
};

sumOffNum(1, 2, 3, 4, 5, 6); // 1 2  [3,4,5,6]

// varsayılan parametreli fonskiyonlar

function carp(num1, num2 = 3) {
  return num1 * num2;
}

console.log(carp(10)); // 30

function welcome(name = `ali`) {
  let message = `${name} welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(welcome()); // "ali welcome to 30 Days Of JavaScript!"

console.log(welcome(`arjin`)); // "arjin welcome to 30 Days Of JavaScript!"
