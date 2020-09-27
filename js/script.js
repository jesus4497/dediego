//Menu responsive

$('#toggle').on('click', function(){
	$('#menu-container').slideToggle('js-show');
})

$('#toggle').click(showMenu);

	function showMenu(){

		var menu = $('#menu-container');

		if(menu.hasClass('js-show')){
			menu.removeClass('js-show');
			$('#toggle').removeClass('icon-cancel');
			$('#toggle').addClass('icon-th-list');
			$('#page-header').removeClass('js-color');

		}else{
			menu.addClass('js-show');
			$('#page-header').addClass('js-color');
			$('#toggle').removeClass('icon-th-list');
			$('#toggle').addClass('icon-cancel');
		}
	}


/*
//lightbox
$('.gallery-photos img').on('click',showLightbox);

	function showLightbox(){

		var target = $(this).attr('src');

		$('.lightbox-content img').attr('src',target);

			//$('.lightbox').addClass('js-visible');
		$('.lightbox').fadeIn(600);

	}

$('.cerrar').on('click',closeLightbox);

	function closeLightbox(e){
			e.preventDefault();
			//$('.lightbox').removeClass('js-visible');
			$('.lightbox').fadeOut(600);
	}
*/

/*
//parallax
			$(document).ready(function(){
			    $('section[data-type="parallax_section"]').each(function(){
			        var $bgobj = $(this); // Variable para asignacion de objeto
			        $(window).scroll(function() {
			        	$window = $(window);
			            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			            // cordinadas del background
			            var coords = '50% '+ yPos + 'px';
			            // moviendo el background
			            $bgobj.css({ backgroundPosition: coords });
			        });
			    });
			});
*/

//fix scroll on google maps

$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
	$('.maps iframe').css("pointer-events", "none"); 
});

// color header on scroll

	$( window ).on( 'scroll', function() {
		if($(this).scrollTop() > 0) {
     		$(".page-header").addClass("active");
    	} else {
        	$(".page-header").removeClass("active");
        }
	})
	
$('#dropdown-menu').click(function () {
	if($(".menu-container__cartas-dropdown-item").hasClass('active')) {
		$(".menu-container__cartas-dropdown-item").removeClass('active');
		$(".menu-container__cartas-dropdown-info-icon").removeClass('active');
	}else {
		$(".menu-container__cartas-dropdown-item").addClass('active');
		$(".menu-container__cartas-dropdown-info-icon").addClass('active');
	}
});
    