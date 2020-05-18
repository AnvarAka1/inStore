webpackHotUpdate("static\\development\\pages\\cart\\order.js",{

/***/ "./layouts/Layout.js":
/*!***************************!*\
  !*** ./layouts/Layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/index */ "./store/actions/index.js");
/* harmony import */ var _lib_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/categories */ "./lib/categories.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/ */ "./hooks/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ */ "./components/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\layouts\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Layout = function Layout(_ref) {
  var children = _ref.children,
      cartCount = _ref.cartCount,
      onAuth = _ref.onAuth,
      onLogout = _ref.onLogout,
      isAuthorized = _ref.isAuthorized,
      name = _ref.name;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isSignUp = _useState[0],
      setIsSignUp = _useState[1]; // const formikRegister = useFormik({
  // 	initialValues: {
  // 		name: "",
  // 		email: "",
  // 		phone: "",
  // 		fPassword: "",
  // 		sPassword: ""
  // 	},
  // 	validationSchema: object({
  // 		name: string().min(2).required(),
  // 		email: string().email().min(4).required(),
  // 		phone: string().min(9).max(9).required(),
  // 		fPassword: string().min(6).max(20).required(),
  // 		sPassword: string().min(6).max(20).required()
  // 	}),
  // 	onSubmit: values => {
  // 		onAuth(values.name, values.email, values.phone, values.fPassword, isSignUp);
  // 	}
  // });
  // const formikLogin = useFormik({
  // 	initialValues: {
  // 		emailPhone: "",
  // 		password: "",
  // 		checkbox: ""
  // 	},
  // 	validationSchema: object({
  // 		emailPhone: string().min(2).required(),
  // 		password: string().email().min(4).required(),
  // 		checkbox: string().min(9).max(9).required()
  // 	}),
  // 	onSubmit: values => {
  // 		onAuth(null, values.emailPhone, null, values.password, isSignUp);
  // 	}
  // });


  var authModalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_5__["AuthModalContext"]);
  var nameControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Ф.И.О"
  });
  var emailControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Эл. почта"
  });
  var phoneControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Номер телефона"
  });
  var fPasswordControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Введите пароль",
    type: "password"
  });
  var sPasswordControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Подтвердите пароль",
    type: "password"
  });
  var emailPhoneControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Электронная почта или номер телефона"
  });
  var passwordControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])(false, {
    label: "Введите пароль",
    type: "password"
  });
  var checkboxControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])();
  var searchControl = Object(_hooks___WEBPACK_IMPORTED_MODULE_7__["useForm"])();
  var regControls = [nameControl, emailControl, phoneControl, fPasswordControl, sPasswordControl];
  var authControls = [emailPhoneControl, passwordControl];

  var modeHandler = function modeHandler(mode) {
    setIsSignUp(mode);
  };

  var authHandler = function authHandler(event) {
    event.preventDefault();
    onAuth(nameControl.value, isSignUp ? emailControl.value : emailPhoneControl.value, phoneControl.value, isSignUp ? fPasswordControl.value : passwordControl.value, isSignUp);
    console.log("Auth submitted!");
  };

  var onSearch = function onSearch(event) {
    event.preventDefault();
    searchControl.clear();
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/search?q=".concat(encodeURI(searchControl.value)));
  };

  var search = __jsx(_components___WEBPACK_IMPORTED_MODULE_11__["Search"], {
    control: searchControl,
    onSearch: onSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }); // Right side of navbar with cart, login/logout


  var navItems = __jsx(_components___WEBPACK_IMPORTED_MODULE_11__["NavItems"], {
    name: name,
    authModalShow: authModalContext.authModal.onShow,
    cartCount: cartCount,
    isAuthorized: isAuthorized,
    onLogout: onLogout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 3
    }
  });

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, "InStore | \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043D\u0438\u0433 \u0438 \u0432\u0438\u0434\u0435\u043E\u0443\u0440\u043E\u043A\u043E\u0432")), __jsx(_components___WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
    name: name,
    isAuthorized: isAuthorized,
    cartCount: cartCount,
    search: search,
    booksCategories: Object(_lib_categories__WEBPACK_IMPORTED_MODULE_3__["getStaticCategories"])(),
    navItems: navItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 4
    }
  }), __jsx("main", {
    className: "pt-4 page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, children)), __jsx(_components___WEBPACK_IMPORTED_MODULE_11__["Footer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthorized: state.auth.token !== null,
    name: state.auth.name
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAuth: function onAuth(name, email, phone, password, isSignup) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["auth"](name, email, phone, password, isSignup));
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_2__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ })

})
//# sourceMappingURL=order.js.673ef6a09c8d0461250f.hot-update.js.map