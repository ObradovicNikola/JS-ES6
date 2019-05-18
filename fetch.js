url = 'https://jsonplaceholder.typicode.com/posts/'

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    // this catch runs only when network request flat out fails (nonexistent domain)
    // any error code > 300 is automatically handled
    .catch(error => console.log('Network request failed.', error))
