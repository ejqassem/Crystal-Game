function player(health, attackPower) {
  this.health = health;
  this.attackPower = attackPower;
};

function enemy(health, counterAttackPower) {
  this.health = health;
  this.counterAttackPower = counterAttackPower;
}

var goku = new player(120, 10);
var gohan = new player(150, 15);
var cell = new enemy(180, 8);

goku.image = "{<img class='heroes' id='goku' src='assets/images/goku2.jpg' width='280px' height='235px'>}";

gohan.image = "<img class='heroes' src='assets/images/gohan-ssj2.jpg' width='280px' height='235px'>";

cell.image = "<img class='enemies' src='assets/images/perfect-cell.jpg' width='280px' height='235px'>";


$("#heroes").append(goku.image);

$("#heroes").append(gohan.image);

$("#enemies").append(cell.image);


$(".heroes").on("click", function() {
  $(".heroes").not(this).css("display", "none");
  $(this).parent().css({position: 'relative'});
  $(this).css({position: 'absolute'});
  $(this).animate({
    right: "-=140"
  });

  //Trying to retrieve the current jquery image that was clicked to reference
  //this.health property to display on screen????


  // if($(this.attr) === "goku" ) {
  //   var gokuHealth = goku.health;
  //   gokuHealth = parseInt(gokuHealth);
  //   $("#heroes").html(gokuHealth);
  // }

})


$(".enemies").on("click", function() {
  $(".enemies").not(this).css("display", "none");
  $(this).parent().css({position: 'relative'});
  $(this).css({position: 'absolute'});
  $(this).animate({
    right: "-=140"
  });
})


$("#startGame").on("click", function(event) {
  event.preventDefault();
})
