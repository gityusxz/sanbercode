//==========TIPE DATA==========//

// let nama = "iyusxz" //-----> String
// let usia = 21 //--------->Number
// let todayIsFriday = false //------->Boolean

// console.log(nama)
// console.log(usia)
// console.log(todayIsFriday)
//console.log("nama saya adalah " + nama + " usia saya yaitu " + usia)

//==============>><<==============//

//===========OPERATOR============//

//Operator adalah karakter khusus yang merepresentasikan sebuah tindakan. operator terbagi kedalam berbagai jenis
// 1. Operator aritmatika
//    ialah operator yang melibatkan operasi matematika seperti (+,*,-,/,%) --> modulus adalah sisa bagi. Contohnya 5%3 hasilnya adalah 2, 100%5 -> 0
// 2. Operator Assigment (=)
//    Operator untuk mendaftarkan atau meng-assign nilai ke dalam suatu variabel
//    contoh ==> let angka = 10
// 3. Operator Perbandingan
//    Operator  yang membandingkan suatu nilai dengan nilai yang lain. Hasil dari perbandingan ini akan dikembalikan dalam tipe data boolean true atau false.

//    -> Equal Operator (==)
//    let angka = 100
//    console.log(angka == 100) // true
//    console.log(angka == 20) // false
    
//   -> Not Equal (!= )
//    let sifat = "rajin"
//    console.log(sifat != "malas") // true
//    console.log(sifat != "bandel") //true 

//    -> Strict Equal (===) Selain membandingkan dua nilai nya, strict equal juga membandingkan tipe datanya apakah sama atau tidak 
//    var angka = 8
//    console.log(angka == "8") // true, padahal "8" adalah string.
//    console.log(angka === "8") // false, karena tipe data nya berbeda
//    console.log(angka === 8) // true

//    -> Strict not Equal ( !== ) Kebalikan dari strict equal. 
//    var angka = 11
//    console.log(angka != "11") // false, padahal "11" adalah string
//    console.log(angka !== "11") // true, karena tipe datanya berbeda
//    console.log(angka !== 11) // false

//    -> Kurang dari & Lebih Dari ( <, >, <=, >=)
//    var number = 17
//    console.log( number < 20 ) // true
//    console.log( number > 17 ) // false
//    console.log( number >= 17 ) // true, karena terdapat sama dengan
//    console.log( number <= 20 ) // true

//    -> Operator Kondisional, Operator yang mengkombinasikan dua nilai kebenaran . Terdapat operator AND (&&) dan OR (||) 
//      -> OR ( || )
//      console.log(true || true); // true
//      console.log(true || false); // true
//      console.log(true || false || false); // true
//      console.log(false || false); // false

//      -> AND ( && )
//      console.log(true && true); // true
//      console.log(true && false); // false
//      console.log(false && false); // false
//      console.log(false && true && true); // false
//      console.log(true && true && true); // true 

// String adalah tipe data yang berisi karakter-karakter dibungkus dalam tanda petik ("" atau '' ). Karakter-karakter pada suatu string dapat diakses dengan menggunakan indeks atau posisi karakter berada. Indeks pada string selalu mulai dari 0.
// var sentences = "Javascript" 
// console.log(sentences[0]) // "J"
// console.log(sentences[2]) // "v"
// String pada javascript juga memiliki property dan methods tertentu. Property dan methods tersebut bisa kita gunakan dalam memanipulasi data agar sesuai dengan program yang kita inginkan.

//==============>><<==============//

//======= String Properties =======//

//  .length
//  mengembalikan panjang atau jumlah karakter pada suatu string.
//  -> var word = "Javascript is awesome"
//     console.log(word.length) // 21 

//==============>><<==============//

//======= String Methods =======//

//  .charAt([indeks]) -> Mengembalikan karakter pada indeks yang diinginkan  
//   console.log('i am a string'.charAt(3)); // 'm'

//  .concat([string]) -> Menggabungkan beberapa string dan mengembalikannya menjadi string baru
//   var string1 = 'good';
//   var string2 = 'luck';
//   console.log(string1.concat(string2)); // goodluck

