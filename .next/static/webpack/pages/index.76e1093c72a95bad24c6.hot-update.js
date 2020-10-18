webpackHotUpdate_N_E("pages/index",{

/***/ "./components/VideoCarousel/tileData.js":
/*!**********************************************!*\
  !*** ./components/VideoCarousel/tileData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\n\nvar tileData = function tileData() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var key = process.env.YOUTUBE_API_KEY;\n    var response = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=\".concat(key));\n    console.log(response);\n  }, []);\n};\n\n_s(tileData, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tileData);\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0Nhcm91c2VsL3RpbGVEYXRhLmpzP2IzNTgiXSwibmFtZXMiOlsidGlsZURhdGEiLCJ1c2VFZmZlY3QiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiWU9VVFVCRV9BUElfS0VZIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkJDLHlEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQXhCO0FBQ0osUUFBSUMsUUFBUSxHQUFHQyw0Q0FBSyxDQUFDQyxHQUFOLDJIQUE2SE4sR0FBN0gsRUFBZjtBQUVJTyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNILEdBTlEsRUFNUCxFQU5PLENBQVQ7QUFXSCxDQWJEOztHQUFNTixROztBQWVTQSx1RUFBZjtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9WaWRlb0Nhcm91c2VsL3RpbGVEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHRpbGVEYXRhID0gKCkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5ZT1VUVUJFX0FQSV9LRVk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaD9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0yMCZxPXBvcHVsYXIlMjBoaXBob3AlMjBtdXNpYyUyMHZpZGVvcyZrZXk9JHtrZXl9YClcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICB9LFtdKVxuXG4gICAgXG4gICAgXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGlsZURhdGE7XG4vKipcbiAqIFRoZSBleGFtcGxlIGRhdGEgaXMgc3RydWN0dXJlZCBhcyBmb2xsb3dzOlxuICpcbiAqIGltcG9ydCBpbWFnZSBmcm9tICdwYXRoL3RvL2ltYWdlLmpwZyc7XG4gKiBbZXRjLi4uXVxuICpcbiAqIGNvbnN0IHRpbGVEYXRhID0gW1xuICogICB7XG4gKiAgICAgaW1nOiBpbWFnZSxcbiAqICAgICB0aXRsZTogJ0ltYWdlJyxcbiAqICAgICBhdXRob3I6ICdhdXRob3InLFxuICogICB9LFxuICogICB7XG4gKiAgICAgW2V0Yy4uLl1cbiAqICAgfSxcbiAqIF07XG4gKi9cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoCarousel/tileData.js\n");

/***/ })

})