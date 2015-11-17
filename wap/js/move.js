var full_page = function() {
	"use strict";
	this._dom = {
		content: $("#content"),
		paging_UL: $("#pull-paging-ul")
	}

	this.startX = 0;
	this.startY = 0;
	this.endX = 0;
	this.endY = 0;
	this.X = 0;
	this.Y = 0;

	this._dom.content.on('touchstart',this.full_touchStart.bind(this));
	this._dom.content.on('touchmove',this.full_touchMove.bind(this));
	this._dom.content.on('touchend',this.full_touchEnd.bind(this));

}

full_page.prototype.full_touchStart = function(e){
	e.preventDefault();
	// e.stopPropagation();
	this.startX = e.originalEvent.changedTouches[0].pageX,
	this.startY = e.originalEvent.changedTouches[0].pageY;
}

full_page.prototype.full_touchMove = function(e){
	e.preventDefault();
	// e.stopPropagation();
	this.endX = e.originalEvent.changedTouches[0].pageX,
	this.endY = e.originalEvent.changedTouches[0].pageY;
}

full_page.prototype.full_touchEnd = function (e) {
	e.preventDefault();
	// e.stopPropagation();
	var ev = e || window.e;
	var target = ev.target || ev.srcElement;
	var labels = target.nodeName.toLowerCase() ;
	this.X = this.endX - this.startX,
	this.Y = this.endY - this.startY;

	touchEnd_Method(target,labels,this.X,this.Y);
}

full_page.prototype.init = function (e) {
	console.log('init');
	var h = window.screen.height,
		w = window.screen.width;
	$("#first-page,#scend-page,#tr-page").css({
		height: h + "px"
	});
	var full = $("#pull-paging");
	var pDiv = full.width();
	var li = full.find('li');
	li.width(pDiv);
	var u = full.find('ul').css({
		width: li.width() * li.length + 200 + "px"
	});
}

var full = new full_page();
full.init();
window.onresize = function () {
	console.log('1111')
	var full = new full_page();
	full.init();
}
var iCurIndex = 0,
	total = full._dom.content.children().length,
	page_H = full._dom.content.children().height();

var paging_index = 0,
	paging_count = full._dom.paging_UL.find('li').length,
	paging_w = full._dom.paging_UL.find('li').eq(0).width();

function touchEnd_Method (target,label,x,y) {
	if (paging_index == 0) {
		$("#pre-page").hide();
	}
	if (label == 'span') { //	左右分页label == 'a' || 

		var _dir = $(target).attr('id'),
			_W = 0;

		if ( _dir == "pre-page") {//_dir == 'btn-up' ||
			--paging_index;
			_W = paging_W(paging_index);

		} else {
			++paging_index;
			_W = paging_W(paging_index);
		}
		if(paging_index == paging_count-1){
			$("#nxt-page").hide();
		}
		if (paging_index == 0) {
			$("#pre-page").hide();
		}
		full._dom.paging_UL.delay(100).animate({
			left: -_W + "px"
		}, 500);
		// $("#Number").val(paging_index);

	} else if (label == 'button') { // 下载
		var ua = window.navigator.userAgent.toLowerCase(),
			ua_android = ua.match(/(Android);?[\s\/]+([\d.]+)?/i),
			ua_ipad = ua.match(/(iPad).*OS\s([\d_]+)/i),
			ua_iphone = !ua_ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/i),
			ua_wx = ua.match(/(MicroMessenger)\/(\d+\.\d+\.\d+)/i);

		if(ua_wx){
			window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.realcloud.loochadroid.campuscloud";
		}else if(ua_ipad || ua_iphone){
			window.location.href = "https://itunes.apple.com/cn/app/loocha-ban-ji-yun/id582509921";
		}else{
 			window.location.href = "http://loocha.cn/acc";
		}

	}else if (full.endY==0 || full.endX ==0){
		clearCoor();
		return;
	} else if (Math.abs(y) > Math.abs(x) && y > 30) {
		if (iCurIndex <= 0) {
			return;
		}
		var page = full._dom.content;
		page.children()
		.eq(iCurIndex)
		.removeClass('pre-page')
		.removeClass('pre-page-out')
		.removeClass('nxt-page')
		.removeClass('nxt-page-out')
		.css("opacity","0").addClass('nxt-page-out');
		--iCurIndex;
		var top = _getDivHeight(iCurIndex);
		clearOpacity(iCurIndex);
		page.css({
			top: -top + "px"
		}).children().eq(iCurIndex)
		.removeClass('pre-page')
		.removeClass('pre-page-out')
		.removeClass('nxt-page')
		.removeClass('nxt-page-out')
		.css("opacity","0").addClass('nxt-page').css("opacity","1");
		if (iCurIndex < 2 ) {
			$(".pointer").show();
			$(".pointer_up").hide();
		}
		clearCoor();

	} else if (Math.abs(y) > Math.abs(x) && y < -30) {
		if (iCurIndex >= 2) {
			return;
		}
		var page = full._dom.content;
		page.children()
		.eq(iCurIndex)
		.removeClass('pre-page')
		.removeClass('pre-page-out')
		.removeClass('nxt-page')
		.removeClass('nxt-page-out')
		.css("opacity","0").addClass('pre-page-out');
		++iCurIndex;
		var top = _getDivHeight(iCurIndex);
		clearOpacity(iCurIndex);
		page.css({
			top: -top + "px"
		}).children().eq(iCurIndex)
		.removeClass('pre-page')
		.removeClass('pre-page-out')
		.removeClass('nxt-page')
		.removeClass('nxt-page-out')
		.css("opacity","0").addClass('pre-page').css("opacity","1");
		if (iCurIndex == 2 ) {
			$(".pointer").hide();
			$(".pointer_up").show();
		}
		clearCoor();
	}else{
		clearCoor();
		return ;
	}
	setTimeout(function() {
		animation_page(iCurIndex);
	}, 400,function(){
		full = null;
	});
}
function _getDivHeight (num) {
	if (num < 0 ) {
		iCurIndex = 0;
		return;
	}else if( num >= total){
		iCurIndex = total-1;
		return;
	}
	return  num * page_H;
}

