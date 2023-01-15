let position = 0;
const testimonials = document.getElementsByClassName("testimonial");
const btnNext = document.getElementsByClassName("btn-next");
const btnPrev = document.getElementsByClassName("btn-prev");
const testimonialLength = testimonials.length;

const changeNext = function () {
  if (position == testimonialLength - 1) {
    position = 0;
  } else position++;

  for (let i = 0; i < testimonialLength; i++) {
    testimonials[i].classList.add("hidden");
    testimonials[position].classList.remove("hidden");
  }
};

const changePrev = function () {
  if (position == 0) {
    position = testimonialLength - 1;
  } else position--;

  for (let i = 0; i < testimonialLength; i++) {
    testimonials[i].classList.add("hidden");
    testimonials[position].classList.remove("hidden");
  }
};

for (let i = 0; i < btnNext.length; i++) {
  btnNext[i].addEventListener("click", changeNext);
}

for (let i = 0; i < btnPrev.length; i++) {
  btnPrev[i].addEventListener("click", changePrev);
}

let baseballPosition = 0;
const baseballImgs = document.getElementsByClassName("baseball-img");
const baseballBtnNext = document.getElementsByClassName("baseball-btn-next");
const baseballBtnPrev = document.getElementsByClassName("baseball-btn-prev");
const baseballImgsLength = baseballImgs.length;

const changeNextB = function () {
  if (position == baseballImgsLength - 1) {
    position = 0;
  } else position++;

  for (let i = 0; i < baseballImgsLength; i++) {
    baseballImgs[i].classList.add("hidden");
    baseballImgs[position].classList.remove("hidden");
  }
};

const changePrevB = function () {
  if (position == 0) {
    position = baseballImgsLength - 1;
  } else position--;

  for (let i = 0; i < baseballImgsLength; i++) {
    baseballImgs[i].classList.add("hidden");
    baseballImgs[position].classList.remove("hidden");
  }
};

for (let i = 0; i < baseballBtnNext.length; i++) {
  baseballBtnNext[i].addEventListener("click", changeNextB);
}

for (let i = 0; i < baseballBtnPrev.length; i++) {
  baseballBtnPrev[i].addEventListener("click", changePrevB);
}

let psPosition = 0;
const psImgs = document.getElementsByClassName("ps-img");
const psBtnNext = document.getElementsByClassName("ps-btn-next");
const psBtnPrev = document.getElementsByClassName("ps-btn-prev");
const psImgsLength = psImgs.length;

const changeNextP = function () {
  if (psPosition == psImgsLength - 1) {
    psPosition = 0;
  } else psPosition++;

  for (let i = 0; i < psImgsLength; i++) {
    psImgs[i].classList.add("hidden");
    psImgs[psPosition].classList.remove("hidden");
  }
};

const changePrevP = function () {
  if (psPosition == 0) {
    psPosition = psImgsLength - 1;
  } else psPosition--;

  for (let i = 0; i < psImgsLength; i++) {
    psImgs[i].classList.add("hidden");
    psImgs[psPosition].classList.remove("hidden");
  }
};

for (let i = 0; i < psBtnNext.length; i++) {
  psBtnNext[i].addEventListener("click", changeNextP);
}

for (let i = 0; i < psBtnPrev.length; i++) {
  psBtnPrev[i].addEventListener("click", changePrevP);
}

let atPosition = 0;
const atImgs = document.getElementsByClassName("at-img");
const atBtnNext = document.getElementsByClassName("at-btn-next");
const atBtnPrev = document.getElementsByClassName("at-btn-prev");
const atImgsLength = atImgs.length;

const changeNextA = function () {
  if (atPosition == atImgsLength - 1) {
    atPosition = 0;
  } else atPosition++;

  for (let i = 0; i < atImgsLength; i++) {
    atImgs[i].classList.add("hidden");
    atImgs[atPosition].classList.remove("hidden");
  }
};

const changePrevA = function () {
  if (atPosition == 0) {
    atPosition = psImgsLength - 1;
  } else atPosition--;

  for (let i = 0; i < atImgsLength; i++) {
    atImgs[i].classList.add("hidden");
    atImgs[atPosition].classList.remove("hidden");
  }
};

for (let i = 0; i < atBtnNext.length; i++) {
  atBtnNext[i].addEventListener("click", changeNextA);
}

for (let i = 0; i < atBtnPrev.length; i++) {
  atBtnPrev[i].addEventListener("click", changePrevA);
}

const services = document.querySelector(".services-btn");
const servicesContainer = document.querySelector(".services-container");

services.addEventListener("click", function () {
  servicesContainer.classList.toggle("open");
});

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
