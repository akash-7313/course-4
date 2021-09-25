const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(words);
// console.log(withoutA);


// slice --- 1st num er index theke suru , last num er index er age sesh
const smallSlice1 = anthem.slice(5,10);
const smallSlice2 = anthem.slice(5,11);
const smallSlice3 = anthem.slice(5,12);
const smallSlice4 = anthem.slice(5,13);
// console.log(smallSlice1,smallSlice2,smallSlice3,smallSlice4); 


// substr --- 1st num er index theke suru , last num  = koto ta word dorkar space soho
const anotherPart1 = anthem.substr(5,8)
const anotherPart2 = anthem.substr(5,9)
const anotherPart3 = anthem.substr(5,10);
// console.log(anotherPart1,anotherPart2,anotherPart3);

// substring -- slice --- 2 ta same kaj kore
const anotherAnotherPart1 = anthem.substring(5,10);
const anotherAnotherPart2 = anthem.substring(5,11);
const anotherAnotherPart3 = anthem.substring(5,12);
const anotherAnotherPart4  = anthem.substring(5,13);
// console.log(anotherAnotherPart1,anotherAnotherPart2,anotherAnotherPart3,anotherAnotherPart4);

//concat --- add string @ array
const first = 'Amader';
const second = ' City';
// const fullString = first + ' ' + second;
const fullString = first.concat(second).concat(' abc').concat(' RJ Kibria');
// console.log(fullString);
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
// console.log(combined);

// join --- add string into array
const words2 = ['alim', 'badhon', 'cameron', 'david'];
const allJoined1 = words2.join('');
const allJoined2 = words2.join(' ');
const allJoined3 = words2.join(',');
const allJoined4 = words2.join(', ');
const allJoined5 = words2.join('WWW');
console.log(allJoined1,allJoined2,allJoined3,allJoined4,allJoined5);