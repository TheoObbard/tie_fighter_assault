let img = new Image();

img.src = '../assets/stars.png';
let CanvasXSize = window.innerWidth;
let CanvasYSize = window.innerHeight;
let speed = 40;
let scale = 1.05;
let y = -4.5;

let dx = 0.75;
let imgW = window.innerWidth;
let imgH = window.innerHeight;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = function () {

  if (imgW > CanvasXSize) {
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }

  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');

  return setInterval(draw, speed);
}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY);

  if (imgW <= CanvasXSize) {
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    if (x > (CanvasXSize)) {
      x = CanvasXSize - imgW;
    }
    if (x > (CanvasXSize - imgW)) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  ctx.drawImage(img, x, y, imgW, imgH);
  x += dx;
}