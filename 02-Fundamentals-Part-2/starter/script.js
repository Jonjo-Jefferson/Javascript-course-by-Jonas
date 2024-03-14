// Calling function in a function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Arrow Functions

// const calcAge3 = (birthYear) => 2024 - birthYear;

// const yearsRetire = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsRetire(1988, 'Jonjo'));

// Function decleration

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// console.log(calcAge1(1988));

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// console.log(calcAge2(1988));

// function logger() {
//   console.log('My name is Jonjo');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const applejuice = fruitProcessor(5, 2);

// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
