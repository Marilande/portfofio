$(document).ready(function () {

	/* Direito e Programação - Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});
