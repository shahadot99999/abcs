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

function play(){
    hideElementById('home-screen');

    showElementById('play-ground');
}