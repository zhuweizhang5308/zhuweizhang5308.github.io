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

    function createObstacles(x, y, xScale, yScale, posX, posY, hitSize, damage, image, speed, rotation){
      var hitZoneSize = hitSize; // define the size of the hit zone using the assigned variable
      var damageFromObstacle = damage; // sets the damage
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // create obstacles
      obstacleHitZone.x = x ; // sets the x coordinate for the obstacle
      obstacleHitZone.y = y; // sets the y coordinate for the obstacle
      obstacleHitZone.velocityX -= speed;
      game.addGameItem(obstacleHitZone); // adds the obstacle htizone to the game
      var obstacleImage = draw.bitmap(image); // draws the obstacle bitmap nad store it is obstacleImage
      obstacleHitZone.addChild(obstacleImage); // attach the image to the obstacle hitzone
      obstacleImage.x = posX; // position the image on the hitzone's x value by moving it left 25 pixel
      obstacleImage.y = posY; // position the image on the hitzone's y value by moving it up 25 pixel  
      obstacleHitZone.rotationalVelocity = rotation; // rotates obstacle
      obstacleImage.scaleX = xScale; // X scale of image
      obstacleImage.scaleY = yScale; // Y scale of image
    }
   


    function createReward(x, y, speed, health, image){
      var reward = game.createGameItem("reward", 25); // create reward game item adn adds it to the game
      var rewardImage = draw.bitmap(image);
      //var blueSquare = draw.rect(50, 50, "blue"); // creates a blue square and stores it to the var blueSquare
      rewardImage.x = -25; // sets the x pos of the reward
      rewardImage.y = 30;// sets the y pos of the reward
      //blueSquare.x = -25; // sets the hitzone of the image bt -25 pixels
      //blueSquare.y = -25; // sets the hitzone of the image bt -25 pixels
      reward.addChild(rewardImage);
      //reward.addChild(blueSquare); // add blueSquare as the child of the reward code
      reward.x = x; // sets the x pos of the reward
      reward.y = y; // sets the y pos of the reward
      rewardImage.scaleX = .1;
      rewardImage.scaleY = .1;
      game.addGameItem(reward); // add enemy to game
      reward.velocityX -= speed; // sets how fast the reward is moving
      reward.onPlayerCollision = function () {
        game.changeIntegrity(health) // gives health to Halle when it touch the reward
        reward.shrink() // reward shrink when hit
        //reward.fadeOut() // reward fadeOut when it is hit
        //reward.flyTo (0,0) // reward  flys when hit
        game.increaseScore(200) //increase score by 100 when collected
        startLevel();
      }; 
    }
    


  function createEnemy(x, y, speed, health, image, xScale, yScale, score){
    var enemy = game.createGameItem("enemy", 25); // create enemy game item and adds it to the game
    //var redSquare = draw.rect(50, 50, "red"); // creates a red square and stores it to the var redSquare
    var enemyImage = draw.bitmap(image);
    enemyImage.x = -75; // sets the hitzone of the image bt -25 pixels
    enemyImage.y = -150; // sets the hitzone of the image bt -25 pixels
    //enemy.addChild(redSquare); // add redSquare as the child of the enemy code
    enemy.addChild(enemyImage);
    enemy.x = x; // sets the x pos of the enemy
    enemy.y = y; // sets the y pos of the enemy
    enemyImage.scaleX = xScale;
    enemyImage.scaleY = yScale;
    game.addGameItem(enemy); // add enemy to game
    enemy.velocityX -= speed; // sets how fast the enemy is moving
    enemy.onPlayerCollision = function () {
    game.changeIntegrity(health) // subtracts health from Halle when it touch the enemy
    }; 
    enemy.onProjectileCollision = function(){
      game.increaseScore(score) //increase socre by 100 when the enemy is hit
       // increase score when it hits enemy
      //enemy.fadeOut() // enemy fadeOut when it is hit
      //enemy.shrink() // enemy shrink when hit
      enemy.flyTo (0,0) // enemy  flys when hit
    
    }
    
  }
   

  function createLevel(x, y, speed, health, image, xScale, yScale){
    var level = game.createGameItem("Level", 25); // create level game item and adds it to the game
    //var yellowSquare = draw.rect(50, 50, "yellow"); // creates a yellow square and stores it to the var yellowSquare
    var levelImage = draw.bitmap(image);
    levelImage.x = -300;
    levelImage.y = -300;
    //yellowSquare.x = -25; // sets the hitzone of the image bt -25 pixels
    //yellowSquare.y = -25; // sets the hitzone of the image bt -25 pixels
    //level.addChild(yellowSquare); // add yellowSquare as the child of the enemy code
    level.addChild(levelImage);
    level.x = x; // sets the x pos of the level reward
    level.y = y; // sets the y pos of the level reward
    game.addGameItem(level); // add enemy to game
    level.velocityX -= speed; // sets how fast the enemy is moving
    level.onPlayerCollision = function () {
      game.changeIntegrity(health) // subtracts 10 helath form Halle when it touch the enemy
      level.shrink() // level shrink when hit
      //level.fadeOut() // level fadeOut when it is hit
      //level.flyTo (0,0) // level  flys when hit
      game.increaseScore(3000) // increases score when it collects the yellowSquare
      levelImage.scaleX = xScale;
      levelImage.scaleY = yScale;
    }; 
  }
   


    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; // fetches the current lvl from the levelData array and stores it in var level
      var levelObjects = level.gameItems // retrieve the array of gameItems and stores it in levelObjects
      
      for(var i = 0; i < levelObjects.length; i++){ // a loop that sets the length of the objects 
        var element = levelObjects[i]; // set element to levelObject loop

        if(element.type === "sawblade"){ // checks the type key:value of the gameItem objects to determine which object to manifest
          createObstacles(element.x, element.y, element.xScale, element.yScale, element.posX, element.posY, element.hitSize, element.damage, element.image, element.speed, element.rotation); // if the conditon is true, it will run the elements
        }
        if(element.type === "enemy"){ // checks the type key:value of the gameItem objects to determine which object to manifest
          createEnemy(element.x, element.y, element.speed, element.health, element.image, element.xScale, element.yScale, element.score); // if the conditon is true, it will run the elements
        }
        if(element.type === "reward"){ // checks the type key:value of the gameItem objects to determine which object to manifest
          createReward(element.x, element.y, element.speed, element.health, element.image,); // if the conditon is true, it will run the elements
        }
        if(element.type === "level"){ // checks the type key:value of the gameItem objects to determine which object to manifest
          createLevel(element.x, element.y, element.speed, element.health, element.image, element.xScale, element.yScale); // if the conditon is true, it will run the elements
        }


      }

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