//  .indexOf([string/karakter]) -> Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.
//   var text = 'dung dung ces!';
//   console.log(text.indexOf('dung'));  // 0
//   console.log(text.indexOf('u'));     // 1
//   console.log(text.indexOf('jreng')); // -1

//  .substring([indeks awal], [indeks akhir (optional)])
//   Mengembalikan potongan string mulai dari indeks pada parameter pertama (indeks awal) sampai dengan indeks pada parameter kedua (indeks akhir). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
//   var car1 = 'Lykan Hypersport';
//   var car2 = car1.substring(6);
//   console.log(car2); // Hypersport

//   .substr([indeks awal], [jumlah karakter yang diambil (optional)])
//    Mendapatkan potongan string mulai dari indeks pada parameter pertama (indeks awal) dengan jumlah indeks pada parameter kedua (jumlah karakter). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
//   var motor1 = 'zelda motor';
//   var motor2 = motor1.substr(2, 2);
//   console.log(motor2); // ld

//   .toUpperCase() -> Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.
//    var letter = 'This Letter Is For You';
//    var upper  = letter.toUpperCase();
//    console.log(upper); // THIS LETTER IS FOR YOU

//   .toLowerCase() -> Mengembalikan string baru yang sudah dihapus karakter whitespace (" ") pada awal dan akhir string tersebut.
//    var username    = ' administrator ';
//    var newUsername = username.trim(); 
//    console.log(newUsername) // 'administrator'

//==============>><<==============//

//=========== Mengubah tipe data dari dan ke String =========//

//  Di Javascript terkadang kita ingin mengubah sebuah data string menjadi tipe data lain atau sebaliknya. Contoh diperoleh data angka tapi dalam tipe data String maka kita dapat mengubah string tersebut menjadi tipe data angka.

// String([angka/array])
// Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan data dalam tipe data String dari parameter yang diberikan.
// var int  = 12;
// var real = 3.45;
// var arr  = [6, 7, 8];

// var strInt  = String(int);
// var strReal = String(real);
// var strArr  = String(arr);

// console.log(strInt);  // '12'
// console.log(strReal); // '3.45'
// console.log(strArr);  // '6,7,8'


// .toString()
// Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.
// var number = 21;
// console.log(number.toString()); // '21'
// var array = [1,2];
// console.log(array.toString());  // '1,2'


// Number([String])
// Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik (separator) bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).
// var number1 = Number("90");   // number1 = 90
// var number2 = Number("1.23"); // number2 = 1.23
// var number3 = Number("4 5");  // number3 = NaN


// parseInt([String]) dan parseFloat([String])
// Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.
// var int  = '89';
// var real = '56.7';
// var strInt_1 = parseInt(int);  // strInt_1 = 89
// var strInt_2 = parseInt(real); // strInt_2 = 56
// var strReal_1 = parseFloat(int); // strReal_1 = 89
// var strReal_2 = parseFloat(int); // strReal_2 = 56.7

//==============>> <<==================//


//============== Kondisional dengan if / else if / else ==========//


// Contoh 1 menjalankan kode jika premis bernilai true
// if ( true ) {
//     console.log("jalankan code")
// }

// Contoh 2 kode tidak dijalankan jika premis bernilai false
// if ( false ) {
//     console.log("code tidak dijalankan")
// }

// Contoh 3 Premis dengan perbandingan suatu nilai
// var mood = "happy"
// if ( mood == "happy" ) {
//     console.log("hari ini aku bahagia!")
// }

// Di dalam kondisional dikenal juga dengan istilah branching atau percabangan.
// Dengan percabangan kita bisa mengecek nilai kebenaran dari berbagai premis yang kita sediakan.
// cara menambahkan kondisi atau premis lain dari premis pertamanya adalah dengan sintaks else . 
// Contohnya ketika kita diminta untuk membeli telur dan buah ke minimarket oleh ibu kita 
// maka akan banyak sekali kondisi atau kemungkinan yang terjadi dalam perjalanan 
// kita membeli barang - barang tersebut di supermarket.


