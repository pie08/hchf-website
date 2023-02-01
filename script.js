///////////////////////////////////////////////////////////////////
// Slider
class Slider {
  constructor(slides, maxSlides) {
    this.curSlide = 0;
    this.slides = slides;
    this.maxSlides = maxSlides;

    this.slides.forEach(
      (slide, i) => (slide.style.transform = `translate(${100 * i}%)`)
    );
  }

  goToSlide(slide) {
    this.slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  goToNextSlide() {
    if (this.curSlide === this.maxSlides) {
      this.curSlide = 0;
      this.goToSlide(this.curSlide);
    } else {
      this.curSlide++;
      this.goToSlide(this.curSlide);
    }
  }

  goToPrevSlide() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlides;
      this.goToSlide(this.curSlide);
    } else {
      this.curSlide--;
      this.goToSlide(this.curSlide);
    }
  }
}

const sliderAtInit = function () {
  const slides = document.querySelectorAll(".slideAt");
  const btnNext = document.querySelector(".at-btn-next");
  const btnPrev = document.querySelector(".at-btn-prev");
  const maxSlides = slides.length - 1;

  const slider = new Slider(slides, maxSlides);

  btnNext.addEventListener("click", slider.goToNextSlide.bind(slider));
  btnPrev.addEventListener("click", slider.goToPrevSlide.bind(slider));
};
sliderAtInit();

const sliderPsInit = function () {
  const slides = document.querySelectorAll(".slidePs");
  const btnNext = document.querySelector(".ps-btn-next");
  const btnPrev = document.querySelector(".ps-btn-prev");
  const maxSlides = slides.length - 1;

  const slider = new Slider(slides, maxSlides);

  btnNext.addEventListener("click", slider.goToNextSlide.bind(slider));
  btnPrev.addEventListener("click", slider.goToPrevSlide.bind(slider));
};
sliderPsInit();

const sliderBsInit = function () {
  const slides = document.querySelectorAll(".slideBs");
  const btnNext = document.querySelector(".baseball-btn-next");
  const btnPrev = document.querySelector(".baseball-btn-prev");
  const maxSlides = slides.length - 1;

  const slider = new Slider(slides, maxSlides);

  btnNext.addEventListener("click", slider.goToNextSlide.bind(slider));
  btnPrev.addEventListener("click", slider.goToPrevSlide.bind(slider));
};
sliderBsInit();
///////////////////////////////////////////////////////////////////
// Modal window
const showModal = document.querySelectorAll(".btn-contact");
const closeModal = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-contact");

const showModalFunc = function () {
  overlay.classList.remove("hidden-secondary");
  modal.classList.remove("hidden-secondary");
};

const closeModalFunc = function () {
  overlay.classList.add("hidden-secondary");
  modal.classList.add("hidden-secondary");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", showModalFunc);
}
closeModal.addEventListener("click", closeModalFunc);
overlay.addEventListener("click", closeModalFunc);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-secondary")) {
    closeModalFunc();
  }
});

// Sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    } else {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////////////
// MOBILE NAV
const btnOpen = document.querySelectorAll(".btn-mobile-nav");
const naviagtion = document.querySelectorAll(".navigation");
btnOpen.forEach(function (link) {
  link.addEventListener("click", function () {
    naviagtion.forEach(function (i) {
      i.classList.toggle("nav-open");
    });
  });
});
// btnOpen.addEventListener("click", function () {
//   naviagtion.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////////////
// FIXING FLEXBOX GAP IN SAFARI
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
