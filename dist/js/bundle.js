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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass TypeWriter {\r\n  constructor(txtElement, words, wait = 3000) {\r\n    this.txtElement = txtElement;\r\n    this.words = words;\r\n    this.txt = '';\r\n    this.wordIndex = 0;\r\n    this.wait = parseInt(wait, 10);\r\n    this.type();\r\n    this.isDeleting = false;\r\n  }\r\n\r\n  type() {\r\n    // Current index of word\r\n    const current = this.wordIndex % this.words.length;\r\n    // Get full text of current word\r\n    const fullTxt = this.words[current];\r\n\r\n    // Check if deleting\r\n    if (this.isDeleting) {\r\n      // Remove char\r\n      this.txt = fullTxt.substring(0, this.txt.length - 1);\r\n    } else {\r\n      // Add char\r\n      this.txt = fullTxt.substring(0, this.txt.length + 1);\r\n    }\r\n\r\n    // Insert txt into element\r\n    this.txtElement.innerHTML = `<span class=\"txt\">${this.txt}</span>`;\r\n\r\n    // Initial Type Speed\r\n    let typeSpeed = 300;\r\n\r\n    if (this.isDeleting) {\r\n      typeSpeed /= 2;\r\n    }\r\n\r\n    // If word is complete\r\n    if (!this.isDeleting && this.txt === fullTxt) {\r\n      // Make pause at end\r\n      typeSpeed = this.wait;\r\n      // Set delete to true\r\n      this.isDeleting = true;\r\n    } else if (this.isDeleting && this.txt === '') {\r\n      this.isDeleting = false;\r\n      // Move to next word\r\n      this.wordIndex++;\r\n      // Pause before start typing\r\n      typeSpeed = 500;\r\n    }\r\n\r\n    setTimeout(() => this.type(), typeSpeed);\r\n  }\r\n}\r\n\r\n// Init On DOM Load\r\ndocument.addEventListener('DOMContentLoaded', init);\r\n\r\n// Init App\r\nfunction init() {\r\n  const txtElement = document.querySelector('.txt-type');\r\n  const words = JSON.parse(txtElement.getAttribute('data-words'));\r\n  const wait = txtElement.getAttribute('data-wait');\r\n  // Init TypeWriter\r\n  new TypeWriter(txtElement, words, wait);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });