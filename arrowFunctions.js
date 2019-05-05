/*
const add = function(a, b) {
    return a + b;
}
*/
/*
// arrow function
const add = (a, b) => {
    sum = a + b;
    return sum;
}
*/
const add = (a, b) => a + b;

// one argument
const double = number => 2 * number;

console.log(add(1, 2));
console.log(double(2));

const numbers = [1, 2, 3];

/*
console.log(numbers.map(function (number) {
    return 2 * number;
}));
*/

console.log(numbers.map(number => 2 * number));

/*
const team = {
    members: ['Fanste', 'Dzoni'],
    teamName: 'Totally unique team name',
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`;
        }.bind(this));
    }
}
*/

const team = {
    members: ['Fanste', 'Dzoni'],
    teamName: 'Totally unique team name',
    teamSummary: function(){
        return this.members.map(member => 
            `${member} is on team ${this.teamName}`
            // this === team
        );
    }
}

console.log(team.teamSummary());