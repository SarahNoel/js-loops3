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
function printAge(arr){
arr.forEach(function(student){
  console.log(student.age);
});
}

printAge(students);

// // Problem 2
function nameCity(arr){
arr.forEach(function(student){
  console.log(student.name + ",", student.city);
});
}

nameCity(students);

// Problem 3
function fromCity(arr){
arr.forEach(function(student){
  if(student.city === "Boulder"){
    console.log(student.name + " is from", student.city);
    }
  });
}

fromCity(students);

// Derek is from Boulder
// Carl is from Boulder
// Peter is from Boulder

// Problem 4
function over25(arr){
arr.forEach(function(student){
  if(student.age > 25){
    console.log(student.name + " is older than 25");
    }
  });
}

over25(students);
// Liz is older than 25
// Carl is older than 25


});
