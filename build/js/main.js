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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ios-vh-fix */ \"./js/utils/ios-vh-fix.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliders */ \"./js/modules/sliders.js\");\n\n\n // ---------------------------------\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  // Utils\n  // ---------------------------------\n  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__[\"iosVhFix\"])(); // Modules\n  // ---------------------------------\n  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'\n  // в load следует добавить скрипты, не участвующие в работе первого экрана\n\n  window.addEventListener('load', function () {\n    var footer = document.querySelector('.page-footer');\n\n    if (footer) {\n      document.body.style.paddingBottom = \"\".concat(footer.scrollHeight, \"px\");\n    }\n\n    Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"initScroll\"])();\n    Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_2__[\"initSliders\"])();\n  });\n}); // ---------------------------------\n// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.\n// привязывайте js не на классы, а на дата атрибуты (data-validate)\n// вместо модификаторов .block--active используем утилитарные классы\n// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)\n// .select.select--opened ❌ ---> [data-select].is-open ✅\n// выносим все в дата атрибуты\n// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.\n// для адаптивного JS используейтся matchMedia и addListener\n// const breakpoint = window.matchMedia(`(min-width:1024px)`);\n// const breakpointChecker = () => {\n//   if (breakpoint.matches) {\n//   } else {\n//   }\n// };\n// breakpoint.addListener(breakpointChecker);\n// breakpointChecker();\n// используйте .closest(el)\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/*! exports provided: initScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initScroll\", function() { return initScroll; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar links = document.querySelectorAll('a[href^=\"#\"]');\n\nvar initScroll = function initScroll() {\n  if (links) {\n    var _iterator = _createForOfIteratorHelper(links),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var link = _step.value;\n        var id = link.getAttribute('href');\n\n        if (id.length > 1) {\n          (function () {\n            var target = document.querySelector(id);\n\n            if (target) {\n              link.addEventListener('click', function (evt) {\n                evt.preventDefault();\n                target.scrollIntoView({\n                  behavior: 'smooth',\n                  block: 'start'\n                });\n              });\n            }\n          })();\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/sliders.js":
/*!*******************************!*\
  !*** ./js/modules/sliders.js ***!
  \*******************************/
/*! exports provided: coachesSlider, reviewsSlider, abonementsSlider, abonementsThumbs, initSliders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coachesSlider\", function() { return coachesSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reviewsSlider\", function() { return reviewsSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abonementsSlider\", function() { return abonementsSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abonementsThumbs\", function() { return abonementsThumbs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSliders\", function() { return initSliders; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar coachesSlider = document.querySelector('[data-slider=coaches]');\nvar reviewsSlider = document.querySelector('[data-slider=reviews]');\nvar abonementsSlider = document.querySelector('[data-slider=abonements]');\nvar abonementsThumbs = document.querySelector('[data-slider=abonements-thumbs]');\n\nfunction initSliders() {\n  if (abonementsSlider && abonementsThumbs) {\n    var thumbs = abonementsThumbs.querySelectorAll('[data-slide]');\n    abonementsThumbs = new window.Swiper(abonementsThumbs, {\n      spaceBetween: 31,\n      slidesPerView: 'auto',\n      freeMode: true,\n      watchSlidesProgress: true,\n      breakpoints: {\n        768: {\n          spaceBetween: 55\n        },\n        1200: {\n          spaceBetween: 45\n        }\n      }\n    });\n    abonementsSlider = new window.Swiper(abonementsSlider, {\n      spaceBetween: 10,\n      allowTouchMove: false,\n      thumbs: {\n        swiper: abonementsThumbs,\n        slideThumbActiveClass: 'is-active'\n      }\n    });\n\n    var _iterator = _createForOfIteratorHelper(thumbs),\n        _step;\n\n    try {\n      var _loop = function _loop() {\n        var thumb = _step.value;\n        thumb.addEventListener('keydown', function (evt) {\n          if (evt.key !== 'Tab') {\n            evt.preventDefault();\n          }\n\n          if (evt.key === ' ' || evt.key === 'Enter') {\n            abonementsSlider.slideTo(thumb.dataset.slide);\n          }\n        });\n      };\n\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        _loop();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  if (coachesSlider) {\n    var coachesItems = coachesSlider.querySelectorAll('.coaches__item');\n    coachesSlider = new window.Swiper(coachesSlider, {\n      loop: true,\n      navigation: {\n        nextEl: '.coaches__navigation--next',\n        prevEl: '.coaches__navigation--prev'\n      },\n      breakpoints: {\n        768: {\n          slidesPerView: 2,\n          spaceBetween: 30\n        },\n        1200: {\n          slidesPerView: 4,\n          spaceBetween: 40\n        }\n      },\n      on: {\n        init: function init() {\n          var dublicates = coachesSlider.querySelectorAll('.swiper-slide-duplicate');\n\n          var _iterator2 = _createForOfIteratorHelper(dublicates),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var item = _step2.value;\n              item.removeAttribute('tabindex');\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }\n      }\n    });\n\n    var _iterator3 = _createForOfIteratorHelper(coachesItems),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var item = _step3.value;\n        item.addEventListener('focus', function (evt) {\n          evt.stopPropagation();\n          coachesSlider.slideTo(evt.target.dataset.slide);\n        });\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n  }\n\n  if (reviewsSlider) {\n    reviewsSlider = new window.Swiper(reviewsSlider, {\n      slidesPerView: 1,\n      spaceBetween: 60,\n      navigation: {\n        nextEl: '.reviews__navigation--next',\n        prevEl: '.reviews__navigation--prev'\n      }\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/modules/sliders.js?");

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosChecker\", function() { return iosChecker; });\nvar iosChecker = function iosChecker() {\n  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection\n  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;\n};\n\n//# sourceURL=webpack:///./js/utils/ios-checker.js?");

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosVhFix\", function() { return iosVhFix; });\n/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ \"./js/utils/ios-checker.js\");\n\n\nvar iosVhFix = function iosVhFix() {\n  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__[\"iosChecker\"])()) {\n      var vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n      window.addEventListener('resize', function () {\n        vh = window.innerHeight * 0.01;\n        document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n      });\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/ios-vh-fix.js?");

/***/ })

/******/ });