var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree;
    var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            /*var backgroundFill = draw.rect(canvasWidth,groundY,'teal'); // draws a rectangle and store it in the variable backgroundFill
            background.addChild(backgroundFill);//fills the rectangle with a color
            */
           var backgroundPicture = draw.bitmap('img/background.png'); //declare picture for background
                background.addChild(backgroundPicture); //draws background
            /*
            // TODO 2: - Add a moon and starfield
            for(var i = 0; i < 100; i++ ){
                var circle = draw.circle(3, "white", "LightGray", 2); // create a circle with a specified rdius, border color, fill color and alpha and store it in the variable circle
                circle.x = canvasWidth * Math.random(); // set random X position within canvas width
                circle.y = groundY * Math.random(); // set random Y position within canvas groundY range
                background.addChild(circle); // adds the star to the background container
            }
            
              var moon = draw.bitmap("img/moon.png"); // creates a bit map object using the moon image and stores it in the variable
            moon.x = canvasWidth-450; //sets x position
            moon.y = groundY-400; //sets y position
            moon.scaleX = .7; // scales the moon's width
            moon.scaleY = .7; // scales the moon's length
            */

            var sun = draw.bitmap("img/sun.png"); // creates a bit map object using the sun image and stores it in the variable
            sun.x = canvasWidth-450; //sets x position
            sun.y = groundY-400; //sets y position
            sun.scaleX = .7; // scales the sun's width
            sun.scaleY = .7; // scales the sun's length

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for (var i = 0; i < 10; ++i) {
                var buildingColors = ["Gray", "white", "Gray", "white", "Gray","white", "Gray", "white", "Gray", "white"] // creates an array buildingColors that can determine the color of the buildings
                var buildingHeight = 300 * Math.random(); // assign 300 to the buildingHeight variable
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1); // draw retangle with the width of 75, a set height, a fill color of gray, border color of black and the width of the border is 1 
                building.x = 200 * i; //  multiply 200 by the current i value and store it as the x pos for the building
                building.y = groundY - buildingHeight; // subtract 300 from gorundY to determine the height of building
                background.addChild(building); // add our building to the background container
                buildings.push(building); // add building to buildings array for farther manipulation
              }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // creates a bitmap for the tree image and stores it in the variable tree
            tree.x = canvasWidth  -10; // places the tree to the right
            tree.y = groundY - 230; // places the tree above the ground(adjested for the tree height)
            background.addChild(tree); // addd the tree to the background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x -= 3; // moves the tree to the left by 3 by subtracting from the current x position
            if (tree.x < -200) {
                tree.x = canvasWidth - 150;
              }
            
            // TODO 4: Part 2 - Parallax
            
            for(var i = 0; i < buildings.length; i++){
                var building = buildings[i]; // individual imdex of the buildings array stored in the variable building
                building.x -= 1;  //subtract 1 from the building's x position; animate to the left
                if (building.x < -100){ // checks if the x pos of the buidling is less than -100
                    building.x = canvasWidth; // helps the background reset when it reaches the end of the screen
            }
           
            }
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
