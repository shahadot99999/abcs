// function play(){
//     //console.log('play start now')

//     //show home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList)

//     //show play ground
//     const playgroundSection = document.getElementById('play-ground');
//     //console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden')
// }


// function handleKeyboardButtonPress(){
//     console.log('button press');
// }


// //capture keyboard key press 
// document.addEventListener('keyup', handleKeyboardButtonPress )

function handleKeyboardKeyUPEvent(event){

    

    const playerPress = event.key;
    console.log('player press',playerPress);


    //stop the game if press 'Esc
    if(playerPress === 'Escape'){
        gameOver();
    }


    // key player is expected to press
   
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check wright or wrong
    if(playerPress === expectedAlphabet)
    {
        console.log('you got point');

        //................function apply
       const currentScore = getTextElementValueById('current-score');
       //console.log(currentScore);
       const updateScore = currentScore + 1;

       setTextElementValueById('current-score' , updateScore);




        //...........................................
        //console.log('you have presssed correctly', playerPress);

       //update a score:
       //1.get the current score


    //    const currentScoreElement = document.getElementById('current-score');
    //    const currentScoreText = currentScoreElement.innerText;
    //    //console.log(currentScoreText);
    //    const currentScore = parseInt(currentScoreText);
    //    console.log(currentScore);


    


    //    //2. Increase the new score by 1
     // const newScore = currentScore + 1;

    //    //3. show the up date score
    //    currentScoreElement.innerText = newScore;


        

        //start a new round
        removeBackgroundColorById(playerPress);
        continueGame();
    }
    else{
        console.log('you can not get point');


        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1; 
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            //console.log('game over');
            gameOver();
        }

          //............................................
        // //step 1 : get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);


        // //step 2 : reduce the life count
        // const newLife = currentLife - 1 ;


        // //step 3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }

}

document.addEventListener('keyup', handleKeyboardKeyUPEvent);

function continueGame(){

    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log('Your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    //set background color
    setBackgroundColorById(alphabet);

}

function play(){

    //hide everything show only the playground 
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);



    continueGame();
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');


   //update final score
   //1. get the final score
   const lastScore = getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('last-score', lastScore);

   //clear the last selected alphabet highlight
   const currentAlphabet = getElementTextById('current-alphabet');
   //console.log(currentAlphabet);
   removeBackgroundColorById(currentAlphabet);
}