// Contoh 4 Branching sederhana
// var minimarketStatus = "open"
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
// } else {
//     console.log("minimarketnya tutup")
// }

// Kondisi else di atas adalah kondisi selain minimarketStatus == "open" .

// Contoh 5 Branching dengan kondisi
// var minimarketStatus = "close"
// var minuteRemainingToOpen = 5
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
// } else if ( minuteRemainingToOpen <= 5 ) {
//     console.log("minimarket buka sebentar lagi, saya tungguin")
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }

// contoh di atas kita memberikan kondisi tambahan yaitu jika minimarket akan buka kurang atau sama dengan 5 menit lagi maka saya akan menunggu.

// Selain Branching atau percabangan, kondisional juga dapat memiliki sarang atau tumpukan yaitu terdapat kondisional di dalam sebuah kondisional.

// Contoh 6 Kondisional bersarang
// var minimarketStatus = "open"
// var telur = "soldout"
// var buah = "soldout" 
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
//     if(telur == "soldout" || buah == "soldout" ) {
//         console.log("belanjaan saya tidak lengkap")    
//     } else if( telur == "soldout") {
//         console.log("telur habis")
//     } else if ( buah == "soldout" ) {
//         console.log("buah habis")
//     }
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }

// pada kondisi di atas minimarketnya sudah buka lalu cek kondisi 
//selanjutnya cek apakah telur atau buah habis.Karena kondisinya adalah jika telur ATAU buah salah satunya ada yang soldout maka belanjaan saya lengkap.Demikian seterusnya akan mengecek kondisi - kondisi yang disediakan dalam logika program yang dibuat.

//==============>> <<====================//


//============= Kondisional dengan Switch Case ============//

// Cara lain untuk melakukan pengecekan kondisi atau conditional adalah dengan 
// switch case. Penggunaan switch case mirip seperti kita menyalakan tombol 
// switch pada remote. Jika kondisi tombol yang dipijit adalah tombol dengan 
// nomer tertentu maka akan menjalankan prorgram tertentu
    
// Contoh 7 Kondisional dengan switch case
// var buttonPushed = 1;
// switch(buttonPushed) {
//   case 1:   { console.log('matikan TV!'); break; }
//   case 2:   { console.log('turunkan volume TV!'); break; }
//   case 3:   { console.log('tingkatkan volume TV!'); break; }
//   case 4:   { console.log('matikan suara TV!'); break; }
//   default:  { console.log('Tidak terjadi apa-apa'); }}

// Pada kode di atas, switch akan mengevaluasi nilai buttonPushed 
// jika case yang ditemui cocok dengan nilai yang diberikan 
// maka kode pada case tersebut akan dijalankan sehingga 
// pada console akan dimunculkan "matikan TV!".
// Pada setiap case terdapat break yang berfungsi untuk menghentikan proses
// switch agar tidak menjalankan case yang lain.Juga terdapat default 
// yaitu kondisi dimana tidak ditemukan case yang sesuai.

//============>><<===============//


//=============== Function =============//

// Function adalah sebuah blok kode yang disusun sedemikian rupa 
// untuk menjalankan sebuah tindakan.Blok kode ini dibuat untuk dapat bisa digunakan kembali.
// Cara atau bentuk penulisan function adalah sebagai berikut:

// function nama_function(parameter 1, parameter 2, ...) {
//     [Isi dari function berupa tindakan]
//     return [expression];
//   }

// Kode di atas tidak dapat kita copy - paste kan langsung, melainkan 
// hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan 
// tindakan dan sebelum function berakhir, function bisa mengembalikan nilai 
// dengan cara menambahkan sintaks return.

// Kita juga dapat mengirimkan nilai ke dalam sebuah function 
// dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. 
// Untuk mengirimkan nilai lebih dari satu, gunakan tanda, sebagai pemisah.

// Contoh Function 1: Function sederhana tanpa return
// function tampilkan() {
//   console.log("halo!");
// }
 // tampilkan();

