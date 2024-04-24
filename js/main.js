$(function(){
    $('.nav').on('click',function(){
        $('.nav').removeClass('active');
        $('section').removeClass('active');
        $('header').removeClass('active');
        $('.sp-nav-close').removeClass('active');

        $(this).addClass('active');
    });

    $('.nav-profile').on('click',function(){
        $('.profile').addClass('active');
    });

    $('.nav-work1').on('click',function(){
        $('.work1').addClass('active');
    });

    $('.nav-work2').on('click',function(){
        $('.work2').addClass('active');
    });

    $('.nav-work3').on('click',function(){
        $('.work3').addClass('active');
    });

    $('.nav-work4').on('click',function(){
        $('.work4').addClass('active');
    });

    $('.nav-work5').on('click',function(){
        $('.work5').addClass('active');
    });

    $('.nav-work6').on('click',function(){
        $('.work6').addClass('active');
    });

    $('.sp-nav').on('click',function(){
        $('header').addClass('active');
        $('.sp-nav-close').addClass('active');
    });

    $('.sp-nav-close').on('click',function(){
        $(this).removeClass('active');
        $('header').removeClass('active');
    });
});