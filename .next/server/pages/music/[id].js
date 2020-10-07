module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/music/[id]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/music/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/music/[id]/index.js ***!
  \***********************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/music/[id]/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst music = ({\n  featured\n}) => {\n  console.log(featured);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 12\n    }\n  }, \"Title: \", id);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (music);\nasync function getStaticProps({\n  params\n}) {\n  if (params.id === 'rock') {\n    var response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`);\n    var featured = await response.data;\n    return {\n      props: {\n        featured\n      }\n    };\n    return null;\n  }\n}\nasync function getStaticPaths() {\n  // var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`);\n  // var featured  = await response.data;\n  // const paths = await featured.map(album => ({\n  //   params: {id: album.id}\n  // }))\n  return {\n    paths: [{\n      params: {\n        id: 'rock'\n      }\n    }, {\n      params: {\n        id: 'hiphop'\n      }\n    }],\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tdXNpYy8vaW5kZXguanM/NjRmOSJdLCJuYW1lcyI6WyJtdXNpYyIsImZlYXR1cmVkIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDRSxRQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFFQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVdELEVBQVgsQ0FBUDtBQUNELENBTkg7O0FBUWlCTixvRUFBZjtBQUVPLGVBQWVRLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUMvQyxNQUFHQSxNQUFNLENBQUNILEVBQVAsS0FBYyxNQUFqQixFQUF3QjtBQUN0QixRQUFJSSxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLHNGQUFYLENBQXJCO0FBQ0EsUUFBSVgsUUFBUSxHQUFJLE1BQU1TLFFBQVEsQ0FBQ0csSUFBL0I7QUFFQSxXQUFPO0FBQ0xDLFdBQUssRUFBRTtBQUFFYjtBQUFGO0FBREYsS0FBUDtBQUlBLFdBQU8sSUFBUDtBQUNEO0FBRUY7QUFFTSxlQUFlYyxjQUFmLEdBQWdDO0FBQ3JDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxTQUFPO0FBQUVDLFNBQUssRUFBRSxDQUNkO0FBQUVQLFlBQU0sRUFBRTtBQUFFSCxVQUFFLEVBQUU7QUFBTjtBQUFWLEtBRGMsRUFFZDtBQUFFRyxZQUFNLEVBQUU7QUFBRUgsVUFBRSxFQUFFO0FBQU47QUFBVixLQUZjLENBQVQ7QUFHSlcsWUFBUSxFQUFFO0FBSE4sR0FBUDtBQUlEIiwiZmlsZSI6Ii4vcGFnZXMvbXVzaWMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBtdXNpYyA9ICh7IGZlYXR1cmVkIH0pID0+IHtcbiAgY29uc29sZS5sb2coZmVhdHVyZWQpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgXG4gICAgcmV0dXJuIDxwPlRpdGxlOiB7aWR9PC9wPlxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBtdXNpY1xuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgaWYocGFyYW1zLmlkID09PSAncm9jaycpe1xuICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTE1ODAzOCw0ODY1OTcsOTk0NjU2LDUwNDA3MTQmZW50aXR5PWFsYnVtJmxpbWl0PTVgKTtcbiAgICAgIHZhciBmZWF0dXJlZCAgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuICAgICAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBmZWF0dXJlZCwgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIC8vIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD0xNTgwMzgsNDg2NTk3LDk5NDY1Niw1MDQwNzE0JmVudGl0eT1hbGJ1bSZsaW1pdD01YCk7XG4gICAgLy8gdmFyIGZlYXR1cmVkICA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAvLyBjb25zdCBwYXRocyA9IGF3YWl0IGZlYXR1cmVkLm1hcChhbGJ1bSA9PiAoe1xuICAgIC8vICAgcGFyYW1zOiB7aWQ6IGFsYnVtLmlkfVxuICAgIC8vIH0pKVxuXG4gICAgcmV0dXJuIHsgcGF0aHM6IFtcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiAncm9jaycgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6ICdoaXBob3AnIH0gfVxuICAgIF0sIGZhbGxiYWNrOiBmYWxzZSB9XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/music/[id]/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });