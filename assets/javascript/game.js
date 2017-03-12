var crystalNumber1;
var crystalNumber2;
var crystalNumber3;
var crystalNumber4;
var storedNumber = 0;
var clickedNumber = 0;
var wins = 0;
var losses = 0;

var randomNumber = Math.floor(Math.random() * (102)) + 19;
$("#randomNumber").html(randomNumber);

$("#storedNumber").html(storedNumber);


function generateRandomCrystal(variableName, id) {
  variableName = Math.floor(Math.random() * (12)) +1;
  $(id).val(variableName);
  console.log(variableName);
}

function restartGame() {
  storedNumber = 0;
  clickedNumber = 0;

  $("#randomNumber, #storedNumber").empty();

  randomNumber = Math.floor(Math.random() * (102)) + 19;
  $("#randomNumber").html(randomNumber);

  generateRandomCrystal(crystalNumber1, "#crystal1");
  generateRandomCrystal(crystalNumber2, "#crystal2");
  generateRandomCrystal(crystalNumber3, "#crystal3");
  generateRandomCrystal(crystalNumber4, "#crystal4");
}

generateRandomCrystal(crystalNumber1, "#crystal1");
generateRandomCrystal(crystalNumber2, "#crystal2");
generateRandomCrystal(crystalNumber3, "#crystal3");
generateRandomCrystal(crystalNumber4, "#crystal4");


$(".crystals").on("click", function() {
    clickedNumber = $(this).val();
    clickedNumber = parseInt(clickedNumber);
    storedNumber += clickedNumber;
    $("#storedNumber").html(storedNumber);

    if (storedNumber > randomNumber) {
      alert("Sucks to suck");
      losses++;
      $("#losses").html(losses);
      restartGame();
    }
    else if( storedNumber === randomNumber) {
      alert("You won the game");
      wins++;
      $("#wins").html(wins);
      restartGame();
    }
})
