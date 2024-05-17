(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    // $(document).ready(function() {
    //     const $carousel = $(".header-carousel");
    //     const items = $carousel.find(".owl-carousel-item");
    
    //     items.each(function() {
    //         const imgSrc = $(this).find("img").attr("src");
    //         const slices = createSlices(imgSrc, 3); // Change 5 to the number of slices you want
    //         $(this).append(slices);
    //         $(this).append(`<img src="${imgSrc}" class="full-image" alt="">`);
    //     });
    
    //     function createSlices(imgSrc, numSlices) {
    //         const sliceContainer = $('<div class="sliced"></div>');
    //         for (let i = 0; i < numSlices; i++) {
    //             const slice = $('<div class="slice"></div>');
    //             slice.css({
    //                 'background-image': `url(${imgSrc})`,
    //                 'background-position': `0 ${-i * 100 / numSlices}%`,
    //                 'background-size': `100% ${100 * numSlices}%`
    //             });
    //             sliceContainer.append(slice);
    //         }
    //         return sliceContainer;
    //     }
    
    //     $carousel.owlCarousel({
    //         autoplay: true,
    //         smartSpeed: 1500,
    //         loop: true,
    //         nav: false,
    //         dots: true,
    //         items: 1,
    //         dotsData: true,
    //         animateOut: 'fadeOut',
    //         onTranslate: function(event) {
    //             const currentItem = $(event.target).find(".owl-item").eq(event.item.index).find(".owl-carousel-item");
    //             const slices = currentItem.find(".sliced .slice");
    //             const fullImage = currentItem.find(".full-image");
    
    //             slices.each(function(index, element) {
    //                 $(element).css({
    //                     'animation-delay': `${index * 0.2}s`
    //                 }).addClass('animated');
    //             });
    
    //             fullImage.css({
    //                 'animation-delay': `${1.5 + slices.length * 0.2}s` // Adjust delay to ensure full image shows after slices animation
    //             }).addClass('animated');
    //         },
    //         onTranslated: function(event) {
    //             const currentItem = $(event.target).find(".owl-item").eq(event.item.index).find(".owl-carousel-item");
    //             const slices = currentItem.find(".sliced .slice");
    //             const fullImage = currentItem.find(".full-image");
    
    //             // Remove animations for the next cycle
    //             slices.each(function(index, element) {
    //                 $(element).removeClass('animated');
    //             });
    
    //             fullImage.removeClass('animated');
    //         }
    //     });
    // });
    
    
    

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    $('.part-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:5
            },
           
        },
        dotsData:false,
    });

    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const isActive = question.nextElementSibling.classList.contains('active');
    
            // Collapse all questions
            questions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.classList.remove('active');
                    q.classList.remove('minus');
                    q.classList.add('plus');
                }
            });
    
            // Toggle the clicked question
            question.nextElementSibling.classList.toggle('active', !isActive);
            question.classList.toggle('plus', isActive);
            question.classList.toggle('minus', !isActive);
        });
    });
    
})(jQuery);

