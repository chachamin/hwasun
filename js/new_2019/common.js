$(document).ready(function(){

	//퀵오른쪽
	//$(".q_tab_link li a").click(function() {
	//	$(".q_tab_link li a").removeClass("active"); //Remove any "active" class
	//	$("#header").css("z-index","1");
	//	$(this).addClass("active"); //Add "active" class to selected tab		
	//	$(this).parent().parent().parent().animate({width: '70%'}, 300);
	//	$(".quick_cont").hide(); //Hide all tab content
	//	$("#dimed").fadeIn(300);
	//	var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
	//		$(activeTab).fadeIn(); //Fade in the active ID content
	//	return false;
	//});

	//$(".q_link li a.last").on('blur',function(){
	//		$(".quick_r_wrap").animate({width: '70px'}, 300);
	//		$("#dimed").fadeOut(300);
	//		$(".quick_cont").hide(); //Hide all tab content
	//		$("#header").css("z-index","601");
	//		$(".q_tab_link li a.active").focus();
	//		$(".q_tab_link li a.active").removeClass("active");
	//	
//	});


	// 퀵오른쪽 
	$(".q_tab_link .tablink").click(function(){
		if( $(this).is(".on") ){
				$(this).removeClass("on");
				$(this).parent().parent().parent().animate({width: '70px'}, 300);
				$("#header").css("z-index","601");
				$(this).parent().children(".quick_cont").css("display","none").fadeOut();
				return false;
		}else{
				$(this).addClass("on");
				$(this).parent().siblings().children("a").removeClass("on");
				$(this).parent().parent().parent().animate({width: '70%'}, 300);
				$("#header").css("z-index","590");
				$(this).parent().children(".quick_cont").css("display","block").fadeIn();		
		}
	});

	// 퀵오른쪽 포커스 이동
	$(".qnm04 .tablink,.qnm03 .tablink").on('click',function(){
			$("#quickCont01").css("display","none");
	});

	$(".qnm04 .tablink,.qnm02 .tablink").on('click',function(){
			$("#quickCont02").css("display","none");
	});
	$(".qnm02 .tablink,.qnm03 .tablink").on('click',function(){
			$("#quickCont03").css("display","none");
	});


	// 전체메뉴 마지막 메뉴에서 탭키 누르면 trigger로 포커스 이동
	$(".weather a,.quick_l .last_link").on('focusin',function(){
			$('.quick_r_wrap').animate({width: '70px'}, 300);
			$(".q_tab_link .tablink").removeClass("on");
			$(".quick_cont").css("display","none").fadeOut()
	});

	// mGnb 열기 
	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);
		$("#dimed").fadeIn(300);		
		$(".mDepth1 > li:first-child > .mDepth2").css("display","block");
	});

	//  mGnb 메뉴 열기닫기  
	$(".mDepth1 > li > a").click(function(){
		$(this).toggleClass("active");
		$(this).parent().siblings().children("a").removeClass("active");
		$(this).parent().children("ul").stop().slideDown();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});
	//mGnb menu
	$(".mDepth2 > li > a").click(function(){
		$(".mDepth2 > li > a").removeClass("active");
		$(".mDepth3 li").removeClass("active");
		var mDepth3 = $(this).siblings("ul").css("display");
		if( mDepth3 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth3").slideUp(300);
			$(this).siblings("ul").slideDown(300);
			$(this).siblings("ul").find("li").addClass("active");
		}
	});

	//  모바일 메뉴 토글 
	$('html').click(function(e) {
        if($(e.target).hasClass("navAcrtive")) {
        }else{
			$("#nav .depth1 > li:last-child > a").removeClass("navActive");
			$("#nav .depth2").slideUp(300);
        }
    });

		// skip focus
		$("#skipNavi > a").click(function(){
		$($(this).attr("href"))
		  .attr("tabindex","0")
		  .css("outline","0")
		  .focus();
		});

		//  gotop top 
		$(".top").click(function(){
			$("html, body").animate({scrollTop:0}, 800);
		});
		$(".bottom").click(function(){
			$('html, body').animate({ scrollTop: $(document).height()},800);
		});



	$('.searchTab_wrap .srch_tablink').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('div').css('display','block');
		$(this).parent('li').siblings('li').find('div').css('display','none');
	});

	//  관련사이트 
		$(".footlink").click(function(){
		$(this).parent().toggleClass("cur").siblings().removeClass("cur");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
		});
		

	// 언어선택
		$(".lang_link").click(function(){
		$(this).toggleClass("on");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
		});

	// 날씨 안내문
		$(".ico_weather").click(function(){
		$(this).toggleClass("on");
		$(this).parent().siblings(".info_box").stop().slideToggle();
		$(this).parent().siblings().children(".info_box").stop().slideUp();
		});


	// 전체메뉴 
	$(".btn_allmn").click(function(){
		if( $(this).is(".on") ){
			$(this).removeClass("on");
			$(".allmenu").hide();
			$(".btn_allmn").text("전체메뉴");
				return false;
		}else{
			$(this).addClass("on");
			$(".allmenu").show();
			$(".btn_allmn").text("메뉴닫기");
		}
	});

	// 통합검색 
	$(".btn_totalsrch").click(function(){
		if( $(this).is(".on") ){
			$(this).removeClass("on");
			$(".total_search").hide();
			$(".btn_totalsrch").text("통합검색");
				return false;
		}else{
			$(this).addClass("on");
			$(".total_search").show();
			$(".btn_totalsrch").text("창닫기");
		}
	});

	// 전체메뉴 마지막 메뉴에서 탭키 누르면 trigger로 포커스 이동
	$(".btn_totalsrch").on('focusin',function(){
			$('.allmenu').hide();
			$(".btn_allmn").removeClass("on");
			$(".btn_allmn").text("전체메뉴");
	});

	// 통합검색 마지막 메뉴에서 탭키 누르면 trigger로 포커스 이동
	$(".quick_l .first_link,.menu_v > ul > li:first-child a").on('focusin',function(){
			$('.total_search').hide();
			$(".btn_totalsrch").removeClass("on");
			$(".btn_totalsrch").text("통합검색");
	});

	// Select all links with hashes
	$('a.smooth[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });


	// Side Menu
	var menu_v = $('div.menu_v');
	var sItem = menu_v.find('>ul>li');
	var ssItem = menu_v.find('>ul>li>ul>li');
	var lastEvent = null;
	sItem.find('>ul').css('display','none');
	menu_v.find('>ul>li>ul>li[class=active]').parents('li').attr('class','active');
	menu_v.find('>ul>li[class=active]').find('>ul').css('display','block');
	function menu_vToggle(event){
		var t = $(this);
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 4000);
		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(2000);
			t.next('ul').slideDown(2000);
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(2000);
		} else {
			t.next('ul').slideUp(2000);
		}
		if (t.parent('li').hasClass('active')){
			t.parent('li').removeClass('active');
		} else {
			sItem.removeClass('active');
			t.parent('li').addClass('active');
		}
	}


});

