webpackHotUpdate_N_E("pages/NFL",{

/***/ "./components/TemporaryDrawer.js":
/*!***************************************!*\
  !*** ./components/TemporaryDrawer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TemporaryDrawer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/SportsFootball */ \"./node_modules/@material-ui/icons/SportsFootball.js\");\n/* harmony import */ var _material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ \"./node_modules/@material-ui/icons/ExitToApp.js\");\n/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);\n\n\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/sport-hub/components/TemporaryDrawer.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  list: {\n    width: 250\n  },\n  fullList: {\n    width: 'auto'\n  }\n});\nfunction TemporaryDrawer() {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      drawer = _useState[0],\n      setDrawer = _useState[1];\n\n  var toggleDrawer = function toggleDrawer(open) {\n    return function (event) {\n      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {\n        return;\n      }\n\n      setDrawer(open);\n    };\n  };\n\n  var list = function list(anchor) {\n    return __jsx(\"div\", {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(classes.list, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, classes.fullList, anchor === 'bottom')),\n      role: \"presentation\",\n      onClick: toggleDrawer(anchor, false),\n      onKeyDown: toggleDrawer(anchor, false),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }\n    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 7\n      }\n    }, \"['NFL Articles', 'NFL Videos', 'Back to Home']\", __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      button: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_11___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 27\n      }\n    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      primary: 'NFL Articles',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      button: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }\n    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_11___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 27\n      }\n    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      primary: 'NFL Articles',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }));\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: toggleDrawer(true),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 85\n    }\n  })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    anchor: \"bottom\",\n    open: drawer,\n    onClose: toggleDrawer(false),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, list('bottom')));\n}\n\n_s(TemporaryDrawer, \"jBQZrsXBRo2LWu8wXxcQdUDvbpM=\", false, function () {\n  return [useStyles];\n});\n\n_c = TemporaryDrawer;\n\nvar _c;\n\n$RefreshReg$(_c, \"TemporaryDrawer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wb3JhcnlEcmF3ZXIuanM/OTI1MiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwibGlzdCIsIndpZHRoIiwiZnVsbExpc3QiLCJUZW1wb3JhcnlEcmF3ZXIiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJ0b2dnbGVEcmF3ZXIiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiYW5jaG9yIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQURILEdBRHFCO0FBSTNCQyxVQUFRLEVBQUU7QUFDUkQsU0FBSyxFQUFFO0FBREM7QUFKaUIsQ0FBRCxDQUE1QjtBQVNlLFNBQVNFLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsT0FBTyxHQUFHTixTQUFTLEVBQXpCOztBQUR3QyxrQkFFWk8sc0RBQVEsQ0FBQyxLQUFELENBRkk7QUFBQSxNQUVqQ0MsTUFGaUM7QUFBQSxNQUV6QkMsU0FGeUI7O0FBSXhDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQ7QUFBQSxXQUFVLFVBQUNDLEtBQUQsRUFBVztBQUN4QyxVQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZSxTQUFmLEtBQTZCRCxLQUFLLENBQUNFLEdBQU4sS0FBYyxLQUFkLElBQXVCRixLQUFLLENBQUNFLEdBQU4sS0FBYyxPQUFsRSxDQUFKLEVBQWdGO0FBQzlFO0FBQ0Q7O0FBRURMLGVBQVMsQ0FBQ0UsSUFBRCxDQUFUO0FBQ0QsS0FOb0I7QUFBQSxHQUFyQjs7QUFRQSxNQUFNVCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDYSxNQUFEO0FBQUEsV0FDWDtBQUNFLGVBQVMsRUFBRUMsb0RBQUksQ0FBQ1YsT0FBTyxDQUFDSixJQUFULGdHQUNaSSxPQUFPLENBQUNGLFFBREksRUFDT1csTUFBTSxLQUFLLFFBRGxCLEVBRGpCO0FBSUUsVUFBSSxFQUFDLGNBSlA7QUFLRSxhQUFPLEVBQUVMLFlBQVksQ0FBQ0ssTUFBRCxFQUFTLEtBQVQsQ0FMdkI7QUFNRSxlQUFTLEVBQUVMLFlBQVksQ0FBQ0ssTUFBRCxFQUFTLEtBQVQsQ0FOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWdCRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBRUksTUFBQyxrRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFkLENBREYsRUFFRSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQUZKLEVBT0ksTUFBQyxrRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFkLENBREYsRUFFRSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQVBKLENBaEJGLEVBNkJFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTdCRixDQURXO0FBQUEsR0FBYjs7QUFtQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRU0sTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixTQUFLLEVBQUMsV0FBakM7QUFBNkMsV0FBTyxFQUFFTCxZQUFZLENBQUMsSUFBRCxDQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUExRSxDQUZOLEVBR00sTUFBQyxnRUFBRDtBQUFRLFVBQU0sRUFBQyxRQUFmO0FBQXdCLFFBQUksRUFBRUYsTUFBOUI7QUFBc0MsV0FBTyxFQUFFRSxZQUFZLENBQUMsS0FBRCxDQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLElBQUksQ0FBQyxRQUFELENBRFAsQ0FITixDQURGO0FBVUQ7O0dBekR1QkcsZTtVQUNOTCxTOzs7S0FETUssZSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVtcG9yYXJ5RHJhd2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFNwb3J0c0Zvb3RiYWxsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzRm9vdGJhbGwnO1xuaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcCc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgbGlzdDoge1xuICAgIHdpZHRoOiAyNTAsXG4gIH0sXG4gIGZ1bGxMaXN0OiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZW1wb3JhcnlEcmF3ZXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChvcGVuKSA9PiAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXREcmF3ZXIob3Blbik7XG4gIH07XG5cbiAgY29uc3QgbGlzdCA9IChhbmNob3IpID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5saXN0LCB7XG4gICAgICAgIFtjbGFzc2VzLmZ1bGxMaXN0XTogYW5jaG9yID09PSAnYm90dG9tJyxcbiAgICAgIH0pfVxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cbiAgICA+XG4gICAgICB7LyogPExpc3Q+XG4gICAgICAgIHtbJ05GTCBBcnRpY2xlcycsICdORkwgVmlkZW9zJywgJ0JhY2sgdG8gSG9tZSddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17dGV4dH0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPntpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSA/IDxTcG9ydHNGb290YmFsbEljb24gLz4gOiA8RXhpdFRvQXBwSWNvbiAvPn08L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD4gKi99XG4gICAgICA8TGlzdD5cbiAgICAgICAgWydORkwgQXJ0aWNsZXMnLCAnTkZMIFZpZGVvcycsICdCYWNrIHRvIEhvbWUnXVxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxTcG9ydHNGb290YmFsbEljb24gLz48L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17J05GTCBBcnRpY2xlcyd9IC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxTcG9ydHNGb290YmFsbEljb24gLz48L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17J05GTCBBcnRpY2xlcyd9IC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgXG4gICAgICA8L0xpc3Q+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcih0cnVlKX0+PE1lbnVJY29uIC8+PC9CdXR0b24+XG4gICAgICAgICAgPERyYXdlciBhbmNob3I9J2JvdHRvbScgb3Blbj17ZHJhd2VyfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfT5cbiAgICAgICAgICAgIHtsaXN0KCdib3R0b20nKX1cbiAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TemporaryDrawer.js\n");

/***/ })

})