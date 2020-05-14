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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/AuthModal/AuthModal.js":
/*!*******************************************!*\
  !*** ./components/AuthModal/AuthModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthModal.module.scss */ "./components/AuthModal/AuthModal.module.scss");
/* harmony import */ var _AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./components/index.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI */ "./components/UI/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\AuthModal\\AuthModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const authModal = ({
  modal,
  onHide,
  isSignUp,
  modeHandler,
  controls,
  submitted,
  checkboxControl
}) => {
  const title = __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }
  }, isSignUp ? "Регистрация" : "Авторизация");

  const text = isSignUp ? __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, "\u0423 \u0432\u0430\u0441 \u0438\u043C\u0435\u0435\u0442\u0441\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442?", " ", __jsx("span", {
    className: "text-accent",
    onClick: () => modeHandler(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, "\u0412\u043E\u0439\u0434\u0438\u0442\u0435")) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, "\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? \u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435", " ", __jsx("span", {
    className: "text-accent",
    onClick: () => modeHandler(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E"));
  const form = controls[+isSignUp].map((control, index) => {
    return __jsx(_UI__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      key: index,
      control: control,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 4
      }
    }, control.options.label);
  });
  return __jsx(___WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    modal: modal,
    size: "lg",
    onHide: onHide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, title, text, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: submitted,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, form, !isSignUp && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    controlId: "formBasicCheckbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Check, {
    type: "checkbox",
    on: true,
    label: "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    value: checkboxControl.value,
    onChange: checkboxControl.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 12
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    className: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 10
    }
  }, isSignUp ? "Зарегистрироваться" : "Войти"), !isSignUp && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }
  }, "\u041D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F?"))))), __jsx("div", {
    className: `${_AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Social} w-100`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "text-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
    }
  }, isSignUp ? "Регистрация" : "Авторизация", " \u0447\u0435\u0440\u0435\u0437:"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (authModal);

/***/ }),

/***/ "./components/AuthModal/AuthModal.module.scss":
/*!****************************************************!*\
  !*** ./components/AuthModal/AuthModal.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./components/Card/Body.js":
/*!*********************************!*\
  !*** ./components/Card/Body.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.scss */ "./components/Card/Card.module.scss");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Card\\Body.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const body = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `${_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Body} ${className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (body);

/***/ }),

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.scss */ "./components/Card/Card.module.scss");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Card/Header.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body */ "./components/Card/Body.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Card\\Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const card = ({
  children,
  className
}) => {
  return __jsx("div", {
    className: `${_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Card} ${className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, children);
};

card.Header = _Header__WEBPACK_IMPORTED_MODULE_2__["default"];
card.Body = _Body__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./components/Card/Card.module.scss":
/*!******************************************!*\
  !*** ./components/Card/Card.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Card": "Card_Card__2Ruvq"
};


/***/ }),

/***/ "./components/Card/Header.js":
/*!***********************************!*\
  !*** ./components/Card/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.scss */ "./components/Card/Card.module.scss");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Card\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const header = ({
  children,
  className
}) => {
  return __jsx("h5", {
    className: `${_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Header} ${className} text-secondary`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./components/Categories/BookCategories/BookCategories.js":
/*!****************************************************************!*\
  !*** ./components/Categories/BookCategories/BookCategories.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Categories\\BookCategories\\BookCategories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const bookCategories = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (bookCategories);

/***/ }),

/***/ "./components/Categories/Categories.js":
/*!*********************************************!*\
  !*** ./components/Categories/Categories.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Category_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category/Category */ "./components/Categories/Category/Category.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Categories\\Categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const categories = ({
  items,
  isVideo,
  isStatic
}) => {
  const categoriesView = items.map(item => {
    return __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      icon: item.icon,
      id: item.id,
      href: item.href,
      isStatic: isStatic,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 4
      }
    }, item.title);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, !isStatic && __jsx("div", {
    className: "d-flex align-items-center mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "icon icon-md",
    src: "/images/icons/janra.png",
    alt: "\u0416\u0430\u043D\u0440\u044B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }), __jsx("h5", {
    className: "ml-1 mb-0 text-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, !isVideo ? "Жанры" : "Категории")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, categoriesView), __jsx("hr", {
    className: "mt-4 pb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (categories);

/***/ }),

/***/ "./components/Categories/Category/Category.js":
/*!****************************************************!*\
  !*** ./components/Categories/Category/Category.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.module.scss */ "./components/Categories/Category/Category.module.scss");
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Category_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Categories\\Category\\Category.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import {useRouter} from 'next/router';



const category = ({
  id,
  children,
  icon,
  isStatic
}) => {
  return __jsx("li", {
    className: `${_Category_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Category} mt-2 list`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: {
      pathname: "/books/categories/[id]",
      query: !isStatic && {
        janra: id
      }
    },
    as: isStatic ? `/books/categories/${id}` : `${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, isStatic && __jsx("img", {
    src: icon,
    alt: children,
    className: "icon icon-sm mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: `${isStatic && "text-lg"} mr-1`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }, children)), __jsx("div", {
    className: "category__tick",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/icons/tick.png",
    className: "icon icon-sm",
    alt: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (category);

/***/ }),

/***/ "./components/Categories/Category/Category.module.scss":
/*!*************************************************************!*\
  !*** ./components/Categories/Category/Category.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Category": "Category_Category__t-u_6",
	"Active": "Category_Active__2rEfn",
	"Big": "Category_Big__1NBeL"
};


/***/ }),

/***/ "./components/Comments/Comment/Comment.js":
/*!************************************************!*\
  !*** ./components/Comments/Comment/Comment.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Comments\\Comment\\Comment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const comment = ({
  id,
  name,
  rate,
  text,
  date
}) => {
  return __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "d-flex align-items-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, __jsx("h4", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, name), __jsx(___WEBPACK_IMPORTED_MODULE_1__["Stars"], {
    rate: rate,
    isBig: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, text), __jsx("p", {
    className: "text-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, date));
};

/* harmony default export */ __webpack_exports__["default"] = (comment);

/***/ }),

/***/ "./components/Comments/Comments.js":
/*!*****************************************!*\
  !*** ./components/Comments/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comments_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comments.module.scss */ "./components/Comments/Comments.module.scss");
/* harmony import */ var _Comments_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Comments_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment/Comment */ "./components/Comments/Comment/Comment.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Comments\\Comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const comments = ({
  items,
  rate,
  commentControl,
  isAuthorized,
  rateClicked,
  onSubmit
}) => {
  const commentsView = items.map(item => {
    return __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: item.id
    }, item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 10
      }
    }));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432"), isAuthorized ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    value: commentControl.value,
    onChange: commentControl.onChange,
    placeholder: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }), __jsx("div", {
    className: "d-flex justify-content-between align-items-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_4__["Stars"], {
    rate: rate,
    isBig: true,
    onClick: rateClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, "\u041E\u0442\u0437\u044B\u0432 \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 57
    }
  }), "\u041F\u0440\u043E\u0439\u0442\u0438 ", " ", __jsx("span", {
    className: "text-accent text-bold",
    onClick: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, "\u0410\u0412\u0422\u041E\u0420\u0418\u0417\u0410\u0426\u0418\u042E")), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, "\u041E\u0442\u0437\u044B\u0432\u044B"), __jsx("ul", {
    className: _Comments_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Comments,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, commentsView));
};

/* harmony default export */ __webpack_exports__["default"] = (comments);

/***/ }),

/***/ "./components/Comments/Comments.module.scss":
/*!**************************************************!*\
  !*** ./components/Comments/Comments.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Comments": "Comments_Comments__RckHD"
};


/***/ }),

/***/ "./components/Compilations/Compilation/Compilation.js":
/*!************************************************************!*\
  !*** ./components/Compilations/Compilation/Compilation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Compilation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compilation.module.scss */ "./components/Compilations/Compilation/Compilation.module.scss");
/* harmony import */ var _Compilation_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Compilation_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Compilations\\Compilation\\Compilation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const compilation = ({
  className,
  text,
  img
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: `${className} ${_Compilation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Compilation}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: img,
    alt: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, text)))));
};

/* harmony default export */ __webpack_exports__["default"] = (compilation);

/***/ }),

/***/ "./components/Compilations/Compilation/Compilation.module.scss":
/*!*********************************************************************!*\
  !*** ./components/Compilations/Compilation/Compilation.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Compilation": "Compilation_Compilation__1T3DJ"
};


/***/ }),

/***/ "./components/Compilations/Compilations.js":
/*!*************************************************!*\
  !*** ./components/Compilations/Compilations.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Compilation_Compilation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compilation/Compilation */ "./components/Compilations/Compilation/Compilation.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Compilations\\Compilations.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const compilations = ({
  items,
  onClick
}) => {
  const compilationsView = items.map(item => {
    return __jsx(_Compilation_Compilation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      onClick: () => onClick(item.id),
      text: item.text,
      img: item.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 10
      }
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, compilationsView);
};

/* harmony default export */ __webpack_exports__["default"] = (compilations);

/***/ }),

/***/ "./components/Compilations/CompilationsCarousel.js":
/*!*********************************************************!*\
  !*** ./components/Compilations/CompilationsCarousel.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./components/index.js");
/* harmony import */ var _Compilation_Compilation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Compilation/Compilation */ "./components/Compilations/Compilation/Compilation.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Compilations\\CompilationsCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CompilationsCarousel = ({
  items,
  onClick
}) => {
  const compilationsView = items.map(item => {
    return __jsx(_Compilation_Compilation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      onClick: () => onClick(item.id),
      text: item.text,
      img: item.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 10
      }
    });
  });
  return __jsx(___WEBPACK_IMPORTED_MODULE_1__["SliderCarousel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, compilationsView);
};

/* harmony default export */ __webpack_exports__["default"] = (CompilationsCarousel);

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./components/index.js");
/* harmony import */ var _FooterItems_FooterItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterItems/FooterItems */ "./components/Footer/FooterItems/FooterItems.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const footer = () => {
  return __jsx("footer", {
    className: `${_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Footer} text-left`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "pt-4 pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-50 mr-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  }, __jsx("p", {
    className: "mb-2 text-small text-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "+998 90 000 00 00"), __jsx("p", {
    className: "mb-2 text-small text-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "+998 90 000 00 00"), __jsx("p", {
    className: "mb-2 text-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\u0421\u043B\u0443\u0436\u0431\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: "text-accent mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, "\u041C\u044B \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, getSocial().map((social, index) => {
    return __jsx("li", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 14
      }
    }, __jsx("img", {
      src: social,
      alt: "social",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    })));
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 8
    }
  }, __jsx("h6", {
    className: "text-accent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "\u041E\u043F\u043B\u0430\u0442\u0430"), __jsx("ul", {
    className: "flex-columns",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, getImages().map((image, index) => {
    return __jsx("li", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }
    }, __jsx("img", {
      src: image,
      alt: "payment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }));
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: {
      span: 7
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-start w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, getItems().map(item => {
    return __jsx(_FooterItems_FooterItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.title,
      title: item.title,
      items: item.items,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 16
      }
    });
  }))))));
};

const getSocial = () => ["/images/social/fb.png", "/images/social/instagram.png", "/images/social/tg.png", "/images/social/twitter.png"];

const getImages = () => ["/images/payment/payme.png", "/images/payment/uzcard.png", "/images/payment/click.png", "/images/payment/humo.png", "/images/payment/visa.png", "/images/payment/paynet.png"];

const getItems = () => [{
  title: "О нас",
  items: [{
    title: "Часто задаваемые вопросы",
    link: "/"
  }, {
    title: "Помощь",
    link: "/"
  }, {
    title: "Правила и условия",
    link: "/"
  }, {
    title: "Электронный билет",
    link: "/"
  }, {
    title: "Возврат и обмен",
    link: "/"
  }, {
    title: "Политика конфиденциальности",
    link: "/"
  }]
}, {
  title: "Сотрудничество",
  items: [{
    title: "Издательствам",
    link: "/"
  }, {
    title: "Авторам",
    link: "/"
  }, {
    title: "Библиотекам",
    link: "/"
  }, {
    title: "Партнёрам",
    link: "/"
  }, {
    title: "Стать спикером",
    link: "/"
  }]
}, {
  title: "Что почитать?",
  items: [{
    title: "Бестселлеры",
    link: "/"
  }, {
    title: "Скоро в продаже",
    link: "/"
  }, {
    title: "Публичная оферта",
    link: "/"
  }, {
    title: "Конфиденциальность",
    link: "/"
  }]
}];

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(footer));

/***/ }),

/***/ "./components/Footer/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/Footer.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Footer": "Footer_Footer__AtGet",
	"Social": "Footer_Social__aHE_y"
};


/***/ }),

/***/ "./components/Footer/FooterItems/FooterItem/FooterItem.js":
/*!****************************************************************!*\
  !*** ./components/Footer/FooterItems/FooterItem/FooterItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Footer\\FooterItems\\FooterItem\\FooterItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const footerItem = ({
  title,
  link
}) => {
  return __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, __jsx("a", {
    className: "text-small text-accent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mb-2 text-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (footerItem);

/***/ }),

/***/ "./components/Footer/FooterItems/FooterItems.js":
/*!******************************************************!*\
  !*** ./components/Footer/FooterItems/FooterItems.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterItem_FooterItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterItem/FooterItem */ "./components/Footer/FooterItems/FooterItem/FooterItem.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Footer\\FooterItems\\FooterItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const footerItems = ({
  title,
  items
}) => {
  const footerItemsView = items.map((item, index) => {
    return __jsx(_FooterItem_FooterItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      title: item.title,
      link: item.link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 10
      }
    });
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("h6", {
    className: "text-accent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, title), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, footerItemsView));
};

/* harmony default export */ __webpack_exports__["default"] = (footerItems);

/***/ }),

/***/ "./components/Heading/Heading.js":
/*!***************************************!*\
  !*** ./components/Heading/Heading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.module.scss */ "./components/Heading/Heading.module.scss");
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Heading\\Heading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const heading = ({
  className,
  children,
  text,
  clicked
}) => {
  return __jsx("div", {
    className: [className, _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Heading].join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, children), __jsx("h5", {
    className: "mb-3 text-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, text), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: clicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A"));
};

/* harmony default export */ __webpack_exports__["default"] = (heading);

/***/ }),

/***/ "./components/Heading/Heading.module.scss":
/*!************************************************!*\
  !*** ./components/Heading/Heading.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Heading": "Heading_Heading__s1qOY"
};


/***/ }),

/***/ "./components/ImagesCarousel/ImageCarousel.module.scss":
/*!*************************************************************!*\
  !*** ./components/ImagesCarousel/ImageCarousel.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Image": "ImageCarousel_Image__3ztLJ"
};


/***/ }),

/***/ "./components/ImagesCarousel/ImagesCarousel.js":
/*!*****************************************************!*\
  !*** ./components/ImagesCarousel/ImagesCarousel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCarousel.module.scss */ "./components/ImagesCarousel/ImageCarousel.module.scss");
/* harmony import */ var _ImageCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ImagesCarousel\\ImagesCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const imagesCarousel = ({
  items,
  nextClicked,
  prevClicked
}) => {
  const imagesView = items.map(item => {
    return __jsx("div", {
      key: item.id,
      className: _ImageCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Image,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: item.img,
      alt: item.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }
    }));
  });
  return __jsx(___WEBPACK_IMPORTED_MODULE_2__["SliderCarousel"], {
    items: {
      xl: 1,
      lg: 1,
      sm: 1,
      xs: 1
    },
    nextClicked: nextClicked,
    prevClicked: prevClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, imagesView);
};

/* harmony default export */ __webpack_exports__["default"] = (imagesCarousel);

/***/ }),

/***/ "./components/Link/Link.js":
/*!*********************************!*\
  !*** ./components/Link/Link.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Link\\Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import classes from './Link.module.scss';




const CustomLink = ({
  children,
  className,
  href,
  as
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const baseUrl = as.split("?")[0];
  let routerBaseUrl = router.asPath.split("?")[0];
  let classNames = className || "";
  let hasSuchQuery = false;

  if (href.query) {
    for (let key in href.query) {
      if (href.query[key] === router.query[key]) {
        hasSuchQuery = true;
      }
    }
  } else {
    console.log(as + " " + href + baseUrl + " " + routerBaseUrl + " query = " + href.query);

    if (baseUrl === routerBaseUrl) {
      classNames = `${className} active`;
    }
  } // if base url is the same as "as", then highlight
  // if query url is the same as "as", then highlight
  // console.log(href.query);
  // console.log(router);
  // const currentRoute = as ? as : href;
  // const route = as ? router.asPath : router.pathname;
  // if (route === currentRoute) {
  // 	classNames = `${className} active`;
  // }


  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: as,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className: classNames
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomLink);

/***/ }),

