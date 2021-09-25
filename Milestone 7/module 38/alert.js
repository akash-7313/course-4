const giveAlert = () => {
    alert('save your future,come in the shadow of islam.')
}

const confirmInfo = () => {
    const response = confirm('Are you participate with us?');
    console.log(response);
    if (response === true) {
        alert('bkash 800 tk');
    }
    else {
        alert('stay home,stay safe');
    }
}

const giveInfo = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}

























