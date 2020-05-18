webpackHotUpdate("static\\development\\pages\\books\\[id].js",{

/***/ "./components/ProductDescription/ProductDescription.js":
/*!*************************************************************!*\
  !*** ./components/ProductDescription/ProductDescription.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDescription.module.scss */ "./components/ProductDescription/ProductDescription.module.scss");
/* harmony import */ var _ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\ProductDescription\\ProductDescription.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MAX_LENGTH = 5;

var productDescription = function productDescription(_ref) {
  var publish_year = _ref.publish_year,
      title = _ref.title,
      author = _ref.author,
      book_type = _ref.book_type,
      description = _ref.description,
      price = _ref.price,
      current_price = _ref.current_price,
      isInCart = _ref.isInCart,
      cartClicked = _ref.cartClicked,
      favouriteClicked = _ref.favouriteClicked,
      in_favourites = _ref.in_favourites,
      isAuthorized = _ref.isAuthorized,
      isDescriptionExpanded = _ref.isDescriptionExpanded,
      expandDescription = _ref.expandDescription,
      book_format = _ref.book_format;
  var bookTypes = ["Аудиокнига", "Печатное издание", "Электронная книга"];

  var getDiscount = function getDiscount() {
    return ((1 - current_price / price) * 100).toFixed(2);
  };

  var desc = description;

  if (desc.length > MAX_LENGTH) {
    desc = !isDescriptionExpanded ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }
    }, description.substr(0, MAX_LENGTH), __jsx("a", {
      role: "button",
      className: "text-accent ml-2",
      style: {
        cursor: "pointer"
      },
      onClick: expandDescription,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \xBB")) : description;
  }

  return __jsx("div", {
    className: _ProductDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProductDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, publish_year), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, title), __jsx("div", {
    className: "d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, __jsx("h4", {
    className: "text-secondary mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, author), __jsx("div", {
    className: "d-flex ml-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, isAuthorized && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: favouriteClicked,
    className: "text-small mr-2",
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/images/icons/star.png",
    className: "icon mr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), in_favourites ? "Убрать из избранного" : "Избранное")), __jsx("p", {
    className: "text-small btn btn-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, book_format || bookTypes[+book_type - 1]))), __jsx("p", {
    className: "text-md mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u043A\u043D\u0438\u0433\u0435 \"", title, "\"")), __jsx("p", {
    className: "text-md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, desc), __jsx("div", {
    className: "d-flex justify-content-between align-items-end mt-2 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }, __jsx("h2", {
    className: "mb-0 text-accent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, current_price, " \u0441\u0443\u043C"), __jsx("div", {
    className: "d-flex align-items-end ml-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "text-crossed text-small text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, price, " \u0441\u0443\u043C"), __jsx("p", {
    className: "btn btn-primary text-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, getDiscount(), "% \u0421\u043A\u0438\u0434\u043A\u0430")), +book_type === 3 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: null,
    className: "text-small ml-2",
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "\u0427\u0438\u0442\u0430\u0442\u044C \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: cartClicked,
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/images/icons/cart-white.png",
    className: "icon icon-sm mr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }), isInCart ? "Удалить из корзины" : "Добавить в корзину"));
};

/* harmony default export */ __webpack_exports__["default"] = (productDescription);

/***/ })

})
//# sourceMappingURL=[id].js.efb932de78ffc83576b9.hot-update.js.map