! function(n, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define("shifone", [], function() {
		return t
	}) : n.shifone = t.call(n)
}("undefined" != typeof window ? window : this, function() {
	function n() {}
	return n.prototype = {
		constructor: n,
		version: "1.0.0",
		isScrolling: !1,
		currentSection: 0,
		sectionNum: 1,
		throttle: function(n, t) {
			var i = null;
			return function() {
				var e = this,
					o = arguments;
				clearTimeout(i), i = setTimeout(function() {
					n.apply(e, o)
				}, t)
			}
		},
		init: function() {
			var n = this;
			return n.sectionNum = $(".section-wrap").length, n.toTargetPage(1), $(window).load(function() {
				n.reCal()
			}), $(document).on("mousewheel DOMMouseScroll", function(t) {
				var i = t.originalEvent,
					e = i.wheelDelta || -i.detail,
					o = 0 > e ? !0 : !1;
				n.scrollHandle(o ? !0 : !1), t.preventDefault()
			}), window.onresize = n.throttle(function() {
				n.reCal()
			}, 50), $("#main-nav").click(function(t) {
				if ("i" === t.target.tagName.toLowerCase()) {
					var i = $(t.target).data("idx");
					n.toTargetPage(i, !0)
				}
			}), n.initMainNav(), this
		},
		initMainNav: function() {
			var n = this,
				t = $(".first-page").find(".content").offset().left;
			$("#main-nav").css("left", t - 130), $("#main-nav a").click(function() {
				n.toTargetPage($(this).data("idx"))
			})
		},
		loadingImg: function(n) {
			var t = 0;
			$.each(n, function(n, i) {
				var e = new Image;
				e.onload = function() {
					t++
				}, e.src = i
			});
			var i = window.setInterval(function() {
				t === n.length && (window.clearInterval(i), $("#main-loading").fadeOut(), $("body").addClass("loading-finish"), $("body").removeClass("loading-process"))
			}, 500)
		},
		scrollHandle: function(n) {
			var t = this,
				i = 0;
			t.isScrolling || (i = n ? t.currentSection + 1 : t.currentSection - 1, 1 >= i && (i = 1), i >= this.sectionNum && (i = this.sectionNum), t.toTargetPage(i))
		},
		toTargetPage: function(n) {
			var t = this;
			if (n === t.currentSection) return !1;
			if (!t.isScrolling) {
				t.isScrolling = !0;
				var i = t.calcTargetTop(n);
				console.log(n);
				// if (n == 5) {
				// 	i =$(window).height()*3;
				// }
				t.renderNav(n), $("html").animate({
					scrollTop: i
				}, 600), $("body").animate({
					scrollTop: i
				}, 600, function() {
					t.currentSection = n;
					var i = $(".section-wrap").eq(t.currentSection - 1).find(".animated");
					i.delay(600).each(function() {
						$(this).delay(100).addClass($(this).data("animated")).css("opacity", 1)
					}), t.isScrolling = !1
				})
			}
		},
		calcTargetTop: function(n) {
			return 1 >= n && (n = 1), n >= this.sectionNum && (n = this.sectionNum), this.currentSection = n, $(window).height() * (n - 1)
		},
		renderNav: function(n) {
			$("#main-nav a").removeClass("active").eq(n - 1).addClass("active")
		},
		reCal: function() {
			$(".section-wrap").each(function() {
				$(this).css({
					height: $(window).height()
				})
			});
			var n = 0;
			this.currentSection >= 3 && (n = $(window).height() * (this.currentSection - 2)), $("html,body").scrollTop(n), $("body").hasClass("loading-finish") && $("#main-loading").css({
				left: $(window).width() - 60 - 50,
				top: "100px",
				margin: 0
			}), this.initMainNav()
		}
	}, (new n).init()
});