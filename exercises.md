Ex.23
Change the value of num, so that "YOU GOT ME!" prints out
const num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

DO NOT TOUCH ANYTHING BELOW (please)
```js
if (num <= 100) {
  if (num >= 50) {
    console.log('HEY!');
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log('YOU GOT ME!');
    }
  }
}
```

// Ex.22
```js
function getColor(phrase) {
  if (phrase === 'stop') {
    console.log('red');
  } else if (phrase === 'slow') {
    console.log('yellow');
  } else if (phrase === 'go') {
    console.log('green');
  } else {
    console.log('purple');
  }
}
getColor('slow');
```

Ex21b

checking age at the theme park

// 0-5 = free
// 5 - 10 = $10
// 10 - 65 $20
// 65+ - $10

```js
const age = 4;
if(age < 5){
  console.log('free')
} else if(age >= 5 && age < 10) {
  console.log('$10');
} else if (age >= 10 && age < 65){
  console.log('$20'); 
} else if (age >= 65){
  console.log('$10')
}
```
instructor solution
```js
const age = 64;
if(age < 5){
  console.log('free')
} else if(age < 10) {
  console.log('$10');
} else if (age < 65){
  console.log('$20'); 
} else if (age >= 65){
  console.log('$10')
}
```
and again with the else. still could be negative age or crazy high age so we are way off perfect at the moment.
```js
const age = 1;
if (age < 5) {
  console.log('free');
} else if (age < 10) {
  console.log('$10');
} else if (age < 65) {
  console.log('$20');
} else {
  console.log('You are a senior: $10');
}
```




if num is even print out even. if odd do nothing.
```js
function isEven(num) {
  if (num % 2 == 0) {
    console.log('even');
  }
}

isEven(16);
```



* extract board from word
* replace o in board with an e using replace method.
```js
// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
const word2 = word.slice(-5);
const facialHair = word2.replace('o', 'e');

```

Ex20
```js
// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1+die2}`;
console.log(roll)
```