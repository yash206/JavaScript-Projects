const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    const sounds = document.querySelectorAll(".sound-picker button");
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");
    const reset = document.querySelector(".reset");

    //reset
    reset.addEventListener('click', ()=>{
        song.currentTime = 0;
        video.currentTime = 0;
        song.pause();
        video.pause();
        play.src = 'svg/play.svg';
    })

    // Length of Outline
    const outlineLength = outline.getTotalLength();
    // Duration
    let fakeDuration = 600;

    // for setting the overlay of the outline svgs
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //pick sound
    sounds.forEach(sound => {
        sound.addEventListener('click', function(){
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");
            song.pause();
            video.pause();
            play.src = 'svg/play.svg';
        })
    })

    // play sound
    play.addEventListener('click', () => {
        checkPlay();
    });

    window.onkeydown = function(event){
        if(event.keyCode === 32) {
            event.preventDefault();
           play.click(); 
        }
    };

    // duration of sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function () {
            fakeDuration = this.getAttribute("data-time");
            song.currentTime = 0;
            song.pause();
            video.pause();
            play.src = 'svg/play.svg';
            video.currentTime = 0;
            let mins = Math.floor(fakeDuration / 60);
            timeDisplay.textContent = `${mins<10 ? "0"+ mins : mins}:00`;
        });
    })


    // function for pause and play
    const checkPlay = () => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = 'svg/pause.svg';
        }
        else {
            song.pause();
            video.pause();
            play.src = 'svg/play.svg'
        }
    }

    // animate time
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        seconds.toFixed(2);
        if(seconds==0) seconds = seconds + "0";
        if(seconds<10 && seconds>0) seconds = "0" + seconds;
        if(minutes==0) minutes = minutes + "0";
        if(minutes<10 && minutes>0) minutes = "0" + minutes;
        // animate circle
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;
        //animate text 
        timeDisplay.textContent = `${minutes}:${seconds}`

        if (currentTime >= fakeDuration) {
            song.pause();
            video.pause();
            play.src = 'svg/play.svg'
            song.currentTime = 0;
            video.currentTime = 0;
        }
    }
}

app()