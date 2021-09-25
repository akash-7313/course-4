

document.getElementById('post').addEventListener('click', function() {

    var commentBox = document.getElementById('comment');

    var newPost = document.createElement('p');
    newPost.innerText= commentBox.value;

    var commentContainer = document.getElementById('updated-comment');
    commentContainer.appendChild(newPost);

    commentBox.value='';

})







































