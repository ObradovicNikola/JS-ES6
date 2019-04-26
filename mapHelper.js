var numbers = [1, 2, 3];
var doubledNumbers = [];


for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}


var doubled = numbers.map(function (number) {
    return number * 2;
})

console.log(doubledNumbers);
console.log(doubled);


var cars = [{
        model: "Peugeot",
        price: "3000$"
    },
    {
        model: "Mazda",
        price: "5000$"
    }
]

var prices = cars.map(function (car) {
    return car.price;
})

console.log(prices);