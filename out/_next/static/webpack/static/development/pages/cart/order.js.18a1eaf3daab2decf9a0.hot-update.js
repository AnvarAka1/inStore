webpackHotUpdate("static\\development\\pages\\cart\\order.js",{

/***/ "./pages/cart/order/index.js":
/*!***********************************!*\
  !*** ./pages/cart/order/index.js ***!
  \***********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_locations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/locations */ "./lib/locations.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI */ "./components/UI/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts */ "./layouts/index.js");


var _this = undefined,
    _jsxFileName = "D:\\Anvar\\Projects\\React\\React.js\\inStore\\pages\\cart\\order\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var OrderPage = function OrderPage(props) {
  var _props$profile, _props$profile2, _props$profile3, _props$profile4;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showInputMask = _useState[0],
      setShowInputMask = _useState[1];

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      phone: ((_props$profile = props.profile) === null || _props$profile === void 0 ? void 0 : _props$profile.phone) || "",
      lastName: ((_props$profile2 = props.profile) === null || _props$profile2 === void 0 ? void 0 : _props$profile2.fio) || "",
      firstName: ((_props$profile3 = props.profile) === null || _props$profile3 === void 0 ? void 0 : _props$profile3.fio) || "",
      email: ((_props$profile4 = props.profile) === null || _props$profile4 === void 0 ? void 0 : _props$profile4.email) || "",
      city: "",
      district: "",
      street: "",
      house: "",
      address: "",
      comment: ""
    },
    validationSchema: Object(yup__WEBPACK_IMPORTED_MODULE_5__["object"])({
      phone: Object(yup__WEBPACK_IMPORTED_MODULE_5__["string"])().min(2, "Имя должно содержать минимум 2 буквы").max(100, "Name is too long").required("Name is required!"),
      lastName: Object(yup__WEBPACK_IMPORTED_MODULE_5__["string"])().required("*Email is required"),
      street: Object(yup__WEBPACK_IMPORTED_MODULE_5__["string"])()
    }),
    onSubmit: function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
      console.log("Hey!");
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setShowInputMask(true);
  }, []);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 2
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__["CartLayout"], {
    isOrderPage: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, "\u041D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430*"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  }, showInputMask && __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "form-control form-control-sm mt-3",
    mask: "+\\9\\98 (99) 999-99-99",
    name: "phone",
    placeholder: "+998 (__) ___-__-__",
    alwaysShowMask: true,
    value: formik.getFieldProps("phone").value,
    onChange: formik.getFieldProps("phone").onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u0410\u042F \u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  }, __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "lastName"
  }, formik.getFieldProps("lastName"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), "\u0424\u0430\u043C\u0438\u043B\u0438\u044F*"), __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "firstName"
  }, formik.getFieldProps("firstName"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), "\u0418\u043C\u044F*"), __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "email"
  }, formik.getFieldProps("email"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430 (\u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u043B. \u0432\u0435\u0440\u0441\u0438\u0438)"))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 10
    }
  }, "\u0421\u041F\u041E\u0421\u041E\u0411 \u041E\u041F\u041B\u0410\u0422\u042B"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 10
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 12
    }
  }, "\u041D\u0410\u041B\u0418\u0427\u041D\u042B\u0415 \u0414\u0415\u041D\u042C\u0413\u0418"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }
  }, "\u041F\u041B\u0410\u0421\u0422\u0418\u041A\u041E\u0412\u0410\u042F \u041A\u0410\u0420\u0422\u0410")), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"), __jsx("ul", {
    className: "flex-columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, getImages().map(function (image, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 14
      }
    }, __jsx("img", {
      src: image,
      alt: "payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }));
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 8
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 10
    }
  }, "\u0410\u0414\u0420\u0415\u0421 \u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0418"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }
  }, __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "city",
    as: "select",
    options: null
  }, formik.getFieldProps("city"), {
    size: "sm",
    options: Object(_lib_locations__WEBPACK_IMPORTED_MODULE_3__["cities"])(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434*"), __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "district",
    as: "select",
    options: null
  }, formik.getFieldProps("district"), {
    size: "sm",
    options: Object(_lib_locations__WEBPACK_IMPORTED_MODULE_3__["districts"])(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }), "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0439\u043E\u043D*"), __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "street"
  }, formik.getFieldProps("street"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), "\u0423\u043B\u0438\u0446\u0430*"), __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "house"
  }, formik.getFieldProps("house"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), "\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430*"), __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "address"
  }, formik.getFieldProps("address"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }), "\u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u041A\u0412\u0410\u0420\u0422\u0410\u041B-\u0414\u041E\u041C-\u041A\u0412\u0410\u0420\u0422\u0418\u0420\u0410"))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 10
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 10
    }
  }, __jsx(_components_UI__WEBPACK_IMPORTED_MODULE_6__["FormikGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "comment",
    as: "textarea",
    placeholder: "\u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440, \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0438 \u0442.\u0434"
  }, formik.getFieldProps("comment"), {
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }), "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"))))))));
};

var getImages = function getImages() {
  return ["/images/payment/payme.png", "/images/payment/uzcard.png", "/images/payment/click.png", "/images/payment/humo.png", "/images/payment/visa.png", "/images/payment/paynet.png"];
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (OrderPage);

/***/ })

})
//# sourceMappingURL=order.js.18a1eaf3daab2decf9a0.hot-update.js.map