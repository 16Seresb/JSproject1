let playerOne;
let screen = 0;
let groundList = [];
let path;
let tallGrass;
let bush;
let lawnOne;
let tileLocation = [];
let tileCount = 0;
let charImg;
let upOne;
let upTwo;
let downOne;
let downTwo;
let leftOne;
let leftTwo;
let rightOne;
let rightTwo;
//
let pokeData;
let pokeImg;
let pokeList = [];
//starts dataCount at one or i get confused with the url
let dataCount = 1;
let generateCount;
let starter;
let gotNext = false;
let nextCount = 1;
let typeTwo = [];
//
let coolDown = 0;
let ownedPokemon = [];
let enemy;
let action = 0;
let assets;
let moveList = [];
let moveSetupCount = 0;
let moveNum;
let moveCompare;
let loadHealth = false;
let enemyRemHealth;
let playerRemHealth;
let enemyPercent;
let playerPercent;
let battlePause = 0;
//normal 0-9
moveList[0] = ["extreme speed", "physical", 80];
moveList[1] = ["hyper beam", "special", 200];
moveList[2] = ["giga impact", "physical", 200];
moveList[3] = ["tackle", "physical", 40];
moveList[4] = ["struggle", "physical", 50];
moveList[5] = ["take down", "physical", 90];
moveList[6] = ["tail slap", "physical", 25];
moveList[7] = ["strength", "physical", 90];
moveList[8] = ["judgment", "special", 100];
moveList[9] = ["headbutt", "physical", 70];
//fire 10-19
moveList[10] = ["flame wheel", "physical", 60];
moveList[11] = ["blast burn", "special", 150];
moveList[12] = ["flamethrower", "special", 90];
moveList[13] = ["inferno", "special", 100];
moveList[14] = ["pyro ball", "physical", 120];
moveList[15] = ["Vcreate", "physical", 180];
moveList[16] = ["overheat", "special", 130];
moveList[17] = ["incinerate", "physical", 60];
moveList[18] = ["flame charge", "special", 50];
moveList[19] = ["flare blitz", "physical", 150];
//water 20-29
moveList[20] = ["aqua jet", "physical", 40];
moveList[21] = ["bubble", "special", 40];
moveList[22] = ["crabhammer", "physical", 120];
moveList[23] = ["dive", "physical", 90];
moveList[24] = ["fishious rend", "physical", 170];
moveList[25] = ["hydro cannon", "special", 150];
moveList[26] = ["liquidation", "special", 85];
moveList[27] = ["origin pulse", "special", 140];
moveList[28] = ["water gun", "special", 40];
moveList[29] = ["water shuriken", "physical", 15];
//30-39 electric
moveList[30] = ["bolt strike", "physical", 130];
moveList[31] = ["charge beam", "special", 50];
moveList[32] = ["fusion bolt", "physical", 110];
moveList[33] = ["electroweb", "special", 55];
moveList[34] = ["plasma fists", "physical", 100];
moveList[35] = ["thunder", "special", 130];
moveList[36] = ["zap cannon", "special", 190];
moveList[37] = ["thunder shock", "special", 40];
moveList[38] = ["shock wave", "special", 60];
moveList[39] = ["spark", "physical", 65];
//40-49 grass
moveList[40] = ["absorb", "special", 20];
moveList[41] = ["bullet seed", "physical", 25];
moveList[42] = ["energy ball", "special", 90];
moveList[43] = ["frenzy plant", "physical", 150];
moveList[44] = ["giga drain", "physical", 75];
moveList[45] = ["leaf storm", "special", 130];
moveList[46] = ["leaf blade", "special", 90];
moveList[47] = ["leaf tornado", "special", 65];
moveList[48] = ["petal dance", "special", 120];
moveList[49] = ["power whip", "physical", 150];
//50-59 ice
moveList[50] = ["avalanche", "physical", 60];
moveList[51] = ["aurora beam", "special", 65];
moveList[52] = ["blizzard", "special", 110];
moveList[53] = ["freeze shock", "physical", 150];
moveList[54] = ["ice ball", "physical", 30];
moveList[55] = ["ice beam", "special", 90];
moveList[56] = ["ice burn", "special", 140];
moveList[57] = ["icicle spear", "physical", 25];
moveList[58] = ["icy wind", "special", 55];
moveList[59] = ["glacial lance", "physical", 170];
//60-69 fighting
moveList[60] = ["circle throw", "physical", 60];
moveList[61] = ["aura sphere", "special", 120];
moveList[62] = ["close combat", "physical", 120];
moveList[63] = ["brick break", "physical", 75];
moveList[64] = ["cross chop", "physical", 100];
moveList[65] = ["double kick", "physical", 30];
moveList[66] = ["dynamic punch", "physical", 100];
moveList[67] = ["meteor assault", "physical", 150];
moveList[68] = ["rock smash", "physical", 40];
moveList[69] = ["vaccuum wave", "special", 40];
//70-79 poison
moveList[70] = ["belch", "special", 120];
moveList[71] = ["acid", "special", 40];
moveList[72] = ["clear smog", "special", 40];
moveList[73] = ["corrosive gas", "special", 90];
moveList[74] = ["cross poison", "physical", 170];
moveList[75] = ["poison fang", "physical", 50];
moveList[76] = ["sludge bomb", "special", 120];
moveList[77] = ["sludge wave", "special", 110];
moveList[78] = ["toxic", "special", 90];
moveList[79] = ["venoshock", "physical", 65];
//80-89 ground
moveList[80] = ["earth power", "special", 90];
moveList[81] = ["bonemerang", "physical", 65];
moveList[82] = ["dig", "physical", 80];
moveList[83] = ["earthquake", "special", 100];
moveList[84] = ["land's wrath", "physical", 150];
moveList[85] = ["precipice blades", "physical", 120];
moveList[86] = ["sand tomb", "physical", 35];
moveList[87] = ["thousand arrows", "special", 110];
moveList[88] = ["mud slap", "special", 20];
moveList[89] = ["mud bomb", "physical", 65];
//90-99 flying
moveList[90] = ["acrobatics", "physical", 55];
moveList[91] = ["aerial ace", "physical", 60];
moveList[92] = ["aeroblast", "special", 100];
moveList[93] = ["beak blast", "physical", 100];
moveList[94] = ["brave bird", "physical", 170];
moveList[95] = ["dragon ascent", "special", 120];
moveList[96] = ["fly", "physical", 90];
moveList[97] = ["gust", "special", 40];
moveList[98] = ["hurricane", "special", 110];
moveList[99] = ["oblivion wing", "physical", 65];
//100-109 psychic
moveList[100] = ["confusion", "special", 50];
moveList[101] = ["dream eater", "special", 100];
moveList[102] = ["eerie spell", "special", 80];
moveList[103] = ["extrasensory", "special", 80];
moveList[104] = ["future sight", "special", 120];
moveList[105] = ["hyperspace hole", "special", 80];
moveList[106] = ["light that burns the sky", "physical", 200];
moveList[107] = ["prismatic lazer", "special", 160];
moveList[108] = ["psybeam", "special", 65];
moveList[109] = ["psychic", "special", 90];
//110-119 bug
moveList[110] = ["attack order", "physical", 90];
moveList[111] = ["bug bite", "physical", 60];
moveList[112] = ["bug buzz", "special", 90];
moveList[113] = ["fury cutter", "physical", 40];
moveList[114] = ["leech life", "special", 80];
moveList[115] = ["megahorn", "special", 120];
moveList[116] = ["pin missile", "physical", 25];
moveList[117] = ["signal beam", "special", 75];
moveList[118] = ["X-scissor", "special", 200];
moveList[119] = ["fell stinger", "special", 50];
//120-129 rock
moveList[120] = ["Accelerock", "physical", 40];
moveList[121] = ["ancient power", "special", 60];
moveList[122] = ["diamond storm", "physical", 100];
moveList[123] = ["head smash", "physical", 150];
moveList[124] = ["meteor beam", "special", 120];
moveList[125] = ["meteor beam", "special", 80];
moveList[126] = ["rock throw", "physical", 50];
moveList[127] = ["rock tomb", "physical", 60];
moveList[128] = ["rock blast", "special", 25];
moveList[129] = ["splintered stormshards", "special", 190];
//130-139 ghost
moveList[130] = ["astral barrage", "special", 120];
moveList[131] = ["astonish", "physical", 50];
moveList[132] = ["hex", "special", 65];
moveList[133] = ["confuse ray", "special", 80];
moveList[134] = ["moongeist beam", "special", 100];
moveList[135] = ["phantom force", "physical", 90];
moveList[136] = ["poltergeist", "physical", 110];
moveList[137] = ["shadow force", "special", 120];
moveList[138] = ["shadow ball", "special", 80];
moveList[139] = ["spectral thief", "physical", 90];
//140-149 dragon
moveList[140] = ["core enforcer", "special", 100];
moveList[141] = ["draco meteor", "special", 130];
moveList[142] = ["dragon claw", "physical", 80];
moveList[143] = ["dragon energy", "special", 150];
moveList[144] = ["dragon hammer", "special", 90];
moveList[145] = ["dragon pulse", "physical", 85];
moveList[146] = ["dynamax cannon", "physical", 100];
moveList[147] = ["eternabeam", "special", 160];
moveList[148] = ["dragon rush", "special", 100];
moveList[149] = ["outrage", "physical", 120];
//150-159 dark
moveList[150] = ["assurance", "physical", 60];
moveList[151] = ["bite", "physical", 60];
moveList[152] = ["black hole eclipse", "special", 130];
moveList[153] = ["crunch", "physical", 80];
moveList[154] = ["dark pulse", "special", 80];
moveList[155] = ["dark void", "special", 125];
moveList[156] = ["feint attack", "physical", 60];
moveList[157] = ["fiery wrath", "special", 90];
moveList[158] = ["foul play", "physical", 95];
moveList[159] = ["hyperspace fury", "physical", 180];
//160-169 steel
moveList[160] = ["behemoth bash", "physical", 100];
moveList[161] = ["behemoth blade", "physical", 100];
moveList[162] = ["bullet punch", "physical", 40];
moveList[163] = ["doom desire", "special", 150];
moveList[164] = ["flash cannon", "special", 90];
moveList[165] = ["iron tail", "physical", 85];
moveList[166] = ["meteor bash", "physical", 100];
moveList[167] = ["steel beam", "special", 140];
moveList[168] = ["steel roller", "physical", 130];
moveList[169] = ["sunsteel strike", "physical", 100];
//170-179 fairy
moveList[170] = ["dazzling gleam", "special", 80];
moveList[171] = ["fleur cannon", "special", 150];
moveList[172] = ["disarming voice", "special", 40];
moveList[173] = ["spirit break", "physical", 175];
moveList[174] = ["play rough", "physical", 90];
moveList[175] = ["moonlight", "special", 110];
moveList[176] = ["moonbeam", "physical", 180];
moveList[177] = ["light of ruin", "special", 160];
moveList[178] = ["fairy wind", "special", 65];
moveList[179] = ["flower shield", "special", 10];

