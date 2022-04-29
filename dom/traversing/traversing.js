let sonuc;

ul = document.getElementById("task-list");

// children, firstElementChild ,lastElementChild
sonuc = ul.children;
sonuc = ul.children[0];

sonuc = ul.firstElementChild;
sonuc = ul.lastElementChild;

// parentElement => id kısmını yazıp bi üstündeki parentine ulaşabiliriz.

sonuc = document.getElementById("titleid").parentElement;

// console.log(sonuc);

// nextElementSibling, previousElementSibling => eş değer id deki elementlere ulaşabiliriz. kısaca kardeşlerini bulacağız.

sonuc =
  document.getElementById("titleid").nextElementSibling.nextElementSibling
    .previousElementSibling;

// istediğimiz kadar kullanabiliriz. ilk yazdığımız bize ikinci kardeşi getirdi. 2. yazdığımız ise 3. kardeşe gitti. son yazdığımız ise önceki kardeşe yani 2. kardeşe geri götürdü.

console.log(sonuc);
