class TieFighter{
  constructor() {
    this.pos = this.randomPos()
    this.vel = [3, 3]
    this.size = [100, 100]
    this.destroyed = false
    this.rotate = ((this.getRandomRange(-50, 50)) * Math.PI / 180)
  }

  getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomPos() {
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;

    let x = Math.floor(Math.random() * maxWidth); 
    let y = Math.floor(Math.random() * maxHeight); 

    // let x = this.getRandomRange(-maxWidth, maxWidth)
    // let y = this.getRandomRange(-maxHeight, maxHeight)

    let chooser = Math.floor(Math.random() * 2);
    if (chooser % 2 === 0) {
      x = 0
    } else {
      y = 0
    }
    return [x, y]
  }

  draw() {

    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    ctx.rotate(this.rotate);

    
    img.src = '../assets/tie_fighter.png';

    this.vel[0] += .5
    this.vel[1] += .5
    this.size[0] += this.vel[0]
    this.size[1] += this.vel[0]
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]

    ctx.drawImage(img, this.pos[0], this.pos[1], this.size[0], this.size[1])

  }

  destroy() {
    //destroys them
  }

  fire() {
    //they shoot at us and we take damage
  }
}

export default TieFighter