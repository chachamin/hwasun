$(document).ready(function(){
	//알림배너
	$('.infoBanner').on('init', function(event, slick) {
      $(this).append('<div class="counter"><span class="current"></span> / <span class="total"></span></div>');
      $('.current').text(slick.currentSlide + 1);
      $('.total').text(slick.slideCount);
    })
	infoBanner = $('.infoBanner').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 12000,
		/*autoplaySpeed: 10000,*/
			/*autoplaySpeed: 5000,*/
		fade: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 1004,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
    });

	//메인비주얼
	mainVisual = $(".mainVisual").slick({
		slidesToShow:1,
			slidesToScroll:1,
			dots:false,
			// autoplay:false,
			autoplay:true,
			autoplaySpeed:7500,
			/*autoplaySpeed:5000,*/
			slickPlay:true,
			slickPause:true,
			arrows: false
	});
	//  SNS_slide
	$('.sns_slide').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
				breakpoint: 800,
				settings: {
				  slidesToShow: 3
				}
			  },
			{
			  breakpoint: 560,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	});

	//  빠른메뉴
	$('.quick_slide').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 6
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
				breakpoint: 800,
				settings: {
				  slidesToShow: 4
				}
			  },
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	});

	//  하단배너
	$('.banner_img').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 6
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3
			  }
			}
		  ]
	});


	//공동 재생 멈춤
	slick_stop = $('.slick-stop').on('click', function() {
		$(this).siblings('.slick-play').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
	});
	$('.slick-play').on('click', function() {
		$(this).siblings('.slick-stop').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPlay');
	});
	$('.slick-prev').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickPrev');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	$('.slick-next').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickNext');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	//tab
	$('.tabcont_news > ul > li > a.tab').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('ul').css('display','block');
		$(this).parent('li').siblings('li').find('ul').css('display','none');
		$(this).parent('li').find('a.more').css('display','block');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
	});

	$('.tabcont_video > ul > li > a.tablink').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('div').css('display','block');
		$(this).parent('li').siblings('li').find('div').css('display','none');
		$(this).parent('li').find('a.more').css('display','block');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
	});

	
	$('.sns_cont_box > ul > li > a').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('ul').css('display','block');
		$(this).parent('li').siblings('li').find('ul').css('display','none');
		$(this).parent('li').find('a.more').css('display','block');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
	});


});//end_thisjquery

$(document).ready(function(){
	
	$(".inte_popen").click(function(){
		$('.res_pop_box').fadeIn().attr('tabindex','0').focus();
		$('#mGnb').hide();
	});
	$('.res_pop_box').attr("tabinbox","0").focus();
	$(".resP_close").click(function(){
		$('.res_pop_box').fadeOut().removeAttr('tabindex');
		$('#dimed').hide();
	});
});

// 레이어창
//		$(function(){
//		$(".openLayer").on("click", function(){
//			$(".layerWrap").attr("tabindex", "0").show().focus();
//			$(".layerClose").click(function(){
//				$(".layerWrap").removeAttr("tabindex").hide();
//				$(".openLayer").focus();
//			});
//			$(".lastClose").focus(function(){
//				$(".layerWrap").append("<a href='javascript:void(0);' class='linkAppend'></a>");
//				$(".linkAppend").focus(	function(){
//					$(".layerWrap").attr("tabindex", "0").focus();
//					$(".linkAppend").remove();
//				});
//			});
//		});
//	});		