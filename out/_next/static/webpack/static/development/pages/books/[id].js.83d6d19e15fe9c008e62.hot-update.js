webpackHotUpdate("static\\development\\pages\\books\\[id].js",{

/***/ "./components/Comments/Comments.js":
/*!*****************************************!*\
  !*** ./components/Comments/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Comments_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comments.module.scss */ "./components/Comments/Comments.module.scss");
/* harmony import */ var _Comments_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Comments_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment/Comment */ "./components/Comments/Comment/Comment.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./components/index.js");


var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\Comments\\Comments.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var comments = function comments(_ref) {
  var items = _ref.items,
      rate = _ref.rate,
      commentControl = _ref.commentControl,
      isAuthorized = _ref.isAuthorized,
      rateClicked = _ref.rateClicked,
      onSubmit = _ref.onSubmit,
      onAuth = _ref.onAuth;
  var commentsView = items.map(function (item) {
    return __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.id
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 41
      }
    }));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "mt-5 mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432"), isAuthorized ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "textarea",
    value: commentControl.value,
    onChange: commentControl.onChange,
    placeholder: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }), __jsx("div", {
    className: "d-flex justify-content-between align-items-center mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_5__["Stars"], {
    rate: rate,
    isBig: true,
    onClick: rateClicked,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    className: "text-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))) : __jsx("div", {
    className: "mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, "\u041E\u0442\u0437\u044B\u0432 \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438. ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 57
    }
  }), "\u041F\u0440\u043E\u0439\u0442\u0438 ", " ", __jsx("span", {
    className: "text-accent text-bold",
    style: {
      cursor: "pointer"
    },
    onClick: onAuth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, "\u0410\u0412\u0422\u041E\u0420\u0418\u0417\u0410\u0426\u0418\u042E")), __jsx("h3", {
    className: "mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, "\u041E\u0442\u0437\u044B\u0432\u044B"), items.length ? __jsx("ul", {
    className: "".concat(_Comments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Comments, " ").concat(items.length > 3 && _Comments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.BottomBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, commentsView) : __jsx("h5", {
    className: "text-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043E\u0442\u0437\u044B\u0432\u043E\u0432"));
};

/* harmony default export */ __webpack_exports__["default"] = (comments);

/***/ })

})
//# sourceMappingURL=[id].js.83d6d19e15fe9c008e62.hot-update.js.map