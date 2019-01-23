/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
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

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tie_fighters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tie_fighters */ "./src/tie_fighters.js");
/* harmony import */ var _shot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shot */ "./src/shot.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound */ "./src/sound.js");




class Game {
  constructor(background, music) {
    this.difficulty = 1;
    this.music = music;
    this.killedTieFighters = 0;
    this.soundOn = false;
    this.damage = 0;
    this.enemies = [new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"](this), new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"](this), new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"](this)];   
    this.bg = background;
    this.over = false;

    // Starts drawing canvas and ends the game
    this.create = setInterval(() => {
      this.draw()
      if (this.damage >= 100) {
        this.endGame()
      }
    }, 40);
    this.createEnemy = setInterval(() => {
      this.enemies.push(new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"](this))      
    } , this.difficulty * 1000);

    // This clears out enemies after they leave the screen
    setTimeout(() => {

      setInterval(() => {
        if (this.enemies.length > 0) {
          let check = this.enemies.shift()
          // as it removes them it checks for their destroyed status
          if (check.destroyed) {
            // this.killedTieFighters += 1
          }
          check.destroy()
        }
      }, 1000);
      
    }, 2000);
  }

  play() {
    if (!this.over) {
      this.handleMusic();
      let enemies = this.enemies;
      document.getElementById('canvas').addEventListener('click', (evt) => {
        let shot = new _shot__WEBPACK_IMPORTED_MODULE_1__["default"](evt.clientX, evt.clientY);
        this.handleFireSound();
        shot.draw();
        enemies.forEach(enemy => {
          enemy.shotAt(evt.clientX, evt.clientY);
        })
      }, false);
    }
  }

  endGame() {
    clearInterval(this.createEnemy);
    document.getElementById('splash').style.visibility = 'visible';
    document.getElementById('quit_game').style.visibility = 'hidden';
    document.getElementById('play_btn_txt').innerHTML = 'Play Again';
    document.getElementById('instructions').innerHTML = '';
    document.getElementById('title_txt').innerHTML = 'The empire defeated you.';
  }

  clearGame() {
    clearInterval(this.create);
    this.music.stop();
    this.soundOn = false;
  }

  clearSound() {
    this.music.stop();
    this.soundOn = false;
  }
  
  draw() {
    if (!this.over) {
      document.getElementById('damage').innerHTML = `Health: ${100 - Math.floor(this.damage)}%`;
      document.getElementById('score').innerHTML = `Score: ${Math.floor(this.killedTieFighters)}`;
      document.getElementById('music').innerHTML = `Sound: ${this.musicPlaying()}`;
      this.bg.draw();
      this.drawEnemies();
    }
  }
  
  drawEnemies() {
    this.enemies.map(enemy => {
      enemy.draw();
    });
  }

  musicPlaying() {
    if (!this.over) {
      if (this.soundOn) {
        return 'on';
      } else {
        return 'off';
      }
    }
  }

  handleMusic() {
    if (!this.over) {
      document.getElementById('music').addEventListener('click', () => {
        if (this.soundOn) {
          this.soundOn = false;
          this.music.stop();
        } else {
          this.soundOn = true;
          this.music.start(this);
        }
      }, false);
    }
  }

  handleFireSound() {
    if (!this.over) {
      let sound = new _sound__WEBPACK_IMPORTED_MODULE_2__["default"]('./sounds/XWing_fire.mp3');
      sound.start(this, 0.5);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound */ "./src/sound.js");




document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let game;
  const bg = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, ctx)
  const splashBackground = setInterval(bg.draw, 40);
  document.getElementById('quit_game').style.visibility = 'hidden';
  document.getElementById('play_btn_txt').innerHTML = 'Play'
  document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'
  document.getElementById('instructions').innerHTML = 
        `Defend the galaxy from Darth Vader's tie fighters. <br>
         Move your mouse to aim and click to shoot. <br> 
         May the force be with you.`
  let music = new _sound__WEBPACK_IMPORTED_MODULE_2__["default"]('./sounds/The_Asteroid_Field.mp3');

  document.getElementById('play_btn').addEventListener('click', () => {   
    if (game) {
      game.clearGame() 
      game.over = true;  
      music.stop()
    }    
    document.getElementById('splash').style.visibility = 'hidden';
    document.getElementById('quit_game').style.visibility = 'visible';
    clearInterval(splashBackground)
    game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](bg, music)
    game.play()
    document.getElementById('quit_game').addEventListener('click', () => {
      game.endGame()
      document.getElementById('play_btn_txt').innerHTML = 'Play Again'
      document.getElementById('title_txt').innerHTML = 'Tie Fighter Assault'
      document.getElementById('instructions').innerHTML =
        `It's okay, galactic battle isn't for everyone.`
    })
  })
});

/***/ }),

/***/ "./src/shot.js":
/*!*********************!*\
  !*** ./src/shot.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Shot {
  constructor(x, y) {
    this.mouse = [x, y];
    this.content = document.getElementById('canvas');
    this.ctx = this.content.getContext('2d');
    this.start = window.innerWidth;
  }

  draw() {
    this.left();
    setTimeout(() => {
      this.right();
    }, 15);
  }

  left() {
    this.ctx.beginPath();
    let start = (this.start / 2) - 200;
    let endx = this.mouse[0] + 46;
    let endy = this.mouse[1] + 48;
    this.laserEffect(start, [endx, endy]);
    this.ctx.moveTo(start, window.innerHeight);
    this.ctx.lineTo(endx, endy);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#fd946e';
    this.ctx.stroke();
  }

  right() {
    this.ctx.beginPath();
    let start = (this.start / 2) + 200;
    let endx = this.mouse[0] + 46;
    let endy = this.mouse[1] + 48;
    this.laserEffect(start, [endx, endy]);
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

/* harmony default export */ __webpack_exports__["default"] = (Shot);

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sound {
  constructor(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
  };

  start(game, vol = 1) {    
    if (game.soundOn) {
      this.sound.volume = vol;
      this.sound.play();
    }
  }

  stop() {
    this.sound.pause();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sound);

/***/ }),

