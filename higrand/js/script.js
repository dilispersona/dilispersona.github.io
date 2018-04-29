$(document).ready(function() {
	
	$(".inner-wrap ").css("display", "none");

    $(".inner-wrap ").fadeIn(3000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$(".inner-wrap ").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});

 $("#Header .addons .expand").click(function(){
			$(this).toggleClass('focus');
		});



 
 
  $(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
	
	
	
	
	
	
	
	
	
	
	