// Contoh Function 2: Function sederhana dengan return
// function munculkanAngkaDua() {
//   return 2
// }
 // var tampung = munculkanAngkaDua();
// console.log(tampung)

// Contoh Function 3: Function dengan parameter
// function kalikanDua(angka) {
//   return angka * 2
// }
 // var tampung = kalikanDua(2);
// console.log(tampung) 

// Contoh Function 4: Pengiriman parameter lebih dari satu
// function tampilkanAngka(angkaPertama, angkaKedua) {
//   return angkaPertama + angkaKedua
// }
// console.log(tampilkanAngka(5, 3))

// Contoh Function 5: Inisialisasi parameter dengan nilai default
// function tampilkanAngka(angka = 1) {
//   return angka
// }
// console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
// console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

// Waspadai pengiriman parameter yang UNDEFINED!

// Kita juga dapat menampung function sebagai variable 
// dengan sebuah bentuk function yang dinamakan Anonymous Function.

// var fungsiPerkalian = function(angkaPertama, angkaKedua) {
//   return angkaPertama * angkaKedua
// }
// console.log(fungsiPerkalian(2, 4))

//==============>><<==================//


//============ Loop ================//

//-------> While-loop
// While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.
// Berikut adalah cara atau struktur penulisan while-loop:

// while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. 
// // Berupa boolean atau true/false.
//   [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
// }

// Pada while-loop, statement while akan mengambil sebuah nilai true atau false 
// dari hasil kondisi yang diberikan.Apabila statement while mendapatkan nilai true,
// maka proses yang berada didalam curly bracket({}) akan dijalankan.
// Looping akan terus dilakukan selama kondisi while-loop masih true.

// Untuk mencegah looping berjalan terus - menerus, dilakukan sebuah proses yang akan 
// mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan 
// looping dengan menghasilkan kondisi yang false.

// Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

// var flag = 1;
// while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
//   console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
//   flag++; // Mengubah nilai flag dengan menambahkan 1
// }

// Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

// var deret = 5;
// var jumlah = 0;
// while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
//   jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
//   deret--; // Mengubah nilai deret dengan mengurangi 1
//   console.log('Jumlah saat ini: ' + jumlah)
// }
 
// console.log(jumlah);


//-------> For-loop
// For - loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. 
// Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

// Berikut adalah cara atau struktur penulisan for-loop:
// for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
//   [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
// } 

// Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana
// for(var angka = 1; angka < 10; angka++) {
//   console.log('Iterasi ke-' + angka);
// } 

// Contoh Looping For-loop 2 Looping Mengembalikan Angka Total
// var jumlah = 0;
// for(var deret = 5; deret > 0; deret--) {
//   jumlah += deret;
//   console.log('Jumlah saat ini: ' + jumlah);
// }
// console.log('Jumlah terakhir: ' + jumlah);

// Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1
// for(var deret = 0; deret < 10; deret += 2) {
//   console.log('Iterasi dengan Increment counter 2: ' + deret);
// }
 // console.log('-------------------------------');
 // for(var deret = 15; deret > 0; deret -= 3) {
//   console.log('Iterasi dengan Decrement counter : ' + deret);
// } 


// Waspadai Infinite Looping!

// Dengan sengaja atau tidak sengaja, kode kamu mungkin dapat menghasilkan infinite looping, 
// atau looping yang tidak akan pernah berhenti.Bila ini terjadi, segera periksa statement kondisi kamu.

// var flag = 1;
// while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
//   console.log('Iterasi ke-' + flag);
// } 

//=============>><<====================//


//============= Metode Array ====================//

// Berikut ini adalah beberapa metode atau built-in functions yang dimiliki oleh tipe data array:

//  -->push: menambah 1 nilai ke array ke index paling belakang
//  -->pop: menghapus 1 nilai dari array index paling belakang
//  -->unshift: menambah 1 nilai ke array index paling depan (index 0)
//  -->shift: menghapus 1 nilai dari array index paling depan (index 0)
//  -->join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
//  -->sort: mengurutkan elemen di dalam array sesuai alphabet
//  -->slice: mengambil beberapa lapis data
//  -->splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
//  -->split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan

