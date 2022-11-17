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
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		normalScrollElements: '#footer',
		responsiveWidth: 1400,
		responsiveHeight: 740,
		navigation: false,
		showActiveTooltip: false
	});
});