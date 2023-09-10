// $(document).ready(function() {
//     $(this).scrollTop(0);
// });


const navbar = document.querySelector('.navbar');
const menuBar = document.querySelector('#menu-bar');


menuBar.onclick = () => {

    navbar.classList.toggle('active');
    menuBar.classList.toggle('change');
}

let sections = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('.navbar ul li a');


window.onscroll = () => {

    navbar.classList.remove('active');
    menuBar.classList.remove('change');



    let current = '';
    sections.forEach(sec => {

        let sectionTop = sec.offsetTop;


        if (scrollY > (sectionTop - 150)) {
            current = sec.getAttribute('id')
        }

    })
    NavLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.navbar ul li a[href*=' + current + ']').classList.add('active');
    })

}

const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.querySelector('.search-overlay');
const closeOverlay = document.querySelector('.close-overlay');
console.log(searchBtn);
searchBtn.onclick = () => {
    event.preventDefault();
    searchOverlay.classList.toggle('show')

}
closeOverlay.onclick = () => {
    searchOverlay.classList.remove('show')
}



// **************************************swiper script******************************

var swiper = new Swiper(".slide-container", {
    spaceBetween: 30,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",

    fade: "true",
    autoplay: {
        delay: 7500,
        disableOniteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },


});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",

    fade: "true",
    autoplay: {
        delay: 5500,
        disableOniteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },

});

// **********************************separate food in menu********************************
const indicators = document.querySelector('.indicator').children;
const foodBoxes = document.querySelector('.menu-boxes-container').children;
console.log(foodBoxes);

for (let i = 0; i < indicators.length; i++) {
    indicators[i].onclick = function() {

        for (let x = 0; x < indicators.length; x++) {
            indicators[x].classList.remove('active');
        }
        this.classList.add('active');

        const indicatorAttr = this.getAttribute('data-filter');

        for (let z = 0; z < foodBoxes.length; z++) {
            foodBoxes[z].style.transform = 'scale(0)'

            setTimeout(() => {
                foodBoxes[z].style.display = 'none';
            }, 300);

            if (foodBoxes[z].getAttribute('data-food') == indicatorAttr || indicatorAttr == 'all') {
                foodBoxes[z].style.transform = 'scale(1)';

                setTimeout(() => { foodBoxes[z].style.display = 'block'; }, 300);
            }

        }

    }

}



// ***********************datepicker***********************

$(document).ready(function() {
    $(".persian-date").pDatepicker();
});

// ***********************loader***********************

function loading() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loading, 500);
}
window.onload = fadeOut;
// window.onload = () => {
//     window.scrollY = 0;
// }














// let topsection = window.scrollY;
// let height = sec.offsetHeight;

// let offset = sec.offsetTop - 150;
// let id = sec.getAttribute('id');

// if (topsection => offset && topsection < offset + height) {
//     NavLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('.navbar ul li a[href*=' + id + ']').classList.add('active');
//     })
// }