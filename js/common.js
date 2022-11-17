$(function () {
	// header event
	const mobileBg = document.querySelector('.mobileBg')
	const header = document.querySelector('#header')
	const headerList = document.querySelectorAll('#header > ul > li');
	const headerMobileOpenBtn = document.querySelector('#headerM > button');
	const headerMobileCloseBtn = document.querySelector('#header > button');

	for(let item of headerList) {
	function addActive() {
		item.classList.add('active');
	};
	function removeActive() {
		item.classList.remove('active');
	};

	item.addEventListener('mouseover', addActive);
	item.addEventListener('mouseout', removeActive);
	}

	function headerAddActive() {
	header.classList.add('active');
	mobileBg.classList.add('active')
	}
	function headerRemoveActive() {
	header.classList.remove('active');
	mobileBg.classList.remove('active');
	}
	headerMobileOpenBtn.addEventListener('click', headerAddActive);
	headerMobileCloseBtn.addEventListener('click', headerRemoveActive);
	
    // 탭
    $(document).on("click", "[class^='tabType'] li a", function () {
        $(this).parent().parent().find('li').removeClass('on').eq($(this).parent().index()).addClass('on');
        $('#' + $(this).parent().parent().next().attr('id') + ' > div').hide().eq($(this).parent().index()).show();
    });

});
// 기본 팝업
function popup(url,id,width,height) {
	window.open(url,id,"toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,left=0, top=0, resizable=no,width=" + width + "px,height=" + height + "px");
}

$(function() { 
	$("img.over").hover(function(){ 
		$(this).attr("src", $(this).attr("src").replace(".png", "_on.png")); 
	}, function(){ 
		$(this).attr("src", $(this).attr("src").replace("_on.png", ".png")); 
	}); 
});