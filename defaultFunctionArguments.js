function Sum(a, b = 1, c) {
    return a + b + c;
}

console.log(Sum(2, undefined, 3));
console.log(Sum(2, null, 3));
console.log(Sum(2, 3, 4));
