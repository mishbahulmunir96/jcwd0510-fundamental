// soal 1
// Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

function deepEqual(obj1: any, obj2: any) {
  if (obj1 === obj2) {
    return true;
  }
  //   console.log(obj1 === obj2);

  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  //   console.log(keys1);
  //   console.log(keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
const objA = { a: "hello" };
const objB = { a: "hello" };

console.log(deepEqual(objA, objB));

// soal2
function intersection(obj1: Object, obj2: Object) {
  let result: Object = {};

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }

  return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };

console.log(intersection(obj1, obj2));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// soal3
function mergeData(
  arr1: { name: string; email: string }[],
  arr2: { name: string; email: string }[]
) {
  let combineArr = [...arr1, ...arr2];
  console.log(combineArr);

  let uniqData = combineArr.filter(
    (student, index, self) =>
      index === self.findIndex((s) => s.email === student.email)
  );
  console.log(uniqData);

  return uniqData;
}
const array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeData(array1, array2));
// soal4
// pake forin
// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]
// function switchObj(arr:){
//   return arr.map((objt)) => {
//     const switchedObj: {[key: string]: any}= {}

//     for(let key in objt) {
//       if(objt.hasOwnProperty(key))
//     }
//   }
// }
// soal 5
// Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(a) {
  let s = 1;
  for (let i = a; i > 0; i--) {
    s *= i;
  }
  return s;
}

console.log(factorial(5));

// use recursif
const factorial2 = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial2(n - 1);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factorial2(5);
console.log(steps.join(" x ") + " = " + total);
