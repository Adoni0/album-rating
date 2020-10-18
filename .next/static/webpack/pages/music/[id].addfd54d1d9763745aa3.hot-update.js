webpackHotUpdate_N_E("pages/music/[id]",{

/***/ "./pages/music/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/music/[id]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_MediaCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/MediaCard */ \"./components/MediaCard.js\");\n/* harmony import */ var _components_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/TemporaryDrawer */ \"./components/TemporaryDrawer.js\");\n/* harmony import */ var _components_Dividers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Dividers */ \"./components/Dividers.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/SearchBar */ \"./components/SearchBar.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/VideoCarousel/VidItem */ \"./components/VideoCarousel/VidItem.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/music/[id]/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar music = function music(_ref) {\n  _s();\n\n  var featured = _ref.featured;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      albumInfo = _useState[0],\n      setAlbumInfo = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var id = router.query.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var results = featured.results;\n    setAlbumInfo(results);\n  }, []); // return <p>Title: {id}</p>\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    maxWidth: \"lg\",\n    style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      backgroundColor: '#000000',\n      backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)',\n      height: '103vh'\n    }, \"height\", '900px'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    component: \"div\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    container: true,\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 5,\n    style: {\n      paddingTop: '30px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 23\n    }\n  }, __jsx(_components_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    name: id,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 27\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 5,\n    style: {\n      paddingTop: '30px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 23\n    }\n  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 27\n    }\n  }))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 19\n    }\n  }), __jsx(_components_Dividers__WEBPACK_IMPORTED_MODULE_8__[\"ArticleDivider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 19\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }), __jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_6__[\"Pony\"], {\n    albums: albumInfo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 19\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }), __jsx(_components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 19\n    }\n  }))));\n};\n\n_s(music, \"3y7qjycWxZCYYaVaGJ2B5tvOqeA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (music);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzaWMvL2luZGV4LmpzPzY0ZjkiXSwibmFtZXMiOlsibXVzaWMiLCJmZWF0dXJlZCIsInVzZVN0YXRlIiwiYWxidW1JbmZvIiwic2V0QWxidW1JbmZvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsInJlc3VsdHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFdkJDLFNBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFJNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUo0QixNQUtwQkMsRUFMb0IsR0FLYkYsTUFBTSxDQUFDRyxLQUxNLENBS3BCRCxFQUxvQjtBQU81QkUseURBQVMsQ0FBQyxZQUFNO0FBQUEsUUFDTkMsT0FETSxHQUNNVCxRQUROLENBQ05TLE9BRE07QUFHZE4sZ0JBQVksQ0FBQ00sT0FBRCxDQUFaO0FBQ0QsR0FKUSxFQUlQLEVBSk8sQ0FBVCxDQVA0QixDQWE1Qjs7QUFDQSxTQUNFLG1FQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxtRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUF5QixTQUFLO0FBQzFCQyxxQkFBZSxFQUFFLFNBRFM7QUFFMUJDLHFCQUFlLEVBQUUsa0RBRlM7QUFFMkNDLFlBQU0sRUFBRTtBQUZuRCxpQkFHbEIsT0FIa0IsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsb0VBQUQ7QUFBWSxhQUFTLEVBQUMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLFNBQUssRUFBRTtBQUFDQyxnQkFBVSxFQUFFO0FBQWIsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBaUIsUUFBSSxFQUFFUCxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBMEIsU0FBSyxFQUFFO0FBQUNPLGdCQUFVLEVBQUU7QUFBYixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQUZKLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFjSSxNQUFDLDBEQUFEO0FBQU0sVUFBTSxFQUFFWCxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLEVBaUJJLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSixDQUxKLENBRkosQ0FERjtBQWlDRCxDQS9DSDs7R0FBTUgsSztVQUlhTSxxRDs7OztBQTZDRk4sb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9tdXNpYy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xuaW1wb3J0IHsgUG9ueSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTWVkaWFDYXJkJ1xuaW1wb3J0IFRlbXBvcmFyeURyYXdlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1RlbXBvcmFyeURyYXdlcidcbmltcG9ydCB7IEFydGljbGVEaXZpZGVyLCBWaWRlb0RpdmlkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RpdmlkZXJzJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhcidcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXG5pbXBvcnQgVmlkSXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvVmlkSXRlbSdcblxuY29uc3QgbXVzaWMgPSAoeyBmZWF0dXJlZCB9KSA9PiB7XG5cbiAgY29uc3QgW2FsYnVtSW5mbywgc2V0QWxidW1JbmZvXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBmZWF0dXJlZDtcbiAgICAgXG4gICAgICBzZXRBbGJ1bUluZm8ocmVzdWx0cylcbiAgICB9LFtdKVxuICBcbiAgICAvLyByZXR1cm4gPHA+VGl0bGU6IHtpZH08L3A+XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKScsIGhlaWdodDogJzEwM3ZoJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnOTAwcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImRpdlwiPlxuXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs1fSBzdHlsZT17e3BhZGRpbmdUb3A6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVtcG9yYXJ5RHJhd2VyIG5hbWU9e2lkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NX0gc3R5bGU9e3twYWRkaW5nVG9wOiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8QXJ0aWNsZURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPFBvbnkgYWxidW1zPXthbGJ1bUluZm99Lz5cblxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8VmlkSXRlbSAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC8+XG5cbiAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBtdXNpY1xuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgaWYocGFyYW1zLmlkID09PSAnUm9jaycpe1xuICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTE1ODAzOCw0ODY1OTcsOTk0NjU2LDUwNDA3MTQmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCAgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuICAgICAgXG4gICAgICByZXR1cm4geyBwcm9wczogeyBmZWF0dXJlZCwgfSx9XG4gICAgfVxuICAgIGlmKHBhcmFtcy5pZCA9PT0gJ0hpcGhvcCcpe1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTI3MTU3MjAsMTA1OTk4LDg5NDgyMDQ2NCw5NjYzMDkxNzUmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIHJldHVybiB7cHJvcHM6IHsgZmVhdHVyZWQgfX1cbiAgICB9XG4gICAgaWYocGFyYW1zLmlkID09PSAnQ291bnRyeScpe1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTIwNTMyMiwxMjMwNTUxOTQsNTM1MDY2LDU0OTgzNiZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcmV0dXJuIHtwcm9wczogeyBmZWF0dXJlZCB9fVxuICAgIH1cbiAgICBpZihwYXJhbXMuaWQgPT09ICdEYW5jZScpe1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTY2NjI2ODQ1Nyw2MzQ3NjMxMTYsMTYwMTM3NjEsMTQ2ODI5MDg3MSZlbnRpdHk9YWxidW0mbGltaXQ9MmApO1xuICAgICAgdmFyIGZlYXR1cmVkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcmV0dXJuIHtwcm9wczogeyBmZWF0dXJlZCB9fVxuICAgIH1cbiAgICBpZihwYXJhbXMuaWQgPT09ICdBbHRlcm5hdGl2ZScpe1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTY5MDYxOTcsMzQ0NzY0Miw1Mjg5MjgwMDgsNjI4MjA0MTMmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIHJldHVybiB7cHJvcHM6IHsgZmVhdHVyZWQgfX1cbiAgICB9XG4gICAgaWYocGFyYW1zLmlkID09PSAnUiZCJyl7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9NjQyNTkxMTI4LDY2NjY0ODE5MiwzMjYxMzI1LDEyMzk5NzYzMjkmZW50aXR5PWFsYnVtJmxpbWl0PTJgKTtcbiAgICAgIHZhciBmZWF0dXJlZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIHJldHVybiB7cHJvcHM6IHsgZmVhdHVyZWQgfX1cbiAgICB9XG4gICAgaWYocGFyYW1zLmlkID09PSAnUG9wJyl7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9NjMzNDY1NTMsNDQyMTIyMDUxLDE0MTkyMjcsMzk4MTI4JmVudGl0eT1hbGJ1bSZsaW1pdD0yYCk7XG4gICAgICB2YXIgZmVhdHVyZWQgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICByZXR1cm4ge3Byb3BzOiB7IGZlYXR1cmVkIH19XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXG4gICAgcmV0dXJuIHsgcGF0aHM6IFtcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnUm9jaycgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdIaXBob3AnIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnQ291bnRyeScgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdEYW5jZScgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdBbHRlcm5hdGl2ZScgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdSJkInIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAnUG9wJyB9IH1cbiAgICBdLCBmYWxsYmFjazogZmFsc2UgfVxuICB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/music/[id]/index.js\n");

/***/ })

})