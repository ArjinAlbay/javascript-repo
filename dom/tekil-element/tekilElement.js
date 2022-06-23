let sonuc;

sonuc = document.getElementById(`first-title`);
// elementin tümünü alır => h1#first-title.title

sonuc = document.getElementById(`first-title`).id;
// sadece id adını aldı. => first-title

sonuc = document.getElementById(`first-title`).className;
// sadece id si first-title olan ilk elementin classname özelliğini getirdi. => title

sonuc = document.getElementById(`first-title`).classList;
// sadece id si first-title olan ilk elementin classname listesini getirdi. => title

sonuc = document.getElementsByClassName(`title`);
// class adı title olan listeyi getirir.

sonuc = document.getElementsByTagName(`h1`); // h1 tagı bulunan tüm listeyi getirir.

document.getElementById("first-title").style.fontSize = "15px";
document.getElementById("first-title").style.color = "gray";

document.getElementById("first-title").innerText; // içeriği değiştirebilirsin ama bir başlığı paragraf yapamazsın. içerik şekli değil içerik değişir.
document.getElementById("first-title").innerHTML =
  "<p>innerhtml ile başlık paragrafa dönüştü</p>"; // içerik şekli değişir. h1 p etiketine dönüştü.

sonuc = document.querySelector(`#second-title`); // id si second-title olan ilk elemanı seçip getirdi.

sonuc = document.querySelector(`.title`); // class adı title olan ilk elemanı seçip getirdi.

sonuc = document.querySelector(`div`); // bulduğu ilk div etiketini alıp getirdi.

sonuc = document.querySelectorAll(`.title`);
// class adı title olan tüm classları listeler.

sonuc = document.querySelector("li");
sonuc = document.querySelector("li:first-child");
sonuc = document.querySelector("li:last-child");
sonuc = document.querySelector("li:nth-child(2)");

console.log(sonuc);
