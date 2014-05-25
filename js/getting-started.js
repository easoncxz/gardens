(function(){
    $('.option').on('click', function(){
        var pc = $(this).parents('.card');
        if (!pc.is('.off')) {
            $(this).toggleClass('on');
            pc.toggleClass('off');
            var n = $(this).parents('.card').next();
            if (n.is('.card')) {
                n.toggleClass('off');
            }
            $('body').animate({
                scrollTop: n.offset().top
            }, 1000);
        }
    });
}());
