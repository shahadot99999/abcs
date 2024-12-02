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

function continueGame(){

    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

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