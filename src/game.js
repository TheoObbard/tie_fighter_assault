import TieFighter from './tie_fighters';
import Background from './background';
import Shot from './shot';
import Sound from './sound';

class Game {
  constructor(canvas) {
    this.difficulty = 1
    this.killedTieFighters = 0
    this.soundOn = false;
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
        let check = this.enemies.shift()
        // as it removes them it checks for their destroyed status
        if (check.destroyed) {
          this.killedTieFighters += 1
        }
      }, 1000)
    }, 2000)
  };

  musicPlaying() {
    if (this.soundOn) {
      return 'on'
    } else {
      return 'off'
    }
  };

  draw() {
    document.getElementById('damage').innerHTML = `Damage: ${Math.floor(this.damage)}/100`;
    document.getElementById('score').innerHTML = `Score: ${Math.floor(this.killedTieFighters)}`;
    document.getElementById('music').innerHTML = `Sound: ${this.musicPlaying()}`;
    document.getElementById('music').addEventListener('click', function () {
      this.soundOn = true;
    }, false)

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
    let music = new Sound("../sounds/music.mp3");
    if (this.soundOn) {
      music.start();
    }
    let enemies = this.enemies
    document.getElementById('canvas').addEventListener('click', function (evt) {
      let shot = new Shot(evt.clientX, evt.clientY)
      shot.draw()
      enemies.forEach(enemy => {
        enemy.shootAt(evt.clientX, evt.clientY)
      })
    }, false);
  }
};

export default Game