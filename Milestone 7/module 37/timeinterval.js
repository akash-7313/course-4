console.log(1);
console.log(2);
setInterval(() => {
    console.log('interval',3)
},5000)


let i = 0;
const iteration = setInterval(() => {
    // i++;
    console.log(i++);
    // console.log(++i);
    if (i == 5) {
        clearInterval(iteration);
    }
},3000)























