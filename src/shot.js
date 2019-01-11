class Shot {
  constructor(x, y) {
    this.mouse = [x, y]
    this.content = document.getElementById('canvas')
    this.ctx = this.content.getContext("2d");
    this.start = window.innerWidth
  }

  draw() {
    this.shot1()
    setTimeout(() => {
      this.shot2()
    }, 15)
  }

  shot1() {
    this.ctx.beginPath();
    let start = (this.start / 2) - 200
    let endx = this.mouse[0] + 46
    let endy = this.mouse[1] + 48
    this.laserEffect(start, [endx, endy])
    this.ctx.moveTo(start, window.innerHeight);
    this.ctx.lineTo(endx, endy);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#fd946e';
    this.ctx.stroke();
  }

  shot2() {
    this.ctx.beginPath();
    let start = (this.start / 2) + 200
    let endx = this.mouse[0] + 46
    let endy = this.mouse[1] + 48
    this.laserEffect(start, [endx, endy])
    this.ctx.moveTo(start, window.innerHeight);
    this.ctx.lineTo(endx, endy);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#fd946e';
    this.ctx.stroke();
  }

  laserEffect(start, end) {
    this.ctx.filter = 'blur(5px)';
    this.ctx.beginPath();
    this.ctx.moveTo(start, window.innerHeight);
    this.ctx.lineTo(end[0], end[1]);
    this.ctx.lineWidth = 30;
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

}


export default Shot