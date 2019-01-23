import TieFighter from './tie_fighters';
import Shot from './shot';
import Sound from './sound';

class Game {
  constructor(background, music) {
    this.difficulty = 1;
    this.music = music;
    this.killedTieFighters = 0;
    this.soundOn = false;
    this.damage = 0;
    this.enemies = [new TieFighter(this), new TieFighter(this), new TieFighter(this)];   
    this.bg = background;
    this.over = false;

    // Starts drawing canvas and ends the game
    this.create = setInterval(() => {
      this.draw()
      if (this.damage >= 100) {
        this.endGame()
      }
    }, 40);
    this.createEnemy = setInterval(() => {
      this.enemies.push(new TieFighter(this))      
    } , this.difficulty * 1000);

    // This clears out enemies after they leave the screen
    setTimeout(() => {

      setInterval(() => {
        if (this.enemies.length > 0) {
          let check = this.enemies.shift()
          // as it removes them it checks for their destroyed status
          if (check.destroyed) {
            // this.killedTieFighters += 1
          }
          check.destroy()
        }
      }, 1000);
      
    }, 2000);
  }

  play() {
    if (!this.over) {
      this.handleMusic();
      let enemies = this.enemies;
      document.getElementById('canvas').addEventListener('click', (evt) => {
        let shot = new Shot(evt.clientX, evt.clientY);
        this.handleFireSound();
        shot.draw();
        enemies.forEach(enemy => {
          enemy.shotAt(evt.clientX, evt.clientY);
        })
      }, false);
    }
  }

  endGame() {
    clearInterval(this.createEnemy);
    document.getElementById('splash').style.visibility = 'visible';
    document.getElementById('quit_game').style.visibility = 'hidden';
    document.getElementById('play_btn_txt').innerHTML = 'Play Again';
    document.getElementById('instructions').innerHTML = '';
    document.getElementById('title_txt').innerHTML = 'The empire defeated you.';
  }

  clearGame() {
    clearInterval(this.create);
    this.music.stop();
    this.soundOn = false;
  }

  clearSound() {
    this.music.stop();
    this.soundOn = false;
  }
  
  draw() {
    if (!this.over) {
      document.getElementById('damage').innerHTML = `Health: ${100 - Math.floor(this.damage)}%`;
      document.getElementById('score').innerHTML = `Score: ${Math.floor(this.killedTieFighters)}`;
      document.getElementById('music').innerHTML = `Sound: ${this.musicPlaying()}`;
      this.bg.draw();
      this.drawEnemies();
    }
  }
  
  drawEnemies() {
    this.enemies.map(enemy => {
      enemy.draw();
    });
  }

  musicPlaying() {
    if (!this.over) {
      if (this.soundOn) {
        return 'on';
      } else {
        return 'off';
      }
    }
  }

  handleMusic() {
    if (!this.over) {
      document.getElementById('music').addEventListener('click', () => {
        if (this.soundOn) {
          this.soundOn = false;
          this.music.stop();
        } else {
          this.soundOn = true;
          this.music.start(this);
        }
      }, false);
    }
  }

  handleFireSound() {
    if (!this.over) {
      let sound = new Sound('./sounds/XWing_fire.mp3');
      sound.start(this, 0.5);
    }
  }
}

export default Game;