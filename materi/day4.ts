// ARRAY

// cara declare array
// const arr = [];
// const arr = new Array[];

const arr: string[] = ["A", "B", "C", "D"];
const arr2: string[] = new Array("A", "B", "C");

const arr3: number[] = [1, 2, 3];
const arr4: number[] = new Array(1, 2, 3);

// Array of object
// const studets: {name: string; email: string}[] = [
//         {name: "budy", email: "budi@mail.com"},
//     {name: "siti", email: "budi@mail.com"},
//     {name: "joko", email: "budi@mail.com"},
// ]

// interface Student {
//   name: string;
//   email: string;
// }

type Student = {
  name: string;
  email: string;
  hoby?: string; //data optional harus menggunakan ?:
  address?: Address;
};

interface Address {
  street: string;
  city: string;
}

const students: Student[] = [
  { name: "budy", email: "budi@mail.com", hoby: "rebahan" },
  {
    name: "siti",
    email: "budi@mail.com",
    address: {
      street: "jalan xxx",
      city: "yyy",
    },
  },
  { name: "joko", email: "budi@mail.com" },
];

// for of
const fruits: string[] = ["Aplle", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Exercise for of
// hitung semua bilangan dalam Array menggunakan for of
// ex input = [1,2,3,4,5,6]

const nums: number[] = [1, 2, 3, 4, 5, 6];
let result: number = 0;

for (const num of nums) {
  result += num;
}
console.log(result);

// ====================FUNCTION
// ada 2 cara menulis fungsi
// 1. function declaration
function square(number: number, number2: number) {
  return number * number2;
}

const hsl = square(4, 5);
console.log(hsl);

// 2. function expression
const square1 = function (number: number) {
  return number * number;
};
const hsl1 = square1(4);
console.log(hsl1);

// ================= FUNCTION SCOPE
// variabel yang define didalam function hanya bisa diakses dalam function tersebut

const hello = "hello";
function greeting() {
  console.log(hello);

  return hello;
}
greeting(); //harus dipanggil dulu agar console didalam function bisa menampilkan data yang dipanggil

console.log(hello);

// parameter & argumen
// parameter -> variabel yang mewakili value dari argumen yang dimasukkan
//  argument -> value yang dimasukan saat pemanggilan function

// ---------------->parameter<---------
function greeting1(name: string) {
  const hello = "Hello";
  return hello + " " + name;
}
// ------------------>argument<-----------
console.log(greeting1("budi"));

// DEFAULT PARAMETER
// kita bisa memberi value/argumen secara defaul kedalam parameter. jadi ketika kita tidak memasukkan argumen.saat pemanggilan function, maka value akan muncul secara default sesuai yang sudah ditentukan
function multiply(a: number, b: number = 1) {
  console.log(a);
  console.log(b);
  return a * b;
}
console.log(multiply(5, 4));
console.log(multiply(9));

// REST PARAMETER
// mewakili sisa argumen kedalam 1 varibel parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
  // ketika akan melakukan operasi pada rest parameter, maka harus di looping terlebih dahulu
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// NESTED FUNCTION
// fungsi yang berada di dalam fungsi
// inner function bisa akses prameter dari outer function
// outer function tidak bisa akses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstName + ",";
  }
  // inner function 1
  function welcomeMessage() {
    return "welcome to purwadhika";
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("budi"));

// CLOSURE

function greeting2(name: string) {
  const defaulMessage: string = "Hello";

  return function () {
    return defaulMessage + " " + name;
  };
}

const result5 = greeting2("budi");
console.log(result5());

console.log(greeting2("Budi")()); //harus dipanggil dua kali menggunakan tanda kurung dua kali

// RECURSIVE
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(10);

// ARROW FUNCTION
// shortcut utk memanggil function expression

//function expression
const square2 = function (number: number) {
  return number * number;
};

// arrow function
const square3 = (number: number) => {
  return number * number;
};

// jika hanys satu line tidak perlu kurung kurawal dan keyword return
const square4 = (number: number) => number * number;

// ARRAY BUILD IN METHOD
// join -> menggabungkan value yg ada dalam array dlm bentuk string
const words: string[] = ["hello", "world", "warga", "konoha"];
console.log(words.join(" "));

// pop -> menghilangkan array paling akhit
words.pop();
console.log(words); //jika word.pop() langsung dipanggil dalam console.log yang ditampilkan adalah array yang hilang

