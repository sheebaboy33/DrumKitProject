
var buttonCount = document.querySelectorAll(".drum").length;


// Detects button press
for (var i = 0; i < buttonCount; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        findTheSound(buttonInnerHTML);
    });
}

// Detects keyboard press
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    findTheSound(keyPressed);
});


function findTheSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            buttonAnimation(key);
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            buttonAnimation(key);
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            buttonAnimation(key);
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            buttonAnimation(key);
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            buttonAnimation(key);
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            buttonAnimation(key);
            break;
        
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            buttonAnimation(key);
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}
