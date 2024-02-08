document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* Preloading */
  const preloading = document.querySelector("#preloading");
  if (preloading) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloading.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloading.remove();
      }, 2000);
    });
  }

  /* Scroll to Top */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
    );
  }

  /* Initiate glightbox */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /* Init swiper slider with 1 slide at once in desktop view */
  new Swiper(".slides-1", {
    speed: 500,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Init swiper slider with 3 slides at once in desktop view */
  new Swiper(".slides-3", {
    speed: 500,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* Animation on scroll function and init */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
