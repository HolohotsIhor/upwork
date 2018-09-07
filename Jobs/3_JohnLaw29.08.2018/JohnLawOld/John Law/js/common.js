$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true,
		showCloseBtn: true
	});

	$(".header-content img").animated('fadeInLeft','fadeOut');
	$(".header-info-text p, .header-info-text h1").animated('fadeInRight','fadeOut');
	$(".download-link-box").animated('fadeInRight','fadeOut');
	$(".portfolio_grid").animated('fadeIn','fadeOut');
	$("section.howItWork .mobile-box").animated('fadeInRight','fadeOut');
	$("section.howItWork h2").animated('fadeInRight','fadeOut');
	$("section.movie iframe").animated('zoomIn','fadeOut');
	$("section.movie h2").animated('fadeInLeft','fadeOut');

	movie

	function heightDetect(){
		$(".main_head").css("height", $(window).height());	
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toggle_mnu, .top_mnu ul a").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function(){
		if ($(".top_mnu").is(":visible")) {
			$(".top_description").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else{
			$(".top_description").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	$(".top_mnu a").sliphover({
		target : "a",
		backgroundColor : "rgba(255,255,255, .1)"
	});
});

$(window).load(function(){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});