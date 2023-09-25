'use strict';
/*console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = '👌 Correct Number!';

document.querySelectpr('.number')=13;
document.querySelector('.score').textContent=20;


console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;*/
let num=Math.trunc(Math.random() * 20)+1;//always gives a random number between 0 and 1
let score=10;
let highscore=0;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);

    //wrong input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    }
    // when player wins
    
    else if (guess==num){
        document.querySelector('.message').textContent = '👌 Correct Number!';
        document.querySelector('.number').textContent=num;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width = '30rem';// needs to be inside a string
        if (score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }else if(guess!=num){
        if (score>1) {
            document.querySelector('.message').textContent =guess>num ? '😧Too High try Again!'  :' 😢Too low try Again!' ;
            score--;
            document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent='☠️ Sorry You lost';
                document.querySelector('.score').textContent=0; 
            }
    }
});

//adding functionality for again tab


document.querySelector('.again').addEventListener('click',function(){
    score=10;
     num=Math.trunc(Math.random() * 20)+1;
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.width = '15rem';
    const guess=Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.highscore').textContent=highscore;
});