function Slider(container, nav){
    this.container = container;
    this.nav = nav.show();
    this.imgs = this.container.find('img');
    this.imgWidth = this.imgs[0].width;
    this.imgLength = this.imgs.length;
    this.current = 0;
    this.previous = 0;
    this.typeOfAnimation = 'opacity';
}

Slider.prototype.animationOpacity = function(coords) {
    this.container.find('li').css('opacity', 0);
    this.container.find(`li:nth-of-type(${this.current})`).css('opacity', 1);
    this.container.css('margin-left', coords || -(this.current * this.imgWidth));
    this.container.find(`li:nth-of-type(${this.previous + 1})`).css('opacity', 0)
    this.container.find(`li:nth-of-type(${this.current + 1})`).animate({
        'opacity': 1
    }, 1000)
}

Slider.prototype.animationlinear = function(coords) {
    this.container.animate({
        'margin-left': coords || -(this.current * this.imgWidth)
    })
}

Slider.prototype.transition = function() {
    if(this.typeOfAnimation === 'opacity') {
        this.animationOpacity();
    }
    if(this.typeOfAnimation === 'linear') {
        this.animationlinear();
    }
}

Slider.prototype.setCurrent = function( dir ){
    this.previous = this.current;
    let pos = this.current;
    pos += (~~(dir === 'next') || -1);
    this.current = (pos < 0)? this.imgLength - 1 : pos % this.imgLength;
    return pos;
}

Slider.prototype.setTypeOfAnimation = function(typeOfAnimation) {
    this.typeOfAnimation = typeOfAnimation;
}