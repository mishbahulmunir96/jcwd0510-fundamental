// 258. add digits --solved
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// function myFunc(num){
//     const strNum = num.toString().split('').map(Number).reduce((a, b)=> a+b).toString().split('').map(Number).reduce((a, b)=> a+b);

//     const strNumSplit = strNum.toString().split('');

//     if(strNumSplit.length > 1){
//         const strNum2 = strNumSplit.map(Number).reduce((a, b)=> a+b);
//         return Number(strNum2)
//     }
//     return strNum
// }

// console.log(myFunc(708538619))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 283. moves zeroes
// function moveZeroes(nums) {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let zero = nums.splice(i, 1)[0];
//       arr.push(zero);
//       console.log(arr);
//     }
//     console.log(nums[i]);
//   }
// }
// moveZeroes([0, 1, 0, 3, 12]);

// 21. merge two sorted list
function mergeTwoLists(list1, list2) {
  const mergeList = list1.concat(list2).sort();
  return mergeList;
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// 66. plus one
// function plusOne(digits){
//   let plus = 0;
//   for(let i= 0; digits; i++){
//     plus += digits[i];
//   }
//   return plus;
// }
// console.log(plusOne([1,2,3]));

function mySqrt(a) {
  const sqrt = Math.sqrt(a);
  const floor = Math.floor(sqrt);
  return floor;
}

console.log(mySqrt(10));

function lastWord(s) {
  // untuk menghilangkan sepasi di awal dan akhir gunakan trim(), utk menghilangkan spasi berlebih saat akan split string gunakan split(/\s+/)
  const split = s.trim().split(/\s+/);
  const lastValue = split[split.length - 1].split("").length;

  return lastValue;
}

console.log(lastWord("   fly me   to   the moon  "));

function isPalindrome(s) {
  // [^a-zA-Z0-9] = menghilangkan karakter selain huruf dan angka
  // [^a-zA-Z] = menghilangkan karakter selain huruf saja
  const split = s
    .split(" ")
    .map((item) => item.replace(/[^a-zA-Z0-9]/g, ""))
    .join("");
  console.log(split);

  const lower = split.toLowerCase();
  const reverse = lower.split("").reverse().join("");
  if (reverse !== lower) {
    return false;
  } else {
    return true;
  }
}
console.log(isPalindrome("0P"));

// 121. Best time to buy sell stock
function sellStock(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(sellStock([7, 1, 5, 3, 6, 4]));
console.log(sellStock([7, 6, 4, 3, 1]));

// 151. Reverse Words in a String
function reverseWords(s) {
  const cleanSpace = s.trim().split(/\s+/).reverse().join(" ");
  console.log(cleanSpace);
}
reverseWords("a good   example");

// 234

function isPalindrom(head) {
  const headNum = Number(head.join(""));
  const reverseNum = Number(head.join("").split("").reverse().join(""));

  if (headNum === reverseNum) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrom([1, 2]));

// 1684. Count the Number of Consistent Strings