//  mGnb close 
function mGnbClose() {
	$("#mGnb").animate({right: "-90%"}, 300);
	$("#mGnb").fadeOut(300);
	$("#dimed").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");

}

// mGnb display 
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1204) {
		mGnbClose();
		} else {
		
		}
});


// quick display 
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1204) {
		
		} else {

		rquickClose();
		$("#allMenu").css("display","none");
		$(".btn_allmn").removeClass("on");
		}
});

//  -------------------------- gnb  --------------------------

function web_menu(a){
	var lnb = $('#gnb'),
	depth1 = $(".top1menu");
	depth1.find(" > li > div").addClass('top2m');
	depth1.find(" > li").each(function(){
		var Index = $(this).index()+1;
		$(this).addClass('rule'+Index);
	});
	depth1.find("ul ul").show();
	mask = $( '.tmnBg' );

	var depth2 = $('.top1menu .top2m'),
		lnbLeave = $(".btn_allmn,#mMenu,.logoBox a");

	depth2.hide();
	depth1.find(" > li > a").off();

	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li").on('mouseenter focusin',function(event){
		$(this).addClass('hover');
	});
	
	depth1.find(" > li").on('mouseleave focusout',function(event){
		$(this).removeClass('hover');
	});

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();

		depth2.hide();
		$(this).parent('.depth1').find('.top2m').stop().show();
		depth1.addClass('on');
		mask.stop().show();
	});

	depth1.mouseleave(function(){
		mask.stop().hide();
		depth2.stop().hide();
		depth1.removeClass('on');
	});
	
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').stop().hide();
	});
	
	lnbLeave.focusin(function(){
		mask.stop().hide();
		depth2.stop().hide();
		depth1.removeClass('on');
	});
};

//화순의숲에서 탭하면 메뉴닫힘, 관련사이트 포커스이동 닫힘 230224
$(document).ready(function(){
	$(".gnb_sec08 .last_link").on('blur',function(){
		$('.dep2Wrap').hide();
	});

	$(".footlink_a .last_link").on('blur',function(){
		$('.footlink_box').hide();
		$('.footlink_a').removeClass("cur");
	});

	$(".logobox .logo_deco").on('focus',function(){
		$('.depth1 .dep2Wrap').hide();
	});

});
		


$(function () {
	$(window).on({
		load: function () {
			if ($(window).width() > 1204) {
				web_menu();
			}
		}
	});
});

// 상단으로 나타나기 
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 250 ) {
		$( '.r_wing_banner' ).fadeIn(500);
		$( '.loca_nav a.top' ).fadeIn(500);
	} else {
		$( '.r_wing_banner' ).fadeOut(500);
		$( '.loca_nav a.top' ).fadeOut(500);
	}
});