// Cara menggunakan metode array adalah 
// dengan menggunakan tanda dot(.) contohnya sbb:
// var feeling = ["dag", "dig"]
// feeling.push("dug") // menambahkan nilai "dug" ke index paling belakang
// feeling.pop() // menghapus nilai pada elemen terakhir array

// Beberapa metode array ada yang mengembalikan nilai array lama yang sudah diperbarui(array lama di - update) 
// dengan metode tersebut, dan ada pula metode array yang mengembalikan sebuah array baru dan 
// tidak mengubah data pada array yang lama(array baru yang serupa dengan array lama).
// Sifat seperti ini disebut mutable atau immutable.

// .push()
// Push adalah metode array untuk menambahkan nilai di belakang elemen terakhir di array. 
// metode push menerima sebuah parameter yaitu nilai yang ingin kita tambahkan ke dalam array.

// var numbers = [0, 1, 2]
// numbers.push(3)
// console.log(numbers) // [0, 1, 2, 3]
// // Bisa juga memasukkan lebih dari satu nilai menggunakan metode push
// numbers.push(4, 5)
// console.log(numbers) // [0, 1, 2, 3, 4, 5] 

// .pop()
// Pop adalah kebalikan dari push yaitu menghapus nilai elemen paling terakhir dari sebuah array. 
// metode Pop tidak menerima parameter apapun sehingga metode pop hanya bisa mengeluarkan satu elemen saja 
// yaitu yang paling terakhir dari sebuah array.

// var numbers = [0, 1, 2, 3, 4, 5]
// numbers.pop() 
// console.log(numbers) // [0, 1, 2, 3, 4] 

// .unshift()
// Unshift yaitu menambahkan nilai pada index ke-0 sehingga elemen-elemen sebelumnya bergeser.

// var numbers = [0, 1, 2, 3]
// numbers.unshift(-1) 
// console.log(numbers) // [-1, 0, 1, 2, 3]

// .shift()
// Shift kebalikan dari unshift yaitu menghapus nilai pada elemen terdepan dari sebuah array. 
// metode Shift tidak menerima parameter apapun.

// var numbers = [ 0, 1, 2, 3]
// numbers.shift()
// console.log(numbers) // [1, 2, 3] 

// .sort()
// Sort adalah metode untuk mengurutkan nilai pada array. 
// Secara otomatis, sort akan mengurutkan secara ascending(dari rendah ke tinggi) dan diurutkan berdasarkan unicode dari karakter.
// Urutan unicode artinya ada karakter yang secara nilai lebih besar dibandingkan dengan karakter yang lainnya.
// contohnya adalah karakter "b" akan lebih besar daripada "a", karakter "c" lebih besar daripada karakter "b", dst.

// var animals = ["kera", "gajah", "musang"] 
// animals.sort()
// console.log(animals) // ["gajah", "kera", "musang"]

// Hal ini akan bermasalah jika kita ingin mengurutkan angka. 
// Secara otomatis metode sort akan membandingkan karakter terdepan dari sebuah angka.

// var numbers = [12, 1, 3]
// numbers.sort()
// console.log(numbers) // [1, 12, 3] 

// Untuk mengatasi masalah tersebut, metode sort dapat menerima 
// sebuah parameter berupa function untuk membandingkan value dari elemen yang akan diurutkan.contohnya sebagai berikut:

// var numbers = [12, 1, 3]
// // Mengurutkan secara Ascending
// numbers.sort(function (value1, value2) { return value1 - value2 } ) ; 
// console.log(numbers) // [1, 3, 12]
 
// // Mengurutkan secara Descending
// numbers.sort(function (value1, value2) { return value2 - value1 } ) ;
// console.log(numbers) // [12, 3, 1] 

// .slice()
// slice adalah metode untuk mengambil irisan dari sebuah array. 
// Metode slice bisa menerima satu atau dua parameter.
// Parameter pertama adalah nomer index pertama yang akan kita ambil sebagai irisan, 
// sedangkan parameter kedua adalah nomer index terakhir yang ingin kita ambil sebagai irisan.

