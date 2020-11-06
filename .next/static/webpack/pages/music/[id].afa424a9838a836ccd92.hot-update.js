webpackHotUpdate_N_E("pages/music/[id]",{

/***/ "./components/MediaCard.js":
/*!*********************************!*\
  !*** ./components/MediaCard.js ***!
  \*********************************/
/*! exports provided: Pony, MediaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pony\", function() { return Pony; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MediaCard\", function() { return MediaCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"./node_modules/@material-ui/core/esm/CardActionArea/index.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/MediaCard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n // import Ratings from './AlbumRatings';\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1024\n    },\n    items: 3,\n    slidesToSlide: 3 // optional, default to 1.\n\n  },\n  tablet: {\n    breakpoint: {\n      max: 1024,\n      min: 464\n    },\n    items: 2,\n    slidesToSlide: 2 // optional, default to 1.\n\n  },\n  mobile: {\n    breakpoint: {\n      max: 464,\n      min: 0\n    },\n    items: 1,\n    slidesToSlide: 1 // optional, default to 1.\n\n  }\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      maxWidth: 370,\n      margin: 'auto'\n    },\n    media: {\n      height: 200\n    }\n  };\n});\nfunction Pony(props) {\n  var _this = this;\n\n  var albums = props.albums; // console.log(albums)\n\n  var sort = albums.filter(function (album) {\n    return album.collectionName;\n  });\n  console.log(sort);\n  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true,\n    autoplay: true,\n    autoPlaySpeed: 2000 // autoPlay={this.props.deviceType !== \"mobile\" ? true : false}\n    // autoPlaySpeed={1000}\n    ,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"] // deviceType={this.props.deviceType}\n    ,\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, sort.map(function (item, i) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }\n    }, __jsx(MediaCard, {\n      key: i,\n      item: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }\n    }));\n  }));\n}\n_c = Pony;\nfunction MediaCard(props) {\n  _s();\n\n  var classes = useStyles();\n  var item = props.item;\n  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      backgroundColor: 'white'\n    },\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.media,\n    image: item.artworkUrl100,\n    title: \"music\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, item.collectionName), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, item.artistName))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"small\",\n    color: \"secondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, \"Queue\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"small\",\n    color: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    target: \"_blank\",\n    href: item.collectionViewUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  }, \"Preview\"))));\n}\n\n_s(MediaCard, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = MediaCard;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Pony\");\n$RefreshReg$(_c2, \"MediaCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZWRpYUNhcmQuanM/ODQ3MSJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInNsaWRlc1RvU2xpZGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJtZWRpYSIsImhlaWdodCIsIlBvbnkiLCJwcm9wcyIsImFsYnVtcyIsInNvcnQiLCJmaWx0ZXIiLCJhbGJ1bSIsImNvbGxlY3Rpb25OYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJpIiwiTWVkaWFDYXJkIiwiY2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsImFydHdvcmtVcmwxMDAiLCJhcnRpc3ROYW1lIiwiY29sbGVjdGlvblZpZXdVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxFQUFFLENBRkE7QUFHUEMsaUJBQWEsRUFBRSxDQUhSLENBR1U7O0FBSFYsR0FEUTtBQU1qQkMsUUFBTSxFQUFFO0FBQ05MLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHVzs7QUFIWCxHQU5TO0FBV2pCRSxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdXOztBQUhYO0FBWFMsQ0FBbkI7QUFrQkEsSUFBTUcsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLEdBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEaUM7QUFLdkNDLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUU7QUFESDtBQUxnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVVPLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BQ2xCQyxNQURrQixHQUNQRCxLQURPLENBQ2xCQyxNQURrQixFQUUxQjs7QUFFQSxNQUFJQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQVVDLEtBQVYsRUFBaUI7QUFFeEMsV0FBT0EsS0FBSyxDQUFDQyxjQUFiO0FBQ0QsR0FIVSxDQUFYO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBRUEsU0FDRSxNQUFDLDJEQUFEO0FBQ0UsYUFBUyxFQUFFLElBRGI7QUFFRSxhQUFTLEVBQUUsS0FGYjtBQUdFLFlBQVEsRUFBRSxJQUhaO0FBSUUsY0FBVSxFQUFFcEIsVUFKZDtBQUtFLE9BQUcsRUFBRSxJQUxQLENBS2E7QUFMYjtBQU1FLFlBQVEsRUFBRSxJQU5aO0FBT0UsWUFBUSxFQUFFLElBUFo7QUFRRSxpQkFBYSxFQUFFLElBUmpCLENBU0U7QUFDQTtBQVZGO0FBV0UsbUJBQWUsRUFBRSxJQVhuQjtBQVlFLG9CQUFnQixFQUFDLFFBWm5CO0FBYUUsc0JBQWtCLEVBQUUsR0FidEI7QUFjRSxrQkFBYyxFQUFDLG9CQWRqQjtBQWVFLDJCQUF1QixFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FmM0IsQ0FnQkU7QUFoQkY7QUFpQkUsZ0JBQVksRUFBQyx1QkFqQmY7QUFrQkUsYUFBUyxFQUFDLDZCQWxCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcUJJb0IsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyxTQUFEO0FBQVcsU0FBRyxFQUFFQSxDQUFoQjtBQUFtQixVQUFJLEVBQUVELElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEQSxDQURTO0FBQUEsR0FBVCxDQXJCSixDQURGO0FBOEJEO0tBeENlVixJO0FBMkNULFNBQVNZLFNBQVQsQ0FBbUJYLEtBQW5CLEVBQTBCO0FBQUE7O0FBQy9CLE1BQU1ZLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFEK0IsTUFFdkJrQixJQUZ1QixHQUVkVCxLQUZjLENBRXZCUyxJQUZ1QjtBQUkvQixTQUNFLE1BQUMsOERBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBRUkscUJBQWUsRUFBRTtBQUFuQixLQUFiO0FBQTJDLGFBQVMsRUFBRUQsT0FBTyxDQUFDbEIsSUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUVrQixPQUFPLENBQUNmLEtBRHJCO0FBRUUsU0FBSyxFQUFFWSxJQUFJLENBQUNLLGFBRmQ7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksZ0JBQVksTUFBeEI7QUFBeUIsV0FBTyxFQUFDLElBQWpDO0FBQXNDLGFBQVMsRUFBQyxJQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLElBQUksQ0FBQ0osY0FEUixDQURGLEVBSUUsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUMsZUFBbEM7QUFBa0QsYUFBUyxFQUFDLEdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksSUFBSSxDQUFDTSxVQURSLENBSkYsQ0FORixDQURGLEVBZ0JFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixTQUFLLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUUsTUFBQyxnRUFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFNBQUssRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFtQixRQUFJLEVBQUVOLElBQUksQ0FBQ08saUJBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUpGLENBaEJGLENBREY7QUEyQkQ7O0dBL0JlTCxTO1VBQ0VwQixTOzs7TUFERm9CLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGlhQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG4vLyBpbXBvcnQgUmF0aW5ncyBmcm9tICcuL0FsYnVtUmF0aW5ncyc7XG5cblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICBpdGVtczogMyxcbiAgICBzbGlkZXNUb1NsaWRlOiAzIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgc2xpZGVzVG9TbGlkZTogMSAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9XG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiAzNzAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDIwMCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBvbnkocHJvcHMpIHtcbiAgY29uc3QgeyBhbGJ1bXMgfSA9IHByb3BzO1xuICAvLyBjb25zb2xlLmxvZyhhbGJ1bXMpXG5cbiAgdmFyIHNvcnQgPSBhbGJ1bXMuZmlsdGVyKGZ1bmN0aW9uIChhbGJ1bSkge1xuXG4gICAgcmV0dXJuIGFsYnVtLmNvbGxlY3Rpb25OYW1lXG4gIH0pXG4gIGNvbnNvbGUubG9nKHNvcnQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxcbiAgICAgIHN3aXBlYWJsZT17dHJ1ZX1cbiAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAgYXV0b3BsYXk9e3RydWV9XG4gICAgICBhdXRvUGxheVNwZWVkPXsyMDAwfVxuICAgICAgLy8gYXV0b1BsYXk9e3RoaXMucHJvcHMuZGV2aWNlVHlwZSAhPT0gXCJtb2JpbGVcIiA/IHRydWUgOiBmYWxzZX1cbiAgICAgIC8vIGF1dG9QbGF5U3BlZWQ9ezEwMDB9XG4gICAgICBrZXlCb2FyZENvbnRyb2w9e3RydWV9XG4gICAgICBjdXN0b21UcmFuc2l0aW9uPVwiYWxsIC41XCJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17NTAwfVxuICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGU9e1tcInRhYmxldFwiLCBcIm1vYmlsZVwiXX1cbiAgICAgIC8vIGRldmljZVR5cGU9e3RoaXMucHJvcHMuZGV2aWNlVHlwZX1cbiAgICAgIGRvdExpc3RDbGFzcz1cImN1c3RvbS1kb3QtbGlzdC1zdHlsZVwiXG4gICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxuICAgID5cbiAgICAgIHtcbiAgICAgICAgc29ydC5tYXAoKGl0ZW0sIGkpID0+IFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8TWVkaWFDYXJkIGtleT17aX0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L0Nhcm91c2VsPlxuICApXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhQ2FyZChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgaXRlbSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgIGltYWdlPXtpdGVtLmFydHdvcmtVcmwxMDB9XG4gICAgICAgICAgdGl0bGU9XCJtdXNpY1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgIHtpdGVtLmNvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICB7aXRlbS5hcnRpc3ROYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICBRdWV1ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtpdGVtLmNvbGxlY3Rpb25WaWV3VXJsfT5QcmV2aWV3PC9hPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MediaCard.js\n");

/***/ })

})