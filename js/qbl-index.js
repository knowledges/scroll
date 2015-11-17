$(".pic-item").mouseenter(function(event) {
	event.stopPropagation();
	var w = parseInt($(this).width());
	if (w > 250) {
		var id = $(this).attr('id');
		pushMake (id,null);
	}
});
$(".pic-item").mouseleave(function(event) {
	event.stopPropagation();
	$(this).find('div').animate({bottom:"-156px"}, 400);
});

function pushMake (id,data) {
	var  html = [];
	html.push('<div class="mask-bg">');
	html.push('<h1>剪刀手</h1>');
	html.push('<h3>男 30岁  水瓶座</h3>');
	html.push('<h3>学校：<em>南京工业大学丁家桥校区</em></h3>');
	html.push('<h3>宣言：<em>青春精彩无限</em></h3>');
	html.push('</div>');
	$("#"+id).empty('').prepend(html.join(''));
	$("#"+id).find('div').animate({ bottom:"0px"}, 400).delay(200);
}