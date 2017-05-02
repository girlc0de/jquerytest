$(document).ready(function() {
	// when button1 is clicked the image will hide//
	$('.button1').on('click', function(){
		$('img').toggle();
	})
	// button2 makes image slide up and down//
	$('.button2').on('click', function() {
		$('img').slideToggle();
	})
	// button3 fades//
	$('.button3').on('dblclick', function() {
		$('img').fadeToggle();
	})

	$('.button4').on('dblclick', function() {
		$('h1').toggleClass('change');
	})
	$('.button5').on('click', function() {
		$('#bugs').append('<li>Bugs Bunny</li>');
	})
	$('.button6').on('dblclick', function() {
		$('#lola').prepend('<li>Porky Pig</li>');
	})
	$('.image').hover(function() {
		$(this).animate({
			opacity: 0.2, width: '500px'
		})
	})
	$('h2').mouseenter(function() {
		$(this).slideToggle('slow');
	})
	$('.button7').hover(function() {
		$(this).fadeToggle('slow');
	})
	$('p').hover(function() {
		$(this).toggleClass('salmon')
	})
});