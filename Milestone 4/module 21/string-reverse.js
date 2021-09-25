function reverseString (text) {
    var ultaPalta = '';
    for (var letter of text) {
        ultaPalta = letter + ultaPalta;
    }
    return ultaPalta;
}
var hello = 'My name is Batash';
var reversed = reverseString (hello);
console.log(reversed);

console.log(hello.length);
console.log(hello[0]);
console.log(hello[9]);
console.log(hello[3]);

