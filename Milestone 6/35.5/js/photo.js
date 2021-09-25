
const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))
}
loadPhotos();
function displayPhoto(photos) {
    // console.log(photos);
    const parentCall = document.getElementById('photos');
    // for (const photo of photos) {
    // }
    photos.forEach(photo => {
        // console.log(photo.id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.style.border = '2px dotted indigo';
        // div.style.margin = '5px';
        div.innerHTML = `
            <div class="card h-100">
                <img onclick="loadDetails(${photo.id})" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">${photo.title}</h6>
                </div>
            </div>
        `
        parentCall.appendChild(div);
    })
}

function loadDetails(id) {
    // console.log(id);
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}
// loadDetails();

function showDetails(detail) {
    console.log(detail);
    const parentCall = document.getElementById('detail');
    parentCall.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.style.border = '2px dotted yellow';
    div.innerHTML = `
        <div class="card h-100">
            <img width="200px" height="200px" src="${detail.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title">${detail.title}</h6>
            </div>
        </div>
    `
    parentCall.appendChild(div);
}































































































































