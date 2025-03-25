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
    }
   createObstacles(400, groundY -50, 25, 10);
   createObstacles(800, groundY -50, 25, 10);
   createObstacles(1200, groundY -50,25, 10);

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