// var angka = [0, 1, 2, 3]
// var irisan1 = angka.slice(1,3) 
// console.log(irisan1) //[1, 2, 3]
// var irisan2 = angka.slice(0,2)
// console.log(irisan2) //[0, 1, 2] 

// Jika parameter kedua tidak diisi maka secara otomatis slice akan mengiris array 
// dari indeks di paramer pertama sampai ke indeks terakhir array tersebut.

// var angka = [0, 1, 2, 3]
// var irisan3 = angka.slice(2)
// console.log(irisan3) // [2, 3] 

// Jika diperhatikan, metode slice tidak mengubah Array yang awal dan hasil irisan array 
// dapat kita tampung kembali ke variable yang baru.Oleh karena itu metode Slice juga berfungsi 
// untuk membuat salinan atau "shallow copy" dari sebuah array.Cara membuat shallow copy 
// dengan metode slice yaitu dengan tanpa memberikan parameter apapun pada metode slice.

// var angka = [0, 1, 2, 3]
// var salinAngka = angka.slice()
// console.log(salingAngka) // [0, 1, 2, 3]

// .splice()
// Splice yaitu metode untuk menghapus dan/atau menambahkan nilai elemen pada array. 
// Metode splice bisa menerima parameter sebanyak dua atau lebih parameter.Jika ingin menggunakan splice 
// untuk menghapus elemen pada index tertentu maka digunakan 2 paramater.
// Jika ingin menggunakan splice untuk menambahkan elemen pada index tertentu maka digunakan tiga parameter.

// array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);

// Berikut contoh penggunaan metode splice()
// var fruits = [ "banana", "orange", "grape"]
// fruits.splice(1, 0, "watermelon") 
// console.log(fruits) // [ "banana", "watermelon", "orange", "grape"]

// Contoh di atas berarti kita mulai mengubah array fruits dari indeks no 1, 
// dan melakukan penghapusan nilai sebanyak 0(yang berarti tidak menghapus apapun), 
// dan menambahkan nilai "watermelon" pada indeks tersebut.

// var fruits = [ "banana", "orange", "grape"]
// fruits.splice(0, 2)
// console.log(fruits) // ["grape"]

// Contoh di atas berarti kita mulai mengubah array 
// fruits dari indeks ke - 0 dan melakukan penghapusan data sebanyak 2 elemen.

// .split() dan .join()
// Metode split yaitu memecah sebuah string sehingga menjadi sebuah array. 
// Split menerima sebuah parameter berupa karakter yang menjadi separator untuk memecah string.

// var biodata = "name:john,doe" 
// var name = biodata.split(":")
// console.log(name) // [ "name", "john,doe"] 

// Metode join yaitu kebalikan dari split yaitu mengubah sebuah array menjadi string 
// dengan cara menggabungkan(join) seluruh elemen array menjadi satu dengan sebuah karakter pemisah 
// yang dikirim melalui parameter.contohnya sebagai berikut:

// var title = ["my", "first", "experience", "as", "programmer"] 
// var slug = title.join("-")
// console.log(slug) // "my-first-experience-as-programmer"


//=============>><<====================//


//============= Multidimensional Array ====================//

// Multidimensional array atau array multidimensi adalah array yang berisi array di dalamnya. 
// Jumlah dimensi bergantung seberapa dalam array tersebut memiliki array di dalamnya.
// Cara akses nilai dari array multidimensi sama seperti array satu dimensi seperti biasa namun 
// jumlah indeksnya terdapat sebanyak dimensi nya.

//  var arrayMulti = [ 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// // Maka sebagai gambaran, indeks dari array tersebut adalah 
// /*
//     [
//         [(0,0), (0,1), (0,2)],
//         [(1,0), (1,1), (1,2)],
//         [(2,0), (2,1), (2,2)]
//     ] 
// */
// console.log(arrayMulti[0][0]) // 1 
// console.log(arrayMulti[1][0]) // 4
// console.log(arrayMulti[2][1]) // 8    

//=============>><<====================//


