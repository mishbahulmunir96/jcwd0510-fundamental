// soal 1
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10
const num1: number = 9;
let limit: number = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 2
// ● Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
const str: string = "makam";
const reverse: string = str.split("").reverse().join("");
console.log(
  str === reverse ? `${str} -> palindrome` : `${str} -> is not palindrome`
);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 3
// ● Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”
const cm: number = 400_000;
const divider = 100_000;
const km: number = cm / divider;

console.log(`${km} km`);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 4
// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
const uang: number = 1000;
let rupiah: string = uang.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

console.log(rupiah);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 5
// ● Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
const str1: string = "Hello World";
const searchStr: string = "orl";
const index = str1.indexOf(searchStr);

const before = str1.slice(0, index);
const after = str1.slice(index + searchStr.length);
const strArr = [before, after];
const strResult = strArr.join("");
console.log(strResult);

// methode yg digunakan siwa lain replaceAll()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// soal 6
// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” qq→ “Hello World”

const setering: string = "hello world";
const output = setering.split(" ");
let penampungan = [];

for (let i = 0; i < output.length; i++) {
  penampungan.push(output[i][0].toUpperCase() + output[i].slice(1));
}
const result = penampungan.join(" ");
console.log(result);
// ada masalh pada kode diatas, jika kita menambah spasi dibagian akhir. solusi kita gunakan.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal 7
// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

const strg: string = "The QuiCk BrOwN Fox";
const splitStr = strg.split("");

for (let i = 0; i < splitStr.length; i++) {
  if (splitStr[i].match(/[A-Z]/g)) {
    splitStr[i] = splitStr[i].toLowerCase();
  } else {
    splitStr[i] = splitStr[i].toUpperCase();
  }
}
const gabung = splitStr.join("");
console.log(gabung);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 8
// ● Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

const no1: number = 909;
const no2: number = 89;

if (no1 > no2) {
  console.log(no1);
} else {
  console.log(no2);
}

// solusi lain bisa pake Math.MAX

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal 9
// ● Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
const nomor1: number = 42;
const nomor2: number = 27;
const nomor3: number = 18;

const arr: any = [nomor1, nomor2, nomor3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// =====================================
// sepertinya salah, perlu dikaji ulang
// =====================================
// bisa menggunakan build in metode array sort()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 10
// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1
const input = 98;
if (typeof input === "string") {
  console.log(1);
} else if (typeof input === "number") {
  console.log(2);
} else {
  console.log(3);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal 11
// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

const kalimat: string = "An apple a day keeps the doctor away";
let container = kalimat.split("");

for (let i = 0; i < container.length; i++) {
  if (container[i] === "A" || container[i] === "a") {
    container.splice(i, 1, "*");
  }
}

const hasil = container.join("");
console.log(hasil);

// pak ketua menggunakan replaceAll()
// let klmt: string = "An apple a day keeps the doctor away";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
