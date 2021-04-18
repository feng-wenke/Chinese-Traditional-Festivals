$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		$nav.toggleClass('shadow', $(this).scrollTop() > $nav.height());

		if ($(window).scrollTop() > 100) {
			$("#topBtn").show()
		} else {
			$("#topBtn").hide();
		}
	});

	scrollProgressBar();

	var pathName = $(location).attr('pathname');
    window.onbeforeunload = function () {
        var scrollPosition = $(window).scrollTop();
		Cookies.set("pos_" + pathName, scrollPosition.toString(), { secure: true });
	}
	
	if (Cookies.get("pos_" + pathName) != undefined) {
		$(window).scrollTop(Cookies.get("pos_" + pathName));
	}

	$("#topBtn").click(function() {
		$(window).scrollTop(0);
		$(this).blur();
	});
});

function scrollProgressBar() {
	var getMax = function () {
	  return $(document).height() - $(window).height();
	};

	var max = getMax();
	var setWidth = function () {
		var width = ($(window).scrollTop() / max * 100) + "%";
		$('.scroll-progress').width(width);
	};
  
	$(document).on("scroll", setWidth);
	$(window).on("resize", function () {
	  max = getMax();
	  setWidth();
	});
}
