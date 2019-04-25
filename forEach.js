var colors = ['red', 'blue', 'green'];
var numbers = [1, 2, 3];
var sum = 0;

/*
for (var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
*/

// inner function
colors.forEach(function(color) {
    console.log(color);
})

// outer function
function findSum(number){
    sum += number;
}
numbers.forEach(findSum);
console.log(sum);