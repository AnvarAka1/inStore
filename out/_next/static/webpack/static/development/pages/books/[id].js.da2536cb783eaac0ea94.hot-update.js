webpackHotUpdate("static\\development\\pages\\books\\[id].js",{

/***/ "./pages/books/[id].js":
/*!*****************************!*\
  !*** ./pages/books/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/utils */ "./helpers/utils.js");
/* harmony import */ var _axios_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../axios-api */ "./axios-api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ */ "./components/index.js");



var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\pages\\books\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var BookPage = function BookPage(_ref) {
  var bookProps = _ref.bookProps,
      isAuthorized = _ref.isAuthorized;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(bookProps),
      book = _useState[0],
      setBook = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      rate = _useState2[0],
      setRate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDescriptionExpanded = _useState3[0],
      setIsDescriptionExpanded = _useState3[1];

  var cartContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_7__["CartContext"]);
  var authModalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_7__["AuthModalContext"]);
  var commentControl = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useForm"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setBook(bookProps);
  }, [bookProps]);

  var expandDescription = function expandDescription() {
    setIsDescriptionExpanded(true);
  };

  var commentSubmitHandler = function commentSubmitHandler(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("rate", rate);
    formData.append("text", commentControl.value);
    _axios_api__WEBPACK_IMPORTED_MODULE_4__["default"].post("books/".concat(book.id, "/feedback"), formData, {
      headers: {
        Authorization: "Bearer ".concat(Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["parseCookies"])(null).token)
      }
    }).then(function (res) {
      commentControl.clear;
      return _axios_api__WEBPACK_IMPORTED_MODULE_4__["default"].get("books/" + book.id);
    }).then(function (res) {
      setBook(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  var favouriteHandler = function favouriteHandler() {
    _axios_api__WEBPACK_IMPORTED_MODULE_4__["default"].post("profile/favourites/".concat(book.id), null, {
      headers: {
        Authorization: "Bearer ".concat(Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["parseCookies"])(null).token)
      }
    }).then(function (res) {
      var bookCopy = _objectSpread({}, book, {
        in_favourites: !book.in_favourites
      });

      setBook(bookCopy);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var rateHandler = function rateHandler(id) {
    setRate(id + 1);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_9__["ProductDetails"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, book, {
    social: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    md: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_9__["ProductDescription"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, book, {
    expandDescription: expandDescription,
    isDescriptionExpanded: isDescriptionExpanded,
    cartClicked: function cartClicked() {
      return cartContext.onAddRemoveItem(book);
    },
    isInCart: cartContext.onFindInCart(book.id),
    favouriteClicked: favouriteHandler,
    isAuthorized: isAuthorized,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  })), __jsx(_components___WEBPACK_IMPORTED_MODULE_9__["Comments"], {
    items: book.feedback,
    rate: rate,
    onSubmit: commentSubmitHandler,
    commentControl: commentControl,
    rateClicked: rateHandler,
    onAuth: authModalContext.authModal.onShow,
    isAuthorized: isAuthorized,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }))), __jsx("h3", {
    className: "mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, "\u0422\u0430\u043A\u0436\u0435 \u0432\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C"), __jsx(_components___WEBPACK_IMPORTED_MODULE_9__["ProductsCarousel"], {
    items: book.related,
    responsive: {
      lg: 4
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthorized: state.auth.token !== null
  };
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(BookPage));

/***/ })

})
//# sourceMappingURL=[id].js.da2536cb783eaac0ea94.hot-update.js.map