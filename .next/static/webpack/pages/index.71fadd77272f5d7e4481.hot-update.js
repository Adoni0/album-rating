webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ \"./node_modules/@material-ui/icons/Search.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ \"./node_modules/@material-ui/core/esm/Link/index.js\");\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/sport-hub/pages/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    toolbar: {\n      borderBottom: \"1px solid \".concat(theme.palette.divider)\n    },\n    toolbarTitle: {\n      flex: 1\n    },\n    toolbarSecondary: {\n      justifyContent: 'space-between',\n      overflowX: 'auto'\n    },\n    toolbarLink: {\n      padding: theme.spacing(1),\n      flexShrink: 0\n    }\n  };\n});\nfunction Header(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n  var sections = props.sections,\n      title = props.title;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.toolbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"My Queue\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    component: \"h2\",\n    variant: \"h5\",\n    color: \"inherit\",\n    align: \"center\",\n    noWrap: true,\n    className: classes.toolbarTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, title), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"outlined\",\n    size: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"Sign up\")), __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    component: \"nav\",\n    variant: \"dense\",\n    className: classes.toolbarSecondary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, sections.map(function (section) {\n    return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      color: \"inherit\",\n      noWrap: true,\n      key: section.title,\n      variant: \"body2\",\n      href: section.url,\n      className: classes.toolbarLink,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, section.title);\n  })));\n}\n\n_s(Header, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Header;\nHeader.propTypes = {\n  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSGVhZGVyLmpzPzY1YTEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9vbGJhciIsImJvcmRlckJvdHRvbSIsInBhbGV0dGUiLCJkaXZpZGVyIiwidG9vbGJhclRpdGxlIiwiZmxleCIsInRvb2xiYXJTZWNvbmRhcnkiLCJqdXN0aWZ5Q29udGVudCIsIm92ZXJmbG93WCIsInRvb2xiYXJMaW5rIiwicGFkZGluZyIsInNwYWNpbmciLCJmbGV4U2hyaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwic2VjdGlvbnMiLCJ0aXRsZSIsIm1hcCIsInNlY3Rpb24iLCJ1cmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxXQUFPLEVBQUU7QUFDUEMsa0JBQVksc0JBQWVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUE3QjtBQURMLEtBRDhCO0FBSXZDQyxnQkFBWSxFQUFFO0FBQ1pDLFVBQUksRUFBRTtBQURNLEtBSnlCO0FBT3ZDQyxvQkFBZ0IsRUFBRTtBQUNoQkMsb0JBQWMsRUFBRSxlQURBO0FBRWhCQyxlQUFTLEVBQUU7QUFGSyxLQVBxQjtBQVd2Q0MsZUFBVyxFQUFFO0FBQ1hDLGFBQU8sRUFBRVgsS0FBSyxDQUFDWSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVhDLGdCQUFVLEVBQUU7QUFGRDtBQVgwQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWlCZSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBOztBQUNwQyxNQUFNQyxPQUFPLEdBQUdsQixTQUFTLEVBQXpCO0FBRG9DLE1BRTVCbUIsUUFGNEIsR0FFUkYsS0FGUSxDQUU1QkUsUUFGNEI7QUFBQSxNQUVsQkMsS0FGa0IsR0FFUkgsS0FGUSxDQUVsQkcsS0FGa0I7QUFJcEMsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFTLGFBQVMsRUFBRUYsT0FBTyxDQUFDZixPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxFQUFDLElBRFo7QUFFRSxXQUFPLEVBQUMsSUFGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsU0FBSyxFQUFDLFFBSlI7QUFLRSxVQUFNLE1BTFI7QUFNRSxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1gsWUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHYSxLQVJILENBRkYsRUFZRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVpGLEVBZUUsTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixRQUFJLEVBQUMsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLENBREYsRUFvQkUsTUFBQyxpRUFBRDtBQUFTLGFBQVMsRUFBQyxLQUFuQjtBQUF5QixXQUFPLEVBQUMsT0FBakM7QUFBeUMsYUFBUyxFQUFFRixPQUFPLENBQUNULGdCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dVLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSxXQUNaLE1BQUMsOERBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLFlBQU0sTUFGUjtBQUdFLFNBQUcsRUFBRUEsT0FBTyxDQUFDRixLQUhmO0FBSUUsYUFBTyxFQUFDLE9BSlY7QUFLRSxVQUFJLEVBQUVFLE9BQU8sQ0FBQ0MsR0FMaEI7QUFNRSxlQUFTLEVBQUVMLE9BQU8sQ0FBQ04sV0FOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFHVSxPQUFPLENBQUNGLEtBUlgsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQXBCRixDQURGO0FBcUNEOztHQXpDdUJKLE07VUFDTmhCLFM7OztLQURNZ0IsTTtBQTJDeEJBLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQjtBQUNqQkwsVUFBUSxFQUFFTSxpREFBUyxDQUFDQyxLQURIO0FBRWpCTixPQUFLLEVBQUVLLGlEQUFTLENBQUNFO0FBRkEsQ0FBbkIiLCJmaWxlIjoiLi9wYWdlcy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2xiYXI6IHtcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgfSxcbiAgdG9vbGJhclRpdGxlOiB7XG4gICAgZmxleDogMSxcbiAgfSxcbiAgdG9vbGJhclNlY29uZGFyeToge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gIH0sXG4gIHRvb2xiYXJMaW5rOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHNlY3Rpb25zLCB0aXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+TXkgUXVldWU8L0J1dHRvbj5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXG4gICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBub1dyYXBcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclRpdGxlfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICBTaWduIHVwXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Ub29sYmFyPlxuICAgICAgPFRvb2xiYXIgY29tcG9uZW50PVwibmF2XCIgdmFyaWFudD1cImRlbnNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJTZWNvbmRhcnl9PlxuICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgIGtleT17c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICBocmVmPXtzZWN0aW9uLnVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Header.js\n");

/***/ })

})