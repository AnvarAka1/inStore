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
    className: "d-flex align-items-center mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("h3", {
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
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (productDetails);

/***/ })

})
//# sourceMappingURL=_app.js.0153604702ce0457b0dc.hot-update.js.map