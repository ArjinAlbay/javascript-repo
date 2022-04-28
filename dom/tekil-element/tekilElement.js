let sonuc;

sonuc = document.getElementById("first-title").id; // id sı title olanı bulmak için kullanırız.
sonuc = document.getElementById("first-title").className; // class adını verir
sonuc = document.getElementById("first-title").classList; // iki yada üç class olabilir. bize dizi olarak verir sonucu

document.getElementById("first-title").style.fontSize = "15px";
document.getElementById("first-title").style.color = "gray";

document.getElementById("first-title").innerText; // içeriği değiştirebilirsin ama bir başlığı paragraf yapamazsın. içerik şekli değil içerik değişir.
document.getElementById("first-title").innerHTML = "<p>iyiyim sen</p>"; // içerik şekli değişir. h1 p etiketine dönüştü.

sonuc = document.querySelector("#second-title"); // bulduğu ilk id
sonuc = document.querySelector(".title"); // bulduğu ilk class
sonuc = document.querySelector("div"); // bulduğu ilk etiket

sonuc = document.querySelector("li");
sonuc = document.querySelector("li:first-child");
sonuc = document.querySelector("li:last-child");
sonuc = document.querySelector("li:nth-child(2)");

console.log(sonuc);
