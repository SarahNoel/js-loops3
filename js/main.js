$(document).on('ready', function() {
  console.log('sanity check!');

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

// example
// function printName(arr){
//   arr.forEach(function(student){
//     console.log(student.name);
// });
// }
// printName(students);

// // Problem 1
// function printAge(arr){
// arr.forEach(function(student){
//   console.log(student.age);
// });
// }

// printAge(students);

// // Problem 2
// function nameCity(arr){
// arr.forEach(function(student){
//   console.log(student.name + ",", student.city);
// });
// }

// nameCity(students);

// Problem 3
// function fromCity(arr){
// arr.forEach(function(student){
//   console.log(student.name + " is from", student.city);
// });
// }

// fromCity(students);

// Derek is from Boulder
// Carl is from Boulder
// Peter is from Boulder

// Problem 4
function over25(arr){
arr.forEach(function(student){
  console.log(student.name + " is older than", student.age);
});
}

fromCity(students);
// Liz is older than 25
// Carl is older than 25


// var numbers = [2, 12, 3, 17, 233, 21];

// // Traditional For Loop

// var doubleNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//   doubleNumbers.push(numbers[i] * 2);
// }
// console.log(doubleNumbers);


// // // Map callback function

// var doubleDown = function(number, index){
//  // index is an optional argument
//  // console.log('Index : ', index)
//  return number * 2;
// };

// console.log(doubleDown(4));
// var doubleNumbers = numbers.map(doubleDown);



// map(), filter(), and reduce()




























});
