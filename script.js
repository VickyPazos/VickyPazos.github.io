$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu_stiky').addClass('menu-fixed');
		} else {
			$('.menu_stiky').removeClass('menu-fixed');
		}
	});

});