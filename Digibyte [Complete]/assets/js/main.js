;
(function($) {
    'use strict'
    jQuery(document).ready(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        let mixer = mixitup('.items-wrapper');

        let filterBtn = document.querySelectorAll('.filter-btn')

        filterBtn.forEach((singleItem) => {
            singleItem.addEventListener('click', function() {
                filterBtn.forEach((val) => {
                    val.classList.remove('active')
                })
                this.classList.add('active')
            })
        })

        $('#select').niceSelect();

        $(".testimonial-wrapper").slick({

            // normal options...
            infinite: false,
            arrows: false,
            dots: true,
            slidesToShow: 2,
            autoplay: true,

            // the magic
            responsive: [{

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                },

            }, {

                breakpoint: 300,
                settings: "unslick" // destroys slick

            }]
        });

        //ACORDION
        $(".faq-content").css("display", "none");

        $(".faq-title").click(function() {
            $(".faq-title").not(this).removeClass("open");
            $(".faq-title").not(this).next().slideUp(300);
            $(this).toggleClass("open");
            $(this).next().slideToggle(300);
        });

        const faqTitle = document.querySelectorAll('.faq-title')

        faqTitle.forEach((value) => {
            if (value.classList.contains('open')) {
                value.nextElementSibling.style.display = 'block'
                value.parentElement.style.boxShadow = '0px 10px 60px 0px rgb(38 103 255 / 10%)'
            }
            value.addEventListener('click', (e) => {
                if (value.classList.contains('open')) {
                    value.nextElementSibling.style.display = 'block'
                    value.parentElement.style.boxShadow = '0px 10px 60px 0px rgb(38 103 255 / 10%)'
                }
            })
        })

        let wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        });
        wow.init();

        const toggleBtn = $('#menu-toggle'),
            menuPanel = $('.mobile-menu-panel'),
            closeBtn = $('#hide-panel');

        toggleBtn.on('click', () => {
            menuPanel.toggleClass('show-panel');
        })
        closeBtn.on('click', () => {
            menuPanel.toggleClass('show-panel');
        })


    })

    $(window).on('scroll', function() {
        const scrollTop = $(window).scrollTop(),
            siteHeader = $('#sticky-header');
        if (scrollTop < 200) {
            siteHeader.removeClass('sticky');
        } else {
            siteHeader.addClass('sticky');
        }

    })


})(jQuery)