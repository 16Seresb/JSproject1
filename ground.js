class ground {
  constructor(xorder, yorder) {
    this.xorder = xorder;
    this.yorder = yorder;
    this.size = 50;
  }
  drawBox() {
    let stepCount =
      playerOne.stepsLeft -
      playerOne.stepsRight +
      playerOne.stepsUp * 36 -
      playerOne.stepsDown * 36;
    for (let i = 0; i < 1008; i++) {
      if (
        (i - stepCount) % 36 == 0 ||
        (i - stepCount) % 36 == 30 ||
        (i - stepCount) % 36 == 31 ||
        (i - stepCount) % 36 == 32 ||
        (i - stepCount) % 36 == 33 ||
        (i - stepCount) % 36 == 34 ||
        (i - stepCount) % 36 == 35 ||
        (i - stepCount) % 36 < 0 ||
        (i - stepCount) / 36 > 15
      ) {
        tileLocation[i] = bush;
      } else if (
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
        ].indexOf(i) > -1
      ) {
        tileLocation[i] = tallGrass;
      } else if (
        [
          220 + stepCount,
          221 + stepCount,
          222 + stepCount,
          223 + stepCount,
          224 + stepCount,
          225 + stepCount,
          226 + stepCount,
          227 + stepCount,
          228 + stepCount,
          229 + stepCount,
          230 + stepCount,
          231 + stepCount,
          232 + stepCount,
          233 + stepCount,
          234 + stepCount,
          235 + stepCount,
          236 + stepCount,
          237 + stepCount,
          238 + stepCount,
          239 + stepCount,
          240 + stepCount,
          241 + stepCount,
          242 + stepCount,
          256 + stepCount,
          257 + stepCount,
          258 + stepCount,
          259 + stepCount,
          260 + stepCount,
          261 + stepCount,
          262 + stepCount,
          263 + stepCount,
          264 + stepCount,
          265 + stepCount,
          266 + stepCount,
          267 + stepCount,
          268 + stepCount,
          269 + stepCount,
          270 + stepCount,
          271 + stepCount,
          272 + stepCount,
          273 + stepCount,
          274 + stepCount,
          275 + stepCount,
          276 + stepCount,
          277 + stepCount,
          278 + stepCount,
          292 + stepCount,
          293 + stepCount,
          294 + stepCount,
          295 + stepCount,
          296 + stepCount,
          297 + stepCount,
          298 + stepCount,
          299 + stepCount,
          300 + stepCount,
          301 + stepCount,
          302 + stepCount,
          303 + stepCount,
          304 + stepCount,
          305 + stepCount,
          306 + stepCount,
          307 + stepCount,
          308 + stepCount,
          309 + stepCount,
          310 + stepCount,
          311 + stepCount,
          312 + stepCount,
          313 + stepCount,
          314 + stepCount,
        ].indexOf(i) > -1
      ) {
        tileLocation[i] = path;
      } else {
        tileLocation[i] = lawnOne;
      }
    }
    image(tileLocation[tileCount], this.xorder * 50, this.yorder * 50);
  }
}
