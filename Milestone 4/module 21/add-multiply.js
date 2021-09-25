
function woodNeeded (chairQuantity, tableQuantity, bedQuantity) {
    var perChairWood = 5;
    var perTableWood = 10;
    var perBedWood = 50;
    // per tools wood needed
    var chairWood = perChairWood * chairQuantity;
    var tableWood = perTableWood * tableQuantity;
    var bedWood = perBedWood * bedQuantity;
    // total wood needed
    var wood = chairWood + tableWood + bedWood;
    return wood;
}
var totalWood = woodNeeded(10, 2, 3);
console.log(totalWood);






