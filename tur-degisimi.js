//typeof türü gösterir

let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price: ", typeof price);
console.log("stringPrice: ", typeof stringPrice);
console.log("hasPassword: ", typeof hasPassword);

// string to int or float
let number1 = "139";
number1 = parseInt(number1);
console.log("number1 : ", number1, typeof number1);

let number2 = "549px";
number2 = parseInt(number2);
console.log("number2 : ", number2, typeof number2);

//number yapmak için sadece sayı olacak
// let number3 = "549px"; YANLIŞ KULLANIM
let number3 = "549";
number3 = Number(number3);
console.log("number3 : ", number3, typeof number3);

let number4 = "549.8px";
number4 = parseFloat(number4);
console.log("number4 : ", number4, typeof number4);

// number to string
let number5 = 549;
number5 = number5.toString();
console.log("number5 : ", number5, typeof number5);

// isInteger( ), isFinite( ) , isNaN( )

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.

Number.isInteger(123); //true
Number.isInteger(0.5); //false

//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.

Number.isFinite(0); //true
Number.isFinite("hello"); //false
Number.isFinite(-0); //false
Number.isFinite(-Infinity); //false

// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123); //false
Number.isNaN(0); //false
Number.isNaN("Hello"); //false
Number.isNaN(0 / 0); // true

// ********Explicit Coercion

String(123); // “123”

//*******Implicit Coercion

// + değeri olan ikili işlemler için Implicit tetiklenir ve STRING ifade olarak çıktı gelir.
console.log("1" + 2); //12

// - , * , / , %  operatörlerinde ise NUMBER türüne dönüşür.

console.log("12" - 5); // 7
console.log("10" * 5); // 50
console.log("12" % 2); // 0
console.log("10" / 5); // 2
console.log("hello" / 5); // NaN
console.log("hello" * 5); // NaN

// To Boolean Coercion >> boolean değerleri number türüne dönüşür ve işlemler true:1 , false: 0 olarak işleme alınır. operatör farkı yoktur.
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(true * undefined); // NaN
console.log(false / null); // NaN
console.log(true & NaN); // NaN

// Eğer bir değeri açık bir şekilde (explicit) boolean'a dönüştürmek istiyorsak Boolean() fonksiyonu kullanılır.
Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

// Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir. (|| && !) okuyalım.

// veya " || " operatörü ilk bulduğu değeri true döndürür.

var a = 5 || s || "" || 4; // 5

// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür

var b = 0 || "" || false || -0 || 0; // 0

// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d = 2 && 3 && 0 && 5 && 7; // 0

// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e = 2 && 3 && 5 && 7; // 7

//***Dönüşümler hakkında genel bir makale */
// https://medium.com/theleanprogrammer/type-conversion-and-coercion-8974afe03b85#:~:text=Type%20coercion%20is%20similar%20to,string%20and%20display%20the%20result.