function getStarter() {
  if (gotNext == false) {
    generate();
    starter = generateCount;
  } else {
    starter = generateCount;
    gotNext = false;
  }
}

function getNext() {
  generate();
  gotNext = true;
}

function preload() {
  getStarter();
}

function setup() {
  createCanvas(600, 600);
  playerOne = new player(300, 300);
  assets = new assetSetup();
  assets.setImg();
  charImg = upOne;
  assets.createTiles();
}

function generate() {
  generateCount = Math.floor(random(890));
  let link = "https://pokeapi.co/api/v2/pokemon/" + generateCount;
  console.log(link);
  loadJSON(link, gotData);
}

function gotData(data) {
  pokeData = data;
  let name = pokeData.name;
  let typeOne = pokeData.types[0].type.name;
  try {
    typeTwo = pokeData.types[1].type.name;
  } catch (TypeError) {
    typeTwo = "";
  }
  let hp = pokeData.stats[0].base_stat;
  let atk = pokeData.stats[1].base_stat;
  let def = pokeData.stats[2].base_stat;
  let spatk = pokeData.stats[3].base_stat;
  let spdef = pokeData.stats[4].base_stat;
  let spd = pokeData.stats[5].base_stat;
  let frontSprite = pokeData.sprites.front_default;
  let backSprite = pokeData.sprites.back_default;
  pokeList[generateCount] = new pokemon(
    name,
    typeOne,
    typeTwo,
    hp,
    atk,
    def,
    spatk,
    spdef,
    spd,
    frontSprite,
    backSprite
  );
}

