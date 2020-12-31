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