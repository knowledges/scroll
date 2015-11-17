/*! 
 * Shifone common web js
 * @author: Shifone
 * Version: 1.0.0
 * Date: 2014-09-16 14:42:39
 * License: https://github.com/Shifone/admin/blob/master/LICENSE
 */
;(function(root, factory) {
    if (typeof module === "object" && typeof module.exports === "object") { // CommonJS
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) { // AMD / RequireJS
        define("shifone", [], function() {
            return factory;
        });
    } else {
        root.shifone = factory.call(root);
    }
}(typeof window !== "undefined" ? window : this, function() {

    function Shifone() {}

    Shifone.prototype = {
        /**
         * 构造函数
         */
        constructor: Shifone,

        /**
         * 版本号
         */
        version: "1.0.0",

        /**
         * 滚动状态
         * @type {Boolean}
         */
        isScrolling: false,

        /**
         * 当前页
         * @type {Number}
         */
        currentSection: 0,

        /**
         * 页数
         * @type {Number}
         */
        sectionNum: 1,

        /**
         * 函数节流
         * @param  {[type]} method [description]
         * @param  {[type]} delay  [description]
         * @return {[type]}        [description]
         */
        throttle: function(method, delay) {
            var timer = null;
            return function() {
                var context = this,
                    args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    method.apply(context, args);
                }, delay);
            };
        },

        /**
         * 初始化
         * @return {[type]} [description]
         */
        init: function() {
            var self = this;
            self.sectionNum = $(".section-wrap").length +1;

            //初始化显示第一个section
            //$('html,body').animate({scrollTop:0}, 100);
            //
            self.toTargetPage(1);


            $(window).load(function() {
                self.reCal();
            });


            //判断鼠标滚动
            $(document).on('mousewheel DOMMouseScroll', function(e) {
                var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail,
                    isMouseScrollDown = delta < 0 ? true : false;

                //处理好上下元素数组，开始滚动
                if (isMouseScrollDown) {
                    //鼠标向下滚动
                    self.scrollHandle(true);
                } else {
                    //鼠标向上滚动
                    self.scrollHandle(false);
                }

                e.preventDefault();
            });

            //浏览器窗口大小改变重新计算
            window.onresize = self.throttle(function(){
                self.reCal();
            },50);


            $("#main-nav").click(function(e){
                if(e.target.tagName.toLowerCase() === "i"){
                    var targetNum = $(e.target).data("idx");
                    self.toTargetPage(targetNum,true);
                }
            });

            self.loadingImg();

            return this;
            
        },


        loadingImg : function(){
            var img_arr = ["images/photowall.png","images/icon_down.png","images/sec_3/sec_1.jpg","images/sec_3/sec_2.jpg","images/sec_3/sec_3.jpg","images/sec_3/sec_1.jpg","images/sec4_bg.png"];

            var img_loaded = 0;

            $.each(img_arr,function(i,elem){
                var dom_img = new Image();
                dom_img.onload = function ()
                {
                    img_loaded ++;
                };
                dom_img.src = elem;
            });


            var img_timer = window.setInterval(function(){
                if(img_loaded === img_arr.length){
                    window.clearInterval(img_timer);

                    $("#main-loading").fadeOut();
                    $("body").addClass('loading-finish');
                    $('body').removeClass('loading-process');
                }
            },500);
        },

        /**
         * 处理滚动事件
         * @param  {[type]} flag [ true 向下滚动  false 向上滚动]
         * @return {[type]}      [description]
         */
        scrollHandle: function(scrollDown) {
            var self = this,
                targetNum = 0;


            if (!self.isScrolling) {
                if(scrollDown){
                    targetNum =  self.currentSection + 1;
                }else{
                    targetNum =  self.currentSection -1;
                }

                if (targetNum <= 1) {
                    targetNum = 1;
                }
                if (targetNum >= this.sectionNum) {
                    targetNum = this.sectionNum;
                }


                self.toTargetPage(targetNum);
            }

        },

        /**
         * 跳转到指定
         * @return {[type]} [description]
         */
        toTargetPage : function(targetNum,flag){
            var self = this;

            if(targetNum  === self.currentSection){
                return false;
            }


            if (!self.isScrolling) {
                self.isScrolling = true;

                if((self.currentSection === 2 || flag) && (targetNum === 1) ){
                    //从第二个
                    $("#first-title,#first-subtitle,#first-down").animate({
                        "opacity" : 1,
                        "margin-top" : 0
                    },500);

                    $("#photo-wall").animate({
                        "margin-top" : 0
                    },600);
                    $("#main-nav i").removeClass("active").eq(0).addClass("active");

                    $('html,body').animate({ scrollTop: 0 }, 600);

                    window.setTimeout(function(){
                        self.currentSection = 1;
                        self.isScrolling = false;
                    },700);

                    return true;
                }else if(self.currentSection === 1 && targetNum === 2){
                    //第一个向下滑

                    $("#first-title,#first-subtitle,#first-down").animate({
                        "opacity" : 0,
                        "margin-top" : -20
                    },500);

                    $("#photo-wall").animate({
                        "margin-top" : -190
                    },600);

                    $("#main-nav i").removeClass("active").eq(0).addClass("active");

                    window.setTimeout(function(){
                        self.currentSection = 2;
                        self.isScrolling = false;
                    },700);

                    return true;
                }


                var scrollTo =  self.calcTargetTop(targetNum);
                $('html').animate({ scrollTop: scrollTo }, 600);
                $('body').animate({ scrollTop: scrollTo }, 600, function() {
                    self.currentSection = targetNum;

                    if(targetNum === 1){
                        $("#main-nav i").removeClass("active").eq(0).addClass("active");
                    }else{
                        $("#main-nav i").removeClass("active").eq(self.currentSection -2 ).addClass("active");
                    }


                    if(targetNum === 3){
                        
                        $("#second-pic-list img").each(function(i,elem){
                            $(elem).delay(300*i ).animate({
                                "opacity" : 1,
                                "top" : 0
                            },800);
                        });
                    }else if(targetNum == 4){
                        $("#third-pic-list div").each(function(i,elem){
                            $(elem).delay(300*i ).fadeIn(800);
                        });
                    }

                    self.isScrolling = false;

                });
            }
        },

        /**
         * 获取目标section的 margin-top
         * @param  {[type]} targetNum [目标section的位置序号，从1开始]
         * @return {[type]}           [description]
         */
        calcTargetTop: function(targetNum) {
            if (targetNum <= 1) {
                targetNum = 1;
            }
            if (targetNum >= this.sectionNum) {
                targetNum = this.sectionNum;
            }

            this.currentSection = targetNum;

            if(targetNum > 2){
                return ($(window).height() * (targetNum - 2));
            }else{
                return 0;
            }

           // return ($(window).height() * (targetNum - 1));
        },

        /**
         * 重新计算各元素位置宽高
         * @return {[type]} [description]
         */
        reCal: function() {

            //重新计算每页宽高
            $(".section-wrap").each(function(i, elem) {
                $(this).css({
                    height: $(window).height()
                });
            });

            var scroll_top = 0;

            if(this.currentSection  >= 3){
                scroll_top = $(window).height() * (this.currentSection - 2);
            }

            //重新设置margin-top
            $("html,body").scrollTop(scroll_top);

            //重置侧边栏位置
            if($("body").hasClass("loading-finish")){
                $("#main-loading").css({
                    left : $(window).width() - 60 - 50,
                    top:'100px',
                    margin : 0
                });
            }

        }

    };

    return new Shifone().init();
}));