class Slider{
    constructor ({ container, nav, select }){
        this.container = container;
        this.nav = nav.show();
        this.select = select.show();
        this.imgs = this.container.find('img');
        this.imgWidth = this.imgs[0].width;
        this.imgLength = this.imgs.length;
        this.current = 0;
        this.previous = 0;
        this.typeOfAnimation = 'opacity';
    }

    animationOpacity(coords) {
        this.container.css('margin-left', -(this.current * this.imgWidth));
        this.container.find(`li:nth-of-type(${this.current + 1})`).css('opacity', 0);
        this.container.find(`li:nth-of-type(${this.current + 1})`).animate({
            'opacity': 1
        }, 1000)
    }

    animationlinear(coords) {
        this.container.animate({
            'margin-left': -(this.current * this.imgWidth)
        })
    }

    transition() {
        if(this.typeOfAnimation === 'opacity') {
            this.animationOpacity();
        }
        if(this.typeOfAnimation === 'linear') {
            this.animationlinear();
        }
        if(this.typeOfAnimation === 'zoom') {
            this.animationZoom();
        }
    }

    animationZoom(){
        this.container.css('margin-left', -(this.current * this.imgWidth));

        this.container.find(`li:nth-of-type(${this.current + 1}) img`).css({
        width: 0,
        height: 0
        });
        this.container.find(`li:nth-of-type(${this.current + 1}) img`).animate({
            width: '100%',
            height: '100%'
        }, 1000)
    }

    setCurrent( dir ){
        this.previous = this.current;
        let pos = this.current;
        pos += (~~(dir === 'next') || -1);
        this.current = (pos < 0)? this.imgLength - 1 : pos % this.imgLength;
        return pos;
    }

    addEventButton(){
        const self = this;
        self.nav.find('button').on('click', function(){
            self.setCurrent($(this).data('dir'));
            self.transition();
        })
    }

    addEventKey(){
        const self = this;
        $(document).on('keydown', function(event){
            const KEY_LEFT = 37;
            const KEY_RIGHT = 39;
            if (event.keyCode == KEY_LEFT){
                self.setCurrent('prev');
                self.transition();
            }
            if (event.keyCode == KEY_RIGHT){
                self.setCurrent('next');
                self.transition();
            }
        })
    }

    addEventSelect(){
        const self = this;
        self.select.find('select').on('change', function() {
            self.typeOfAnimation = self.select.find('select').val();
        })
    }

    init(){
        this.addEventButton();
        this.addEventKey();
        this.addEventSelect();
    }
}