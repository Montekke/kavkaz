$("body").on("focusin", "input[type=tel]", (function () {
	$(this).inputmask({
		mask: ["+79999999999", "+799999999999"],
		greedy: !1
	})
}
));

(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

$("header").on("click", ".offcanvas-btn", (function () {
	if ($('.offcanvas-end').hasClass('show')) {
		$('.header').css({ "padding-right": "17" })
	}
}
)),

	/*
		$(".modal").on("show.bs.modal", function (e) {
			$("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
		}), $(".modal").on("hidden.bs.modal", function (e) {
			$("header").css("padding-right", "0")
		});
	*/
	$(".offcanvas").on("show.bs.offcanvas", function (e) {
		$("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
	}), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
		$("header").css("padding-right", "0")
	});


/*
/* Слайдер в табах*/
$('.modal').on('shown.bs.modal', function (e) {
	$('.slider-nav2').slick('setPosition');
	$('.slider-for2').slick('setPosition');
	$('.slider-nav3').slick('setPosition');
	$('.slider-for3').slick('setPosition');
	$('.slider-nav4').slick('setPosition');
	$('.slider-for4').slick('setPosition');
})

