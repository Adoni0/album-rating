webpackHotUpdate_N_E("pages/NFL",{

/***/ "./components/MediaCard.js":
/*!*********************************!*\
  !*** ./components/MediaCard.js ***!
  \*********************************/
/*! exports provided: Pony, MediaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pony\", function() { return Pony; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MediaCard\", function() { return MediaCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"./node_modules/@material-ui/core/esm/CardActionArea/index.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-material-ui-carousel */ \"./node_modules/react-material-ui-carousel/dist/index.js\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/sport-hub/components/MediaCard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    maxWidth: 345\n  },\n  media: {\n    height: 140\n  }\n});\nfunction Pony(props) {\n  var _this = this;\n\n  var items = [{\n    title: 'Football Stuff',\n    description: 'blah blah balh jbjeneneknkenjejbjjjeh ehjejejej dhejjebhjebjebhjje enjehufbueneenineu nejfjebe ejnene nejne'\n  }, {\n    title: 'NFL and Covid',\n    description: 'titans and steelers will postpone their game on sunday opting to move it to another day in the not too distant future.'\n  }];\n  return __jsx(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    interval: 4000,\n    navButtonsAlwaysVisible: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, items.map(function (item, i) {\n    return __jsx(MediaCard, {\n      key: i,\n      item: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 32\n      }\n    });\n  }));\n}\n_c = Pony;\nfunction MediaCard(props) {\n  _s();\n\n  var classes = useStyles();\n  var item = props.item;\n  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      backgroundColor: 'white'\n    },\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.media,\n    image: \"https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\",\n    title: \"football\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, item.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, item.description))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"small\",\n    color: \"secondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"Queue\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"small\",\n    color: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, \"Read More\")));\n}\n\n_s(MediaCard, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = MediaCard;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Pony\");\n$RefreshReg$(_c2, \"MediaCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZWRpYUNhcmQuanM/ODQ3MSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1heFdpZHRoIiwibWVkaWEiLCJoZWlnaHQiLCJQb255IiwicHJvcHMiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtIiwiaSIsIk1lZGlhQ2FyZCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBRHFCO0FBSTNCQyxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBREg7QUFKb0IsQ0FBRCxDQUE1QjtBQVNPLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUMxQixNQUFJQyxLQUFLLEdBQUcsQ0FDVjtBQUNFQyxTQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsZUFBVyxFQUFFO0FBRmYsR0FEVSxFQUtWO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVDLGVBQVcsRUFBRTtBQUZmLEdBTFUsQ0FBWjtBQVdBLFNBQ0UsTUFBQyxpRUFBRDtBQUFVLFlBQVEsRUFBRSxJQUFwQjtBQUEwQiwyQkFBdUIsRUFBRSxJQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQWEsTUFBQyxTQUFEO0FBQVcsU0FBRyxFQUFFQSxDQUFoQjtBQUFtQixVQUFJLEVBQUVELElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBYjtBQUFBLEdBQVYsQ0FGSixDQURGO0FBT0Q7S0FuQmVOLEk7QUFzQlQsU0FBU1EsU0FBVCxDQUFtQlAsS0FBbkIsRUFBMEI7QUFBQTs7QUFDL0IsTUFBTVEsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBRCtCLE1BRXZCWSxJQUZ1QixHQUVkTCxLQUZjLENBRXZCSyxJQUZ1QjtBQUkvQixTQUNFLE1BQUMsOERBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ0kscUJBQWUsRUFBRTtBQUFsQixLQUFiO0FBQXlDLGFBQVMsRUFBRUQsT0FBTyxDQUFDYixJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBRWEsT0FBTyxDQUFDWCxLQURyQjtBQUVFLFNBQUssRUFBQyxpSEFGUjtBQUdFLFNBQUssRUFBQyxVQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxnQkFBWSxNQUF4QjtBQUF5QixXQUFPLEVBQUMsSUFBakM7QUFBc0MsYUFBUyxFQUFDLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1EsSUFBSSxDQUFDSCxLQURSLENBREYsRUFJRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxhQUFTLEVBQUMsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxJQUFJLENBQUNGLFdBRFIsQ0FKRixDQU5GLENBREYsRUFnQkUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFNBQUssRUFBQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJRSxNQUFDLGdFQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsQ0FoQkYsQ0FERjtBQTJCRDs7R0EvQmVJLFM7VUFDRWQsUzs7O01BREZjLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGlhQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gUG9ueShwcm9wcykge1xuICB2YXIgaXRlbXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdGb290YmFsbCBTdHVmZicsXG4gICAgICBkZXNjcmlwdGlvbjogJ2JsYWggYmxhaCBiYWxoIGpiamVuZW5la25rZW5qZWpiampqZWggZWhqZWplamVqIGRoZWpqZWJoamViamViaGpqZSBlbmplaHVmYnVlbmVlbmluZXUgbmVqZmplYmUgZWpuZW5lIG5lam5lJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdORkwgYW5kIENvdmlkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAndGl0YW5zIGFuZCBzdGVlbGVycyB3aWxsIHBvc3Rwb25lIHRoZWlyIGdhbWUgb24gc3VuZGF5IG9wdGluZyB0byBtb3ZlIGl0IHRvIGFub3RoZXIgZGF5IGluIHRoZSBub3QgdG9vIGRpc3RhbnQgZnV0dXJlLidcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbCBpbnRlcnZhbD17NDAwMH0gbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGU9e3RydWV9PlxuICAgICAge1xuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IDxNZWRpYUNhcmQga2V5PXtpfSBpdGVtPXtpdGVtfS8+KVxuICAgICAgfVxuICAgIDwvQ2Fyb3VzZWw+XG4gIClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gTWVkaWFDYXJkKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfX0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU3MDEzOS9wZXhlbHMtcGhvdG8tMjU3MDEzOS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwXCJcbiAgICAgICAgICB0aXRsZT1cImZvb3RiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICBRdWV1ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MediaCard.js\n");

/***/ })

})