'use strict';

$(document).ready(function() {
	var windowWidth = $(window).width();
	if(windowWidth > 767) {
		$(window).on('scroll', checkScrollPosition);
	} else {
		$("nav.navbar").removeClass("d-none")
			.addClass("sticky-header");
	}
});

var checkScrollPosition = function() {
	var scrollPosition = $(window).scrollTop();
	$("nav.navbar").toggleClass("d-none", scrollPosition < 125);
	$("nav.navbar").toggleClass("sticky-header", scrollPosition > 125);
};