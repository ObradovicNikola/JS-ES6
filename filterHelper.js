var products = [{
    name: 'apple',
    type: 'fruit',
    price: 5
}, {
    name: 'onion',
    type: 'vegetable',
    price: 8
}, {
    name: 'banana',
    type: 'fruit',
    price: 10
}, {
    name: 'cucumber',
    type: 'vegetable',
    price: 7
}];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log('Fruits:')
console.log(filteredProducts);

var vegetables = [];

vegetables = products.filter(function (product) {
    return product.type === 'vegetable';
});

console.log("Vegetables:");
console.log(vegetables);

var cheapFruits = [];
cheapFruits = products.filter(function (product) {
    return product.type === 'fruit' &&
        product.price < 10;
})
console.log("Fruits that cost less than 10");
console.log(cheapFruits);