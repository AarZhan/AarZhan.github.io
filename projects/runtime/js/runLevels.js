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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade(x){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, 50);

    sawBladeHitZone.x = 500 + i * 300;
    sawBladeHitZone.y = 340;
    game.addGameItem(sawBladeHitZone);

    var obstacleImage = draw.bitmap("img/Mine.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -50;
    obstacleImage.y = -50;
    obstacleImage.scaleX = .05;
    obstacleImage.scaleY = .05;

    
  }

 

function createEnemy(x) {
  var enemy = game.createGameItem("enemy", 150);
  var tiger = draw.bitmap("img/tiger.png");
  tiger.x = -250;
  tiger.y = -160;
  tiger.scaleX = 1.5;
  tiger.scaleY = 1.5;
  enemy.addChild(tiger);
  enemy.x = x;
enemy.y = 300;
game.addGameItem(enemy);
enemy.velocityX = -4;
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-30)
  }

  enemy.onProjectileCollision = function () {
    game.increaseScore(1000);
    enemy.fadeOut();
  }


  function createReward(x) {
    var reward = game.createGameItem("reward", 150);
    var stick = draw.bitmap("img/tonk.png");
    stick.x = -150;
    stick.y = -70;
    stick.scaleX = 1.5;
    stick.scaleY = 1.5;
    reward.addChild(stick);
    reward.x = x;
  reward.y = 300;
  game.addGameItem(reward);
  reward.velocityX = -4;
  reward.onPlayerCollision = function () {
    }
  
    reward.onProjectileCollision = function () {
      game.increaseScore(10);
      reward.fadeOut();
    }}
createReward(10000)
}
for (var i = 0; i < 50; ++i){
  if (i % 2 !== 0)
  console.log("a");
  else
  createEnemy(i * 1000 + 500);
  createSawBlade(i +50 );
}




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
