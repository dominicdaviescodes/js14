# Javascript Basics with Answers

## Section 14. JS Basics
1. What is a variable.
* We give a name to a value which we store and can refer back to it later.
3. 
4. What are the 5 basic Primitive Types not including Symbol and BigInt? 
* string
* number
* boolean
* undefined
* NaN
3. What operator is commonly used to determine if a number is even or odd.
* modulo
4. Write the syntax to take any number and mod by 2 to check if even.
```js
10 % 2
// 0 so even
```
5. When we mod a number by 2 and the remainder is 1 what does this mean?
```js
17 % 2
// 1 so odd
```
6. When we mod a number by 2 and the remainder is 0 what does this mean?
* Even
7. What does NaN stand for? What happens if it appears in an expression?
* NaN is considered a number, a value.
* NaN spoils everything in Math if you try to add it with a number etc... it's always NaN. Any operation with NaN will result in NaN.
9. __________represents the largest number. It can be ____________or_____________. It can be called from a prompt or alert.
10. When do we use typeof? Write an example
```js
typeof 4
// number

typeof NaN
// number.  it is a member of the number family
```
11. Javascript can't represent a number larger than  ______or less than _________,
12. score = 10;  add 25 to score
```js
score += 25;
// 35
```
13. player2 has 100 points. Make player 2 lose 50.
```js
player2 -= 50;
// 50
```
14. numLives = 10, decrement numLives by 1.
```js
numLives--;
// 9
```
15. What is the value of bankBalance after the following code runs:
```js
    let bankBalance = 100;
    bankBalance /= 2;
    bankBalance += 10;
    //60
```
16. When might a boolean be useful?
    * is the game still playing? eg. let isActiveGame = true; which will change to false.
    * has player one won or lost?
    * let isLoggedIn = false;
    
17. Why is javascript considered a dynamically typed language?
    * In javascript your variables can change type.
    * a numeric variable can be changed to store a string or boolean.
    * in other languages this isn't possible 
    * Typescript enforces these type restrictions. js has no restrictions like that.
18.  What is BigInt used for? How is it designated?
## Section 15. Strings and more
19.  What are back tics called? How do they differ from regular single or double quotes?
20.  Strings are indexed.  What is the index of k in the str 'chicken'. // 4
21.  Mutable is a type of variable that can be changed. In JavaScript, primitive values are not mutable but what are? 
    * only objects and arrays are mutable
    * Strings and Numbers are Immutable.  
```js
var immutableString = "Hello";

// In the above code, a new object with string value is created.

immutableString = immutableString + "World";

// We are now appending "World" to the existing value.

```
On appending the "immutableString" with a string value, following events occur:

* Existing value of "immutableString" is retrieved "World" is appended to the existing value of "immutableString"
* The resultant value is then allocated to a new block of memory
* "immutableString" object now points to the newly created memory space
* Previously created memory space is now available for garbage collection.

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

A primitive can be replaced, but it can't be directly altered.

```js
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
```

22. what value do we get when we try this: animal[99]
  * we get the special value 'undefined'
  * js is telling us 'I have nothing there' 'I don't know what you want'.
