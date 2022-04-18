//  Diziler

// Boş dizi oluşturmak için iki yöntem vardır:

let arr = new Array();

let arr1 = [];

// değerlerini köşeli parantez içinde verebilirsiniz:,

let manav = [`elma`, `portakal`, `erik``lahana`, `domates`];

// Diziler sıfır ile başlarlar.

alert(manav[2]); // erik

alert(manav[3]); // lahana

alert(manav[0]); // elma

//  Elamanı değiştirmek mümkündür:

manav[2] = `karnabahar`; // [`elma` , `portakal` ,`karnabahar` `lahana` , `domates`]

// Veya diziye yeni bir eleman eklemek mümküdür:

manav[5] = `karpuz`; // [`elma` , `portakal` ,`karnabahar` `lahana` , `domates` , `karpuz`]

// Dizide bulunan elemanların boyutu length metodu ile öğrenilebilir:

console.log(manav.length); // 5

//  Ayrıca alert kullanarak tüm dizinin gösterilmesi de mümkündür:

alert(manav);

// Dizi her türlü veriyi tutabilir.

let hepsi = [
  `elma`,
  { isim: `arjin` },
  false,
  true,
  45,
  65.1,
  function () {
    alert(`selam`);
  },
];

// 7. indeksteki fonksiyonu al ve çalıştır.

hepsi[7](); // selam

// NOT : dikkat edersiniz alert(selam) ' dan sonra virgül koyduk. yeni eleman ekleme veya çıkarma işlemlerini kolaylaştırır.

// split kullanarak dizi oluşturma

let game = `counter`;

let game2 = game.split("");

console.log(game2); // ["c","o","u","n","t","e","r"]

let game3 = `counter`;

let game4 = game.split(``);

console.log(game4); // ["c","o","u","n","t","e","r"]

let ex = `I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.`;

let ex2 = ex.split(` `); // boşluk bırakmazsanız harf harf ayırır

console.log(ex2); // ["I","love","teaching","and","empowering","people.","I","teach","HTML,","CSS,","JS,","React,","Python."]

let numbers = [0, 3.14, 9.81, 37, 98.6, 100];

console.log(numbers.length); // 6 --- burada dizi içinde 6 eleman olduğunu belirtir.

//  ************* DİZİLERDE METHOTLAR => Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

//Dizi Oluşturucu => Array : dizi oluşturma yöntemidir.

let ex1 = Array();

console.log(ex1); // boş bir dizi oluşturur.

let emptyValues = Array(4);

console.log(emptyValues); // 4 boş değerli bir dizi oluşturur. daha sonra bu boş öğeleri doldurmak için kullanabiliriz. şimdilik devam

// Dizi Doldurma => fill:  dizi öğelerini statik bir değerle doldurur. hadi örneğe bakalım

let ex3 = Array();

let ex4 = Array(5).fill(`js`); // 5 boş değer oluşuturup fill özelliği ile her boş bölüme js eklemiş olduk. çıktı aşağıda

console.log(ex4); // ["js","js","js","js","js"]

// Dizi Birleştirme => concat : İki diziyi birleştirmek için.

let firstList = [1, 2, 3];
let secondList = [4, 5, 6];

let thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// Dizi Uzunluğunu Alma => length : Dizinin boyutunu bilmek için

let ex5 = [1, 2, 3, 4, 5];

console.log(ex5.length); // 5 => 5 dizinin boyutudur
