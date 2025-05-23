"use strict";

let PlayerButton = document.querySelector("#playerButton");
let MonsterButton = document.querySelector("#monsterButton");
let resetButton = document.querySelector(".ResetButton");
let ScoringButtons = document.querySelectorAll(".ScoringButton");
let PlayerDyingDisplay = document.querySelector("#playerDyingDisplay");
let MonsterDyingDisplay = document.querySelector("#monsterDyingDisplay");


let scorePlayer = 0;
let scoreMonster = 0;
let maxScore = 100;
let Death = 0;

let gameEnded = false;



function ShowScore(){
    PlayerDyingDisplay.innerText = scorePlayer;
    MonsterDyingDisplay.innerText = scoreMonster;
};

function StartGame();

function RegularAttack(){
    if(!gameEnded){
        const minRegularAttackNumber = 3;
        const maxMonsterAttackNumber = 10
        return Math.floor(Math.random() * ((minRegularAttackNumber - maxMonsterAttackNumber + 1)) + minRegularAttackNumber);

    }
};

function SpecialAttack(){
    const minSpecialAttackNumber = 10;
    const maxSpecialAttackNumber = 20;
    return Math.floor(Math.random() * ((minSpecialAttackNumber - maxSpecialAttackNumber + 1)) + minSpecialAttackNumber);

};

function Heal(){
    return HealingNumber = 10;
};

function EnemyAttack(){
    if(!gameEnded){
  const minMonsterAttackNumber = 5;
  const maxMonsterAttackNumber = 10;
  return Math.floor(Math.random() * ((minMonsterAttackNumber - maxMonsterAttackNumber + 1)) + minMonsterAttackNumber);    
    }
};

function ShowScore();

function AndTheWinnerIs(){
    if ((scorePlayer === 0) ||GiveUp ){ // GiveUp à revoir
        gameEnded = true;
        let winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "Monster wins!/You lose!";  
        document.body.appendChild(winner); 
             HideButtons();     
    } else if (scoreMonster === 0){
        gameEnded = true;
        let winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "Player wins!/You win!";  
        document.body.appendChild(winner); 
             HideButtons();     
    }

} 


function GiveUp(){
    scorePlayer = 100;
    scoreMonster = 100;
    gameEnded = false;

    StartGame();
};

function HideButtons() {
    ScoringButtons.forEach(button => {
        button.style.display = "none";
    });
}

function ShowButtons() {
    ScoringButtons.forEach(button => {
      button.style.display = "block";
    });
}

function LogGame();