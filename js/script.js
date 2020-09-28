//Menu responsive

$("#toggle").on("click", function () {
  $("#menu-container").slideToggle("js-show");
});

$("#toggle").click(showMenu);

function showMenu() {
  var menu = $("#menu-container");

  if (menu.hasClass("js-show")) {
    menu.removeClass("js-show");
    $("#toggle").removeClass("icon-cancel");
    $("#toggle").addClass("icon-th-list");
    $("#page-header").removeClass("js-color");
  } else {
    menu.addClass("js-show");
    $("#page-header").addClass("js-color");
    $("#toggle").removeClass("icon-th-list");
    $("#toggle").addClass("icon-cancel");
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

$(".maps").click(function () {
  $(".maps iframe").css("pointer-events", "auto");
});

$(".maps").mouseleave(function () {
  $(".maps iframe").css("pointer-events", "none");
});

// color header on scroll

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 0) {
    $(".page-header").addClass("active");
  } else {
    $(".page-header").removeClass("active");
  }
});

$("#dropdown-menu").click(function () {
  if ($(".menu-container__cartas-dropdown-item").hasClass("active")) {
    $(".menu-container__cartas-dropdown-item").removeClass("active");
    $(".menu-container__cartas-dropdown-info-icon").removeClass("active");
  } else {
    $(".menu-container__cartas-dropdown-item").addClass("active");
    $(".menu-container__cartas-dropdown-info-icon").addClass("active");
  }
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 0) {
    $(".page-header").addClass("active");
  } else {
    $(".page-header").removeClass("active");
  }
});

/** Slideshow gallery */
let slideIndex = 1;
let slideshowTimeoutId;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  //   slideIndex = slideIndex + n;
  showSlides(slideIndex + n);
}

// Thumbnail image controls

function currentSlide(n) {
  //   slideIndex = n;
  showSlides((slideIndex = n));
}

function showSlides(n) {
  slideIndex = n;
  clearTimeout(slideshowTimeoutId);
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(
      " slideshow-gallery--active",
      ""
    );
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].className += " slideshow-gallery--active";
  dots[slideIndex - 1].className += " active";

  slideshowTimeoutId = setTimeout(() => {
    if (slides.length >= slideIndex + 1) {
      showSlides(slideIndex + 1);
    } else {
      showSlides(1);
    }
  }, 4000);
}
