webpackHotUpdate_N_E("pages/music/[id]",{

/***/ "./components/AlbumRatings.js":
/*!************************************!*\
  !*** ./components/AlbumRatings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlbumRatings; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Rating */ \"./node_modules/@material-ui/lab/esm/Rating/index.js\");\n/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ \"./node_modules/@material-ui/icons/StarBorder.js\");\n/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n\n\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/AlbumRatings.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction IconContainer(props) {\n  var value = props.value,\n      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"value\"]);\n\n  return __jsx(\"span\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, other, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }), customIcons[value].icon);\n}\n\n_c = IconContainer;\nIconContainer.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired\n};\nfunction AlbumRatings() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    component: \"fieldset\",\n    mb: 3,\n    borderColor: \"transparent\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    component: \"legend\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Rate Me!\"), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    name: \"customized-empty\",\n    defaultValue: 2,\n    precision: 0.5,\n    emptyIcon: __jsx(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      fontSize: \"inherit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 22\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })));\n}\n_c2 = AlbumRatings;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"IconContainer\");\n$RefreshReg$(_c2, \"AlbumRatings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGJ1bVJhdGluZ3MuanM/Njk4MiJdLCJuYW1lcyI6WyJJY29uQ29udGFpbmVyIiwicHJvcHMiLCJ2YWx1ZSIsIm90aGVyIiwiY3VzdG9tSWNvbnMiLCJpY29uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIkFsYnVtUmF0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQSxNQUNwQkMsS0FEb0IsR0FDQUQsS0FEQSxDQUNwQkMsS0FEb0I7QUFBQSxNQUNWQyxLQURVLHNHQUNBRixLQURBOztBQUU1QixTQUFPLHFHQUFVRSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBa0JDLFdBQVcsQ0FBQ0YsS0FBRCxDQUFYLENBQW1CRyxJQUFyQyxDQUFQO0FBQ0Q7O0tBSFFMLGE7QUFLVEEsYUFBYSxDQUFDTSxTQUFkLEdBQTBCO0FBQ3hCSixPQUFLLEVBQUVLLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREEsQ0FBMUI7QUFJZSxTQUFTQyxZQUFULEdBQXdCO0FBQ3JDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixNQUFFLEVBQUUsQ0FBOUI7QUFBaUMsZUFBVyxFQUFDLGFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLCtEQUFEO0FBQ0UsUUFBSSxFQUFDLGtCQURQO0FBRUUsZ0JBQVksRUFBRSxDQUZoQjtBQUdFLGFBQVMsRUFBRSxHQUhiO0FBSUUsYUFBUyxFQUFFLE1BQUMsb0VBQUQ7QUFBZ0IsY0FBUSxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBY0Q7TUFmdUJBLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsYnVtUmF0aW5ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcbmltcG9ydCBTdGFyQm9yZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcblxuXG5mdW5jdGlvbiBJY29uQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgdmFsdWUsIC4uLm90aGVyIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxzcGFuIHsuLi5vdGhlcn0+e2N1c3RvbUljb25zW3ZhbHVlXS5pY29ufTwvc3Bhbj47XG59XG5cbkljb25Db250YWluZXIucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxidW1SYXRpbmdzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cImZpZWxkc2V0XCIgbWI9ezN9IGJvcmRlckNvbG9yPVwidHJhbnNwYXJlbnRcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGVnZW5kXCI+UmF0ZSBNZSE8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxSYXRpbmdcbiAgICAgICAgICBuYW1lPVwiY3VzdG9taXplZC1lbXB0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsyfVxuICAgICAgICAgIHByZWNpc2lvbj17MC41fVxuICAgICAgICAgIGVtcHR5SWNvbj17PFN0YXJCb3JkZXJJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AlbumRatings.js\n");

/***/ })

})