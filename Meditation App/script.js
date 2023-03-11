const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    const sounds = document.querySelectorAll(".sound-picker button");
    const timeDisplay = document.querySelector(".time-display");

    // Length of Outline
    const outlineLength = outline.getTotalLength();
    // Duration
    let fakeDuration = 600;

    // for setting the overlay of the outline svgs
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // play sound
    play.addEventListener('click', ()=>{
        checkPlay();
    });

    // function for pause and play
    const checkPlay = song =>{
        if(song.paused){
            song.play();
            play.src = 'svg/pause.svg';
        }
        else{
            song.pause();
            song.src = 'svg/play.svg'
        }
    }
}

app()