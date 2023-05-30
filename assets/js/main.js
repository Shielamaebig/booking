$(document).ready(function () {

    $('.slick').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        nextArrow: '<button class="slick-next px-2 py-1 bg-transparent"><i class="bi bi-chevron-right text-white next"></i></button>',
        prevArrow: '<button class="slick-prev px-2 py-1 bg-transparent"><i class="bi bi-chevron-left text-white prev"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 412,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick-as').slick({
        dots:false,
        nextArrow: false,
        prevArrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
});

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 0)
    {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
})
