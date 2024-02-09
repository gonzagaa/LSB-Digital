window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showButtonWhatsappOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal().reveal('#home h1', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out'});
ScrollReveal().reveal('#home img, #services .card, #more h3, #more h2, #more a, #time h2, #time span, #time h2, #time span, #time-mobile h2, #time-mobile span, #contact header, #contact input, #contact form, #clientes .logos', { distance: '400px', origin: 'bottom', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .left', { distance: '400px', origin: 'left', desktop: false ,duration: 500, easing: 'ease-in-out'});
ScrollReveal().reveal('#services .right', { distance: '400px', origin: 'right', desktop: false ,duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#time .left-container .content', { distance: '400px', origin: 'left',duration: 500, easing: 'ease-in-out'});
ScrollReveal().reveal('#time .right-container .content', { distance: '400px', origin: 'right',duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .header', { distance: '200px', origin: 'left', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .first', { distance: '200px', origin: 'right', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .second', { distance: '200px', origin: 'right', duration: 500, delay: 300 ,easing: 'ease-in-out'});

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  var swiper = new Swiper(".mySwiperDesktop", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    keyboard: true,
  });