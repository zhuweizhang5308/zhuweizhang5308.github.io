var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array
        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){ 
            //code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); //uses a existing draw function to draw a circle of random size, color and location within the canvas of that function
            physikz.addRandomVelocity(circle, canvas, 5, 5); //use the physikz library to add a random velocity to the circles
            view.addChild(circle); //adds the circle as a child of view so that the cricles reappears on the screen
            circles.push(circle); //saves the circle to an array of circles by pushing it to the end of the array
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        /*
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
         */

        for(var i = 0; i < 100 ; i++ ){
            //draws a hundred circles randomly
            drawCircle();
        }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            /*
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);


            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            */

            // TODO 9 : Iterate over the array
           for(var i = 0; i < circles.length ; i ++ ){
            //depends the area the circles can move within
            physikz.updatePosition(circles[i]); //moves the position of the circles
            game.checkCirclePosition(circles[i]); //checks the position of the circles
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {
            //a function that checks the position of the circle
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) { //if the circle hits the right side, it reappears in the left 
                circle.x = 0; // tells the circle to start at x=0 when it respawns to the other side
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x < 0){ //if the circle hits the left hand side, it moves towards the right
                circle.x = canvas.width // tells the circle to start at the right side of the canvas when it respawns to the screen
            }

            if(circle.y > canvas.height){//if the circle hits the bottom side, it reappears in the top 
                circle.y = 0; // tells the circle to start at y=0 when it respawns to the other side
            }

            if(circle.y < 0){//if the circle hits the bottom of the screen, it moves up, 
                circle.y = canvas.height; // tells the circle to start at the top side of the canvas when it respawns to the screen
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
