Fly.prototype = Object.create(Insect.prototype);
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
    //dir 0 top; 1 right; 2 down; 3 left
    var dir = Math.random()*7 % 4;
    switch(dir){
        case 0:
            this.posY--;
            break;
        case 1:
            this.posX++;
            break;
        case 2:
            this.posY++;
            break;
        case 3:
            this.posX--;
            break;
    }
}