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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import Background from './background';

class Game {
  constructor(canvas) {
    // const background = new Background()
    // let canvas = canvas
    // canvas.innerHTML = background.draw()
    // let killedTieFighters = 0
  }

  play() {

  }

  background() {
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

      const canvas = document.getElementById('canvas');
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


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas)
  game.background()

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map