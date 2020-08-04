(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoggerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppLogger = class AppLogger extends _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"] {
};
AppLogger = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ scope: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Scope"].TRANSIENT })
], AppLogger);


let LoggerModule = class LoggerModule {
};
LoggerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        providers: [AppLogger],
        exports: [AppLogger],
    })
], LoggerModule);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs-addons/in-memory-db");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2__);



let ChatUsersService = class ChatUsersService extends _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2__["InMemoryDBService"] {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    prePoulate(count) {
        this.count = count;
        const recordFactory = (idx) => ({
            id: idx,
            name: `User${idx}`,
        });
        this.seed(recordFactory, count);
        return this.getAll();
    }
    addUser(userName) {
        const existing = this.findByName(userName);
        if (existing) {
            return;
        }
        const user = { id: ++this.count, name: userName };
        return this.create(user);
    }
    findByName(userName) {
        return this.query((record) => record.name === userName)[0] || null;
    }
};
ChatUsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ChatUsersService);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    root() {
        return 'Hello World!';
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var _a;



let ChatAuthGuard = class ChatAuthGuard {
    constructor(logger) {
        this.logger = logger;
        this.logger.setContext('ChatAuthGuard');
    }
    canActivate(context) {
        const ctx = context.switchToWs();
        const client = ctx.getClient();
        const handler = context.getHandler().name;
        this.logger.log('canActivate');
        return true;
    }
};
ChatAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_logger__WEBPACK_IMPORTED_MODULE_2__[/* AppLogger */ "a"] !== "undefined" && _app_logger__WEBPACK_IMPORTED_MODULE_2__[/* AppLogger */ "a"]) === "function" ? _a : Object])
], ChatAuthGuard);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2__);



let ChatService = class ChatService extends _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_2__["InMemoryDBService"] {
    prePoulate(count) {
        const recordFactory = (idx) => ({
            id: idx,
            user: {
                id: idx,
                name: `User${idx}`,
            },
            message: `Test${idx}`,
            date: Date.now(),
        });
        this.seed(recordFactory, count);
        return this.getAll();
    }
};
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ChatService);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);





/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
class User {
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEMO_MESSAGES */
const DEMO_MESSAGES = [];


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rxjs_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* unused harmony reexport * */
// start:ng42.barrel

// end:ng42.barrel


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QueueingSubject */
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The QueueingSubject is very similar to the ReplaySubject but it only queues values when it has no observers. The queued values are delivered to the first observer that subscribes at which point the queue is reset.
 * @author https://github.com/insidewhy/queueing-subject
 */
class QueueingSubject extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super(...arguments);
        this.queuedValues = [];
    }
    next(value) {
        if (this.closed || this.observers.length)
            super.next(value);
        else
            this.queuedValues.push(value);
    }
    _subscribe(subscriber) {
        // tslint:disable-next-line: deprecation
        const subscription = super._subscribe(subscriber);
        if (this.queuedValues.length) {
            this.queuedValues.forEach((value) => super.next(value));
            this.queuedValues.splice(0);
        }
        return subscription;
    }
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/platform-ws");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _app_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_4__["join"])(__dirname, '..', 'web'),
                exclude: ['/api*'],
            }),
            _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1__["InMemoryDBModule"].forRoot(),
            _app_logger__WEBPACK_IMPORTED_MODULE_6__[/* LoggerModule */ "b"],
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_8__[/* ChatModule */ "a"],
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_5__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__[/* AppService */ "a"]],
    })
], AppModule);



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root(session) {
        session.views = (session.views || 0) + 1;
        return {
            session,
            message: this.appService.root(),
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Session"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "root", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"]) === "function" ? _a : Object])
], AppController);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chat_users_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _chat_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _chat_gateway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _chat_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _app_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);










