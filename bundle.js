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
    // let ctx;

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

      // const canvas = document.getElementById('canvas');
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;

      // ctx = canvas.getContext('2d');


    }
    // setInterval(this.draw, 40);
    this.draw = this.draw.bind(this)

  }

  draw() {   
    
    // console.log('getting called');
    
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

    // console.log(this.x);

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



class Game {
  constructor(canvas) {
    let difficulty = 1
    let killedTieFighters = 0
    this.draw = this.draw.bind(this)
    this.bg = new _background__WEBPACK_IMPORTED_MODULE_1__["default"]()
    this.enemy = new _tie_fighters__WEBPACK_IMPORTED_MODULE_0__["default"]()
    setInterval(this.draw, 40);
  }

  draw() { 
    this.bg.draw()
    // for testing purposes
    // +++++++++++++

    this.enemy.draw()


    // +++++++++++++
  }

  play() {
    
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
  // game.play()

});

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
    this.vel = [3, 3]
    this.size = [100, 100]
    this.destroyed = false
    this.rotate = ((this.getRandomRange(-50, 50)) * Math.PI / 180)
  }

  getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomPos() {
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;

    let x = Math.floor(Math.random() * maxWidth); 
    let y = Math.floor(Math.random() * maxHeight); 

    // let x = this.getRandomRange(-maxWidth, maxWidth)
    // let y = this.getRandomRange(-maxHeight, maxHeight)

    let chooser = Math.floor(Math.random() * 2);
    if (chooser % 2 === 0) {
      x = 0
    } else {
      y = 0
    }
    return [x, y]
  }

  draw() {

    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    ctx.rotate(this.rotate);

    
    img.src = '../assets/tie_fighter.png';

    this.vel[0] += .5
    this.vel[1] += .5
    this.size[0] += this.vel[0]
    this.size[1] += this.vel[0]
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]

    ctx.drawImage(img, this.pos[0], this.pos[1], this.size[0], this.size[1])

  }

  destroy() {
    //destroys them
  }

  fire() {
    //they shoot at us and we take damage
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TieFighter);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map