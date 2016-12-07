/**
 * Animation for user UI
 */
    // $("#view-list-menu").hide();
$(document).ready(function(){
    $(".list-menu-btn").click(function(){
        //menu button clicked > show meny screen
        $("#view-list-menu").slideToggle("slow");
    });

    $("#close-popup").click(function(){
        //menu button clicked > show meny screen
        $("#popup-screen").fadeOut(200);

    });


    //show question button clicked
    $(".list-pages").click(function(){
        //toggle text for comment inside menu
        $("#comments-screen").slideUp("slow");
        $("#view-list-menu").slideUp("slow");
    });
    //about us popup
    $(".show-about").click(function(){
        //toggle text for comment inside menu
        $(".popup-screen").slideToggle("slow");
        $(".popup-answered").hide();
        $(".popup-about").show();
    });
    $(".close-popup").click(function(){
        //toggle text for comment inside menu
        $(".popup-screen").slideToggle("slow");
        $(".popup-answered").slideUp("slow");
        $(".popup-about").slideUp("slow");
    });
//    $(".popup-about").click(function(){
//        //toggle text for comment inside menu
//        $(".popup-about").slideToggle("slow");
//    });


});
//swipe effects
//swipeFuncLaunch();
var swipeFuncLaunch = function(){
    if($(window).width()<767){
        //responsive : activate content swipe if width > 768px
    //    alert($(window).height());
        window.mySwipe = $('#mySwipe').Swipe({
//            startSlide: 1,
            auto: 5000,
            continuous: true,
            disableScroll: true
//            stopPropagation: true
    //    callback: function(index, element) {},
    //    transitionEnd: function(index, element) {}
        }).data('Swipe');
    }
}



/*
$(window).on('resize',function(){
    swipeFuncLaunch();
});
*/
$(document).ready(function(){
    $('.fullscreen').css({"height":$(window).height()+"px" });
    $('.fullscreen').css({"min-height":"300px" });
    $(window).on('resize',function(){
        $('.fullscreen').css({"height":$(window).height()+"px" });
        $('.fullscreen').css({"min-height":"300px" });
        if($(window).width()>=844){
            $("#view-list-menu").show("slow");
        }
    });

    //beginof change CSS stylesheet

//    stl='./css/style-1.css';
    $('#mystyle[rel=stylesheet]').attr('href', './css/style-1.css');
    $('#myan[rel=stylesheet]').attr('href', './css/animation.css');
    //endof change CSS stylesheet



});
//scroll to menu
$(document).ready(function(){

    $(".menu a").click(function(){
        //change class of selected li to "selected
        $('html, body').animate({
            //scroll animation until href $($(this).children("a").attr("href"))
//            why this doesn't work'
//            scrollTop: $($(this).attr("href")).offset().top
            scrollTop: $($(this).attr("data-href")).offset().top
        }, 800);;
        if($(window).width()<844)
            $("#view-list-menu").slideUp("slow");
    });
    $("a.to-top-btn").click(function(){
        //change class of selected li to "selected
        $('html, body').animate({
            //scroll animation until href $($(this).children("a").attr("href"))
//            why this doesn't work'
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);

    });
});


//back to top
//$(document).ready(function(){
//
//    // hide #back-top first
//    $(".back-top").hide();  //tsy mety fa maninona
//
//    // fade in #back-top
//    $(function () {
//        $(window).scroll(function () {
//            if ($(this).scrollTop() > 100) {
//                $(".back-top").fadeIn();
//            } else {
//                $(".back-top").fadeOut();
//            }
//        });
//
//        // scroll body to 0px on click
//        $('.back-top a').click(function () {
//            $('body,html').animate({
//                scrollTop: 0
//            }, 800);
//            return false;
//        });
//    });
//
//});


//parallax
$(document).ready(function(){
    //initialise Stellar.js
    $(window).stellar();
//    tsy mande fa mesty azo atao ny mampiasa async

});

$(document).ready(function(){
    //fade header element at scroll
    $(window).scroll(function(){
		var scrollpos = $(this).scrollTop();
        if ($(this).scrollTop()>-1) {
			var opacityvalue = 1-(scrollpos-200)/300;
			if(scrollpos > 600){
				opacityvalue = 0;
			}
			$("header#header .header-container").css({"opacity":opacityvalue });
        }
		
    });

});

