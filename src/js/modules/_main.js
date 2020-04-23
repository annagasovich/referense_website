import $ from 'jquery';

window.$ = window.jQuery = $;
var projectName = require("jquery-modal");

$(document).ready(function() {
    $('[rel="modal"]').click(function(e) {
        var popup = $(this).attr('data-popup');
        $(popup).modal();
    })

    $(".phone_mask").inputmask({"mask": "+7(999) 999-9999"});

    $('form').on('submit', function(e){
    	e.preventDefault();
    	$.ajax({
                url: 'bitrix.php',
                type: 'post',
                data: $(this).serialize(),
                success: function(){
                }
            });
    });
});