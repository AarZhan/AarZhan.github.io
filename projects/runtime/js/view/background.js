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
        var mount;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var cloud = 0;
      var cloud1 = 0;
      var cloud2 = 0;
      var cloud3 = 0;
      var stuka =0;
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'darkgreen');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var ground = draw.rect(canvasWidth, 330, "lightblue");
            background.addChild(ground);

            var moon = draw.bitmap("img/sun.png");
moon.x = 900;
moon.y = -100;
moon.scaleX = .2;
moon.scaleY = .2;
background.addChild(moon);
            
        
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 3: Part 1 - Add a tree
                cloud2 = draw.bitmap("img/cloud1.png");
                cloud2.x = 700;
                cloud2.y = -10;
                cloud2.scaleX = .40;
                cloud2.scaleY = .40;
                background.addChild(cloud2);

                cloud = draw.bitmap("img/cloud1.png");
                cloud.x = 1000;
                cloud.y = 10;
                cloud.scaleX = .50;
                cloud.scaleY = .50;
                background.addChild(cloud);

                cloud1 = draw.bitmap("img/cloud1.png");
                cloud1.x = -200;
                cloud1.y = 10;
                cloud1.scaleX = .50;
                cloud1.scaleY = .50;
                background.addChild(cloud1);

                cloud3 = draw.bitmap("img/cloud1.png");
                cloud3.x = 300;
                cloud3.y = 10;
                cloud3.scaleX = .40;
                cloud3.scaleY = .40;
                background.addChild(cloud3);

                stuka = draw.bitmap("img/Stuka.png");
                stuka.x = 300;
                stuka.y = 10;
                stuka.scaleX = .20;
                stuka.scaleY = .20;
                background.addChild(stuka);
                
                
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            cloud.x = cloud.x - .5 ;
            
            if (cloud.x < -300) {
            cloud.x = canvasWidth;}
            cloud1.x = cloud1.x - .5 ;
            
            if (cloud1.x < -300) {
            cloud1.x = canvasWidth;}

            cloud2.x = cloud2.x - .3 ;
            
            if (cloud2.x < -300) {
            cloud2.x = canvasWidth;}

            if (cloud3.x < -300) {
            cloud3.x = canvasWidth;}
            cloud3.x = cloud3.x - .3 ;

            if (stuka.x < -5000) {
                stuka.x = canvasWidth;}
                stuka.x = stuka.x - 10 ;
            
            
            // TODO 4: Part 2 - Parallax
            

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