/***/ "./components/Logo/Logo.js":
/*!*********************************!*\
  !*** ./components/Logo/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.module.scss */ "./components/Logo/Logo.module.scss");
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Logo\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const logo = ({
  alt
}) => {
  const logo = ["/images/logo/logo.png", "/images/logo/logo-alt.png"];
  return __jsx("div", {
    className: _Logo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("img", {
    src: !alt ? logo[0] : logo[1],
    alt: "logo",
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./components/Logo/Logo.module.scss":
/*!******************************************!*\
  !*** ./components/Logo/Logo.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Logo": "Logo_Logo__h5BMD"
};


/***/ }),

/***/ "./components/MakeOrder/MakeOrder.js":
/*!*******************************************!*\
  !*** ./components/MakeOrder/MakeOrder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\MakeOrder\\MakeOrder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const makeOrder = ({
  codeControl,
  isValidCode,
  productCount,
  price,
  discount,
  ordered
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, "\u0421\u0443\u043C\u043C\u0430"), __jsx("table", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, productCount, " \u0442\u043E\u0432\u0430\u0440\u0430 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, price, " \u0441\u0443\u043C")), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "\u0412\u0441\u0435 \u0441\u043A\u0438\u0434\u043A\u0438"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, -1 * discount * 0.01 * price, " \u0441\u0443\u043C")))), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "d-flex justify-content-between align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "\u0418\u0442\u043E\u0433\u043E:"), __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, price - discount * price)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: ordered,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"));
};

makeOrder.defaultProps = {
  discount: 0,
  price: 0,
  codeControl: {
    value: "",
    onChange: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (makeOrder);

/***/ }),

/***/ "./components/Modal/Modal.js":
/*!***********************************!*\
  !*** ./components/Modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const modal = ({
  modal,
  onHide,
  children,
  className,
  size
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: modal.show,
    onHide: onHide ? onHide : modal.onHide,
    className: className,
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./components/Navigation/NavItems/NavItems.js":
/*!****************************************************!*\
  !*** ./components/Navigation/NavItems/NavItems.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavItems_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavItems.module.scss */ "./components/Navigation/NavItems/NavItems.module.scss");
