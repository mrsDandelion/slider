(function(){
    const sliderUl = $('.slider').css('overflow','hidden').children('ul');
    const imgs = sliderUl.find('img');
    const imgWidth = imgs.first().width();
    const imgLength = imgs.length;
    let current = 1;
    const totalImgsWidth = imgWidth * imgLength;

    $('.wrapper-nav-slider').show().find('button').on('click',function(){
        const direction = $(this).data('dir');
        (direction === 'next')? ++current: --current;

        if(current === 0) {
            current = imgLength;
            direction = 'next';
        } else if (current - 1 = imgLength) {
            current = 1;
        }
        transition(sliderUl);
    });

    function transition(){

    }
})()