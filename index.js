/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


/* When we are coding all the values we are dealing with (inputs, outputs, partial steps stored in some variables) belong to some Data Type
There are a 5 which one we need to know:
a) PRIMITIVES (Primitive data types):
 1. NUMBERS: they are represents a numeric values (100, 2.3)
 2. STRINGS: rapresents sequence of characters ("hello", `hello`, 'hello')
 3. BOOLEAN: logical entity, rapresents boolean value (false, true)
 4. UNDEFINED: they are exist yet, rapresents undefined value
 5. NULL: rapresents the empty value 
b) STRUCTURE (Rapresenting structure data):
 1. OBJECT: are used to rapresent more proprieties, all related to the same entity(to the same variable) 
 2. ARRAY: we are use them to rapresent a list of items, all with the same data types.

 We are controlling the flow og the program:
 IF STATEMENT (CONDITIONAL STATEMENT) - we use it to do two alternative things based on the condition (if true than do this... otherwise do this other thing)
 LOOPS - we use them to repeat the same block of code many times (You repeat it until the certain condition stays true, when the condition becomes false, than loop is over)


 /* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Mostly variables can be used to store data in a program (strings, numbers,boolean values). 
 In Javascript can be change later on, because a variable stores the data value.
 We can use 3 diffrent variable types: var, let and const.
 The best to used is let.
*/


/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log("-----------------EXERCISE 3-----------------\n");

let numberTwelve = 12
let numberTwenty = 20

let sum = numberTwelve + numberTwenty

console.log(sum)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

console.log("\n-----------------EXERCISE 4-----------------\n");

let x = 12;

console.log(x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

console.log("\n-----------------EXERCISE 5-----------------\n");

let named = "John Doe";

console.log(named)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("\n-----------------EXERCISE 6-----------------\n");

let numberTwelveAndX = 12 - x

console.log(numberTwelveAndX)


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log("\n-----------------EXERCISE 7-----------------\n");

let name1 = "john";
let name2 = "John";

let checkEqualityOfName1AndName2 = name1 === name2 ;
console.log(checkEqualityOfName1AndName2);

let checkEqualityOfName1AndName2Small = name1 === name2.toLowerCase() ;
console.log(checkEqualityOfName1AndName2Small);


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

console.log("\n-----------------EXERCISE 8-----------------\n");

let x10 = 7;

if (x10 === 7 ) {
  console.log("seven")
} else {
  console.log("wrong number")};


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log("\n-----------------EXERCISE 9-----------------\n");

let check1 = 8
let check2 = check1 >= 8 ? true : false;
console.log(check2)

let check3 = 60
let check4 = check3 === 8 ? true : false;
console.log(check4)

// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

console.log("\n-----------------EXTRA EXERCISE 1-----------------\n");

let isMale = true
let gender = isMale ? 'male' : 'female';

console.log(gender)

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

console.log("\n-----------------EXTRA EXERCISE 2-----------------\n");

let integerOne = 5;
let integerTwo = 3;

let isIntegerOneOrIntegerTwoBeEight = integerOne === 8 || integerTwo === 8 ;

console.log(isIntegerOneOrIntegerTwoBeEight) 

let integerAddition = integerOne + integerTwo;
let integerSubtraction = integerOne - integerTwo;
let isTheIntegerAdditionEight = integerAddition === 8
let isTheIntegerSubtractionEight = integerSubtraction === 8

console.log(isTheIntegerAdditionEight)
console.log(isTheIntegerSubtractionEight)

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

console.log("\n-----------------EXTRA EXERCISE 3-----------------\n");

let stringOne = "Hello"
let stringTwo = "world!"
let stringOneAndTwo = stringOne + " " + stringTwo;

console.log(stringOneAndTwo)

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

console.log("\n-----------------EXTRA EXERCISE 4-----------------\n");

let firstVariable = 3
let secondVariable = 2
let thirtVariable = 9

if (firstVariable < secondVariable ) {
  console.log(firstVariable)
} else {
  console.log(secondVariable)};


/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

console.log("\n-----------------EXTRA EXERCISE 5-----------------\n");

let givenIntegerOne = 30
let givenIntegerTwo = 50

let avarageOfTwoGivenIntegers = (givenIntegerOne + givenIntegerTwo)/2

console.log(avarageOfTwoGivenIntegers)

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

console.log("\n-----------------EXTRA EXERCISE 6-----------------\n");

let firstString = "Hello world";
let secondString = "nice to meet you";


/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log("\n-----------------EXTRA EXERCISE 7-----------------\n");

let givenValue = -23;
let givenValueTwo = "string";

console.log(Number.isInteger(givenValue))
console.log(Number.isInteger(givenValueTwo))


/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */