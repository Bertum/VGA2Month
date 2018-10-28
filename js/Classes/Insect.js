Insect.prototype = Object.create(MainClass.prototype);
//Declaracion objeto Ship para el jugador y los enemigos
function Insect(src, posX, posY, vida) {
    MainClass.call(this, src, posX, posY);
    this.vida = vida;
    this.altura = this.sprite.height;
    this.anchura = this.sprite.width;
    this.damageTaken = 0;
    this.movX = 0;
    this.movY = 0;
    this.velocX = 1;
    this.velocY = 1;
}

Insect.prototype.movement = function () {
    //Funcion de movimiento de la mosca
    //dir 0 top; 1 right; 2 down; 3 left
    var dir = Math.floor(Math.random() * 7 % 4);
    switch (dir) {
        case 0:
            this.posY -= this.velocY;
            break;
        case 1:
            this.posX += this.velocX;
            break;
        case 2:
            this.posY += this.velocY;
            break;
        case 3:
            this.posX -= this.velocX;
            break;
    }
    gameContext.drawImage(this.sprite, this.posX, this.posY);
}

Insect.prototype.accelerate = function () {
    this.velocX *= 5;
    this.velocY *= 5;
}