/* harmony import */ var _NavItems_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavItems_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Navigation\\NavItems\\NavItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const navItems = ({
  authModalShow,
  cartCount
}) => {
  return __jsx("div", {
    className: `${_NavItems_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavItems} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "favorite",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/images/icons/star.png",
    className: "icon icon-sm mr-1",
    alt: "favourite",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435"))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, cartCount ? __jsx("span", {
    className: "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, cartCount)) : null, __jsx("img", {
    src: "/images/icons/cart.png",
    className: "icon icon-sm mr-1",
    alt: "cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  })), "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"))))), __jsx("div", {
    onClick: authModalShow,
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-center list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/images/icons/user.png",
    className: "icon icon-sm mr-1",
    alt: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), "\u0412\u043E\u0439\u0442\u0438"))));
};

/* harmony default export */ __webpack_exports__["default"] = (navItems);

/***/ }),

/***/ "./components/Navigation/NavItems/NavItems.module.scss":
/*!*************************************************************!*\
  !*** ./components/Navigation/NavItems/NavItems.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"NavItems": "NavItems_NavItems__15_nq"
};


/***/ }),

/***/ "./components/Navigation/Navbar.js":
/*!*****************************************!*\
  !*** ./components/Navigation/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.scss */ "./components/Navigation/Navbar.module.scss");
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavItems_NavItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItems/NavItems */ "./components/Navigation/NavItems/NavItems.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Navigation\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const navbar = ({
  booksCategories,
  booksCategoryClicked,
  authModalShow,
  search,
  cartCount
}) => {
  const books = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx("img", {
    src: "/images/icons/book.png",
    className: "icon icon-sm mr-1",
    alt: "\u041A\u043D\u0438\u0433\u0438",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), "\u041A\u043D\u0438\u0433\u0438");

  const videolessons = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("img", {
    src: "/images/icons/video.png",
    className: "icon icon-sm mr-1",
    alt: "\u0412\u0438\u0434\u0435\u043E\u043A\u0443\u0440\u0441\u044B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }), "\u0412\u0438\u0434\u0435\u043E\u043A\u0443\u0440\u0441\u044B");

  return __jsx("header", {
    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    expand: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_5__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto ml-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"], {
    title: books,
    className: "list",
    id: "basic-nav-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, booksCategories.map(cat => {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
      key: cat.id,
      onClick: () => booksCategoryClicked(cat.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, cat.title);
  }))), search, __jsx(_NavItems_NavItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    authModalShow: authModalShow,
    cartCount: cartCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(navbar));

/***/ }),

/***/ "./components/Navigation/Navbar.module.scss":
/*!**************************************************!*\
  !*** ./components/Navigation/Navbar.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Navbar": "Navbar_Navbar__2O_ie"
};


/***/ }),

/***/ "./components/PopularHeader/PopularHeader.js":
/*!***************************************************!*\
  !*** ./components/PopularHeader/PopularHeader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\PopularHeader\\PopularHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const popularHeader = ({
  children,
  link
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "d-flex align-items-end pb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "mb-0 mr-3 text-normal text-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 ", children), __jsx("p", {
    className: "mb-0 text-small text-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \xBB"))));
};

/* harmony default export */ __webpack_exports__["default"] = (popularHeader);

/***/ }),

/***/ "./components/PreCarousel/PreCarousel.js":
/*!***********************************************!*\
  !*** ./components/PreCarousel/PreCarousel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreCarousel.module.scss */ "./components/PreCarousel/PreCarousel.module.scss");
/* harmony import */ var _PreCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PreCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\PreCarousel\\PreCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const preCarousel = ({
  isVideo,
  children,
  link
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _PreCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.PreCarousel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _PreCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: `/images/icons/${!isVideo ? "books.png" : "videos.png"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  })), __jsx("h3", {
    className: "text-accent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, children), __jsx("p", {
    className: `text-small mt-auto ${isVideo && "text-bold"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, "\u0412\u0441\u0435 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u0438"))));
};

/* harmony default export */ __webpack_exports__["default"] = (preCarousel);

/***/ }),

/***/ "./components/PreCarousel/PreCarousel.module.scss":
/*!********************************************************!*\
  !*** ./components/PreCarousel/PreCarousel.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"PreCarousel": "PreCarousel_PreCarousel__3mKDO",
	"Image": "PreCarousel_Image__EsRZ-"
};


/***/ }),

/***/ "./components/ProductDescription/ProductDescription.js":
/*!*************************************************************!*\
  !*** ./components/ProductDescription/ProductDescription.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDescription.module.scss */ "./components/ProductDescription/ProductDescription.module.scss");
/* harmony import */ var _ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ProductDescription\\ProductDescription.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const productDescription = ({
  date,
  title,
  author,
  type,
  description,
  price,
  currentPrice,
  isInCart,
  cartClicked
}) => {
  return __jsx("div", {
    className: _ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProductDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, date), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, title), __jsx("div", {
    className: "d-flex justify-content-between align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, author), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, type)), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u043A\u043D\u0438\u0433\u0435 \"", title, "\""), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, description), __jsx("div", {
    className: "d-flex justify-content-between align-items-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, currentPrice, " \u0441\u0443\u043C"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "text-crossed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, price, " \u0441\u0443\u043C")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: cartClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }, isInCart ? "Удалить из корзины" : "Добавить в корзину"));
};

/* harmony default export */ __webpack_exports__["default"] = (productDescription);

/***/ }),

/***/ "./components/ProductDescription/ProductDescription.module.scss":
/*!**********************************************************************!*\
  !*** ./components/ProductDescription/ProductDescription.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./components/ProductDetails/ProductDetails.js":
/*!*****************************************************!*\
  !*** ./components/ProductDetails/ProductDetails.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.module.scss */ "./components/ProductDetails/ProductDetails.module.scss");
/* harmony import */ var _ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ProductDetails\\ProductDetails.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const productDetails = ({
  img,
  title,
  rate,
  details,
  social
}) => {
  const firstColumn = ["ID товара: ", "ISBN: ", "Страниц: ", "Оформление: ", "Иллюстрации: ", "Масса: ", "Размеры: ", "Подробнее: "];
  const rows = []; // ATTENTION. The number of columns in both arrays must be the same!
  // ELSE it will not display all rows

  let j = 0;

  for (const i in details) {
    if (j < firstColumn.length) rows.push({
      first: firstColumn[j],
      second: details[i]
    });
    j++;
  }

  return __jsx("div", {
    className: _ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ProductDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: img,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx("h3", {
    className: "mb-0 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043D\u0438\u0433\u0438"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Stars"], {
    rate: rate,
    isBig: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  })), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, rows.map((row, index) => {
    return __jsx("tr", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 8
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, row.first), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, row.second));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (productDetails);

/***/ }),

/***/ "./components/ProductDetails/ProductDetails.module.scss":
/*!**************************************************************!*\
  !*** ./components/ProductDetails/ProductDetails.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./components/Products/Product/Product.js":
/*!************************************************!*\
  !*** ./components/Products/Product/Product.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./components/index.js");
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.module.scss */ "./components/Products/Product/Product.module.scss");
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Products\\Product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const product = ({
  id,
  img,
  title,
  author,
  rate,
  currentPrice,
  price,
  isVideo,
  onAddRemoveItem
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/${isVideo ? "videos" : "books"}/[id]`,
    as: `/${isVideo ? "videos" : "books"}/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: img,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/${isVideo ? "videos" : "books"}/[id]`,
    as: `/${isVideo ? "videos" : "books"}/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx("h5", {
    className: "text-black mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, title), __jsx("p", {
    className: "text-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, author), __jsx(___WEBPACK_IMPORTED_MODULE_2__["Stars"], {
    rate: rate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/${isVideo ? "videos" : "books"}/[id]`,
    as: `/${isVideo ? "videos" : "books"}/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex align-items-end mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "text-danger text-bold mb-0 mr-1 text-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 8
    }
  }, currentPrice), " ", __jsx("p", {
    className: "text-xsmall text-crossed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }, price))))), onAddRemoveItem && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onAddRemoveItem,
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B"));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(product));

/***/ }),

/***/ "./components/Products/Product/Product.module.scss":
/*!*********************************************************!*\
  !*** ./components/Products/Product/Product.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Product": "Product_Product__VULq_"
};


/***/ }),

/***/ "./components/Products/Products.js":
/*!*****************************************!*\
  !*** ./components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product/Product */ "./components/Products/Product/Product.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Products\\Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const products = ({
  items,
  title,
  isVideo,
  md,
  sm,
  onAddRemoveItem
}) => {
  const productsView = items.map(item => {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "mb-4",
      key: item.id,
      md: md,
      sm: sm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 4
      }
    }, __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, item, {
      isVideo: isVideo,
      onAddRemoveItem: onAddRemoveItem ? () => onAddRemoveItem(item.id) : null,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }
    })));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, title && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, title)), productsView);
};

products.defaultProps = {
  md: 3,
  sm: 4
};
/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./components/Products/ProductsCarousel.js":
/*!*************************************************!*\
  !*** ./components/Products/ProductsCarousel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product/Product */ "./components/Products/Product/Product.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Products\\ProductsCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const productsCarousel = ({
  items,
  responsive
}) => {
  const resp = {
    xl: responsive ? responsive.xl ? responsive.xl : 8 : 8,
    lg: responsive ? responsive.lg ? responsive.lg : 6 : 6,
    sm: responsive ? responsive.sm ? responsive.sm : 5 : 5,
    xs: responsive ? responsive.xs ? responsive.xs : 3 : 3
  };
  const productsView = items.map(item => {
    return __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: item.id
    }, item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 10
      }
    }));
  });
  return __jsx(___WEBPACK_IMPORTED_MODULE_2__["SliderCarousel"], {
    items: resp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, productsView);
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(productsCarousel));

/***/ }),

/***/ "./components/ProfileNavigation/NavigationItem/NavigationItem.js":
/*!***********************************************************************!*\
  !*** ./components/ProfileNavigation/NavigationItem/NavigationItem.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItem.module.scss */ "./components/ProfileNavigation/NavigationItem/NavigationItem.module.scss");
/* harmony import */ var _NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ProfileNavigation\\NavigationItem\\NavigationItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const navigationItem = ({
  href,
  children,
  icon
}) => {
  return __jsx("li", {
    className: `${_NavigationItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationItem} list mt-2`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: href,
    as: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: icon,
    alt: children,
    className: "icon icon-sm mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "text-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItem);

/***/ }),

/***/ "./components/ProfileNavigation/NavigationItem/NavigationItem.module.scss":
/*!********************************************************************************!*\
  !*** ./components/ProfileNavigation/NavigationItem/NavigationItem.module.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./components/ProfileNavigation/NavigationItems.js":
/*!*********************************************************!*\
  !*** ./components/ProfileNavigation/NavigationItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationItem/NavigationItem */ "./components/ProfileNavigation/NavigationItem/NavigationItem.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ProfileNavigation\\NavigationItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavigationItems = ({
  items
}) => {
  const NavigationItemsView = items.map(item => {
    return __jsx(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: item.href,
      key: item.id,
      icon: item.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 4
      }
    }, item.title);
  });
  return __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, NavigationItemsView);
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationItems);

/***/ }),

/***/ "./components/Reviews/Review/Review.js":
/*!*********************************************!*\
  !*** ./components/Reviews/Review/Review.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Review_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review.module.scss */ "./components/Reviews/Review/Review.module.scss");
/* harmony import */ var _Review_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Review_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./components/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Reviews\\Review\\Review.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const review = ({
  id,
  img,
  name,
  rate,
  text
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `/users/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _Review_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Review,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-end justify-content-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: _Review_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: img,
    alt: name,
    className: "img-small radius",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "mb-0 text-small text-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, name), __jsx(___WEBPACK_IMPORTED_MODULE_2__["Stars"], {
    rate: rate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }))), __jsx("p", {
    className: "text-secondary text-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, text))));
};

/* harmony default export */ __webpack_exports__["default"] = (review);

/***/ }),

/***/ "./components/Reviews/Review/Review.module.scss":
/*!******************************************************!*\
  !*** ./components/Reviews/Review/Review.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Review": "Review_Review__3Yftx",
	"Image": "Review_Image__mbLGB"
};


/***/ }),

/***/ "./components/Reviews/Reviews.js":
/*!***************************************!*\
  !*** ./components/Reviews/Reviews.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Reviews/ReviewsCarousel.js":
/*!***********************************************!*\
  !*** ./components/Reviews/ReviewsCarousel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewsCarousel.module.scss */ "./components/Reviews/ReviewsCarousel.module.scss");
/* harmony import */ var _ReviewsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReviewsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Review_Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review/Review */ "./components/Reviews/Review/Review.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Reviews\\ReviewsCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const reviewsCarousel = ({
  items
}) => {
  const reviewsView = items.map(item => {
    return __jsx(_Review_Review__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: item.id
    }, item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 10
      }
    }));
  });
  return __jsx(___WEBPACK_IMPORTED_MODULE_3__["SliderCarousel"], {
    arrows: false,
    autoPlay: true,
    items: {
      xl: 6,
      lg: 4,
      sm: 3,
      xs: 1
    },
    className: _ReviewsCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, reviewsView);
};

/* harmony default export */ __webpack_exports__["default"] = (reviewsCarousel);

/***/ }),

/***/ "./components/Reviews/ReviewsCarousel.module.scss":
/*!********************************************************!*\
  !*** ./components/Reviews/ReviewsCarousel.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Item": "ReviewsCarousel_Item__2pVG2"
};


/***/ }),

