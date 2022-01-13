class assetSetup {
  constructor() {}
  createTiles() {
    for (let i = 0; i < 36; i++) {
      for (let iTwo = 0; iTwo < 28; iTwo++) {
        groundList[i + iTwo * 36] = new ground(i, iTwo);
      }
    }
    tileCount = 0;
  }
  setImg() {
    path = loadImage("assets/groundTile.png");
    tallGrass = loadImage("assets/grassTile.png");
    bush = loadImage("assets/bushTile.png");
    lawnOne = loadImage("assets/lawnOne.png");
    upOne = loadImage("assets/upOne.png");
    upTwo = loadImage("assets/upTwo.png");
    downOne = loadImage("assets/downOne.png");
    downTwo = loadImage("assets/downTwo.png");
    leftOne = loadImage("assets/leftOne.png");
    leftTwo = loadImage("assets/leftTwo.png");
    rightOne = loadImage("assets/rightOne.png");
    rightTwo = loadImage("assets/rightTwo.png");
  }

  battleScreen() {
    if (loadHealth == false) {
      enemyRemHealth = pokeList[enemy].hp;
      playerRemHealth = pokeList[starter].hp;
      loadHealth = true;
    } // enemy
    enemyPercent = (enemyRemHealth / pokeList[enemy].hp) * 100;
    fill("rgb(255, 234, 219)");
    rect(75, 50, 200, 80);
    fill("black");
    text(pokeList[enemy].name, 95, 80);
    if (enemyPercent > 50) {
      stroke("green");
      strokeWeight(7);
      line(80, 100, 80 + enemyPercent, 100);
    } else {
      stroke("red");
      strokeWeight(7);
      line(80, 100, 80 + enemyPercent, 100);
    } // enemy done
    strokeWeight(1);
    stroke("black");
    //player
    playerPercent = (playerRemHealth / pokeList[starter].hp) * 100;
    console.log(playerPercent);
    fill("rgb(255, 234, 219)");
    rect(300, 350, 200, 80);
    fill("black");
    text(pokeList[starter].name, 320, 380);
    if (playerPercent > 50) {
      stroke("green");
      strokeWeight(7);
      line(305, 400, 305 + playerPercent, 400);
    } else {
      stroke("red");
      strokeWeight(7);
      line(305, 400, 305 + playerPercent, 400);
    }
    //player done
    strokeWeight(1);
    stroke("black");
    if (action == 0) {
      fill("yellow");
      rect(75, 450, 200, 50);
      rect(75, 520, 200, 50);
      rect(300, 450, 200, 50);
      rect(300, 520, 200, 50);
      fill(0);
      textSize(20);
      text(pokeList[starter].moveOne[0], 100, 475);
      text(pokeList[starter].moveThree[0], 100, 545);
      text(pokeList[starter].moveTwo[0], 325, 475);
      text(pokeList[starter].moveFour[0], 325, 545);
    }
  }
}
