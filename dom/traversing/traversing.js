let sonuc;

showList = document.getElementById(`task-list`);

// children, firstElementChild ,lastElementChild
sonuc = showList.children;
sonuc = showList.firstElementChild;
sonuc = showList.lastElementChild;

// parentElement => id kısmını yazıp bi üstündeki parentine ulaşabiliriz.

sonuc = document.getElementById(`titleid`).parentElement;

// nextElementSibling, previousElementSibling => eş değer id deki elementlere ulaşabiliriz. kısaca kardeşlerini bulacağız.

sonuc =
  document.getElementById(`titleid`).nextElementSibling.nextElementSibling
    .previousElementSibling;

// istediğimiz kadar kullanabiliriz. ilk yazdığımız bize ikinci kardeşi getirdi. 2. yazdığımız ise 3. kardeşe gitti. son yazdığımız ise önceki kardeşe yani 2. kardeşe geri götürdü.
