/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\n\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.loadHTML)();\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nconst nav = document.querySelectorAll('nav a');\n\nnav.forEach((link) => {\n    link.addEventListener('click', () => {\n        let loc = link.innerHTML;\n        switch (loc) {\n            case 'Home':\n                (0,_init__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n                break;\n            case 'Menu':\n                (0,_init__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();\n                break;\n            case 'Contact':\n                loadCont();\n                break;\n        }\n    });\n});\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHTML\": () => (/* binding */ loadHTML),\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome),\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadHTML = () => {\n    const root = document.querySelector('#page');\n\n    const nav = document.createElement('div');\n    nav.setAttribute('id', 'nav-container');\n\n    const logo = document.createElement('a');\n    logo.setAttribute('href', 'index.html');\n\n    const logoImg = document.createElement('div');\n    logoImg.setAttribute('id', 'logo');\n\n    logo.appendChild(logoImg);\n    nav.appendChild(logo);\n\n    const navLinks = document.createElement('nav');\n    const homeLink = document.createElement('a');\n    const menuLink = document.createElement('a');\n    const contLink = document.createElement('a');\n\n    //homeLink.setAttribute('href', 'index.html');\n    homeLink.innerText = \"Home\";\n    homeLink.setAttribute('class', 'accent');\n    //menuLink.setAttribute('href', 'menu.html');\n    menuLink.innerText = \"Menu\";\n    //contLink.setAttribute('href', 'contact.html');\n    contLink.innerText = \"Contact\";\n\n    navLinks.appendChild(homeLink);\n    navLinks.appendChild(menuLink);\n    navLinks.appendChild(contLink);\n\n    nav.appendChild(navLinks);\n\n    const content = document.createElement('div');\n    content.setAttribute('id', 'content');\n\n    root.appendChild(nav);\n    root.appendChild(content);\n};\n\nconst loadHome =  () => {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const title = document.createElement('h1');\n    title.innerHTML = \"welcome, sushi lovers\";\n\n    const subtitle = document.createElement('h2');\n    subtitle.innerHTML = \"to the only destination for sushi in northern england &mdash; <em>literally.</em>\"\n\n    const para1 = document.createElement('p');\n    para1.innerHTML = 'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is \"sushi rice\", also referred to as shari, or sumeshi.'\n\n    const para2 = document.createElement('p');\n    para2.innerHTML = 'Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish.'\n\n    content.appendChild(title);\n    content.appendChild(subtitle);\n    content.appendChild(para1);\n    content.appendChild(para2);\n};\n\nconst loadMenu = () => {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const container = document.createElement('div');\n    container.setAttribute('id', 'menu-container');\n\n    // Rolls\n    const rolls = document.createElement('ul');\n    rolls.classList.add('menu');\n\n    const rollsTitle = document.createElement('h2');\n    rollsTitle.innerHTML = 'shandy rolls';\n    rollsTitle.classList.add('menu-section');\n\n    rolls.appendChild(rollsTitle);\n\n    class Roll {\n        constructor(rollName, price, ...ingredients) {\n            this.name = rollName;\n            this.price = price;\n            this.ingredients = ingredients;\n        }\n        display() {\n            const seaweed = document.createElement('li');\n\n            const rice = document.createElement('div');\n            rice.classList.add('menu-desc');\n\n            const rollTitle = document.createElement('h3');\n            rollTitle.innerHTML = this.name;\n\n            const rollDesc = document.createElement('h4');\n            rollDesc.innerText = this.ingredients;\n\n            const wasabi = document.createElement('div');\n            wasabi.classList.add('menu-price');\n            wasabi.innerText = this.price;\n\n            rice.appendChild(rollTitle);\n            rice.appendChild(rollDesc);\n\n            seaweed.appendChild(rice);\n            seaweed.appendChild(wasabi);\n\n            rolls.appendChild(seaweed);\n        }\n    }\n\n    new Roll('double roll', 9, ['tuna', ' yellowtail', ' scallions' , ' roe', ' ponzu sauce']).display();\n    new Roll('midori roll', 7, ['tuna', ' salmon', ' avocado', ' sesame seeds']).display();\n    new Roll('caterpillar roll', 8, ['eel', ' cucumber', ' avocado', ' ponzu sauce']).display();\n    new Roll('triple x', 9, ['salmon', ' tuna', ' whitefish', ' white sauce']).display();\n    new Roll('phoenix roll', 9, ['spicy tuna', ' roe', ' tempura']).display();\n    new Roll('beauty alaska roll', 10, ['spicy salmon', ' cucumber', ' avocado', ' scallions']).display();\n\n    container.appendChild(rolls);\n\n    // Nigiri\n    const nigiri = document.createElement('ul');\n    nigiri.classList.add('menu');\n\n    const nigiriTitle = document.createElement('h2');\n    nigiriTitle.innerHTML = 'nigiri selection';\n    nigiriTitle.classList.add('menu-section');\n\n    nigiri.appendChild(nigiriTitle);\n\n    class Side {\n        constructor(name, price) {\n            this.name = name;\n            this.price = price;\n        }\n        display(section) {\n            const seaweed = document.createElement('li');\n\n            const rice = document.createElement('div');\n            rice.classList.add('menu-desc');\n            const sideTitle = document.createElement('h3');\n            sideTitle.innerHTML = this.name;\n            rice.appendChild(sideTitle);\n    \n            const wasabi = document.createElement('div');\n            wasabi.classList.add('menu-price');\n            wasabi.innerHTML = this.price;\n    \n            rice.appendChild(wasabi);\n    \n            seaweed.appendChild(rice);\n            section.appendChild(seaweed);\n        }\n    }\n    new Side('tuna', '2').display(nigiri);\n    new Side('shrimp', '1').display(nigiri);\n    new Side('salmon', '2').display(nigiri);\n    new Side('smoked salmon', '2').display(nigiri);\n    new Side('octopus', '1').display(nigiri);\n    new Side('yellowtail', '2').display(nigiri);\n    new Side('scallop', '3').display(nigiri);\n    new Side('eel', '2').display(nigiri);\n    \n    container.appendChild(nigiri);\n    content.appendChild(container);\n\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/init.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_8865__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_8865__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_8865__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_8865__.o(definition, key) && !__nested_webpack_require_8865__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_8865__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_8865__.r = (exports) => {
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
/******/ 	var __webpack_exports__ = __nested_webpack_require_8865__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ })()
;
//# sourceMappingURL=main.js.map