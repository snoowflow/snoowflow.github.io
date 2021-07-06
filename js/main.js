$('.menu a').on('click', function(){
    $('.menu a').removeClass('menu__link_active');  
    $(this).addClass('menu__link_active');
    $("a[rel='m_PageScroll2id']").mPageScroll2id();
    })
    
   