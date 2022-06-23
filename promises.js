//************ Promises

// callbacks

const doSomething = (selam) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    selam("It did not go well", skills);
  }, 2000);
};

const selam = (err, result) => {
  if (err == false) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(selam);

// Promise constructor

// syntax
let promise = new Promise((resolve, reject) => {
  resolve(`success`);
  reject(`failure`);
});

let doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject(`wrong`);
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

let doPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let skills = ["HTML", "CSS", "JS"];
    if (skills.includes(`Node`)) {
      resolve(`Fullstack`);
    } else {
      reject(`wrong`);
    }
  }, 3000);
});

doPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Fetch API

let url = "https://restcountries.com/v2/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

// Async and Await

let square = async function (n) {
  return n * n;
};

let value = await square(2);
console.log(value);

// with Fetch API

let fetchData = async () => {
  try {
    let response = await fetch(url);
    let countries = await response.json();
    console.log(countries);
  } catch (error) {
    console.log(error);
  }
};

console.log(`async and await`);
fetchData();
