import TieFighter from './tie_fighters';
import Background from './background';

class Game {
  constructor(canvas) {
    this.difficulty = 1
    this.killedTieFighters = 0
    this.drawBG = this.drawBG.bind(this)
    this.drawEnemy = this.drawEnemy.bind(this)
    // this.createLevel = this.createLevel.bind(this)

    this.draw = this.draw.bind(this)
    this.enemy = new TieFighter()   
    // this.createLevel()
    this.bg = new Background()
    setInterval(this.draw, 40);
  }

  draw() {
    this.drawBG()
    // this.drawEnemy()
  }

  drawEnemy() {
    
    let enemy = this.enemy
    
    setInterval(function() {
      enemy.draw()
    }, 40)
  }

  drawBG() { 
    this.bg.draw()
  }

  // createLevel() {
  //   setTimeout(function() {
  //     this.enemy.push(new TieFighter())
  //   }, this.difficulty * 1000)
  // }

  play() {
    setInterval(this.drawEnemy(), 1000)
    let enemy = this.enemy

    document.getElementById('canvas').addEventListener('click', function (evt) {
      // alert(evt.clientX + ',' + evt.clientY);
      enemy.shootAt(evt.clientX, evt.clientY)
    }, false);
  }
};

export default Game