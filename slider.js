(function(){
    const sliderUl = $('.slider').css('overflow','hidden').children('ul');
    const imgs = sliderUl.find('img');
    const imgWidth = imgs.first().width();
    const imgLength = imgs.length;
    let current = 1;
    const totalImgsWidth = imgWidth * imgLength;

    $('.wrapper-nav-slider').show();
})()