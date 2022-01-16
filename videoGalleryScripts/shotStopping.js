//script for mobile video gallery  
let shotMatchMedia = window.matchMedia("(max-width:1080px");
if(shotMatchMedia.matches){
    let shotSlide = document.getElementsByClassName("shotStoppingVideo")
    let shotDot = document.getElementsByClassName("shotStoppingDot")
    var i;
    var shotSlideIndex = 1
    function currentShotDot(){
        for (i=0; i<shotDot.length; i++){
            shotDot[i].classList.remove("current")
        }
        shotDot[shotSlideIndex-1].classList.add("current")
    }
    function changeSlidesShotDot(n){
        shotSlideIndex = n
        for (i=0; i<shotSlide.length; i++){
            shotSlide[i].style.display = "none"
        }
        shotSlide[shotSlideIndex-1].style.display = "block"
        currentShotDot()
    }
    for (var i = 0 ; i < shotSlide.length; i++) {
        shotSlide[i].addEventListener('swiped-right', function(){
            shotSlideIndex -= 1;
            if (shotSlideIndex < 1) {
                shotSlideIndex = shotSlide.length;
            }
            for (i=0; i<shotSlide.length; i++){
                shotSlide[i].style.display = "none"
            }
            shotSlide[shotSlideIndex-1].style.display = "block"
            currentShotDot()
        }) 
    }
    for (var i = 0 ; i < shotSlide.length; i++) {
        shotSlide[i].addEventListener('swiped-left', function(){
            shotSlideIndex += 1;
            if (shotSlideIndex > shotSlide.length) {
                shotSlideIndex = 1;
            }
            for (i=0; i<shotSlide.length; i++){
                shotSlide[i].style.display = "none"
            }
            shotSlide[shotSlideIndex-1].style.display = "block"
            currentShotDot()
        }) 
    }
}
else{}
