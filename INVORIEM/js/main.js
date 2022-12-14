$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        responsive : {

            0 : {
                items: 2,
                margin: 32,
            },

            601 : {
                items: 3
            },

            1001 : {
                items: 3,
                margin: 48,
            }
        }
    });
  });

  const videoBtn = document.querySelector("#video-btn");
  const videoPicture = document.querySelector(".video__picture");
  const videoWrapper = document.querySelector(".video__content-inner");
  const videoFile = document.querySelector("#video-file");

  videoWrapper.addEventListener("click", function () {
    if (videoFile.paused) {
        videoPicture.classList.add("hidden");
        videoWrapper.classList.remove("video-overlay");
        videoBtn.classList.add("none")
        videoFile.play();
    } else {
        videoWrapper.classList.add("video-overlay");
        videoBtn.classList.remove("none");
        videoFile.pause();
    }
  })

  const openNavBtn = document.querySelector("#openMobileNav");
  const mobileNav = document.querySelector("#mobileNav");
  const closeNavBtn = document.querySelector("#closeMobileNav");

  openNavBtn.onclick = function() {
    mobileNav.classList.remove("none")
    document.body.classList.add("no-scroll")
  }

  closeNavBtn.onclick = function() {
    mobileNav.classList.add("none")
    document.body.classList.remove("no-scroll")
  }