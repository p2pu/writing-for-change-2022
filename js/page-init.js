/*global jQuery, window, document, console, location */

var W4C = window.W4C || {};

(function ($, W4C) {

	'use strict';


	var init = function () {
		$(function () {
			// p2pu tab
			$(".p2pu-tab").p2puSlider({
				navbarContainer: '.navbar',
				icon: '.p2pu-tab-icon',
				iconUp: 'fa fa-chevron-down',
				iconDown: 'fa fa-chevron-up'
			});

			// Smoth scrolling
			$('a[href*=#]:not([href=#])').click(function () {
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - 100
						}, 1000);
						return false;
					}
				}
			});

            var signupForm = $('#id-form-signup');
            if (signupForm.length){
                signupForm.submit(function(event){
                    event.preventDefault();
                    $.post(signupForm.attr('action'), signupForm.serialize()).done(function() {
                        window.location = '/signup/success';
                    })
                    .fail(function() {
                        alert( "Something went wrong with you signup, please try re-submitting your signup." );
                    })
                    .always(function() {
                    });
                });
            }
		});
	};

	W4C.Splash = {};
	W4C.Splash.init = init;

}(jQuery, W4C));
