class pokemon {
  constructor(name, typeOne, typeTwo, hp, atk, def, spatk, spdef, spd, frontSprite, backSprite) {
    this.name = name;
    this.typeOne = typeOne;
    this.typeTwo = typeTwo;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spatk = spatk;
    this.spdef = spdef;
    this.spd = spd;
    this.backSprite = loadImage(backSprite);
    this.frontSprite = loadImage(frontSprite);
    this.moveOne = [];
    this.moveTwo = [];
    this.moveThree = [];
    this.moveFour = [];
  }
  drawEnemy() {
    image(this.frontSprite, 300, 0, this.frontSprite.width * 3, this.frontSprite.height * 3);
  }
  drawActive() {
      image(this.backSprite, 0, 165, this.backSprite.width * 3, this.backSprite.height * 3);
  }
  drawStarter() {
    image(this.frontSprite, 150, 50, this.frontSprite.width * 3, this.frontSprite.height * 3);
  }
}
