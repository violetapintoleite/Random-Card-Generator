/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let nipes = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let targetNipe = document.querySelectorAll(".nipe");
  let targetNumber = document.querySelectorAll(".number");
  let changeColor = document.querySelector(".color");
  let triggerButton = document.querySelector(".trigger");

  function loopArray(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function generateCard() {
    var newNipe = `${nipes[loopArray(nipes)]}`;
    var newNumber = `${numbers[loopArray(numbers)]}`;
    targetNipe.forEach(function(nipe) {
      if (newNipe === "♥" || newNipe === "♦") {
        changeColor.style.color = "red";
      }
      if (newNipe === "♠" || newNipe === "♣") {
        changeColor.style.color = "black";
      }
      nipe.innerHTML = newNipe;
    });
    targetNumber.forEach(function(number) {
      number.innerHTML = newNumber;
    });
  }

  triggerButton.addEventListener("click", generateCard);
};
