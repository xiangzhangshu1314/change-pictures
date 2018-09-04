$(function() {
	$(".pic").click(function() {
		$(".pic[title]").stop(true,true);
		$(this).stop(true,true);
		
		var left1 = $(this).offset().left;
		var top1 = $(this).offset().top;
		var zIndex = $(this).css('z-index');
		var left2 = $(".pic[title]").offset().left;
		var top2 = $(".pic[title]").offset().top;
		var zIndex2 = $(".pic[title]").css('z-index');
		$(".pic[title]").animate({"left": left1,"top": top1},1000).css("z-index",zIndex).removeAttr("title");
		
		$(this).animate(({
			'left': left2,
			'top': top2
		}), 1000).css("z-index",zIndex2).attr('title', '');
	});
});
