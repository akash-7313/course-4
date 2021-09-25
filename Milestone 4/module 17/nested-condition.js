var applePrice = 80;
var orrangePrice = 60;
var bananaPrice = 30;
var budget = 90;
var importFromEuroupe = true;

// if(applePrice < budget){
//     console.log('eat apple');
// }
// else if(orrangePrice < budget){
//     console.log('eat orrange');
// }
// else if(applePrice < budget){
//     console.log('eat apple');
// }
// else if(bananaPrice < budget){
//     console.log('eat banana');
// }
// else{
//     console.log('drink water');
// }

if(applePrice < budget){
    if(importFromEuroupe == true){
        console.log('eat apple');
    }
    else{
        console.log('leave it');
    }
}
else{
    console.log('drink water');
}