function paging_W (num) {
	if (num < 0) {
		paging_index = 0;
		$("#pre-page").hide();
		return;
	}else if (num >= paging_count){
		paging_index=paging_count-1;
		$("#nxt-page").hide();
		return;
	}
	$("#pre-page,#nxt-page").show();
	return num*paging_w;
}
function clearOpacity (num) {
	if (num == 0) {
		$("#hi-icon").removeClass('move-img-left');
		$("#fir-h1-title,#fir-h3-title,#fir-download").removeClass('move-img-right-d');
		$("#fir-img").removeClass('move-img-left-u');
		$("#hi-icon,#fir-h1-title,#fir-h3-title,#fir-download,#fir-img").css("opacity","0");
	}else if(num == 1){
		$("#sen-h1-title,#sen-h3-title").removeClass('move-img-right-d').css("opacity","0");
	}else {
		$("#tr-h2-title,#tr-h4-title").removeClass('move-img-right-d');
		$("#end-img-1").removeClass('move-img-left');
		$("#end-img-2").removeClass('move-img-right-d');
		$("#end-img-3,#end-download").removeClass('move-img-left-u');
		$("#end-img-4").removeClass('move-img-right');
		$("#tr-h2-title,#tr-h4-title,#end-img-1,#end-img-2,#end-img-3,#end-download,#end-img-4").css("opacity","0");
	}
}
function clearCoor(){
	full.startX = 0;
	full.startY = 0;
	full.endX = 0;
	full.endY = 0;
	full.X = 0;
	full.Y = 0;
}
function animation_page (num) {
	if (num == 0) {
		$("#hi-icon").addClass('move-img-left');
		$("#fir-h1-title,#fir-h3-title,#fir-download").addClass('move-img-right-d');
		$("#fir-img").addClass('move-img-left-u');
	}else if(num == 1){
		$("#sen-h1-title,#sen-h3-title").addClass('move-img-right-d');
	}else {
		$("#tr-h2-title,#tr-h4-title").addClass('move-img-right-d');
		$("#end-img-1").addClass('move-img-left');
		$("#end-img-2").addClass('move-img-right-d');
		$("#end-img-3,#end-download").addClass('move-img-left-u');//
		$("#end-img-4").addClass('move-img-right');
	}
}
// alert($('#first-page').height()+","+$('#first-page').width());