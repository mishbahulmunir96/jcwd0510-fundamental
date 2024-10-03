// soal 1
// Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

const n: number = 8;
if (n % 2 === 0) {
  console.log(`${n} adalah genap`);
} else {
  console.log(`${n} adalah ganjil`);
}
// ---------------------------------
// sama dengan kodingan lecture
// ---------------------------------

// soal 2
// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

// jalan pertama
// let num: number = 7;
// let isPrime: boolean = true;

// if (num <= 1) {
//   isPrime = false;
// } else if (num === 2 || num === 3) {
//   isPrime = true;
// } else if (num % 2 === 0 || num % 3 === 0) {
//   isPrime = false;
// } else {
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log(`${num} adalah bilangan prima`);
// } else {
//   console.log(`${num} bukan bilangan prima`);
// }

// jalan kedua
const num: number = 9;
let isPrime: boolean = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}
// console.log(isPrime ? `${num} is a prime number` : `${num} is not a prime number`)
// -------------------------------
// jalan kedua sama dengan lecture
// -------------------------------
// soal 3
// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6
const angka: number = 5;
let sum: number = 0; // penampungan
// let message: string = "";

for (let i = 1; i <= angka; i++) {
  sum += i;
}

console.log();

// soal 4
// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

let number: number = 6;
let f: number = 1;

for (let i = number; i >= 1; i--) {
  f *= i;
}
console.log(f);

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610//
const nomor: number = 15;
let n1 = 0,
  n2 = 1,
  nextTerm;

for (let i = 1; i <= nomor; i++) {
  if (i === nomor) {
    console.log(n2);
  }
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

console.log(n1);
