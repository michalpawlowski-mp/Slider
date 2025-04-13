const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

let activeSlideNumber = 1;

arrowLeft.addEventListener("click", () => {
  activeSlideNumber--;
  if (activeSlideNumber < 1) {
    activeSlideNumber = 5;
  }
  showSlide(activeSlideNumber);
});
arrowRight.addEventListener("click", () => {
  activeSlideNumber++;
  if (activeSlideNumber > 5) {
    activeSlideNumber = 1;
  }
  showSlide(activeSlideNumber);
});

const hideSlide = () => {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
};
const showSlide = (slideNumber) => {
  hideSlide();
  let slideToShow = slides[slideNumber - 1];
  if (slideToShow) {
    slideToShow.classList.add("active");
    activeSlideNumber = slideNumber;
  }
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index + 1);
  });
});
