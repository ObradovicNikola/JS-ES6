function* colors() {
    yield 'red';
    yield 'green';
    yield 'blue';
}

/*
const gen = colors();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
*/

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);