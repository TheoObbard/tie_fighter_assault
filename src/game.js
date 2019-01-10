import TieFighter from './tie_fighters';
import Background from './background';

class Game {
  constructor(canvas) {
    let difficulty = 1
    let killedTieFighters = 0
    setInterval(this.draw, 40);
  }

  draw() { 
       
    // creates background
    const bg = new Background()

    bg.draw()
    // for testing purposes
    // +++++++++++++
    const enemy = new TieFighter()
    enemy.draw()
    // +++++++++++++
  }

  play() {
    
  }
};

export default Game