/***/ "./components/Search/Search.js":
/*!*************************************!*\
  !*** ./components/Search/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.module.scss */ "./components/Search/Search.module.scss");
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Search_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Search\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const search = ({
  control,
  onSearch
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSearch,
    className: _Search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("button", {
    className: _Search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/images/icons/search.png",
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    value: control.value,
    onChange: control.onChange,
    placeholder: "\u041F\u043E\u0438\u0441\u043A",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./components/Search/Search.module.scss":
/*!**********************************************!*\
  !*** ./components/Search/Search.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Form": "Search_Form__2abna",
	"Button": "Search_Button__J5BoI"
};


/***/ }),

/***/ "./components/SliderCarousel/SliderCarousel.js":
/*!*****************************************************!*\
  !*** ./components/SliderCarousel/SliderCarousel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderCarousel.module.scss */ "./components/SliderCarousel/SliderCarousel.module.scss");
/* harmony import */ var _SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\SliderCarousel\\SliderCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import Carousel from "@brainhubeu/react-carousel";
// import Carousel from "react-slick";

const sliderCarousel = ({
  className,
  children,
  items,
  arrows = true,
  autoPlay = false
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {
        max: 4000,
        min: 3000
      },
      items: items ? items.xl ? items.xl : 5 : 5
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: items ? items.lg ? items.lg : 3 : 3
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: items ? items.sm ? items.sm : 2 : 2
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: items ? items.xs ? items.xs : 1 : 1
    }
  };
  return __jsx("div", {
    className: _SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Carousel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    swipeable: true,
    draggable: true,
    arrows: arrows,
    showDots: false // partialVisbile={true}
    ,
    responsive: responsive,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    className: "pb-2 pt-2",
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    itemClass: [_SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Item, className].join(" "),
    autoPlay: autoPlay,
    autoPlaySpeed: 5000 // transitionDuration={300}
    // deviceType={this.props.deviceType}
    ,
    customLeftArrow: __jsx(CustomArrowLeft, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 22
      }
    }),
    customRightArrow: __jsx(CustomArrowRight, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, children));
};

const CustomArrowLeft = ({
  onClick
}) => {
  return __jsx("div", {
    onClick: () => onClick(),
    className: [_SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Icon, _SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Left].join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 3
    }
  }, __jsx("img", {
    className: "icon",
    src: "/images/icons/arrow-left.png",
    alt: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }
  }));
};

const CustomArrowRight = ({
  onClick
}) => {
  return __jsx("div", {
    onClick: () => onClick(),
    className: [_SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Icon, _SliderCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Right].join(" "),
    "aria-label": "Go to next slide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }
  }, __jsx("img", {
    className: "icon",
    src: "/images/icons/arrow-right.png",
    alt: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(sliderCarousel));

/***/ }),

/***/ "./components/SliderCarousel/SliderCarousel.module.scss":
/*!**************************************************************!*\
  !*** ./components/SliderCarousel/SliderCarousel.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Icon": "SliderCarousel_Icon__3HUvI",
	"Disabled": "SliderCarousel_Disabled__3p6q8",
	"Left": "SliderCarousel_Left__1ez2_",
	"Right": "SliderCarousel_Right__wOvwT",
	"Item": "SliderCarousel_Item__3Mhgn"
};


/***/ }),

/***/ "./components/Speakers/Speaker/Speaker.js":
/*!************************************************!*\
  !*** ./components/Speakers/Speaker/Speaker.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker.module.scss */ "./components/Speakers/Speaker/Speaker.module.scss");
/* harmony import */ var _Speaker_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Speaker_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Speakers\\Speaker\\Speaker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const speaker = ({
  name,
  role,
  quote,
  onClick
}) => {
  return __jsx("div", {
    className: _Speaker_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Speaker,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, role), __jsx("p", {
    className: _Speaker_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Quote,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, quote), __jsx("h3", {
    className: "text-normal mt-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, "\u0421\u0442\u0430\u043D\u044C \u043D\u0430\u0448\u0438\u043C \u0441\u043F\u0438\u043A\u0435\u0440\u043E\u043C"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"));
};

/* harmony default export */ __webpack_exports__["default"] = (speaker);

/***/ }),

/***/ "./components/Speakers/Speaker/Speaker.module.scss":
/*!*********************************************************!*\
  !*** ./components/Speakers/Speaker/Speaker.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Speaker": "Speaker_Speaker__R6Tqq",
	"Quote": "Speaker_Quote__8rFsa"
};


/***/ }),

/***/ "./components/Stars/Stars.js":
/*!***********************************!*\
  !*** ./components/Stars/Stars.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Stars\\Stars.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MAX_STARS = 5;

const stars = ({
  rate,
  isBig,
  onClick
}) => {
  if (rate > MAX_STARS) {
    return;
  }

  let starsArray = [];

  for (let i = 0; i < MAX_STARS; i++) {
    starsArray.push(__jsx("div", {
      key: i,
      className: "mr-1",
      onClick: onClick ? () => onClick(i) : null,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: "/images/icons/star.png",
      className: `icon ${isBig && "icon-md"}`,
      alt: "star",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }
    })));
  }

  for (let i = 0; i < rate; i++) {
    starsArray[i] = __jsx("div", {
      key: i,
      className: "mr-1",
      onClick: onClick ? () => onClick(i) : null,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: "/images/icons/star-gold.png",
      className: `icon ${isBig && "icon-md"}`,
      alt: "star-gold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }
    }));
  }

  return __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, starsArray);
};

/* harmony default export */ __webpack_exports__["default"] = (stars);

/***/ }),

/***/ "./components/TopImage/TopImage.js":
/*!*****************************************!*\
  !*** ./components/TopImage/TopImage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopImage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopImage.module.scss */ "./components/TopImage/TopImage.module.scss");
/* harmony import */ var _TopImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TopImage_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\TopImage\\TopImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const topImage = ({
  title,
  img,
  link
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _TopImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TopImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/images/main/books/carousel1.png",
    alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438 \u0438 \u0412\u0438\u0434\u0435\u043E \u0443\u0440\u043E\u043A\u0438",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438 \u0438 \u0412\u0438\u0434\u0435\u043E \u0443\u0440\u043E\u043A\u0438")))));
};

/* harmony default export */ __webpack_exports__["default"] = (topImage);

/***/ }),

/***/ "./components/TopImage/TopImage.module.scss":
/*!**************************************************!*\
  !*** ./components/TopImage/TopImage.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"TopImage": "TopImage_TopImage__3h2Il"
};


/***/ }),

/***/ "./components/UI/FormGroup/FormGroup.js":
/*!**********************************************!*\
  !*** ./components/UI/FormGroup/FormGroup.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup.module.scss */ "./components/UI/FormGroup/FormGroup.module.scss");
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\UI\\FormGroup\\FormGroup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const formGroup = ({
  children,
  control,
  size,
  as,
  type,
  placeholder
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    className: "mt-2 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, children && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    className: size === "sm" && _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Sm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, children), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    value: control.value,
    as: as,
    size: size,
    type: type,
    placeholder: placeholder,
    onChange: control.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }));
};

formGroup.defaultProps = {
  placeholder: "",
  as: "input",
  type: "text",
  value: "",
  size: "md",
  onChange: null,
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (formGroup);

/***/ }),

/***/ "./components/UI/FormGroup/FormGroup.module.scss":
/*!*******************************************************!*\
  !*** ./components/UI/FormGroup/FormGroup.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Sm": "FormGroup_Sm__1bGhG"
};


/***/ }),

/***/ "./components/UI/FormikGroup/FormGroup.module.scss":
/*!*********************************************************!*\
  !*** ./components/UI/FormikGroup/FormGroup.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Sm": "FormGroup_Sm__1YQN4"
};


/***/ }),

/***/ "./components/UI/FormikGroup/FormikGroup.js":
/*!**************************************************!*\
  !*** ./components/UI/FormikGroup/FormikGroup.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup.module.scss */ "./components/UI/FormikGroup/FormGroup.module.scss");
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\UI\\FormikGroup\\FormikGroup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const formikGroup = ({
  children,
  onChange,
  value,
  size,
  as,
  type,
  name,
  placeholder,
  options
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    className: "mt-2 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, children && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    className: size === "sm" && _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Sm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, children), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    value: value,
    type: type,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    className: size === "sm" && _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Sm,
    as: as,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, options ? options.map((option, index) => {
    return __jsx("option", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 14
      }
    }, option);
  }) : null), __jsx("span", {
    className: "text-danger text-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    name: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  })));
};

formikGroup.defaultProps = {
  value: "",
  type: "text",
  name: "",
  placeholder: "",
  onChange: null,
  className: ""
};
/* harmony default export */ __webpack_exports__["default"] = (formikGroup);

/***/ }),

