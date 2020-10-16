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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/vids/[category]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/vids/[category]/index.js":
/*!****************************************!*\
  !*** ./pages/vids/[category]/index.js ***!
  \****************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/vids/[category]/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst vids = ({\n  response\n}) => {\n  console.log(response);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vids); // export async function getServerSideProps(context) {\n//     var { params } = context;\n//     if(params.category === \"hiphop\"){\n//         var key = process.env.YOUTUBE_API_KEY;\n//         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=${key}`)\n//         return {\n//             props: { response }, // will be passed to the page component as props\n//           }\n//     }\n//   }\n\nasync function getStaticProps({\n  params\n}) {\n  if (params.category === 'hiphop') {\n    var key = process.env.YOUTUBE_API_KEY;\n    let response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=${key}`); // const videos = await response.data;\n\n    return {\n      props: {\n        response\n      }\n    };\n  }\n}\nasync function getStaticPaths() {\n  return {\n    paths: [{\n      params: {\n        category: 'hiphop'\n      }\n    }],\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92aWRzL1tjYXRlZ29yeV0vaW5kZXguanM/YzVjNiJdLCJuYW1lcyI6WyJ2aWRzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJjYXRlZ29yeSIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJZT1VUVUJFX0FQSV9LRVkiLCJheGlvcyIsImdldCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUtILENBUEQ7O0FBU2VELG1FQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFTyxlQUFlSSxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFFN0MsTUFBR0EsTUFBTSxDQUFDQyxRQUFQLEtBQW9CLFFBQXZCLEVBQWdDO0FBQzVCLFFBQUlDLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQXRCO0FBQ0EsUUFBSVQsUUFBUSxHQUFHLE1BQU1VLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxtSEFBa0hMLEdBQUksRUFBakksQ0FBckIsQ0FGNEIsQ0FHNUI7O0FBRUEsV0FBTztBQUFFTSxXQUFLLEVBQUU7QUFBRVo7QUFBRjtBQUFULEtBQVA7QUFDRDtBQUNOO0FBR00sZUFBZWEsY0FBZixHQUFnQztBQUVuQyxTQUFPO0FBQUVDLFNBQUssRUFBRSxDQUNkO0FBQUVWLFlBQU0sRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFBVixLQURjLENBQVQ7QUFFSlUsWUFBUSxFQUFFO0FBRk4sR0FBUDtBQUdEIiwiZmlsZSI6Ii4vcGFnZXMvdmlkcy9bY2F0ZWdvcnldL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCB2aWRzID0gKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlkcztcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgICAgdmFyIHsgcGFyYW1zIH0gPSBjb250ZXh0O1xuLy8gICAgIGlmKHBhcmFtcy5jYXRlZ29yeSA9PT0gXCJoaXBob3BcIil7XG4vLyAgICAgICAgIHZhciBrZXkgPSBwcm9jZXNzLmVudi5ZT1VUVUJFX0FQSV9LRVk7XG4vLyAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcT1wb3B1bGFyJTIwaGlwaG9wJTIwbXVzaWMlMjB2aWRlb3Mma2V5PSR7a2V5fWApXG5cbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHByb3BzOiB7IHJlc3BvbnNlIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuLy8gICAgICAgICAgIH1cbi8vICAgICB9XG4gICAgXG4vLyAgIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcblxuICAgIGlmKHBhcmFtcy5jYXRlZ29yeSA9PT0gJ2hpcGhvcCcpe1xuICAgICAgICB2YXIga2V5ID0gcHJvY2Vzcy5lbnYuWU9VVFVCRV9BUElfS0VZO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnE9cG9wdWxhciUyMGhpcGhvcCUyMG11c2ljJTIwdmlkZW9zJmtleT0ke2tleX1gKVxuICAgICAgICAvLyBjb25zdCB2aWRlb3MgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IHJlc3BvbnNlIH0gfVxuICAgICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblxuICAgIHJldHVybiB7IHBhdGhzOiBbXG4gICAgICB7IHBhcmFtczogeyBjYXRlZ29yeTogJ2hpcGhvcCcgfSB9XG4gICAgXSwgZmFsbGJhY2s6IGZhbHNlIH1cbiAgfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vids/[category]/index.js\n");

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