function draw() {
  if (screen == 0) {
    background("#B5FFE4");
    pokeList[starter].drawStarter();
    if (gotNext == false) {
      getNext();
    }
    fill(0);
    textSize(20);
    text("Here is your starter.", 200, 390);
    text(
      "Press space 10 times to randomize or press w to start the game.",
      20,
      490
    );
  }
  if (screen == 1) {
    world();
  }
  if (screen == 2) {
    background("#B5FFE4");
    battle();
    if (action == 1) {
      fill("yellow");
      rect(350, 450, 250, 50);
      rect(50, 450, 250, 50);
      fill("black");
      text("catch (changes current)", 50, 480);
      text("keep current", 350, 480);
    }
  }
}

function getEnemy() {
  enemy = generateCount;
  gotNext = false;
  getNext();
}
function keyPressed() {
  if (screen == 0) {
    if (key == "w") {
      screen = 1;
      ownedPokemon[0] = starter;
      // switch statement to get pokemon moves
      getMoves(starter);
    }
    if (key == " ") {
      if (nextCount == 10) {
        getStarter();
        nextCount = 1;
      } else {
        nextCount += 1;
        console.log(nextCount);
      }
    }
  }
  if (screen == 1) {
    if (key == "w") {
      playerOne.walkUp();
      if (coolDown > 5) {
        playerOne.battle();
        coolDown = 0;
      } else {
        coolDown += 1;
      }
    }
    if (key == "a") {
      playerOne.walkLeft();
      if (coolDown > 5) {
        playerOne.battle();
        coolDown = 0;
      } else {
        coolDown += 1;
      }
    }
    if (key == "s") {
      playerOne.walkDown();
      if (coolDown > 5) {
        playerOne.battle();
        coolDown = 0;
      } else {
        coolDown += 1;
      }
    }
    if (key == "d") {
      playerOne.walkRight();
      if (coolDown > 5) {
        playerOne.battle();
        coolDown = 0;
      } else {
        coolDown += 1;
      }
    }
  }
}

