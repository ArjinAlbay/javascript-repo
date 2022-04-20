//  Loops => Döngüler

// for

for (let i = 0; i <= 5; i++) {
  console.log(i);
} // 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
  console.log(i);
} // 5 4 3 2 1 0

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
/* 0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25 */

let countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

let newAr = [];

for (let i = 0; i < countries.length; i++) {
  newAr.push(countries[i].toUpperCase());
}
console.log(newAr);
// FINLAND,SWEDEN,DENMARK,NORWAY,ICELAND,

let numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); //21

// while

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

//do while

let isimler = [`arjin`, `albay`, `mehmet`];

do {
  console.log(`isim`, isimler[i]);
  i++;
} while (i < isimler.length);

// for of loop

let names1 = [`arjin`, `albay`, `mehmet`];

for (let name of names1) {
  console.log(name);
}

for (let isimba of names1) {
  console.log(isimba[0]);
}
// "a" "a" "m"

//break

let names2 = [`arjin`, `albay`, `mehmet`];

for (let namee of names2) {
  if (namee == `mehmet`) {
    console.log(`${namee} bulundu`);
    break;
  }
  console.log(namee);
}

let names3 = [`arjin`, `albay`, `mehmet`];

for (let namee of names3) {
  if (namee == `albay`) {
    console.log(`${namee} atlandı`);
    continue;
  }
  console.log(namee);
}
