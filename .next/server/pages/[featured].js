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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[featured].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[featured].js":
/*!*****************************!*\
  !*** ./pages/[featured].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return featuredRock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/[featured].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction featuredRock() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"featured Rock\"));\n} // rock search\n// export default async(req, res) => {\n//     var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`)\n//     // const json = await response.json();\n//     res.json(response.data)\n//     // console.log(response)\n// }\n// country search\n// export default async(req, res) => {\n//   var response = await axios.get(`https://itunes.apple.com/lookup?id=123055194,535066,163328523&entity=album&limit=5`)\n//   // const json = await response.json();\n//   res.json(response.data)\n//   // console.log(response)\n// }\n//dance search\n// export default async(req, res) => {\n//   var response = await axios.get(`https://itunes.apple.com/lookup?id=666268457,634763116,16013761,1468290871&entity=album&limit=5`)\n//   // const json = await response.json();\n//   res.json(response.data)\n//   // console.log(response)\n// }\n// hp hop search\n// export default async(req, res) => {\n//   var response = await axios.get(`https://itunes.apple.com/lookup?id=894820464,966309175&entity=album&limit=5`)\n//   // const json = await response.json();\n//   res.json(response.data)\n//   // console.log(response)\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bZmVhdHVyZWRdLmpzPzgyYTkiXSwibmFtZXMiOlsiZmVhdHVyZWRSb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFHZSxTQUFTQSxZQUFULEdBQXdCO0FBRW5DLFNBQ0ksbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxDQURKO0FBTUgsQyxDQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvW2ZlYXR1cmVkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0dXJlZFJvY2soKSB7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8aDE+ZmVhdHVyZWQgUm9jazwvaDE+XG4gICAgPC8+XG4gICAgKVxuICAgIFxufVxuXG5cblxuLy8gcm9jayBzZWFyY2hcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4vLyAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTE1ODAzOCw0ODY1OTcsOTk0NjU2LDUwNDA3MTQmZW50aXR5PWFsYnVtJmxpbWl0PTVgKVxuLy8gICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgcmVzLmpzb24ocmVzcG9uc2UuZGF0YSlcbi8vICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcbi8vIH1cblxuLy8gY291bnRyeSBzZWFyY2hcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2xvb2t1cD9pZD0xMjMwNTUxOTQsNTM1MDY2LDE2MzMyODUyMyZlbnRpdHk9YWxidW0mbGltaXQ9NWApXG4vLyAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIHJlcy5qc29uKHJlc3BvbnNlLmRhdGEpXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuLy8gfVxuXG4vL2RhbmNlIHNlYXJjaFxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMocmVxLCByZXMpID0+IHtcbi8vICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPTY2NjI2ODQ1Nyw2MzQ3NjMxMTYsMTYwMTM3NjEsMTQ2ODI5MDg3MSZlbnRpdHk9YWxidW0mbGltaXQ9NWApXG4vLyAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIHJlcy5qc29uKHJlc3BvbnNlLmRhdGEpXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuLy8gfVxuXG4vLyBocCBob3Agc2VhcmNoXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyhyZXEsIHJlcykgPT4ge1xuLy8gICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9sb29rdXA/aWQ9ODk0ODIwNDY0LDk2NjMwOTE3NSZlbnRpdHk9YWxidW0mbGltaXQ9NWApXG4vLyAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIHJlcy5qc29uKHJlc3BvbnNlLmRhdGEpXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuLy8gfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[featured].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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