module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/utils.js":
/*!**************************!*\
  !*** ./helpers/utils.js ***!
  \**************************/
/*! exports provided: categorySelector, convertFrontToBackDate, convertBackToFrontDate, formCheckValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categorySelector", function() { return categorySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFrontToBackDate", function() { return convertFrontToBackDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBackToFrontDate", function() { return convertBackToFrontDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formCheckValidity", function() { return formCheckValidity; });
const categorySelector = (id, categories, _selectedId) => {
  if (id === _selectedId) return null;

  if (_selectedId != -1) {
    categories.forEach(el => {
      if (_selectedId === el.id) {
        el.isActive = false;
      }
    });
  }

  categories.forEach(el => {
    if (el.id === id) {
      el.isActive = true;
    }
  });
  _selectedId = id;
  return {
    _selectedId,
    categories
  };
};
const convertFrontToBackDate = date => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  return `${day}-${month}-${year}`;
};
const convertBackToFrontDate = date => {
  const year = date.substring(6, 10);
  const month = date.substring(3, 5);
  const day = date.substring(0, 2);
  return `${year}-${month}-${day}`;
};
const formCheckValidity = (formControls = []) => {
  let isFormValid = true;
  formControls.forEach(c => {
    isFormValid = isFormValid && c.isValid;
  });
  return isFormValid;
};

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_CategoryContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/CategoryContext */ "./store/CategoryContext.js");
/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/CartContext */ "./store/CartContext.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








let _selectedId = 0;
function MyApp({
  Component,
  pageProps
}) {
  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 0,
    title: "Все",
    imgs: ["/static/images/icons/all.png", "/static/images/icons/all-active.png"],
    isActive: true
  }, {
    id: 1,
    title: "Сборники",
    imgs: ["/static/images/icons/compilations.png", "/static/images/icons/compilations-active.png"],
    isActive: false
  }, {
    id: 2,
    title: "Аудиокниги",
    imgs: ["/static/images/icons/audio.png", "/static/images/icons/audio-active.png"],
    isActive: false
  }, {
    id: 3,
    title: "Печатные книги",
    imgs: ["/static/images/icons/book.png", "/static/images/icons/book-active.png"],
    isActive: false
  }, {
    id: 4,
    title: "Электронные книги",
    imgs: ["/static/images/icons/pdf.png", "/static/images/icons/pdf-active.png"],
    isActive: false
  }]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const categoryHandler = id => {
    const cats = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["categorySelector"])(id, [...categories], _selectedId);

    if (cats) {
      _selectedId = cats._selectedId;
      setCategories(cats.categories);
    }
  };

  const addRemoveItemFromCart = id => {
    let cartCopy = [...cart];
    const item = cartCopy.find(item => {
      return item === id;
    });

    if (item === undefined) {
      cartCopy.push(id);
    } else {
      cartCopy = cartCopy.filter(item => {
        return item !== id;
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartCopy));
    setCart(cartCopy);
  };

  const findItemInCart = id => {
    let cartCopy = [...cart];
    const item = cartCopy.find(item => {
      return item === id;
    });
    if (item !== undefined) return true;
    return false;
  };

  const clearCartHandler = () => {
    console.log("Cleared");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return __jsx(_store_CartContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      cart,
      onAddRemoveItem: addRemoveItemFromCart,
      onFindInCart: findItemInCart,
      onClearCart: clearCartHandler
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }, __jsx(_store_CategoryContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      categories,
      categoryHandler
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }))));
}

/***/ }),

/***/ "./store/CartContext.js":
/*!******************************!*\
  !*** ./store/CartContext.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (cartContext);

/***/ }),

/***/ "./store/CategoryContext.js":
/*!**********************************!*\
  !*** ./store/CategoryContext.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CategoryContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (CategoryContext);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map