function Slider(container, nav){
    this.container = container;
    this.nav = nav.show();
    this.imgs = this.container.find('img');
    this.imgWidth = this.imgs[0].width;
    this.imgLength = this.imgs.length;
    this.current = 0;
}