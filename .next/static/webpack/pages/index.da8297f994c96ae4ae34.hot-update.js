webpackHotUpdate_N_E("pages/index",{

/***/ "./components/VideoCarousel/tileData.js":
/*!**********************************************!*\
  !*** ./components/VideoCarousel/tileData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar tileData = function tileData() {\n  var key = process.env.YOUTUBE_API_KEY;\n  var response = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=\".concat(key));\n  return console.log(response);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tileData);\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0Nhcm91c2VsL3RpbGVEYXRhLmpzP2IzNTgiXSwibmFtZXMiOlsidGlsZURhdGEiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiWU9VVFVCRV9BUElfS0VZIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFFbkIsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBeEI7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLDRDQUFLLENBQUNDLEdBQU4sMkhBQTZITixHQUE3SCxFQUFmO0FBRUEsU0FDSU8sT0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVosQ0FESjtBQUlILENBVEQ7O0FBV2VMLHVFQUFmO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvdGlsZURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdGlsZURhdGEgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5ZT1VUVUJFX0FQSV9LRVk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaD9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0yMCZxPXBvcHVsYXIlMjBoaXBob3AlMjBtdXNpYyUyMHZpZGVvcyZrZXk9JHtrZXl9YClcblxuICAgIHJldHVybiAoXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIClcbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCB0aWxlRGF0YTtcbi8qKlxuICogVGhlIGV4YW1wbGUgZGF0YSBpcyBzdHJ1Y3R1cmVkIGFzIGZvbGxvd3M6XG4gKlxuICogaW1wb3J0IGltYWdlIGZyb20gJ3BhdGgvdG8vaW1hZ2UuanBnJztcbiAqIFtldGMuLi5dXG4gKlxuICogY29uc3QgdGlsZURhdGEgPSBbXG4gKiAgIHtcbiAqICAgICBpbWc6IGltYWdlLFxuICogICAgIHRpdGxlOiAnSW1hZ2UnLFxuICogICAgIGF1dGhvcjogJ2F1dGhvcicsXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICBbZXRjLi4uXVxuICogICB9LFxuICogXTtcbiAqL1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VideoCarousel/tileData.js\n");

/***/ })

})