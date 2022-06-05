// ******* JSON => JSON, depolama ve taşıma için hafif bir veri formatıdır. JSON, çoğunlukla bir sunucudan bir istemciye veri gönderildiğinde kullanılır. JS OBJE İLE JSON ÇOK BENZERDİR. fark olan kısım bir JSON nesnesinin anahtarının çift tırnaklı olması veya bir string olması gerektiğidir.

// Converting JSON to JavaScript Object

// JSON.parse() => JSON biçiminde oluşturulmuş bir veriyi çözüp, javascript biçimine dönüştürmek için JSON.parse metodunu kullanılır. JSON biçiminden dönüştürülen yapı veri, dizi yada bir nesne olabilir. parse dönüşümü ile  yapı javascript nesnesi olarak doğrudan kullanılabilir hale  gelmiş olur.

let usersText = `{
    "users":[
      {
        "firstName":"arjin",
        "lastName":"albay",
        "age":26,
        "email":"arjin@arjin.com"
      },
      {
        "firstName":"Mehmet",
        "lastName":"bond",
        "age":25,
        "email":"Mehmet@bond.com"
      },
      {
      "firstName":"galata",
      "lastName":"saray",
      "age":120,
      "email":"galata@saray.com"
      }
    ]
    }`;

let usersObj = JSON.parse(usersText);

console.log(usersObj);

let iller = '["İstanbul","Ankara","İzmir","Edirne"]';

let illerListesi = JSON.parse(iller);

console.log(illerListesi); // ["İstanbul","Ankara","İzmir","Edirne"]

// iç içe objeler için
let kullanici =
  '{ "adi": "Ahmet", "yasi": 35, "admin": false, "arkadaslar": [0,1,2,3] }';

kullanici = JSON.parse(kullanici);

console.log(kullanici.arkadaslar[1]); // 1

// Using a reviver function with JSON.parse()

let users = `{
  "users":[
    {
      "firstName":"arjin",
      "lastName":"albay",
      "age":26,
      "email":"arjin@arjin.com"
    },
    {
      "firstName":"Mehmet",
      "lastName":"bond",
      "age":25,
      "email":"Mehmet@bond.com"
    },
    {
    "firstName":"galata",
    "lastName":"saray",
    "age":120,
    "email":"galata@saray.com"
    }
  ]
  }`;

let usersObje = JSON.parse(users, (key, value) => {
  let newValue =
    typeof value == `string` && key != `email` ? value.toUpperCase() : value;

  return newValue;
});

console.log(usersObje); // {firstName: 'ARJIN', lastName: 'ALBAY', age: 26, email: 'arjin@arjin.com'}

// JSON.stringify =>  objeyi JSON’a çevirir.

let ogrenci = {
  adi: "Ahmet",
  yasi: 30,
  adminMi: false,
  dersler: ["html", "css", "js"],
  esi: null,
};

ogrenci = JSON.stringify(ogrenci);

alert(typeof ogrenci); // string

console.log(ogrenci); // {"adi":"Ahmet","yasi":30,"adminMi":false,"dersler":["html","css","js"],"esi":null}

// Using a Filter Array with JSON.stringify

let userOne = {
  firstName: "arjin",
  lastName: "albay",
  country: "Turkey",
  city: "Diyarbakir",
  email: "arjin@arjin.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 26,
  isMarriage: false,
  points: 30,
};

let usedFilter = JSON.stringify(userOne, [
  "firstName",
  "lastName",
  "country",
  "city",
  "age",
]);

console.log(usedFilter); // {"firstName":"arjin","lastName":"albay","country":"Turkey","city":"Diyarbakir","age":26}
