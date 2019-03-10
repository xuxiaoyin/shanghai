$(function(){
	
	var swiper1 = new Swiper('.banner', {
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
    
    var swiper2 = new Swiper('.reviews-swiper', {
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
    
    
    var menu_flag=false;
	$('#menu-btn').click(function(event){
		 event.stopPropagation();
		if(!menu_flag){
			$('.menu').stop().animate({right:'0'});
			$('#close-btn').click(function(){
				$('.menu').stop().animate({right:'-46%'});
				menu_flag=false;
			});
			$('.main-content').click(function(){
				$('.menu').stop().animate({right:'-46%'});
				menu_flag=false;
			});
		}else{
			$('.menu').stop().animate({right:'-46%'});
		}
		menu_flag=!menu_flag;
	});
	
	
	$('.tab a').click(function(){
		$('.tab a').removeClass('active');
		$(this).addClass('active');
		$('.tab-list').css('display','none');
		$('.tab-list').eq($(this).index()).css('display','block');
	})
})
