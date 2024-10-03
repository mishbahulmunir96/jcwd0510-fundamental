// versi JS
const message = "Hello World!";

// versi TS
const message1: number = 2;

// ======== string build in metthod
const nama: string = "Siti khodija";
const nama2: string = " metal";

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("S", "o")); // mengganti huruf "S" pertama yang ditemukan(hanya satu huruf)
console.log(nama.replaceAll("i", "o")); // mengganti semua huruf "i"
console.log(nama.split(""));
console.log(nama.concat(nama2));
console.log(nama.slice(0, 3)); //parameter pertama sbg awal, kedua sebagai batas (hanya batas)
console.log(nama.slice(3)); // jika hanya satu parameter maka akan menjadi start, sampai index terakhir

const nama1: string = nama.toLowerCase();
console.log(nama1);

// ===== TEMPLATE LITERALS / template string
const nama4: string = "jack";
const message2: string = `Welcome ${nama4}`;

console.log(message2);
console.log("Welcome" + " " + nama4);

// =========== NUMBER BUILD IN METHODE
const angka: string = "2000";
Number(angka);

console.log(typeof angka);
console.log(typeof Number(angka));
console.log(typeof parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ======== Type conversation

// String conversation
const angka1: number = 20;
console.log(String(123));
console.log(angka1.toString());

// boolean conversation
console.log(Boolean(1)); // selain angka 0 pasti true
console.log(Boolean(0)); // 0 pasti bernilai true
console.log(Boolean("")); //stirng kososng pasti false
console.log(Boolean(" ")); //string berisi apapun pasti true
console.log(Boolean("false"));

// ========== date data types
const now: Date = new Date();

// get Methode
console.log(now); //data yg diambil adalah zona waktu UTC
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

// set Methode
now.setDate(10); // setting tanggal
now.setMonth(5); //setting bulan otomatis +1
now.setFullYear(2089); //setting tahun

console.log(now);

// basic operator

const a = 20;
const b = 10;

// + penjumlahan
const c = a + b;
console.log(c);
console.log(1 + 1);
// - pengurangan
console.log(1 - 1);
// * perkalian
console.log(2 * 2);
// / pembagian
console.log(9 / 3);
// % modulo/sisa bagi
console.log(9 % 4);
// ** pangkat
console.log(2 ** 2);

// Modify in place
let n: number = 4;
n += 2; // sama dengan n = n + 2

console.log(n);

// increment & decrement
let counter: number = 2;
counter++; //increment
console.log(counter);

counter--; //decrement
console.log(counter);

// postfix dan prefix
let counter2: number = 2;
// console.log(++counter2); //prefix. ditampilkan 3, karena prosesnya ditambahkan dulu baru ditampilkan hasilnya
console.log(counter2++); //postfix. ditampilkan 2, karena prosesnya nilai dari counter2 akan ditampilkan dulu, dan proses penambahan dilakukan di belakang layar.

// ======== COMPARISON OERATOR
console.log(5 == 5);
// console.log(5 == "5");
console.log(5 === 5);
// console.log(5 === "5");
console.log(5 < 2);
console.log(5 > 2);
console.log(5 <= 2);
console.log(5 >= 2);
console.log(5 >= 5);

// =========== Math
// Math.seil => membulatkan keatas
console.log(Math.ceil(4.2));

// Math.floor => membulatkan kebawah
console.log(Math.floor(4.2));

// Math.round => membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.2));
console.log(Math.round(4.5));
console.log(Math.round(4.8));

// Math.max => mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 3, 6, 9, 8, 5, 3, 4));
// Math.min => mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1, 3, 6, 9, 8, 5, 3, 4));

// Math.abs => menghilangkan tanda negatif
console.log(Math.abs(-98));

// Math.random => menghasilkan angka acak (pecahan) antara 0 - 1
console.log(Math.random());
