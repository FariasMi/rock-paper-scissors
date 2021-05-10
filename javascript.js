
let playerPlacar = 0;
let computerPlacar = 0;

let computerPlay = () => {
    let option = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return option[index];
}

    function playRound(playerSelection,computerSelection){
       const results = document.querySelector('#results');
       const para = document.querySelector('#matching');
       const paraScore = document.querySelector('#score');
                      

                if(playerPlacar === 5){

                    para.style.color ='blue';
                    para.textContent = 'You won! PLAYER SCORE: '+playerPlacar +' COMPUTER SCORE: '+ computerPlacar ;  
                    results.appendChild(paraScore);
                    return;

                } else if (computerPlacar === 5){
                    paraScore.style.color ='red';
                    paraScore.textContent = 'You lose! PLAYER SCORE: '+playerPlacar +' COMPUTER SCORE: '+ computerPlacar ;  
                    results.appendChild(paraScore);
                    return;
                } else if (computerPlacar === 5 && playerPlacar==5){
                    paraScore.style.color ='red';
                    paraScore.textContent = 'It\'s a tie! PLAYER SCORE: '+playerPlacar +' COMPUTER SCORE: '+ computerPlacar ; 

                    results.appendChild(paraScore);
                    return;
                }



             
                if(playerSelection === 'rock' && computerSelection ==='scissors' ||
                playerSelection === 'scissors' && computerSelection ==='paper'||
                playerSelection === 'paper' && computerSelection ==='rock'){
                        playerPlacar +=1;
                        para.style.color ='blue';
                        paraScore.textContent = 'PLAYER SCORE: '+playerPlacar +' COMPUTER SCORE: '+ computerPlacar ; 
                        para.textContent = 'You won, '+playerSelection+' beats '+computerSelection;
                        results.appendChild(para);           
                }else if (playerSelection === 'rock' && computerSelection ==='paper'||
                        playerSelection === 'scissors' && computerSelection ==='rock'||
                        playerSelection === 'paper' && computerSelection ==='scissors'){ 
                                computerPlacar +=1
                               
                                paraScore.textContent = 'PLAYER SCORE: '+playerPlacar +' COMPUTER SCORE: '+ computerPlacar ; 
                                para.style.color ='red';
                                para.textContent = 'You lose, '+ computerSelection+' beats '+playerSelection;  
                                results.appendChild(para);                       
                            
                }       
          

                              
          
    }


    function game(){
                   
        
        const choices = document.querySelectorAll('button');
        choices.forEach((button) => {
            button.addEventListener ('click', () =>{
             
               playRound(button.id,computerPlay());
               console.log('player: '+playerPlacar);
               console.log('Computer: '+computerPlacar);
               

            }); 
            
                        
        });
        
    }  
      
   
game();