function mousePressed() {
  if (screen == 2) {
    if (action == 0) {
      if (mouseX > 75 && mouseX < 275 && mouseY > 450 && mouseY < 500) {
        damageCalc(
          pokeList[starter].moveOne,
          generateCount,
          pokeList[starter].moveOne[1]
        );
        console.log(pokeList[starter].moveOne);
      }
      if (mouseX > 300 && mouseX < 500 && mouseY > 450 && mouseY < 500) {
        damageCalc(
          pokeList[starter].moveTwo,
          generateCount,
          pokeList[starter].moveTwo[1]
        );
        console.log(pokeList[starter].moveTwo);
      }
      if (mouseX > 75 && mouseX < 275 && mouseY > 520 && mouseY < 570) {
        damageCalc(
          pokeList[starter].moveThree,
          generateCount,
          pokeList[starter].moveThree[1]
        );
        console.log(pokeList[starter].moveThree);
      }
      if (mouseX > 300 && mouseX < 500 && mouseY > 520 && mouseY < 570) {
        damageCalc(
          pokeList[starter].moveFour,
          generateCount,
          pokeList[starter].moveFour[1]
        );
        console.log(pokeList[starter].moveFour);
      }
    }
    if (action == 1) {
      if (battlePause == 1) {
        action = 2;
        battlePause = 0;
      } else {
        battlePause += 1;
      }
    }
    if (action == 2) {
      if (mouseX > 50 && mouseX < 300 && mouseY > 450 && mouseY < 500) {
        starter = enemy;
        generate();
        screen = 1;
        loadHealth = false;
        getMoves(starter);
        action = 0;
      }
      if (mouseX > 350 && mouseX < 600 && mouseY > 450 && mouseY < 500) {
        generate();
        screen = 1;
        loadHealth = false;
        action = 0;
      }
    }
  }
}

