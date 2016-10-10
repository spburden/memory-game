var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function(){
  var newGame = new Memory("name");
  var click = 0;
  var cardOne = "";
  var cardTwo = "";
  var cardOneImg = "";
  var cardTwoImg = "";
  var match = 0;
    $(".col-md-4").click(function(){
      $(".output").empty();
      $(this).children().show();
      click += 1;
      // console.log(cardOne);

      if (click === 1) {
        cardOne = $(this).attr("id");
        cardOneImg = $(this).children('img').attr("src");
      } else if (click === 2) {
        click = 0;
        cardTwo = $(this).attr("id");
        cardTwoImg = $(this).children('img').attr("src");
          if(newGame.checkMatch(cardOneImg, cardTwoImg)){
            match += 1;
            if(match === 3){
              $(".output").append("You Won! Game Over");
            } else {
                $(".output").append("It's a match!");
            }
          } else {
            $(".output").append("NO match!");
            setTimeout(function() {
              $('#' + cardOne).children().hide();
              $('#' + cardTwo).children().hide();
            },1000);
          }
        }
    });
});
