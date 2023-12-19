// Slider

const slider = document.querySelector('.modal-work__preview');
const sliderLine = document.querySelector('.modal-work__preview-sliderline');
const sliderImages = document.querySelectorAll('.modal-work__photo');
const sliderDot = document.querySelectorAll('.slider__dot');
const btnNext = document.querySelector('.modal-work__btn-next');
const btnPrev = document.querySelector('.modal-work__btn-prev');


let sliderCount = 0;
let sliderWidth;


const move = () => {

    window.addEventListener('resize', showSlide);

    function showSlide() {
        sliderWidth = slider.clientWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

        rollSlide();
    }

    showSlide();

    btnNext.onclick = nextSlide;
    btnPrev.onclick = prevSlide;

    function nextSlide() {
        sliderCount++;

        if (sliderCount >= sliderImages.length) {
            sliderCount = 0;
        }

        rollSlide();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;

        if (sliderCount < 0) {
            sliderCount = sliderImages.length - 1;
        }

        rollSlide();
        thisSlide(sliderCount);
    }

    function rollSlide() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    function thisSlide(index) {
        sliderDot.forEach(item => item.classList.remove('active-dot'));
        sliderDot[index].classList.add('active-dot');
    }

    sliderDot.forEach((dot, index) => {
        dot.onclick = function () {
            sliderCount = index;
            rollSlide();
            thisSlide(sliderCount);
        }
    })

    /*setInterval(() => {
    nextSlide();
    }, 3000)*/
}

export default move;



