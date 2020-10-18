webpackHotUpdate_N_E("pages/music/[id]",{

/***/ "./pages/music/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/music/[id]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_MediaCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/MediaCard */ \"./components/MediaCard.js\");\n/* harmony import */ var _components_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/TemporaryDrawer */ \"./components/TemporaryDrawer.js\");\n/* harmony import */ var _components_Dividers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Dividers */ \"./components/Dividers.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/SearchBar */ \"./components/SearchBar.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/VideoCarousel/VidItem */ \"./components/VideoCarousel/VidItem.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/music/[id]/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar music = function music(_ref) {\n  _s();\n\n  var _ref2;\n\n  var featured = _ref.featured;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      albumInfo = _useState[0],\n      setAlbumInfo = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var id = router.query.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var results = featured.results;\n    setAlbumInfo(results);\n  }, []); // return <p>Title: {id}</p>\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: (_ref2 = {\n      backgroundColor: '#000000',\n      backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)',\n      height: '103vh'\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"height\", '850px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"paddingLeft\", '20px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"paddingRight\", '20px'), _ref2),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    component: \"div\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    container: true,\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: true,\n    xs: 12,\n    style: {\n      paddingTop: '30px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 23\n    }\n  }, __jsx(_components_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    name: id,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 27\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: true,\n    xs: 12,\n    style: {\n      paddingTop: '30px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 23\n    }\n  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 27\n    }\n  }))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }), __jsx(_components_Dividers__WEBPACK_IMPORTED_MODULE_8__[\"ArticleDivider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 19\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }), __jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_6__[\"Pony\"], {\n    albums: albumInfo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 19\n    }\n  }), __jsx(_components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 19\n    }\n  }))));\n};\n\n_s(music, \"3y7qjycWxZCYYaVaGJ2B5tvOqeA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (music);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzaWMvL2luZGV4LmpzPzY0ZjkiXSwibmFtZXMiOlsibXVzaWMiLCJmZWF0dXJlZCIsInVzZVN0YXRlIiwiYWxidW1JbmZvIiwic2V0QWxidW1JbmZvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsInJlc3VsdHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFdkJDLFNBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFJNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUo0QixNQUtwQkMsRUFMb0IsR0FLYkYsTUFBTSxDQUFDRyxLQUxNLENBS3BCRCxFQUxvQjtBQU81QkUseURBQVMsQ0FBQyxZQUFNO0FBQUEsUUFDTkMsT0FETSxHQUNNVCxRQUROLENBQ05TLE9BRE07QUFHZE4sZ0JBQVksQ0FBQ00sT0FBRCxDQUFaO0FBQ0QsR0FKUSxFQUlQLEVBSk8sQ0FBVCxDQVA0QixDQWE1Qjs7QUFDQSxTQUNFLG1FQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxtRUFBRDtBQUFXLFNBQUs7QUFDWkMscUJBQWUsRUFBRSxTQURMO0FBRVpDLHFCQUFlLEVBQUUsa0RBRkw7QUFFeURDLFlBQU0sRUFBRTtBQUZqRSxrSEFHSixPQUhJLG1IQUlDLE1BSkQsb0hBS0UsTUFMRixTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQywrREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFLLEVBQUU7QUFBQ0MsZ0JBQVUsRUFBRTtBQUFiLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQWlCLFFBQUksRUFBRVAsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsU0FBSyxFQUFFO0FBQUNPLGdCQUFVLEVBQUU7QUFBYixLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQUZKLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFjSSxNQUFDLDBEQUFEO0FBQU0sVUFBTSxFQUFFWCxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLEVBaUJJLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSixDQVBKLENBRkosQ0FERjtBQW1DRCxDQWpESDs7R0FBTUgsSztVQUlhTSxxRDs7OztBQStDRk4sb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9tdXNpYy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xuaW1wb3J0IHsgUG9ueSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTWVkaWFDYXJkJ1xuaW1wb3J0IFRlbXBvcmFyeURyYXdlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1RlbXBvcmFyeURyYXdlcidcbmltcG9ydCB7IEFydGljbGVEaXZpZGVyLCBWaWRlb0RpdmlkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RpdmlkZXJzJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhcidcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXG5pbXBvcnQgVmlkSXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvVmlkSXRlbSdcblxuY29uc3QgbXVzaWMgPSAoeyBmZWF0dXJlZCB9KSA9PiB7XG5cbiAgY29uc3QgW2FsYnVtSW5mbywgc2V0QWxidW1JbmZvXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBmZWF0dXJlZDtcbiAgICAgXG4gICAgICBzZXRBbGJ1bUluZm8ocmVzdWx0cylcbiAgICB9LFtdKVxuICBcbiAgICAvLyByZXR1cm4gPHA+VGl0bGU6IHtpZH08L3A+XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpJywgaGVpZ2h0OiAnMTAzdmgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4NTBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMjBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzIwcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImRpdlwiPlxuXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZ1RvcDogJzMwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZW1wb3JhcnlEcmF3ZXIgbmFtZT17aWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZ1RvcDogJzMwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPEFydGljbGVEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxQb255IGFsYnVtcz17YWxidW1JbmZvfS8+XG5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPFZpZEl0ZW0gLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvPlxuXG4gIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgbXVzaWNcblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ1JvY2snKXtcbiAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD0xNTgwMzgsNDg2NTk3LDk5NDY1Niw1MDQwNzE0JmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgZmVhdHVyZWQsIH0sfVxuICAgIH1cbiAgICBpZihwYXJhbXMuaWQgPT09ICdIaXBob3AnKXtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD0yNzE1NzIwLDEwNTk5OCw4OTQ4MjA0NjQsOTY2MzA5MTc1JmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICByZXR1cm4ge3Byb3BzOiB7IGZlYXR1cmVkIH19XG4gICAgfVxuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ0NvdW50cnknKXtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD0yMDUzMjIsMTIzMDU1MTk0LDUzNTA2Niw1NDk4MzYmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIHJldHVybiB7cHJvcHM6IHsgZmVhdHVyZWQgfX1cbiAgICB9XG4gICAgaWYocGFyYW1zLmlkID09PSAnRGFuY2UnKXtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD02NjYyNjg0NTcsNjM0NzYzMTE2LDE2MDEzNzYxLDE0NjgyOTA4NzEmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIHJldHVybiB7cHJvcHM6IHsgZmVhdHVyZWQgfX1cbiAgICB9XG4gICAgaWYocGFyYW1zLmlkID09PSAnQWx0ZXJuYXRpdmUnKXtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD02OTA2MTk3LDM0NDc2NDIsNTI4OTI4MDA4LDYyODIwNDEzJmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICByZXR1cm4ge3Byb3BzOiB7IGZlYXR1cmVkIH19XG4gICAgfVxuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ1ImQicpe1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTY0MjU5MTEyOCw2NjY2NDgxOTIsMzI2MTMyNSwxMjM5OTc2MzI5JmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICByZXR1cm4ge3Byb3BzOiB7IGZlYXR1cmVkIH19XG4gICAgfVxuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ1BvcCcpe1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTYzMzQ2NTUzLDQ0MjEyMjA1MSwxNDE5MjI3LDM5ODEyOCZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcmV0dXJuIHtwcm9wczogeyBmZWF0dXJlZCB9fVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblxuICAgIHJldHVybiB7IHBhdGhzOiBbXG4gICAgICB7IHBhcmFtczogeyBpZDogJ1JvY2snIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnSGlwaG9wJyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogJ0NvdW50cnknIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnRGFuY2UnIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnQWx0ZXJuYXRpdmUnIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnUiZCJyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogJ1BvcCcgfSB9XG4gICAgXSwgZmFsbGJhY2s6IGZhbHNlIH1cbiAgfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/music/[id]/index.js\n");

/***/ })

})