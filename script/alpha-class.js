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


    // key player is expected to press
   
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check wright or wrong
    if(playerPress === expectedAlphabet)
    {
        console.log('you got point');
        //console.log('you have presssed correctly', playerPress);

       //update a score:
       //1.get the current score


       const currentScoreElement = document.getElementById('current-score');
       const currentScoreText = currentScoreElement.innerText;
       //console.log(currentScoreText);
       const currentScore = parseInt(currentScoreText);
       console.log(currentScore);
       //2. Increase the new score by 1

       const newScore = currentScore + 1;

       //3. show the up date score
       currentScoreElement.innerText = newScore;


        

        //start a new round
        removeBackgroundColorById(playerPress);
        continueGame();
    }
    else{
        console.log('you can not get point');

        //step 1 : get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);


        //step 2 : reduce the life count
        const newLife = currentLife - 1 ;


        //step 3: display the updated life count
        currentLifeElement.innerText = newLife;
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
    hideElementById('home-screen');

    showElementById('play-ground');

    continueGame();
}