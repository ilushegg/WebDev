const video = document.querySelector(".video-info__wrapper");
const videoFile = document.querySelector("#video-file");
const videoPreview = document.querySelector(".video-preview");
const videoBtn = document.querySelector(".video-btn");

video.addEventListener("click", function () {
    if(videoFile.paused){
        videoPreview.classList.add("hidden");
        videoBtn.classList.add("none");
        videoFile.classList.remove("hidden");
        videoFile.play();
    }
    else {
        videoBtn.classList.remove("none");
        videoFile.pause();
    }
});

