(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Memory(name) {
  this.name = name;
}

Memory.prototype.checkMatch = function(cardOne, cardTwo) {
  if (cardOne === cardTwo) {
    return true;
  } else {
    return false;
  }
  
};

exports.memoryModule = Memory;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
