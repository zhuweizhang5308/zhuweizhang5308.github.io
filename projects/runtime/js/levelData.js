var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 800, y: groundY , hitSize: 25, damage: 100, image: "img/spikes.png"},
          { type: "sawblade", x: 1200, y: groundY, hitSize: 25, damage: 10, image: "img/spikes.png"},
          { type: "sawblade", x: 2000, y: groundY, hitSize: 25, damage: 10, image: "img/spikes.png"},

          { type: "sawblade", x: 3000, y: groundY, hitSize: 25, damage: 10, image: "img/spikes.png"},

          { type: "enemy", x: 2500, y: groundY-50 , speed: 3, health: -100, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 3500, y: groundY-50 , speed: 3, health: -10, image: "img/Shiryu.png", xScale: .5 , yScale: .5, score: 300},
          { type: "enemy", x: 5500, y: groundY-50, speed: 3, health: -50, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 7000, y: groundY-50, speed: 3, health: -100, image: "img/blackbeard.png", xScale: 0.3 , yScale: 0.3, score: 1000},

          { type: "reward", x: 8000, y: groundY  - 50, speed: 3, health: 10, image: "img/treasure.png"},
          { type: "reward", x: 6000, y: groundY  - 50, speed: 3, health: 10, image: "img/treasure.png"},

          { type: "level", x: 9000, y: groundY  - 50, speed : 3, health : 100, image: "img/compass.png", xScale: 0.1 , yScale: 0.1},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 2000, y: groundY - 100 },
          { type: "sawblade", x: 3000, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
