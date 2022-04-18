//  Template Literals (önceki adıyla Template Strings), kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.

// eski kullanım aşağıdaki gibidir.

// "Eski string"
// `yeni string örneğidir.`

// ************** Sağladığı Faydalar
//1- Çok Satırlı Dize Yazımı:

let yeniString = `türkiyenin şehirleri: 
ankara
diyarbakır
istanbul
konya`;

// 2- İnterpolasyon , metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.

let isim = `arjin`;
let soyad = `albay`;

console.log(`Benim adım ${isim} ${soyad}`);

//3- HTML Şablonları

let ad2 = `arjin`;
let soyad2 = `albay`;
let gozRengi = `kahve`;
let yas = 26;

let kisi = `
<p>${ad2}</>
<p>${soyad2}</>
<p>${gozRengi}</>
<p>${yas}</>`;

document.body.innerHTML = kisi;

//alıştırma

let kitap = {
  ad3: "fırtına",
  yazar: "ben",
  tarih: 1996,
};

let books = `
<table border>
  <thead>
    <tr>
      <th>kitap</th>
      <th>${kitap.ad3}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>yazar</td>
      <td>${kitap.yazar}</td>
    </tr>
    <tr>
      <td>tarih</td>
      <td>${kitap.tarih}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
`;

document.body.innerHTML = books;
