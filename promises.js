const promise = new Promise((resolve, reject) => {
    resolve(); //reject();
});

promise.then(() => {
    console.log('Finally finished!');
}).then(() => {
    console.log('I was also ran.');
})

promise.catch(() => {
    console.log('Oops, something went wrong!');
})