// 
const user = {
    id:12454,
    name:'akash',
    job:'faltu'
}
const stringified = JSON.stringify(user);
const parsed = JSON.parse(stringified);

// console.log(user);
// console.log(stringified);
// console.log(parsed);

// 
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    isExpensive: false,
    revenue:1255,
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
const serverSide = JSON.stringify(company);
const clientSide = JSON.parse(serverSide);

console.log(company);
console.log(serverSide);
console.log(clientSide);
console.log(clientSide.ceo.name);



























