
function annimales (miles) {
    var animalDensityFirst10Miles = 5;
    var animalDensitySecond10Miles = 10;
    var animalDensityRestMiles = 20;

    if (miles <= 10) {
        var totalAnimal = animalDensityFirst10Miles * miles;
    }
    else if (miles <= 20) {
        var animalInFirst10 = animalDensityFirst10Miles * 10;
        var restMiles = miles - 10;
        var animalInSecondStep = animalDensitySecond10Miles * restMiles;
        var totalAnimal = animalInFirst10 + animalInSecondStep;
    }
    else if (miles > 20) {
        var animalInFirst10 = animalDensityFirst10Miles * 10;
        var animalInSecond10 = animalDensitySecond10Miles * 10;
        var restMiles = miles - 20;
        var animalInRestStep = animalDensityRestMiles * restMiles;
        var totalAnimal = animalInFirst10 + animalInSecond10 + animalInRestStep;
    }
return totalAnimal;
}
var seenAnnimals = annimales(25);
console.log(seenAnnimals);