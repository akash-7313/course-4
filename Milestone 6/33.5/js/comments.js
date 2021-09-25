function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
// loadComments();
function displayComments(comments){
    // console.log(comments);
    const parentCall = document.getElementById('comment-container');
    for (const comment of comments){
        // console.log(comment);
        const div = document.createElement('div');
        div.style.backgroundColor='#189';
        div.style.padding='10px';
        div.style.margin='10px';
        div.innerHTML=`
            <h5>${comment.email} </h5>
            <h3>${comment.name} </h3>
            <p>${comment.body} </p>
            <button  onclick="loadDetail('${comment.id}')">see detail</button>
        `
        parentCall.appendChild(div);
    }
}
function loadDetail(id){
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data))
}
function showDetail(comments){
    console.log(comments);
    const parentCall = document.getElementById('details');
    parentCall.textContent='';
    const div = document.createElement('div');
    div.style.backgroundColor='#31325498';
    div.style.padding='10px';
    div.style.margin='10px';
    div.innerHTML=`
        <h2>Comments details</h2>
        <h5>${comments.email} </h5>
        <h3>${comments.name} </h3>
        <p>${comments.body} </p>
    `
    parentCall.appendChild(div);
}

























