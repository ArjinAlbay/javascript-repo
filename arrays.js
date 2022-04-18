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

//  Dizide eleman varlığını sorgulama => indexOf :Bir dizide bir öğenin olup olmadığını kontrol eder. Varsa dizini döndürür, aksi takdirde -1 döndürür.

let fruits = ["banana", "orange", "mango", "lemon"];

let index = fruits.indexOf(`banana`);

console.log(index); // 0 => 0. sırada olduğunu söyler.

let index1 = fruits.indexOf(`karpuz`);

console.log(index1); // -1 => dizi içinde karpuz yok

// Dizi içindeki Son Elamanı Bulmak  => lastIndexOf : eğer dizimizde birden fazla aynı değer varsa Dizideki son öğenin konumunu verir. Varsa, dizini döndürür, aksi takdirde -1 döndürür.

let numbers1 = [1, 2, 3, 4, 5, 3, 1, 2];

let index2 = numbers1.lastIndexOf(2);

console.log(index2); // 7 => 7. sırada bulunan 2 değerini getirdi. bulamasaydı -1 dönecekti.

// Dizi içindeki elemanı sorgulamak =>  includes: dizi içinde varsa true yada false değerini döndürür.

let numbers2 = [1, 2, 3, 4, 5, 3, 1, 2];

let index3 = numbers2.includes(8);

console.log(index3); // false =>  includes(3) yap ve dene.

let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs.includes(`HTML`)); // true
console.log(webTechs.includes(`C`)); // false

//  Dizi Olup Olmadığını Kontrol etmek => Array.isArray : Veri türünün bir dizi olup olmadığını kontrol etmek için

let numbers3 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(Array.isArray(numbers3)); // true

let number = 100;

console.log(Array.isArray(number)); // false

// Diziyi Stringe dönüştürme => toString

let numbers4 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers4.toString()); // "1,2,3,4,5,3,1,2"

// Dizi öğelerini birleştirme => join : Dizinin öğelerini birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir string olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak öğeler arasında birleştirilebilecek farklı dize parametreleri iletebiliriz.

let numbers5 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers5.join()); // "1,2,3,4,5,3,1,2" =>

let metin = ["ahmet", "eve", "geç", "geldi"];

console.log(metin.join()); // "ahmet,eve,geç,geldi"
console.log(metin.join(``)); // "ahmetevegeçgeldi"
console.log(metin.join(` `)); // "ahmet eve geç geldi"
console.log(metin.join(`#`)); // "ahmet#eve#geç#geldi"
console.log(metin.join(`, `)); //"ahmet, eve, geç, geldi"

//  Dizi öğelerini dilimle => slice : Aralıktaki birden fazla öğeyi kesmek için. İki parametre alır: başlangıç ​​ve bitiş konumu. Bitiş konumunu içermez.

let metin2 = ["ahmet", "eve", "geç", "geldi", "yemek", "yedi", "oturdu"];

console.log(metin2.slice(1, 5)); // ["eve","geç","geldi","yemek"] => 5. indeksi almadı.

// Diziye ekleme -çıkarma yöntemi => splice : Üç parametre alır: Başlangıç ​​konumu, kaldırılacak öğe sayısı ve eklenecek öğe sayısı. örneğe bakalım

let metin3 = ["ahmet", "eve", "geç", "geldi", "yemek", "yedi", "oturdu"];

metin3.splice(1, 3, `kahvaltı`, `yaptı`);

console.log(metin3); // ["ahmet","kahvaltı","yaptı","yemek","yedi","oturdu"] => 1. indexten başlayıp 3. indekse kadar gitti ve çıkardı. yerine kahvaltı ve yaptı elemanlarını koydu.

// diziye öğe ekleme => Push : Mevcut bir dizinin sonuna öğe eklemek için push yöntemini kullanırız.

let metin4 = [`selam`, `ben`, `arjin`];

metin4.push(`albay`);

console.log(metin4); // ["selam","ben","arjin","albay"]

// Diziden Öğe çıkarma => pop : dizi Sonundaki öğeyi kaldırma.

let metin5 = ["selam", "ben", "arjin", "albay"];

metin5.pop();

console.log(metin5); // ["selam","ben","arjin"]

//  dizi başından eleman çıkarmak => shift

let metin6 = ["selam", "ben", "arjin", "albay"];

metin6.shift();

console.log(metin6); // ["ben","arjin","albay"]

//  dizi başına eleman eklemek => unshift

let metin7 = ["selam", "ben", "arjin", "albay"];

metin7.unshift(`iyi günler`);

console.log(metin7); // ["iyi günler","selam","ben","arjin","albay"]

// Dizi elaman sırasını terse çevirmek => reverse

let metin8 = ["selam", "ben", "arjin", "albay"];

metin8.reverse();

console.log(metin8); // ["albay","arjin","ben","selam"]

//Dizideki öğeleri sıralama =>  dizi öğelerini artan sırada düzenleyin.

let webTechs1 = [
  "React",
  "HTML",
  "Node",
  "CSS",
  "JavaScript",
  "Redux",
  "MongoDB",
];

webTechs1.sort();

console.log(webTechs1); // ["CSS","HTML","JavaScript","MongoDB","Node","React","Redux"]  a dan z ye sıralandı.
