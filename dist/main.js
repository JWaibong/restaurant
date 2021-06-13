/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.js */ \"./src/tab1.js\");\n\n\n(0,_tab1_js__WEBPACK_IMPORTED_MODULE_0__.initializePage)();\n(0,_tab1_js__WEBPACK_IMPORTED_MODULE_0__.createTab1)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/tab1.js":
/*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializePage\": () => (/* binding */ initializePage),\n/* harmony export */   \"createTab1\": () => (/* binding */ createTab1)\n/* harmony export */ });\n/* harmony import */ var _tab2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.js */ \"./src/tab2.js\");\n/* harmony import */ var _tab3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.js */ \"./src/tab3.js\");\n\n\nfunction initializePage(){\n    const body = document.querySelector(\"body\");\n\n    const header = document.createElement(\"h1\");\n    header.classList.add(\"header\");\n\n    const home = document.createElement(\"div\");\n    home.textContent = \"Home\";\n    home.classList.add(\"tab\");\n    home.addEventListener(\"click\", e =>{\n        reset();\n        createTab1();\n    });\n\n    const menu = document.createElement(\"div\");\n    menu.textContent = \"Menu\";\n    menu.classList.add(\"tab\");\n    menu.addEventListener(\"click\", e => {\n        reset();\n        (0,_tab2_js__WEBPACK_IMPORTED_MODULE_0__.createTab2)();\n    });\n    \n    const contact = document.createElement(\"div\");\n    contact.textContent = \"Contact Us\";\n    contact.classList.add(\"tab\");\n    contact.addEventListener(\"click\", e => {\n        reset();\n        (0,_tab3_js__WEBPACK_IMPORTED_MODULE_1__.createTab3)();\n    });\n\n\n    header.appendChild(home);\n    header.appendChild(menu);\n    header.appendChild(contact);\n    body.appendChild(header);\n\n\n    const container = document.createElement(\"div\");\n    const content = document.createElement(\"div\");\n    container.classList.add(\"container\");\n    content.setAttribute(\"id\", \"content\");\n\n    container.appendChild(content);\n    body.appendChild(container);\n\n\n\n\n\n}\n\nfunction reset(){\n    const content = document.querySelector(\"#content\");\n    content.textContent = \" \";\n}\n\nfunction createTab1(){\n    const content = document.querySelector(\"#content\");\n    content.textContent = \"hello jdasldjlkajrlasjasldjalsdjlaksdjlaskdjaslkdklajsd\";\n\n\n\n}\n\n\n//# sourceURL=webpack://restaurant/./src/tab1.js?");

/***/ }),

/***/ "./src/tab2.js":
/*!*********************!*\
  !*** ./src/tab2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTab2\": () => (/* binding */ createTab2)\n/* harmony export */ });\nfunction createTab2(){\n\n    const content = document.querySelector(\"#content\");\n    content.textContent = \" tab2\";\n}\n\n\n//# sourceURL=webpack://restaurant/./src/tab2.js?");

/***/ }),

/***/ "./src/tab3.js":
/*!*********************!*\
  !*** ./src/tab3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTab3\": () => (/* binding */ createTab3)\n/* harmony export */ });\nfunction createTab3(){\n    const content = document.querySelector(\"#content\");\n    content.textContent = \" contact\";\n\n}\n\n\n//# sourceURL=webpack://restaurant/./src/tab3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;