23.  Create a sample back tic expression showing the syntax of how it is used.
24. What is a return called when it represents nothing, empty, or value unknown?
25. When a variable is declared and no value is assigned, what is its value?
26. What is a primitive datatype?
27. I have a variable called x that is assigned a value from an expression. Write the script that will tell me what datatype x is.
28. Null is an object datatype. True or False
29. Prompt and alert are modal functions. What does this mean?
30. The look and location of Prompt and alert is determined by the browser and can NOT be changed. True or False
31. Write a prompt that asks a user to enter a password where “password” is the default value. 
```js

```
29. Internet Explorer defaults to what value if no default is given in a prompt statement?
30. If you cancel or escape from a prompt, What value is returned?
31. Describe the confirm function. Write a sample script using confirm and alert.
32. Write the script to convert 123 to a string and then convert it back to a number.
33. Conversions—draw lines connection the values to what they become:
```js
Value Becomes
Undefined 1
True 0
False NaN
Null 0
“” 0
```
22. Undefined is NaN as a number not 0. True or False
23. What is an operand? Give an example?
24. What is an operator? Give an example.
25. If an operator has a single ____________it is called __. If it has 2_______________ it is called _________________.
26. What does + do?
27. What is returned from these expressions:
```js
('1'+2) =
(2 +'1')=
(2+2+'1')=
(6-'2')=
('6'/'2')=
(+'3'+'2')=
```
28. Which has higher order precedence unary or binary?
29. = has a very low order of precedence. True or False
30. How are chained assignments evaluated in Javascript?
31. How is this statement evaluated:
```js
(a=b=c=2+2);
```
32. What operator is higher in order precedence when you compare *= and += to =?
33. What will this expression produce?
```js
X = 5++;
```
34. ++ can only follow a variable. True or False
35. What are the values of a and counter when these scripts are run and why:
```js
Let counter = 1; let counter = 1;
Let a = ++counter; let a = counter++;
alert(a); alert(a);
alert(counter); alert(counter);
```
36. All comparisons return a _______________________.
37. Write a numerical expression that returns a true value to a variable called result.
38. How does Javascript compare two strings?
39. Uppercase letters are always higher in value than lowercase letters. True or False.
40. When comparing variables, what do you need to check before running the script?
41. What does Javascript do to perform this comparison:
```js
alert('2'>1);
```
42. What are the results of these comparisons since true = 1 and false = 0:
```js
(0 == false);
(“”==false);
null === undefined;
null == undefined;
null > 0;
null == 0;
null >= 0;
```
43. Undefined equals only _________ and _________ since it converts to _______ all other comparisons return __________.
44. Any string except an empty one returns ______________.
45. What is the ? character called in Javascript?
46. Describe the term falsey. Give 5 examples of values that are falsey.
47. Describe the logic of an if statement.
48. What is the purpose of else, else if?
49. The ? character is a _________ operator meaning it takes ___________________________.
50. Rewrite the following code using the ? operator:
```js
If (age > 18){
access = true;
}else{
access = false;
}
```
51. Write a script that assigns a different string to a variable called msg using ? with the parameters below:
```js
Less than 3 msg='Hi Baby'
Less than 18 msg='Greetings'
Less than 100 msg='Hello'
Over 100 print 'What an unusual age'
```
52. What are these symbol types called and what do they mean?
```js
II
&&
!
```
53. II, &&, and ! can only be applied to values of specific types and return specific values. True or False
54. How do logical operators evaluate an expression?
55. II returns the first _________________ _______________ it finds.
56. If II finds no _____________ _________________ it returns the ______________ value.
57. && returns the first _________________ ______________ it finds.
58. Between II and &&, which has higher order precedence?
59. ! accepts how many arguments?
60. What does ! do? What does !! do?
61. What are the 8 basic datatypes in Javascript?
62. What is an array?
63. How do you declare an array?
64. Why is this code invalid?
```js
if (arrayA ===arrayB){
Console.log('arrays are equal');
}
```
65. What is the correct way to compare arrays?
66. If an array is compared to a primitive, it is converted to a primitive then compared. True or False
67. What operations can splice perform on an array?
68. Write a splice statement that changes stop to go and adds the strings, 'use' and 'spice' to the array. Use arr as the variable name for the array.
```js
[5,'stop',10,'John']
```
69. Write the script to add the number 12 to the end of the array in question 68.
70. Write the script to add 'hello' to the front of the array in question 
71. What happens if a negative integer is used for the start option in a splice statement?
72. What is the syntax for the slice function?
73. After slice and splice are run aside from the operations performed, how are there results different?
74. In a slice statement what items from the array are affected based on the arguments provided?
75. What will these slice statements do?
```js
arr.slice(-2);
arr.slice(2);
```
76. What does the concat method do? What is the syntax for the concat method?
77. The concat method only works with arrays. True or False
78. What is the symbol.isConcatSpreadable property?
79. Write a script that will pass each element in the arr array and alert the array element, its position and the name of the array its in. Use 
```js 
arr = ['bibb','bo','real']
// The first alert should say bibb is at position 0 in arr.
```
80. Write a script that searches the arr array and tells you what the index of 'wonder woman' is.
```js
arr = ['aquaman','batman','wonder woman','flash']

```
81. Which array search method returns a Boolean value? What is its syntax?
82. What method is used to search an array from right to left?
83. Using the methods used for questions 80 – 82, what happens if no start is provided? What happens if the element searching for is not found?
84. How do the three array search methods from questions 80 – 82 handle NaN if NaN is in the array?
85. let myArr = [9,3,2,4,9,11,19]; Write a script that will locate the first even number. Use the same array to write a script that will return the index of that number.
Javascript
86. What is the syntax of the filter method? What does it do?
87. ['Bilbo','Gandolf','Nazul']; Use the map method to create a new array that lists the lengths of each string in the array provided. Assign the new array to the variable lengths.
88. What does the sort method do?
89. When the sort method is invoked, what is its default datatype value?
90. let arr = [1,15,2,4];
arr.sort();
The script above will produce incorrect results. How can you write it so the return will be accurate.
91. If you have special elements like latin characters in your array, how do you write your sort method to handle this?
92. ___________________will return the array in reverse order.
93. A const array cannot have it contents changed, but you can change the reference. True or False
Javascript
94. What are 3 attributes of object literals?
95. What constitutes a property in an object literal?
96. What are the 2 syntax options for retrieving data from an object literal?
97. If you try to retrieve a string key from an object using square brackets with no quotes, the script will break. Why does this happen?
98. What is the syntax to change the value of a Key?
Javascript
99. Write a script to console.log the number 2 located in this object. Write a script to console.log sky from this object.
Const object = {
Key : value,
Key : [1,2,3],
Key : value,
Object2 : {
Key : sky,
Key : value
}
}
100. What is the syntax for looping over an array using a for loop?
```js SeatingChart = [
['Steve','Becky','John'],
['Ronald','Chris','Rick'],
['Charles','Eva'.'Carol']
];
// Write a for loop to pass in these elements and print out three groups of list that correspond to the array. Each group should have a title of ROW and the row number followed by the people in that row below the title.
```
101.   Write a while loop that prints 10 consecutive numbers.
102. What can while loops do that for loops cannot?
103. How do you set conditions to stop a loop from completing its full run?
104. You have an array that contains NaN. Assume there is a while loop passing through this array called checkNums. Write the script that will stop this array if it finds NaN.
105. What does parseInt do? What will return if parseInt('hello'); is encountered?
106. What does Math.random() generate?
107. Write a function to get a random integer between 2 values.
108. What is the syntax of a for of loop? How does it differ from a for loop?
109. Write a loop to iterate over this object and return the item and price. It should output each item. (Ex. Burger is $6 dollars)
```js
Const food = {
'Burger' : 6,
'fries' : 3,
'Rice' : 2,
'Beans' : 3
}
```
110.   What 3 other ways can you iterate over an object, and what do they return?
111.   Write a for of loop that assigns a new array called score filled with the values of an object literal called testScores.
112. What is a function? What is the syntax for defining a function?
113. Its considered good programming practice to define functions before calling them. True or False
114. What is the difference between an argument and a parameter?
116. Why should you use return in your function? What does return do when it is encountered?
117.   How many values can you return from a function?
118.   What is the return value for this statement?
```js
Add(add(1,5),9);
```
119.   ____________ is the location where a variable is defined and dictates where we have access to that variable.
120.   
```js let var = ['Hello','Goodbye','Greetings'];
For (var of array=>{
Console.log(array[var]);
Let var += 1;
}
This code will produce unexpected results. Explain why.
```
121.   What is the difference between var , const and let with regard to Block Scope?
* Const - constant it's just like let but can't change the value. 
  * you can recall at any time. but can't be updated
  * good for storing things we know won't change like days of week = 7, pi = 3.14.
  * good for apps where you are converting miles to KM etc
