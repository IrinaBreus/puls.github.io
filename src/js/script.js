$(document).ready(function(){
	const slider = tns({		//slider
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		navPosition: 'bottom',
		responsive: {
			576: {
				touch: true,
				nav: true
			},
			768: {
				nav: false
			},
			992: {
				nav: false
			},
			1200: {
				nav: false
			},
		}
	});
		//arrow
	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	});

	//tabs
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
	function toggleSlide(item) { 
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		})
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
	
	//Modal
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #oder, #thanks').fadeOut('slow')
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function(){
			$('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	
	//forms
	function valideForms(form) {
		$(form).validate( {
			rules: {
				name: {
					required: true,
					minlenght: 4
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlingth: jQuery.validator.format("Имя должно содержать не менее {0} символов")
				},
				phone: "Пожалуйста, укажите свой номер телефона",
				email: {
					required: "Пожалуйста укажите адрес эл.почты",
					email: "Неправильный формат адреса эл.почты"
				}
			}
		})
	};
	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');

	//Mask
	$('input[name=phone]').mask("+7(999) 999-99-99");
	
})
