// Error Handling => Bazı zamanlar, tanımsız bir değişkene erişmeye veya tanımsız bir işlevi çağırmaya çalıştığınızda bir çalışma zamanı hatası alırsınız.

// kullanım şekli
try {
  // hata verebilecek kod
} catch (err) {
  // bir hata oluşursa yürütülecek kod
} finally {
  // bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
}

try {
  let lastName = `arjin`;
  let fullName = firstName + ` ` + lastName;
} catch (err) {
  console.log(err);
} // ReferenceError: firstName is not defined at <anonymous>:3:20

try {
  let lastName = `arjin`;
  let fullName = firstName + ` ` + lastName;
} catch (err) {
  console.log(err);
} finally {
  console.log(`Her durumda çalışan kod satırı`);
} // ReferenceError: firstName is not defined at <anonymous>:3:20
// Her durumda çalışan kod satırı

// catch bloğu bir parametre alır. Catch bloğuna parametre olarak genellikle e, err veya error verilir. Bu parametre bir objedir ve name ve message anahtarlarına sahiptir.

try {
  let lastName = `arjin`;
  let fullName = firstName + ` ` + lastName;
} catch (err) {
  console.log(`name of the error`, err.name);
  console.log(`Error message`, err.message);
} finally {
  console.log(`Her durumda çalışan kod satırı`);
}
// name of the error:  ReferenceError
// Error message:  firstName is not defined
// Her durumda çalışan kod satırı

// throw => JavaScript hata oluştuğunda name ve message özelliklerine sahip Error nesnesi oluşturacaktır.JavaScript throw anahtar kelimesi ile özel hata oluşturabiliriz. JavaScript hata mesajları metin, sayı ve nesne türünden olabilir.

let yas = prompt();

try {
  if (yas == ``) throw `boş değer`;
  if (isNaN(yas)) throw `sayı değil`;
  yas = Number(yas);
  if (yas < 18) throw `yaşın 18 den küçük`;
  if (yas > 65) throw `yaşın 65 ten büyük`;
} catch (error) {
  alert(error);
}

// Error Types

// ReferenceError: Geçersiz bir başvuru oluştu hatası. Bildirilmemiş bir değişken kullanırsak bir ReferenceError atılır.

let firstName = "Asabeneh";
let fullName = firstName + " " + lastName;

console.log(fullName); // Uncaught ReferenceError: lastName is not defined at <anonymous>:3:34

// SyntaxError: Bir sözdizimi hatası oluştu

// let square = 2 * 2
// console.log(square)
// console.log('Hello, world")

// Uncaught SyntaxError: Unexpected identifier

// TypeError: Bir tür hatası oluştu

let num = 10;
console.log(num.toLowerCase()); // Uncaught TypeError: num.toLowerCase is not a function at <anonymous>:2:17
