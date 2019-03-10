$(function(){
	var navtimer=null;
   	$(".nav .list").mouseover(function(){
   		var that=this;
   		clearTimeout(navtimer);
   		navtimer=setTimeout(function(){
   			$(".nav .sub-nav").css('display','none');
   			$(that).children('.sub-nav').css('display','block');
   		},200)
   	}).mouseout(function(){
   		clearTimeout(navtimer);
   		var that=this;
   		navtimer=setTimeout(function(){
   			$(".nav .sub-nav").css('display','none');
   		},200)
   	})
   	
   	
   	var subtimer=null;
   	$(".sub-menu .item").mouseover(function(){
   		var that=this;
   		clearTimeout(subtimer);
   		subtimer=setTimeout(function(){
   			$(".sub-menu .sub-sub").css('display','none');
   			$(that).children('.sub-sub').css('display','block');
   		},200)
   	}).mouseout(function(){
   		clearTimeout(subtimer);
   		var that=this;
   		subtimer=setTimeout(function(){
   			$(".sub-menu .sub-sub").css('display','none');
   		},200)
   	})
   	
   	
   	$('.right-side .select-option a').click(function(){
   		$(this).addClass('active').siblings().removeClass('active');
   	})
   	
   	$('#to-top').hide();
   	$(window).scroll(function(){
   		if( $(window).scrollTop()>100){
	   		$('#to-top').show();
	   	}else{
	   		$('#to-top').hide();
	   	}
   	})
   	$('#to-top').click(function(){
   		$(window).scrollTop(0)
   	})
   	
   	var swiper = new Swiper('.banner', {
   	  lazy: true,	
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true,
      pagination: {
        el: '.banner-pagination',
        clickable: true,
      }
    });
    
    var swiper1 = new Swiper('.news-swiper', {
      lazy: true,	
      zoom: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    var swiper2 = new Swiper('.excllent-swiper', {
      lazy: true,	
      zoom: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    var swiper3 = new Swiper('.reviews-swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
})
