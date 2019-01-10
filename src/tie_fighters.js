class TieFighter{
  constructor() {
    this.pos = this.randomPos()
    this.img = new Image();
    this.img.src = '../assets/tie_fighter.png';
    this.accel = this.getAccel()
    console.log(this.accel.slice());
    if (this.accel[0] < 0) {
      this.vel = [-3, -3]
    } else {
      this.vel = [3, 3]
    }
    this.size = [100, 100]
    this.destroyed = false
    this.rotate = ((this.getRandomRange(-24, 24)) * Math.PI / 180)
  }

  getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  getAccel() {
    if (this.pos[0] === -50 || this.pos[1] === -50) {
      return [.5, .5]
    } else {
      return [-.5, -.5]
    }
  }

  randomPos() {
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;

    console.log(maxWidth);
    console.log(maxHeight);
    
    

    let x = Math.floor(Math.random() * maxWidth); 
    let y = Math.floor(Math.random() * maxHeight); 

    // let x = this.getRandomRange(-maxWidth, maxWidth)
    // let y = this.getRandomRange(-maxHeight, maxHeight)

    let chooser = Math.floor(Math.random() * 4);
    // if (chooser % 2 === 0) {
    //   x = -100
    // } else {
    //   y = -100
    // }
    switch (chooser) {
      case 0:
        x = -50
        break;
      case 1:
        x = maxWidth
        break;
      case 2:
        y = -50
        break;
      case 3:
        y = maxHeight
        break;
      default:
        throw 'HOW...'
    }
    return [x, y]
  }

  draw() {

    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.save()    

    this.vel[0] += this.accel[0]
    this.vel[1] += this.accel[1]
    this.size[0] += Math.abs(this.vel[0] * 0.7)
    this.size[1] += Math.abs(this.vel[0] * 0.7)
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]

    ctx.translate(this.pos[0] - (this.size[0] / 2), this.pos[1] - (this.size[1] / 2))
    ctx.rotate(this.rotate)
    ctx.drawImage(this.img, 0, 0, this.size[0], this.size[1])
    ctx.restore()
  }

  destroy() {
    //destroys them
  }

  fire() {
    //they shoot at us and we take damage
  }
}

export default TieFighter