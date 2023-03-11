const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    const sounds = document.querySelectorAll(".sound-picker button");
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");

    // Length of Outline
    const outlineLength = outline.getTotalLength();
    // Duration
    let fakeDuration = 600;

    // for setting the overlay of the outline svgs
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

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
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:00`;
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