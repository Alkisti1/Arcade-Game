// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //position of the bug.
    this.x=x;
    this.y=y;
    //bug's speed
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    {
      this.x=this.x +(dt*this.speed);
      // Reposition bugs and randomize speed
      if(this.x>510) {
        this.x=-50;
        this.speed=100 + Math.floor(Math.random()*222);
      }
//reset player to the beginning
      if (player.x<this.x +80 &&
        player.x +80 > this.x &&
        player.y<this.yy +60 &&
        60 + player.y>this.y) {
          player.x=202;
          player.y=405;
        }

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Player {
  constructor(x,y) {
  this.x=x;
  this.y=y;
  this.player = 'images/char-pink-girl.png';
}
// This class requires an update(),
update() {

}
//render() and
render() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
// a handleInput() method.
handleInput(){

}
};

var player= new Player (0,200,400)
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const firstEnemy = new Enemy(-100, 60);
const secondEnemy = new Enemy(-100, 145);
const thirdEnemy = new Enemy(-100, 230);
var allEnemies=[firstEnemy, secondEnemy, thirdEnemy];
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
