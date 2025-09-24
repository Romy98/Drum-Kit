
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

    function handleClick(){
        let buttonInnerHTML = this.innerHTML;
        makeSounds(buttonInnerHTML);
    }
}

document.addEventListener("keydown", function (event){
    let keyPressed = event.key;
    makeSounds(keyPressed);
})


function makeSounds(key){
    switch (key) {
            case "w":
                const tom1 = new Audio("/sounds/tom-1.mp3")
                return tom1.play();
            break;
            case "a":
                const tom2 = new Audio("/sounds/tom-2.mp3")
                return tom2.play();
            break;
            case "s":
                const tom3 = new Audio("/sounds/tom-3.mp3")
                return tom3.play();
            break;
            case "d":
                const tom4 = new Audio("/sounds/tom-4.mp3")
                return tom4.play();
            break;
            case "j":
                const snare = new Audio("/sounds/snare.mp3")
                return snare.play();
            break;
            case "k":
                const crash = new Audio("/sounds/crash.mp3")
                return crash.play();
            break;
            case "l":
                const kick = new Audio("/sounds/kick-bass.mp3")
                return kick.play();
            break;
            default:
                console.log(buttonInnerHTML);
                break;
        }
}