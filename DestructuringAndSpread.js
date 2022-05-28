// Destructuring, dizileri ve nesneleri açmanın ve farklı bir değişkene atamanın bir yoludur.

// Destructing Arrays

let numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree); // 1 2 3

let names = ["Asabeneh", "Brook", "David", "John"];

let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); // "Asabeneh" "Brook" "David" "John"

let fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let [frontEnd, backEnd] = fullStack;

console.log(frontEnd); // ["HTML","CSS","JS","React"]
console.log(backEnd); // ["Node","Express","MongoDB"]

//   Dizideki değerleri atlamak istersek, ek virgül kullanırız. Virgül, o belirli dizindeki değerin atlanmasına yardımcı olur. örneğe bakalım

let numbers2 = [1, 2, 3];

let [numOne2, , numThree3] = numbers2; //2. indeks atlandı

console.log(numOne2, numThree3); // 1 3

// Dizideki tüm elemanlara değişken atayamayız. İlkinin birkaçını yok edebiliriz ve kalanını spread operatörü(...) kullanarak dizi olarak alabiliriz. örneğe bakalım

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [4,5,6,7,8,9,10]

// döngü içinde Destructuring

let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (let [country, city] of countries) {
  console.log(country, city);
}

let fullStack2 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let [first, second, third] of fullStack2) {
  console.log(first, second, third);
}
//   "HTML" "CSS" "JS"
// "Node" "Express" "MongoDB"

// Object lerde Destructuring

// objelerde Destructuring kullandığımız  zaman değişkenin adı, objenin key veya propertisi  ile tamamen aynı olmalıdır. Aşağıdaki örneğe bakın.

let rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter); // 20 10 200 undefined => perimeter tanımsız kabul edildi.

//   Yapılandırma sırasında yeniden adlandırma

let rectangle2 = {
  width: 20,
  height: 10,
  area: 200,
};

let { width: w, height: h, area: a, perimeter: p } = rectangle2;

console.log(w, h, a, p); // 20 10 200 undefined

let rectangle3 = {
  width2: 30,
  height2: 10,
  area2: 200,
  perimeter2: 80,
};

let { width2, height2, area2, perimeter2 = 60 } = rectangle3;

console.log(width2, height2, area2, perimeter2); // 30 10 200 80 key ve value aynı olmak zorunda demiştik. key i aldı fakat value aynı olmadığı 60 değeri geçersiz oldu.

// Object parameter without destructuring => bu kısımda klasik şekilde obje adı ve propertisi şeklinde çekiyoruz değerleri.

let person = {
  firstName: `arjin`,
  lastName: `albay`,
  age: 250,
  country: `Turkey`,
  job: `Frontend Developer`,
  skills: [
    `html`,
    `css`,
    `javaScript`,
    `react`,
    `redux`,
    `node`,
    `mongodb`,
    `python`,
    `d3.js`,
  ],
  languages: [`english `, `spanish`, `German`],
};

let getPersonInfo = (obj) => {
  let skills = obj.skills; // obje propertisini skills değişkenine atadık.
  let formattedSkills = skills.slice(0, -1).join(`, `);
  let languages = obj.languages;
  let formattedLanguages = languages.slice(0, -1).join(`, `);

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. he is ${obj.age} years old. he is an ${
    obj.job
  }. he teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. he speaks ${formattedLanguages} and a little bit of ${languages[2]}`;

  return personInfo;
};

console.log(getPersonInfo(person));

// Object parameter with destructuring => bu kısımda ise obje içindeki key'e bir değişken atıyoruz.

let person2 = {
  firstName: `arjin`,
  lastName: `albay`,
  age: 250,
  country: `Turkey`,
  job: `Frontend Developer`,
  skills: [
    `html`,
    `css`,
    `javaScript`,
    `react`,
    `redux`,
    `node`,
    `mongodb`,
    `python`,
    `d3.js`,
  ],
  languages: [`english `, `spanish`, `German`],
};

let getPersonInfo2 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  let formattedSkills = skills.slice(0, -1).join(`, `); // propertiyi değişkine atamaya gerek kalmadı çünkü fonksiyon parametresine değişkeni koyduk ve Destructuring işlemini yapmış olduk.
  let formattedLanguages = languages.slice(0, -1).join(`, `);

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person2)); // "arjin albay lives in Turkey. He is 250 years old. He is an Frontend Developer. He teaches html, css, javaScript, react, redux, node, mongodb, python and d3.js. He speaks english , spanish and a little bit of German."

// Destructuring object during iteration

let todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (let { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
// "Prepare JS Test" "4/1/2020 8:30" true
// "Give JS Test" "4/1/2020 10:00" false
// "Assess Test Result" "4/1/2020 1:00" false

// Spread or Rest Operator

// Bir dizide destructure işlemi yaptığımızda, kalan öğeleri dizi olarak almak için spread operatörünü(...) kullanırız. Buna ek olarak, dizi öğelerini başka bir diziye yaymak için spread operatörünü kullanırız.

// Spread operator to get the rest of array elements

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [numBir, numIki, numUc, ...restOperator] = num;

console.log(numBir, numIki, numUc); // 1 2 3

console.log(restOperator); // [4,5,6,7,8,9,10]

// Spread operator to copy array

let evens = [0, 2, 4, 6, 8, 10];

let newEvens = [...evens];

let odds = [1, 3, 5, 7, 9];
let newOdds = [...odds];

let wholeNumbers = [...evens, ...odds];

console.log(wholeNumbers); // [0,2,4,6,8,10,1,3,5,7,9]
console.log(newEvens); // [0,2,4,6,8,10]
console.log(newOdds); // [1,3,5,7,9]

let frontEnd2 = ["HTML", "CSS", "JS", "React"];
let backEnd2 = ["Node", "Express", "MongoDB"];

let fullStack3 = [...frontEnd2, ...backEnd2];

console.log(fullStack3); // ["HTML","CSS","JS","React","Node","Express","MongoDB"]

// Spread operator to copy object

let user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

let copiedUsers = { ...user };
console.log(copiedUsers); // {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

// Kopyalama sırasında nesneyi düzeltme veya değiştirme

let user2 = {
  name: "arjin",
  title: "Programmer",
  country: "turkey",
  city: "diyarbakir",
};

let changeUser2 = { ...user2, title: `developer` };

console.log(changeUser2);

// Spread operator with arrow function

let sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5); //  [1,2,3,4,5]

let sumAllNums2 = (...args) => {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums2(1, 2, 3, 4, 5)); // 15
