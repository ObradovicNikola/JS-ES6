var expense = {
    type: 'Business',
    amount: '45$ USD'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6
/*
const {
    type
} = expense;
const {
    amount
} = expense;
*/
const {
    type,
    amount
} = expense;

console.log(type);
console.log(amount);
//console.log(typeof amount);

var Human = {
    faction: 'Aliance',
    levelCap: '300',
    raceName: 'Human',
    size: 200
};

function raceSummary({
    raceName,
    faction,
    levelCap
}) {
    return `${raceName} is from faction ${faction} and max level is ${levelCap}`;
}

console.log(raceSummary(Human));