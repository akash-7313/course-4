function loadCountry () {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
loadCountry()
function displayCountry(countries){
    // console.log(countries);
    const parentCall = document.getElementById('country');
    for (const country of countries){
        // console.log(country);
        const div = document.createElement('div');
        div.style.border= '1px dashed blue';
        div.style.borderRadius= '20px';
        div.style.padding= '10px';
        div.style.margin= '10px';
        div.style.textAlign='center';
        div.innerHTML = `
            <img width=100px src="${country.flag}">
            <h6> ${country.name}</h6>
            <button onclick="loadCountryDetail('${country.name}')">learn more</button>
        `
        parentCall.appendChild(div);
    };
}
function loadCountryDetail(name){
    console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data[0]))
}
function displayDetail(detail) {
    console.log(detail);
    const showDetail = document.getElementById('country-detail');
    showDetail.style.borderRadius= '10px';
    showDetail.style.border= '1px dashed indigo';
    showDetail.style.padding='10px';
    showDetail.style.textAlign='center';

    showDetail.innerHTML =`
        <img width=200px src="${detail.flag}">
        <h3> ${detail.name}</h3>
        <p style="font-size:20px"> ${detail.altSpellings[1]}</p>
        <p style="font-size:20px"> Capital: ${detail.capital}</p>
        <p style="font-size:20px"> Continent: ${detail.region}</p>
        <p style="font-size:20px"> Area: ${detail.area} S.Km</p>
        <p style="font-size:20px"> Population: ${detail.population}</p>
        <p style="font-size:20px"> Language: ${detail.languages[0].name}</p>
    `
}









