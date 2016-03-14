$(document).ready(function() {
	
	$('#tweecool').tweecool({
        //settings
         username : 'PzazzGroups',
         limit : 3
      });
	  
	if ($(window).width() < 1300) {
	   $('body').addClass('responsive');
	}
	else {
	   $('body').removeClass('responsive');
	}
	$(window).resize(function() {
		if ($(window).width() < 1300) {
			$('body').addClass('responsive');
		}
		else {
			$('body').removeClass('responsive');
		}
	});
	
	if ($(window).width() <= 400) {
	   $('body').addClass('mobile');
	}
	else {
	   $('body').removeClass('mobile');
	}
	$(window).resize(function() {
		if ($(window).width() <= 400) {
			$('body').addClass('mobile');
		}
		else {
			$('body').removeClass('mobile');
		}
	});
	
	$('.nav li').hover(
	  function () {
		$('ul', this).stop().slideDown(100);
	  },
	  function () {
		$('ul', this).stop().slideUp(100);
	  }
	);
	
	$('.mobile-menu').click(function(){
		$('ul.nav').toggleClass('active');
	});
	
	$('.details-slide').click(function(){
		$(this).toggleClass('active');
		$('.responsive .header-socket .uk-office, .responsive .header-socket .ireland-office, .responsive .header-socket .follow-us, .responsive .header-socket .searchbox').slideToggle(200, function(){
			if ( $(this).is(':visible') ) { $('.responsive .header-socket .follow-us, .responsive .header-socket .searchbox').css('display','inline-block') }
		});
	});
	
	$('.join-cta').click(function(){
		$('.join-cta').removeClass('active');
		$(this).addClass('active');
		if( $('.join-cta.leader').hasClass('active') ) {
			$('.join-wrapper').css('background', '#052f4a');
			$('.content-wide.franchisee').removeClass('active');
			$('.content.leader').addClass('active');
		} else if ( $('.join-cta.franchisee').hasClass('active') ) {
			$('.join-wrapper').css('background', '#460e2c');
			$('.content.leader').removeClass('active');
			$('.content-wide.franchisee').addClass('active');
		}
	});
	
	$('.rebecca-img img').click(function(){
		$('.franchisee-cont').removeClass('active');
		$('.rebecca').addClass('active');
	});
	$('.chunhui-img img').click(function(){
		$('.franchisee-cont').removeClass('active');
		$('.chunhui').addClass('active');
	});
	$('.adam-img img').click(function(){
		$('.franchisee-cont').removeClass('active');
		$('.adam').addClass('active');
	});
	$('.tina-img img').click(function(){
		$('.franchisee-cont').removeClass('active');
		$('.tina').addClass('active');
	});
	
});

$(window).load(function(){
	$('a.clubs span').each(function(index) {
		clubsWidth = $(this).outerWidth();
		clubsHeight = $(this).outerHeight();
        $(this).css({
			"margin-left": -(clubsWidth/2),
			"margin-top": -(clubsHeight/2)
		});
    });
});



/* TESTIMONIALS */
jQuery(document).ready(function($){
	var w,mHeight,tests=$("#testimonials");
	w=tests.outerWidth();
	mHeight=0;
	tests.find(".testimonial").each(function(index){
		$("#t_pagers").find(".pager:eq(0)").addClass("active");	//make the first pager active initially
		if(index==0)
			$(this).addClass("active");	//make the first slide active initially
		if($(this).height()>mHeight)	//just finding the max height of the slides
			mHeight=$(this).height();
		var l=index*w;				//find the left position of each slide
		$(this).css("left",l);			//set the left position
		tests.find("#test_container").height(mHeight);	//make the height of the slider equal to the max height of the slides
	});
	$(".pager").on("click",function(e){	//clicking action for pagination
		e.preventDefault();
		next=$(this).index(".pager");
		clearInterval(t_int);	//clicking stops the autoplay we will define later
		moveIt(next);
	});
	var t_int=setInterval(function(){	//for autoplay
		var i=$(".testimonial.active").index(".testimonial");
		if(i==$(".testimonial").length-1)
			next=0;
		else
			next=i+1;
		moveIt(next);
	},7000);
	var pager_w = $('#t_pagers');
	pager_w.css('margin-left', -(pager_w.outerWidth()/2));
});
function moveIt(next){	//the main sliding function
	var c=parseInt($(".testimonial.active").removeClass("active").css("left"));	//current position
	var n=parseInt($(".testimonial").eq(next).addClass("active").css("left"));	//new position
	$(".testimonial").each(function(){	//shift each slide
		if(n>c)
			$(this).animate({'left':'-='+(n-c)+'px'});
		else
			$(this).animate({'left':'+='+Math.abs(n-c)+'px'});
	});
	$(".pager.active").removeClass("active");	//very basic
	$("#t_pagers").find(".pager").eq(next).addClass("active");	//very basic
}