function getMoves(pokemon) {
  switch (pokeList[pokemon].typeOne) {
    case "normal":
      moveNum = Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "fire":
      moveNum = 10 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 10 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "water":
      moveNum = 20 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 20 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "electric":
      moveNum = 30 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 30 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "grass":
      moveNum = 40 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 40 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "ice":
      moveNum = 50 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 50 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "fighting":
      moveNum = 60 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 60 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "poison":
      moveNum = 70 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 70 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "ground":
      moveNum = 80 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 80 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "flying":
      moveNum = 90 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 90 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "psychic":
      moveNum = 100 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 100 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "bug":
      moveNum = 110 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 110 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "rock":
      moveNum = 120 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 120 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "ghost":
      moveNum = 130 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 130 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "dragon":
      moveNum = 140 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 140 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "dark":
      moveNum = 150 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 150 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "steel":
      moveNum = 160 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 160 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "fairy":
      moveNum = 170 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 170 + Math.floor(random(10));
        pokeList[pokemon].moveTwo = moveList[moveNum];
      }
      break;
    case "":
      moveNum = Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[starter].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = Math.floor(random(10));
        pokeList[starter].moveTwo = moveList[moveNum];
      }
      break;
    default:
      moveNum = Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[starter].moveOne = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = Math.floor(random(10));
        pokeList[starter].moveTwo = moveList[moveNum];
      }
      break;
  }
  //moves 3 and 4
  console.log(pokeList[pokemon].typeTwo);
  switch (pokeList[pokemon].typeTwo) {
    case "normal":
      moveNum = Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "fire":
      moveNum = 10 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 10 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "water":
      moveNum = 20 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 20 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "electric":
      moveNum = 30 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 30 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "grass":
      moveNum = 40 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 40 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "ice":
      moveNum = 50 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 50 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "fighting":
      moveNum = 60 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 60 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "poison":
      moveNum = 70 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 70 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "ground":
      moveNum = 80 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 80 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "flying":
      moveNum = 90 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 90 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "psychic":
      moveNum = 100 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 100 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "bug":
      moveNum = 110 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 110 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "rock":
      moveNum = 120 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 120 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "ghost":
      moveNum = 130 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 130 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "dragon":
      moveNum = 140 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 140 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "dark":
      moveNum = 150 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 150 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "steel":
      moveNum = 160 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 160 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "fairy":
      moveNum = 170 + Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[pokemon].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = 170 + Math.floor(random(10));
        pokeList[pokemon].moveFour = moveList[moveNum];
      }
      break;
    case "":
      moveNum = Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[starter].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = Math.floor(random(10));
        pokeList[starter].moveFour = moveList[moveNum];
      }
      break;
    default:
      moveNum = Math.floor(random(10));
      moveCompare = moveNum;
      pokeList[starter].moveThree = moveList[moveNum];
      while (moveNum == moveCompare) {
        moveNum = Math.floor(random(10));
        pokeList[starter].moveFour = moveList[moveNum];
      }
      break;
  }
}

function damageCalc(starterMove, enemy, damageType) {
  //damage to enemy
  let damage;
  if (damageType == "special") {
    damage = Math.floor(
      (starterMove[2] * (pokeList[starter].spatk / pokeList[enemy].spdef)) / 4
    );
  } else {
    damage = Math.floor(
      (starterMove[2] * (pokeList[starter].atk / pokeList[enemy].def)) / 4
    );
  }
  enemyRemHealth = enemyRemHealth - damage;
  if (enemyRemHealth <= 0) {
    enemyRemHealth = 0;
    action = 1;
  }
  // damage to player
  let enemyDamage;
  let enemyMove = Math.floor(random(179));
  if (damageType == "special") {
    enemyDamage = Math.floor(
      (moveList[enemyMove][2] *
        (pokeList[enemy].spatk / pokeList[starter].spdef)) /
        8
    );
  } else {
    let enemyMove = Math.floor(random(179));
    enemyDamage = Math.floor(
      (moveList[enemyMove][2] * (pokeList[enemy].atk / pokeList[starter].def)) /
        8
    );
  }
  playerRemHealth = playerRemHealth - enemyDamage;
  if (playerRemHealth <= 0) {
    playerRemHealth = 0;
    generate();
    screen = 1;
    loadHealth = false;
    action = 0;
  }
}

function world() {
  background(220);
  for (tileCount = 0; tileCount < 1008; tileCount++) {
    groundList[tileCount].drawBox();
  }
  fill("blue");
  playerOne.drawPlayer();
}
function battle() {
  pokeList[starter].drawActive();
  pokeList[enemy].drawEnemy();
  assets.battleScreen();
}