/***/ "./components/UI/index.js":
/*!********************************!*\
  !*** ./components/UI/index.js ***!
  \********************************/
/*! exports provided: FormGroup, FormikGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormGroup/FormGroup */ "./components/UI/FormGroup/FormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FormikGroup_FormikGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormikGroup/FormikGroup */ "./components/UI/FormikGroup/FormikGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormikGroup", function() { return _FormikGroup_FormikGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Navbar, Footer, Logo, Heading, PreCarousel, SliderCarousel, Compilations, CompilationsCarousel, Products, ProductsCarousel, ImagesCarousel, Speaker, ReviewsCarousel, Reviews, Stars, PopularHeader, BookCategories, Categories, ProductDetails, ProductDescription, Comments, MakeOrder, Card, Modal, AuthModal, TopImage, Link, NavigationItems, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation/Navbar */ "./components/Navigation/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navigation_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer/Footer */ "./components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo/Logo */ "./components/Logo/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading/Heading */ "./components/Heading/Heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PreCarousel_PreCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreCarousel/PreCarousel */ "./components/PreCarousel/PreCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreCarousel", function() { return _PreCarousel_PreCarousel__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _SliderCarousel_SliderCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SliderCarousel/SliderCarousel */ "./components/SliderCarousel/SliderCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderCarousel", function() { return _SliderCarousel_SliderCarousel__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Compilations_Compilations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Compilations/Compilations */ "./components/Compilations/Compilations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compilations", function() { return _Compilations_Compilations__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Compilations_CompilationsCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Compilations/CompilationsCarousel */ "./components/Compilations/CompilationsCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompilationsCarousel", function() { return _Compilations_CompilationsCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Products/Products */ "./components/Products/Products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return _Products_Products__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Products_ProductsCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Products/ProductsCarousel */ "./components/Products/ProductsCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsCarousel", function() { return _Products_ProductsCarousel__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ImagesCarousel_ImagesCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImagesCarousel/ImagesCarousel */ "./components/ImagesCarousel/ImagesCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesCarousel", function() { return _ImagesCarousel_ImagesCarousel__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Speakers_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Speakers/Speaker/Speaker */ "./components/Speakers/Speaker/Speaker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return _Speakers_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Reviews_ReviewsCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Reviews/ReviewsCarousel */ "./components/Reviews/ReviewsCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewsCarousel", function() { return _Reviews_ReviewsCarousel__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Reviews_Reviews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Reviews/Reviews */ "./components/Reviews/Reviews.js");
/* harmony import */ var _Reviews_Reviews__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Reviews_Reviews__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return _Reviews_Reviews__WEBPACK_IMPORTED_MODULE_13___default.a; });
/* harmony import */ var _Stars_Stars__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Stars/Stars */ "./components/Stars/Stars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stars", function() { return _Stars_Stars__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _PopularHeader_PopularHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PopularHeader/PopularHeader */ "./components/PopularHeader/PopularHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopularHeader", function() { return _PopularHeader_PopularHeader__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Categories_BookCategories_BookCategories__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Categories/BookCategories/BookCategories */ "./components/Categories/BookCategories/BookCategories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookCategories", function() { return _Categories_BookCategories_BookCategories__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Categories_Categories__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Categories/Categories */ "./components/Categories/Categories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return _Categories_Categories__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _ProductDetails_ProductDetails__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ProductDetails/ProductDetails */ "./components/ProductDetails/ProductDetails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetails", function() { return _ProductDetails_ProductDetails__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _ProductDescription_ProductDescription__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ProductDescription/ProductDescription */ "./components/ProductDescription/ProductDescription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return _ProductDescription_ProductDescription__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Comments_Comments__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Comments/Comments */ "./components/Comments/Comments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return _Comments_Comments__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _MakeOrder_MakeOrder__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MakeOrder/MakeOrder */ "./components/MakeOrder/MakeOrder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MakeOrder", function() { return _MakeOrder_MakeOrder__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Card/Card */ "./components/Card/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card_Card__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Modal/Modal */ "./components/Modal/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _AuthModal_AuthModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./AuthModal/AuthModal */ "./components/AuthModal/AuthModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModal", function() { return _AuthModal_AuthModal__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _TopImage_TopImage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TopImage/TopImage */ "./components/TopImage/TopImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopImage", function() { return _TopImage_TopImage__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Link/Link */ "./components/Link/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link_Link__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _ProfileNavigation_NavigationItems__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ProfileNavigation/NavigationItems */ "./components/ProfileNavigation/NavigationItems.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationItems", function() { return _ProfileNavigation_NavigationItems__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Search/Search */ "./components/Search/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search_Search__WEBPACK_IMPORTED_MODULE_28__["default"]; });































/***/ }),

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

/***/ "./helpers/with-redux-store.js":
/*!*************************************!*\
  !*** ./helpers/with-redux-store.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\helpers\\with-redux-store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_store_store__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store_store__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.store = store;
      return _objectSpread({}, App.getInitialProps ? await App.getInitialProps(appContext) : {}, {
        // ...(appContext.Component.getInitialProps ? await appContext.Component.getInitialProps(appContext) : {}),
        initialReduxState: store.getState()
      });
    }

    render() {
      const {
        initialReduxState
      } = this.props; // console.log(this.props);

      return __jsx(App, _extends({}, this.props, {
        store: getOrCreateStore(initialReduxState),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }));
    }

  };
});

/***/ }),

/***/ "./hooks/calendar-hook.js":
/*!********************************!*\
  !*** ./hooks/calendar-hook.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useCalendar = () => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());

  const calendarChangeHandler = val => {
    setValue(val);
  };

  return {
    value,
    onChange: calendarChangeHandler
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useCalendar);

/***/ }),

/***/ "./hooks/file-hook.js":
/*!****************************!*\
  !*** ./hooks/file-hook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useFile = hasValidity => {
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isUploading,
    1: setIsUploading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isUploadDone,
    1: setIsUploadDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isValid,
    1: setIsValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!hasValidity ? true : false);

  const fileDropped = files => {
    const newFiles = files.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size)
    }));
    checkValidity(files);
    setFiles(newFiles);
  }; // Formats the size


  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const uploadProgressChangeHandler = percentage => {
    setProgress(percentage);
  };

  const uploadReset = () => {
    setIsUploading(false);
    setError(null);
    setProgress(0);
  };

  const clearFiles = () => {
    setFiles([]);
    setIsUploadDone(false);
    uploadReset();
  };

  const errorHandler = message => {
    setError(message);
  };

  const uploadStarted = () => {
    setIsUploading(true);
  };

  const uploadEnded = () => {
    setIsUploading(false);
    setIsUploadDone(true);
  };

  const checkValidity = files => {
    if (!hasValidity) return;

    if (!files.length) {
      setIsValid(false);
    }
  };

  return {
    files,
    isUploading,
    isUploadDone,
    progress,
    isValid,
    error,
    onFileDrop: fileDropped,
    onProgressChange: uploadProgressChangeHandler,
    onUploadReset: uploadReset,
    onClearFiles: clearFiles,
    onError: errorHandler,
    onUploadStart: uploadStarted,
    onUploadEnd: uploadEnded
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useFile);

/***/ }),

