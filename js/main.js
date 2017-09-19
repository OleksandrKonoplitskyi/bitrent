$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive : {
            0 : {
                items: 2
            },
            768 : {
                items: 3
            },
            992 : {
                items: 6
            }
        }
    });


    $('.maskphone').mask('+0(000)000-00-00');



    $(".open1").click(function(){
        $(this).css('display','none');
        $(".hid_1").toggle("slow");
    });
    $(".open2").click(function(){
        $(this).css('display','none');
        $(".hid_2").toggle("slow");
    });
    $(".open3").click(function(){
        $(this).css('display','none');
        $(".hid_3").toggle("slow");
    });
    $(".more").click(function(){
        $(this).css('display','none');
        $(".hid").toggle("slow");
    });




    var lastId,
        topMenu = $(".menu"),
        topMenuHeight = topMenu.outerHeight(),

        menuItems = topMenu.find("a"),

        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1500);
        e.preventDefault();
    });


    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });


    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#ico').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 1500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            var num = this.countNum.toString();;
                            if(num > 999){
                                while (/(\d+)(\d{3})/.test(num)) {
                                    num = num.replace(/(\d+)(\d{3})/, '$1' + ' ' + '$2');
                                }
                            }
                            $this.text(num);
                        }

                    });
            });
            a = 1;
        }

    });

    var HeaderTop = $('.head').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            $('.fixed').css('padding-bottom','10px');
            $('.head').css('margin-top','10px');
        } else {
            $('.fixed').css('padding-bottom','10px');
            $('.head').css('margin-top','30px');
        }
    });






    $(".head").on("click", "a.logo", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".footer").on("click", "a.logo", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    $(function () {
        /* выбор города */
        $('.delivery_list').click(function () {
            $(".cities_list").slideToggle('fast');
        });
        $('ul.cities_list li').click(function () {
            var tx = $(this).html();
            $(".cities_list").slideUp('fast');
            $(".delivery_list span").html(tx);
        });
    });
    $(function () {
        /* выбор города */
        $('.delivery_list2').click(function () {
            $(".cities_list2").slideToggle('fast');
        });
        $('ul.cities_list2 li').click(function () {
            var tx = $(this).html();
            $(".cities_list2").slideUp('fast');
            $(".delivery_list2 span").html(tx);
        });
    });

    if ($(window).width()<768){
        $('.menu li a').on('click', function () {
            $('.hamburger').trigger('click');
        });
    }



    var touch = $('.hamburger');
    var menu = $('.nav');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

});

