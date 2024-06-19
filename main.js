// services toggle

// const servicesButtons = document.querySelectorAll('.service__item');
// const servicesDetails = document.querySelector('.services__right');

// const getService = (category) => {
//   const details = servicesData.find(item => item.category === category);
//   servicesDetails.innerHTML = `
//   <h3>${details.title}</h3>
//   ${details.description.map(paragraph => '<p>' + paragraph + '</p>').join('')}
//   `
// }

// const removeAtiveClass = () =>{
//   servicesButtons.forEach(button => {
//     button.classList.remove('active')
//   })
// }

// servicesButtons.forEach(item => {
//   item.addEventListener('click', () => {
//     removeAtiveClass();
//     const servicesClass = item.classList[1];
//     getService(servicesClass)
//     item.classList.add('active')
//   })
// })

//   getService('frontend');

//   // mixitup

//   const containerEl = document.querySelector('.projects__container');

//   var mixer = mixitup(containerEl, {
//     animation:{
//       enable: false,
//     }
//   });

//   mixer.filter('*');

// nav toggle mobile

const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector(".nav__toggle-open");
const navCloseBtn = document.querySelector(".nav__toggle-close");
const closeHandler = () => {
  navMenu.style.display = "none";
  navCloseBtn.style.display = "none";
  navOpenBtn.style.display = "flex";
};
const openHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "flex";
};

navOpenBtn.addEventListener("click", openHandler);
navCloseBtn.addEventListener("click", closeHandler);

// close navmenu onclick of nav on small screen

const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeHandler);
  });
}

// THEME TOGGLE BUTTON

const themeBtn = document.querySelector(".nav__theme-btn");
themeBtn.addEventListener("click", () => {
  let bodyClass = document.body.className;
  if (!bodyClass) {
    bodyClass = "dark";
    document.body.className = bodyClass;
    // chnage toggle icon
    themeBtn.innerHTML = '<i class="uil uil-sun">';
    //save to local storage
    window.localStorage.setItem("theme", bodyClass);
  } else {
    bodyClass = "";
    document.body.className = bodyClass;
    // chnage toggle icon
    themeBtn.innerHTML = '<i class="uil uil-moon">';
    //save to local storage
    window.localStorage.setItem("theme", bodyClass);
  }
});

// load theme on save

window.addEventListener("load", () => {
  document.body.className = window.localStorage.getItem("theme");
});

// swiper js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
});
