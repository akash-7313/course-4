function randomUser() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
}
randomUser()
function displayUser(data) {
    // console.log(data);
    const users = data.results;
    // console.log(users);
    const parentCall = document.getElementById('users');
    for (const user of users){
        console.log(user);
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${user.picture.medium}">
            <h3> ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <h6> ${user.location.country}</h6>
            <p> ${user.gender}</p>
            <p> ${user.email}</p>
        `;
        parentCall.appendChild(div);
    }
}




























