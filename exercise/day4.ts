// NOTE : INGAT YA, KALO PAKE TS, JGN LUPA KASIH TYPEDATANYA, SETUJU?

// exercise example
// note: looping pertama untuk define row, loop kedua utk mengisi row
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// ● Parameters : height → triangle height
// ● Example input: 5
function setitiga(height: number) {
  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }

    console.log(row);
  }
}
setitiga(4);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal 1
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// ● Parameters : height → triangle height
function numPattern(n) {
  let str = "";
  let count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "0" + count + " ";
      count++;
    }
    str += "\n";
  }
  return str;
}
console.log(numPattern(4));

// ==lecture
function setitiga2(height) {
  let currentNum: number = 1;

  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      // row += "0" + currentNum + " "; //jika angka 2 digit didepannya akan tetap ada "0"nya
      row += (currentNum < 10 ? "0" : "") + currentNum + " "; //solusi baris diatas
      currentNum++;
    }

    console.log(row);
  }
}
setitiga2(4);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
function fizzBuzz(n) {
  const arrFizzBuzz = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrFizzBuzz.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arrFizzBuzz.push("Buzz");
    } else if (i % 3 === 0) {
      arrFizzBuzz.push("Fizz");
    } else {
      arrFizzBuzz.push(i);
    }
  }
  // output dalam bentuk array
  // console.log(arrFizzBuzz);

  return arrFizzBuzz.join(", ");
}
const result10 = fizzBuzz(30);
console.log(result10);

function fizzBuzz2(n: number) {
  let message: string = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      message += "fizzBuzz" + " ";
    } else if (i % 5 === 0) {
      message += "Buzz" + " ";
    } else if (i % 3 === 0) {
      message += "Fizz" + " ";
    } else {
      message += i + " ";
    }
  }
  console.log(message);
}
fizzBuzz2(45);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal 3
// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = (weight (kg) / height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z
function calculateBMI(w, h) {
  const BMI = w / h ** 2;
  if (BMI < 18.5) {
    return "lest weight";
  } else if (BMI < 25.0) {
    return "ideal";
  } else if (BMI < 30.0) {
    return "overweight";
  } else if (BMI < 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

const result9 = calculateBMI(65, 1.65); //utk input argumen lebih baik buat variabel baru
console.log(result9);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  soal 4
// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Exa);mple : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
function removeOddNumber(n) {
  const evenNum = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      n.splice(i, 1);
    }
  }
  evenNum.push(...n);
  return evenNum;
}
const result8 = removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result8);
// console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]));

function removeOddNumber2(arrOfNum: number[]) {
  return arrOfNum.filter((number) => number % 2 === 0);
}
console.log(removeOddNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function removeOddNumber3(numbers: number[]) {
  const temp: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      temp.push(numbers[i]);
    }
  }
  return temp;
}
console.log(removeOddNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// soal 5
// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
// const str2: string = "Hello World";
// const splitStr1: string[] = str2.split(" ");
// console.log(splitStr1);

function str2(a) {
  const splitStr = a.split(" ");
  return splitStr;
}
console.log(str2("Hello World"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// cara kerja split dibalik layar
const splitString = (input: string) => {
  const kata: string[] = [];
  let tempStr: string = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      kata.push(tempStr);
      tempStr = "";
      continue;
    }
    tempStr += input[i];
  }
  kata.push(tempStr);
  console.log(kata);
};

splitString("Hello world");
