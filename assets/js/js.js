
// preloader
setTimeout(() => {
    preloader.classList.add("d-none")
    document.body.classList.remove("overflow-hidden")
}, 2000)

// back-to-top
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-top");
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };
    button.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});

// slider

$('.slider-1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                dots: true,
                speed: 500,
                infinite: true,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 2,
                dots: true,
                speed: 500,
                infinite: true,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                dots: true,
                speed: 500,
                infinite: true,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                dots: true,
                speed: 500,
                infinite: true,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        }
    ]
});
// mini-slider

$('.mini-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
});
// slider-2


$('.slider-2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev-button",
    nextArrow: ".nxt-button",
});
$('.slider-3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev-button-1",
    nextArrow: ".nxt-button-1",
});


// nav-bar//

let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    nav.classList.toggle("nav-bg")
    nav.classList.toggle("nav-2")
    span1.classList.toggle("nav1")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    document.body.classList.toggle("overflow-hidden")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})

finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        span1.classList.toggle("nav1")
        nav.classList.toggle("nav-bg")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        document.body.classList.toggle("overflow-hidden")
    })
}); 