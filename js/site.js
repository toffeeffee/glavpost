$(function() {
});

$(document).ready(function(){	
	
	if($('.reviews-carousel.owl-carousel').length){
		$('.reviews-carousel.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			nav: true,
			navText: [
			  '<img src="img/circle-l.png">',
			  '<img src="img/circle-r.png">'
			],      
			dots: false			
		});
	}	
	
	if($('.inform-carousel.owl-carousel').length){
		$('.inform-carousel.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			nav: true,
			navText: [
			  '<img src="img/circle-l.png">',
			  '<img src="img/circle-r.png">'
			],      
			dots: true			
		});
	}	
	
	if($('.Count').length){
		$(window).on("scroll", function(){
		if(inViewport($("#our-jobs")) && $("#our-jobs").hasClass("in_progress") == false){
			$("#our-jobs").addClass("in_progress");
			$('.Count').each(function () {
			var $this = $(this);
			jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
				duration: 4000,
				easing: 'swing',
				step: function () {
				//$this.text(number_format(Math.ceil(this.Counter), 0, '.', ' '));
				$this.text(Math.ceil(this.Counter));
				}
			});
			});      
		}
		});
	}	
 	
});

function inViewport($el) {
		var elH = $el.outerHeight(),
			H   = jQuery(window).height(),
			r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
		return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

if($(".phone-mask").length){
   $(".phone-mask").mask("+38(999)999-99-99");
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("TopBtn").style.display = "block";
    } else {
        document.getElementById("TopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
