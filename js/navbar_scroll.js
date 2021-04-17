$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		$nav.toggleClass('shadow', $(this).scrollTop() > $nav.height());
	});
});