import TieFighter from './tie_fighters';
import Background from './background';

class Game {
  constructor(canvas) {
    let difficulty = 1
    let killedTieFighters = 0
    this.draw = this.draw.bind(this)
    this.bg = new Background()
    this.enemy = new TieFighter()
    setInterval(this.draw, 40);
  }

  draw() { 
    this.bg.draw()
    // for testing purposes
    // +++++++++++++

    this.enemy.draw()


    // +++++++++++++
  }

  play() {
    
  }
};

export default Game