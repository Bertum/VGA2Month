Wasp.prototype = Object.create(Insect.prototype);
//Declaracion objeto Ship para el jugador y los enemigos
function Wasp(src, posX, posY, vida) {
    Insect.call(this, src, posX, posY, vida);
    this.velocX = 10;
    this.velocY = 10;
}