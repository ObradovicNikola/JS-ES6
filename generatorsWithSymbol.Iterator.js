const testingTeam = {
    lead: 'Mikica',
    tester: 'Goran',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Slavoljub',
    manager: 'Mara',
    engineer: 'Dule'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);
