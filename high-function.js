// Callback

let callback = (number) => {
  return number ** 2;
};

function cube(x, number) {
  return x(number) * number;
}

console.log(cube(callback, 3));

//   Returning function

let ilk = (a) => {
  let ikinci = (b) => {
    let ucuncu = (c) => {
      return a * b * c;
    };
    return ucuncu;
  };
  return ikinci;
};

console.log(ilk(3)(2)(4));

// Setting time

// 1- setInterval

let sayHello = () => console.log("hello");

setInterval(sayHello, 2000);

//2- setTimeout

setTimeout(sayHello, 3000);

// clearInterval
// clearTimeout

let go = setInterval(sayHello, 2000);

setTimeout(() => {
  clearInterval(go);
  console.log("sayhello iptal");
}, 5000);

let timeout = setTimeout(() => {
  clearInterval(go);
  console.log(`interval işlemi iptal edildi`);
}, 6000);

setTimeout(() => {
  clearTimeout(timeout);
  console.log("iptal");
}, 7000);

//   Functional Programming

// forEach =>  forEach'i yalnızca dizilerle kullanırız.

let sum = 0;
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => (sum += num));

console.log(sum);

let countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

countries.forEach((item) => console.log(item.toUpperCase()));

// map => Bir dizi öğelerini yineleyin ve dizi öğelerini değiştirin.

let numbers2 = [1, 2, 3, 4, 5];

let new2 = numbers2.map((num2) => num2 * 2);

console.log(new2);

let users = [
  {
    id: 1,
    name: `arjin`,
    age: 29,
    gender: 1,
  },
  {
    id: 2,
    name: `mehmet`,
    age: 35,
    gender: 1,
  },
  {
    id: 3,
    name: `veysel`,
    age: 78,
    gender: 1,
  },
  {
    id: 4,
    name: `kadın`,
    age: 50,
    gender: 2,
  },
];

users = users.map((user) => {
  if (user.id == 2) {
    user.name = `hakan`;
    user.age = 99;
  }
  return user;
});

console.log(users);

// filter => Filtreleme koşullarını tam olarak dolduran ve yeni bir dizi döndüren öğeleri filtreleyin.

let countries1 = countries.filter((country) => country.includes(`land`));

console.log(countries1);

// reduce

let numbers3 = [1, 2, 3, 4, 5];
let total = numbers3.reduce((acc, cur) => acc + cur, 0);

console.log(total);

// every

let users2 = [
  {
    id: 1,
    name: `arjin`,
    age: 29,
    gender: 1,
  },
  {
    id: 2,
    name: `mehmet`,
    age: 35,
    gender: 1,
  },
  {
    id: 3,
    name: `veysel`,
    age: 78,
    gender: 1,
  },
  {
    id: 4,
    name: `kadın`,
    age: 50,
    gender: 2,
  },
];

console.log(users2.every((user) => user.gender == 1));

// some

let users3 = [
  {
    id: 1,
    name: `arjin`,
    age: 29,
    gender: 1,
  },
  {
    id: 2,
    name: `mehmet`,
    age: 35,
    gender: 1,
  },
  {
    id: 3,
    name: `veysel`,
    age: 78,
    gender: 1,
  },
  {
    id: 4,
    name: `kadın`,
    age: 50,
    gender: 2,
  },
];

console.log(users3.some((user) => user.gender == 1));

// find  => koşula ilk uyan elemanı döndürür

let numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.find((number) => number > 3)); // 4

let users4 = [
  {
    id: 1,
    name: `arjin`,
    age: 29,
    gender: 1,
  },
  {
    id: 2,
    name: `mehmet`,
    age: 35,
    gender: 1,
  },
  {
    id: 3,
    name: `veysel`,
    age: 78,
    gender: 1,
  },
  {
    id: 4,
    name: `kadın`,
    age: 50,
    gender: 2,
  },
];

let findUser = users4.find((user) => user.id == 3);

console.log(findUser);

// findIndex => kaçıncı indekst olduğunu bulur bize

let numbers5 = [1, 2, 3, 4, 5];

let result = numbers5.findIndex((num) => num > 4);

console.log(result); //4

// sort => dizi öğelerini sıralar ama string türü için geçerlidir. number türünde hata döner.

let products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];

console.log(products.sort());

const numbers6 = [9.81, 3.14, 100, 37];

numbers6.sort((a, b) => a - b);

console.log(numbers6); // [3.14, 9.81, 37, 100]

numbers6.sort((a, b) => b - a);

console.log(numbers6); //[100, 37, 9.81, 3.14]

let users5 = [
  {
    id: 4,
    name: `arjin`,
    age: 29,
    gender: 1,
  },
  {
    id: 1,
    name: `mehmet`,
    age: 35,
    gender: 1,
  },
  {
    id: 3,
    name: `veysel`,
    age: 78,
    gender: 1,
  },
  {
    id: 2,
    name: `kadın`,
    age: 50,
    gender: 2,
  },
];

users5.sort((a, b) => a.id - b.id);

console.log(users5);

users5.sort((a, b) => b.id - a.id);

console.log(users5);
