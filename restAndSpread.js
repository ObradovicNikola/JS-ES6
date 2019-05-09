function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

// catching unlimited number of parameters
console.log(addNumbers(1,2,3,4,5,6));

const defaultColors = ['red', 'green', 'blue'];
const userColors = ['orange', 'purple'];

//console.log(defaultColors.concat(userColors));
console.log([...defaultColors, 'PINK', ...userColors]);