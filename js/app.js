// Setup myScoreBoard
var myScoreBoard;
myScoreBoard=document.createElement('h3');
document.body.appendChild(myScoreBoard);



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
      if(this.x>550) {
        this.x=-100;
        this.speed=100 + Math.floor(Math.random()*512);
        }
// Check for collisions enemy vs Player
if (player.x < this.x + 50 &&
    player.x + 37 > this.x &&
    player.y < this.y + 25 &&
    30 + player.y > this.y) {
    player.x = 200;
    player.y = 380;
    player.lives -=1;
    if (player.lives ===0) {
      alert('Game Over! Your Score was  ' + player.score);
      location.reload()
    }
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
  this.score=0;
  this.lives=3;
}
// This class requires an update(),
update() {
 if(this.y < 0) {
   this.x = 200;
   this.y =380;
   this.score +=100;
 }

 myScoreBoard.innerHTML = `Score: ${player.score}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Lives: ${player.lives}`;


}
//render() and
render() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
// a handleInput() method.
handleInput(keyInput) {
  switch (keyInput) {
          case "left":
              //check for wall, otherwise move left
              if (this.x > 0) {
                  this.x -= 101;
              }
              break;
          case "right":
              //check for wall, otherwise move right
              if (this.x < 402) {
                  this.x += 101;
              }
              break;
          case "up":
              //check if player reached top of water, if so call success function,
              // otherwise move up
              if (this.y < 0) {
                  this.x = 200;
                  this.y=380;
              } else {
                  this.y -= 83;
              }
              break;
          case "down":
              //check for bottom, otherwise move down
              if (this.y < 400) {
                  this.y += 83;
              }
              break;
      }
}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies=[];
var enemyPosition = [60,140,220];

enemyPosition.forEach(function(posY) {
  enemy= new Enemy(0, posY, 100 + Math.floor(Math.random()*512));
  allEnemies.push(enemy);
});
// Place the player object in a variable called player
var player= new Player (200,400);

// keyframes



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var input=function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
};
 document.addEventListener('keyup', input);

// keys our player must collect
 var Key = function() {
    this.sprite = 'images/Key.png';
    this.x =0 + 101 * Math.floor(5 * Math.random());
    this.y = 62 + 85.5 * Math.floor(3 * Math.random());
};
// Draw the keys on the screen
Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Key.prototype.update = function() {

// Check for collisions enemy vs Player
if (player.x < this.x + 50 &&
  player.x + 37 > this.x &&
  player.y < this.y + 25 &&
  30 + player.y > this.y) {
    player.x = 200;
    player.y = 380;
    this.x =0 + 101 * Math.floor(5 * Math.random());
    this.y = 62 + 85.5 * Math.floor(3 * Math.random());
  player.score +=20;

  }
}


var allKeys=[];
var keysPosition = [60,140,220];
keysPosition.forEach(function(posX, posY) {
  key= new Key(posX, posY, 100 + Math.floor(Math.random()*512));
  allKeys.push(key);
});
