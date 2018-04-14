$(document).ready(function() {
	$('ul.nav>li').hover(function(){
		$(this).find('ul.dropdown').fadeIn();
	}, function() {
		$(this).find('ul.dropdown').fadeOut(0);
	});

	$('a.mobile-btn').on('click',function(e){
		e.preventDefault();
		$('.nav').toggleClass('nav-show');
	});

	$('.nav>li>a').on('click',function(e){
		e.preventDefault();
		$('.dropdown').slideToggle();
	});

    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});