let ChatModule = class ChatModule {
};
ChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_addons_in_memory_db__WEBPACK_IMPORTED_MODULE_1__["InMemoryDBModule"].forFeature('chat'), _app_logger__WEBPACK_IMPORTED_MODULE_9__[/* LoggerModule */ "b"]],
        controllers: [/* ChatMessagesController */ _chat_users_controller__WEBPACK_IMPORTED_MODULE_4__[/* ChatUsersController */ "a"]],
        providers: [
            {
                provide: _nestjs_core__WEBPACK_IMPORTED_MODULE_3__["APP_GUARD"],
                useClass: _chat_guard__WEBPACK_IMPORTED_MODULE_7__[/* ChatAuthGuard */ "a"],
            },
            // { provide: Logger, useExisting: AppLogger, },
            _chat_gateway__WEBPACK_IMPORTED_MODULE_6__[/* ChatGateway */ "a"],
            _chat_service__WEBPACK_IMPORTED_MODULE_8__[/* ChatService */ "a"],
            _chat_users_service__WEBPACK_IMPORTED_MODULE_5__[/* ChatUsersService */ "a"],
        ],
    })
], ChatModule);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chat_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
var _a;



let ChatUsersController = class ChatUsersController {
    constructor(userService) {
        this.userService = userService;
    }
    GetUsers() {
        return this.userService.getAll();
    }
    GetUser() {
        return this.userService.prePoulate(10);
    }
    GetUserByID(id) {
        return this.userService.get(+id);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Array)
], ChatUsersController.prototype, "GetUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('seed'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Array)
], ChatUsersController.prototype, "GetUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ChatUsersController.prototype, "GetUserByID", null);
ChatUsersController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('users'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _chat_users_service__WEBPACK_IMPORTED_MODULE_2__[/* ChatUsersService */ "a"] !== "undefined" && _chat_users_service__WEBPACK_IMPORTED_MODULE_2__[/* ChatUsersService */ "a"]) === "function" ? _a : Object])
], ChatUsersController);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _test_chat_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _chat_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _chat_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;









var WS_STATE;
(function (WS_STATE) {
    WS_STATE[WS_STATE["CONNECTING_STATE"] = 0] = "CONNECTING_STATE";
    WS_STATE[WS_STATE["OPEN_STATE"] = 1] = "OPEN_STATE";
    WS_STATE[WS_STATE["CLOSING_STATE"] = 2] = "CLOSING_STATE";
    WS_STATE[WS_STATE["CLOSED_STATE"] = 3] = "CLOSED_STATE";
})(WS_STATE || (WS_STATE = {}));
let ChatGateway = class ChatGateway {
    constructor(logger, chatService, usersService) {
        this.logger = logger;
        this.chatService = chatService;
        this.usersService = usersService;
        this.logger.setContext('ChatGateway');
    }
    handleConnection(client, req) {
        // extract user credentials and data from request,
        const userName = this.parseParamFromReqUrl(req.url, 'chatUser');
        if (!userName) {
            this.logger.error('Unauthorized');
            client._socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
            client._socket.destroy();
            return;
        }
        // A client has connected
        this.logger.log('connection ok');
        this.usersService.addUser(userName);
        // Notify connected clients of current users
        const event = this.prepareEvent('users', this.usersService.getAll());
        this.broadcast(event, client);
    }
    handleDisconnect(client) {
        // A client has disconnected
        this.logger.log('connection closed');
        // TODO: should we delete user completely
        // this.usersService.delete(0);
        // const event = this.prepareEvent('users', this.usersService.getAll());
        // Notify connected clients of current users
        // client.send(event);
    }
    onChatEvent(message) {
        this.logger.log('onChatEvent');
        const data = this.chatService.getAll();
        return { event: 'messages', data };
    }
    onChatSeedEvent(client) {
        this.logger.log('onChatSeed');
        const data = this.chatService.prePoulate(10);
        return { event: 'messages', data };
    }
    onChatMessageEvent(message) {
        this.logger.log('onChatMessageEvent');
        const user = this.usersService.findByName(message.user.name);
        this.chatService.create(Object.assign(Object.assign({}, message), { user, date: Date.now() }));
        const data = this.chatService.getAll();
        const event = this.prepareEvent('messages', data);
        this.broadcast(event);
    }
    onUsersEvent() {
        this.logger.log('users');
        const data = this.usersService.getAll();
        return { event: 'users', data };
    }
    onNewUserEvent(client, userName) {
        this.logger.log('newUser');
        this.usersService.addUser(userName);
        const data = this.usersService.getAll();
        const event = this.prepareEvent('users', data);
        this.broadcast(event, client);
    }
    prepareEvent(event = 'events', data) {
        return JSON.stringify({ event, data });
    }
    // Notify connected clients of current event
    broadcast(event, currentClient) {
        this.server.clients.forEach((sclient) => {
            if (sclient.readyState === WS_STATE.OPEN_STATE) {
                if (!currentClient || (currentClient && sclient !== currentClient)) {
                    sclient.send(event);
                }
            }
        });
    }
    parseParamFromReqUrl(queryString, param) {
        const query = {};
        const pairs = queryString.slice(2).split('&');
        for (const p of pairs) {
            const pair = p.split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query[param];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WebSocketServer"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof ws__WEBPACK_IMPORTED_MODULE_4__["Server"] !== "undefined" && ws__WEBPACK_IMPORTED_MODULE_4__["Server"]) === "function" ? _a : Object)
], ChatGateway.prototype, "server", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_chat_guard__WEBPACK_IMPORTED_MODULE_7__[/* ChatAuthGuard */ "a"]),
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])('chat'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["MessageBody"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _test_chat_data__WEBPACK_IMPORTED_MODULE_3__["Message"] !== "undefined" && _test_chat_data__WEBPACK_IMPORTED_MODULE_3__["Message"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WsResponse"] !== "undefined" && _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WsResponse"]) === "function" ? _c : Object)
], ChatGateway.prototype, "onChatEvent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_chat_guard__WEBPACK_IMPORTED_MODULE_7__[/* ChatAuthGuard */ "a"]),
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])('chatSeed'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["ConnectedSocket"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof WebSocket !== "undefined" && WebSocket) === "function" ? _d : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_e = typeof _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WsResponse"] !== "undefined" && _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WsResponse"]) === "function" ? _e : Object)
], ChatGateway.prototype, "onChatSeedEvent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])('chatMessage'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["MessageBody"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_f = typeof _test_chat_data__WEBPACK_IMPORTED_MODULE_3__["Message"] !== "undefined" && _test_chat_data__WEBPACK_IMPORTED_MODULE_3__["Message"]) === "function" ? _f : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ChatGateway.prototype, "onChatMessageEvent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])('users'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_g = typeof _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WsResponse"] !== "undefined" && _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WsResponse"]) === "function" ? _g : Object)
], ChatGateway.prototype, "onUsersEvent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])('newUser'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["ConnectedSocket"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["MessageBody"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof WebSocket !== "undefined" && WebSocket) === "function" ? _h : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ChatGateway.prototype, "onNewUserEvent", null);
ChatGateway = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WebSocketGateway"])(8081, { namespace: 'chat' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_j = typeof _app_logger__WEBPACK_IMPORTED_MODULE_5__[/* AppLogger */ "a"] !== "undefined" && _app_logger__WEBPACK_IMPORTED_MODULE_5__[/* AppLogger */ "a"]) === "function" ? _j : Object, typeof (_k = typeof _chat_service__WEBPACK_IMPORTED_MODULE_8__[/* ChatService */ "a"] !== "undefined" && _chat_service__WEBPACK_IMPORTED_MODULE_8__[/* ChatService */ "a"]) === "function" ? _k : Object, typeof (_l = typeof _chat_users_service__WEBPACK_IMPORTED_MODULE_6__[/* ChatUsersService */ "a"] !== "undefined" && _chat_users_service__WEBPACK_IMPORTED_MODULE_6__[/* ChatUsersService */ "a"]) === "function" ? _l : Object])
], ChatGateway);



/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_platform_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _nestjs_platform_ws__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_ws__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_app_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */







// https://github.com/artonio/nestjs-session-tutorial-finished/
// import * as session from 'express-session';
// import * as passport from 'passport';
function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_6__[/* AppModule */ "a"], {
            logger: false,
        });
        const globalPrefix = 'api';
        const logger = new _app_app_logger__WEBPACK_IMPORTED_MODULE_5__[/* AppLogger */ "a"]();
        app.useLogger(logger);
        app.setGlobalPrefix(globalPrefix);
        app.useWebSocketAdapter(new _nestjs_platform_ws__WEBPACK_IMPORTED_MODULE_4__["WsAdapter"](app));
        // app.useGlobalGuards(new ChatAuthGuard(app.get(AppLogger)));
        const microservice = app.connectMicroservice({
            transport: _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__["Transport"].TCP,
        });
        yield app.startAllMicroservicesAsync();
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map