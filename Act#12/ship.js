function Ship () {
  this.x =0;
  this.y = 0;
  this.width = .1;
  this.height = .1;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  var nave = new Image();
  nave.src = "SpikeShip.png";
  var naveFlama = new Image();
  naveFlama.src = "SpikeShipFire.png";
  
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  context.drawImage(nave, -nave.width/2, -nave.height/2);

  if (this.showFlame) {
  context.drawImage(naveFlama, -nave.width/2, -nave.height/2);
  }
  context.restore();
};
