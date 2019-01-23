class Background {
  constructor(canvas, ctx) {
    this.img = new Image();
    this.canvas = canvas;
    this.ctx = ctx;
    this.img.src = './assets/stars.png';
    this.CanvasXSize = window.innerWidth;
    this.CanvasYSize = window.innerHeight;
    this.scale = 1.05;
    this.y = -4.5;
    this.dx = 0.75;
    this.imgW = window.innerWidth;
    this.imgH = window.innerHeight;
    this.x = 0;
    this.clearX;
    this.clearY;
    this.img.onload = function () {
      if (this.imgW > this.CanvasXSize) {
        this.x = this.CanvasXSize - this.imgW;
      }
      if (this.imgW > this.CanvasXSize) {
        this.clearX = this.imgW;
      } else {
        this.clearX = this.CanvasXSize;
      }
      if (this.imgH > this.CanvasYSize) {
        this.clearY = this.imgH;
      } else {
        this.clearY = this.CanvasYSize;
      }
    }
    this.draw = this.draw.bind(this);
  }

  draw() {       
    // let ctx;
    // let canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // ctx = canvas.getContext('2d');
    this.ctx.clearRect(0, 0, this.clearX, this.clearY);
    if (this.imgW <= this.CanvasXSize) {      
      if (this.x > this.CanvasXSize) {        
        this.x = -this.imgW + this.x;
      }
      if (this.x > 0) {
        this.ctx.drawImage(this.img, -this.imgW + this.x, this.y, this.imgW, this.imgH);
      }
      if (this.x - this.imgW > 0) {
        this.ctx.drawImage(this.img, -this.imgW * 2 + this.x, this.y, this.imgW, this.imgH);
      }
    } else {
      if (this.x > (this.CanvasXSize)) {        
        this.x = this.CanvasXSize - this.imgW;
      }
      if (this.x > (this.CanvasXSize - this.imgW)) {
        this.ctx.drawImage(this.img, this.x - this.imgW + 1, this.y, this.imgW, this.imgH);
      }
    }    
    this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
    this.x += this.dx;
  }
}

export default Background;