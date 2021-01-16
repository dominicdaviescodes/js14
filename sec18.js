// Section 18: JavaScript Object Literals

// const person = {
//   firstName: 'Colt',
//   lastName: 'Steele',
// };

// console.log(person)

// const product = {
//   name: 'Gummy Bears',
//   inStock: true,
//   price: 1.99,
//   flavors: ['grape', 'apple', 'cherry']
// }

// const years = {
//   1999: 'Good',
//   2020: 'Bad'
// }

// console.log(years)

//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//   name: 'Ichiran Ramen',
//   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//   city: 'Brooklyn',
//   state: 'NY',
//   zipcode: '11206',
// };

// let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// console.log(fullAddress);

//YOUR CODE GOES DOWN HERE:

// let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// console.log(fullAddress);

// // L188

// const midterms = { danielle: 96, thomas: 78 };

// console.log(midterms);

// // change thomas's score to 70 using dot

// midterms.thomas = 70;

// // change danielle's score to 90 using brackets
// midterms['danielle'] =90;
// console.log(midterms)

// // Add Tim score 90 using dot
// midterms.Tim =90;
// console.log(midterms)

// // Add Tom score 50 using brackets
// midterms['Tom'] =50;
// console.log(midterms)

// L189

const comments = [
  { username: 'Tammy', text: 'very funny', votes: 9 },
  { username: 'Danny', text: 'not very funny', votes: 90001 },
];

// access not very funny
console.log(comments[1].text)