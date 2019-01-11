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
    this.ctx.moveTo(this.start / 2 - 200, window.innerHeight);
    this.ctx.lineTo(this.mouse[0] + 46, this.mouse[1] + 48);
    this.ctx.lineWidth = 5;

    this.ctx.strokeStyle = '#fd946e';
    this.ctx.stroke();
  }

  shot2() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.start / 2 + 200, window.innerHeight);
    this.ctx.lineTo(this.mouse[0] + 46, this.mouse[1] + 48);
    this.ctx.lineWidth = 5;

    this.ctx.strokeStyle = '#fd946e';
    this.ctx.stroke();
  }

}


export default Shot