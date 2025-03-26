var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacles(x, y, hitSize, damage){
      var hitZoneSize = hitSize; // define the size of the hit zone using the assigned variable
      var damageFromObstacle = damage; // sets the damage
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // create obstacles
      obstacleHitZone.x = x; // sets the x coordinate for the obstacle
      obstacleHitZone.y = y; // sets the y coordinate for the obstacle
      game.addGameItem(obstacleHitZone); // adds the obstacle htizone to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the obstacle bitmap nad store it is obstacleImage
      obstacleHitZone.addChild(obstacleImage); // attach the image to the obstacle hitzone
      obstacleImage.x = -25; // position the image on the hitzone's x value by moving it left 25 pixel
      obstacleImage.y = -25; // position the image on the hitzone's y value by moving it up 25 pixel  
      obstacleHitZone.rotationalVelocity = 10;
    }
   createObstacles(400, groundY -50, 25, 10);
   createObstacles(800, groundY -50, 25, 10);
   createObstacles(1200, groundY -50,25, 10);


  function createReward(x, y, speed, health){
    var reward = game.createGameItem("reward", 25); // create reward game item adn adds it to the game
    var blueSquare = draw.rect(50, 50, "blue"); // creates a red square and stores it to the var blueSquare
    blueSquare.x = -25; // sets the hitzone of the image bt -25 pixels
    blueSquare.y = -25; // sets the hitzone of the image bt -25 pixels
    reward.addChild(redSquare); // add redsquare as the child of the enemy code
    reward.x = x; // sets the x pos of the enemy
    reward.y = y; // sets the y pos of the enemy
    game.addGameItem(reward); // add enemy to game
    reward.velocityX -= speed; // sets how fast the enemy is moving
    reward.onPlayerCollision = function () {
      game.changeIntegrity(health) // subtracts 10 helath form Halle when it touch the enemy
      reward.shrink() // reward shrink when hit
      game.increaseScore(100)
    }; 
   
    createReward(500, groundY, -100, -3)

  }
  createEnemy(4000, groundY -50, 3, -10)
  createEnemy(1800, groundY -50, 3, -10)
  createEnemy(2400, groundY -50, 3, -10) 

  function createEnemy(x, y, speed, health){
    var enemy = game.createGameItem("enemy", 25); // create enemy gmae item adn adds it to the game
    var redSquare = draw.rect(50, 50, "red"); // creates a red square and stores it to the var redSquare
    redSquare.x = -25; // sets the hitzone of the image bt -25 pixels
    redSquare.y = -25; // sets the hitzone of the image bt -25 pixels
    enemy.addChild(redSquare); // add redsquare as the child of the enemy code
    enemy.x = x; // sets the x pos of the enemy
    enemy.y = y; // sets the y pos of the enemy
    game.addGameItem(enemy); // add enemy to game
    enemy.velocityX -= speed; // sets how fast the enemy is moving
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(health) // subtracts 10 helath form Halle when it touch the enemy
    }; 
    enemy.onProjectileCollision = function(){
      game.increaseScore(100)
       // increase score when it hits enemy
      //enemy.fadeOut() // enemy fadeOut when it is hit
      //enemy.shrink() // enemy shrink when hit
      enemy.flyTo (0,0) // enemy  flys when hit
    }
  }
  createEnemy(4000, groundY -50, 3, -10)
  createEnemy(1800, groundY -50, 3, -10)
  createEnemy(2400, groundY -50, 3, -10) 


    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
