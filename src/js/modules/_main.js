import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;
var projectName = require("jquery-modal");

$(document).ready(function() {
    $('[rel="modal"]').click(function(e) {
        var popup = $(this).attr('data-popup');
        $(popup).modal();
    })

    $('.video-slider').slick();
    $('.sertificates-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.fancy-faq .item').on('click', function(e){
        $(this).toggleClass('open');
        $(this).find('.answer').slideToggle();
    });

    $('.fancy-faq .item:first-child()').trigger('click');

    $(".phone_mask").inputmask({ "mask": "+7(999) 999-9999" });

    $('form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'bitrix.php',
            type: 'post',
            data: $(this).serialize(),
            success: function() {}
        });
    });
});