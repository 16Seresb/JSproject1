class player {
  constructor(xcoord, ycoord) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
    this.stepsUp = 0;
    this.stepsDown = 0;
    this.stepsLeft = 0;
    this.stepsRight = 0;
  }
  drawPlayer() {
    image(charImg, this.xcoord, this.ycoord);
  }
  walkLeft() {
    if (this.xcoord - (this.stepsLeft * 50 - this.stepsRight * 50) > 50) {
      this.stepsLeft += 1;
      if (charImg == leftOne) {
        charImg = leftTwo;
      } else {
        charImg = leftOne;
      }
    }
  }
  walkUp() {
    if (this.ycoord - (this.stepsUp * 50 - this.stepsDown * 50) > 0) {
      this.stepsUp += 1;
      if (charImg == upOne) {
        charImg = upTwo;
      } else {
        charImg = upOne;
      }
    }
  }
  walkDown() {
    if (this.ycoord - (this.stepsDown * 50 - this.stepsUp * 50) > -100) {
      this.stepsDown += 1;
      if (charImg == downOne) {
        charImg = downTwo;
      } else {
        charImg = downOne;
      }
    }
  }
  walkRight() {
    if (this.xcoord - (this.stepsRight * 50 - this.stepsLeft * 50) > -850) {
      this.stepsRight += 1;
      if (charImg == rightOne) {
        charImg = rightTwo;
      } else {
        charImg = rightOne;
      }
    }
  }
  battle() {
    let stepCount =
      this.stepsLeft -
      this.stepsRight +
      this.stepsUp * 36 -
      this.stepsDown * 36;
    //
    if (
      [
        43 + stepCount,
        44 + stepCount,
        45 + stepCount,
        46 + stepCount,
        47 + stepCount,
        48 + stepCount,
        49 + stepCount,
        50 + stepCount,
        60 + stepCount,
        61 + stepCount,
        62 + stepCount,
        79 + stepCount,
        80 + stepCount,
        81 + stepCount,
        82 + stepCount,
        83 + stepCount,
        84 + stepCount,
        85 + stepCount,
        86 + stepCount,
        96 + stepCount,
        97 + stepCount,
        98 + stepCount,
        115 + stepCount,
        116 + stepCount,
        117 + stepCount,
        118 + stepCount,
        119 + stepCount,
        120 + stepCount,
        121 + stepCount,
        122 + stepCount,
        132 + stepCount,
        133 + stepCount,
        134 + stepCount,
        151 + stepCount,
        152 + stepCount,
        153 + stepCount,
        154 + stepCount,
        155 + stepCount,
        156 + stepCount,
        157 + stepCount,
        158 + stepCount,
        168 + stepCount,
        169 + stepCount,
        170 + stepCount,
        204 + stepCount,
        205 + stepCount,
        206 + stepCount,
        421 + stepCount,
        422 + stepCount,
        423 + stepCount,
        457 + stepCount,
        458 + stepCount,
        459 + stepCount,
      ].indexOf(222) > -1
    ) {
      let decider = Math.floor(random(10));
      if (decider < 4) {
        console.log("battle");
        enemy = generateCount;
        gotNext = false;
        getNext();
        screen = 2;
      }
    }
  }
}
