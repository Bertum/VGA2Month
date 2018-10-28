Fly.prototype = Object.create(Insect.prototype);
//Declaracion objeto Ship para el jugador y los enemigos
function Fly(src, posX, posY, vida) {
    Insect.call(this, src, posX, posY, vida);
}