module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/VideoCarousel/VidItem.js":
/*!*********************************************!*\
  !*** ./components/VideoCarousel/VidItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"react-multi-carousel\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Vids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vids */ \"./components/VideoCarousel/Vids.js\");\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/VideoCarousel/VidItem.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst VidItem = () => {\n  const responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"],\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_Vids__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_Vids__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(_Vids__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(_Vids__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(_Vids__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VidItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvVmlkSXRlbS5qcz85NWIxIl0sIm5hbWVzIjpbIlZpZEl0ZW0iLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInNsaWRlc1RvU2xpZGUiLCJ0YWJsZXQiLCJtb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU1DLFVBQVUsR0FBRztBQUNqQkMsV0FBTyxFQUFFO0FBQ1BDLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BREw7QUFFUEMsV0FBSyxFQUFFLENBRkE7QUFHUEMsbUJBQWEsRUFBRSxDQUhSLENBR1U7O0FBSFYsS0FEUTtBQU1qQkMsVUFBTSxFQUFFO0FBQ05MLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRE47QUFFTkMsV0FBSyxFQUFFLENBRkQ7QUFHTkMsbUJBQWEsRUFBRSxDQUhULENBR1c7O0FBSFgsS0FOUztBQVdqQkUsVUFBTSxFQUFFO0FBQ05OLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLEdBQVA7QUFBWUMsV0FBRyxFQUFFO0FBQWpCLE9BRE47QUFFTkMsV0FBSyxFQUFFLENBRkQ7QUFHTkMsbUJBQWEsRUFBRSxDQUhULENBR1c7O0FBSFg7QUFYUyxHQUFuQjtBQWtCQSxTQUNFLE1BQUMsMkRBQUQ7QUFDRSxhQUFTLEVBQUUsSUFEYjtBQUVFLGFBQVMsRUFBRSxLQUZiO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxjQUFVLEVBQUVOLFVBSmQ7QUFLRSxPQUFHLEVBQUUsSUFMUCxDQUthO0FBTGI7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQU9FLG1CQUFlLEVBQUUsSUFQbkI7QUFRRSxvQkFBZ0IsRUFBQyxRQVJuQjtBQVNFLHNCQUFrQixFQUFFLEdBVHRCO0FBVUUsa0JBQWMsRUFBQyxvQkFWakI7QUFXRSwyQkFBdUIsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBWDNCO0FBWUUsZ0JBQVksRUFBQyx1QkFaZjtBQWFFLGFBQVMsRUFBQyw2QkFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFtQkUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBREY7QUF1QkQsQ0ExQ0Q7O0FBNENlRCxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9DYXJvdXNlbC9WaWRJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiXG5pbXBvcnQgVmlkcyBmcm9tICcuL1ZpZHMnXG5cbmNvbnN0IFZpZEl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDMsXG4gICAgICBzbGlkZXNUb1NsaWRlOiAzIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDIsXG4gICAgICBzbGlkZXNUb1NsaWRlOiAyIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDEsXG4gICAgICBzbGlkZXNUb1NsaWRlOiAxIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsXG4gICAgICBzd2lwZWFibGU9e3RydWV9XG4gICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgc3NyPXt0cnVlfSAvLyBtZWFucyB0byByZW5kZXIgY2Fyb3VzZWwgb24gc2VydmVyLXNpZGUuXG4gICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgIGtleUJvYXJkQ29udHJvbD17dHJ1ZX1cbiAgICAgIGN1c3RvbVRyYW5zaXRpb249XCJhbGwgLjVcIlxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXs1MDB9XG4gICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXG4gICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17W1widGFibGV0XCIsIFwibW9iaWxlXCJdfVxuICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcbiAgICAgIGl0ZW1DbGFzcz1cImNhcm91c2VsLWl0ZW0tcGFkZGluZy00MC1weFwiXG4gICAgPlxuICAgICAgPFZpZHMgLz5cbiAgICAgIDxWaWRzIC8+XG4gICAgICA8VmlkcyAvPlxuICAgICAgPFZpZHMgLz5cbiAgICAgIDxWaWRzIC8+XG4gICAgPC9DYXJvdXNlbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoCarousel/VidItem.js\n");

/***/ }),

/***/ "./components/VideoCarousel/Vids.js":
/*!******************************************!*\
  !*** ./components/VideoCarousel/Vids.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vids; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/VideoCarousel/Vids.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    minWidth: 275\n  },\n  bullet: {\n    display: 'inline-block',\n    margin: '0 2px',\n    transform: 'scale(0.8)'\n  },\n  title: {\n    fontSize: 14\n  },\n  pos: {\n    marginBottom: 12\n  }\n});\nfunction Vids() {\n  const classes = useStyles();\n\n  const bull = __jsx(\"span\", {\n    className: classes.bullet,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 16\n    }\n  }, \"\\u2022\");\n\n  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.title,\n    color: \"textSecondary\",\n    gutterBottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Word of the Day\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h5\",\n    component: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"be\", bull, \"nev\", bull, \"o\", bull, \"lent\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.pos,\n    color: \"textSecondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"adjective\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"body2\",\n    component: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"well meaning and kindly.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), '\"a benevolent smile\"')), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    size: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"Learn More\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvVmlkcy5qcz84MzI3Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlZpZHMiLCJjbGFzc2VzIiwiYnVsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQURxQjtBQUkzQkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxjQURIO0FBRU5DLFVBQU0sRUFBRSxPQUZGO0FBR05DLGFBQVMsRUFBRTtBQUhMLEdBSm1CO0FBUzNCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FUb0I7QUFZM0JDLEtBQUcsRUFBRTtBQUNIQyxnQkFBWSxFQUFFO0FBRFg7QUFac0IsQ0FBRCxDQUE1QjtBQWlCZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLFFBQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6Qjs7QUFDQSxRQUFNYyxJQUFJLEdBQUc7QUFBTSxhQUFTLEVBQUVELE9BQU8sQ0FBQ1QsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFiOztBQUVBLFNBQ0UsTUFBQyw2REFBRDtBQUFNLGFBQVMsRUFBRVMsT0FBTyxDQUFDWCxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBRVcsT0FBTyxDQUFDTCxLQUEvQjtBQUFzQyxTQUFLLEVBQUMsZUFBNUM7QUFBNEQsZ0JBQVksTUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFLE1BQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDS00sSUFETCxTQUNjQSxJQURkLE9BQ3FCQSxJQURyQixTQUpGLEVBT0UsTUFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBRUQsT0FBTyxDQUFDSCxHQUEvQjtBQUFvQyxTQUFLLEVBQUMsZUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVVFLE1BQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFDLEdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0csc0JBSEgsQ0FWRixDQURGLEVBaUJFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBakJGLENBREY7QUF1QkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvVmlkcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtaW5XaWR0aDogMjc1LFxuICB9LFxuICBidWxsZXQ6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW46ICcwIDJweCcsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBwb3M6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZHMoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgYnVsbCA9IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5idWxsZXR9PuKAojwvc3Bhbj47XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIFdvcmQgb2YgdGhlIERheVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgYmV7YnVsbH1uZXZ7YnVsbH1ve2J1bGx9bGVudFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgIGFkamVjdGl2ZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICB3ZWxsIG1lYW5pbmcgYW5kIGtpbmRseS5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7J1wiYSBiZW5ldm9sZW50IHNtaWxlXCInfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPkxlYXJuIE1vcmU8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/VideoCarousel/Vids.js\n");

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return test; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/VideoCarousel/VidItem */ \"./components/VideoCarousel/VidItem.js\");\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/test.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction test() {\n  return __jsx(_components_VideoCarousel_VidItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0LmpzPzE0MmIiXSwibmFtZXMiOlsidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzNCLFNBQ0ksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7QUFHSCIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVmlkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvQ2Fyb3VzZWwvVmlkSXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlkSXRlbSAvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI/YjBmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Card\n");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiPzdkODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CardActions\n");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiPzRkNGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CardContent\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-multi-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiP2FiODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbXVsdGktY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-multi-carousel\n");

/***/ })

/******/ });