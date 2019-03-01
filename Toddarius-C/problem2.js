/*
Problem 2:
Declare an empty array. Using your code from problem one, populate that array with 100 random numbers.
Output your array in JSON using JSON.stringify(your_array_here) and console.log()
*/

// var numbers = [100];

var arr = [100];
for (var i=0, t=100; i<t; i++) {
    arr.push(Math.round(Math.random() * 101))
}

console.log(arr)

var myJSON = JSON.stringify(arr);

console.log(myJSON);