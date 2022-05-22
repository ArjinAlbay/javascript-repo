// Set => kelime anlamı küme demek. Küme yalnızca benzersiz öğeler içerebilir.

// Creating an empty set

let companies = new Set();
console.log(companies); // Set(0) {}

// Creating set from array

let languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

let setOfLanguages = new Set(languages);

console.log(setOfLanguages);

// Bir kümeye eleman eklemek

let sirketler = new Set(); // boş küme oluşturma

console.log(sirketler); // 0

sirketler.add(`google`);
sirketler.add(`facebook`);
sirketler.add(`whatsapp`);
sirketler.add(`instagram`);
sirketler.add(`amazon`);
sirketler.add(`oracle`);

console.log(sirketler.size); // 6
console.log(sirketler); // {"google","facebook","whatsapp","instagram","amazon","oracle"}

// Bir set e eleman eklemek için döngü de kullanabiliriz

let sirketler2 = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];

let setOfSirketler = new Set();

for (let sirket3 of sirketler2) {
  setOfSirketler.add(sirket3);
}

console.log(setOfSirketler); // {"Google","Facebook","Amazon","Oracle","Microsoft"}

// Bir öğeyi kümeden (yani set'ten) silme

console.log(setOfSirketler.delete(`Google`));

console.log(setOfSirketler.size); // 4

// Set ten bir elemanı kontrol etme

console.log(setOfSirketler.has(`Apple`)); // false

// Seti temizleme
setOfSirketler.clear();
console.log(setOfSirketler); // {}

//  küme birleşimi  (A U B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let c = [...a, ...b]; // bu metot dizi kopyalama için kullanıldı. yani iki diziyi c içine kopyaladık

console.log(c); // [1,2,3,4,5,3,4,5,6]

let cSet = new Set(c);

console.log(cSet); // {1,2,3,4,5,6}

// Küme kesişimi (A ∩ B)

let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4, 5, 6];

let B1 = new Set(b1);

let c1 = a1.filter((num) => B1.has(num));
let C1 = new Set(c1);

console.log(C1); // {3,4,5}

// Küme Farkı (A \ B)

let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let B2 = new Set(b2);

let c2 = a2.filter((num) => !B2.has(num));

let C2 = new set(c2);

console.log(C2); // {1,2}

// ****** Map => Map, anahtar değere sahip veriler tutan bir yapıdır(collection). Tıpkı Obje gibi. Fakat aralarındaki en önemli farklardan biri Mapler anahtar değer olarak herhangi bir tipte olabilirler.

//  Ana fonksiyonlar şu şekildedir:

// new Map() – map yaratır.
// map.set(key, value) – Anahtara değer atar.
// map.get(key) – Anahtarın değerini döndürür. Eğer öyle bir anahtar yoksa undefined döndürür.
// map.has(key) – Eğer öyle bir anahtar varsa true yoksa false döndürür.
// map.delete(key) – Verilen anahtara ait değeri siler.
// map.clear() – Mapin içini temizler.
// map.size – anlık eleman sayısını döndürür.

// Boş bir Harita(map) Oluşturma

let map = new Map();

console.log(map); // {}

// Diziden Harita Oluşturma

let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

let map1 = new Map(countries);

console.log(map1);

console.log(map1.size);

// Haritaya değer ekleme

let countriesMap = new Map();

console.log(countriesMap); // 0

countriesMap.set(`turkey`, `ankara`);
countriesMap.set(`diyarbakir`, `baglar`);

// Map'ten value çekme

console.log(countriesMap.get(`turkey`)); //ankara

// map te  keyi kontrol etme

console.log(countriesMap.has(`turkey`)); // true

// Döngü kullanarak map ten tüm value leri alma

for (let cn of countriesMap) {
  console.log(cn);
} // ['turkey', 'ankara']

for (let [cn, city] of countriesMap) {
  console.log(cn, city);
} // turkey ankara
