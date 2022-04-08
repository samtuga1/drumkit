var numberOfDrums = document.querySelectorAll('button').length;

for(var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function () {
        buttonAnimation(this.textContent);
        playSound(this.textContent);
    })
}

document.addEventListener('keypress', function(event) {
    buttonAnimation(event.key);
    playSound(event.key);
})

function playSound(letter) {
    switch(letter){
        case 'w':
            var audio = new Audio('../sounds/crash.mp3');
            audio.play(); 
        break;  
        case 'a' :
            var audio = new Audio('../sounds/kick-bass.mp3');
            audio.play();
        break;
        case 's' :
            var audio = new Audio('../sounds/snare.mp3');
            audio.play();
        break;
        case 'd' :
            var audio = new Audio('../sounds/tom-1.mp3');
            audio.play();
        break;
        case 'j' :
            var audio = new Audio('../sounds/tom-2.mp3');
            audio.play();
        break;
        case 'k' :
            var audio = new Audio('../sounds/tom-3.mp3');
            audio.play();
        break;
        case 'l' :
            var audio = new Audio('../sounds/tom-4.mp3');
            audio.play();
        break;
        default:
            console.log('button not found');
    }
}

function buttonAnimation(button){
    var activeButton = document.querySelector('.' + button);
    activeButton.classList.add('pressed');
    setTimeout(function (){
        activeButton.classList.remove('pressed');
    }, 100)
}