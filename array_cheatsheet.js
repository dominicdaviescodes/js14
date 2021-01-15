// Making an array:
// const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
// colors[0]; // "red"

// They have a length:
// colors.length; //3

// Accessing an array:
// const colors2 = ["red", "orange", "yellow"];
// console.log(colors2[1][3]) // n which is orange index 3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// Exercise: 27.

// Remove 1st element
// Add Saturn to the end
// Add Mercury as 1st element

// const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];

// console.log(planets.shift());

// planets.push('Saturn');
// console.log(planets);

// planets.unshift('Mercury');
// console.log(planets);

// splice

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(colors);
// delete indigo
// colors.splice(5,1);
// indigo is index 5. delete only 1 item.
// console.log(colors);

// insert gold between red and orange
// colors.splice(1,0,'gold');
// start at 1, delete nothing,
// console.log(colors)



const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco'],
];

// console.log(airplaneSeats);
airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats);