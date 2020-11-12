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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/create.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/create.js":
/*!*****************************!*\
  !*** ./pages/api/create.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/database */ \"./utils/database.js\");\n// import albumdb from '../../models'\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  //  /api/create route\n  const {\n    db\n  } = await Object(_utils_database__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])();\n  const {\n    albumName,\n    artistName\n  } = req.body;\n  const result = await db.collection('albumQueue').insertOne({\n    album: {\n      name: albumName,\n      artist: artistName\n    }\n  });\n  console.log(result.ops[0]);\n  res.json({}); // albumdb.create({\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY3JlYXRlLmpzPzE1OWEiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZGIiLCJjb25uZWN0IiwiYWxidW1OYW1lIiwiYXJ0aXN0TmFtZSIsImJvZHkiLCJyZXN1bHQiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiYWxidW0iLCJuYW1lIiwiYXJ0aXN0IiwiY29uc29sZSIsImxvZyIsIm9wcyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsK0VBQWVBLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXdCO0FBQUU7QUFDckMsUUFBTTtBQUFFQztBQUFGLE1BQVMsTUFBTUMsK0RBQU8sRUFBNUI7QUFDQSxRQUFNO0FBQUNDLGFBQUQ7QUFBWUM7QUFBWixNQUEyQkwsR0FBRyxDQUFDTSxJQUFyQztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNTCxFQUFFLENBQUNNLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxTQUE1QixDQUFzQztBQUN2REMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRVAsU0FESDtBQUVIUSxZQUFNLEVBQUVQO0FBRkw7QUFEZ0QsR0FBdEMsQ0FBckI7QUFNQVEsU0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLENBQVgsQ0FBWjtBQUNBZCxLQUFHLENBQUNlLElBQUosQ0FBUyxFQUFULEVBVm1DLENBV25DO0FBRUgsQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jcmVhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYWxidW1kYiBmcm9tICcuLi8uLi9tb2RlbHMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzKXsgLy8gIC9hcGkvY3JlYXRlIHJvdXRlXG4gICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdCgpO1xuICAgIGNvbnN0IHthbGJ1bU5hbWUsIGFydGlzdE5hbWUgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2FsYnVtUXVldWUnKS5pbnNlcnRPbmUoe1xuICAgICAgICBhbGJ1bToge1xuICAgICAgICAgICAgbmFtZTogYWxidW1OYW1lLFxuICAgICAgICAgICAgYXJ0aXN0OiBhcnRpc3ROYW1lXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQub3BzWzBdKVxuICAgIHJlcy5qc29uKHt9KVxuICAgIC8vIGFsYnVtZGIuY3JlYXRlKHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/create.js\n");

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