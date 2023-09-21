/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line. */
for (let i = 0; i < 21; i++) {
  console.log(i);
}

//   b. Print only the ODD values from 3 - 29, one number per line.

for (let i = 3; i < 30; i = 1 + 2) {
  console.log(i);
}

//    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.

for (let i = 12; i > -15; i = i - 2) {
  console.log(i);
}

//    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 50; i > 19; i / 3 % 0) {
  console.log(i);
}
//I AM NOT CONFIDENT ABOUT THIS ONE :(   

//also, why do all of my loops be infinite? even when they look just like the code in the book?

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let string = "LaunchCode"
let reversed = ""
let arr = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arr.length; i++) {
  console.log[i];
}

for (let i = 9; i < string.length; i++) {
  reversed = string[i] + reversed;
}
console.log(reversed);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let even = [];
let odd = [];
for (let i = 0; i < numbers.length; i % 2) {
  even.push[i];
}
console.log(even);
for (let i = 1; i < numbers.length; i % 1) {
  odd.push[i];
}
console.log(odd);
