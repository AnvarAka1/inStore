webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ProductDetails/ProductDetails.js":
/*!*****************************************************!*\
  !*** ./components/ProductDetails/ProductDetails.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.module.scss */ "./components/ProductDetails/ProductDetails.module.scss");
/* harmony import */ var _ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ProductDetails\\ProductDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var productDetails = function productDetails(props) {
  var rows = [["ID товара: ", props.book_id], ["ISBN: ", props.isbn], ["Страниц: ", props.page_count], ["Оформление: ", props.formalization], ["Иллюстрации: ", props.illustration], ["Масса: ", props.mass], ["Размеры: ", props.size], ["Подробнее: ", props.link]];
  return __jsx("div", {
    className: _ProductDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ProductDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: props.image,
    alt: props.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "d-flex align-items-center mt-4 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("h4", {
    className: "mb-0 mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043D\u0438\u0433\u0438"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Stars"], {
    rate: Math.round(props.rate),
    isBig: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  })), __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, rows.map(function (row, index) {
    return __jsx("tr", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, row[0]), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, row[1]));
  }))), __jsx("div", {
    className: "d-flex justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F:"), __jsx("ul", {
    className: "d-flex justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, getSocials().map(function (social) {
    return __jsx("li", {
      key: social.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: social.href,
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }
    }, __jsx("img", {
      src: social.image,
      alt: "social",
      className: "icon icon-md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    })));
  }))));
};

var getSocials = function getSocials() {
  return [{
    id: 0,
    href: "https://facebook.com/",
    image: "/images/icons/social/fb.png"
  }, {
    id: 1,
    href: "https://ok.ru/",
    image: "/images/icons/social/ok.png"
  }, {
    id: 2,
    href: "https://vk.com/",
    image: "/images/icons/social/vk.png"
  }, {
    id: 3,
    href: "https://twitter.com/",
    image: "/images/icons/social/twitter.png"
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (productDetails);

/***/ })

})
//# sourceMappingURL=_app.js.1cb2742fb355f23fb955.hot-update.js.map