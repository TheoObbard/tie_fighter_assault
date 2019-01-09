let img = new Image();

// User letiables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = '../assets/stars.png';
let CanvasXSize = window.innerWidth;
let CanvasYSize = window.innerHeight;
let speed = 40; // lower is faster
let scale = 1.05;
let y = -4.5; // vertical offset

// Main program

let dx = 0.75;
let imgW = window.innerWidth;
let imgH = window.innerHeight;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = function () {
  

  if (imgW > CanvasXSize) {
    // image larger than canvas
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    // image width larger than canvas
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    // image height larger than canvas
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }

  // get canvas context
  ctx = document.getElementById('game').getContext('2d');

  // set refresh rate
  return setInterval(draw, speed);
}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // if image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    // reset, start from beginning
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    // draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    // draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  }

  // image is > Canvas Size
  else {
    // reset, start from beginning
    if (x > (CanvasXSize)) {
      x = CanvasXSize - imgW;
    }
    // draw aditional image
    if (x > (CanvasXSize - imgW)) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  // draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  // amount to move
  x += dx;
}