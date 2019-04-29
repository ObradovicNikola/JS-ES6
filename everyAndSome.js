const MinEnginePower = 1000;

var cars = [{
        model: 'Peugeot',
        enginePower: 800
    },
    {
        model: 'Mercedes',
        enginePower: 950
    },
    {
        model: 'BMW',
        enginePower: 900
    },
    {
        model: 'Lamborghini',
        enginePower: 1300
    },
    {
        model: 'Porsche',
        enginePower: 1500
    },
    {
        model: 'Fiat',
        enginePower: 500
    }
];

var allCarsCanRace = true;
var onlySomeCarsCanRace = false;

/*
for (var i = 0; i < cars.length; i++) {
    if (cars[i].enginePower < MinEnginePower) {
        allCarsCanRace = false;
    } else {
        onlySomeCarsCanRace = true;
    }
}
// onlySomeCarsCanRace = !allCarsCanRace;
*/

allCarsCanRace = cars.every(function(car) {
    return car.enginePower > MinEnginePower;
})
//onlySomeCarsCanRace = !allCarsCanRace;

onlySomeCarsCanRace = cars.some(function(car) {
    return car.enginePower < MinEnginePower;
})

console.log(allCarsCanRace);
console.log(onlySomeCarsCanRace);