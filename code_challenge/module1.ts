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
