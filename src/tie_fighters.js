class TieFighter{
  constructor() {
    this.pos = this.randomPos()
    this.img = new Image();
    this.img.src = '../assets/tie_fighter.png';
    this.accel = this.getAccel()
    // console.log(this.accel.slice());
    if (this.accel[0] < 0) {
      this.vel = [-3, -3]
    } else {
      this.vel = [3, 3]
    }
    this.size = [100, 100]
    this.destroyed = false
    this.rotate = ((this.getRandomRange(-24, 24)) * Math.PI / 180)

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
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

    let chooser = Math.floor(Math.random() * 4);
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

    // const canvas = document.getElementById('canvas');
    // let ctx = canvas.getContext('2d');
    this.ctx.save()    

    this.vel[0] += this.accel[0]
    this.vel[1] += this.accel[1]
    this.size[0] += Math.abs(this.vel[0] * 0.7)
    this.size[1] += Math.abs(this.vel[0] * 0.7)
    if (this.destroyed) {
      this.size[0] += Math.abs(this.vel[0] * 0.7) * 2
      this.size[1] += Math.abs(this.vel[0] * 0.7) * 2
      this.vel[0] += (this.accel[0] * 3)
      this.vel[1] += (this.accel[1] * 3)
    }
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]

    this.ctx.translate(this.pos[0] - (this.size[0] / 2), this.pos[1] - (this.size[1] / 2))
    this.ctx.rotate(this.rotate)
    this.ctx.drawImage(this.img, 0, 0, this.size[0], this.size[1])
    this.ctx.restore()
  }

  shootAt(x, y) {
    console.log(this.pos[0], this.pos[1]);
    console.log(x, y);
    
    
    if (x > this.pos[0] && x <= this.pos[0] + this.size[0]) {
      if (y >= this.pos[1] && y <= this.pos[1] + this.size[1]) {
        this.destroy()
      }
    }
  }

  destroy() {
    //destroys them
    this.img.src = '../assets/explosion.png';
    this.destroyed = true;
  }

  fire() {
    //they shoot at us and we take damage
  }
}

export default TieFighter