$(function () {
	var $mainVisual = $('#romanVisual > div > ul').slick({
		infinite: true,
		autoplay: true,
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$mainVisual.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.totalCnt').html('<strong>0'+ (currentSlide + 1) +'</strong> / 0'+slick.slideCount);
	});
	// main parallax scrolling
	$('#fullPage').fullpage({
		normalScrollElements: '#footer',
		responsiveWidth: 1400,
		responsiveHeight: 740,
		navigation: false,
		showActiveTooltip: false,
		onLeave:function(origin, destination, direction){
			if(origin['index'] == 0) {
				//$('body').removeClass('fp-viewing0fin');
				//$('#topPopup').addClass('deactive');
			}
			if(destination['index'] == 0) {
				//$mainPopup.slick('refresh');
			}
		},
		afterLoad: function(origin, destination, direction){
			if(destination['index'] == 0) {
				//$('body').addClass('fp-viewing0fin');
				//$('#topPopup').removeClass('deactive');
				//$mainPopup.slick('refresh');
			}
		},
	});
});