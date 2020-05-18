webpackHotUpdate("static\\development\\pages\\cart\\order.js",{

/***/ "./components/AuthModal/AuthModal.js":
/*!*******************************************!*\
  !*** ./components/AuthModal/AuthModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthModal.module.scss */ "./components/AuthModal/AuthModal.module.scss");
/* harmony import */ var _AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./components/index.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI */ "./components/UI/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\components\\AuthModal\\AuthModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var authModal = function authModal(_ref) {
  var modal = _ref.modal,
      login = _ref.login,
      register = _ref.register,
      onHide = _ref.onHide,
      isSignUp = _ref.isSignUp,
      modeHandler = _ref.modeHandler,
      controls = _ref.controls,
      submitted = _ref.submitted,
      checkboxControl = _ref.checkboxControl;
  var titles = ["Авторизация", "Регистрация"];
  var texts = ["У вас еще нет аккаунта? Пройдите ", "У вас имеется аккаунт? "];
  var actions = ["Регистрацию", "Войдите"];

  var text = __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, texts[+isSignUp], __jsx("span", {
    className: "text-accent",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return modeHandler(isSignUp ? false : true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, actions[+isSignUp]));

  return __jsx(___WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    modal: modal,
    size: "lg",
    onHide: onHide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-center ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, titles[+isSignUp]), text, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: submitted,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }, __jsx(_UI__WEBPACK_IMPORTED_MODULE_5__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "name"
  }, login.getFieldProps("name"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), "\u0424.\u0418.\u041E"), __jsx(_UI__WEBPACK_IMPORTED_MODULE_5__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "email"
  }, login.getFieldProps("email"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430"), __jsx(_UI__WEBPACK_IMPORTED_MODULE_5__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "fPassword"
  }, login.getFieldProps("fPassword"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_UI__WEBPACK_IMPORTED_MODULE_5__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "sPassword"
  }, login.getFieldProps("sPassword"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), !isSignUp && __jsx(FormGroup, {
    controlId: "formBasicCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 12
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Form"].Check, {
    type: "checkbox",
    label: "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    value: checkboxControl.value,
    onChange: checkboxControl.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    className: "float-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, isSignUp ? "Зарегистрироваться" : "Войти"), !isSignUp && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "\u041D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F?")))))), __jsx("div", {
    className: "".concat(_AuthModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Social, " w-100"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "text-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }
  }, isSignUp ? "Регистрация" : "Авторизация", " \u0447\u0435\u0440\u0435\u0437:"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (authModal);

/***/ })

})
//# sourceMappingURL=order.js.c454d495b804b818fc66.hot-update.js.map