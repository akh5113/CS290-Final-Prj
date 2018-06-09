/****************************************************************
Home page 
Carousel
https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp
******************************************************************/


//Activate Carousel
$(document).ready(function(){
	$("#homeCarousel").carousel({wrap:true});

	//Enable Carousel Indicators

	$(".item1").click(function(){
		$("#homeCarousel").carousel(0);
	});

	$(".item2").click(function(){
		$("#homeCarousel").carousel(1);
	});

	$(".item3").click(function(){
		$("#homeCarousel").carousel(2);
	});

	//Enable Carousel Controls
	$(".left").click(function(){
		$("#homeCarousel").carousel("prev");
	});
	$(".right").click(function(){
		$("#homeCarousel").carousel("next");
	});
});



