var numbers = [10, 20, 30];
var sum = 0;

/*
for( var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
*/

sum = numbers.reduce(function (sum, number) {
    console.log(number);
    return sum + number;
}, 0)

console.log(sum);

var string = ")(())";

/*
// bad if string is very long
function isBalanced(string) {
    return !string.split("").reduce(function (count, curr) {
        console.log(curr);
        if (count < 0) return count;
        if (curr === '(') return ++count;
        if (curr === ')') return --count;
    }, 0);
}
// as soon as counter goes bellow zero
// we can stop looping
// but this reduce helper will loop trough whole array
*/

// optimal solution
function isBalanced(string) {
    const array = string.split("");
    var count = 0,
        i = 0;
    while (count >= 0 && i < array.length) {
        if (array[i] === '(') count++;
        else if (array[i] === ')') count--;
        i++;
    }
    if(i == array.length && count == 0)
        return true;
    else return false;
}

console.log(isBalanced(string));