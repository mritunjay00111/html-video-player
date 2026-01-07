const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = video.paused ? "▶" : "⏸";
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress(){
    const currDuration = (video.currentTime/video.duration) *100;
    progressBar.style.flexBasis = `${currDuration}%`;
}

function handleScrub(e){
 video.currentTime = ((e.offsetX/progress.offsetWidth)*video.duration);
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("input", handleRange);
});
// let mousedown = false;
progress.addEventListener('click',(e)=>{
    handleScrub(e);
});
// progress.addEventListener('mousedown',(e)=>{ handleScrub(e);});
// // progress.addEventListener('mousedown',()=>{mousedown = true;});
// // progress.addEventListener('mouseup',()=>{mousedown = false});
// added fullscreen feature 
const fullscreenBtn = player.querySelector('.fullscreen');

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

fullscreenBtn.addEventListener('click', toggleFullscreen);