/***/ "./src/tie_fighters.js":
/*!*****************************!*\
  !*** ./src/tie_fighters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "./src/sound.js");


class TieFighter{
  constructor(game) {
    this.game = game;
    this.pos = this.randomPos();
    this.img = new Image();
    this.img.src = './assets/tie_fighter.png';
    this.accel = this.getAccel();
    if (this.accel[0] < 0) {
      this.vel = [-3, -3];
    } else {
      this.vel = [3, 3];
    }
    this.size = [50, 50];
    this.destroyed = false;
    this.rotate = ((this.getRandomRange(-24, 24)) * Math.PI / 180);
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.starting = true;
    this.sound;
    this.shotSound;

    // gets a random number of shots to fire and fires them
    this.shooting = Math.floor(this.getRandomRange(1, 4))
    setInterval(() => {
      if (this.destroyed === false) {
        this.fire();
        this.handleFireSound();
        this.game.damage += .1;
      }
    }, this.shooting * 1000);
  }

  draw() {
    if (this.starting) {
      this.handleFlySound();
    }
    this.starting = false;
    this.ctx.save();
    this.vel[0] += this.accel[0];
    this.vel[1] += this.accel[1];
    this.size[0] += Math.abs(this.vel[0] * 0.7);
    this.size[1] += Math.abs(this.vel[0] * 0.7);
    if (this.destroyed) {
      this.size[0] += Math.abs(this.vel[0] * 0.7) * 2;
      this.size[1] += Math.abs(this.vel[0] * 0.7) * 2;
      this.vel[0] += (this.accel[0] * 3);
      this.vel[1] += (this.accel[1] * 3);
    }
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.rotate > 0) {
      this.rotate -= .005;
    } else {
      this.rotate += .005;
    }
    this.ctx.translate(this.pos[0], this.pos[1]);
    this.ctx.rotate(this.rotate);
    this.ctx.drawImage(this.img, -(this.size[0] / 2), - (this.size[1] / 2), this.size[0], this.size[1]);
    this.ctx.restore();
  }

  shotAt(x, y) {
    if (x > this.pos[0] - (this.size[0] / 2) && x <= this.pos[0] + (this.size[0] / 2)) {
      if (y >= this.pos[1] - (this.size[1] / 2) && y <= this.pos[1] + (this.size[0] / 2)) {
        if (this.destroyed === false) {
          this.game.killedTieFighters += 1;
        }
        this.destroy();
      }
    }
  }

  fire() {
    //they shoot at us and we take damage
    this.img.src = './assets/tie_fighter_shoot.png';
    setTimeout(() => {
      if (this.destroyed) {
        this.img.src = './assets/explosion.png';
      } else {
        this.img.src = './assets/tie_fighter.png';
      }
    }, 40);
  }

  destroy() {
    this.img.src = './assets/explosion.png';
    this.handleExplodeSound();
    this.sound.stop();
    if (this.shotSound) {
      this.shotSound.stop();
    }
    this.destroyed = true;
  }

  getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  getAccel() {
    if (this.pos[0] === -50 || this.pos[1] === -50) {
      return [.5, .5];
    } else {
      return [-.5, -.5];
    }
  }

  randomPos() {
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;    
    let x = Math.floor(Math.random() * maxWidth); 
    let y = Math.floor(Math.random() * maxHeight); 
    let chooser = Math.floor(Math.random() * 4);
    switch (chooser) {
      case 0:
        x = -50;
        break;
      case 1:
        x = maxWidth;
        break;
      case 2:
        y = -50;
        break;
      case 3:
        y = maxHeight;
        break;
      default:
        throw 'HOW...';
    }
    return [x, y];
  }

  handleFlySound() {
    // reusing shooting as it's a random num from 1-4    
    switch (this.shooting) {
      case 1:
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_0__["default"]('./sounds/TIE_fighter_flyby_1.mp3');
        break;
      case 2:
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_0__["default"]('./sounds/TIE_fighter_flyby_2.mp3');
        break;
      case 3:
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_0__["default"]('./sounds/TIE_fighter_flyby_4.mp3');
        break;
      default:
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_0__["default"]('./sounds/TIE_fighter_flyby_1.mp3');
        break;
    }
    if (this.game.soundOn) {
      this.sound.start(this.game, .2);
    }
  }

  handleExplodeSound() {
    let sound = new _sound__WEBPACK_IMPORTED_MODULE_0__["default"]('./sounds/TIE_fighter_explode.mp3');
    if (this.game.soundOn) {
      sound.start(this.game, .06);
    }
  }

  handleFireSound() {
    let sound = new _sound__WEBPACK_IMPORTED_MODULE_0__["default"]('./sounds/TIE_fighter_fire.mp3');
    if (this.game.soundOn) {
      sound.start(this.game, .06);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TieFighter);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map