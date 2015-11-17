! function(t, i) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = i() : "function" == typeof define && define.amd ? define("shifone", [], function() {
		return i
	}) : t.shifone = i.call(t)
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	return t.prototype = {
		constructor: t,
		version: "1.0.0",
		isScrolling: !1,
		currentSection: 0,
		sectionNum: 1,
		throttle: function(t, i) {
			var n = null;
			return function() {
				var e = this,
					o = arguments;
				clearTimeout(n), n = setTimeout(function() {
					t.apply(e, o)
				}, i)
			}
		},
		init: function() {
			var t = this;
			return t.sectionNum = $(".section-wrap").length + 1, t.toTargetPage(1), $(window).load(function() {
				t.reCal()
			}), $(document).on("mousewheel DOMMouseScroll", function(i) {
				var n = i.originalEvent,
					e = n.wheelDelta || -n.detail,
					o = 0 > e ? !0 : !1;
				t.scrollHandle(o ? !0 : !1), i.preventDefault()
			}), window.onresize = t.throttle(function() {
				t.reCal()
			}, 50), $("#main-nav").click(function(i) {
				if ("i" === i.target.tagName.toLowerCase()) {
					var n = $(i.target).data("idx");
					t.toTargetPage(n, !0)
				}
			}), t.loadingImg(), this
		},
		loadingImg: function() {
			var t = ["images/photowall.png", "images/icon_down.png", "images/sec_3/sec_1.jpg", "images/sec_3/sec_2.jpg", "images/sec_3/sec_3.jpg", "images/sec_3/sec_1.jpg", "images/sec4_bg.png"],
				i = 0;
			$.each(t, function(t, n) {
				var e = new Image;
				e.onload = function() {
					i++
				}, e.src = n
			});
			var n = window.setInterval(function() {
				i === t.length && (window.clearInterval(n), $("#main-loading").fadeOut(), $("body").addClass("loading-finish"), $("body").removeClass("loading-process"))
			}, 500)
		},
		scrollHandle: function(t) {
			var i = this,
				n = 0;
			i.isScrolling || (n = t ? i.currentSection + 1 : i.currentSection - 1, 1 >= n && (n = 1), n >= this.sectionNum && (n = this.sectionNum), i.toTargetPage(n))
		},
		toTargetPage: function(t, i) {
			var n = this;
			if (t === n.currentSection) return !1;
			if (!n.isScrolling) {
				//#first-title,#first-title2,#first-subtitle,#first-down,#down-logo,
				if (n.isScrolling = !0, (2 === n.currentSection || i) && 1 === t) return $("#p_btn").animate({
					opacity: 0,
					"bottom":0
				}, 500), $("#photo-wall").animate({
					"margin-top": 0
				}, 600), $("#main-nav i").removeClass("active").eq(0).addClass("active"), $("html,body").animate({
					scrollTop: 0
				}, 600), window.setTimeout(function() {
					n.currentSection = 1, n.isScrolling = !1
				}, 700), !0;
				if (1 === n.currentSection && 2 === t) return $("#p_btn").animate({
					opacity: 1,
					"bottom": 70
				}, 500),$("#first-down,#down-logo").animate({
					"margin-top": -60
				}, 500), $("#photo-wall").animate({
					"margin-top": -128
				}, 600), $("#main-nav i").removeClass("active").eq(0).addClass("active"), window.setTimeout(function() {
					n.currentSection = 2, n.isScrolling = !1
				}, 700), !0;
				var e = n.calcTargetTop(t);
				$("html").animate({
					scrollTop: e
				}, 600), $("body").animate({
					scrollTop: e
				}, 600, function() {
					n.currentSection = t, 1 === t ? $("#main-nav i").removeClass("active").eq(0).addClass("active") : $("#main-nav i").removeClass("active").eq(n.currentSection - 2).addClass("active"), 3 === t ? $("#second-pic-list img").each(function(t, i) {
						$(i).delay(300 * t).animate({
							opacity: 1,
							top: 0
						}, 800)
					}) : 4 == t && $("#third-pic-list div").each(function(t, i) {
						$(i).delay(80 * t).fadeIn(800)
					}), n.isScrolling = !1
				})
			}
		},
		calcTargetTop: function(t) {
			return 1 >= t && (t = 1), t >= this.sectionNum && (t = this.sectionNum), this.currentSection = t, t > 2 ? $(window).height() * (t - 2) : 0
		},
		reCal: function() {
			$(".section-wrap").each(function() {
				$(this).css({
					height: $(window).height()
				})
			});
			var t = 0;
			this.currentSection >= 3 && (t = $(window).height() * (this.currentSection - 2)), $("html,body").scrollTop(t), $("body").hasClass("loading-finish") && $("#main-loading").css({
				left: $(window).width() - 60 - 50,
				top: "100px",
				margin: 0
			})
		}
	}, (new t).init()
});