const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible')
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    '@1.5': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    '@0.8': {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('scroll-anim-opacity-1')
    } else {
      entry.target.classList.remove('scroll-anim-opacity-1')
    }
  });
});

const hiddenElements = document.querySelectorAll('.scroll-anim-opacity-0');
hiddenElements.forEach((el) => observer.observe(el));