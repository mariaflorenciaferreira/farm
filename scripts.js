const keymap={
    cow:"cow",
    horse:"horse",
    rooster:"rooster",
    sheep:"sheep"
}



function play(key){

    
    const audioElement = document.querySelector(`audio[data-key="${key}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    setTimeout(()=>{
        audioElement.pause();
        
    },3000);
}

window.addEventListener('click', (e)=>{
    const key= keymap[e.key];
    if (key){
        play(key)
    }
})

function handleClick(key) {
    play(key);

    const selectedAnimal= document.querySelector(`.animal[id="${key}"]`)
    selectedAnimal.classList.add("animation")

}