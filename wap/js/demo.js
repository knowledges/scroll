;(function(window,undefined){
	var full_page = function() {
		"use strict";
		this._dom = {
			content: $("#content"),
			paging_UL: $("#pull-paging-ul")
		}

		this._dom.content.on('touchstart',this.full_touchStart.bind(this));
		this._dom.content.on('touchmove',this.full_touchMove.bind(this));
		this._dom.content.on('touchend',this.full_touchEnd.bind(this));
	}

	full_page.prototype = {
		/**
		 * Y轴当前页
		 */
		iCurIndex: 0,
		/**
		 * X轴当前页
		 */
		paging_index: 0,
		/**
		 * 开始坐标X
		 */
		startX: 0,
		/**
		 *开始坐标Y
		 */
		startY: 0,
		/**
		 * 结束坐标X
		 */
		endX: 0,
		/**
		 * 结束坐标Y
		 */
		endY: 0,
		/**
		 * 移动X轴距离
		 */
		X: 0,
		/**
		 * 移动X轴距离
		 */
		Y: 0,
		full_touchStart :function(e){
			e.preventDefault();
			e.stopPropagation();
			this.startX = e.originalEvent.changedTouches[0].pageX,
			this.startY = e.originalEvent.changedTouches[0].pageY;
		},
		full_touchMove:function(e){
			e.preventDefault();
			e.stopPropagation();
			this.endX = e.originalEvent.changedTouches[0].pageX,
			this.endY = e.originalEvent.changedTouches[0].pageY;
		},
		full_touchEnd:function(e){
			e.preventDefault();
			e.stopPropagation();
			var ev = e || window.e;
			var target = ev.target || ev.srcElement;
			var labels = target.nodeName.toLowerCase() ;
			var self = this;
			self.X = self.endX - self.startX,
			self.Y = self.endY - self.startY;

			self.touchEnd_Method(target,labels,self.X,self.Y);
		},
		touchEnd_Method:function(target,label,x,y){
			var self = this;
			if (label == 'a' || label == 'span') { //	左右分页

				var _dir = $(target).attr('class'),
					_w = 0;

				if (_dir == 'up' || _dir == "btn btn_up") {
					--self.paging_index;
					_W = self.paging_W(self.paging_index);

				} else {
					++self.paging_index;
					_W = self.paging_W(self.paging_index);
				}

				self._dom.paging_UL.delay(100).animate({
					left: -_W + "px"
				}, 500);

			} else if (label == 'button') { // 下载

				if (navigator.userAgent.match(/Android/i)) {
					window.location.href = "http://loocha.cn/acc";
				} else {
					if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
						$("#mask-share").fadeIn(1000);
					} else if (navigator.userAgent.match(/iPhone/i)) {
						window.location.href = "https://itunes.apple.com/cn/app/loocha-ban-ji-yun/id582509921";
					}

				}

			}else if (self.endY==0 || self.endX == 0){
				self.clearCoor();
				return;
			}else if (Math.abs(y) > Math.abs(x) && y > 30) {
				if (self.iCurIndex<=0) {
					return;
				}

				var page = self._dom.content;
				page.children().eq(self.iCurIndex).removeClass('nxt-page nxt-page-out').addClass('nxt-page-out');
				--self.iCurIndex;
				self.clearOpacity(self.iCurIndex);
				var top = self._getDivHeight(self.iCurIndex);
				page.css({
					top: -top + "px"
				}).children().eq(self.iCurIndex).removeClass('nxt-page').addClass('nxt-page');
				self.clearCoor();
			} else if (Math.abs(y) > Math.abs(x) && y < -30) {
				if (self.iCurIndex>=2) {
					return;
				}

				var page = self._dom.content;
				page.children().eq(self.iCurIndex).removeClass('pre-page pre-page-out').addClass('pre-page-out');
				++self.iCurIndex;
				self.clearOpacity(self.iCurIndex);
				var top = self._getDivHeight(self.iCurIndex);
				page.css({
					top: -top + "px"
				}).children().eq(self.iCurIndex).removeClass('pre-page').addClass('pre-page');
				self.clearCoor();
			}
			setTimeout(function() {
				self.animation_page(self.iCurIndex);
			}, 400);
		},
		_getDivHeight:function(num){
			var self = this;
			var total = self._dom.content.children().length,
				page_H = self._dom.content.children().height();
			if (num < 0 ) {
				self.iCurIndex = 0;
				return;
			}else if( num >= total){
				self.iCurIndex = total-1;
				return;
			}
			return  num * page_H;
		},
		paging_W:function(num){
			var self = this;
			var	paging_count = self._dom.paging_UL.find('li').length,
				paging_w = self._dom.paging_UL.find('li').eq(0).width();
			if (num < 0) {
				self.paging_index = 0;
				return;
			}else if (num >= paging_count){
				self.paging_index=paging_count-1;
				return;
			}
			return num*paging_w;
		},
		clearOpacity:function(num){
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
		},
		clearCoor:function(){
			this.startX = 0;
			this.startY = 0;
			this.endX = 0;
			this.endY = 0;
			this.X = 0;
			this.Y = 0;
		},
		animation_page:function(num){
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
				$("#end-img-3,#end-download").addClass('move-img-left-u');
				$("#end-img-4").addClass('move-img-right');
			}
		},
		init:function(e){
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
	}
	return new full_page().init();
})(window);