/***/ "./hooks/form-hook.js":
/*!****************************!*\
  !*** ./hooks/form-hook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useForm = (hasValidity = false, options = {
  placeholder: "",
  label: null,
  as: "input",
  type: "text"
}) => {
  let validityOptions = {
    required: true,
    minSymbols: 0
  };
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: isTouched,
    1: setIsTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isValid,
    1: setIsValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!hasValidity ? true : false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const inputChangeHandler = event => {
    const val = event.target.value;
    setValue(val);
    checkValidity(val);
  };

  const initValue = value => {
    setValue(value);
  };

  const changeValue = value => {
    setValue(value);
    checkValidity(value);
  };

  const clear = () => {
    setValue("");
    setIsTouched(false);
    setIsValid(!hasValidity ? true : false);
  };

  const makeValid = () => {
    setIsValid(true);
    setIsTouched(true);
  };

  const initValidityOptions = (options = {
    required: true,
    minSymbols: 0
  }) => {
    validityOptions = _objectSpread({}, validityOptions, {}, options);
  }; //  Validity check


  const touchHandler = () => {
    setIsTouched(true);
    checkValidity(value);
  };

  const checkValidity = targetValue => {
    // if no validity is set or the input is not touched, then return
    // if (!hasValidity || !isTouched) return;
    if (!hasValidity) return;
    const val = targetValue.trim(); // else check the validity

    const {
      required,
      minSymbols
    } = validityOptions;
    let isValidTemp = true;

    if (required && isValidTemp && val.length === 0) {
      isValidTemp = false;
      setError("This field is required!");
    }

    if (isValidTemp && val.length < minSymbols) {
      isValidTemp = false;
      setError("Minimum symbols " + minSymbols);
    } // if no errors


    if (isValidTemp) {
      setError(null);
    }

    setIsValid(isValidTemp);
  };

  return {
    value,
    isValid,
    error,
    isTouched,
    options,
    onChange: inputChangeHandler,
    onInitValue: initValue,
    onChangeValue: changeValue,
    onInitValidityOptions: initValidityOptions,
    onTouch: touchHandler,
    onMakeValid: makeValid,
    clear
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: useForm, useSearch, useCalendar, useSelect, useModal, useFile, useTable, useMultiForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-hook */ "./hooks/form-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return _form_hook__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _search_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-hook */ "./hooks/search-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return _search_hook__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _calendar_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-hook */ "./hooks/calendar-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCalendar", function() { return _calendar_hook__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _select_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-hook */ "./hooks/select-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelect", function() { return _select_hook__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _modal_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-hook */ "./hooks/modal-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useModal", function() { return _modal_hook__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _file_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-hook */ "./hooks/file-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFile", function() { return _file_hook__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _table_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-hook */ "./hooks/table-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTable", function() { return _table_hook__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _multiForm_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multiForm-hook */ "./hooks/multiForm-hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMultiForm", function() { return _multiForm_hook__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./hooks/modal-hook.js":
/*!*****************************!*\
  !*** ./hooks/modal-hook.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useModal = (initialState = false, initialLoading = false) => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialLoading);

  const modalHideHandler = () => {
    setShow(false);
  };

  const modalShowHandler = () => {
    setShow(true);
  };

  const modalToggleHandler = () => {
    setShow(!show);
  };

  const changeLoading = condition => {
    setLoading(condition);
  };

  return {
    show,
    loading,
    onToggle: modalToggleHandler,
    onHide: modalHideHandler,
    onShow: modalShowHandler,
    onChangeLoading: changeLoading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ }),

/***/ "./hooks/multiForm-hook.js":
/*!*********************************!*\
  !*** ./hooks/multiForm-hook.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useMultiForm = () => {
  const {
    0: controls,
    1: setControls
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const initControls = items => {
    const array = items.map(item => {
      return {
        id: item.id,
        value: item.value !== null ? item.value : ""
      };
    });
    setControls(array);
  };

  const getValue = id => {
    return controls.find(control => {
      return control.id === id;
    });
  };

  const inputChangeHandler = (event, id) => {
    const value = event.target.value;
    let array = [...controls];
    const index = array.findIndex(control => {
      return control.id === id;
    });
    array[index] = _objectSpread({}, array[index], {
      value: value
    });
    setControls(array);
  }; // const setDefaultValues = (items) => {
  // 	const array = controls.map((control, index) => {
  // 		return {
  // 			...control,
  // 			id: ,
  // 			value: values[index]
  // 		};
  // 	});
  // 	setControls(array);
  // };


  return {
    controls,
    onGetValue: getValue,
    onInit: initControls,
    onChange: inputChangeHandler // onSetValues: setDefaultValues

  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMultiForm);

/***/ }),

/***/ "./hooks/search-hook.js":
/*!******************************!*\
  !*** ./hooks/search-hook.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useSearch = () => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: filters,
    1: setFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFilters,
    1: setSelectedFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const inputChangeHandler = event => {
    setValue(event.target.value);
  };

  const initValue = value => {
    setValue(value);
  };

  const openToggle = () => {
    setIsOpen(!isOpen);
  };

  const initFilters = filters => {
    setFilters(filters);
  };

  const filterHandler = id => {
    const filtersCopy = [...filters];
    const selectedFiltersCopy = [...selectedFilters];
    const alreadySelectedFilter = selectedFiltersCopy.find(f => {
      return f.id === id;
    });

    if (alreadySelectedFilter) {
      return;
    }

    const filter = filtersCopy.find(f => {
      return f.id === id;
    });
    selectedFiltersCopy.push(filter);
    setSelectedFilters(selectedFiltersCopy);
  };

  const removeSelectedFilterHandler = id => {
    const selectedFiltersCopy = [...selectedFilters];
    const updatedSelectedFilters = selectedFiltersCopy.filter(f => {
      return f.id !== id;
    });
    setSelectedFilters(updatedSelectedFilters);
  };

  return {
    value,
    filters,
    selectedFilters,
    isOpen,
    onChange: inputChangeHandler,
    onInitValue: initValue,
    openToggle,
    initFilters,
    onClickFilter: filterHandler,
    onRemoveFilter: removeSelectedFilterHandler
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSearch);

/***/ }),

/***/ "./hooks/select-hook.js":
/*!******************************!*\
  !*** ./hooks/select-hook.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useSelect = () => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: options,
    1: setOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const inputChangeHandler = event => {
    setValue(event.target.value);
  };

  const initValue = value => {
    setValue(value);
  };

  const initOptions = opts => {
    setOptions(opts);
  };

  return {
    value,
    options,
    onChange: inputChangeHandler,
    onInitValue: initValue,
    onInitOptions: initOptions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSelect);

/***/ }),

/***/ "./hooks/table-hook.js":
/*!*****************************!*\
  !*** ./hooks/table-hook.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useTable = (isLoading = false) => {
  const {
    0: selectedRows,
    1: setSelectedRows
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const [ rowNumbers, setRowNumbers ] = useState([]);

  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isLoading);

  const rowHandler = (row, isSelected, e) => {
    let array = [...selectedRows];

    if (isSelected) {
      if (isInArray(row)) return;
      array.push(row.id);
    } else {
      array = array.filter(el => {
        return el !== row.id;
      });
    }

    setSelectedRows(array);
  };

  const rowsHandler = (isSelected, rows) => {
    let array = [];

    if (isSelected) {
      for (let row of rows) {
        array.push(row.id);
      }
    }

    setSelectedRows(array);
  };

  const loadingChange = loading => {
    setLoading(loading);
  };

  const clearSelectedRows = () => {
    setSelectedRows([]);
  };

  const isInArray = element => {
    return selectedRows.find(selectedRow => {
      return selectedRow === element.id;
    });
  };

  return {
    selectedRows,
    loading,
    onSelect: rowHandler,
    onSelectAll: rowsHandler,
    onLoading: loadingChange,
    onClearRows: clearSelectedRows
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTable);

/***/ }),

/***/ "./layouts/CategoriesLayout.js":
/*!*************************************!*\
  !*** ./layouts/CategoriesLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\layouts\\CategoriesLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CategoriesLayout = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Categories"], {
    items: getStaticCats(),
    isStatic: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Categories"], {
    items: getCategoryItems(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, props.children));
};

const getStaticCats = () => [{
  id: 0,
  title: "Все",
  icon: "/images/icons/all.png"
}, {
  id: 1,
  title: "Сборники",
  icon: "/images/icons/compilations.png"
}, {
  id: 2,
  title: "Аудиокниги",
  icon: "/images/icons/audio.png"
}, {
  id: 3,
  title: "Печатные книги",
  icon: "/images/icons/book.png"
}, {
  id: 4,
  title: "Электронные книги",
  icon: "/images/icons/pdf.png"
}];

const getCategoryItems = () => [{
  id: 0,
  title: "Деловая литература"
}, {
  id: 1,
  title: "Детективы и Триллеры"
}, {
  id: 2,
  title: "Документальная литература"
}, {
  id: 3,
  title: "Дом, ремесла, досуг, хобби"
}, {
  id: 4,
  title: "Драматургия"
}, {
  id: 5,
  title: "Искусство, Искусствоведение, Дизайн"
}, {
  id: 6,
  title: "Компьютеры и Интернет"
}, {
  id: 7,
  title: "Литература для детей"
}, {
  id: 8,
  title: "Любовные романы"
}, {
  id: 9,
  title: "Наука, Образование"
}, {
  id: 10,
  title: "Поэзия"
}, {
  id: 11,
  title: "Приключения"
}, {
  id: 12,
  title: "Проза"
}, {
  id: 13,
  title: "Прочее"
}, {
  id: 14,
  title: "Религия, духовность, эзотерика"
}, {
  id: 15,
  title: "Справочная литература"
}, {
  id: 16,
  title: "Старинное"
}];

/* harmony default export */ __webpack_exports__["default"] = (CategoriesLayout);

