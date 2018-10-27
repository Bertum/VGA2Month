Fly.prototype = new Insect();
//Declaracion objeto Ship para el jugador y los enemigos
function Fly(src, posX, posY, vida) {
    Insect.call(this, src, posX, posY);
    this.vida = vida;
    this.altura = this.sprite.height;
    this.anchura = this.sprite.width;
    this.damageTaken = 0;
    this.movX = 0;
    this.movY = 0;
    this.velocX = 0;
    this.velocY = 0;
}

Fly.prototype.movement = function(){
    //Funcion de movimiento de la mosca
}