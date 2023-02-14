(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(-40, game.world.height - 50, 3.5, 1); // DO NOT DELETE

    // example:
    createPlatform(200, 750);
    createPlatform(250, 550,.5);
    createPlatform(10, 450,.5);
    createPlatform(350, 330,.3);
    createPlatform(600,650);
    createPlatform(600,250);
    createPlatform(1200,750)
    createPlatform(1200,400)
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
