class TieFighter{
  constructor(pos, vel) {
    this.pos = pos
    this.vel = vel
  }

  draw() {

    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    
    img.src = '../assets/tie_fighter.png';
    ctx.drawImage(img, 100, 100, 100, 100)
  }

  destroy() {
    //destroys them
  }

  fire() {
    //they shoot at us and we take damage
  }
}

export default TieFighter