// document.querySelector('.js-rock').addEventListener('click',() => 
//     playerMove('rock')
// )
// document.querySelector('.js-paper').addEventListener('click',() => 
//     playerMove('paper')
// )
// document.querySelector('.js-scissors').addEventListener('click',() => 
//     playerMove('scissors')
// )
let score = JSON.parse(localStorage.getItem('score')) ;
if(score === null){
    score ={
     wins:0,
     losses:0,
     ties:0
    }
 };

 updateScoreElement();
function computerMove() {
    const RandomNo = Math.random();
    let computerMove = '';
    if (RandomNo >= 0 && RandomNo < 1 / 3) {
        computerMove = 'rock';
    }
    else if (RandomNo >= 1 / 3 && RandomNo < 2 / 3) {
        computerMove = 'paper';
    }
    if (RandomNo >= 2 / 3 && RandomNo < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
} 
function playerMove(playerMove) {
    const computerMove2 = computerMove();
    let result = '';
    if(playerMove === 'rock'){
        if(computerMove2 === 'rock'){
            result = 'Tie';
        }
        else if(computerMove2 === 'paper'){
            result = 'You lose';
        }
        else if(computerMove2 === 'scissors') {
            result = 'you win';
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove2 === 'rock') {
            result= 'you win';
        }
        else if(computerMove2 === 'paper') {
            result = 'tie';
        }
        else if(computerMove2 === 'scissors') {
            result = 'you lose';
        }
    }
    else if(playerMove === 'scissors'){
        if(computerMove2 === 'rock') {
            result= 'you lose';
        }
        else if(computerMove2 === 'paper') {
            result = 'you win';
        }
        else if(computerMove2 === 'scissors') {
            result = 'tie';
        }
    }
    if(result === 'you win') {
        score.wins++;
        }
        if(result === 'you lose') {
        score.losses++;
        }
        if(result === 'tie') {
        score.ties++;
        }
        
        localStorage.setItem('score' , JSON.stringify(score));
        
        updateScoreElement();

    document.querySelector('.moves').innerHTML =
    `<div>you<img src="images/${playerMove}-icon.png">
    <img src="images/${computerMove2}-icon.png">Computer</div> `;
    document.querySelector('.result').innerHTML = result;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
    }

