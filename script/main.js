//---------------hamburger-------------
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//---------------slider-----------
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
loop: true,

pagination: {
el: '.swiper-pagination',
clickable: true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});

