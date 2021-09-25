function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    else{
        let mega = friends[0];
        for (const friend of friends) {
            if (friend.length > mega.length) {
                mega = friend;
            }
        }
    return mega;
    }
}
const friendName = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
// const myBigBuddy = megaFriend(friendName);
const myBigBuddy = megaFriend(123);
// console.log(myBigBuddy);

// indexof
if (friendName.indexOf('Fox') != -1) {
    console.log('Fox exists');
}
else {
    console.log("Fox doesn't exists")
}

// includes
if (friendName.includes('Lion')) {
    console.log('Lion exits using includes');
}