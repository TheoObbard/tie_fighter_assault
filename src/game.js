import TieFighter from './tie_fighters';
import Shot from './shot';
import Sound from './sound';

class Game {
  constructor(background) {
    this.difficulty = 1
    this.music;
    this.killedTieFighters = 0
    this.soundOn = false;
    this.damage = 0
    this.draw = this.draw.bind(this)
    this.enemies = [new TieFighter(this), new TieFighter(this), new TieFighter(this)]   
    this.bg = background
    this.create = setInterval(() => {
      this.draw()
      if (this.damage >= 100) {
        this.endGame()
      }
    }, 40);
    this.createEnemy = setInterval(() => {
      this.enemies.push(new TieFighter(this))      
    } , this.difficulty * 1000)

    // This clears out enemies after they leave the screen
    setTimeout(() => {
      setInterval(() => {
        let check = this.enemies.shift()
        // as it removes them it checks for their destroyed status
        if (check.destroyed) {
          this.killedTieFighters += 1
        }
        check.destroy()
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
    document.getElementById('damage').innerHTML = `Health: ${100 - Math.floor(this.damage)}%`;
    document.getElementById('score').innerHTML = `Score: ${Math.floor(this.killedTieFighters)}`;
    document.getElementById('music').innerHTML = `Sound: ${this.musicPlaying()}`;
    this.bg.draw()
    this.drawEnemies()
  }

  drawEnemies() {
    this.enemies.map(enemy => {
      enemy.draw()
    })
  }

  handleMusic() {
    this.music = new Sound("../sounds/The_Asteroid_Field.mp3");
    document.getElementById('music').addEventListener('click', () => {
      if (this.soundOn) {
        this.soundOn = false
        this.music.stop()
      } else {
        this.soundOn = true
        this.music.start(this);
      }
    }, false)
  }

  handleFireSound() {
    let sound = new Sound('../sounds/XWing_fire.mp3')
    sound.start(this, 0.5)
  };
 
  play() {
    this.handleMusic()
    let enemies = this.enemies
    document.getElementById('canvas').addEventListener('click', (evt) => {
      let shot = new Shot(evt.clientX, evt.clientY)
      this.handleFireSound()
      shot.draw()
      enemies.forEach(enemy => {
        enemy.shootAt(evt.clientX, evt.clientY)
      })
    }, false);
  }

  endGame() {
    clearInterval(this.createEnemy)
    document.getElementById('splash').style.visibility = 'visible'; 
    document.getElementById('play_btn_txt').innerHTML = 'Play Again'
    document.getElementById('title_txt').innerHTML = 'The empire defeated you.'
  }

  clearGame() {
    clearInterval(this.create)
    this.music.stop()
    this.soundOn = false;
  }
};

export default Game