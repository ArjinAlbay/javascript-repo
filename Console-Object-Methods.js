// Console Object Methods

// console.log()

// Tarayıcı konsolunda çıktı göstermek

console.log(`30 Days of JavaScript`); // 30 Days of JavaScript

// Substitution (yer değiştirme)

// %d => Outputs an integer
// %s => Outputs a string.
// %c => directive to apply a CSS

console.log("%i %s of JavaScript", 30, "Days"); //30 Days of JavaScript

// CSS => konsol çıktısının rengini değiştirebiliriz.

console.log("%c30 Days Of JavaScript", `color:green`); // // log output is green

console.log(
  `%c30 days%c %cof%c %cJavaScript%c`,
  `color:green`,
  "",
  `color: red`,
  "",
  `color:yellow`
);

// console.warn() => uyarı mesajı

console.warn(`warning message`);

// console.error() => hata mesajları için

console.error(`its a error message`);

// console.table() => verileri konsolda bir tablo olarak görüntüler.

let names = ["arjin", "albay", "orhan", "pamuk"];

console.table(names); // deneyin :)

let users = {
  name: `arjin`,
  lastName: `albay`,
  country: `Turkey`,
  city: `Diyarbakir`,
  age: 365,
};

console.table(users);

let countries = [
  [`Findland`, `Helsinki`],
  [`Sweeden`, `Stockholm`],
  [`Norway`, `Oslo`],
];
console.table(countries);

users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

//   console.time() =>  Bir işlemin ne kadar sürdüğünü izlemek için kullanabileceğiniz bir zamanlayıcı başlatır. Aynı adla console.timeEnd() öğesini çağırdığınızda, tarayıcı, zamanlayıcı başlatıldıktan sonra geçen süreyi milisaniye cinsinden verir.

countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time(`döngüde geçen zaman`); // timeEnd ile aynı olmak zorundadır.
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd(`döngüde geçen zaman`); // döngüde geçen zaman: 0.190185546875 ms

// for of yada forEach döngüsü normal döngüden hızlı mı deneyin :)

// console.info() => bilgi mesajı görüntüler.

console.info(`bu bir bilgi mesajıdır`);

// console.assert() => iki parametre alır. eğer ilk girdi yanlış olursa 2. parametredeki girdi mesajı çalışır. eğer doğruysa hiçbir şey çalışmaz.

console.assert(3 > 5, `3 is not greater than 5`); // Assertion failed: 3 is not greater than 5

console.assert(5 > 3, `3 is not greater than 5`); //

for (let i = 0; i < 10; i++) {
  let errorMessage = `${i} is not even`;
  console.log(`the is ` + i);
  console.assert(i % 2 == 0, { number: i, errorMessage: errorMessage });
}

// console.group() => gruplandırır ve grup ismini en üste yazdırırsınız.

names = ["Asabeneh", "Brook", "David", "John"];

console.group(`Names`);
console.log(names);
console.groupEnd();

users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group(`Users`);
console.log(users);
console.groupEnd();

//   console.count() => kaç kez çağrıldığını sayar. örneğe bakalım

let func = () => {
  console.count("Function has been called");
};

func(); // Function has been called: 1
func(); // Function has been called: 2

// console.clear() => tarayıcı konsolunu temizler
