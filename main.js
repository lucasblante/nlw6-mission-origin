//HEADER SHADOW
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

// TOGGLE MENU
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// CLOSE MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// TESTIMONIALS CAROUSEL SLIDER
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  scrollbar: true,
  mousewheel: true,
  keyboard: true,
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLLREVEAL
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700',
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contatc .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// BACK TO TOP
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

  window.addEventListener('scroll', () => {
    window.scrollY >= 560
      ? backToTopButton.classList.add('show')
      : backToTopButton.classList.remove('show')
  })
}

/* ACTIVE MENU */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    checkpointStart && checkpointEnd
    ? document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    : document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
  }
}

/* DO WHEN SCROLL */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


