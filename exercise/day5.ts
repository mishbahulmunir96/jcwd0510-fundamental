// soal 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// without short
function myNum(num: number[]) {
  const maxValue: number = Math.max(...num);
  const minValue: number = Math.min(...num);
  const average: number = num.reduce((a, b) => a + b) / num.length;

  const result11 = { lowest: minValue, highest: maxValue, average: average };

  return result11;
  // console.log(result11);
}
console.log(myNum([12, 5, 23, 18, 4, 45, 32]));

// with sort, jwban sendiri sama dgn lecture
function myNum2(num: number[]) {
  const sortNum = num.sort((a, b) => a - b);
  const minValue = sortNum[0];
  const maxValue = sortNum[num.length - 1];
  const average: number = num.reduce((a, b) => a + b) / num.length;

  const result12 = { lowest: minValue, highest: maxValue, average: average }; // jika key & vale dlm object sama,bisa disingkat
  return result12;
}
console.log(myNum2([12, 5, 23, 18, 4, 45, 32]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function arrStr(str: string[]) {
  let concatenating: string =
    str.slice(0, str.length - 1).join(", ") + " and " + str[str.length - 1];
  return concatenating;
}
console.log(arrStr(["apple", "banana", "cherry", "date"]));
// masih kurang bagaimana jika outputnya berupa array kosong.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function myNumber(num: number[]) {
  const uniqNum: number[] = Array.from(new Set(num)); //memproteksi jika terdapat angka duplikat/kembar,akan dihapus dan mengembalikan sisanya.
  const sortNum: number[] = uniqNum.sort((a, b) => a - b);
  const secondOfsmallest: number = sortNum[1];
  return secondOfsmallest;
}
console.log(myNumber([5, 3, 1, 7, 2, 6]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function number4(array1, array2) {
  const sum = array1.map((num, index) => num + array2[index]);
  return sum;
}
console.log(number4([1, 2, 3], [3, 2, 1]));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// gunan includes, tidak perlu looping
function myNumber1(arr: number[], newElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newElement) {
      // const newArr =
    }
  }
  return arr;
}
console.log(myNumber1([1, 2, 3, 4], 5));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 6. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function myFunction(mixedArray: any[]) {
  let sum: number = 0;
  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
      sum += mixedArray[i];
    }
  }
  return sum;
}
console.log(myFunction(["3", 1, "string", null, false, undefined, 2, "9"]));

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function myNumber2(...num) {
  return num;
}
console.log(myNumber2(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 8. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function myFunction2(arr1: number[], arr2: number[]) {
  const combineArray = arr1.concat(arr2);
  return combineArray;
}

console.log(myFunction2([1, 2, 3], [4, 5, 6]));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 9. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const newArr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const dup = Array.from(new Set(newArr));
console.log(dup);

// 10. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
// 11. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]
// 12. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// 13. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
