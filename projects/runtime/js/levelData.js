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
          { type: "sawblade", x: 800, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 1200, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 2000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 3000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 3200, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 3600, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 3900, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 5500, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 6100, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 7000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 7500, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 8300, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          
          { type: "sawblade", x: 3000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 7000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 6000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 8000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 9000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 10000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 12000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 15000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 23000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},
          { type: "sawblade", x: 25000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 5, rotation: 10},

          { type: "enemy", x: 1500, y: groundY-50, speed: 3, health: -100, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 2500, y: groundY-50 , speed: 3, health: -50, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 3500, y: groundY-50 , speed:3, health: -50, image: "img/Shiryu.png", xScale: 0.5 , yScale: 0.5, score: 300},
          {type: "enemy", x: 5000, y: groundY-50 , speed: 3, health: -50, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 7500, y: groundY-50, speed: 3, health: -100, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 9000, y: groundY-50, speed: 3, health: -100, image: "img/blackbeard.png", xScale: 0.3 , yScale: 0.3, score: 1000},

          { type: "reward", x: 500, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 3, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 6000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 3, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 8200, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 3, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 9000, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 3, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 7000, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 3, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 6500, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 3, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 2500, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1, speed: 3, health: 50, image: "img/treasure.png", score: 200},

          { type: "level", x: 10000, y: groundY  - 100, speed : 3, health : 100, image: "img/compass.png", xScale: 0.01 , yScale: 0.01},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
         
          { type: "sawblade", x: 11000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 12000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 12500, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 13000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 14000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 15000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 15500, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 16700, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 17000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 18000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 20000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},
          { type: "sawblade", x: 22000, y: groundY, xScale: .5, yScale: .5, posX: -25,posY: -25, hitSize: 25, damage: 10, image: "img/spikes.png", speed : 3},

          { type: "sawblade", x: 27000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 30000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 35000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 37500, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 36000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 39000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 42000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 43500, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 45500, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 50000, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},
          { type: "sawblade", x: 47500, y: groundY - 120, xScale: .1, yScale: .1, posX: -25,posY: -50, hitSize: 25, damage: 10, image: "img/bomb.png", speed: 10, rotation: 10},


          { type: "enemy", x: 11500, y: groundY-50, speed: 5, health: -50, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 13000, y: groundY-50, speed: 5, health: -50, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 15000, y: groundY-50, speed: 5, health: -50, image: "img/Shiryu.png", xScale: 0.5 , yScale: 0.5, score: 300},
          { type: "enemy", x: 15500, y: groundY-50, speed: 5, health: -50, image: "img/Shiryu.png", xScale: 0.5 , yScale: 0.5, score: 300},
          { type: "enemy", x: 15600, y: groundY-50, speed: 5, health: -100, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 16000, y: groundY-50, speed: 5, health: -50, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 17500, y: groundY-50, speed: 5, health: -100, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 18000, y: groundY-50, speed: 5, health: -50, image: "img/Burgess.png", xScale: 0.3 , yScale: 0.3, score: 100},
          { type: "enemy", x: 18500, y: groundY-50, speed: 5, health: -50, image: "img/Shiryu.png", xScale: 0.5 , yScale: 0.5, score: 300},
          { type: "enemy", x: 19500, y: groundY-50, speed: 5, health: -50, image: "img/Shiryu.png", xScale: 0.5 , yScale: 0.5, score: 300},
          { type: "enemy", x: 20000, y: groundY-50, speed: 5, health: -100, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 21000, y: groundY-50, speed: 5, health: -100, image: "img/Aokiji.png", xScale: 0.2 , yScale: 0.2, score: 500},
          { type: "enemy", x: 22500, y: groundY-50, speed: 5, health: -100, image: "img/blackbeard.png", xScale: 0.3 , yScale: 0.3, score: 1000},

          { type: "reward", x: 11000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 11300, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 11600, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 11900, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 12000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 12500, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 12700, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 12800, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 13000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 15000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 16000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 16500, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 17500, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 18000, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 18500, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 19000, y: groundY - 100, xPos:-60, yPos: -30, xScale: 0.1, yScale: 0.1, speed: 5, health: 10, image: "img/coins.png", score: 100},
          { type: "reward", x: 20000, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},
          { type: "reward", x: 21000, y: groundY - 100, xPos:-25, yPos: 20, xScale: 0.1, yScale: 0.1,  speed: 5, health: 50, image: "img/treasure.png", score: 200},

          { type: "level", x: 23000, y: groundY  - 100, speed : 5, health : 100, image: "img/compass.png", xScale: 0.01 , yScale: 0.01},




        
        
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
