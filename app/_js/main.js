$('.slider-single')
	.on('init', () => {
		$('.slick-slide[data-slick-index="-2"]').addClass('lt2');
		$('.slick-slide[data-slick-index="-1"]').addClass('lt1');
		$('.slick-slide[data-slick-index="1"]').addClass('gt1');
		$('.slick-slide[data-slick-index="2"]').addClass('gt2');
	})
	.slick({
		infinite: true,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		appendArrows: $('.section-slider__arrows'),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					centerMode: false,
					variableWidth: false,
				}
			},
		]
	}).on('beforeChange', (event, slick, current, next) => {
		$('.slick-slide.gt2').removeClass('gt2');
		$('.slick-slide.gt1').removeClass('gt1');
		$('.slick-slide.lt1').removeClass('lt1');
		$('.slick-slide.lt2').removeClass('lt2');

		const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
		const lt1 = (current < next && current > 0) ? current : next - 1;
		const gt1 = (current < next || next === 0) ? next + 1 : current;
		const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

		$(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
		$(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
		$(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
		$(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

		// Clone processing when moving from 5 to 0
		if (current === 5 && next === 0) {
			$(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
			$(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
			$(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
			$(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
		}

		// Clone processing when moving from 0 to 5
		if (current === 0 && next === 5) {
			$(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
			$(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
			$(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
			$(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
		}

		console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
	});




$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
	adaptiveHeight: true,
});
$('.slider-nav').slick({
	slidesToShow: 8,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	focusOnSelect: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				arrows: false,
				vertical: false,
				adaptiveHeight: true,
			}
		}
	]
});


$('.multiple-items').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1
});
$('.reviews-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
});
$('.date-slider').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});


$('.description__day').click(function () {
	$('.slider-for').slick('slickNext');
});

$('.slider-for2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider-nav2',
});
$('.slider-nav2').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for2',
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}
	]
});
$('.slider-for3').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider-nav3',
});
$('.slider-nav3').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for3',
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}
	]
});
$('.slider-for4').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider-nav4',
});
$('.slider-nav4').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for4',
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}
	]
});