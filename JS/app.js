const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

let activeSlideNumber = 1;

let dots = document.querySelectorAll(".dot");
let slides = document.querySelectorAll(".slide");

let hideActiveSlide = () => {
  let activeElement = document.querySelector(".slide.active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }
};

let showSlide = (slideNumber) => {
  hideActiveSlide();
  let slideToShow = slides[slideNumber - 1];
  if (slideToShow) {
    slideToShow.classList.add("active");
    activeSlideNumber = slideNumber;
  }
};

let showNextSlide = () => {
  activeSlideNumber = activeSlideNumber === slides.length ? 1 : activeSlideNumber + 1;
  showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
  activeSlideNumber = activeSlideNumber === 1 ? slides.length : activeSlideNumber - 1;
  showSlide(activeSlideNumber);
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index + 1);
  });
});

arrowRight.addEventListener("click", showNextSlide);
arrowLeft.addEventListener("click", showPreviousSlide);
