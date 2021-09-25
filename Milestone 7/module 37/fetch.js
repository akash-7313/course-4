console.log(1);
console.log(2);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(3);
for (let i = 0; i <= 100; i++){
    console.log(i);
}










































