// Regular Expressions (düzenli ifadeler)

// RegExp parameters => Normal bir Expression(ifade) iki parametre alır. Bir gerekli arama modeli(pattern) ve isteğe bağlı bir bayrak(flag).

// Pattern => Bir pattern, bir metin veya bir tür benzerlik içeren herhangi bir kalıp olabilir. Örneğin, bir e-postadaki istenmeyen e-posta sözcüğü, bir e-postada aramak istediğimiz bir kalıp olabilir veya bir telefon numarası biçimindeki numara, aramamız gereken ilgi alanı olabilir.

// Flags => arama türünü belirleyen isteğe bağlı parametrelerdir. Bazı bayrakları görelim

// g: tüm metinde bir pattern aramak anlamına gelen global bir flag
// i: büyük/küçük harfe duyarsız flag (hem küçük hem de büyük harf arar)
// m: aramayı bir çok satırda yaparken kullanılan flag

// Creating a pattern with RegExp Constructor

// without flag
let pattern = "love";
let newRegEx = new RegExp(pattern);

// with global flag and case insensitive flag.
let pattern2 = `love`;
let flag = `gi`;
let regEx2 = new RegExp(pattern, flag);

// Creating a pattern without RegExp Constructor

let regEx3 = /love/gi;

// üst yapı ile alt yapı aynıdır.

let regEx4 = new RegExp(`love`, `gi`);

//  RegExpp Object Methods

// test() => bir dizedeki bir eşleşmeyi test eder. Doğru veya yanlış döndürür.
let str = `ı love js`;
let pattern3 = /love/;
let result = pattern3.test(str);
console.log(result); // true

// match() => eşleşmeyi dizi olarak döndürür.

let str2 = `ı love js`;
let pattern4 = /love/;
let result2 = str.match(pattern4);
console.log(result2); // ["love"]

// search() => bulunan eşleşmenin indeks numarasını dönderir. bulamazsa -1 dönderir.

let str3 = `ı love js`;
let pattern5 = /love/;
let result3 = str3.search(pattern5);
console.log(result3); // 2

// replace() => Bir dizede bir eşleşme araması yürütür ve eşleşen alt dizeyi bir yedek alt dizeyle değiştirir.

let txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

let matchReplaced = txt.replace(/Python|python/, `js`);

console.log(matchReplaced); // "js is the most beautiful language that a human begin has ever created.I recommend python for a first programming language"

let txt2 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt2.replace(/Python|python/g, `js`);

console.log(matchReplaced); // "js is the most beautiful language that a human begin has ever created.I recommend js for a first programming language"

let txt3 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

let matches = txt3.replace(/%/g, ``);

console.log(matches); // "I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher."

// Square Bracket

let pattern6 = `[Aa]pple`;
let txt4 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
let matches2 = txt4.match(pattern6);
console.log(matches2); // ['Apple', index: 0, input: 'Apple and banana are fruits. An old cliche says an…by a banana a day keeps the doctor far far away. ', groups: undefined]

let pattern7 = /[Aa]pple/gi;
let txt5 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
let matches3 = txt5.match(pattern7);
console.log(matches3); // ["Apple","apple"]

let pattern8 = /[Aa]pple|[Bb]anana/g;
let txt6 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";

let matches4 = txt6.match(pattern8);

console.log(matches4); // ["Apple","banana","apple","banana","Banana"]

// Escape character(\)
let pattern9 = /\d/g;
let txt7 = "This regular expression example was made in January 12,  2020.";

let matches5 = txt7.match(pattern9);

console.log(matches5); // ["1", "2", "2", "0", "2", "0"], bu bizim istediğimiz değil.

let new1 = /\d+/g;
let txt8 = "This regular expression example was made in January 12,  2020.";
let matches8 = txt8.match(new1);

console.log(matches8); // ["12","2020"]

// One or more times(+)

let new2 = /\d+/g;
txt = "This regular expression example was made in January 12,  2020.";
matches = txt.match(new2);
console.log(matches); // ["12","2020"]

// Period(.)

new2 = /a./g;
txt = "Apple and banana are fruits";
matches = txt.match(new2);
console.log(matches); // ["an","an","an","a ","ar"]

new2 = /a.+/g;
txt = "Apple and banana are fruits";
matches = txt.match(new2);
console.log(matches); // ['and banana are fruits']

// Zero or more times(*)

new2 = /a.+/g;
txt = "Apple and banana are fruits";
matches = txt.match(new2); // ["and banana are fruits"]

// Zero or one times(?)

txt =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
new2 = /[Ee]-?mail/g;
matches = txt.match(new2);

console.log(matches); // ["e-mail","email","Email","E-mail"]

// Quantifier in RegExp

txt = "This regular expression example was made in December 6,  2019.";
new2 = /\b\w{4}\b/g;
matches = txt.match(new2);
console.log(matches); // ["This","made","2019"]

txt = "This regular expression example was made in December 6,  2019.";
new2 = /\b[a-zA-Z]{4}\b/g;
matches = txt.match(new2); // ["This","made"]

txt = "This regular expression example was made in December 6,  2019.";
new2 = /\d{4}/g;
matches = txt.match(new2);

console.log(matches); // ["2019"]

txt = "This regular expression example was made in December 6,  2019.";
new2 = /\d{1,2}/g;
matches = txt.match(new2); // ["6","20","19"]

// Cart ^

// Starts with
txt = "This regular expression example was made in December 6,  2019.";
new2 = /^This/;
matches = txt.match(new2);
console.log(matches); // ['This']

// Negation
txt = "This regular expression example was made in December 6,  2019.";
new2 = /[^A-Za-z,. ]+/g;
matches = txt.match(new2);
console.log(matches); // ["6", "2019"]

// Exact match => ^ ile başlamalı $ işareti ile bitmeli

new2 = /^[A-Za-z]{3,5}$/;
let name = `Arjin`;
result = new2.test(name);
console.log(result); // true
