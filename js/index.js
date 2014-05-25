(function(){
    var imageWidth = 500;
    var divSlider = $('#window-slider');
    function goToSlide(pos) {
        if (pos <= 4 && pos >= 0) {
            divSlider.css('margin-left', (- pos * imageWidth) + 'px');
        }
    }
    function highlightDot(dot) {
        $('#window-dots .dot').removeClass('on');
        dot.addClass('on');
    }
    var dot0 = $('#dot0');
    var dot1 = $('#dot1');
    var dot2 = $('#dot2');
    var dot3 = $('#dot3');
    var dot4 = $('#dot4');
    dot0.on('click', function() { goToSlide(0); highlightDot(dot0); });
    dot1.on('click', function() { goToSlide(1); highlightDot(dot1); });
    dot2.on('click', function() { goToSlide(2); highlightDot(dot2); });
    dot3.on('click', function() { goToSlide(3); highlightDot(dot3); });
    dot4.on('click', function() { goToSlide(4); highlightDot(dot4); });
}());

