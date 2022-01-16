//script for mobile video gallery  
let crossMatchMedia = window.matchMedia("(max-width:1080px");
if(crossMatchMedia.matches){
    var crossSlide = document.getElementsByClassName("crossVideo")
    var crossDot = document.getElementsByClassName("crossDot")
    var i;
    var crossSlideIndex = 1
    function currentCrossDot(){
        for (i=0; i<crossDot.length; i++){
            crossDot[i].classList.remove("current")
        }
        crossDot[crossSlideIndex-1].classList.add("current")
    }
    function changeSlidesCrossDot(n){
        crossSlideIndex = n
        for (i=0; i<crossSlide.length; i++){
            crossSlide[i].style.display = "none"
        }
        crossSlide[crossSlideIndex-1].style.display = "block"
        currentCrossDot()
    }
    for (var i = 0 ; i < crossSlide.length; i++) {
        crossSlide[i].addEventListener('swiped-right', function(){
            crossSlideIndex -= 1;
            if (crossSlideIndex < 1) {
                crossSlideIndex = crossSlide.length;
            }
            for (i=0; i<crossSlide.length; i++){
                crossSlide[i].style.display = "none"
            }
            crossSlide[crossSlideIndex-1].style.display = "block"
            currentCrossDot()
        }) 
    }
    for (var i = 0 ; i < crossSlide.length; i++) {
        crossSlide[i].addEventListener('swiped-left', function(){
            crossSlideIndex += 1;
            if (crossSlideIndex > crossSlide.length) {
                crossSlideIndex = 1;
            }
            for (i=0; i<crossSlide.length; i++){
                crossSlide[i].style.display = "none"
            }
            crossSlide[crossSlideIndex-1].style.display = "block"
            currentCrossDot()
        }) 
    }
    console.log("no")
}
else{
    console.log("yes")
}
