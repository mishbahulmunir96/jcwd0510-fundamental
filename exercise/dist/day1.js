// soal 1
/* Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15*/
const panjang = 5;
const lebar = 3;
const AreaOfRectangle = panjang * lebar;
console.log(AreaOfRectangle);
// soal 2
/* Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
output : 16 */
const l = 5;
const w = 3;
const perimeter = l * 2 + w * 2;
console.log(perimeter);
// soal 3
/*Write a code to find diameter, circumference and area of a circle.

Example: radius = 5
Output: diameter = 10, circumference = 31.4159, area = 78.539 */
const radius = 5;
const diameter = 2 * radius;
const circumference = 2 * 3.14 * radius;
const area = 3.14 * radius ** 2;
console.log(diameter);
console.log(circumference);
console.log(area);
// soal 4
/* Write a code to find angles of triangle if two angles are given.
O
O
Example: a = 80, b = 65
Output: 35 */
const a = 80;
const b = 65;
const c = 180 - (a + b);
console.log(c);
// soal 5
/*Write a code to convert days to years, months and days (Notes: 1 year: 365 days, 1 month: 30 days).
о
O
Example: 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, O month, 1 day*/
const numberOfDays = 400;
const years = Math.floor(numberOfDays / 365);
const months = Math.floor((numberOfDays % 365) / 30);
const days = Math.floor((numberOfDays % 365) % 30);
console.log(`${years} year, ${months} Month, ${days} days`);
// soal 6
/*Write a code to get difference between dates in days.
O
Example: date1 = 2022-01-20, date2 = 2022-01-22
O Output: 2*/
const date1 = new Date();
const date2 = new Date();
date1.setDate(20);
date2.setDate(22);
date1.setMonth(0);
date2.setMonth(0);
date1.setFullYear(2022);
date2.setFullYear(2022);
console.log(date2);
console.log(date1);
console.log(date2.getDate() - date1.getDate());
