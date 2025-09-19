
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

    function handleClick(){
        const audio1 = new Audio("/sounds/tom-1.mp3")
        return audio1.play();
    }
}