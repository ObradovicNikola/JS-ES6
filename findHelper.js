var users = [
    { name: 'Nikola'},
    { name: 'Marko'},
    { name: 'Milos'}
];

var user;
/*
for (var i = 0; i < users.length; i++) {
    if(users[i].name === 'Milos') {
        user = users[i];
        break;
    }
}
*/

/*
user = users[0];
var i = 0;
while (user.name != 'Milos' && i < users.length) {
    user = users[i];
    i++;
}
*/

// returns first occurance only
user = users.find(function(user) {
    return user.name === 'Milos';
});

console.log(user);