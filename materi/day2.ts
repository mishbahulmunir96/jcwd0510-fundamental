// ===== IF STATEMENT
// syntax
/* if (condition) {
    code block
}*/

const age: number = 120;

if (age >= 17) {
  console.log("Anda bisa membuat KTP");
}

// ELSE STATEMENT
const age1: number = 11;

if (age1 >= 17) {
  console.log("Anda bisa membuat KTP");
} else {
  console.log("Anda belum bisa membuat KTP");
}

// ELSE IF STATEMENT
const input: string = "c";
const grade: string = input.toUpperCase();

if (grade === "A") {
  console.log("Nilai Bagus");
} else if (grade === "B") {
  console.log("Nilai lumayan bagus");
} else if (grade === "C") {
  console.log("Nilai Jelek");
} else {
  console.log("nilai tidak diketahui");
}

// =====SWITCH CASE

const day: string = "kamis";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  case "kamis":
    console.log("Hari kamis");
    break;
  default:
    console.log("Hari gak tau");
}

// ====LOGICAL OPERATOR
// && -> and
// || -> or
// ! -> not

// OR -> salah satu harus bernilai true untuk mendapakan hasil true
const car: string = "mercy";

if (car === "BMW" || car === "mercy") {
  console.log("Mobil jerman");
} else {
  console.log("mobil jepang");
}

//  AND -> keduanya harus bernilai true utk mendapatkan hasil true
const umur: number = 12;
const punyaSIM: boolean = true;

if (umur >= 18 && punyaSIM === true) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("tidak boleh bawa kendaraan");
}

// NOT -> membalikkan nilai boolean
const isSunny = true;
const isRaining = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ============ TERNARY OPERATOR
const str: string = "p";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
  str === "javascript"
    ? "javascript"
    : str === "phyton"
    ? "phyton"
    : "not found"
);

// ======== LOOP STATEMENT (PERULANGAN)

// type loop : for loop, while loop. do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1: menginisialisasikan variabel dari looping itu sendiri
// statement 2: mendefine kondisi dari looping tsb
// statement 3: kode yang dieksekui diakhir setiap iterasi
//
// syntax : for(statement1;statement2,statement3){
//      code block yang akan di lopping
// }

for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

// WHILE LOOP
let i: number = 1;
while (i < 10) {
  console.log("hello world");
  i++;
}
// while loop akan mengecek kondisi terlebih dahulu sebelum menjalankan blok kode

// DO WHILE LOOP
let count: number = 1;
do {
  console.log("iterasin ke:" + count);
  count++;
} while (count <= 5);
// do while loop akan menjalankan blok kode terlebih dahulu baru mengecek kondisinya

// ==================================================================================
// pertanyaan perbedaan while loop dan do while loop akan muncul dalam selection test
// ==================================================================================

// =========================== BREAK
// untuk menghentikan loop
let sum: number = 0;
while (true) {
  console.log("sum: " + sum);

  if (sum >= 5) break;
  sum++;
}

// ===========================CONTINUE
// untuk skip pada looping
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
