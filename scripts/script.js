const dropBtn = document.querySelector(".nav__drop-btn");
const navList = document.querySelector(".nav__list");

dropBtn.onclick = function () {
  const isOpen = navList.classList.toggle("nav__list-open");
  if (isOpen === true) {
    document.querySelector("html").style.overflow = "hidden";
  } else {
    document.querySelector("html").style.overflow = "auto";
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  // slidesPerGroup: 1,
  // loopAddBlankSlides: 3,
  spaceBetween: 24,
  autoplay: {
    delay: 3500,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1080: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
});
