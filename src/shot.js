class Shot {
  constructor(x, y) {
    console.log('shot fired!');
    console.log(x, y);
    this.mouse = [x, y]
    this.content = document.getElementById('canvas')
    this.ctx = this.content.getContext("2d");

  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(300, 150);
    this.context.lineWidth = 10;

    this.context.strokeStyle = '#ff0000';
    this.ctx.stroke();
  }

}

export default Shot