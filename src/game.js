import TieFighter from './tie_fighters';
import Background from './background';
import Shot from './shot';

class Game {
  constructor(canvas) {
    this.difficulty = 1
    this.killedTieFighters = 0
    this.damage = 0
    this.drawBG = this.drawBG.bind(this)
    this.drawEnemy = this.drawEnemy.bind(this)
    this.draw = this.draw.bind(this)
    this.enemies = [new TieFighter(this), new TieFighter(this), new TieFighter(this)]   
    this.bg = new Background()
    setInterval(this.draw, 40);
    setInterval(() => {
      this.enemies.push(new TieFighter(this))      
    } , 1000)

    // This clears out enemies after they leave the screen
    setTimeout(() => {
      setInterval(() => {
        this.enemies.shift()
      }, 1000)
    }, 2000)

  };

  draw() {
    this.drawBG()
    this.drawEnemies()
  }

  drawEnemies() {
    this.enemies.map(enemy => {
      enemy.draw()
    })
  }

  drawEnemy() {
    let enemies = this.enemy
    enemies.forEach(enemy => {
      setTimeout(function () { }, 1000)

      setInterval(function () {
        enemy.draw()
      }, 40)
    });
  }

  drawBG() { 
    this.bg.draw()
  }

  play() {
    
    let enemies = this.enemies

    document.getElementById('canvas').addEventListener('click', function (evt) {
      let shot = new Shot(evt.clientX, evt.clientY)

      enemies.forEach(enemy => {
        enemy.shootAt(evt.clientX, evt.clientY)
      })
    }, false);

  }
};

export default Game