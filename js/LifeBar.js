"use strict";

let maxScore = 100;
let playerHealth = 100;

let PlayerScore = document.querySelector("#playerScore");
let MonsterScore = document.querySelector("#monsterScore");
let PlayerDyingDisplay = document.querySelector("#playerDyingDisplay");
let MonsterDyingDisplay = document.querySelector("#monsterDyingDisplay");


function playerDying() {
  if (gameEnded)  {
    let damage = RegularAttack();
    playerHealth = maxScore - damage;
    PlayerDyingDisplay.style.width = playerHealth + "%";
    PlayerDyingDisplay.innerText = playerHealth + "%";
  } else if (playerHealth <= 0) {
        gameEnded = true;
        GiveUp();

      }
}
