webpackHotUpdate_N_E("pages/music/[id]",{

/***/ "./components/VideoCarousel/VidItem.js":
/*!*********************************************!*\
  !*** ./components/VideoCarousel/VidItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tileData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tileData */ \"./components/VideoCarousel/tileData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/VideoCarousel/VidItem.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar VidItem = function VidItem() {\n  var responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"],\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"tileData\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(\"tileData\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(\"tileData\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(\"tileData\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(\"tileData\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = VidItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VidItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"VidItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0Nhcm91c2VsL1ZpZEl0ZW0uanM/OTViMSJdLCJuYW1lcyI6WyJWaWRJdGVtIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwidGFibGV0IiwibW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxXQUFPLEVBQUU7QUFDUEMsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETDtBQUVQQyxXQUFLLEVBQUUsQ0FGQTtBQUdQQyxtQkFBYSxFQUFFLENBSFIsQ0FHVTs7QUFIVixLQURRO0FBTWpCQyxVQUFNLEVBQUU7QUFDTkwsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETjtBQUVOQyxXQUFLLEVBQUUsQ0FGRDtBQUdOQyxtQkFBYSxFQUFFLENBSFQsQ0FHVzs7QUFIWCxLQU5TO0FBV2pCRSxVQUFNLEVBQUU7QUFDTk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FETjtBQUVOQyxXQUFLLEVBQUUsQ0FGRDtBQUdOQyxtQkFBYSxFQUFFLENBSFQsQ0FHVzs7QUFIWDtBQVhTLEdBQW5CO0FBa0JBLFNBQ0UsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBRSxJQURiO0FBRUUsYUFBUyxFQUFFLEtBRmI7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLGNBQVUsRUFBRU4sVUFKZDtBQUtFLE9BQUcsRUFBRSxJQUxQLENBS2E7QUFMYjtBQU1FLFlBQVEsRUFBRSxJQU5aO0FBT0UsbUJBQWUsRUFBRSxJQVBuQjtBQVFFLG9CQUFnQixFQUFDLFFBUm5CO0FBU0Usc0JBQWtCLEVBQUUsR0FUdEI7QUFVRSxrQkFBYyxFQUFDLG9CQVZqQjtBQVdFLDJCQUF1QixFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FYM0I7QUFZRSxnQkFBWSxFQUFDLHVCQVpmO0FBYUUsYUFBUyxFQUFDLDZCQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQURGO0FBdUJELENBMUNEOztLQUFNRCxPO0FBNENTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9DYXJvdXNlbC9WaWRJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiXG5pbXBvcnQgdGlsZURhdGEgZnJvbSAnLi90aWxlRGF0YSdcblxuY29uc3QgVmlkSXRlbSA9ICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBkZXNrdG9wOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICBpdGVtczogMyxcbiAgICAgIHNsaWRlc1RvU2xpZGU6IDMgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICB9LFxuICAgIHRhYmxldDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICBpdGVtczogMixcbiAgICAgIHNsaWRlc1RvU2xpZGU6IDIgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICB9LFxuICAgIG1vYmlsZToge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICBpdGVtczogMSxcbiAgICAgIHNsaWRlc1RvU2xpZGU6IDEgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxcbiAgICAgIHN3aXBlYWJsZT17dHJ1ZX1cbiAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAga2V5Qm9hcmRDb250cm9sPXt0cnVlfVxuICAgICAgY3VzdG9tVHJhbnNpdGlvbj1cImFsbCAuNVwiXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezUwMH1cbiAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbXCJ0YWJsZXRcIiwgXCJtb2JpbGVcIl19XG4gICAgICBkb3RMaXN0Q2xhc3M9XCJjdXN0b20tZG90LWxpc3Qtc3R5bGVcIlxuICAgICAgaXRlbUNsYXNzPVwiY2Fyb3VzZWwtaXRlbS1wYWRkaW5nLTQwLXB4XCJcbiAgICA+XG4gICAgICA8dGlsZURhdGEgLz5cbiAgICAgIDx0aWxlRGF0YSAvPlxuICAgICAgPHRpbGVEYXRhIC8+XG4gICAgICA8dGlsZURhdGEgLz5cbiAgICAgIDx0aWxlRGF0YSAvPlxuICAgIDwvQ2Fyb3VzZWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/VideoCarousel/VidItem.js\n");

/***/ })

})