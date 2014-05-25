(function(){
    $('.option').on('click', function(){
        $(this).toggleClass('on');
        $('body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
}());
