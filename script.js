const sliderImages = document.querySelectorAll(".slide-in");



function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function checkSlide(e) {

    sliderImages.forEach(slideImage => {

        //half way image positioning;
        let sliderImgPostion = (window.scrollY + window.innerHeight) - slideImage.height / 4;
        //dividing by 4 beacuse when i/4 height on the image will be shown the image will come ;
        // console.log(sliderImgPostion);

        //bottom of the image positioning;
        let imageBottom = slideImage.offsetTop + slideImage.height;
        let isHalfShown = sliderImgPostion > slideImage.offsetTop;
        let isNotScrolled = window.scrollY < imageBottom;



        if (isHalfShown && isNotScrolled) {
            slideImage.classList.add("active");
        } else {
            slideImage.classList.remove("active");
        }

    });



    // console.log(sliderImgPostion);












}


window.addEventListener("scroll", debounce(checkSlide))