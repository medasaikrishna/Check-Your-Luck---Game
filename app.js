let min=1,
    max=10,
    winningNum=getWinningNum(min,max),
    guessesLeft=3;


    const game=document.getElementById('game'),
            minNum=document.querySelector('.min-num'),
            maxNum=document.querySelector('.max-num'),
            guessBtn=document.querySelector('#guess-btn'),
            guessInput=document.querySelector('#guess-input'),
            message=document.querySelector('.message');

    minNum.textContent=min;
    maxNum.textContent=max;

    game.addEventListener('mousedown',function(e){
        if(e.target.className=== 'play-again')
        {window.location.reload();}
    })
    guessBtn.addEventListener('click',function(){

        let guess=parseInt(guessInput.value);
        if(isNaN(guess) || guess<min || guess>max){
            setMessage(`please enter number between ${min} and ${max}`,'red');
        }

        if(guess===winningNum){
            guessInput.disabled=true;
            guessInput.style.borderColor='green';
            setMessage(`${winningNum} is correct, YOU WIN the GAME`,'green');
            guessBtn.value='Play Again';
            guessBtn.className+='play-again';

        }else{
            guessesLeft-=1;
            if(guessesLeft===0)
            {   guessInput.disabled=true;
                guessInput.style.borderColor='red';
                setMessage(`${winningNum} is correct answer, YOU LOST the GAME`,'red');
                guessBtn.value='Play Again';
            guessBtn.className+='play-again';

            }else{
                guessInput.style.borderColor='red';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
                guessInput.value='';
            }
        }
    });

    function getWinningNum(min,max){
       let x=Math.round(Math.random()*(max-min+1)+min);
        return x;
    }
    function setMessage(msg,color)
    {
        message.style.color=color;
        message.textContent=msg;
    }

    

