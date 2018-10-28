Hand.prototype = Object.create(MainClass.prototype);
//Declaracion objeto Hand para la mano
function Hand(src, posX, posY) {
    MainClass.call(this, src, posX, posY);
    this.altura = this.sprite.height;
    this.anchura = this.sprite.width;
}