//script for mobile video gallery  
let oneMatchMedia = window.matchMedia("(max-width:1080px");
if(oneMatchMedia.matches){
    let oneSlide = document.getElementsByClassName("oneVideo")
    let oneDot = document.getElementsByClassName("oneDot")
    var i;
    var oneSlideIndex = 1
    function currentOneDot(){
        for (i=0; i<oneDot.length; i++){
            oneDot[i].classList.remove("current")
        }
        oneDot[oneSlideIndex-1].classList.add("current")
    }
    function changeSlidesOneDot(n){
        oneSlideIndex = n
        for (i=0; i<oneSlide.length; i++){
            oneSlide[i].style.display = "none"
        }
        oneSlide[oneSlideIndex-1].style.display = "block"
        currentOneDot()
    }
    function plusOneSlide(){
        oneSlideIndex += 1;
            if (oneSlideIndex > oneSlide.length) {
                oneSlideIndex = 1;
            }
            for (i=0; i<oneSlide.length; i++){
                oneSlide[i].style.display = "none"
            }
            oneSlide[oneSlideIndex-1].style.display = "block"
            currentOneDot()
    }
    function minusOneSlide(){
        oneSlideIndex -= 1;
        if (oneSlideIndex < 1) {
            oneSlideIndex = oneSlide.length;
        }
        for (i=0; i<oneSlide.length; i++){
            oneSlide[i].style.display = "none"
        }
        oneSlide[oneSlideIndex-1].style.display = "block"
        currentOneDot()
    }
    for (var i = 0 ; i < oneSlide.length; i++) {
        oneSlide[i].addEventListener('swiped-right', function(){
            oneSlideIndex -= 1;
            if (oneSlideIndex < 1) {
                oneSlideIndex = oneSlide.length;
            }
            for (i=0; i<oneSlide.length; i++){
                oneSlide[i].style.display = "none"
            }
            oneSlide[oneSlideIndex-1].style.display = "block"
            currentOneDot()
        }) 
    }
    for (var i = 0 ; i < oneSlide.length; i++) {
        oneSlide[i].addEventListener('swiped-left', function(){
            oneSlideIndex += 1;
            if (oneSlideIndex > oneSlide.length) {
                oneSlideIndex = 1;
            }
            for (i=0; i<oneSlide.length; i++){
                oneSlide[i].style.display = "none"
            }
            oneSlide[oneSlideIndex-1].style.display = "block"
            currentOneDot()
        }) 
    }
}