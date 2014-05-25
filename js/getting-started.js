(function(){
    $('.option').on('click', function(){
        var pc = $(this).parents('.card');
        if (!pc.is('.off')) {
            pc.toggleClass('off');
            $(this).toggleClass('on');
            var n = $(this).parents('.card').next();
            n.toggleClass('off');
            $('body').animate({
                scrollTop: n.offset().top
            }, 1000);
        }
    });
}());
