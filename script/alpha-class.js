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
        console.log('you have presssed correctly', playerPress);
        removeBackgroundColorById(playerPress);
        continueGame();
    }
    else{
        console.log('you can not get point');
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