/***/ }),

/***/ "./layouts/Layout.js":
/*!***************************!*\
  !*** ./layouts/Layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_CategoryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/CategoryContext */ "./store/CategoryContext.js");
/* harmony import */ var _hooks___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/ */ "./hooks/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\layouts\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Layout = ({
  children,
  cartCount
}) => {
  const {
    0: isSignUp,
    1: setIsSignUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const authModal = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useModal"])();
  const searchControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])();
  const categoryContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_CategoryContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const nameControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Ф.И.О"
  });
  const emailControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Эл. почта"
  });
  const phoneControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Номер телефона"
  });
  const fPasswordControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Введите пароль",
    type: "password"
  });
  const sPasswordControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Подтвердите пароль",
    type: "password"
  });
  const emailPhoneControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Электронная почта или номер телефона"
  });
  const passwordControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])(false, {
    label: "Введите пароль",
    type: "password"
  });
  const checkboxControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_4__["useForm"])();

  const modeHandler = mode => {
    setIsSignUp(mode);
  };

  const regControls = [nameControl, emailControl, phoneControl, fPasswordControl, sPasswordControl];
  const authControls = [emailPhoneControl, passwordControl];

  const authHandler = event => {
    event.preventDefault();
    console.log("Auth submitted!");
  };

  const booksCategoryHandler = id => {
    categoryContext.categoryHandler(id);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/books");
  };

  const onSearch = event => {
    event.preventDefault();
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 3
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_6__["AuthModal"], {
    controls: [authControls, regControls],
    isSignUp: isSignUp,
    modal: authModal,
    submitted: authHandler,
    modeHandler: modeHandler,
    checkboxControl: checkboxControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, "InStore | \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043D\u0438\u0433 \u0438 \u0432\u0438\u0434\u0435\u043E\u0443\u0440\u043E\u043A\u043E\u0432")), __jsx(_components___WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    cartCount: cartCount,
    search: __jsx(_components___WEBPACK_IMPORTED_MODULE_6__["Search"], {
      control: searchControl,
      onSearch: onSearch,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }),
    authModalShow: authModal.onShow,
    booksCategories: categoryContext.categories,
    booksCategoryClicked: booksCategoryHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }), __jsx("main", {
    className: "pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, children)), __jsx(_components___WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./layouts/ProfileLayout.js":
/*!**********************************!*\
  !*** ./layouts/ProfileLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ */ "./components/index.js");
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\layouts\\ProfileLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProfileLayout = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["NavigationItems"], {
    items: getNavigationItems(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, props.children));
};

const getNavigationItems = () => [{
  id: 0,
  icon: "/images/icons/story.png",
  title: "История заказов: 29",
  href: "/profile/orders"
}, {
  id: 1,
  icon: "/images/icons/video.png",
  title: "Видеоуроки: 19",
  href: "/profile/videolessons"
}, {
  id: 2,
  icon: "/images/icons/book.png",
  title: "Моя библиотека: 10",
  href: "/profile/library"
}, {
  id: 3,
  icon: "/images/icons/star.png",
  title: "Избанные: 4",
  href: "/profile/favourite"
}, {
  id: 4,
  icon: "/images/icons/cart.png",
  title: "Корзина: 3",
  href: "/cart"
}, {
  id: 5,
  icon: "/images/icons/settings.png",
  title: "Настройки",
  href: "/profile/settings",
  className: "mt-auto"
}];

/* harmony default export */ __webpack_exports__["default"] = (ProfileLayout);

/***/ }),

/***/ "./layouts/index.js":
/*!**************************!*\
  !*** ./layouts/index.js ***!
  \**************************/
/*! exports provided: Layout, ProfileLayout, CategoriesLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./layouts/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProfileLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileLayout */ "./layouts/ProfileLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileLayout", function() { return _ProfileLayout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CategoriesLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoriesLayout */ "./layouts/CategoriesLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesLayout", function() { return _CategoriesLayout__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_with_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/with-redux-store */ "./helpers/with-redux-store.js");
/* harmony import */ var _store_CategoryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/CategoryContext */ "./store/CategoryContext.js");
/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/CartContext */ "./store/CartContext.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // import withRedux from "next-redux-wrapper";








 // import { combineReducers, createStore } from "redux";
// import AuthReducer from "../store/reducers/auth";

let _selectedId = 0; // const reducers = combineReducers({
// 	auth: AuthReducer
// });
// const makeStore = (initialState, options) => {
// 	return createStore(AuthReducer, initialState);
// };

const MyComponent = ({
  children
}) => {
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
    imgs: ["/images/icons/all.png", "/images/icons/all-active.png"],
    isActive: true
  }, {
    id: 1,
    title: "Сборники",
    imgs: ["/images/icons/compilations.png", "/images/icons/compilations-active.png"],
    isActive: false
  }, {
    id: 2,
    title: "Аудиокниги",
    imgs: ["/images/icons/audio.png", "/images/icons/audio-active.png"],
    isActive: false
  }, {
    id: 3,
    title: "Печатные книги",
    imgs: ["/images/icons/book.png", "/images/icons/book-active.png"],
    isActive: false
  }, {
    id: 4,
    title: "Электронные книги",
    imgs: ["/images/icons/pdf.png", "/images/icons/pdf-active.png"],
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

  const categoriesClearHandler = () => {
    let cats = [...categories];
    cats.forEach(c => {
      c.isActive = false;
    });
    setCategories(cats);
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

  return __jsx(_store_CartContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      cart,
      onAddRemoveItem: addRemoveItemFromCart,
      onFindInCart: findItemInCart,
      onClearCart: clearCartHandler
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 3
    }
  }, __jsx(_store_CategoryContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      categories,
      categoryHandler,
      onClear: categoriesClearHandler
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 4
    }
  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    cartCount: cart.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, children)));
};

class myApp extends next_app__WEBPACK_IMPORTED_MODULE_10___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 4
      }
    }, __jsx(MyComponent, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 6
      }
    }))));
  }

} // myApp.App = App;
// myApp.getInitialProps = ctx => {
// 	console.log(ctx);
// 	return {};
// };
// myApp.getInitialProps = async ({ Component, ctx }) => {
// 	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
// 	return {
// 		pageProps
// 	};
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_with_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myApp)); // export default withRedux(makeStore)(myApp);

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

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, STOP_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAIL", function() { return AUTH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGOUT", function() { return AUTH_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOADING", function() { return STOP_LOADING; });
const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const STOP_LOADING = "STOP_LOADING";

/***/ }),

/***/ "./store/reducers/auth.js":
/*!********************************!*\
  !*** ./store/reducers/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  token: null,
  name: null,
  error: null,
  loading: true
}; // fill all the parameters of the user

const authSuccess = (state, action) => {
  return _objectSpread({}, state, {
    token: action.token,
    name: action.name,
    error: null,
    loading: false
  });
}; // error


const authFail = (state, action) => {
  return _objectSpread({}, state, {
    loading: false,
    error: action.error
  });
}; //clear error in global user state


const authStart = (state, action) => {
  return _objectSpread({}, state, {
    loading: true,
    error: null
  });
}; // clear everything


const authLogout = (state, action) => {
  return _objectSpread({}, state, {
    token: null,
    name: null,
    error: null,
    loading: false
  });
};

const stopLoading = (state, action) => {
  return _objectSpread({}, state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_START"]:
      return authStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return authSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAIL"]:
      return authFail(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]:
      return authLogout(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING"]:
      return stopLoading(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/auth */ "./store/reducers/auth.js");




/* harmony default export */ __webpack_exports__["default"] = (initialState => {
  const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a))); // if reducers were changed, reload with initial state

  if (false) {}

  return store;
});

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map