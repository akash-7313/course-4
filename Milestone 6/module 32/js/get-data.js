function tryData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
// tryData()

// display users
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers(users) {
    // console.log(users);
    const parentCall = document.getElementById('users');
    for(const user of users){
        // console.log(user);
        // console.log(user.name, user.email);
        const createLi = document.createElement('li');
        createLi.innerText = `name: ${user.name},    email: ${user.email}`;
        parentCall.appendChild(createLi);
    }
}


// display posts
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(posts) {
    const parentCall = document.getElementById('display-posts');
    for (const post of posts){
        console.log(post);
        const createDiv = document.createElement('div');
        createDiv.style.backgroundColor='cadetBlue';
        createDiv.style.border='2px solid blue';
        createDiv.style.borderRadius='10px';
        createDiv.style.marginBottom='5px';
        createDiv.style.padding='20px';
        createDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        parentCall.appendChild(createDiv);
    }
}

// display comments
function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(comments) {
    const parentCall = document.getElementById('comments');
    for (const comment of comments){
        const div = document.createElement('div');
        div.style.backgroundColor='cadetBlue';
        div.style.border='2px solid blue';
        div.style.borderRadius='10px';
        div.style.marginBottom='10px';
        div.style.padding='20px';
        div.innerHTML=`
        <p>${comment.body}</p>
        <h3>${comment.name}</h3>
        <h6>${comment.email}</h6>
        `;
        parentCall.appendChild(div);
    }
}


function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbum(data))
}
function displayAlbum(albums){
    const parentCall = document.getElementById('albums');
    for (const album of albums){
        const li = document.createElement('li');
        li.innerText = album.title;
        parentCall.appendChild(li);
    }
}

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    const parentCall = document.getElementById('todo');
    for (const todo of todos){
        const div = document.createElement('div');
        div.style.backgroundColor='cadetBlue';
        div.style.border='2px solid blue';
        div.style.borderRadius='10px';
        div.style.marginBottom='10px';
        div.style.padding='10px';
        div.innerHTML=`
        <h3>${todo.title}</h3>
        <h6>${todo.completed}</h6>
        `;
        parentCall.appendChild(div);
    }
}


function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
function displayPhotos(photos) {
    const parentCall = document.getElementById('photo');
    for (const photo of photos){
        const div = document.createElement('div');
        div.style.backgroundColor='cadetBlue';
        div.style.border='2px solid blue';
        div.style.borderRadius='10px';
        div.style.marginBottom='10px';
        div.style.padding='20px';
        div.innerHTML=`
        <img>${photo.url}</img>
        <img>${photo.thumbnailUrl}</img>
        <p>${photo.title}</p>
        `;
        parentCall.appendChild(div);
    }
}
























