// BigInt – Büyük Sayı

// (253-1) veya daha az -(253-1) negatifler için kullanılan tür

// Sondaki "n" bu değerin bir BigInt olduğu anlamına gelir
let bigInt = 1234567890123456789012345678901234567890n;

//******************************* ********************************************/

// String – Karakter Dizisi

let str = "Merhaba";
let str2 = "Tek tırnak da çalışır";
let phrase = `değer gömülebilir ${str}`;

// Çift tırnak ile tek tırnak “basit” tırnaklardır. Aralarında bir farklılık yoktur.

// Ters tırnak ise “genişletilmiş fonksiyonlu” tırnaktır. Bunu kullanarak karakter dizisi içerisine ${...} gibi başka bir dizi yerleştirebiliriz. Örneğin:

let isim = "ahmet";

// değişken gömme

alert(`Hello ${isim} !`); //hello ahmet !

// ifade gömme
alert(`sonuc :  ${6 + 9}`);
