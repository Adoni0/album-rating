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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getAlbums.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/getAlbums.js":
/*!********************************!*\
  !*** ./pages/api/getAlbums.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/database */ \"./utils/database.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  //  /api/getAlbums route\n  try {\n    const {\n      db\n    } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])();\n    const result = await db.collection('albumQueue').find().toArray(); // console.log(result.ops[0])\n\n    res.json({\n      result\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: 'unable to retrieve albums...sorry!'\n    });\n  }\n\n  res.json({\n    result: []\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0QWxidW1zLmpzPzBhMzMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZGIiLCJjb25uZWN0IiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwianNvbiIsImUiLCJzdGF0dXMiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsK0VBQWVBLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXdCO0FBQUU7QUFDckMsTUFBSTtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFTLE1BQU1DLCtEQUFPLEVBQTVCO0FBRUEsVUFBTUMsTUFBTSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLFlBQWQsRUFBNEJDLElBQTVCLEdBQW1DQyxPQUFuQyxFQUFyQixDQUhBLENBSUE7O0FBQ0FOLE9BQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUNKO0FBQUQsS0FBVDtBQUNILEdBTkQsQ0FNRSxPQUFNSyxDQUFOLEVBQVM7QUFDUFIsT0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWDtBQUNBVCxPQUFHLENBQUNPLElBQUosQ0FBUztBQUFDRyxXQUFLLEVBQUU7QUFBUixLQUFUO0FBQ0g7O0FBRURWLEtBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUNKLFVBQU0sRUFBRTtBQUFULEdBQVQ7QUFDSCxDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dldEFsYnVtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24ocmVxLCByZXMpeyAvLyAgL2FwaS9nZXRBbGJ1bXMgcm91dGVcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0KCk7XG4gICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignYWxidW1RdWV1ZScpLmZpbmQoKS50b0FycmF5KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5vcHNbMF0pXG4gICAgICAgIHJlcy5qc29uKHtyZXN1bHR9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCk7XG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogJ3VuYWJsZSB0byByZXRyaWV2ZSBhbGJ1bXMuLi5zb3JyeSEnfSlcbiAgICB9XG4gICBcbiAgICByZXMuanNvbih7cmVzdWx0OiBbXX0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/getAlbums.js\n");

/***/ }),

/***/ "./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return connect; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](process.env.DATABASE_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\nasync function connect() {\n  if (!client.isConnected()) await client.connect();\n  const db = client.db('albumQueue');\n  return {\n    db,\n    client\n  };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYXRhYmFzZS5qcz9lMjM0Il0sIm5hbWVzIjpbImNsaWVudCIsIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLG1EQUFKLENBQWdCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBNUIsRUFBMEM7QUFDckRDLGlCQUFlLEVBQUUsSUFEb0M7QUFFckRDLG9CQUFrQixFQUFFO0FBRmlDLENBQTFDLENBQWY7O0FBS0EsZUFBZUMsT0FBZixHQUF3QjtBQUNwQixNQUFHLENBQUNQLE1BQU0sQ0FBQ1EsV0FBUCxFQUFKLEVBQTBCLE1BQU1SLE1BQU0sQ0FBQ08sT0FBUCxFQUFOO0FBQzFCLFFBQU1FLEVBQUUsR0FBR1QsTUFBTSxDQUFDUyxFQUFQLENBQVUsWUFBVixDQUFYO0FBQ0EsU0FBTztBQUFFQSxNQUFGO0FBQU1UO0FBQU4sR0FBUDtBQUNIIiwiZmlsZSI6Ii4vdXRpbHMvZGF0YWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpe1xuICAgIGlmKCFjbGllbnQuaXNDb25uZWN0ZWQoKSkgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYignYWxidW1RdWV1ZScpO1xuICAgIHJldHVybiB7IGRiLCBjbGllbnQgfTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdCB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/database.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });