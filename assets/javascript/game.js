var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#randomNumber").html(randomNumber);

var crystalNumber1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#crystal1").val(crystalNumber1);
console.log(crystalNumber1);

var crystalNumber2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#crystal1").val(crystalNumber2);
console.log(crystalNumber2);

var crystalNumber3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#crystal1").val(crystalNumber3);
console.log(crystalNumber3);

var crystalNumber4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#crystal1").val(crystalNumber4);
console.log(crystalNumber4);


var storedNumber = 0;

//use a class element to grab all crystals
//use $(this).val() to retrieve assigned value
//parseInt() grabbed value
//storedNumber += grabbed value


$("#crystal1").on("click", function() {
    storedNumber += crystalNumber1;
    $("#storedNumber").html(storedNumber);
})

$("#crystal2").on("click", function() {
    storedNumber += crystalNumber2;
    $("#storedNumber").html(storedNumber);
})

$("#crystal3").on("click", function() {
    storedNumber += crystalNumber3;
    $("#storedNumber").html(storedNumber);
})

$("#crystal4").on("click", function() {
    storedNumber += crystalNumber4;
    $("#storedNumber").html(storedNumber);
})


//create conditional statement if (storedNumber === randomNumber) {
// you win game
//}
//else if (storedNumber > randomNumber)
