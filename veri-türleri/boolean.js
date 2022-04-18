//BOOLEAN VERİ TÜRÜ

let userName;
let isUserName = Boolean(userName);
console.log();

Boolean("11"); //true
Boolean("0"); //true
Boolean(""); // içinde bilgi yoksa false

let userName2 = " user";
console.log("user name var mı? " + Boolean(userName2));

let buyuk = 4 > 2;
alert(buyuk);

let bos = null;
alert(bos);

let x = 0;
alert(Boolean(x));

alert(Boolean(Infinity));

let z = 10 / "a";
alert(Boolean(z));

let a = { 2: "js" };
console.log(Boolean(a));

let atanmadi = undefined;
alert(atanmadi);

Boolean({}); // true
Boolean([]); // true
Boolean(Symbol()); // true
!!Symbol(); // true
Boolean(function () {}); // true
