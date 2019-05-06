/*
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}
*/
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue(){
            return inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Tarzan', price: 10},
    { title: 'Breakfast with  the devil', price: 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Tarzan'));
console.log(bookShop.priceForTitle('Breakfast with  the devil'));