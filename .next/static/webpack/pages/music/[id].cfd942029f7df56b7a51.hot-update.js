webpackHotUpdate_N_E("pages/music/[id]",{

/***/ "./pages/music/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/music/[id]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_MediaCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/MediaCard */ \"./components/MediaCard.js\");\n/* harmony import */ var _components_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/TemporaryDrawer */ \"./components/TemporaryDrawer.js\");\n/* harmony import */ var _components_Dividers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Dividers */ \"./components/Dividers.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/SearchBar */ \"./components/SearchBar.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/VideoCarousel/VidItem */ \"./components/VideoCarousel/VidItem.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/music/[id]/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar music = function music(_ref) {\n  _s();\n\n  var _ref2;\n\n  var featured = _ref.featured;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      albumInfo = _useState[0],\n      setAlbumInfo = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var id = router.query.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var results = featured.results;\n    setAlbumInfo(results);\n  }, []); // return <p>Title: {id}</p>\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: (_ref2 = {\n      backgroundColor: '#000000',\n      backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)',\n      height: '103vh'\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"height\", '900px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"width\", '900px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"paddingLeft\", '20px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, \"paddingRight\", '20px'), _ref2),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    component: \"div\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    container: true,\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 7,\n    style: {\n      paddingTop: '30px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 23\n    }\n  }, __jsx(_components_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    name: id,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 27\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 5,\n    style: {\n      paddingTop: '30px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 23\n    }\n  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 27\n    }\n  }))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 19\n    }\n  }), __jsx(_components_Dividers__WEBPACK_IMPORTED_MODULE_8__[\"ArticleDivider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }), __jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_6__[\"Pony\"], {\n    albums: albumInfo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 19\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 19\n    }\n  }), __jsx(_components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 19\n    }\n  }))));\n};\n\n_s(music, \"3y7qjycWxZCYYaVaGJ2B5tvOqeA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (music);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzaWMvL2luZGV4LmpzPzY0ZjkiXSwibmFtZXMiOlsibXVzaWMiLCJmZWF0dXJlZCIsInVzZVN0YXRlIiwiYWxidW1JbmZvIiwic2V0QWxidW1JbmZvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsInJlc3VsdHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFdkJDLFNBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFJNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUo0QixNQUtwQkMsRUFMb0IsR0FLYkYsTUFBTSxDQUFDRyxLQUxNLENBS3BCRCxFQUxvQjtBQU81QkUseURBQVMsQ0FBQyxZQUFNO0FBQUEsUUFDTkMsT0FETSxHQUNNVCxRQUROLENBQ05TLE9BRE07QUFHZE4sZ0JBQVksQ0FBQ00sT0FBRCxDQUFaO0FBQ0QsR0FKUSxFQUlQLEVBSk8sQ0FBVCxDQVA0QixDQWE1Qjs7QUFDQSxTQUNFLG1FQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxtRUFBRDtBQUFXLFNBQUs7QUFDWkMscUJBQWUsRUFBRSxTQURMO0FBRVpDLHFCQUFlLEVBQUUsa0RBRkw7QUFFeURDLFlBQU0sRUFBRTtBQUZqRSxrSEFHSixPQUhJLDZHQUlMLE9BSkssbUhBS0MsTUFMRCxvSEFNRSxNQU5GLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFDLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLCtEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUEwQixTQUFLLEVBQUU7QUFBQ0MsZ0JBQVUsRUFBRTtBQUFiLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQWlCLFFBQUksRUFBRVAsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLFNBQUssRUFBRTtBQUFDTyxnQkFBVSxFQUFFO0FBQWIsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FGSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLEVBY0ksTUFBQywwREFBRDtBQUFNLFVBQU0sRUFBRVgsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixFQWlCSSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FSSixDQUZKLENBREY7QUFvQ0QsQ0FsREg7O0dBQU1ILEs7VUFJYU0scUQ7Ozs7QUFnREZOLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbXVzaWMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcbmltcG9ydCB7IFBvbnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01lZGlhQ2FyZCdcbmltcG9ydCBUZW1wb3JhcnlEcmF3ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9UZW1wb3JhcnlEcmF3ZXInXG5pbXBvcnQgeyBBcnRpY2xlRGl2aWRlciwgVmlkZW9EaXZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EaXZpZGVycydcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXInXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xuaW1wb3J0IFZpZEl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9WaWRlb0Nhcm91c2VsL1ZpZEl0ZW0nXG5cbmNvbnN0IG11c2ljID0gKHsgZmVhdHVyZWQgfSkgPT4ge1xuXG4gIGNvbnN0IFthbGJ1bUluZm8sIHNldEFsYnVtSW5mb10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZmVhdHVyZWQ7XG4gICAgIFxuICAgICAgc2V0QWxidW1JbmZvKHJlc3VsdHMpXG4gICAgfSxbXSlcbiAgXG4gICAgLy8gcmV0dXJuIDxwPlRpdGxlOiB7aWR9PC9wPlxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKScsIGhlaWdodDogJzEwM3ZoJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnOTAwcHgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzkwMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMjBweCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiZGl2XCI+XG5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezd9IHN0eWxlPXt7cGFkZGluZ1RvcDogJzMwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZW1wb3JhcnlEcmF3ZXIgbmFtZT17aWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs1fSBzdHlsZT17e3BhZGRpbmdUb3A6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8UG9ueSBhbGJ1bXM9e2FsYnVtSW5mb30vPlxuXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxWaWRJdGVtIC8+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Lz5cblxuICApXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IG11c2ljXG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgICBpZihwYXJhbXMuaWQgPT09ICdSb2NrJyl7XG4gICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9MTU4MDM4LDQ4NjU5Nyw5OTQ2NTYsNTA0MDcxNCZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkICA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG4gICAgICBcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IGZlYXR1cmVkLCB9LH1cbiAgICB9XG4gICAgaWYocGFyYW1zLmlkID09PSAnSGlwaG9wJyl7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9MjcxNTcyMCwxMDU5OTgsODk0ODIwNDY0LDk2NjMwOTE3NSZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcmV0dXJuIHtwcm9wczogeyBmZWF0dXJlZCB9fVxuICAgIH1cbiAgICBpZihwYXJhbXMuaWQgPT09ICdDb3VudHJ5Jyl7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9MjA1MzIyLDEyMzA1NTE5NCw1MzUwNjYsNTQ5ODM2JmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICByZXR1cm4ge3Byb3BzOiB7IGZlYXR1cmVkIH19XG4gICAgfVxuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ0RhbmNlJyl7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9NjY2MjY4NDU3LDYzNDc2MzExNiwxNjAxMzc2MSwxNDY4MjkwODcxJmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICByZXR1cm4ge3Byb3BzOiB7IGZlYXR1cmVkIH19XG4gICAgfVxuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ0FsdGVybmF0aXZlJyl7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9NjkwNjE5NywzNDQ3NjQyLDUyODkyODAwOCw2MjgyMDQxMyZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcmV0dXJuIHtwcm9wczogeyBmZWF0dXJlZCB9fVxuICAgIH1cbiAgICBpZihwYXJhbXMuaWQgPT09ICdSJkInKXtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD02NDI1OTExMjgsNjY2NjQ4MTkyLDMyNjEzMjUsMTIzOTk3NjMyOSZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcmV0dXJuIHtwcm9wczogeyBmZWF0dXJlZCB9fVxuICAgIH1cbiAgICBpZihwYXJhbXMuaWQgPT09ICdQb3AnKXtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD02MzM0NjU1Myw0NDIxMjIwNTEsMTQxOTIyNywzOTgxMjgmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIHJldHVybiB7cHJvcHM6IHsgZmVhdHVyZWQgfX1cbiAgICB9XG4gICAgXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cbiAgICByZXR1cm4geyBwYXRoczogW1xuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdSb2NrJyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogJ0hpcGhvcCcgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdDb3VudHJ5JyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogJ0RhbmNlJyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogJ0FsdGVybmF0aXZlJyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogJ1ImQicgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdQb3AnIH0gfVxuICAgIF0sIGZhbGxiYWNrOiBmYWxzZSB9XG4gIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/music/[id]/index.js\n");

/***/ })

})