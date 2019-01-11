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
  constructor() {
    this.img = new Image();

    this.img.src = '../assets/stars.png';
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
    this.draw = this.draw.bind(this)
  }

  draw() {       
    let ctx;
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, this.clearX, this.clearY);

    if (this.imgW <= this.CanvasXSize) {      
      if (this.x > this.CanvasXSize) {        
        this.x = -this.imgW + this.x;
      }
      if (this.x > 0) {
        ctx.drawImage(this.img, -this.imgW + this.x, this.y, this.imgW, this.imgH);
      }
      if (this.x - this.imgW > 0) {
        ctx.drawImage(this.img, -this.imgW * 2 + this.x, this.y, this.imgW, this.imgH);
      }
    } else {
      if (this.x > (this.CanvasXSize)) {        
        this.x = this.CanvasXSize - this.imgW;
      }
      if (this.x > (this.CanvasXSize - this.imgW)) {
        ctx.drawImage(this.img, this.x - this.imgW + 1, this.y, this.imgW, this.imgH);
      }
    }    
    ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
    this.x += this.dx;
  }
};

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
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _shot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shot */ "./src/shot.js");




class Game {
  constructor(canvas) {
    this.difficulty = 1
    this.killedTieFighters = 0
    this.drawBG = this.drawBG.bind(this)
    this.drawEnemy = this.drawEnemy.bind(this)
    this.draw = this.draw.bind(this)
    this.enemies = [new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"](), new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"](), new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"]()]   
    this.bg = new _background__WEBPACK_IMPORTED_MODULE_1__["default"]()
    setInterval(this.draw, 40);
    setInterval(() => {
      this.enemies.push(new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"]())
      console.log(this.enemies.length);
      
    } , 1000)

    // This clears out enemies after they leave the screen
    setTimeout(() => {
      setInterval(() => {
        this.enemies.shift()
      }, 1000)
    }, 2000)
  };

  draw() {
    this.drawBG()
    this.drawEnemies()
  }

  drawEnemies() {
    this.enemies.map(enemy => {
      enemy.draw()
    })
  }

  drawEnemy() {
    let enemies = this.enemy
    enemies.forEach(enemy => {
      setTimeout(function () { }, 1000)

      setInterval(function () {
        enemy.draw()
      }, 40)
    });
  }

  drawBG() { 
    this.bg.draw()
  }

  play() {
    let enemies = this.enemies

    document.getElementById('canvas').addEventListener('click', function (evt) {
      let shot = new _shot__WEBPACK_IMPORTED_MODULE_2__["default"](evt.clientX, evt.clientY)

      enemies.forEach(enemy => {
        enemy.shootAt(evt.clientX, evt.clientY)
      })
    }, false);

  }
};

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


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas)
  game.play()

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

/* harmony default export */ __webpack_exports__["default"] = (Shot);

/***/ }),

/***/ "./src/tie_fighters.js":
/*!*****************************!*\
  !*** ./src/tie_fighters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class TieFighter{
  constructor() {
    this.pos = this.randomPos()
    this.img = new Image();
    this.img.src = '../assets/tie_fighter.png';
    this.accel = this.getAccel()
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

    // gets a random number of shots to fire and fires them
    this.shooting = this.getRandomRange(1, 4)


    setInterval(() => {
      if (this.destroyed === false) {
        this.fire()
      }
    }, this.shooting * 100)
  };

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

    this.ctx.translate(this.pos[0], this.pos[1])
    this.ctx.rotate(this.rotate)
    this.ctx.drawImage(this.img, -(this.size[0] / 2), - (this.size[1] / 2), this.size[0], this.size[1])
    this.ctx.restore()
  }

  shootAt(x, y) {
    if (x > this.pos[0] - (this.size[0] / 2) && x <= this.pos[0] + (this.size[0] / 2)) {
      if (y >= this.pos[1] - (this.size[1] / 2) && y <= this.pos[1] + (this.size[0] / 2)) {
        this.destroy()
      }
    }
  };

  destroy() {
    this.img.src = '../assets/explosion.png';
    this.destroyed = true;
  }

  fire() {
    //they shoot at us and we take damage
    this.img.src = '../assets/tie_fighter_shoot.png';

    setTimeout(() => {
      if (this.destroyed) {
        this.img.src = '../assets/explosion.png';
      } else {
        this.img.src = '../assets/tie_fighter.png';
      }
    }, 5)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TieFighter);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map