// shift -> menghilangkan value paling depan array
words.shift();
console.log(words);

// push -> menambah value dalam array paling akhir
words.push("purwadhika");
console.log(words);

// unshift-> memasukan data baru ke index paling depan
words.unshift("jogja");
console.log(words);

// concat-> menggabungkan 2 array menjadi 1 array
const arr1: string[] = ["hello"];
const arr5: string[] = ["world"];
const arr6: string[] = ["indonesia"];

console.log(arr1.concat(arr5));
console.log(arr1.concat(arr5).concat(arr6));

const mergeArr = [...arr1, ...arr5, ...arr6];
console.log(mergeArr);

// splice -> menghapus, mengganti dan menambahkan value pada array
// rumus -> splice(startindex, brpygmaudidelete, item)

const months: string[] = ["jan", "march", "april", "jun"];

months.splice(1, 0, "feb");
console.log(months);
months.splice(4, 1);
console.log(months);
months.splice(3, 1, "may");
console.log(months);

// slice -> mereturn array baru dengan value yang sudah ditentukan index start dan index end dari array
// rumus: slice(starttIDx, endIdx)

const buah: string[] = ["Aplle", "Banana", "Orange", "mango", "grape", "lemon"];
console.log(buah.slice(1, 4)); //dari depan
console.log(buah.slice(-4, -1)); //jika dari belakang, nomor index diberi tanda minus, jadi index terakhir adalah -0

// indexOf -> mencari index dair value yang kita search
// kalo tidak ditemukan akan mereturn -1
const buah2: string[] = [
  "Aplle",
  "Banana",
  "Orange",
  "mango",
  "grape",
  "lemon",
];
console.log(buah2.indexOf("lemon"));

// sort -> mengurutkan isi array berupa string atau number
const buah3: string[] = [
  "Banana",
  "Orange",
  "mango",
  "grape",
  "lemon",
  "Aplle",
];
buah3.sort();
console.log(buah3.sort());
console.log(buah3);

// sort number tanpa compare function
const point: number[] = [6, 1, 4, 5, 6, 7, 2, 3, 8, 16, 20, 9];
point.sort();
console.log(point);
// memiliki kelemahan jika terdapat angka lebih dari satu digit, karna yang diurutkan sesuai digit pertama

// solusinya
// sort number dgn compare function
const point2: number[] = [6, 1, 4, 5, 6, 7, 2, 3, 8, 16, 20, 9];
point2.sort((a, b) => a - b); // asc
// point2.sort((a, b) => b-a); // desc
console.log(point2);

// reverse -> membalikkan urutan elemen pada array
const point3: number[] = [6, 1, 4, 5, 6, 7, 2, 3, 8, 16, 20, 9];
point3.reverse();
console.log(point3);

// foreach -> melakukan looping pada array tapi tidak mereturn apapun

const buah4: string[] = [
  "Banana",
  "Orange",
  "mango",
  "grape",
  "lemon",
  "Aplle",
];

const result2 = buah4.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

// map -> melakukan looping sama kaya forech tapi mereturn array baru
const buah5: string[] = [
  "Banana",
  "Orange",
  "mango",
  "grape",
  "lemon",
  "Aplle",
];

const result3 = buah5.map((fruits, index) => {
  return fruits;
});
console.log(result3);

// filter-> melakukan looping juga seperti map, dan menghasilkan arry baru berdasarkan kondisi pada retturn function
const ages: number[] = [32, 67, 12, 45, 25, 22];
const result4 = ages.filter((age) => {
  return age > 17;
});
console.log(result4);

// find -> mencari value yang ditemukan pertamakali dalam array
const ages2: number[] = [13, 67, 12, 45, 25, 22];
const result6 = ages2.find((age) => age > 14);

console.log(result6);

// findIndex -> mirip seperti find tapi yg dihasilkan hanya indexnya

const ages3: number[] = [13, 67, 12, 45, 25, 22];

const result7 = ages3.findIndex((age) => age > 15);
console.log(result7);

// reduce -> melakukan operasi aritmatika pada tiap isi array

const number3: number[] = [175, 50, 25, 45];
const result1 = number3.reduce((a, b) => a + b);

console.log(result1);

// includes -> mengecek value pada array ada apa tidak, dan hasil return berupa boolean.

const buah6: string[] = [
  "Banana",
  "Orange",
  "mango",
  "grape",
  "lemon",
  "Aplle",
];

console.log(buah6.includes("mango"));
