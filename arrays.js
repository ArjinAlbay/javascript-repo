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

hepsi[7]();