```js
const boilingPointC = 100;
const boilingPointF = 212;
```
* var - was old way to create variables.
* let - allows us to make a variable we can reassign.
1.     Block scoped variables are scoped to the farthest set of curly brackets. True or False
2.     What is Lexical Scope? Under what circumstances would a function not have access to a lexical scoped variable within the function?
3.   How do you store a function in a variable? How do you declare that function? (write the syntax)
4.   Explain this code:
```js 
function callTwice(func){
func();
func();
}
function rollDie(){
Const roll = math.floor(math.random() * 6) + 1;
}
```
1.     Write a script that iterates the array: 
```js 
check = ['is','array','true','1']; 
// if the iteration finds the integer 1, return a function that prints 'The array is true' if a zero is found return a function that prints, 'The array is false' Assign the value returned to the variable isTrue.
```
1.   What is a method?
2.   Create a script that defines a method that squares an integer then divides the squared integer by 3 and returns an integer. Define another method that adds two strings together (hint: use an object literal).
3.   How is the keyword this used in methods? What circumstances decide the value of this?
4.   If you have a function in your object literal that is assigned to a variable, how does that impact the value of this?
5.   What is a key operation that occurs when Javascript is opened? Why does this happen?
6.   You have a line of code that will break your script causing an error preventing your script from running. Write a script to solve this problem. Use hello.toUpperCase where hello is undefined.
7.   Write a script that prevents the call of an undefined function called addAlert from breaking the script.
8.   Without using if statements, write a script that will handle keeping a script from breaking when the user enters a number where a string that needs to be changed to lower case is needed.
9.   Explain what the for each method does.
10.  
```js 
arr = [9,8,7,6,5,4,3,2,1] 
// Using the array use a for each method to print every other number in the array.
```
1.     How do you write an arrow function that has no argument to pass in
2.     What does this code allow you to do?
```js
Const even = (num) => (
Num % 2 === 0
);
// How does this work with other functions?
```
1.   What does setTimeout do? How many arguments does it accept? What is the unit of time used?
2.   .   Write a script that will return an arrays' contents 3 seconds after the user enters 'start'.
3.   What is the difference between setTimeout and setInterval?
4.   What is the syntax to stop setInterval? How is the Id generated?
5.   What does the filter method do? How are Boolean values used by filter?
6.   Write a script using the filter method that returns all the strings from the array below:
```js 
Mix = ['Hello','Sir',5,'go',6,8,'to',9,'sleet'];
```
1.     What is the difference between every and some? What do these methods return?
2.     Write a script to illustrate every and some using: 
```js
 score = [85,90,60,75,100]; 
// to check scores >= 75 and <= 75. Check every for the >= check.
```
1.   What does the reduce method do?
2.   Write out the syntax of a reduce statement using an array call nums that adds the values together. Explain the purpose of each part of the script.
3.   How do you assign an initial value for the reduce method? Use your answer from question 148.
4.   You can use the keywork this in arrow functions. True or False
5.   What is the syntax to include a default parameter value in a function call. Why would you use a default value, and where must it be in the order of parameters provided?
6.   If you have an array of numbers called num, what is returned from this text?
```js 
Math.max(num);
// Why do you get this return? How do you change the return to provide the expected result?
```
1.     How can you combine two arrays without using an operator or conat? Whats the syntax.
2.     Write a script to combine these two objects into an array called catDog;
```js
Const feline = {legs : 4, family : 'Felidae'};
Const canine = {isFurry : true, family : 'Canine'};
// What will be the value of the family key?

```
1.     What are the keys when you use the method above to move and array of a string into an object literal?
2.       What is the difference between rest and spread?
3.   What is the process of using rest with an array call?
4.   In the function sum(34,65,77); Where are the 3 numbers stored? What are its attributes?
5.   How do you use rest to collect multiple parameters into a function with only one? Where does rest store these extra values?
6.   What do the brackets mean in this statement? What are gold and silver in this statement? When would you use curly brackets
```js
Const [gold,silver] = scores;
```
1.   Why does it take more memory to store decimal numbers?