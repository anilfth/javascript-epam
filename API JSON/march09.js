const req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
req.send();
req.addEventListener('readystatechange',() => {
    if(req.readyState === 4){
        console.log(req.responseText)
    }
})