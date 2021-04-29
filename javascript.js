
let playerPlacar = 0;
let computerPlacar = 0;

let computerPlay = () => {
    let option = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return option[index];


}
function playerPlay() {
    let playerChoice = prompt("Type here rock, paper or scissors: ");
    return playerChoice.toLowerCase();
       
}   

    function playRound(playerSelection,computerSelection){
       
              
            if (playerSelection ===  computerSelection){
                return "It's a tie";
            }else if(playerSelection === 'rock' && computerSelection ==='scissors'){
                playerPlacar +=1;
                return "You won! Rock beats scissors";              
            }else if (playerSelection === 'rock' && computerSelection ==='paper'){
                computerPlacar +=1
                return "You lose! Paper beats rock";              
            }else if (playerSelection === 'scissors' && computerSelection ==='paper'){
                playerPlacar +=1;
                return "You won! Scissors beats paper";
            }else if (playerSelection === 'scissors' && computerSelection ==='rock'){
                computerPlacar +=1
                return "You lose! Rock beats scissors";
            }else if (playerSelection ==='paper' && computerSelection ==='rock'){
                playerPlacar +=1;
                return "You won! Paper beats rock";
            }else if (playerSelection === 'paper' && computerSelection ==='scissors'){
                    return "You lose! scissors beats paper"; 
                   
            }
          
                }

    function game(){
        let player = 'player';
        let computer = 'computer';

        

        for (var i = 1; i <=5 ; i++){
            player = playerPlay();
            computer = computerPlay();
            console.log('Round: ' +i);
            console.log('Player: ' + player);
            console.log('Computer: ' + computer);
            console.log(playRound(player,computer));

        }

        if(playerPlacar > computerPlacar){
            console.log("Computer: "+computerPlacar+ " Player: "+playerPlacar+ " You won this, congratulations");
        }else if  (playerPlacar === computerPlacar) {
            console.log("Computer: "+computerPlacar+ " Player: "+playerPlacar+" It's a tie, no one won this game");
        }else{
            console.log("Computer: "+computerPlacar+ " Player: "+playerPlacar+"You lost, unfortunally");
        }
       


    }

game();