"use strict";

let PlayerButton = document.querySelector("#playerButton");
let MonsterButton = document.querySelector("#monsterButton");
let resetButton = document.querySelector(".ResetButton");
let ScoringButtons = document.querySelectorAll(".ScoringButton");
let PlayerDyingDisplay = document.querySelector("#playerDyingDisplay");
let MonsterDyingDisplay = document.querySelector("#monsterDyingDisplay");
let PlayerScore = document.querySelector("#playerScore");
let MonsterScore = document.querySelector("#monsterScore");
let GameLog = document.querySelector(".GameLog");
let AttackButton = document.querySelector("#attackButton");
let HealButton = document.querySelector("#healButton");
let SpecialAttackButton = document.querySelector("#specialAttackButton");
let GiveUpButton = document.querySelector("#giveUpButton");

let Player = document.querySelector("#player");
let Monster = document.querySelector("#monster");
let Damage;
let scorePlayer = 0;
let scoreMonster = 0;
let maxScore = 100;
let playerHealth = 100;
let monsterHealth = 100;
let Death = 0;
let HealingNumber = 10

let gameEnded = false;

function startGame() {
    playerHealth = maxScore;
    monsterHealth = maxScore;
    gameEnded = false;
    updateHealthBars();
    showButtons();
    clearGameLog();
    removeWinnerDisplay();
    logMessage("Nouveau combat commencé !", "playerHealLog");
}

document.addEventListener("DOMContentLoaded", function() {
   
AttackButton.addEventListener("click", RegularAttack());
SpecialAttackButton.addEventListener("click", SpecialAttack());
HealButton.addEventListener("click", Heal());
resetButton.addEventListener("click", GiveUp());

});


function RegularAttack(){
    if(!gameEnded){
        const minRegularAttackNumber = 3;
        const maxMonsterAttackNumber = 10
        Damage = Math.floor(Math.random() * ((minRegularAttackNumber - maxMonsterAttackNumber + 1)) + minRegularAttackNumber);
        Damage.classList.add("regularAttack");
        Damage.name = "Regular Attack";
        MonsterDying(Damage);
        LogGame();

    }
};

function SpecialAttack(){
    const minSpecialAttackNumber = 10;
    const maxSpecialAttackNumber = 20;
    Damage = Math.floor(Math.random() * ((minSpecialAttackNumber - maxSpecialAttackNumber + 1)) + minSpecialAttackNumber);
    Damage.classList.add("specialAttack");
    Damage.name = "Special Attack";
    MonsterDying(Damage);
        LogGame();
        
};

function Heal(){
    Damage = HealingNumber;
     LogGame();
};

function EnemyAttack(){
    if(!gameEnded){
  const minMonsterAttackNumber = 5;
  const maxMonsterAttackNumber = 10;
  MonsterDamage = Math.floor(Math.random() * ((minMonsterAttackNumber - maxMonsterAttackNumber + 1)) + minMonsterAttackNumber);   
logMessage(`Monster attacks player for ${MonsterDamage} points`);
updateHealthBars();

    }
};

function ShowScore(){
    PlayerDyingDisplay.innerText = `${ maxScore - scorePlayer}`;
    MonsterDyingDisplay.innerText = `${ maxScore - scoreMonster}`;
};

function updateHealthBars() {
  if (gameEnded)  {
    let playerIsThisCloseToDeath = (playerHealth / maxScore) * 100;
    let monsterIsThisCloseToDeath = (monsterHealth / maxScore) * 100;

    
    PlayerDyingDisplay.style.width = playerHealth + "%";
    PlayerDyingDisplay.innerText = playerHealth + "%";
  } else if (playerHealth <= 0) {
        gameEnded = true;
        GiveUp();

      }
}
function MonsterDying(){
    if (gameEnded)  {
        Damage = EnemyAttack();
    monsterHealth = maxScore - Damage;
    MonsterDyingDisplay.style.width = playerHealth + "%";
    MonsterDyingDisplay.innerText = playerHealth + "%";
  } else if (playerHealth <= 0) {
        gameEnded = true;
        GiveUp();

      }
    }


function AndTheWinnerIs(message){
        let winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = message  
        document.body.appendChild(winner); 
    }


function EndGame(){
    if (playerHealth <= 0 || GiveUp) {
        gameEnded = true;
        AndTheWinnerIs("Monster wins!/You lose!");
       
    } else if (monsterHealth <= 0) {
        gameEnded = true;
        AndTheWinnerIs("Player wins!/You win!");
        
    }
}

function GiveUp(){
    AndTheWinnerIs();
    PlayerDyingDisplay.style.width = maxScore;
    MonsterDyingDisplay.style.width = maxScore;
    gameEnded = false;

    StartGame();
};


function LogGame(){

if (Damage === RegularAttack() || Damage === SpecialAttack()){
    let PlayerAttackLog= document.createElement("li");
    PlayerAttackLog.innerText = `${Player} scored a ${Damage.name} for ${Damage} points`;
    PlayerAttackLog.classList.add("playerAttackLog");
    GameLog.appendChild(PlayerAttackLog);


} else if (Damage === EnemyAttack()){
    let MonsterAttackLog= document.createElement("li");
    MonsterAttackLog.innerText = `${Monster} scored a ${Damage.name} for ${Damage} points`;
    MonsterAttackLog.classList.add("monsterAttackLog");
    GameLog.appendChild(MonsterAttackLog);

} else if (Damage === Heal()){
    let PlayerHealLog= document.createElement("li");
    PlayerHealLog.innerText = `${Player} healed themselves for ${HealingNumber} points`;
    PlayerHealLog.classList.add("playerHealLog");
    GameLog.appendChild(PlayerHealLog);
}
}