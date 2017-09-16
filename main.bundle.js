webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/data-selection/data-selection.module": [
		"../../../../../src/app/modules/data-selection/data-selection.module.ts"
	],
	"./modules/patient-document/patient-document.module": [
		"../../../../../src/app/modules/patient-document/patient-document.module.ts",
		"patient-document.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n    This is our main wrapping element,\n    it's made 100vh high to ensure it is always the correct size\n    and then moved into place and padded with negative margin and padding\n*/\n.gb-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  height: 100vh;\n  position: relative;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  will-change: overflow;\n}\n\n.gb-router-outlet-container {\n  margin-top: 40px;\n}\n\n/*\n    All the scrollable sections should overflow\n    and be whatever height they need to be.\n    As they are flex-items (due to being inside a flex container)\n    they could be made to stretch full height at all times if needed.\n    WebKit inertia scrolling is being added here\n    for any present/future devices that are able to make use of it.\n*/\n.gb-left-panel,\n.gb-right-panel {\n  overflow: auto;\n  height: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n}\n\n\n/*\n    We can choose to explicitly hide the scroll bar if we want\n */\n/*.gb-left-panel::-webkit-scrollbar,*/\n/*.gb-right-panel::-webkit-scrollbar {*/\n  /*display: none;*/\n/*}*/\n\n.gb-left-panel {\n  position: relative;\n  display: inline;\n  width: 26%;\n  background-color: #ededed;\n  margin-left: 0px;\n}\n\n.gb-right-panel {\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n  width: calc(74% - 10px - 6px);\n  background-color: white;\n}\n\n.gutter {\n  position: relative; /* important (all position that's not `static`) */\n  width: 10px;\n  height: auto;\n  background-color: #e4e4e4;\n  cursor: col-resize;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div #parentContainer class=\"gb-container\">\n  <!-- Left panel -->\n  <div #leftPanel class=\"gb-left-panel\">\n    <side-panel></side-panel>\n  </div>\n\n  <!-- Middle split bar -->\n  <div #gutter class=\"gutter\"></div>\n\n  <!-- Right panel -->\n  <div #rightPanel class=\"gb-right-panel\">\n    <nav-bar></nav-bar>\n    <hr>\n    <div class=\"gb-router-outlet-container\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_services_workflow_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_shared_services_endpoint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shared_services_resource_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_shared_services_dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_shared_services_constraint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/constraint.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(endpointService, workflowService, resourceService, dimensionRegistryService, constraintService) {
        this.endpointService = endpointService;
        this.workflowService = workflowService;
        this.resourceService = resourceService;
        this.dimensionRegistryService = dimensionRegistryService;
        this.constraintService = constraintService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var parentContainerElm = this.parentContainer.nativeElement;
        var gutterElm = this.gutter.nativeElement;
        var leftPanelElm = this.leftPanel.nativeElement;
        var rightPanelElm = this.rightPanel.nativeElement;
        this.isGutterDragged = false;
        this.x_pos = 0;
        this.x_gap = 0;
        var onMouseDown = function (event) {
            // preventDefault() is used to
            // prevent browser change cursor icon while dragging
            event.preventDefault();
            this.isGutterDragged = true;
            this.x_gap = this.x_pos - gutterElm.offsetLeft;
            return false;
        };
        var onMouseMove = function (event) {
            this.x_pos = event.pageX;
            if (this.isGutterDragged) {
                var leftW = this.x_pos - this.x_gap;
                leftPanelElm.style.width = leftW + 'px';
                var bound = parentContainerElm.getBoundingClientRect();
                var rightW = bound.width - leftW - 10 - 2 * 3;
                rightPanelElm.style.width = rightW + 'px';
            }
        };
        var onMouseUp = function (event) {
            this.isGutterDragged = false;
        };
        gutterElm.addEventListener('mousedown', onMouseDown.bind(this));
        parentContainerElm.addEventListener('mousemove', onMouseMove.bind(this));
        parentContainerElm.addEventListener('mouseup', onMouseUp.bind(this));
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parentContainer'),
    __metadata("design:type", Object)
], AppComponent.prototype, "parentContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('leftPanel'),
    __metadata("design:type", Object)
], AppComponent.prototype, "leftPanel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gutter'),
    __metadata("design:type", Object)
], AppComponent.prototype, "gutter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rightPanel'),
    __metadata("design:type", Object)
], AppComponent.prototype, "rightPanel", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modules_shared_services_endpoint_service__["a" /* EndpointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modules_shared_services_endpoint_service__["a" /* EndpointService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__modules_shared_services_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modules_shared_services_workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__modules_shared_services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modules_shared_services_resource_service__["a" /* ResourceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__modules_shared_services_dimension_registry_service__["a" /* DimensionRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modules_shared_services_dimension_registry_service__["a" /* DimensionRegistryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__modules_shared_services_constraint_service__["a" /* ConstraintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modules_shared_services_constraint_service__["a" /* ConstraintService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_shared_services_endpoint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_data_selection_data_selection_module__ = __webpack_require__("../../../../../src/app/modules/data-selection/data-selection.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_shared_services_workflow_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_shared_services_resource_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_shared_services_dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_shared_services_constraint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/constraint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_side_panel_side_panel_module__ = __webpack_require__("../../../../../src/app/modules/side-panel/side-panel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_nav_bar_nav_bar_module__ = __webpack_require__("../../../../../src/app/modules/nav-bar/nav-bar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function initConfig(config) {
    return function () { return config.load(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_15__modules_nav_bar_nav_bar_module__["a" /* NavBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_data_selection_data_selection_module__["DataSelectionModule"],
            __WEBPACK_IMPORTED_MODULE_14__modules_side_panel_side_panel_module__["a" /* SidePanelModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__modules_shared_services_endpoint_service__["a" /* EndpointService */],
            __WEBPACK_IMPORTED_MODULE_9__modules_shared_services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_8__modules_shared_services_workflow_service__["a" /* WorkflowService */],
            __WEBPACK_IMPORTED_MODULE_10__modules_shared_services_dimension_registry_service__["a" /* DimensionRegistryService */],
            __WEBPACK_IMPORTED_MODULE_13__modules_shared_services_constraint_service__["a" /* ConstraintService */],
            __WEBPACK_IMPORTED_MODULE_11__config_app_config__["a" /* AppConfig */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"],
                useFactory: initConfig,
                deps: [__WEBPACK_IMPORTED_MODULE_11__config_app_config__["a" /* AppConfig */]],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

// Route Configuration
var routes = [
    {
        path: '',
        redirectTo: '/data-selection',
        pathMatch: 'full'
    },
    {
        path: 'data-selection',
        loadChildren: './modules/data-selection/data-selection.module#DataSelectionModule'
    },
    {
        path: 'patient-document',
        loadChildren: './modules/patient-document/patient-document.module#PatientDocumentModule'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/config/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppConfig = (function () {
    //see this gist: https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
    function AppConfig(http) {
        this.http = http;
        this.config = null;
        this.env = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    AppConfig.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * Use to get the data found in the first file (env file)
     */
    AppConfig.prototype.getEnv = function (key) {
        return this.env[key];
    };
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    AppConfig.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var path = 'app/config/';
            _this.http
                .get(path + 'env.json', {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                _this.config = {
                    'api-url': 'http://localhost:8080',
                    'api-version': 'v2',
                    'app-url': 'http://localhost:4200'
                };
                _this.env = {
                    'env': 'dev'
                };
                console.error('Configuration file "env.json" could not be read');
                resolve(true);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
            })
                .subscribe(function (envResponse) {
                _this.env = envResponse;
                var request = null;
                switch (_this.getEnv('env')) {
                    case 'prod':
                        {
                            request = _this.http.get(path + 'config.' + _this.getEnv('env') + '.json');
                        }
                        break;
                    case 'dev':
                        {
                            request = _this.http.get(path + 'config.' + _this.getEnv('env') + '.json');
                        }
                        break;
                    case 'default':
                        {
                            console.error('Environment file is not set or invalid');
                            resolve(true);
                        }
                        break;
                }
                if (request) {
                    request
                        .map(function (res) { return res.json(); })
                        .catch(function (error) {
                        console.error('Error reading ' + _this.getEnv('env') + ' configuration file');
                        resolve(error);
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
                    })
                        .subscribe(function (responseData) {
                        _this.config = responseData;
                        console.log('Successfully retrieved config: ', _this.config);
                        resolve(true);
                    });
                }
                else {
                    console.error('Env config file "env.json" is not valid');
                    resolve(true);
                }
            });
        });
    };
    return AppConfig;
}());
AppConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppConfig);

var _a;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/accordion-components/data-view/data-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/accordion-components/data-view/data-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p-dataTable [value]=\"patients\"\n               [rows]=\"5\"\n               [paginator]=\"true\"\n               [pageLinks]=\"3\"\n               [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"id\" header=\"Patient ID\" [sortable]=\"true\">\n      <ng-template let-patient=\"rowData\" pTemplate=\"body\">\n        <a href=\"patient-doc.html\" target=\"_blank\">\n          {{patient['id']}}\n        </a>\n        <!--<button type=\"button\" class=\"btn btn-link\" (click)=\"goToPatientDoc()\">{{patient['id']}}</button>-->\n      </ng-template>\n    </p-column>\n    <p-column field=\"confidence\" header=\"Confidence Level Score\" [sortable]=\"true\"></p-column>\n    <p-column field=\"validation\" header=\"Patient Validation\" [sortable]=\"true\">\n      <ng-template let-col let-patient=\"rowData\" pTemplate=\"body\">\n        <p-dropdown [options]=\"validationOptions\" [(ngModel)]=\"patient['validation']\" ></p-dropdown>\n      </ng-template>\n    </p-column>\n    <!--<p-column field=\"interested\" header=\"Patient Interested\" [sortable]=\"true\"></p-column>-->\n    <p-column field=\"interested\" header=\"Patient Interested\" [sortable]=\"true\">\n      <ng-template let-patient=\"rowData\" pTemplate=\"body\">\n        <p-toggleButton *ngIf=\"patient['interested'] !== 'NA'\" [(ngModel)]=\"patient['interested']\"></p-toggleButton>\n        <span *ngIf=\"patient['interested'] === 'NA'\"> NA </span>\n      </ng-template>\n    </p-column>\n  </p-dataTable>\n  <br>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onExportPatientTableClick()\"> Export patient data </button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/accordion-components/data-view/data-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataViewComponent = (function () {
    function DataViewComponent() {
        this.patients = [];
        this.validationOptions = [];
        this.validationOptions.push({ label: 'performed', value: 'performed' });
        this.validationOptions.push({ label: 'not performed', value: 'not performed' });
        this.validationOptions.push({ label: 'eligible', value: 'eligible' });
        this.validationOptions.push({ label: 'not eligible', value: 'not eligible' });
        var p1 = {
            id: 'p1',
            confidence: 89,
            validation: 'not performed',
            interested: true
        };
        var p2 = {
            id: 'p2',
            confidence: 20,
            validation: 'performed',
            interested: false
        };
        var p3 = {
            id: 'p3',
            confidence: 100,
            validation: 'eligible',
            interested: true
        };
        var p4 = {
            id: 'p4',
            confidence: 33,
            validation: 'not eligible',
            interested: 'NA'
        };
        var p5 = {
            id: 'p5',
            confidence: 10,
            validation: 'performed',
            interested: false
        };
        var p6 = {
            id: 'p6',
            confidence: 56,
            validation: 'not eligible',
            interested: false
        };
        var p7 = {
            id: 'p7',
            confidence: 96,
            validation: 'performed',
            interested: 'NA'
        };
        this.patients = [p1, p2, p3, p4, p5, p6, p7];
    }
    DataViewComponent.prototype.ngOnInit = function () {
    };
    DataViewComponent.prototype.onExportPatientTableClick = function () {
        console.log('export patient data: ', this.patients);
    };
    DataViewComponent.prototype.goToPatientDoc = function () {
        window.open('patient-doc.html');
    };
    return DataViewComponent;
}());
DataViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-view',
        template: __webpack_require__("../../../../../src/app/modules/data-selection/accordion-components/data-view/data-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/data-selection/accordion-components/data-view/data-view.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DataViewComponent);

//# sourceMappingURL=data-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/accordion-components/patient-selection/patient-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-inline > * {\n  margin: 8px;\n}\n\n#patientSetName {\n  width: 20%;\n}\n\n.criteria-box {\n  margin-bottom: 30px;\n  padding-bottom: 10px;\n}\n\n.patient-count-box {\n  margin: 4px 4px 4px 4px;\n}\n\n.patient-count-box span {\n  border-radius: 4px;\n  padding: 2px 8px 2px 4px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/accordion-components/patient-selection/patient-selection.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n  <!-- Inclusion criteria -->\n  <div #inclusionCriteriaBox\n       class=\"criteria-box\">\n    <p><b>Inclusion</b> criteria:</p>\n    <div class=\"patient-count-box\">\n      <i class=\"fa fa-spin fa-refresh fa-fw gb-spinner\" [class.loading]=\"constraintService.loadingStateInclusion == 'loading'\"></i>\n      <span [@notifyState]=\"constraintService.loadingStateInclusion\">{{inclusionPatientCount}} patients included.</span>\n    </div>\n    <constraint #rootInclusionConstraintComponent\n                [constraint]=\"rootInclusionConstraint\"\n                [isRoot]=\"true\"></constraint>\n  </div>\n\n  <!-- Exclusion criteria -->\n  <div #exclusionCriteriaBox\n       class=\"criteria-box\">\n    <p><b>Exclusion</b> criteria:</p>\n    <div class=\"patient-count-box\">\n      <i class=\"fa fa-spin fa-refresh fa-fw gb-spinner\" [class.loading]=\"constraintService.loadingStateExclusion == 'loading'\"></i>\n      <span [@notifyState]=\"constraintService.loadingStateExclusion\">{{exclusionPatientCount}} patients excluded.</span>\n    </div>\n    <constraint #rootExclusionConstraintComponent\n                [constraint]=\"rootExclusionConstraint\"\n                [isRoot]=\"true\"></constraint>\n  </div>\n\n\n  <!-- Intersection calculation -->\n  <hr>\n  <div class=\"patient-count-box\">\n    <i class=\"fa fa-spin fa-refresh fa-fw gb-spinner\" [class.loading]=\"constraintService.loadingStateTotal == 'loading'\"></i>\n    <span [@notifyState]=\"constraintService.loadingStateTotal\">{{patientCount}} patients match your selection.</span>\n  </div>\n\n  <!-- Save patient set -->\n  <hr>\n  <div class=\"form-inline\">\n    <input type=\"text\" id=\"patientSetName\" class=\"form-text\"\n           placeholder=\"Patient set name (optional)\"\n           (drop)=\"onTreeNodeDropOnPatientSetNameField($event)\"\n           [(ngModel)]=\"patientSetName\" >\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSavePatientSetBtnClick()\"> Save patient set </button>\n  </div>\n\n  <div class=\"form-inline\" *ngIf=\"constraintService.patientSetPostResponse != null\">\n    <span>Your patient set <b>{{constraintService.patientSetPostResponse.description}}</b>\n      with <b>{{constraintService.patientSetPostResponse.setSize}}</b> patients has been saved\n      with the identifier <b>{{constraintService.patientSetPostResponse.id}}</b></span>\n  </div>\n\n  <p-growl [(value)]=\"msgs\" sticky=\"false\" life=\"1000\"></p-growl>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/accordion-components/patient-selection/patient-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constraint_components_constraint_constraint_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_constraint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/constraint.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientSelectionComponent = (function () {
    function PatientSelectionComponent(_constraintService) {
        this._constraintService = _constraintService;
        this.patientSetName = '';
        this.msgs = [];
    }
    PatientSelectionComponent.prototype.ngOnInit = function () {
        this.constraintService.update();
    };
    Object.defineProperty(PatientSelectionComponent.prototype, "constraintService", {
        get: function () {
            return this._constraintService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSelectionComponent.prototype, "patientCount", {
        get: function () {
            return this.constraintService.patientCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSelectionComponent.prototype, "inclusionPatientCount", {
        get: function () {
            return this.constraintService.inclusionPatientCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSelectionComponent.prototype, "exclusionPatientCount", {
        get: function () {
            return this.constraintService.exclusionPatientCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSelectionComponent.prototype, "rootInclusionConstraint", {
        get: function () {
            return this.constraintService.rootInclusionConstraint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSelectionComponent.prototype, "rootExclusionConstraint", {
        get: function () {
            return this.constraintService.rootExclusionConstraint;
        },
        enumerable: true,
        configurable: true
    });
    PatientSelectionComponent.prototype.onSavePatientSetBtnClick = function () {
        this.constraintService.savePatients(this.patientSetName);
        this.msgs = [];
        var details = 'The patient set with name ' + this.patientSetName + ' has been saved';
        this.msgs.push({ severity: 'info', summary: 'Patient set saved!', detail: details });
        this.patientSetName = '';
    };
    PatientSelectionComponent.prototype.onTreeNodeDropOnPatientSetNameField = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return PatientSelectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rootInclusionConstraintComponent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__constraint_components_constraint_constraint_component__["a" /* ConstraintComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__constraint_components_constraint_constraint_component__["a" /* ConstraintComponent */]) === "function" && _a || Object)
], PatientSelectionComponent.prototype, "rootInclusionConstraintComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rootExclusionConstraintComponent'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__constraint_components_constraint_constraint_component__["a" /* ConstraintComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__constraint_components_constraint_constraint_component__["a" /* ConstraintComponent */]) === "function" && _b || Object)
], PatientSelectionComponent.prototype, "rootExclusionConstraintComponent", void 0);
PatientSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'patient-selection',
        template: __webpack_require__("../../../../../src/app/modules/data-selection/accordion-components/patient-selection/patient-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/data-selection/accordion-components/patient-selection/patient-selection.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('notifyState', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('loading => complete', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        background: 'rgba(51, 156, 144, 0.5)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('1000ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        background: 'rgba(255, 255, 255, 0.0)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_constraint_service__["a" /* ConstraintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_constraint_service__["a" /* ConstraintService */]) === "function" && _c || Object])
], PatientSelectionComponent);

var _a, _b, _c;
//# sourceMappingURL=patient-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/combination-constraint/combination-constraint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-check-label {\n  margin-right: 3px;\n}\n\n.btn-group {\n  margin-top: 3px;\n}\n\n\n.constraint-state-container {\n  margin-left: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/combination-constraint/combination-constraint.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <!-- Child Constraints -->\n  <div *ngFor=\"let child of children; let i = index\">\n    <div *ngIf=\"i > 0\" class=\"constraint-state-container\">\n      <button type=\"button\" class=\"btn btn-outline-primary btn-sm\"\n              (click)=\"toggleJunction()\" [ngSwitch]=\"combinationState\">\n        <i *ngSwitchCase=\"CombinationState.And\">and</i>\n        <i *ngSwitchCase=\"CombinationState.Or\">or</i>\n      </button>\n    </div>\n    <constraint [constraint]=\"child\"\n                (constraintRemoved)=\"onConstraintRemoved(child)\"></constraint>\n  </div>\n\n\n  <div class=\"form-inline\">\n\n    <i class=\"fa fa-plus fa-2x\" aria-hidden=\"true\"></i>\n    <p-autoComplete #autoComplete\n                    [(ngModel)]=\"selectedConstraint\"\n                    [suggestions]=\"searchResults\"\n                    field=\"textRepresentation\"\n                    (completeMethod)=\"onSearch($event)\"\n                    (onSelect)=\"onSelect($event)\"\n                    size=\"60\"\n                    dropdown=\"true\"\n                    (onDropdownClick)=\"onDropdown($event)\"\n                    placeholder=\"add criterion\"></p-autoComplete>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/combination-constraint/combination-constraint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombinationConstraintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constraint_constraint_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_constraints_combination_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_autocomplete_autocomplete__ = __webpack_require__("../../../../primeng/components/autocomplete/autocomplete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_autocomplete_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_autocomplete_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_constraints_combination_state__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-state.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CombinationConstraintComponent = (function (_super) {
    __extends(CombinationConstraintComponent, _super);
    function CombinationConstraintComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CombinationState = __WEBPACK_IMPORTED_MODULE_4__shared_models_constraints_combination_state__["a" /* CombinationState */];
        return _this;
    }
    CombinationConstraintComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CombinationConstraintComponent.prototype, "isAnd", {
        get: function () {
            return this.constraint.isAnd();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CombinationConstraintComponent.prototype, "children", {
        get: function () {
            return this.constraint.children;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Removes the childConstraint from the CombinationConstraint corresponding to this component.
     * @param childConstraint
     */
    CombinationConstraintComponent.prototype.onConstraintRemoved = function (childConstraint) {
        this.constraint.removeChildConstraint(childConstraint);
        this.constraintService.update();
    };
    CombinationConstraintComponent.prototype.onSearch = function (event) {
        var results = this.dimensionRegistry.searchAllConstraints(event.query);
        this.searchResults = results;
    };
    CombinationConstraintComponent.prototype.onDropdown = function (event) {
        var results = this.dimensionRegistry.searchAllConstraints('');
        // Workaround for dropdown not showing properly, as described in
        // https://github.com/primefaces/primeng/issues/745
        this.searchResults = [];
        this.searchResults = results;
        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();
        if (this.autoComplete.panelVisible) {
            this.autoComplete.hide();
        }
        else {
            this.autoComplete.show();
        }
    };
    CombinationConstraintComponent.prototype.onSelect = function (selectedConstraint) {
        console.log('on select, constraint: ', this.selectedConstraint);
        if (this.selectedConstraint != null) {
            // Create a copy of the selected constraint
            var newConstraint = new selectedConstraint.constructor();
            Object.assign(newConstraint, this.selectedConstraint);
            // But we don't want to copy a CombinationConstraint's children
            if (newConstraint instanceof __WEBPACK_IMPORTED_MODULE_2__shared_models_constraints_combination_constraint__["a" /* CombinationConstraint */]) {
                newConstraint.children = [];
            }
            // Add it as a new child
            var combinationConstraint = this.constraint;
            combinationConstraint.children.push(newConstraint);
            // Clear selection (for some reason, setting the model selectedConstraint
            // to null doesn't work)
            this.autoComplete.selectItem(null);
            this.constraintService.update();
        }
    };
    Object.defineProperty(CombinationConstraintComponent.prototype, "combinationState", {
        get: function () {
            return this.constraint.combinationState;
        },
        enumerable: true,
        configurable: true
    });
    CombinationConstraintComponent.prototype.toggleJunction = function () {
        this.constraint.switchCombinationState();
        this.constraintService.update();
    };
    return CombinationConstraintComponent;
}(__WEBPACK_IMPORTED_MODULE_1__constraint_constraint_component__["a" /* ConstraintComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoComplete'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_components_autocomplete_autocomplete__["AutoComplete"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_components_autocomplete_autocomplete__["AutoComplete"]) === "function" && _a || Object)
], CombinationConstraintComponent.prototype, "autoComplete", void 0);
CombinationConstraintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combination-constraint',
        template: __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/combination-constraint/combination-constraint.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/combination-constraint/combination-constraint.component.css"), __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.css")]
    })
], CombinationConstraintComponent);

var _a;
//# sourceMappingURL=combination-constraint.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-constraint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-outline-secondary {\n  color: #333333;\n}\n.btn-outline-secondary:hover {\n  background-color: #c8eae6;\n  color: black;\n}\n\n.gray-text {\n  color: darkgray;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-constraint.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"form-inline\">\n    <label>for Concept </label>\n    <p-autoComplete #autoComplete\n                    [(ngModel)]=\"selectedConcept\"\n                    [suggestions]=\"searchResults\"\n                    field=\"path\"\n                    (completeMethod)=\"onSearch($event)\"\n                    size=\"60\"\n                    dropdown=\"true\"\n                    (onDropdownClick)=\"onDropdown($event)\"></p-autoComplete>\n  </div>\n\n  <!-- if the concept is numeric -->\n  <div *ngIf=\"isNumeric()\" class=\"form-inline\">\n    <span>with value</span>\n    <button type=\"button\" class=\"btn btn-outline-secondary concept-constraint-operator-state-btn\"\n            (click)=\"switchOperatorState()\">\n      {{getOperatorButtonName()}}\n    </button>\n\n    <div *ngIf=\" isBetween() \" class=\"d-inline-block\">\n      <input type=\"number\" class=\"form-control col-sm-4\" placeholder=\"min:{{minLimit}}\"\n             [(ngModel)]=\"minVal\"\n             (ngModelChange)=\"updateConceptValues()\">\n      <label class=\"form-check-label d-inline-block\">\n        <p-checkbox [(ngModel)]=\"isMinEqual\" binary=\"true\"\n                    (ngModelChange)=\"updateConceptValues()\"></p-checkbox>\n      </label>\n      <span>&nbsp;and&nbsp;</span>\n      <input type=\"number\" class=\"form-control col-sm-4\" placeholder=\"max:{{maxLimit}}\"\n             [(ngModel)]=\"maxVal\"\n             (ngModelChange)=\"updateConceptValues()\">\n      <label class=\"form-check-label d-inline-block\">\n        <p-checkbox [(ngModel)]=\"isMaxEqual\" binary=\"true\"\n                    (ngModelChange)=\"updateConceptValues()\"></p-checkbox>\n      </label>\n    </div>\n\n    <div *ngIf=\" !isBetween() \" class=\"d-inline-block\">\n      <input type=\"number\" class=\"form-control col-sm-8\"\n             [(ngModel)]=\"equalVal\"\n             (ngModelChange)=\"updateConceptValues()\">\n    </div>\n\n  </div>\n\n  <!-- if the concept is categorical -->\n  <div *ngIf=\"isCategorical()\" class=\"v-align-center form-inline\">\n    <span>with values</span>\n    <p-autoComplete #categoricalAutoComplete\n                    [(ngModel)]=\"selectedCategories\"\n                    [suggestions]=\"suggestedCategories\"\n                    (completeMethod)=\"onCategorySearch($event)\"\n                    (onSelect)=\"updateConceptValues($event)\"\n                    (onUnselect)=\"onUnselectCategories($event)\"\n                    [multiple]=\"true\"></p-autoComplete>\n    <button type=\"button\" class=\"btn btn-outline-secondary\"\n            (click)=\"selectAllCategories()\">\n      Select all\n    </button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\"\n            (click)=\"clearAllCategories()\">\n      Clear\n    </button>\n  </div>\n\n  <!-- special categorical area for demo -->\n  <!--<div *ngIf=\"isSpecialCategorical()\" class=\"v-align-center form-inline\">-->\n    <!--<span>with {{selectedCategories.length}} values</span>-->\n    <!--<p-autoComplete #categoricalAutoComplete-->\n                    <!--[(ngModel)]=\"selectedCategories\"-->\n                    <!--[suggestions]=\"suggestedCategories\"-->\n                    <!--(completeMethod)=\"onCategorySearch($event)\"-->\n                    <!--(onSelect)=\"updateConceptValues($event)\"-->\n                    <!--(onUnselect)=\"onUnselectCategories($event)\"-->\n                    <!--[multiple]=\"true\"></p-autoComplete>-->\n    <!--<button type=\"button\" class=\"btn btn-outline-secondary\"-->\n            <!--(click)=\"clearAllCategories()\">-->\n      <!--Clear-->\n    <!--</button>-->\n  <!--</div>-->\n\n  <div *ngIf=\"isSpecialCategorical()\" class=\"v-align-center form-inline\" (click)=\"contextCheck()\">\n    <span style=\"margin-left: 10px; margin-right: 10px; color: #737373;\"><small>Context:</small></span>\n    <p-checkbox name=\"group1\" value=\"positive\" [(ngModel)]=\"selectedContexts\"></p-checkbox>\n    <span style=\"margin-left: -5px; margin-right: 5px;\">Positive</span>\n    <p-checkbox name=\"group1\" value=\"negative\" [(ngModel)]=\"selectedContexts\"></p-checkbox>\n    <span style=\"margin-left: -5px; margin-right: 5px;\">Negative</span>\n    <p-checkbox name=\"group1\" value=\"historical\" [(ngModel)]=\"selectedContexts\"></p-checkbox>\n    <span style=\"margin-left: -5px; margin-right: 5px;\">Historical</span>\n    <p-checkbox name=\"group1\" value=\"hypothetical\" [(ngModel)]=\"selectedContexts\"></p-checkbox>\n    <span style=\"margin-left: -5px; margin-right: 5px;\">Hypothetical</span>\n    <p-checkbox name=\"group1\" value=\"other person\" [(ngModel)]=\"selectedContexts\"></p-checkbox>\n    <span style=\"margin-left: -5px; margin-right: 5px;\">Other person</span>\n    <!--<span>{{selectedContexts}}</span>-->\n  </div>\n\n  <div *ngIf=\"isSpecialCategorical()\" style=\"margin-left: 10px;\">\n    <div *ngFor=\"let selectedCatObj of selectedCategoryObjects\" style=\"display: block;\">\n      <span> with filter \"{{selectedCatObj['word']}}\": </span>\n      <p-autoComplete [(ngModel)]=\"selectedCatObj['selectedCategories']\"\n                      [suggestions]=\"suggestedCategories\"\n                      (completeMethod)=\"onCategorySearch($event)\"\n                      (onSelect)=\"updateConceptValues($event)\"\n                      (onUnselect)=\"onUnselectCategoryWithFilter($event, selectedCatObj['word'])\"\n                      [multiple]=\"true\"></p-autoComplete>\n      <button type=\"button\" class=\"btn btn-outline-secondary\"\n              (click)=\"clearAllCategoriesWithFilter(selectedCatObj['word'])\">\n        Clear\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf=\"isSpecialCategorical()\" class=\"v-align-center form-inline\">\n    <span style=\"margin-left: 10px; margin-right: 10px; color: #737373;\"><small>Filter:</small></span>\n    <input style=\"height: 30px;\" type=\"text\" pInputText\n           (keyup)=\"filterAvailableCategories($event)\"\n           [(ngModel)]=\"categoryFilterWord\"/>\n  </div>\n\n  <div *ngIf=\"isSpecialCategorical()\" class=\"v-align-center form-inline\">\n    <span\n      style=\"margin-left: 10px; margin-right: 10px; color: #737373;\"><small>Available:</small>\n    </span>\n    <button type=\"button\" class=\"btn btn-outline-secondary\"\n            (click)=\"selectAllCategories()\">\n      Select all ({{getAvailableAndShownCategoryCount()}} / {{getAvailableCategoryCount()}})\n    </button>\n    <div class=\"form-inline\" style=\"overflow: scroll; min-height: 50px; max-height: 300px; margin-left: 10px; margin-right: 10px; border: solid lightgrey 1px; padding: 5px;\">\n      <div *ngFor=\"let catObj of allCategoryChecks\" style=\"margin: 1px;\">\n        <p-toggleButton *ngIf=\"catObj['checked'] && catObj['shown']\"\n                        onLabel=\"{{catObj['category']}}\"\n                        offLabel=\"{{catObj['category']}}\"\n                        (onChange)=\"handleCategoryCheckChange($event)\"\n                        [(ngModel)]=\"catObj['checked']\">\n        </p-toggleButton>\n  </div>\n\n  <br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-constraint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptConstraintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constraint_constraint_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__ = __webpack_require__("../../../../primeng/components/autocomplete/autocomplete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_concept__ = __webpack_require__("../../../../../src/app/modules/shared/models/concept.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_constraints_concept_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/concept-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-operator-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_value_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/value-constraint.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConceptConstraintComponent = (function (_super) {
    __extends(ConceptConstraintComponent, _super);
    function ConceptConstraintComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.categoryFilterWord = '';
        return _this;
    }
    ConceptConstraintComponent.prototype.ngOnInit = function () {
        this.initializeConstraints();
    };
    ConceptConstraintComponent.prototype.initializeConstraints = function () {
        // Initialize aggregate values
        this.isMinEqual = true;
        this.isMaxEqual = true;
        this.operatorState = __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].BETWEEN;
        this.selectedCategories = [];
        this.suggestedCategories = [];
        this.selectedCategoryObjects = [];
        var constraint = this.constraint;
        if (constraint.concept) {
            // Construct a new constraint that only has the concept as sub constraint
            // (We don't want to apply value and date constraints when getting aggregates)
            var conceptOnlyConstraint = new __WEBPACK_IMPORTED_MODULE_4__shared_models_constraints_concept_constraint__["a" /* ConceptConstraint */]();
            conceptOnlyConstraint.concept = constraint.concept;
            var aggregate = this.resourceService.getConceptAggregateMock(conceptOnlyConstraint);
            this.constraint['concept'].aggregate = aggregate;
            if (this.isNumeric()) {
                this.minLimit = aggregate.min;
                this.maxLimit = aggregate.max;
            }
            else if (this.isCategorical()) {
                this.selectedCategories = aggregate.values;
                this.suggestedCategories = aggregate.values;
            }
            else if (this.isSpecialCategorical()) {
                if (constraint.concept['selectedCategoryObjects']) {
                    this.selectedCategoryObjects = constraint.concept['selectedCategoryObjects'];
                }
                else {
                    this.selectedCategoryObjects.push({
                        word: '',
                        selectedCategories: []
                    });
                }
                if (constraint.concept['selectedContexts']) {
                    this.selectedContexts = constraint.concept['selectedContexts'];
                }
                this.suggestedCategories = [].concat(constraint.concept['values']);
                this.allCategories = [].concat(this.suggestedCategories);
                this.allCategoryChecks = [];
                for (var _i = 0, _a = this.allCategories; _i < _a.length; _i++) {
                    var cat = _a[_i];
                    var obj = {
                        category: cat,
                        checked: true,
                        shown: true
                    };
                    this.allCategoryChecks.push(obj);
                }
            }
        }
    };
    Object.defineProperty(ConceptConstraintComponent.prototype, "selectedConcept", {
        /*
         * -------------------- getters and setters --------------------
         */
        get: function () {
            return this.constraint.concept;
        },
        set: function (value) {
            if (value instanceof __WEBPACK_IMPORTED_MODULE_3__shared_models_concept__["a" /* Concept */]) {
                this.constraint.concept = value;
                this.initializeConstraints();
                this.constraintService.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    /*
     * -------------------- event handlers: concept autocomplete --------------------
     */
    /**
     * when the user searches through concept list
     * @param event
     */
    ConceptConstraintComponent.prototype.onSearch = function (event) {
        var query = event.query.toLowerCase();
        var concepts = this.dimensionRegistry.getConcepts();
        if (query) {
            this.searchResults = concepts.filter(function (concept) { return concept.path.toLowerCase().includes(query); });
        }
        else {
            this.searchResults = concepts;
        }
    };
    /**
     * when user clicks the concept list dropdown
     * @param event
     */
    ConceptConstraintComponent.prototype.onDropdown = function (event) {
        var concepts = this.dimensionRegistry.getConcepts();
        // Workaround for dropdown not showing properly, as described in
        // https://github.com/primefaces/primeng/issues/745
        this.searchResults = [];
        this.searchResults = concepts;
        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();
        if (this.autoComplete.panelVisible) {
            this.autoComplete.hide();
        }
        else {
            this.autoComplete.show();
        }
    };
    ConceptConstraintComponent.prototype.updateConceptValues = function () {
        var conceptConstraint = this.constraint;
        // if the concept is numeric
        if (this.isNumeric()) {
            // if to define a single value
            if (this.operatorState === __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].EQUAL) {
                if (typeof this.equalVal === 'number') {
                    var newVal = new __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_value_constraint__["a" /* ValueConstraint */]();
                    newVal.valueType = this.selectedConcept.type;
                    newVal.operator = '=';
                    newVal.value = this.equalVal;
                    conceptConstraint.values = [];
                    conceptConstraint.values.push(newVal);
                } // else if to define a value range
            }
            else if (this.operatorState === __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].BETWEEN) {
                conceptConstraint.values = [];
                if (typeof this.minVal === 'number') {
                    var newMinVal = new __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_value_constraint__["a" /* ValueConstraint */]();
                    newMinVal.valueType = this.selectedConcept.type;
                    newMinVal.operator = '>';
                    if (this.isMinEqual) {
                        newMinVal.operator = '>=';
                    }
                    newMinVal.value = this.minVal;
                    conceptConstraint.values.push(newMinVal);
                }
                if (typeof this.maxVal === 'number') {
                    var newMaxVal = new __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_value_constraint__["a" /* ValueConstraint */]();
                    newMaxVal.valueType = this.selectedConcept.type;
                    newMaxVal.operator = '<';
                    if (this.isMaxEqual) {
                        newMaxVal.operator = '<=';
                    }
                    newMaxVal.value = this.maxVal;
                    conceptConstraint.values.push(newMaxVal);
                }
            } // else if the concept is categorical
        }
        else if (this.isCategorical()) {
            conceptConstraint.values = [];
            for (var _i = 0, _a = this.selectedCategories; _i < _a.length; _i++) {
                var category = _a[_i];
                var newVal = new __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_value_constraint__["a" /* ValueConstraint */]();
                newVal.valueType = 'STRING';
                newVal.operator = '=';
                newVal.value = category;
                conceptConstraint.values.push(newVal);
            }
        }
        else if (this.isSpecialCategorical()) {
            this.constraint.concept['selectedCategoryObjects'] = this.selectedCategoryObjects;
            console.log('update selectedCategoryObjects: ', this.constraint.concept['selectedCategoryObjects']);
        }
        this.constraintService.update();
    };
    /*
     * -------------------- event handlers: category autocomplete --------------------
     */
    /**
     * when the user searches through the category list of a selected concept
     * @param event
     */
    ConceptConstraintComponent.prototype.onCategorySearch = function (event) {
        var query = event.query.toLowerCase().trim();
        var categories = [];
        if (this.isSpecialCategorical()) {
            categories = this.constraint.concept['values'];
        }
        else {
            categories = this.constraint.concept.aggregate.values;
        }
        if (query) {
            this.suggestedCategories =
                categories.filter(function (category) { return category.toLowerCase().includes(query); });
        }
        else {
            this.suggestedCategories = [].concat(categories);
        }
    };
    ConceptConstraintComponent.prototype.selectAllCategories = function () {
        // console.log('select all values for concept: ', (<ConceptConstraint>this.constraint).concept);
        var concept = this.constraint.concept;
        if (!this.isSpecialCategorical()) {
            this.selectedCategories = this.constraint.concept.aggregate.values;
            if (concept.path.indexOf('consent') !== -1) {
                this.selectedCategories = ['yes', 'no'];
            }
            else if (concept.path.indexOf('gender') !== -1) {
                this.selectedCategories = ['male', 'female'];
            }
        }
        else {
            for (var _i = 0, _a = this.allCategoryChecks; _i < _a.length; _i++) {
                var catobj = _a[_i];
                if (catobj['checked'] && catobj['shown']) {
                    this.putCategoryToSelectedCategories(catobj['category']);
                }
            }
        }
        this.updateConceptValues();
    };
    ConceptConstraintComponent.prototype.clearAllCategories = function () {
        if (this.isSpecialCategorical()) {
            for (var _i = 0, _a = this.selectedCategories; _i < _a.length; _i++) {
                var cat = _a[_i];
                this.putCategoryToAvailableCategories(cat);
            }
        }
        this.selectedCategories = [];
        this.updateConceptValues();
    };
    ConceptConstraintComponent.prototype.clearAllCategoriesWithFilter = function (filterWord) {
        var selectedCategoryObject = this.getSelectedCategoryObject(filterWord);
        if (selectedCategoryObject) {
            for (var _i = 0, _a = selectedCategoryObject['selectedCategories']; _i < _a.length; _i++) {
                var cat = _a[_i];
                this.putCategoryToAvailableCategories(cat);
            }
            selectedCategoryObject['selectedCategories'] = [];
            this.removeEmptySelectedCategoryObjects();
            this.updateConceptValues();
        }
    };
    ConceptConstraintComponent.prototype.putCategoryToSelectedCategories = function (category) {
        /*
         * old approach for a singular selectecdCategories object
         */
        // if (this.selectedCategories.indexOf(category) === -1) {
        //   this.selectedCategories.push(category);
        //   let found = this.getCategoryObject(category);
        //   if (found) {
        //     found['checked'] = false;
        //   }
        // }
        /*
         * new approach for one selectedCategories object per filter word
         */
        var word = this.getCategoryFilterWord();
        var selectedCategoryObject = this.getSelectedCategoryObject(word);
        if (selectedCategoryObject) {
            var selectedCategories = selectedCategoryObject['selectedCategories'];
            if (selectedCategories.indexOf(category) === -1) {
                selectedCategories.push(category);
                var found = this.getCategoryObject(category);
                if (found) {
                    found['checked'] = false;
                }
            }
        }
        else {
            var newObj = {
                word: word,
                selectedCategories: [category]
            };
            var found = this.getCategoryObject(category);
            if (found) {
                found['checked'] = false;
            }
            this.selectedCategoryObjects.push(newObj);
        }
        // console.log('selectedCategoryObjects: ', this.selectedCategoryObjects);
    };
    ConceptConstraintComponent.prototype.putCategoryToAvailableCategories = function (category) {
        var word = this.categoryFilterWord.trim().toLowerCase();
        // console.log('put back ', category, ', with word, ', word);
        // console.log('find catObj: ', this.getCategoryObject(category));
        var found = this.getCategoryObject(category);
        if (found) {
            found['checked'] = true;
            var name = found['category'].trim().toLowerCase();
            if (name.includes(word)) {
                found['shown'] = true;
            }
            else {
                found['shown'] = false;
            }
        }
    };
    ConceptConstraintComponent.prototype.getCategoryObject = function (category) {
        for (var _i = 0, _a = this.allCategoryChecks; _i < _a.length; _i++) {
            var catObj = _a[_i];
            if (category === catObj['category']) {
                return catObj;
            }
        }
        return null;
    };
    ConceptConstraintComponent.prototype.onUnselectCategories = function (category) {
        // For some funny reason, the category is still in the list when this handler is invoked
        var index = this.selectedCategories.indexOf(category);
        this.selectedCategories.splice(index, 1);
        this.putCategoryToAvailableCategories(category);
        this.updateConceptValues();
    };
    ConceptConstraintComponent.prototype.onUnselectCategoryWithFilter = function (category, word) {
        var selectedCategoryObject = this.getSelectedCategoryObject(word);
        // For some funny reason, the category is still in the list when this handler is invoked
        var index = selectedCategoryObject['selectedCategories'].indexOf(category);
        selectedCategoryObject['selectedCategories'].splice(index, 1);
        this.putCategoryToAvailableCategories(category);
        this.removeEmptySelectedCategoryObjects();
        this.updateConceptValues();
    };
    ConceptConstraintComponent.prototype.handleCategoryCheckChange = function (event) {
        for (var _i = 0, _a = this.allCategoryChecks; _i < _a.length; _i++) {
            var catObj = _a[_i];
            if (!catObj['checked']) {
                var cat = catObj['category'];
                if (!this.checkIfCategoryIsAlreadySelected(cat)) {
                    this.putCategoryToSelectedCategories(cat);
                }
            }
        }
        this.updateConceptValues();
    };
    ConceptConstraintComponent.prototype.checkIfCategoryIsAlreadySelected = function (category) {
        for (var _i = 0, _a = this.selectedCategoryObjects; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (cat['selectedCategories'].indexOf(category) !== -1) {
                return true;
            }
        }
        return false;
    };
    ConceptConstraintComponent.prototype.filterAvailableCategories = function (event) {
        // console.log('filterAvailableCategories: ', event, this.categoryFilterWord);
        var word = this.categoryFilterWord.trim().toLowerCase();
        for (var _i = 0, _a = this.allCategoryChecks; _i < _a.length; _i++) {
            var catObj = _a[_i];
            var checked = catObj['checked'];
            var name = catObj['category'].trim().toLowerCase();
            if (checked) {
                if (name.includes(word)) {
                    catObj['shown'] = true;
                }
                else {
                    catObj['shown'] = false;
                }
            }
        }
    };
    ConceptConstraintComponent.prototype.getAvailableAndShownCategoryCount = function () {
        var count = 0;
        for (var _i = 0, _a = this.allCategoryChecks; _i < _a.length; _i++) {
            var catobj = _a[_i];
            if (catobj['checked'] && catobj['shown']) {
                count++;
            }
        }
        return count;
    };
    ConceptConstraintComponent.prototype.getAvailableCategoryCount = function () {
        var count = 0;
        for (var _i = 0, _a = this.allCategoryChecks; _i < _a.length; _i++) {
            var catobj = _a[_i];
            if (catobj['checked']) {
                count++;
            }
        }
        return count;
    };
    ConceptConstraintComponent.prototype.getCategoryFilterWord = function () {
        return this.categoryFilterWord.trim().toLowerCase();
    };
    ConceptConstraintComponent.prototype.getSelectedCategoryObject = function (word) {
        for (var _i = 0, _a = this.selectedCategoryObjects; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (cat['word'] === word) {
                return cat;
            }
        }
        return null;
    };
    ConceptConstraintComponent.prototype.removeEmptySelectedCategoryObjects = function () {
        for (var _i = 0, _a = this.selectedCategoryObjects; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (cat['word'] !== '' && cat['selectedCategories'].length === 0) {
                var index = this.selectedCategoryObjects.indexOf(cat);
                this.selectedCategoryObjects.splice(index, 1);
            }
        }
    };
    ConceptConstraintComponent.prototype.contextCheck = function () {
        console.log('contextCheck, ', this.selectedContexts);
        this.constraint.concept['selectedContexts'] = this.selectedContexts;
    };
    /*
     * -------------------- state checkers --------------------
     */
    ConceptConstraintComponent.prototype.isNumeric = function () {
        var concept = this.constraint.concept;
        if (!concept) {
            return false;
        }
        return concept.type === 'NUMERIC';
    };
    ConceptConstraintComponent.prototype.isCategorical = function () {
        var concept = this.constraint.concept;
        if (!concept) {
            return false;
        }
        return concept.type === 'CATEGORICAL_OPTION';
    };
    ConceptConstraintComponent.prototype.isSpecialCategorical = function () {
        var concept = this.constraint.concept;
        if (!concept) {
            return false;
        }
        return concept.type === 'CATEGORICAL';
    };
    ConceptConstraintComponent.prototype.isBetween = function () {
        return this.operatorState === __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].BETWEEN;
    };
    ConceptConstraintComponent.prototype.switchOperatorState = function () {
        if (this.isNumeric()) {
            this.operatorState =
                (this.operatorState === __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].EQUAL) ?
                    (this.operatorState = __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].BETWEEN) :
                    (this.operatorState = __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].EQUAL);
        }
        this.updateConceptValues();
    };
    ConceptConstraintComponent.prototype.getOperatorButtonName = function () {
        var name = '';
        if (this.isNumeric()) {
            name = (this.operatorState === __WEBPACK_IMPORTED_MODULE_5__concept_operator_state__["a" /* ConceptOperatorState */].BETWEEN) ? 'between' : 'equal to';
        }
        return name;
    };
    return ConceptConstraintComponent;
}(__WEBPACK_IMPORTED_MODULE_1__constraint_constraint_component__["a" /* ConstraintComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoComplete'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__["AutoComplete"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__["AutoComplete"]) === "function" && _a || Object)
], ConceptConstraintComponent.prototype, "autoComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoricalAutoComplete'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__["AutoComplete"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__["AutoComplete"]) === "function" && _b || Object)
], ConceptConstraintComponent.prototype, "categoricalAutoComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trialVisitAutoComplete'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__["AutoComplete"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_components_autocomplete_autocomplete__["AutoComplete"]) === "function" && _c || Object)
], ConceptConstraintComponent.prototype, "trialVisitAutoComplete", void 0);
ConceptConstraintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'concept-constraint',
        template: __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-constraint.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-constraint.component.css"), __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.css")]
    })
], ConceptConstraintComponent);

var _a, _b, _c;
//# sourceMappingURL=concept-constraint.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-operator-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptOperatorState; });
var ConceptOperatorState;
(function (ConceptOperatorState) {
    ConceptOperatorState[ConceptOperatorState["BETWEEN"] = 0] = "BETWEEN";
    ConceptOperatorState[ConceptOperatorState["EQUAL"] = 1] = "EQUAL";
})(ConceptOperatorState || (ConceptOperatorState = {}));
//# sourceMappingURL=concept-operator-state.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/date-operator-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateOperatorState; });
var DateOperatorState;
(function (DateOperatorState) {
    DateOperatorState[DateOperatorState["BEFORE"] = 0] = "BEFORE";
    DateOperatorState[DateOperatorState["AFTER"] = 1] = "AFTER";
    DateOperatorState[DateOperatorState["BETWEEN"] = 2] = "BETWEEN";
    DateOperatorState[DateOperatorState["NOT_BETWEEN"] = 3] = "NOT_BETWEEN";
})(DateOperatorState || (DateOperatorState = {}));
//# sourceMappingURL=date-operator-state.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".constraint-comp {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  margin: 10px 33px 10px 16px; /* top right bottom left */\n  background-color: #f7f7f7;\n  padding: 1px 1px 1px 6px; /* top right bottom left */\n  /*box-shadow: 0px 0px 2px 2px grey; !* h-shadow v-shadow blur spread color *!*/\n  min-height: 40px;\n}\n\n.constraint-btn {\n  margin-right: 6px;\n  margin-top: 3px;\n}\n\n.constraint-remove-btn {\n  margin-right: 3px;\n  margin-top: 3px;\n  margin-left: 2px;\n  border: none;\n  color: lightgray;\n}\n\n.constraint-remove-btn:hover {\n  color: white;\n}\n\n/*.constraint-edit-btn {*/\n  /*margin-right: 3px;*/\n  /*margin-top: 3px;*/\n  /*border: none;*/\n  /*color: lightgray;*/\n/*}*/\n\n/*.constraint-edit-btn:hover {*/\n  /*color: white;*/\n/*}*/\n\n.form-inline * {\n  margin: 6px;\n}\n\n.form-inline div {\n  margin: 0px;\n}\n\n.form-inline div * {\n  margin: 0px;\n}\n\n.dropzone {\n  background-color: rgba(32, 178, 170, .2);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"constraint-comp\">\n  <!-- Remove Button -->\n  <button *ngIf=\"!isRoot\"\n          type=\"button\"\n          class=\"btn btn-outline-danger btn-sm pull-right constraint-remove-btn\"\n          (click)=\"remove()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n\n  <combination-constraint *ngIf=\"constraint.getClassName() == 'CombinationConstraint' \"\n                          [constraint]=\"constraint\"></combination-constraint>\n  <concept-constraint *ngIf=\"constraint.getClassName() == 'ConceptConstraint' \"\n                      [constraint]=\"constraint\"></concept-constraint>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstraintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_constraints_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_constraints_constraint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_models_constraints_constraint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_constraint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/constraint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_resource_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_constraints_combination_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_concept_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/concept-constraint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConstraintComponent = (function () {
    function ConstraintComponent(dimensionRegistry, resourceService, constraintService, element) {
        this.dimensionRegistry = dimensionRegistry;
        this.resourceService = resourceService;
        this.constraintService = constraintService;
        this.element = element;
        this.constraintRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ConstraintComponent.prototype.ngOnInit = function () {
        this.addEventListeners();
    };
    /**
     * Emits the constraintRemoved event, indicating the constraint corresponding
     * to this component is to be removed from its parent.
     */
    ConstraintComponent.prototype.remove = function () {
        this.constraintRemoved.emit();
    };
    ConstraintComponent.prototype.addEventListeners = function () {
        var elm = this.element.nativeElement;
        elm.addEventListener('dragenter', this.onDragEnter.bind(this), false);
        elm.addEventListener('dragover', this.onDragOver.bind(this), false);
        elm.addEventListener('dragleave', this.onDragLeave.bind(this), false);
        elm.addEventListener('drop', this.onDrop.bind(this), false);
    };
    ConstraintComponent.prototype.onDragEnter = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.element.nativeElement.firstChild.classList.add('dropzone');
    };
    ConstraintComponent.prototype.onDragOver = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.element.nativeElement.firstChild.classList.add('dropzone');
    };
    ConstraintComponent.prototype.onDragLeave = function (event) {
        this.element.nativeElement.firstChild.classList.remove('dropzone');
    };
    ConstraintComponent.prototype.onDrop = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.element.nativeElement.firstChild.classList.remove('dropzone');
        var droppedConstraint = this.constraintService.generateConstraintFromSelectedNode();
        console.log('on drop, constraint: ', droppedConstraint);
        if (droppedConstraint) {
            if (this.constraint instanceof __WEBPACK_IMPORTED_MODULE_5__shared_models_constraints_combination_constraint__["a" /* CombinationConstraint */]) {
                var combinationConstraint = this.constraint;
                combinationConstraint.children.push(droppedConstraint);
                this.constraintService.update();
            }
            else if (this.constraint.getClassName() === droppedConstraint.getClassName()) {
                if (this.constraint instanceof __WEBPACK_IMPORTED_MODULE_6__shared_models_constraints_concept_constraint__["a" /* ConceptConstraint */]) {
                    this.constraint = droppedConstraint;
                    // TODO: still needs to find a way to update the aggregates fo the CocneptConstraintComponent
                    this.constraintService.update();
                }
            }
        } // if dropped constraint exists
    };
    return ConstraintComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_constraints_constraint__["Constraint"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_constraints_constraint__["Constraint"]) === "function" && _a || Object)
], ConstraintComponent.prototype, "constraint", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ConstraintComponent.prototype, "isRoot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ConstraintComponent.prototype, "constraintRemoved", void 0);
ConstraintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'constraint',
        template: __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_resource_service__["a" /* ResourceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_constraint_service__["a" /* ConstraintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_constraint_service__["a" /* ConstraintService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], ConstraintComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=constraint.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/data-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-btn:hover {\n  background-color: lightgray;;\n}\n\n.nav-active {\n  font-weight: bolder;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/data-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<md2-accordion [multiple]=\"false\"\n               (open)=\"openAccordion($event)\"\n               (close)=\"closeAccordion($event)\">\n  <md2-accordion-tab [active]=\"true\">\n    <md2-accordion-header>Select patients</md2-accordion-header>\n    <patient-selection></patient-selection>\n  </md2-accordion-tab>\n\n  <!--<md2-accordion-tab>-->\n    <!--<md2-accordion-header>Select observations</md2-accordion-header>-->\n    <!--<observation-selection></observation-selection>-->\n  <!--</md2-accordion-tab>-->\n\n  <md2-accordion-tab>\n    <md2-accordion-header>Data table</md2-accordion-header>\n    <data-view></data-view>\n  </md2-accordion-tab>\n\n  <!--<md2-accordion-tab>-->\n    <!--<md2-accordion-header>Data summary</md2-accordion-header>-->\n    <!--<data-summary></data-summary>-->\n  <!--</md2-accordion-tab>-->\n</md2-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/data-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataSelectionComponent = (function () {
    function DataSelectionComponent(dimensionRegistryService) {
        this.dimensionRegistryService = dimensionRegistryService;
    }
    DataSelectionComponent.prototype.ngOnInit = function () {
    };
    /**
     * The event handler for the accordion tab open event
     * @param event
     */
    DataSelectionComponent.prototype.openAccordion = function (event) {
        // if the 'select observation' accordion is opened,
        // set tree selection mode to checkbox on the left side
        // else set to empty string
        // this.dimensionRegistryService.treeSelectionMode = event.index === 1 ? 'checkbox' : '';
    };
    /**
     * The event handler for the accordion tab close event
     * @param event
     */
    DataSelectionComponent.prototype.closeAccordion = function (event) {
        // if the 'select observation' accordion is closed,
        // set treeSelectionMode to empty string
        // if (event.index === 1) {
        //   this.dimensionRegistryService.treeSelectionMode = '';
        // }
    };
    return DataSelectionComponent;
}());
DataSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-selection',
        template: __webpack_require__("../../../../../src/app/modules/data-selection/data-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/data-selection/data-selection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */]) === "function" && _a || Object])
], DataSelectionComponent);

var _a;
//# sourceMappingURL=data-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/data-selection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSelectionModule", function() { return DataSelectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_selection_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/data-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_selection_routing__ = __webpack_require__("../../../../../src/app/modules/data-selection/data-selection.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accordion_components_data_view_data_view_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/accordion-components/data-view/data-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accordion_components_patient_selection_patient_selection_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/accordion-components/patient-selection/patient-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constraint_components_combination_constraint_combination_constraint_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/combination-constraint/combination-constraint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constraint_components_constraint_constraint_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/constraint/constraint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constraint_components_concept_constraint_concept_constraint_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/concept-constraint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_components_autocomplete_autocomplete__ = __webpack_require__("../../../../primeng/components/autocomplete/autocomplete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_components_autocomplete_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_components_autocomplete_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_md2__ = __webpack_require__("../../../../md2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_checkbox_checkbox__ = __webpack_require__("../../../../primeng/components/checkbox/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_checkbox_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_components_checkbox_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_components_calendar_calendar__ = __webpack_require__("../../../../primeng/components/calendar/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_components_calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DataSelectionModule = (function () {
    function DataSelectionModule() {
    }
    return DataSelectionModule;
}());
DataSelectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__data_selection_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_11_primeng_components_autocomplete_autocomplete__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_12_md2__["a" /* Md2AccordionModule */],
            __WEBPACK_IMPORTED_MODULE_13_primeng_components_checkbox_checkbox__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_14_primeng_components_calendar_calendar__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["ToggleButtonModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["ToggleButtonModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__data_selection_component__["a" /* DataSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__accordion_components_data_view_data_view_component__["a" /* DataViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__accordion_components_patient_selection_patient_selection_component__["a" /* PatientSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__constraint_components_combination_constraint_combination_constraint_component__["a" /* CombinationConstraintComponent */],
            __WEBPACK_IMPORTED_MODULE_9__constraint_components_constraint_constraint_component__["a" /* ConstraintComponent */],
            __WEBPACK_IMPORTED_MODULE_10__constraint_components_concept_constraint_concept_constraint_component__["a" /* ConceptConstraintComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__constraint_components_constraint_constraint_component__["a" /* ConstraintComponent */],
            __WEBPACK_IMPORTED_MODULE_8__constraint_components_combination_constraint_combination_constraint_component__["a" /* CombinationConstraintComponent */]
        ]
    })
], DataSelectionModule);

//# sourceMappingURL=data-selection.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/data-selection/data-selection.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_selection_component__ = __webpack_require__("../../../../../src/app/modules/data-selection/data-selection.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__data_selection_component__["a" /* DataSelectionComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=data-selection.routing.js.map

/***/ }),

/***/ "../../../../../src/app/modules/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gb-navbar {\n  background-color: #fdfdfd;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  padding-top: 10px;\n  width: 100%;\n  z-index: 100;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gb-navbar\">\n  <p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"></p-tabMenu>\n  <hr>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.isDataSelection = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._items = [
            { label: 'Data Selection', routerLink: '/data-selection' }
        ];
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                var whichStep = event.urlAfterRedirects.split('/')[1].split('#')[0];
                _this.updateNavbar(whichStep);
            }
        });
    };
    NavBarComponent.prototype.updateNavbar = function (whichStep) {
        this.isDataSelection = (whichStep === 'data-selection' || whichStep === '');
        if (this.isDataSelection) {
            this._activeItem = this._items[0];
        }
    };
    Object.defineProperty(NavBarComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarComponent.prototype, "activeItem", {
        get: function () {
            return this._activeItem;
        },
        set: function (value) {
            this._activeItem = value;
        },
        enumerable: true,
        configurable: true
    });
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nav-bar',
        template: __webpack_require__("../../../../../src/app/modules/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/nav-bar/nav-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_bar_component__ = __webpack_require__("../../../../../src/app/modules/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_tabmenu_tabmenu__ = __webpack_require__("../../../../primeng/components/tabmenu/tabmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_tabmenu_tabmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_tabmenu_tabmenu__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavBarModule = (function () {
    function NavBarModule() {
    }
    return NavBarModule;
}());
NavBarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_components_tabmenu_tabmenu__["TabMenuModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__nav_bar_component__["a" /* NavBarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__nav_bar_component__["a" /* NavBarComponent */]]
    })
], NavBarModule);

//# sourceMappingURL=nav-bar.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/concept.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Concept; });
var Concept = (function () {
    function Concept() {
    }
    Object.defineProperty(Concept.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Concept.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Concept.prototype, "aggregate", {
        get: function () {
            return this._aggregate;
        },
        set: function (value) {
            this._aggregate = value;
        },
        enumerable: true,
        configurable: true
    });
    return Concept;
}());

//# sourceMappingURL=concept.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/combination-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombinationConstraint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combination_state__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-state.ts");

var CombinationConstraint = (function () {
    function CombinationConstraint() {
        this._children = [];
        this.combinationState = __WEBPACK_IMPORTED_MODULE_0__combination_state__["a" /* CombinationState */].And;
    }
    CombinationConstraint.prototype.getClassName = function () {
        return 'CombinationConstraint';
    };
    CombinationConstraint.prototype.hasNonEmptyChildren = function () {
        return this.getNonEmptyQueryObjects().length > 0;
    };
    /**
     * Collects all non-empty query objects
     * @returns {Object[]}
     */
    CombinationConstraint.prototype.getNonEmptyQueryObjects = function () {
        var childQueryObjects = this._children.reduce(function (result, constraint) {
            var queryObject = constraint.toQueryObject();
            if (queryObject && Object.keys(queryObject).length > 0) {
                result.push(queryObject);
            }
            return result;
        }, []);
        return childQueryObjects;
    };
    CombinationConstraint.prototype.toQueryObject = function () {
        // Collect children query objects
        var childQueryObjects = this.getNonEmptyQueryObjects();
        if (childQueryObjects.length == 0) {
            // No children, so ignore this constraint
            // TODO: show validation error instead?
            return null;
        }
        // Combination
        var queryObject;
        if (childQueryObjects.length == 1) {
            // Only one child, so don't wrap it in and/or
            queryObject = {
                "type": "subselection",
                "dimension": "patient",
                "constraint": childQueryObjects[0]
            };
        }
        else {
            // Wrap the child query objects in subselections
            childQueryObjects = childQueryObjects.map(function (queryObject) {
                return {
                    "type": "subselection",
                    "dimension": "patient",
                    "constraint": queryObject
                };
            });
            // Wrap in and/or constraint
            queryObject = {
                type: this._combinationState === __WEBPACK_IMPORTED_MODULE_0__combination_state__["a" /* CombinationState */].And ? "and" : "or",
                args: childQueryObjects
            };
        }
        return queryObject;
    };
    Object.defineProperty(CombinationConstraint.prototype, "textRepresentation", {
        get: function () {
            return 'Group';
        },
        enumerable: true,
        configurable: true
    });
    CombinationConstraint.prototype.isAnd = function () {
        return this.combinationState === __WEBPACK_IMPORTED_MODULE_0__combination_state__["a" /* CombinationState */].And;
    };
    Object.defineProperty(CombinationConstraint.prototype, "children", {
        get: function () {
            return this._children;
        },
        set: function (value) {
            this._children = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CombinationConstraint.prototype, "combinationState", {
        get: function () {
            return this._combinationState;
        },
        set: function (value) {
            this._combinationState = value;
        },
        enumerable: true,
        configurable: true
    });
    CombinationConstraint.prototype.switchCombinationState = function () {
        this.combinationState =
            (this.combinationState === __WEBPACK_IMPORTED_MODULE_0__combination_state__["a" /* CombinationState */].And) ? __WEBPACK_IMPORTED_MODULE_0__combination_state__["a" /* CombinationState */].Or : __WEBPACK_IMPORTED_MODULE_0__combination_state__["a" /* CombinationState */].And;
    };
    CombinationConstraint.prototype.removeChildConstraint = function (child) {
        var index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    };
    return CombinationConstraint;
}());

//# sourceMappingURL=combination-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/combination-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombinationState; });
var CombinationState;
(function (CombinationState) {
    CombinationState[CombinationState["And"] = 0] = "And";
    CombinationState[CombinationState["Or"] = 1] = "Or";
})(CombinationState || (CombinationState = {}));
//# sourceMappingURL=combination-state.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/concept-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptConstraint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/time-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trial_visit_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/trial-visit-constraint.ts");


var ConceptConstraint = (function () {
    function ConceptConstraint() {
        // date range
        this.applyDateConstraint = false;
        this.timeConstraint = new __WEBPACK_IMPORTED_MODULE_0__time_constraint__["a" /* TimeConstraint */]();
        // trial visit
        this.applyTrialVisitConstraint = false;
        this.trialVisitConstraint = new __WEBPACK_IMPORTED_MODULE_1__trial_visit_constraint__["a" /* TrialVisitConstraint */]();
        this.values = [];
    }
    Object.defineProperty(ConceptConstraint.prototype, "concept", {
        get: function () {
            return this._concept;
        },
        set: function (value) {
            this._concept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConceptConstraint.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (value) {
            this._values = value;
        },
        enumerable: true,
        configurable: true
    });
    ConceptConstraint.prototype.getClassName = function () {
        return 'ConceptConstraint';
    };
    ConceptConstraint.prototype.toQueryObject = function () {
        // When no concept is selected, we cannot create a query object (it should be ignored)
        if (!this._concept) {
            return null;
        }
        var args = [];
        args.push({
            type: 'concept',
            path: this._concept.path,
            valueType: this._concept.type
        });
        if (this.values.length > 0) {
            if (this._concept.type == 'NUMERIC') {
                // Add numerical values directly to the main constraint
                for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                    var value = _a[_i];
                    args.push({
                        type: "value",
                        valueType: value.valueType,
                        operator: value.operator,
                        value: value.value
                    });
                }
            }
            if (this._concept.type == 'CATEGORICAL_OPTION') {
                // Wrap categorical values in an OR constraint
                args.push({
                    type: "or",
                    args: this.values.map(function (value) { return value.toQueryObject(); })
                });
            }
        }
        if (this.applyDateConstraint) {
            args.push(this.timeConstraint.toQueryObject());
        }
        if (this.applyTrialVisitConstraint) {
            args.push(this.trialVisitConstraint.toQueryObject());
        }
        return {
            type: "and",
            args: args
        };
    };
    Object.defineProperty(ConceptConstraint.prototype, "textRepresentation", {
        get: function () {
            if (this._concept) {
                return "Concept: " + this._concept.path;
            }
            return 'Concept';
        },
        enumerable: true,
        configurable: true
    });
    return ConceptConstraint;
}());

//# sourceMappingURL=concept-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/constraint.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/negation-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegationConstraint; });
var NegationConstraint = (function () {
    function NegationConstraint(constraint) {
        this._constraint = constraint;
    }
    Object.defineProperty(NegationConstraint.prototype, "constraint", {
        get: function () {
            return this._constraint;
        },
        set: function (value) {
            this._constraint = value;
        },
        enumerable: true,
        configurable: true
    });
    NegationConstraint.prototype.getClassName = function () {
        return 'NegationConstraint';
    };
    NegationConstraint.prototype.toQueryObject = function () {
        return {
            type: "negation",
            arg: this._constraint.toQueryObject()
        };
    };
    Object.defineProperty(NegationConstraint.prototype, "textRepresentation", {
        get: function () {
            return 'Negation';
        },
        enumerable: true,
        configurable: true
    });
    return NegationConstraint;
}());

//# sourceMappingURL=negation-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/time-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeConstraint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__ = __webpack_require__("../../../../../src/app/modules/data-selection/constraint-components/concept-constraint/date-operator-state.ts");

var TimeConstraint = (function () {
    function TimeConstraint() {
        this.dateOperator = __WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].BETWEEN;
        this.date1 = new Date();
        this.date2 = new Date();
    }
    TimeConstraint.prototype.getClassName = function () {
        return 'TimeConstraint';
    };
    /** Builds a query object for the date constraint.
     * @returns {Object}
     */
    TimeConstraint.prototype.toQueryObject = function () {
        // Operator
        var operator = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].BETWEEN] = "<-->",
            _a[__WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].NOT_BETWEEN] = "<-->",
            _a[__WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].BEFORE] = "<-",
            _a[__WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].AFTER] = "->",
            _a)[this.dateOperator];
        // Values (dates)
        var values = [this.date1.toISOString()];
        if (this.dateOperator == __WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].BETWEEN ||
            this.dateOperator == __WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].NOT_BETWEEN) {
            values.push(this.date2.toISOString());
        }
        // Construct the date constraint
        var query = {
            type: "time",
            field: {
                dimension: "start time",
                fieldName: "startDate",
                type: "DATE"
            },
            operator: operator,
            values: values
        };
        // Wrap date constraint in a negation if required
        if (this.dateOperator == __WEBPACK_IMPORTED_MODULE_0__data_selection_constraint_components_concept_constraint_date_operator_state__["a" /* DateOperatorState */].NOT_BETWEEN) {
            query = {
                type: "negation",
                arg: query
            };
        }
        return query;
        var _a;
    };
    Object.defineProperty(TimeConstraint.prototype, "textRepresentation", {
        get: function () {
            return "Time constraint";
        },
        enumerable: true,
        configurable: true
    });
    return TimeConstraint;
}());

//# sourceMappingURL=time-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/trial-visit-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrialVisitConstraint; });
var TrialVisitConstraint = (function () {
    function TrialVisitConstraint() {
        this.trialVisits = [];
    }
    TrialVisitConstraint.prototype.getClassName = function () {
        return 'TrialVisitConstraint';
    };
    /** Builds a query object for the date constraint.
     * @returns {Object}
     */
    TrialVisitConstraint.prototype.toQueryObject = function () {
        var values = [];
        for (var _i = 0, _a = this.trialVisits; _i < _a.length; _i++) {
            var visit = _a[_i];
            values.push(Number(visit.id));
        }
        var queryObj = {
            "type": "field",
            "field": {
                "dimension": "trial visit",
                "fieldName": "id",
                "type": "NUMERIC"
            },
            "operator": "in",
            "value": values
        };
        return queryObj;
    };
    Object.defineProperty(TrialVisitConstraint.prototype, "textRepresentation", {
        get: function () {
            return "Trial visit constraint";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrialVisitConstraint.prototype, "trialVisits", {
        get: function () {
            return this._trialVisits;
        },
        set: function (value) {
            this._trialVisits = value;
        },
        enumerable: true,
        configurable: true
    });
    return TrialVisitConstraint;
}());

//# sourceMappingURL=trial-visit-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/true-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrueConstraint; });
var TrueConstraint = (function () {
    function TrueConstraint() {
    }
    TrueConstraint.prototype.getClassName = function () {
        return 'TrueConstraint';
    };
    TrueConstraint.prototype.toQueryObject = function () {
        return { "type": "true" };
    };
    Object.defineProperty(TrueConstraint.prototype, "textRepresentation", {
        get: function () {
            return 'True';
        },
        enumerable: true,
        configurable: true
    });
    return TrueConstraint;
}());

//# sourceMappingURL=true-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/constraints/value-constraint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueConstraint; });
var ValueConstraint = (function () {
    function ValueConstraint() {
    }
    Object.defineProperty(ValueConstraint.prototype, "valueType", {
        get: function () {
            return this._valueType;
        },
        set: function (value) {
            this._valueType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueConstraint.prototype, "operator", {
        get: function () {
            return this._operator;
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueConstraint.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    ValueConstraint.prototype.getClassName = function () {
        return 'ValueConstraint';
    };
    ValueConstraint.prototype.toQueryObject = function () {
        return {
            type: "value",
            valueType: this._valueType,
            operator: this._operator,
            value: this._value
        };
    };
    Object.defineProperty(ValueConstraint.prototype, "textRepresentation", {
        get: function () {
            return 'Value';
        },
        enumerable: true,
        configurable: true
    });
    return ValueConstraint;
}());

//# sourceMappingURL=value-constraint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/drop-mode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropMode; });
var DropMode;
(function (DropMode) {
    DropMode[DropMode["TreeNode"] = 0] = "TreeNode";
    DropMode[DropMode["PatientSet"] = 1] = "PatientSet";
    DropMode[DropMode["ObservationSet"] = 2] = "ObservationSet";
})(DropMode || (DropMode = {}));
//# sourceMappingURL=drop-mode.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/endpoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Endpoint; });
var Endpoint = (function () {
    function Endpoint(_apiUrl, _apiVersion, _appUrl) {
        this._apiUrl = _apiUrl;
        this._apiVersion = _apiVersion;
        this._appUrl = _appUrl;
        this._isAuthenticated = false;
    }
    Object.defineProperty(Endpoint.prototype, "apiUrl", {
        get: function () {
            return this._apiUrl;
        },
        set: function (value) {
            this._apiUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "apiVersion", {
        get: function () {
            return this._apiVersion;
        },
        set: function (value) {
            this._apiVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "appUrl", {
        get: function () {
            return this._appUrl;
        },
        set: function (value) {
            this._appUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Endpoint.prototype.getUrl = function () {
        return this._apiUrl + '/' + this._apiVersion;
    };
    Object.defineProperty(Endpoint.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        set: function (value) {
            this._isAuthenticated = !!value;
            this._accessToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated;
        },
        set: function (value) {
            this._isAuthenticated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "expiresAt", {
        get: function () {
            return this._expiresAt;
        },
        set: function (value) {
            this._expiresAt = value;
        },
        enumerable: true,
        configurable: true
    });
    return Endpoint;
}());

//# sourceMappingURL=endpoint.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/patient-set.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientSet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saved_set__ = __webpack_require__("../../../../../src/app/modules/shared/models/saved-set.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PatientSet = (function (_super) {
    __extends(PatientSet, _super);
    function PatientSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PatientSet.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSet.prototype, "setSize", {
        get: function () {
            return this._setSize;
        },
        set: function (value) {
            this._setSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSet.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSet.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientSet.prototype, "requestConstraints", {
        get: function () {
            return this._requestConstraints;
        },
        set: function (value) {
            this._requestConstraints = value;
        },
        enumerable: true,
        configurable: true
    });
    return PatientSet;
}(__WEBPACK_IMPORTED_MODULE_0__saved_set__["a" /* SavedSet */]));

//# sourceMappingURL=patient-set.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/saved-set.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedSet; });
var SavedSet = (function () {
    function SavedSet(id, name) {
        this.id = id;
        this.name = name;
    }
    Object.defineProperty(SavedSet.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SavedSet.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return SavedSet;
}());

//# sourceMappingURL=saved-set.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/models/workflow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workflow; });
var Workflow = (function () {
    function Workflow() {
    }
    return Workflow;
}());

//# sourceMappingURL=workflow.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/services/constraint.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstraintService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_constraints_true_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/true-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_concept__ = __webpack_require__("../../../../../src/app/modules/shared/models/concept.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_constraints_concept_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/concept-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_constraints_combination_state__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_constraints_negation_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/negation-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_drop_mode__ = __webpack_require__("../../../../../src/app/modules/shared/models/drop-mode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_patient_set__ = __webpack_require__("../../../../../src/app/modules/shared/models/patient-set.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConstraintService = (function () {
    function ConstraintService(resourceService, dimensionReistryService) {
        this.resourceService = resourceService;
        this.dimensionReistryService = dimensionReistryService;
        /*
         * The patient count variables and criterion constraints
         * in the patient-selection accordion in data-selection
         */
        this._patientCount = 0;
        this._inclusionPatientCount = 0;
        this._exclusionPatientCount = 0;
        this.loadingStateInclusion = 'complete';
        this.loadingStateExclusion = 'complete';
        this.loadingStateTotal = 'complete';
        /*
         * The selected node (drag-start) in the side-panel of either
         * (1) the tree
         * (2) the patient sets
         * or (3) the observation sets
         */
        this._selectedNode = null;
        this._validTreeNodeTypes = [];
        this._rootInclusionConstraint = new __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__["a" /* CombinationConstraint */]();
        this._rootExclusionConstraint = new __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__["a" /* CombinationConstraint */]();
        this._validTreeNodeTypes = [
            'NUMERIC',
            'CATEGORICAL_OPTION',
            'STUDY',
            'UNKNOWN',
            'CATEGORICAL'
        ];
        this.savedPatientSets = [];
    }
    ConstraintService.prototype.update = function () {
        this.updatePatients();
    };
    ConstraintService.prototype.updatePatients = function () {
        var _this = this;
        this.loadingStateInclusion = 'loading';
        this.loadingStateExclusion = 'loading';
        this.loadingStateTotal = 'loading';
        /*
         * Inclusion constraint patient count
         */
        var inclusionConstraint = this.generateInclusionConstraint(this.rootInclusionConstraint);
        this.resourceService.getPatients(inclusionConstraint, 'Inclusion')
            .subscribe(function (patients) {
            _this.inclusionPatientCount = patients.length;
            _this.loadingStateInclusion = 'complete';
        }, function (err) {
            // console.error(err);
            _this.inclusionPatientCount = Math.floor(Math.random() * 100);
            _this.loadingStateInclusion = 'complete';
        });
        /*
         * Exclusion constraint patient count
         */
        // Only execute the exclusion constraint if it has non-empty children
        if (this.rootExclusionConstraint.hasNonEmptyChildren()) {
            var exclusionConstraint = this.generateExclusionConstraint(this.rootInclusionConstraint, this.rootExclusionConstraint);
            this.resourceService.getPatients(exclusionConstraint, 'Exclusion')
                .subscribe(function (patients) {
                _this.exclusionPatientCount = patients.length;
                _this.loadingStateExclusion = 'complete';
            }, function (err) {
                // console.error(err);
                _this.exclusionPatientCount = Math.floor(Math.random() * 50);
                _this.loadingStateExclusion = 'complete';
            });
        }
        else {
            this.exclusionPatientCount = 0;
            this.loadingStateExclusion = 'complete';
        }
        /*
         * Intersection constraint patient count
         */
        var intersectionConstraint = this.generateIntersectionConstraint(this.rootInclusionConstraint, this.rootExclusionConstraint);
        this.resourceService.getPatients(intersectionConstraint, 'Intersection')
            .subscribe(function (patients) {
            _this.patientCount = patients.length;
            _this.patientCount = _this.inclusionPatientCount - _this.exclusionPatientCount;
            _this.patientCount = _this.patientCount >= 0 ? _this.patientCount : 0;
            _this.loadingStateTotal = 'complete';
        }, function (err) {
            // console.error(err);
            _this.patientCount = _this.inclusionPatientCount - _this.exclusionPatientCount;
            _this.patientCount = _this.patientCount >= 0 ? _this.patientCount : 0;
            _this.loadingStateTotal = 'complete';
        });
    };
    /**
     * Generate the constraint for the intersection between
     * the inclusion constraint and the negated exclusion constraint
     * @param inclusionConstraint
     * @param exclusionConstraint
     * @returns {CombinationConstraint}
     */
    ConstraintService.prototype.generateIntersectionConstraint = function (inclusionConstraint, exclusionConstraint) {
        // Inclusion part
        if (!inclusionConstraint.hasNonEmptyChildren()) {
            inclusionConstraint = new __WEBPACK_IMPORTED_MODULE_3__models_constraints_true_constraint__["a" /* TrueConstraint */]();
        }
        // Only use exclusion if there's something there
        if (exclusionConstraint.hasNonEmptyChildren()) {
            // Wrap exclusion in negation
            var negatedExclusionConstraint = new __WEBPACK_IMPORTED_MODULE_7__models_constraints_negation_constraint__["a" /* NegationConstraint */](exclusionConstraint);
            var combination = new __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__["a" /* CombinationConstraint */]();
            combination.children.push(inclusionConstraint);
            combination.children.push(negatedExclusionConstraint);
            return combination;
        }
        else {
            // Otherwise just return the inclusion part
            return inclusionConstraint;
        }
    };
    /**
     * Generate the constraint for retrieving the patients with only the inclusion criteria
     * @param inclusionConstraint
     * @returns {TrueConstraint|Constraint}
     */
    ConstraintService.prototype.generateInclusionConstraint = function (inclusionConstraint) {
        return !inclusionConstraint.hasNonEmptyChildren() ?
            new __WEBPACK_IMPORTED_MODULE_3__models_constraints_true_constraint__["a" /* TrueConstraint */]() : inclusionConstraint;
    };
    /**
     * Generate the constraint for retrieving the patients with the exclusion criteria,
     * but also in the inclusion set
     * @param inclusionConstraint
     * @param exclusionConstraint
     * @returns {CombinationConstraint}
     */
    ConstraintService.prototype.generateExclusionConstraint = function (inclusionConstraint, exclusionConstraint) {
        // Inclusion part, which is what the exclusion count is calculated from
        inclusionConstraint = this.generateInclusionConstraint(inclusionConstraint);
        var combination = new __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__["a" /* CombinationConstraint */]();
        combination.children.push(inclusionConstraint);
        combination.children.push(exclusionConstraint);
        return combination;
    };
    ConstraintService.prototype.generateConstraintFromSelectedNode = function () {
        var constraint = null;
        var dropMode = this.selectedNode['dropMode'];
        console.log('dropped node: ', this.selectedNode);
        // if the dropped node is a tree node
        if (dropMode === __WEBPACK_IMPORTED_MODULE_8__models_drop_mode__["a" /* DropMode */].TreeNode) {
            var treeNode = this.selectedNode;
            var treeNodeType = treeNode['type'];
            if (treeNodeType === 'NUMERIC' ||
                treeNodeType === 'CATEGORICAL_OPTION') {
                var concept = new __WEBPACK_IMPORTED_MODULE_4__models_concept__["a" /* Concept */]();
                if (treeNode['constraint']) {
                    var constraintObject = treeNode['constraint'];
                    constraintObject['valueType'] = treeNodeType;
                    constraint = this.generateConstraintFromConstraintObject(constraintObject);
                }
                else {
                    concept.path = treeNode['conceptPath'];
                    concept.type = treeNodeType;
                    constraint = new __WEBPACK_IMPORTED_MODULE_5__models_constraints_concept_constraint__["a" /* ConceptConstraint */]();
                    constraint.concept = concept;
                }
            }
            else if (treeNodeType === 'CATEGORICAL') {
                console.log('categorical node..');
                var concept = new __WEBPACK_IMPORTED_MODULE_4__models_concept__["a" /* Concept */]();
                concept.path = treeNode['conceptPath'];
                concept.type = treeNodeType;
                concept['values'] = treeNode['values'];
                constraint = new __WEBPACK_IMPORTED_MODULE_5__models_constraints_concept_constraint__["a" /* ConceptConstraint */]();
                constraint.concept = concept;
            }
        }
        else if (dropMode === __WEBPACK_IMPORTED_MODULE_8__models_drop_mode__["a" /* DropMode */].PatientSet) {
            if (this.selectedNode.requestConstraints) {
                var constraintObject = JSON.parse(this.selectedNode.requestConstraints);
                constraintObject = this.optimizeConstraintObject(constraintObject);
                constraint = this.generateConstraintFromConstraintObject(constraintObject);
            }
        }
        else if (dropMode === __WEBPACK_IMPORTED_MODULE_8__models_drop_mode__["a" /* DropMode */].ObservationSet) {
        }
        return constraint;
    };
    ConstraintService.prototype.generateConstraintFromConstraintObject = function (constraintObject) {
        var type = constraintObject['type'];
        var constraint = null;
        if (type === 'concept') {
            var concept = new __WEBPACK_IMPORTED_MODULE_4__models_concept__["a" /* Concept */]();
            concept.path = constraintObject['path'];
            concept.type = constraintObject['valueType'];
            constraint = new __WEBPACK_IMPORTED_MODULE_5__models_constraints_concept_constraint__["a" /* ConceptConstraint */]();
            constraint.concept = concept;
        }
        else if (type === 'combination') {
            var operator = constraintObject['operator'];
            constraint = new __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__["a" /* CombinationConstraint */]();
            constraint.combinationState =
                (operator === 'and') ? __WEBPACK_IMPORTED_MODULE_6__models_constraints_combination_state__["a" /* CombinationState */].And : __WEBPACK_IMPORTED_MODULE_6__models_constraints_combination_state__["a" /* CombinationState */].Or;
            for (var _i = 0, _a = constraintObject['args']; _i < _a.length; _i++) {
                var arg = _a[_i];
                if (arg['type'] === 'concept') {
                    arg['valueType'] = constraintObject['valueType'];
                }
                var child = this.generateConstraintFromConstraintObject(arg);
                constraint.children.push(child);
            }
        }
        else if (type === 'and' || type === 'or') {
            var operator = type;
            constraint = new __WEBPACK_IMPORTED_MODULE_1__models_constraints_combination_constraint__["a" /* CombinationConstraint */]();
            constraint.combinationState =
                (operator === 'and') ? __WEBPACK_IMPORTED_MODULE_6__models_constraints_combination_state__["a" /* CombinationState */].And : __WEBPACK_IMPORTED_MODULE_6__models_constraints_combination_state__["a" /* CombinationState */].Or;
            for (var _b = 0, _c = constraintObject['args']; _b < _c.length; _b++) {
                var arg = _c[_b];
                var child = this.generateConstraintFromConstraintObject(arg);
                constraint.children.push(child);
            }
        }
        return constraint;
    };
    ConstraintService.prototype.optimizeConstraintObject = function (constraintObject) {
        var newConstraintObject = constraintObject;
        // if the object has 'args' property
        if (constraintObject['args']) {
            if (constraintObject['args'].length === 1) {
                newConstraintObject = this.optimizeConstraintObject(constraintObject['args'][0]);
            }
            else if (constraintObject['args'].length > 1) {
                var newArgs = [];
                for (var _i = 0, _a = constraintObject['args']; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    var newArg = this.optimizeConstraintObject(arg);
                    newArgs.push(newArg);
                }
                newConstraintObject['args'] = newArgs;
            }
        }
        else if (constraintObject['constraint']) {
            newConstraintObject = this.optimizeConstraintObject(constraintObject['constraint']);
        }
        return newConstraintObject;
    };
    ConstraintService.prototype.savePatients = function (patientSetName) {
        var _this = this;
        // derive the intersection constraint
        var intersectionConstraint = this.generateIntersectionConstraint(this.rootInclusionConstraint, this.rootExclusionConstraint);
        var patientSet = new __WEBPACK_IMPORTED_MODULE_10__models_patient_set__["a" /* PatientSet */]('id', patientSetName);
        // patientSet['inclusionConstraint'] = JSON.parse(JSON.stringify(this.rootInclusionConstraint));
        // patientSet['exclusionConstraint'] = JSON.parse(JSON.stringify(this.rootExclusionConstraint));
        patientSet['inclusionConstraint'] = this.deepCopy(this.rootInclusionConstraint);
        patientSet['exclusionConstraint'] = this.deepCopy(this.rootExclusionConstraint);
        patientSet['setSize'] = this.patientCount;
        this.savedPatientSets.push(patientSet);
        // call the backend api to save patient set of that constraint
        // and update the dimension registry service for the patient set list
        this.resourceService.savePatients(patientSetName, intersectionConstraint)
            .subscribe(function (result) {
            _this._patientSetPostResponse = result;
            _this.dimensionReistryService.updatePatientSets();
        }, function (err) {
            console.error(err);
        });
    };
    ConstraintService.prototype.deepCopy = function (oldObj) {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === "object") {
            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    };
    Object.defineProperty(ConstraintService.prototype, "patientCount", {
        get: function () {
            return this._patientCount;
        },
        set: function (value) {
            this._patientCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "inclusionPatientCount", {
        get: function () {
            return this._inclusionPatientCount;
        },
        set: function (value) {
            this._inclusionPatientCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "exclusionPatientCount", {
        get: function () {
            return this._exclusionPatientCount;
        },
        set: function (value) {
            this._exclusionPatientCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "rootInclusionConstraint", {
        get: function () {
            return this._rootInclusionConstraint;
        },
        set: function (value) {
            this._rootInclusionConstraint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "rootExclusionConstraint", {
        get: function () {
            return this._rootExclusionConstraint;
        },
        set: function (value) {
            this._rootExclusionConstraint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "patientSetPostResponse", {
        get: function () {
            return this._patientSetPostResponse;
        },
        set: function (value) {
            this._patientSetPostResponse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "selectedNode", {
        get: function () {
            return this._selectedNode;
        },
        set: function (value) {
            this._selectedNode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintService.prototype, "validTreeNodeTypes", {
        get: function () {
            return this._validTreeNodeTypes;
        },
        set: function (value) {
            this._validTreeNodeTypes = value;
        },
        enumerable: true,
        configurable: true
    });
    return ConstraintService;
}());
ConstraintService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resource_service__["a" /* ResourceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__dimension_registry_service__["a" /* DimensionRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__dimension_registry_service__["a" /* DimensionRegistryService */]) === "function" && _b || Object])
], ConstraintService);

var _a, _b;
//# sourceMappingURL=constraint.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/services/dimension-registry.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionRegistryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_concept__ = __webpack_require__("../../../../../src/app/modules/shared/models/concept.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_constraints_concept_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/concept-constraint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_constraints_combination_constraint__ = __webpack_require__("../../../../../src/app/modules/shared/models/constraints/combination-constraint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DimensionRegistryService = (function () {
    function DimensionRegistryService(resourceService) {
        this.resourceService = resourceService;
        // the variable that holds the entire tree structure
        this.treeNodes = [];
        // the selectionMode of the tree, default is '', alternative is 'checkbox'
        this.treeSelectionMode = '';
        // the selected tree nodes by user in observation selection
        this.selectedTreeNodes = [];
        // the status indicating the when the tree is being loaded or finished loading
        this.loadingTreeNodes = 'complete';
        this.concepts = [];
        this.conceptConstraints = [];
        this.patientSets = [];
        this.observationSets = [];
        // List keeping track of all available constraints. By default, the empty
        // constraints are in here. In addition, (partially) filled constraints are
        // added. The constraints should be copied when editing them.
        this.allConstraints = [];
        this.updateEmptyConstraints();
        this.updateConcepts();
        this.updatePatientSets();
    }
    DimensionRegistryService.prototype.updateEmptyConstraints = function () {
        this.allConstraints.push(new __WEBPACK_IMPORTED_MODULE_4__models_constraints_combination_constraint__["a" /* CombinationConstraint */]());
        this.allConstraints.push(new __WEBPACK_IMPORTED_MODULE_3__models_constraints_concept_constraint__["a" /* ConceptConstraint */]());
    };
    /** Extracts concepts (and later possibly other dimensions) from the
     *  provided TreeNode array and their children.
     *  And augment tree nodes with PrimeNG tree-ui specifications
     * @param treeNodes
     */
    DimensionRegistryService.prototype.processTreeNodes = function (treeNodes) {
        if (!treeNodes) {
            return;
        }
        for (var _i = 0, treeNodes_1 = treeNodes; _i < treeNodes_1.length; _i++) {
            var node = treeNodes_1[_i];
            this.processTreeNode(node);
        }
    };
    DimensionRegistryService.prototype.processTreeNode = function (node) {
        // Extract concept
        if (node['dimension'] === 'concept') {
            // Only include non-FOLDERs and non-CONTAINERs
            if (node['visualAttributes'].indexOf('FOLDER') === -1 &&
                node['visualAttributes'].indexOf('CONTAINER') === -1) {
                var concept = new __WEBPACK_IMPORTED_MODULE_2__models_concept__["a" /* Concept */]();
                // TODO: retrieve concept path in less hacky manner:
                concept.path = node['conceptPath'];
                concept.type = node['type'];
                this.concepts.push(concept);
                if (node['type'] === 'CATEGORICAL') {
                    concept['values'] = node['values'];
                }
                var constraint = new __WEBPACK_IMPORTED_MODULE_3__models_constraints_concept_constraint__["a" /* ConceptConstraint */]();
                constraint.concept = concept;
                this.conceptConstraints.push(constraint);
                this.allConstraints.push(constraint);
            }
        }
        // Add PrimeNG visual properties for tree nodes
        var patientCount = node['patientCount'];
        var countStr = ' ';
        if (patientCount) {
            countStr += '(' + patientCount;
        }
        // let observationCount = node['observationCount'];
        // if (observationCount) {
        //   countStr += ' | ' + observationCount;
        // }
        if (countStr !== ' ') {
            countStr += ')';
        }
        node['label'] = node['name'] + countStr;
        if (node['metadata']) {
            node['label'] = node['label'] + ' ⚆';
        }
        // if (node['name'].indexOf('consent') !== -1 ||
        //   node['name'].indexOf('demography') !== -1 ||
        //   node['name'].indexOf('medical') !== -1) {
        //   node['expanded'] = true;
        // }
        // If this node has children, drill down
        if (node['children']) {
            // Recurse
            node['expandedIcon'] = 'fa-folder-open';
            node['collapsedIcon'] = 'fa-folder';
            node['icon'] = '';
            this.processTreeNodes(node['children']);
        }
        else {
            if (node['type'] === 'NUMERIC') {
                node['icon'] = 'icon-123';
            }
            else if (node['type'] === 'HIGH_DIMENSIONAL') {
                node['icon'] = 'icon-hd';
            }
            else if (node['type'] === 'CATEGORICAL_OPTION') {
                node['icon'] = 'icon-abc';
            }
            else if (node['type'] === 'CATEGORICAL') {
                node['icon'] = 'icon-hd';
            }
            else {
                node['icon'] = 'fa-folder-o';
            }
        }
    };
    DimensionRegistryService.prototype.updateConcepts = function () {
        this.loadingTreeNodes = 'loading';
        // Retrieve all tree nodes and extract the concepts iteratively
        var allTreeNodes = this.resourceService.getAllTreeNodes();
        this.loadingTreeNodes = 'complete';
        this.concepts = [];
        this.conceptConstraints = [];
        this.treeNodes = allTreeNodes;
        this.processTreeNodes(allTreeNodes);
    };
    DimensionRegistryService.prototype.updatePatientSets = function () {
        // reset patient sets
        // this.resourceService.getPatientSets()
        //   .subscribe(
        //     sets => {
        //       // this is to retain the original reference pointer to the array
        //       this.patientSets.length = 0;
        //
        //       // reverse the sets so that the latest patient set is on top
        //       sets.reverse();
        //       sets.forEach(set => {
        //         set.name = set.description;
        //         this.patientSets.push(set);
        //       });
        //     },
        //     err => console.error(err)
        //   );
    };
    DimensionRegistryService.prototype.getConcepts = function () {
        return this.concepts;
    };
    DimensionRegistryService.prototype.getPatientSets = function () {
        return this.patientSets;
    };
    DimensionRegistryService.prototype.getObservationSets = function () {
        return this.observationSets;
    };
    /**
     * Returns a list of all constraints that match the query string.
     * The constraints should be copied when editing them.
     * @param query
     * @returns {Array}
     */
    DimensionRegistryService.prototype.searchAllConstraints = function (query) {
        query = query.toLowerCase();
        var results = [];
        this.allConstraints.forEach(function (constraint) {
            var text = constraint.textRepresentation.toLowerCase();
            if (text.indexOf(query) > -1) {
                results.push(constraint);
            }
        });
        return results;
    };
    return DimensionRegistryService;
}());
DimensionRegistryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _a || Object])
], DimensionRegistryService);

var _a;
//# sourceMappingURL=dimension-registry.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/services/endpoint.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endpoint__ = __webpack_require__("../../../../../src/app/modules/shared/models/endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EndpointService = (function () {
    function EndpointService(appConfig) {
        this.appConfig = appConfig;
        var apiUrl = appConfig.getConfig('api-url');
        var apiVersion = appConfig.getConfig('api-version');
        var appUrl = appConfig.getConfig('app-url');
        this.endpoint = new __WEBPACK_IMPORTED_MODULE_1__models_endpoint__["a" /* Endpoint */](apiUrl, apiVersion, appUrl);
        // let parsedUrl = this.parseUrl(this.getCurrentUrl());
        // Check if there is authentication data in the hash fragment of the url
        // if(parsedUrl) {
        //   let oauthGrantFragment: string = parsedUrl.hash;
        //   if (oauthGrantFragment.length > 1) {
        //     // Update the current endpoint with the received credentials
        //     this.initializeEndpointWithCredentials(this.endpoint, oauthGrantFragment);
        //     // Save the endpoint
        //     this.saveEndpoint();
        //   } else {
        //     // Read the access token information from the local storage
        //     this.restoreEndpointAuthentication();
        //   }
        // }
    }
    EndpointService.prototype.getEndpoint = function () {
        return this.endpoint;
    };
    /**
     * Removes the currently held token and navigates to the authorization page
     * to get a new one.
     */
    EndpointService.prototype.invalidateToken = function () {
        this.endpoint.accessToken = '';
        this.saveEndpoint();
        this.navigateToAuthorizationPage(this.endpoint);
    };
    /**
     * Return the current url
     * @returns {string}
     */
    EndpointService.prototype.getCurrentUrl = function () {
        return window.location.href;
    };
    /**
     * Navigates to the specified url
     * @param url
     */
    EndpointService.prototype.navigateToUrl = function (url) {
        window.location.href = url;
    };
    /**
     * Parse the url into its elements
     * @param url
     * @returns {}
     */
    EndpointService.prototype.parseUrl = function (url) {
        var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)#?(.*)$/);
        return match && {
            href: url,
            protocol: match[1],
            host: match[2],
            hostname: match[3],
            port: match[4],
            path: match[5],
            search: match[6],
            hash: match[7]
        };
    };
    /**
     * Navigate to the endpoint's authorization page.
     * @param endpoint
     */
    EndpointService.prototype.navigateToAuthorizationPage = function (endpoint) {
        // Cut off any '/'
        var apiUrl = endpoint.apiUrl;
        var appUrl = endpoint.appUrl;
        if (apiUrl.substring(apiUrl.length - 1, apiUrl.length) === '/') {
            apiUrl = apiUrl.substring(0, apiUrl.length - 1);
        }
        if (appUrl.substring(appUrl.length - 1, appUrl.length) === '/') {
            appUrl = appUrl.substring(0, appUrl.length - 1);
        }
        var authorizationUrl = apiUrl + "/oauth/authorize?response_type=token&client_id=glowingbear-js&redirect_uri=" + appUrl;
        this.navigateToUrl(authorizationUrl);
    };
    /**
     * Return URI-encoded redirect URI that can be used as a parameter in a url
     * @param port {string}
     * @param host {string}
     * @param protocol {string}
     * @param path {string}
     * @returns {string}
     */
    EndpointService.prototype.getRedirectURI = function (protocol, host, port, path) {
        var redirectUri;
        if (port) {
            if (['80', '443'].indexOf(port) >= 0) {
                port = '';
            }
            else {
                port = ':' + port;
            }
            redirectUri = protocol + "//" + host + port;
        }
        else {
            redirectUri = protocol + "//" + host;
        }
        return encodeURIComponent(redirectUri);
    };
    /**
     * Sets up a new restangular instance using the specified credentials.
     * @param endpoint
     * @param oauthGrantFragment
     */
    EndpointService.prototype.initializeEndpointWithCredentials = function (endpoint, oauthGrantFragment) {
        var fragmentParams = this.getFragmentParameters(oauthGrantFragment);
        endpoint.accessToken = fragmentParams.access_token;
        var time = new Date();
        endpoint.expiresAt = time.setTime(time.getTime() + fragmentParams.expires_in * 1000);
    };
    /**
     * Returns the parsed fragment parameters as an object
     * @param fragment
     * @returns {*}
     */
    EndpointService.prototype.getFragmentParameters = function (fragment) {
        return JSON.parse('{"' +
            decodeURI(fragment
                .replace(/&/g, "\",\"") // replace '&' with ','
                .replace(/=/g, "\":\"")) + '"}' // replace '=' with ':'
        );
    };
    /**
     * Saves the endpoint to local storage.
     */
    EndpointService.prototype.saveEndpoint = function () {
        localStorage.setItem('endpoint', JSON.stringify(this.endpoint));
    };
    /**
     * Restores the endpoint authentication from local storage, or navigates to the
     * authorization page is no data is found.
     */
    EndpointService.prototype.restoreEndpointAuthentication = function () {
        var endpointJSON = localStorage.getItem('endpoint');
        if (endpointJSON) {
            var storedEndpoint = JSON.parse(endpointJSON);
            this.endpoint.accessToken = storedEndpoint._accessToken;
            this.endpoint.expiresAt = storedEndpoint._expiresAt;
        }
        else {
            this.navigateToAuthorizationPage(this.endpoint);
        }
    };
    return EndpointService;
}());
EndpointService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* AppConfig */]) === "function" && _a || Object])
], EndpointService);

var _a;
//# sourceMappingURL=endpoint.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/endpoint.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResourceService = (function () {
    function ResourceService(http, endpointService) {
        this.http = http;
        this.endpointService = endpointService;
    }
    /**
     * Currently only handles the 'invalid_token' error, other errors are passed on.
     * @param error
     * @returns {any}
     */
    ResourceService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            if (err === 'invalid_token') {
                this.endpointService.invalidateToken();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg || 'Server error');
    };
    ResourceService.prototype.getAllTreeNodes = function () {
        var str = '[{"name":"Vital Signs","fullName":"\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Vital Signs\\\\%","children":[{"name":"Heart Rate","fullName":"\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Vital Signs\\\\Heart Rate\\\\"},"conceptPath":"\\\\Vital Signs\\\\Heart Rate\\\\"}]},{"name":"Public Studies","fullName":"\\\\Public Studies\\\\","type":"UNKNOWN","visualAttributes":["CONTAINER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\","children":[{"name":"CATEGORICAL_VALUES","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"CATEGORICAL_VALUES"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"CATEGORICAL_VALUES"}]},"conceptPath":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Age\\\\"},{"name":"Gender","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\","children":[{"name":"Female","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\Female\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\Female\\\\"},{"type":"study_name","studyId":"CATEGORICAL_VALUES"}]},"conceptPath":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\Female\\\\"},{"name":"Male","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\Male\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\Male\\\\"},{"type":"study_name","studyId":"CATEGORICAL_VALUES"}]},"conceptPath":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Gender\\\\Male\\\\"}]},{"name":"Race","fullName":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Race\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Race\\\\"},{"type":"study_name","studyId":"CATEGORICAL_VALUES"}]},"conceptPath":"\\\\Public Studies\\\\CATEGORICAL_VALUES\\\\Demography\\\\Race\\\\"}]}]},{"name":"CLINICAL_TRIAL","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"CLINICAL_TRIAL"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"CLINICAL_TRIAL"}]},"conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"CLINICAL_TRIAL"}]},"conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"CLINICAL_TRIAL_HIGHDIM","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"CLINICAL_TRIAL_HIGHDIM"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"CLINICAL_TRIAL_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Demography\\\\Age\\\\"}]},{"name":"High Dimensional data","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\","children":[{"name":"Expression Breast","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\Expression Breast\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\Expression Breast\\\\"},{"type":"study_name","studyId":"CLINICAL_TRIAL_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\Expression Breast\\\\"},{"name":"Expression Lung","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\Expression Lung\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\Expression Lung\\\\"},{"type":"study_name","studyId":"CLINICAL_TRIAL_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\High Dimensional data\\\\Expression Lung\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"CLINICAL_TRIAL_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\CLINICAL_TRIAL_HIGHDIM\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"EHR","fullName":"\\\\Public Studies\\\\EHR\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"EHR"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\EHR\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\EHR\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\EHR\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\EHR\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"EHR"}]},"conceptPath":"\\\\Public Studies\\\\EHR\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\EHR\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\EHR\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Public Studies\\\\EHR\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\EHR\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"EHR"}]},"conceptPath":"\\\\Public Studies\\\\EHR\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"EHR_HIGHDIM","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"EHR_HIGHDIM"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"EHR_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Demography\\\\Age\\\\"}]},{"name":"High Dimensional data","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\","children":[{"name":"Expression Breast","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\Expression Breast\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\Expression Breast\\\\"},{"type":"study_name","studyId":"EHR_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\Expression Breast\\\\"},{"name":"Expression Lung","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\Expression Lung\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\Expression Lung\\\\"},{"type":"study_name","studyId":"EHR_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\High Dimensional data\\\\Expression Lung\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"EHR_HIGHDIM"}]},"conceptPath":"\\\\Public Studies\\\\EHR_HIGHDIM\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"GSE8581","fullName":"\\\\Public Studies\\\\GSE8581\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"GSE8581"},"children":[{"name":"Endpoints","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"Diagnosis","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\","children":[{"name":"Giant Cell Tumor","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\Giant Cell Tumor\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\Giant Cell Tumor\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\Giant Cell Tumor\\\\"},{"name":"NSC-Mixed","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\NSC-Mixed\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\NSC-Mixed\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\NSC-Mixed\\\\"},{"name":"Unknown","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\Unknown\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\Unknown\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\Unknown\\\\"},{"name":"carcinoid","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\carcinoid\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\carcinoid\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\carcinoid\\\\"},{"name":"emphysema","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\emphysema\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\emphysema\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\emphysema\\\\"},{"name":"giant bullae","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\giant bullae\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\giant bullae\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\giant bullae\\\\"},{"name":"hematoma","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\hematoma\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\hematoma\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\hematoma\\\\"},{"name":"inflammation","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\inflammation\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\inflammation\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\inflammation\\\\"},{"name":"lymphoma","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\lymphoma\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\lymphoma\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\lymphoma\\\\"},{"name":"metastatic non-small cell adenocarcinoma","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\metastatic non-small cell adenocarcinoma\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\metastatic non-small cell adenocarcinoma\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\metastatic non-small cell adenocarcinoma\\\\"},{"name":"metastatic renal cell carcinoma","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\metastatic renal cell carcinoma\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\metastatic renal cell carcinoma\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\metastatic renal cell carcinoma\\\\"},{"name":"no malignancy","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\no malignancy\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\no malignancy\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\no malignancy\\\\"},{"name":"non-small cell adenocarcinoma","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\non-small cell adenocarcinoma\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\non-small cell adenocarcinoma\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\non-small cell adenocarcinoma\\\\"},{"name":"non-small cell squamous cell carcinoma","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\non-small cell squamous cell carcinoma\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\non-small cell squamous cell carcinoma\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Diagnosis\\\\non-small cell squamous cell carcinoma\\\\"}]},{"name":"FEV1","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\FEV1\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\FEV1\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\FEV1\\\\"},{"name":"Forced Expiratory Volume Ratio","fullName":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Forced Expiratory Volume Ratio\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Forced Expiratory Volume Ratio\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Endpoints\\\\Forced Expiratory Volume Ratio\\\\"}]},{"name":"Subjects","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"Age (year)","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Age (year)\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Age (year)\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Age (year)\\\\"},{"name":"Ethnicity","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\","children":[{"name":"Afro American","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\Afro American\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\Afro American\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\Afro American\\\\"},{"name":"Caucasian","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\Caucasian\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\Caucasian\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Ethnicity\\\\Caucasian\\\\"}]},{"name":"Height (inch)","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Height (inch)\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Height (inch)\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Height (inch)\\\\"},{"name":"Lung Disease","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\","children":[{"name":"chronic obstructive pulmonary disease","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\chronic obstructive pulmonary disease\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\chronic obstructive pulmonary disease\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\chronic obstructive pulmonary disease\\\\"},{"name":"control","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\control\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\control\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\control\\\\"},{"name":"not specified","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\not specified\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\not specified\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Lung Disease\\\\not specified\\\\"}]},{"name":"Organism","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Organism\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Organism\\\\","children":[{"name":"Homo sapiens","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Organism\\\\Homo sapiens\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Organism\\\\Homo sapiens\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Organism\\\\Homo sapiens\\\\"}]},{"name":"Sex","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\","children":[{"name":"female","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\female\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\female\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\female\\\\"},{"name":"male","fullName":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\male\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\male\\\\"},{"type":"study_name","studyId":"GSE8581"}]},"conceptPath":"\\\\Public Studies\\\\GSE8581\\\\Subjects\\\\Sex\\\\male\\\\"}]}]}]},{"name":"MIX_HD","fullName":"\\\\Public Studies\\\\MIX_HD\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"MIX_HD"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\MIX_HD\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\MIX_HD\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\MIX_HD\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\MIX_HD\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"MIX_HD"}]},"conceptPath":"\\\\Public Studies\\\\MIX_HD\\\\Demography\\\\Age\\\\"}]},{"name":"HD ","fullName":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\","children":[{"name":"Breast","fullName":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\Breast\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\Breast\\\\"},{"type":"study_name","studyId":"MIX_HD"}]},"conceptPath":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\Breast\\\\"},{"name":"Lung","fullName":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\Lung\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\Lung\\\\"},{"type":"study_name","studyId":"MIX_HD"}]},"conceptPath":"\\\\Public Studies\\\\MIX_HD\\\\HD\\\\Lung\\\\"}]},{"name":"Lab","fullName":"\\\\Public Studies\\\\MIX_HD\\\\Lab\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\MIX_HD\\\\Lab\\\\"},{"name":"Sample Type","fullName":"\\\\Public Studies\\\\MIX_HD\\\\Sample Type\\\\","type":"UNKNOWN","visualAttributes":["MODIFIER_FOLDER","ACTIVE"]}]},{"name":"Oracle_1000_Patient","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"ORACLE_1000_PATIENT"},"children":[{"name":"Categorical_locations","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\","children":[{"name":"categorical_1","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_1\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_1\\\\"},{"name":"categorical_10","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_10\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_10\\\\"},{"name":"categorical_11","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_11\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_11\\\\"},{"name":"categorical_12","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_12\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_12\\\\"},{"name":"categorical_13","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_13\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_13\\\\"},{"name":"categorical_14","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_14\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_14\\\\"},{"name":"categorical_15","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_15\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_15\\\\"},{"name":"categorical_16","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_16\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_16\\\\"},{"name":"categorical_17","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_17\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_17\\\\"},{"name":"categorical_18","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_18\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_18\\\\"},{"name":"categorical_19","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_19\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_19\\\\"},{"name":"categorical_2","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_2\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_2\\\\"},{"name":"categorical_20","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_20\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_20\\\\"},{"name":"categorical_21","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_21\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_21\\\\"},{"name":"categorical_22","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_22\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_22\\\\"},{"name":"categorical_23","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_23\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_23\\\\"},{"name":"categorical_24","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_24\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_24\\\\"},{"name":"categorical_25","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_25\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_25\\\\"},{"name":"categorical_26","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_26\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_26\\\\"},{"name":"categorical_27","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_27\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_27\\\\"},{"name":"categorical_28","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_28\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_28\\\\"},{"name":"categorical_29","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_29\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_29\\\\"},{"name":"categorical_3","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_3\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_3\\\\"},{"name":"categorical_30","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_30\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_30\\\\"},{"name":"categorical_31","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_31\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_31\\\\"},{"name":"categorical_32","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_32\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_32\\\\"},{"name":"categorical_33","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_33\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_33\\\\"},{"name":"categorical_34","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_34\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_34\\\\"},{"name":"categorical_35","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_35\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_35\\\\"},{"name":"categorical_36","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_36\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_36\\\\"},{"name":"categorical_37","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_37\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_37\\\\"},{"name":"categorical_38","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_38\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_38\\\\"},{"name":"categorical_39","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_39\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_39\\\\"},{"name":"categorical_4","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_4\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_4\\\\"},{"name":"categorical_40","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_40\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_40\\\\"},{"name":"categorical_41","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_41\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_41\\\\"},{"name":"categorical_42","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_42\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_42\\\\"},{"name":"categorical_43","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_43\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_43\\\\"},{"name":"categorical_44","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_44\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_44\\\\"},{"name":"categorical_45","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_45\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_45\\\\"},{"name":"categorical_46","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_46\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_46\\\\"},{"name":"categorical_47","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_47\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_47\\\\"},{"name":"categorical_48","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_48\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_48\\\\"},{"name":"categorical_49","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_49\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_49\\\\"},{"name":"categorical_5","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_5\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_5\\\\"},{"name":"categorical_6","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_6\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_6\\\\"},{"name":"categorical_7","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_7\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_7\\\\"},{"name":"categorical_8","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_8\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_8\\\\"},{"name":"categorical_9","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_9\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Categorical_locations\\\\categorical_9\\\\"}]},{"name":"Demographics","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\Age\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\Age\\\\"},{"name":"Gender","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\Gender\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Demographics\\\\Gender\\\\"}]},{"name":"Numerical Variables","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\","children":[{"name":"numerical_1","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_1\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_1\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_1\\\\"},{"name":"numerical_10","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_10\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_10\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_10\\\\"},{"name":"numerical_11","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_11\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_11\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_11\\\\"},{"name":"numerical_12","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_12\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_12\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_12\\\\"},{"name":"numerical_13","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_13\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_13\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_13\\\\"},{"name":"numerical_14","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_14\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_14\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_14\\\\"},{"name":"numerical_15","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_15\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_15\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_15\\\\"},{"name":"numerical_16","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_16\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_16\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_16\\\\"},{"name":"numerical_17","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_17\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_17\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_17\\\\"},{"name":"numerical_18","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_18\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_18\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_18\\\\"},{"name":"numerical_19","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_19\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_19\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_19\\\\"},{"name":"numerical_2","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_2\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_2\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_2\\\\"},{"name":"numerical_20","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_20\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_20\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_20\\\\"},{"name":"numerical_21","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_21\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_21\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_21\\\\"},{"name":"numerical_22","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_22\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_22\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_22\\\\"},{"name":"numerical_23","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_23\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_23\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_23\\\\"},{"name":"numerical_24","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_24\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_24\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_24\\\\"},{"name":"numerical_25","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_25\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_25\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_25\\\\"},{"name":"numerical_26","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_26\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_26\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_26\\\\"},{"name":"numerical_27","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_27\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_27\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_27\\\\"},{"name":"numerical_28","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_28\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_28\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_28\\\\"},{"name":"numerical_29","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_29\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_29\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_29\\\\"},{"name":"numerical_3","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_3\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_3\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_3\\\\"},{"name":"numerical_30","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_30\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_30\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_30\\\\"},{"name":"numerical_31","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_31\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_31\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_31\\\\"},{"name":"numerical_32","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_32\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_32\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_32\\\\"},{"name":"numerical_33","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_33\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_33\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_33\\\\"},{"name":"numerical_34","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_34\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_34\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_34\\\\"},{"name":"numerical_35","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_35\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_35\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_35\\\\"},{"name":"numerical_36","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_36\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_36\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_36\\\\"},{"name":"numerical_37","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_37\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_37\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_37\\\\"},{"name":"numerical_38","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_38\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_38\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_38\\\\"},{"name":"numerical_39","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_39\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_39\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_39\\\\"},{"name":"numerical_4","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_4\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_4\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_4\\\\"},{"name":"numerical_40","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_40\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_40\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_40\\\\"},{"name":"numerical_41","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_41\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_41\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_41\\\\"},{"name":"numerical_42","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_42\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_42\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_42\\\\"},{"name":"numerical_43","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_43\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_43\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_43\\\\"},{"name":"numerical_44","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_44\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_44\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_44\\\\"},{"name":"numerical_45","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_45\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_45\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_45\\\\"},{"name":"numerical_46","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_46\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_46\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_46\\\\"},{"name":"numerical_47","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_47\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_47\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_47\\\\"},{"name":"numerical_48","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_48\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_48\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_48\\\\"},{"name":"numerical_49","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_49\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_49\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_49\\\\"},{"name":"numerical_5","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_5\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_5\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_5\\\\"},{"name":"numerical_6","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_6\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_6\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_6\\\\"},{"name":"numerical_7","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_7\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_7\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_7\\\\"},{"name":"numerical_8","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_8\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_8\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_8\\\\"},{"name":"numerical_9","fullName":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_9\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_9\\\\"},{"type":"study_name","studyId":"ORACLE_1000_PATIENT"}]},"conceptPath":"\\\\Public Studies\\\\Oracle_1000_Patient\\\\Numerical Variables\\\\numerical_9\\\\"}]}]},{"name":"RNASEQ_TRANSCRIPT","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"RNASEQ_TRANSCRIPT"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"RNASEQ_TRANSCRIPT"}]},"conceptPath":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Demography\\\\Age\\\\"}]},{"name":"HD","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\","children":[{"name":"Breast","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\Breast\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\Breast\\\\"},{"type":"study_name","studyId":"RNASEQ_TRANSCRIPT"}]},"conceptPath":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\Breast\\\\"},{"name":"Lung","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\Lung\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\Lung\\\\"},{"type":"study_name","studyId":"RNASEQ_TRANSCRIPT"}]},"conceptPath":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\HD\\\\Lung\\\\"}]},{"name":"Lab","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Lab\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Lab\\\\"},{"name":"Sample Type","fullName":"\\\\Public Studies\\\\RNASEQ_TRANSCRIPT\\\\Sample Type\\\\","type":"UNKNOWN","visualAttributes":["MODIFIER_FOLDER","ACTIVE"],"dimension":"sample_type"}]},{"name":"Random 5000x500","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\","children":[{"name":"Demographics","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Age\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Age\\\\"},{"name":"Gender","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\","children":[{"name":"Female","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\Female\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\Female\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\Female\\\\"},{"name":"Male","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\Male\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\Male\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Gender\\\\Male\\\\"}]},{"name":"Race","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\","children":[{"name":"Android","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Android\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Android\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Android\\\\"},{"name":"Cowboy","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Cowboy\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Cowboy\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Cowboy\\\\"},{"name":"ELf","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\ELf\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\ELf\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\ELf\\\\"},{"name":"Orc","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Orc\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Orc\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Orc\\\\"},{"name":"Smurf","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Smurf\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Smurf\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Demographics\\\\Race\\\\Smurf\\\\"}]}]},{"name":"Number density Interference","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\","children":[{"name":"Biomolecule","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Biomolecule\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Biomolecule\\\\","children":[{"name":"Gene","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Biomolecule\\\\Gene\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Biomolecule\\\\Gene\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Biomolecule\\\\Gene\\\\"}]},{"name":"Cytosine","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Cytosine\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Cytosine\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Cytosine\\\\"},{"name":"Desmosome","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\","children":[{"name":"DNA","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\DNA\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\DNA\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\DNA\\\\"},{"name":"Depolarization","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Depolarization\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Depolarization\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Depolarization\\\\"},{"name":"Embryology","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Embryology\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Embryology\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Embryology\\\\"},{"name":"Invertebrate","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Invertebrate\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Invertebrate\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Invertebrate\\\\"},{"name":"Lacteal","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Lacteal\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Lacteal\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Lacteal\\\\"},{"name":"Mass balance","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Mass balance\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Mass balance\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Mass balance\\\\"},{"name":"Meson","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Meson\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Meson\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Meson\\\\"},{"name":"Metaphase","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Metaphase\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Metaphase\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Metaphase\\\\"},{"name":"Steroid","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Steroid\\\\","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Steroid\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Desmosome\\\\Steroid\\\\"}]},{"name":"Hadron","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Hadron\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Hadron\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Hadron\\\\"},{"name":"Polymerase chain reaction","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Polymerase chain reaction\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Polymerase chain reaction\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\Polymerase chain reaction\\\\"},{"name":"field galaxy Carry","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\","children":[{"name":"Autotrophic","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Autotrophic\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Autotrophic\\\\"},{"name":"Foetus","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Foetus\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Foetus\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Foetus\\\\"},{"name":"Genome","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Genome\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Genome\\\\"},{"name":"Jupiter Business","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Jupiter Business\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Jupiter Business\\\\"},{"name":"Metaphase","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Metaphase\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Metaphase\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Metaphase\\\\"},{"name":"Physiology","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Physiology\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Physiology\\\\"},{"name":"Phytopathology","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Phytopathology\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Phytopathology\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Phytopathology\\\\"},{"name":"Prokaryote","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Prokaryote\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\Prokaryote\\\\"},{"name":"spherical coordinate system False finish","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\spherical coordinate system False finish\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\field galaxy Carry\\\\spherical coordinate system False finish\\\\"}]},{"name":"star cluster Interference","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\","children":[{"name":"Beta Cephei variable X Division","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Beta Cephei variable X Division\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Beta Cephei variable X Division\\\\"},{"name":"Fission","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Fission\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Fission\\\\"},{"name":"Ganglion","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Ganglion\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Ganglion\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Ganglion\\\\"},{"name":"Guanine","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Guanine\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Guanine\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Guanine\\\\"},{"name":"Interferon","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Interferon\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Interferon\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Interferon\\\\"},{"name":"Nucleic acid","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Nucleic acid\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Nucleic acid\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Nucleic acid\\\\"},{"name":"Stellar atmosphere Double team","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Stellar atmosphere Double team\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\Stellar atmosphere Double team\\\\"},{"name":"comet Go over","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\comet Go over\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\comet Go over\\\\"},{"name":"electromagnetic radiation Tweener","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\electromagnetic radiation Tweener\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\electromagnetic radiation Tweener\\\\"},{"name":"hydrogen-1 Parts Unknown","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\hydrogen-1 Parts Unknown\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\hydrogen-1 Parts Unknown\\\\"},{"name":"metallicity Finisher","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\metallicity Finisher\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Interference\\\\metallicity Finisher\\\\"}]},{"name":"star cluster Rib","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\","children":[{"name":"Absolute zero","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Absolute zero\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Absolute zero\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Absolute zero\\\\"},{"name":"Accretion disk Lucharesu","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Accretion disk Lucharesu\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Accretion disk Lucharesu\\\\"},{"name":"Aerobiology","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Aerobiology\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Aerobiology\\\\"},{"name":"Endergonic reaction","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Endergonic reaction\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Endergonic reaction\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Endergonic reaction\\\\"},{"name":"Foetus","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Foetus\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Foetus\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Foetus\\\\"},{"name":"Ionic bond","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Ionic bond\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Ionic bond\\\\"},{"name":"Pathobiology","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Pathobiology\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Pathobiology\\\\"},{"name":"Synthetic biology","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Synthetic biology\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Synthetic biology\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\star cluster Rib\\\\Synthetic biology\\\\"}]},{"name":"stellar evolution Screwjob","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\","children":[{"name":"Albedo feature Signature move","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Albedo feature Signature move\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Albedo feature Signature move\\\\"},{"name":"Coupling to other metabolic pathways","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Coupling to other metabolic pathways\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Coupling to other metabolic pathways\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Coupling to other metabolic pathways\\\\"},{"name":"Eukaryote","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Eukaryote\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Eukaryote\\\\"},{"name":"Interferon","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Interferon\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"concept","path":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Interferon\\\\"},"conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Interferon\\\\"},{"name":"Macroevolution","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Macroevolution\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Macroevolution\\\\"},{"name":"Synodic period Worker","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Synodic period Worker\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Synodic period Worker\\\\"},{"name":"Urine","fullName":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Urine\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\Random 5000x500\\\\Number density Interference\\\\stellar evolution Screwjob\\\\Urine\\\\"}]}]}]},{"name":"SHARED_CONCEPTS_STUDY_A","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_A"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_A"}]},"conceptPath":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_A\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_A"}]},"conceptPath":"\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"SHARED_CONCEPTS_STUDY_B","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_B"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_B"}]},"conceptPath":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Public Studies\\\\SHARED_CONCEPTS_STUDY_B\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_B"}]},"conceptPath":"\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"SHARED_HD_CONCEPTS_STUDY_A","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_A"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_A"}]},"conceptPath":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Vital Signs\\\\","children":[{"name":"Temperature","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_A\\\\Vital Signs\\\\Temperature\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Vital Signs\\\\Temperature\\\\"},{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_A"}]},"conceptPath":"\\\\Vital Signs\\\\Temperature\\\\"}]}]},{"name":"SHARED_HD_CONCEPTS_STUDY_B","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_B"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_B"}]},"conceptPath":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Vital Signs\\\\","children":[{"name":"Temperature","fullName":"\\\\Public Studies\\\\SHARED_HD_CONCEPTS_STUDY_B\\\\Vital Signs\\\\Temperature\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Vital Signs\\\\Temperature\\\\"},{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_B"}]},"conceptPath":"\\\\Vital Signs\\\\Temperature\\\\"}]}]},{"name":"TUMOR_NORMAL_SAMPLES","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"TUMOR_NORMAL_SAMPLES"},"children":[{"name":"Demography","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"TUMOR_NORMAL_SAMPLES"}]},"conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Demography\\\\Age\\\\"}]},{"name":"HD","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\","children":[{"name":"Breast","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\Breast\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\Breast\\\\"},{"type":"study_name","studyId":"TUMOR_NORMAL_SAMPLES"}]},"conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\Breast\\\\"},{"name":"Lung","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\Lung\\\\","type":"HIGH_DIMENSIONAL","visualAttributes":["LEAF","ACTIVE","HIGH_DIMENSIONAL"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\Lung\\\\"},{"type":"study_name","studyId":"TUMOR_NORMAL_SAMPLES"}]},"conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\HD\\\\Lung\\\\"}]},{"name":"Lab","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Lab\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Lab\\\\","children":[{"name":"Cell Count","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Lab\\\\Cell Count\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Lab\\\\Cell Count\\\\"},{"type":"study_name","studyId":"TUMOR_NORMAL_SAMPLES"}]},"conceptPath":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Lab\\\\Cell Count\\\\"}]},{"name":"Sample Type","fullName":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Sample Type\\\\","type":"UNKNOWN","visualAttributes":["MODIFIER_LEAF","ACTIVE"],"dimension":"sample_type","constraint":{"type":"modifier","path":"\\\\Public Studies\\\\TUMOR_NORMAL_SAMPLES\\\\Sample Type\\\\"}}]},{"name":"TraIT-Cell-line","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"TRAIT-CELL-LINE"},"children":[{"name":"1. Cell line characteristics","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"1. Cell lines","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"Age","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Age\\\\"},{"type":"study_name","studyId":"TRAIT-CELL-LINE"}]},"conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Age\\\\"},{"name":"Cell line name","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Cell line name\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Cell line name\\\\"},{"name":"Gender","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Gender\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Gender\\\\"},{"name":"Organism","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Organism\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Organism\\\\"},{"name":"Race","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Race\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\1. Cell lines\\\\Race\\\\"}]},{"name":"2. Tumor","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"Cell type","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Cell type\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Cell type\\\\"},{"name":"Disease","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Disease\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Disease\\\\"},{"name":"Microsatellite instability","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Microsatellite instability\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"Origin tissue","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Origin tissue\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\2. Tumor\\\\Origin tissue\\\\"}]},{"name":"3. Cell line constructs","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\3. Cell line constructs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"Ectopic expression","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\3. Cell line constructs\\\\Ectopic expression\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"Gene silencing","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\3. Cell line constructs\\\\Gene silencing\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"}]},{"name":"4. Treatments","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"DMSO Control","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\DMSO Control\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\DMSO Control\\\\"},{"name":"Untreated","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\Untreated\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\Untreated\\\\"},{"name":"siRNA non-targeting","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\siRNA non-targeting\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\1. Cell line characteristics\\\\4. Treatments\\\\siRNA non-targeting\\\\"}]}]},{"name":"4. Molecular profiling","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"DNA methylation","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"qMSP: DCR1","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\qMSP: DCR1\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\qMSP: DCR1\\\\"},{"name":"qMSP: PHACTR3","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\qMSP: PHACTR3\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\qMSP: PHACTR3\\\\"},{"name":"qMSP: WRN","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\qMSP: WRN\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA methylation\\\\qMSP: WRN\\\\"}]},{"name":"DNA small nucleotide variants","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA small nucleotide variants\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"HRM Sanger seq: BRAF","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA small nucleotide variants\\\\HRM Sanger seq: BRAF\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"HRM Sanger seq: EGFR","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA small nucleotide variants\\\\HRM Sanger seq: EGFR\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"HRM Sanger seq: KRAS","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA small nucleotide variants\\\\HRM Sanger seq: KRAS\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"HRM Sanger seq: PIK3CA","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA small nucleotide variants\\\\HRM Sanger seq: PIK3CA\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"WGS DNAseq: Complete Genomics","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA small nucleotide variants\\\\WGS DNAseq: Complete Genomics\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"}]},{"name":"DNA somatic copy number alterations","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"MLPA gain P146","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\MLPA gain P146\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"MLPA loss X-006","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\MLPA loss X-006\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"Microarray: Agilent 180K aCGH","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\Microarray: Agilent 180K aCGH\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"Microarray: Agilent 244K aCGH","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\Microarray: Agilent 244K aCGH\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"qDNAseq: Illumina HiSeq2000","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\qDNAseq: Illumina HiSeq2000\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\DNA somatic copy number alterations\\\\qDNAseq: Illumina HiSeq2000\\\\"}]},{"name":"Protein expression","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\Protein expression\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"LC-MS/MS","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\Protein expression\\\\LC-MS/MS\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"}]},{"name":"RNA expression","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA expression\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"Microarray: Affymetrix GeneChip Human Exon 1.0 ST","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA expression\\\\Microarray: Affymetrix GeneChip Human Exon 1.0 ST\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"Microarray: Agilent 44k mRNA","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA expression\\\\Microarray: Agilent 44k mRNA\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"Microarray: Agilent Human miRNA V2","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA expression\\\\Microarray: Agilent Human miRNA V2\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"RNAseq: Illumina Genome Analyzer IIx","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA expression\\\\RNAseq: Illumina Genome Analyzer IIx\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"RNAseq: Illumina HiSeq2000","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA expression\\\\RNAseq: Illumina HiSeq2000\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"}]},{"name":"RNA small nucleotide variants","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA small nucleotide variants\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@","children":[{"name":"RNAseq: Illumina Genome Analyzer IIx","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA small nucleotide variants\\\\RNAseq: Illumina Genome Analyzer IIx\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"},{"name":"RNAseq: Illumina HiSeq2000","fullName":"\\\\Public Studies\\\\TraIT-Cell-line\\\\4. Molecular profiling\\\\RNA small nucleotide variants\\\\RNAseq: Illumina HiSeq2000\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"@"}]}]}]}]},{"name":"Private Studies","fullName":"\\\\Private Studies\\\\","type":"UNKNOWN","visualAttributes":["CONTAINER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Private Studies\\\\","children":[{"name":"SHARED_CONCEPTS_STUDY_C_PRIV","fullName":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_C_PRIV"},"children":[{"name":"Demography","fullName":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_C_PRIV"}]},"conceptPath":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Vital Signs\\\\","children":[{"name":"Heart Rate","fullName":"\\\\Private Studies\\\\SHARED_CONCEPTS_STUDY_C_PRIV\\\\Vital Signs\\\\Heart Rate\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Vital Signs\\\\Heart Rate\\\\"},{"type":"study_name","studyId":"SHARED_CONCEPTS_STUDY_C_PRIV"}]},"conceptPath":"\\\\Vital Signs\\\\Heart Rate\\\\"}]}]},{"name":"SHARED_HD_CONCEPTS_STUDY_C_PR","fullName":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\","type":"STUDY","visualAttributes":["FOLDER","ACTIVE","STUDY"],"dimension":"study","constraint":{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_C_PR"},"children":[{"name":"Demography","fullName":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Demography\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Demography\\\\","children":[{"name":"Age","fullName":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Demography\\\\Age\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Demography\\\\Age\\\\"},{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_C_PR"}]},"conceptPath":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Demography\\\\Age\\\\"}]},{"name":"Vital Signs","fullName":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Vital Signs\\\\","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Vital Signs\\\\","children":[{"name":"Temperature","fullName":"\\\\Private Studies\\\\SHARED_HD_CONCEPTS_STUDY_C_PR\\\\Vital Signs\\\\Temperature\\\\","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","constraint":{"type":"combination","operator":"and","args":[{"type":"concept","path":"\\\\Vital Signs\\\\Temperature\\\\"},{"type":"study_name","studyId":"SHARED_HD_CONCEPTS_STUDY_C_PR"}]},"conceptPath":"\\\\Vital Signs\\\\Temperature\\\\"}]}]}]}]';
        var strCogstack = '[{"name":"consent criteria","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\consent\\\\","children":[{"name":"consent","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","conceptPath":"\\\\consent criteria\\\\consent\\\\"}]},{"name":"demography","type":"UNKNOWN","visualAttributes":["FOLDER","ACTIVE"],"dimension":"concept","conceptPath":"\\\\demography\\\\","children":[{"name":"gender","type":"CATEGORICAL_OPTION","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","conceptPath":"\\\\demography\\\\gender\\\\"},{"name":"age","type":"NUMERIC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept","conceptPath":"\\\\demography\\\\age\\\\"}]},{"conceptPath":"\\\\vital signs\\\\","name":"vital signs","children":[{"path":"\\\\vital signs\\\\Primed lymphocyte test\\\\","conceptPath":"\\\\vital signs\\\\Primed lymphocyte test\\\\","type":"UNKNOWN","name":"Primed lymphocyte test","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Eosinophils\\\\","conceptPath":"\\\\vital signs\\\\Eosinophils\\\\","type":"UNKNOWN","name":"Eosinophils","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Leukocytes\\\\","conceptPath":"\\\\vital signs\\\\Leukocytes\\\\","type":"UNKNOWN","name":"Leukocytes","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Erythrocytes\\\\","conceptPath":"\\\\vital signs\\\\Erythrocytes\\\\","type":"UNKNOWN","name":"Erythrocytes","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Hematocrit\\\\","conceptPath":"\\\\vital signs\\\\Hematocrit\\\\","type":"UNKNOWN","name":"Hematocrit","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Mean cell hemoglobin\\\\","conceptPath":"\\\\vital signs\\\\Mean cell hemoglobin\\\\","type":"UNKNOWN","name":"Mean cell hemoglobin","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\MCHC\\\\","conceptPath":"\\\\vital signs\\\\MCHC\\\\","type":"UNKNOWN","name":"MCHC","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\RDW\\\\","conceptPath":"\\\\vital signs\\\\RDW\\\\","type":"UNKNOWN","name":"RDW","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Phosphate\\\\","conceptPath":"\\\\vital signs\\\\Phosphate\\\\","type":"UNKNOWN","name":"Phosphate","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Magnesium\\\\","conceptPath":"\\\\vital signs\\\\Magnesium\\\\","type":"UNKNOWN","name":"Magnesium","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Glucose\\\\","conceptPath":"\\\\vital signs\\\\Glucose\\\\","type":"UNKNOWN","name":"Glucose","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Carbamide\\\\","conceptPath":"\\\\vital signs\\\\Carbamide\\\\","type":"UNKNOWN","name":"Carbamide","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Creatinine\\\\","conceptPath":"\\\\vital signs\\\\Creatinine\\\\","type":"UNKNOWN","name":"Creatinine","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Sodium\\\\","conceptPath":"\\\\vital signs\\\\Sodium\\\\","type":"UNKNOWN","name":"Sodium","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Potassium\\\\","conceptPath":"\\\\vital signs\\\\Potassium\\\\","type":"UNKNOWN","name":"Potassium","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Chloride\\\\","conceptPath":"\\\\vital signs\\\\Chloride\\\\","type":"UNKNOWN","name":"Chloride","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Carbon Dioxide\\\\","conceptPath":"\\\\vital signs\\\\Carbon Dioxide\\\\","type":"UNKNOWN","name":"Carbon Dioxide","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Protein\\\\","conceptPath":"\\\\vital signs\\\\Protein\\\\","type":"UNKNOWN","name":"Protein","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Normal saline\\\\","conceptPath":"\\\\vital signs\\\\Normal saline\\\\","type":"UNKNOWN","name":"Normal saline","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Glargine\\\\","conceptPath":"\\\\vital signs\\\\Glargine\\\\","type":"UNKNOWN","name":"Glargine","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Blood pressure taking\\\\","conceptPath":"\\\\vital signs\\\\Blood pressure taking\\\\","type":"UNKNOWN","name":"Blood pressure taking","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Oximetry\\\\","conceptPath":"\\\\vital signs\\\\Oximetry\\\\","type":"UNKNOWN","name":"Oximetry","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Sanguis\\\\","conceptPath":"\\\\vital signs\\\\Sanguis\\\\","type":"UNKNOWN","name":"Sanguis","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Platelets\\\\","conceptPath":"\\\\vital signs\\\\Platelets\\\\","type":"UNKNOWN","name":"Platelets","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Chloride\\\\","conceptPath":"\\\\vital signs\\\\Chloride\\\\","type":"UNKNOWN","name":"Chloride","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Blood urea\\\\","conceptPath":"\\\\vital signs\\\\Blood urea\\\\","type":"UNKNOWN","name":"Blood urea","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Arterial oxygen tension\\\\","conceptPath":"\\\\vital signs\\\\Arterial oxygen tension\\\\","type":"UNKNOWN","name":"Arterial oxygen tension","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\vital signs\\\\Blood Sugar\\\\","conceptPath":"\\\\vital signs\\\\Blood Sugar\\\\","type":"UNKNOWN","name":"Blood Sugar","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"}],"path":"\\\\vital signs\\\\","type":"UNKNOWN","dimension":"concept","visualAttributes":["FOLDER","ACTIVE"]},{"conceptPath":"\\\\typed documents\\\\","name":"typed documents","children":[{"path":"\\\\typed documents\\\\Nursing/other\\\\","conceptPath":"\\\\typed documents\\\\Nursing/other\\\\","type":"UNKNOWN","name":"Nursing/other","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Radiology\\\\","conceptPath":"\\\\typed documents\\\\Radiology\\\\","type":"UNKNOWN","name":"Radiology","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Nursing\\\\","conceptPath":"\\\\typed documents\\\\Nursing\\\\","type":"UNKNOWN","name":"Nursing","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\ECG\\\\","conceptPath":"\\\\typed documents\\\\ECG\\\\","type":"UNKNOWN","name":"ECG","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Physician \\\\","conceptPath":"\\\\typed documents\\\\Physician \\\\","type":"UNKNOWN","name":"Physician ","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Discharge summary\\\\","conceptPath":"\\\\typed documents\\\\Discharge summary\\\\","type":"UNKNOWN","name":"Discharge summary","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Echo\\\\","conceptPath":"\\\\typed documents\\\\Echo\\\\","type":"UNKNOWN","name":"Echo","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Respiratory \\\\","conceptPath":"\\\\typed documents\\\\Respiratory \\\\","type":"UNKNOWN","name":"Respiratory ","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Nutrition\\\\","conceptPath":"\\\\typed documents\\\\Nutrition\\\\","type":"UNKNOWN","name":"Nutrition","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\General\\\\","conceptPath":"\\\\typed documents\\\\General\\\\","type":"UNKNOWN","name":"General","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Rehab Services\\\\","conceptPath":"\\\\typed documents\\\\Rehab Services\\\\","type":"UNKNOWN","name":"Rehab Services","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Social Work\\\\","conceptPath":"\\\\typed documents\\\\Social Work\\\\","type":"UNKNOWN","name":"Social Work","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Case Management \\\\","conceptPath":"\\\\typed documents\\\\Case Management \\\\","type":"UNKNOWN","name":"Case Management ","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Pharmacy\\\\","conceptPath":"\\\\typed documents\\\\Pharmacy\\\\","type":"UNKNOWN","name":"Pharmacy","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\typed documents\\\\Consult\\\\","conceptPath":"\\\\typed documents\\\\Consult\\\\","type":"UNKNOWN","name":"Consult","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"}],"path":"\\\\typed documents\\\\","type":"UNKNOWN","dimension":"concept","visualAttributes":["FOLDER","ACTIVE"]},{"conceptPath":"\\\\medical profiles\\\\","name":"medical profiles","children":[{"path":"\\\\medical profiles\\\\Allergies and Intolerances\\\\","conceptPath":"\\\\medical profiles\\\\Allergies and Intolerances\\\\","type":"UNKNOWN","name":"Allergies and Intolerances","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Hospital course\\\\","conceptPath":"\\\\medical profiles\\\\Hospital course\\\\","type":"UNKNOWN","name":"Hospital course","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Discharge Diagnosis\\\\","conceptPath":"\\\\medical profiles\\\\Discharge Diagnosis\\\\","type":"UNKNOWN","name":"Discharge Diagnosis","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Discharge Medications\\\\","conceptPath":"\\\\medical profiles\\\\Discharge Medications\\\\","type":"UNKNOWN","name":"Discharge Medications","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Chief Complaint and Reason for Visit\\\\","conceptPath":"\\\\medical profiles\\\\Chief Complaint and Reason for Visit\\\\","type":"UNKNOWN","name":"Chief Complaint and Reason for Visit","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Family History\\\\","conceptPath":"\\\\medical profiles\\\\Family History\\\\","type":"UNKNOWN","name":"Family History","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Functional Status\\\\","conceptPath":"\\\\medical profiles\\\\Functional Status\\\\","type":"UNKNOWN","name":"Functional Status","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Admission Diagnosis\\\\","conceptPath":"\\\\medical profiles\\\\Admission Diagnosis\\\\","type":"UNKNOWN","name":"Admission Diagnosis","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\History of Past Illness\\\\","conceptPath":"\\\\medical profiles\\\\History of Past Illness\\\\","type":"CATEGORICAL","name":"History of Past Illness","visualAttributes":["LEAF","ACTIVE"],"values":["Hepatitis A","Hepatitis B","Hepatitis C","Bone cancer","Clotting Disorder","Diabetes","Colon Polyp","Asthma","Angina","Cystic Kidney Disease","Anxiety","Stroke","Septicemia","Unknown Disease","Nephritis","High Cholesterol","Heart Attack","Lynch Syndrome","COPD","Kidney Nephrosis","Influenza","Gastrointestinal Disorder","Impaired Glucose Tolerance"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\History of Present Illness\\\\","conceptPath":"\\\\medical profiles\\\\History of Present Illness\\\\","type":"UNKNOWN","name":"History of Present Illness","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Immunizations\\\\","conceptPath":"\\\\medical profiles\\\\Immunizations\\\\","type":"UNKNOWN","name":"Immunizations","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Admission Medications\\\\","conceptPath":"\\\\medical profiles\\\\Admission Medications\\\\","type":"UNKNOWN","name":"Admission Medications","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Hospital Consultations\\\\","conceptPath":"\\\\medical profiles\\\\Hospital Consultations\\\\","type":"UNKNOWN","name":"Hospital Consultations","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Plan of Treatment\\\\","conceptPath":"\\\\medical profiles\\\\Plan of Treatment\\\\","type":"UNKNOWN","name":"Plan of Treatment","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Problem\\\\","conceptPath":"\\\\medical profiles\\\\Problem\\\\","type":"UNKNOWN","name":"Problem","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Procedures\\\\","conceptPath":"\\\\medical profiles\\\\Procedures\\\\","type":"UNKNOWN","name":"Procedures","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Hospital Discharge Instructions\\\\","conceptPath":"\\\\medical profiles\\\\Hospital Discharge Instructions\\\\","type":"UNKNOWN","name":"Hospital Discharge Instructions","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Review of Systems\\\\","conceptPath":"\\\\medical profiles\\\\Review of Systems\\\\","type":"UNKNOWN","name":"Review of Systems","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Social History\\\\","conceptPath":"\\\\medical profiles\\\\Social History\\\\","type":"UNKNOWN","name":"Social History","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Vital Signs\\\\","conceptPath":"\\\\medical profiles\\\\Vital Signs\\\\","type":"UNKNOWN","name":"Vital Signs","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Hospital Discharge Physical\\\\","conceptPath":"\\\\medical profiles\\\\Hospital Discharge Physical\\\\","type":"UNKNOWN","name":"Hospital Discharge Physical","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Hospital Discharge Studies\\\\","conceptPath":"\\\\medical profiles\\\\Hospital Discharge Studies\\\\","type":"UNKNOWN","name":"Hospital Discharge Studies","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\Nutrition\\\\","conceptPath":"\\\\medical profiles\\\\Nutrition\\\\","type":"UNKNOWN","name":"Nutrition","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\discharge condition\\\\","conceptPath":"\\\\medical profiles\\\\discharge condition\\\\","type":"UNKNOWN","name":"discharge condition","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\discharge disposition\\\\","conceptPath":"\\\\medical profiles\\\\discharge disposition\\\\","type":"UNKNOWN","name":"discharge disposition","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\admission condition\\\\","conceptPath":"\\\\medical profiles\\\\admission condition\\\\","type":"UNKNOWN","name":"admission condition","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\pertinent results\\\\","conceptPath":"\\\\medical profiles\\\\pertinent results\\\\","type":"UNKNOWN","name":"pertinent results","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\facility\\\\","conceptPath":"\\\\medical profiles\\\\facility\\\\","type":"UNKNOWN","name":"facility","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\impression\\\\","conceptPath":"\\\\medical profiles\\\\impression\\\\","type":"UNKNOWN","name":"impression","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\admission studies\\\\","conceptPath":"\\\\medical profiles\\\\admission studies\\\\","type":"UNKNOWN","name":"admission studies","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"},{"path":"\\\\medical profiles\\\\interpretation\\\\","conceptPath":"\\\\medical profiles\\\\interpretation\\\\","type":"UNKNOWN","name":"interpretation","visualAttributes":["LEAF","ACTIVE"],"dimension":"concept"}],"path":"\\\\medical profiles\\\\","type":"UNKNOWN","dimension":"concept","visualAttributes":["FOLDER","ACTIVE"]},{"path":"\\\\Anywhere\\\\","conceptPath":"\\\\Anywhere\\\\","type":"UNKNOWN","name":"Anywhere","visualAttributes":["LEAF","ACTIVE"]}]';
        // return JSON.parse(str);
        return JSON.parse(strCogstack);
    };
    // -------------------------------------- patient calls --------------------------------------
    /**
     * Given a constraint, return the corresponding patient list
     * @param constraint
     * @param debugLabel - for debugging purpose
     * @returns {Observable<R|T>}
     */
    ResourceService.prototype.getPatients = function (constraint, debugLabel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var endpoint = this.endpointService.getEndpoint();
        headers.append('Authorization', "Bearer " + endpoint.accessToken);
        var constraintString = JSON.stringify(constraint.toQueryObject());
        // console.log(debugLabel, 'constraint:', constraintString);
        var url = endpoint.getUrl() + "/patients?constraint=" + constraintString;
        url = '';
        return this.http.get(url, {
            headers: headers
        })
            .map(function (res) { return res.json().patients; })
            .catch(this.handleError.bind(this));
    };
    /**
     * Given the name and constraint of the patient set to be saved, save it to transmart
     * @param name - the name of the patient set to be saved
     * @param constraint - the constraint of the patient set to be saved
     * @returns {Observable<PatientSetPostResponse>}
     */
    ResourceService.prototype.savePatients = function (name, constraint) {
        if (!name) {
            // Default name
            name = 'patient set';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var endpoint = this.endpointService.getEndpoint();
        headers.append('Authorization', "Bearer " + endpoint.accessToken);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(constraint.toQueryObject());
        var url = endpoint.getUrl() + "/patient_sets?name=" + name;
        url = '';
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError.bind(this));
    };
    // -------------------------------------- aggregate calls --------------------------------------
    ResourceService.prototype.getConceptAggregateMock = function (constraint) {
        var aggregate = {
            min: 20,
            max: 100,
            values: []
        };
        var type = constraint.concept.type;
        if (type === 'NUMERIC') {
        }
        else {
            var path = constraint.concept.path;
            if (path.indexOf('consent') !== -1) {
                aggregate['values'] = ['yes', 'no'];
            }
            else if (path.indexOf('gender') !== -1) {
                aggregate['values'] = ['male', 'female'];
            }
        }
        return aggregate;
    };
    return ResourceService;
}());
ResourceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__endpoint_service__["a" /* EndpointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__endpoint_service__["a" /* EndpointService */]) === "function" && _b || Object])
], ResourceService);

var _a, _b;
//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/services/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_workflow__ = __webpack_require__("../../../../../src/app/modules/shared/models/workflow.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = new __WEBPACK_IMPORTED_MODULE_1__models_workflow__["a" /* Workflow */]();
    }
    WorkflowService.prototype.getCurrentWorkflow = function () {
        return this.workflow;
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WorkflowService);

//# sourceMappingURL=workflow.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/accordion-components/saved-patient-sets/saved-patient-sets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa.fa-circle {\n  font-size: 10px;\n  color: darkgray;\n  margin-left: 3px;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/accordion-components/saved-patient-sets/saved-patient-sets.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataList [value]=\"patientSets\">\n  <ng-template let-patientSet let-i=\"index\" pTemplate=\"item\">\n\n    <div class=\"ui-grid ui-grid-responsive ui-fluid gb-patient-set-item\"\n         pDraggable=\"patient-set-drag-drop\">\n\n      <button type=\"button\"\n              class=\"btn btn-outline-danger btn-sm pull-right constraint-remove-btn\"\n              (click)=\"removePatientSet($event, i)\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </button>\n\n      <button type=\"button\"\n              class=\"btn btn-outline-info btn-sm pull-right constraint-remove-btn\"\n              (click)=\"modifyPatientSet($event, i)\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n      </button>\n\n\n      <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n      {{patientSet.name}} ({{patientSet.setSize}})\n    </div>\n\n  </ng-template>\n</p-dataList>\n"

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/accordion-components/saved-patient-sets/saved-patient-sets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPatientSetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_constraint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/constraint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_drop_mode__ = __webpack_require__("../../../../../src/app/modules/shared/models/drop-mode.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SavedPatientSetsComponent = (function () {
    function SavedPatientSetsComponent(dimensionRegistry, constraintService, element) {
        this.dimensionRegistry = dimensionRegistry;
        this.constraintService = constraintService;
        this.element = element;
        // this.patientSets = this.dimensionRegistry.getPatientSets();
        this.patientSets = this.constraintService.savedPatientSets;
    }
    SavedPatientSetsComponent.prototype.ngOnInit = function () {
    };
    SavedPatientSetsComponent.prototype.ngAfterViewInit = function () {
        this.observer = new MutationObserver(this.update.bind(this));
        var config = {
            attributes: false,
            subtree: true,
            childList: true,
            characterData: false
        };
        this.observer.observe(this.element.nativeElement, config);
    };
    SavedPatientSetsComponent.prototype.update = function () {
        var pDataList = this.element.nativeElement.querySelector('p-datalist');
        var ul = pDataList.querySelector('.ui-datalist-data');
        var index = 0;
        var _loop_1 = function (li) {
            var correspondingPatientSet = this_1.patientSets[index];
            li.addEventListener('dragstart', (function () {
                correspondingPatientSet['dropMode'] = __WEBPACK_IMPORTED_MODULE_3__shared_models_drop_mode__["a" /* DropMode */].PatientSet;
                this.constraintService.selectedNode = correspondingPatientSet;
            }).bind(this_1));
            index++;
        };
        var this_1 = this;
        for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
            var li = _a[_i];
            _loop_1(li);
        }
    };
    SavedPatientSetsComponent.prototype.modifyPatientSet = function (event, i) {
        console.log('modify patient set: ', event, i, this.patientSets[i]);
        var patientSet = this.patientSets[i];
        this.constraintService.rootInclusionConstraint =
            this.constraintService.deepCopy(patientSet['inclusionConstraint']);
        this.constraintService.rootExclusionConstraint =
            this.constraintService.deepCopy(patientSet['exclusionConstraint']);
    };
    SavedPatientSetsComponent.prototype.removePatientSet = function (event, i) {
        console.log('remove patient set: ', event);
        this.patientSets.splice(i, 1);
    };
    return SavedPatientSetsComponent;
}());
SavedPatientSetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'saved-patient-sets',
        template: __webpack_require__("../../../../../src/app/modules/side-panel/accordion-components/saved-patient-sets/saved-patient-sets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/side-panel/accordion-components/saved-patient-sets/saved-patient-sets.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_constraint_service__["a" /* ConstraintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_constraint_service__["a" /* ConstraintService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], SavedPatientSetsComponent);

var _a, _b, _c;
//# sourceMappingURL=saved-patient-sets.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/accordion-components/tree-nodes/tree-nodes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gb-metadata-row{\n  font-size: small;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/accordion-components/tree-nodes/tree-nodes.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@notifyState]=\"dimensionRegistryService.loadingTreeNodes\">\n\n  <!-- the search/filter input -->\n  <p-autoComplete [(ngModel)]=\"searchTerm\"\n                  styleClass=\"gb-tree-filter-input\"\n                  placeholder=\"Filter tree nodes\"\n                  (onClear)=\"onFiltering($event)\"\n                  (completeMethod)=\"onFiltering($event)\"></p-autoComplete>\n\n  <!-- the tree itself -->\n  <p-tree [value]=\"treeNodes\"\n          [selectionMode]=\"dimensionRegistryService.treeSelectionMode\"\n          [(selection)]=\"selectedTreeNodes\"\n          (onNodeExpand)=\"expandNode($event)\"\n          (onNodeSelect)=\"onNodeSelect($event)\"\n          (onNodeUnselect)=\"onNodeUnselect($event)\"\n          draggableNodes=\"true\"\n          styleClass=\"gb-tree-container\"></p-tree>\n\n  <!-- the metadata popup -->\n  <p-overlayPanel #treeNodeMetadataPanel\n                  [dismissable]=\"true\"\n                  [showCloseIcon]=\"true\">\n    <!--{{metadataContent}}-->\n    <div *ngFor=\"let item of metadataContent\">\n      <div class=\"ui-grid-row gb-metadata-row\">\n        {{item.key}}: {{item.val}}\n      </div>\n    </div>\n  </p-overlayPanel>\n\n\n  <!-- the spinning icon -->\n  <i class=\"fa fa-spin fa-refresh fa-fw gb-spinner\"\n     [class.loading]=\"dimensionRegistryService.loadingTreeNodes == 'loading'\"></i>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/accordion-components/tree-nodes/tree-nodes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_constraint_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/constraint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_overlaypanel_overlaypanel__ = __webpack_require__("../../../../primeng/components/overlaypanel/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_overlaypanel_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_overlaypanel_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_drop_mode__ = __webpack_require__("../../../../../src/app/modules/shared/models/drop-mode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_dimension_registry_service__ = __webpack_require__("../../../../../src/app/modules/shared/services/dimension-registry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeNodesComponent = (function () {
    function TreeNodesComponent(constraintService, dimensionRegistryService, element) {
        this.constraintService = constraintService;
        this.dimensionRegistryService = dimensionRegistryService;
        this.element = element;
        // the variable holding the current metadata overlay content being shown
        this.metadataContent = [];
        this.expansionStatus = {
            expanded: false,
            treeNodeElm: null,
            treeNode: null
        };
        this.treeNodes = dimensionRegistryService.treeNodes;
    }
    TreeNodesComponent.prototype.ngOnInit = function () {
    };
    TreeNodesComponent.prototype.ngAfterViewInit = function () {
        // this.update();
        this.observer = new MutationObserver(this.update.bind(this));
        var config = {
            attributes: false,
            subtree: true,
            childList: true,
            characterData: false
        };
        this.observer.observe(this.element.nativeElement, config);
    };
    /**
     * Update the contextmenu popup (right click) content
     * by the given metadata object from a treenode
     * @param metadata
     */
    TreeNodesComponent.prototype.updateMetadataContent = function (metadata) {
        this.metadataContent = [];
        for (var key in metadata) {
            this.metadataContent.push({
                key: key,
                val: metadata[key]
            });
        }
    };
    /**
     * Add event listeners to the newly appended tree nodes
     * @param treeNodeElements
     * @param treeNodes
     */
    TreeNodesComponent.prototype.updateEventListeners = function (treeNodeElements, treeNodes) {
        var index = 0;
        var _loop_1 = function (elm) {
            var dataObject = treeNodes[index];
            var dataObjectType = dataObject['type'];
            var metadata = dataObject['metadata'];
            var treeNodeElm = elm.querySelector('li.ui-treenode');
            var handleDragstart = (function (event) {
                event.stopPropagation();
                dataObject['dropMode'] = __WEBPACK_IMPORTED_MODULE_4__shared_models_drop_mode__["a" /* DropMode */].TreeNode;
                this.constraintService.selectedNode = dataObject;
            }).bind(this_1);
            var handleContextmenu = (function (event) {
                event.stopPropagation();
                event.preventDefault();
                this.updateMetadataContent(metadata);
                this.treeNodeMetadataPanel.toggle(event);
                var div = this.treeNodeMetadataPanel.el.nativeElement.children[0];
                div.style.left = event.clientX + 'px';
                div.style.top = (event.layerY + 75) + 'px';
            }).bind(this_1);
            // if the data object type belongs to the listed types
            if (this_1.constraintService.validTreeNodeTypes.includes(dataObjectType)) {
                treeNodeElm.addEventListener('dragstart', handleDragstart);
            }
            // if metadata exits
            if (metadata) {
                treeNodeElm.addEventListener('contextmenu', handleContextmenu);
            }
            var uiTreeNodeChildrenElm = elm.querySelector('.ui-treenode-children');
            if (uiTreeNodeChildrenElm) {
                this_1.updateEventListeners(uiTreeNodeChildrenElm.children, dataObject.children);
            }
            index++;
        };
        var this_1 = this;
        for (var _i = 0, treeNodeElements_1 = treeNodeElements; _i < treeNodeElements_1.length; _i++) {
            var elm = treeNodeElements_1[_i];
            _loop_1(elm);
        }
    };
    TreeNodesComponent.prototype.update = function () {
        if (this.expansionStatus['expanded']) {
            var treeNodeElm = this.expansionStatus['treeNodeElm'];
            var treeNode = this.expansionStatus['treeNode'];
            var newChildren = treeNodeElm.querySelector('ul.ui-treenode-children').children;
            this.updateEventListeners(newChildren, treeNode.children);
            this.expansionStatus['expanded'] = false;
            this.expansionStatus['treeNodeElm'] = null;
            this.expansionStatus['treeNode'] = null;
        }
        this.removeFalsePrimeNgClasses();
    };
    TreeNodesComponent.prototype.expandNode = function (event) {
        if (event.node) {
            this.expansionStatus['expanded'] = true;
            this.expansionStatus['treeNodeElm'] = event.originalEvent.target.parentElement.parentElement;
            this.expansionStatus['treeNode'] = event.node;
        }
    };
    /**
     * Recursively filter the tree nodes and return the copied tree nodes that match,
     * return the reduced tree as a new instance
     * (An alternative solution as backup)
     * @param treeNodes
     * @param field
     * @param filterWord
     * @returns {Array}
     */
    TreeNodesComponent.prototype.filterWithCopiedTreeNodes = function (treeNodes, field, filterWord) {
        var result = {
            hasMatching: false,
            matchingTreeNodes: [] // matchingTreeNodes is a subset of treeNodes
        };
        for (var _i = 0, treeNodes_1 = treeNodes; _i < treeNodes_1.length; _i++) {
            var node = treeNodes_1[_i];
            var nodeCopy = Object.assign({}, node);
            nodeCopy['expanded'] = true;
            var fieldString = node[field].toLowerCase();
            if (fieldString.includes(filterWord)) {
                result.hasMatching = true;
                result.matchingTreeNodes.push(nodeCopy);
            }
            if (node['children'] && node['children'].length > 0) {
                var subResult = this.filterWithCopiedTreeNodes(node['children'], field, filterWord);
                if (subResult.hasMatching) {
                    nodeCopy['children'] = subResult.matchingTreeNodes;
                    result.hasMatching = true;
                    if (result.matchingTreeNodes.indexOf(nodeCopy) === -1) {
                        result.matchingTreeNodes.push(nodeCopy);
                    }
                }
            }
        }
        return result;
    };
    /**
     * Recursively filter the original tree nodes in the dimension registry,
     * assign highlight css classes to tree nodes
     * @param {TreeNode[]} treeNodes
     * @param {string} field
     * @param filterWord
     * @returns {{hasMatching: boolean}}
     */
    TreeNodesComponent.prototype.filterWithHighlightTreeNodes = function (treeNodes, field, filterWord) {
        var result = {
            hasMatching: false
        };
        // if the tree nodes are defined
        if (treeNodes) {
            // if there is a filter word
            if (filterWord.length > 0) {
                for (var _i = 0, treeNodes_2 = treeNodes; _i < treeNodes_2.length; _i++) {
                    var node = treeNodes_2[_i];
                    node['expanded'] = false;
                    node['styleClass'] = undefined;
                    var fieldString = node[field].toLowerCase();
                    if (fieldString.includes(filterWord)) {
                        result.hasMatching = true;
                        if (node['children'] && node['children'].length > 0) {
                            node['styleClass'] = 'highlight-treenode is-not-leaf';
                        }
                        else {
                            node['styleClass'] = 'highlight-treenode';
                        }
                    }
                    else {
                        node['styleClass'] = undefined;
                    }
                    if (node['children'] && node['children'].length > 0) {
                        var subResult = this.filterWithHighlightTreeNodes(node['children'], field, filterWord);
                        if (subResult.hasMatching) {
                            result.hasMatching = true;
                            node['expanded'] = true;
                        }
                    }
                }
            }
            else {
                for (var _a = 0, treeNodes_3 = treeNodes; _a < treeNodes_3.length; _a++) {
                    var node = treeNodes_3[_a];
                    node['expanded'] = false;
                    if (node['children'] && node['children'].length > 0) {
                        node['styleClass'] = 'is-not-leaf';
                    }
                    else {
                        node['styleClass'] = undefined;
                    }
                    this.filterWithHighlightTreeNodes(node['children'], field, filterWord);
                }
            }
        }
        return result;
    };
    /**
     * PrimeNg tree is behaving strangely when dynamically adding custom class to tree nodes:
     * sometimes a tree node with children is marked with the 'ui-treenode-leaf' class.
     * Therefore, this function is to remove any false ui-treenode-leaf classes.
     */
    TreeNodesComponent.prototype.removeFalsePrimeNgClasses = function () {
        var leaves = this.element.nativeElement.querySelectorAll('.ui-treenode-leaf');
        if (leaves) {
            for (var _i = 0, leaves_1 = leaves; _i < leaves_1.length; _i++) {
                var supposedLeaf = leaves_1[_i];
                if (supposedLeaf.classList.contains('is-not-leaf')) {
                    supposedLeaf.classList.remove('ui-treenode-leaf');
                }
            }
        }
    };
    /**
     * User typing in the input box of the filter search box triggers this handler
     * @param event
     */
    TreeNodesComponent.prototype.onFiltering = function (event) {
        var filterWord = this.searchTerm.trim().toLowerCase();
        this.filterWithHighlightTreeNodes(this.dimensionRegistryService.treeNodes, 'label', filterWord);
    };
    /**
     * User selecting a tree node triggers this handler
     * @param event
     */
    TreeNodesComponent.prototype.onNodeSelect = function (event) {
        this.updateSelectedTreeNodes();
    };
    /**
     * User unselecting a tree node triggers this handler
     * @param event
     */
    TreeNodesComponent.prototype.onNodeUnselect = function (event) {
        this.updateSelectedTreeNodes();
    };
    /**
     * Update the selected tree nodes in the dimension registry service
     */
    TreeNodesComponent.prototype.updateSelectedTreeNodes = function () {
        this.dimensionRegistryService.selectedTreeNodes = [];
        for (var _i = 0, _a = this.treeNodes; _i < _a.length; _i++) {
            var treeNode = _a[_i];
            var isSelected = this.selectedTreeNodes.indexOf(treeNode) !== -1;
            var isPartiallySelected = treeNode['partialSelected'];
            if (isSelected || isPartiallySelected) {
                var treeNodeCopy = Object.assign({}, treeNode);
                this.keepSelectedTreeNodes(treeNodeCopy);
                this.dimensionRegistryService.selectedTreeNodes.push(treeNodeCopy);
            }
        }
    };
    TreeNodesComponent.prototype.keepSelectedTreeNodes = function (parentNode) {
        var children = parentNode['children'];
        if (children) {
            var selectedChildren = [];
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                var isChildSelected = this.selectedTreeNodes.indexOf(child) !== -1;
                var isChildPartiallySelected = child['partialSelected'];
                if (isChildSelected || isChildPartiallySelected) {
                    var childCopy = Object.assign({}, child);
                    this.keepSelectedTreeNodes(childCopy);
                    selectedChildren.push(childCopy);
                }
            }
            parentNode['children'] = selectedChildren;
        }
    };
    return TreeNodesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('treeNodeMetadataPanel'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_components_overlaypanel_overlaypanel__["OverlayPanel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_components_overlaypanel_overlaypanel__["OverlayPanel"]) === "function" && _a || Object)
], TreeNodesComponent.prototype, "treeNodeMetadataPanel", void 0);
TreeNodesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tree-nodes',
        template: __webpack_require__("../../../../../src/app/modules/side-panel/accordion-components/tree-nodes/tree-nodes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/side-panel/accordion-components/tree-nodes/tree-nodes.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["trigger"])('notifyState', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["transition"])('loading => complete', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                        background: 'rgba(51, 156, 144, 0.5)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["animate"])('1000ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                        background: 'rgba(255, 255, 255, 0.0)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_constraint_service__["a" /* ConstraintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_constraint_service__["a" /* ConstraintService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_dimension_registry_service__["a" /* DimensionRegistryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], TreeNodesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tree-nodes.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<p-accordion>\n  <p-accordionTab header=\"Ontology\" [selected]=\"true\">\n    <tree-nodes></tree-nodes>\n  </p-accordionTab>\n  <!--<p-accordionTab header=\"Studies\">-->\n    <!--studies-->\n  <!--</p-accordionTab>-->\n  <!--<p-accordionTab header=\"Concepts\">-->\n    <!--concepts-->\n  <!--</p-accordionTab>-->\n  <p-accordionTab header=\"Saved Patient Sets\">\n    <saved-patient-sets></saved-patient-sets>\n  </p-accordionTab>\n  <!--<p-accordionTab header=\"Saved Observation Sets\">-->\n    <!--<saved-observation-sets></saved-observation-sets>-->\n  <!--</p-accordionTab>-->\n</p-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidePanelComponent = (function () {
    function SidePanelComponent() {
    }
    SidePanelComponent.prototype.ngOnInit = function () {
    };
    return SidePanelComponent;
}());
SidePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'side-panel',
        template: __webpack_require__("../../../../../src/app/modules/side-panel/side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/side-panel/side-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidePanelComponent);

//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/side-panel/side-panel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__side_panel_component__ = __webpack_require__("../../../../../src/app/modules/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_accordion_accordion__ = __webpack_require__("../../../../primeng/components/accordion/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_accordion_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_accordion_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_tree_tree__ = __webpack_require__("../../../../primeng/components/tree/tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_tree_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_tree_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_datalist_datalist__ = __webpack_require__("../../../../primeng/components/datalist/datalist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_datalist_datalist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_datalist_datalist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accordion_components_tree_nodes_tree_nodes_component__ = __webpack_require__("../../../../../src/app/modules/side-panel/accordion-components/tree-nodes/tree-nodes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_common_api__ = __webpack_require__("../../../../primeng/components/common/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_common_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_common_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_overlaypanel_overlaypanel__ = __webpack_require__("../../../../primeng/components/overlaypanel/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_overlaypanel_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_overlaypanel_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__accordion_components_saved_patient_sets_saved_patient_sets_component__ = __webpack_require__("../../../../../src/app/modules/side-panel/accordion-components/saved-patient-sets/saved-patient-sets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_dragdrop_dragdrop__ = __webpack_require__("../../../../primeng/components/dragdrop/dragdrop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_dragdrop_dragdrop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_dragdrop_dragdrop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SidePanelModule = (function () {
    function SidePanelModule() {
    }
    return SidePanelModule;
}());
SidePanelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_components_accordion_accordion__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_components_tree_tree__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_components_overlaypanel_overlaypanel__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_components_datalist_datalist__["DataListModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_components_dragdrop_dragdrop__["DragDropModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AutoCompleteModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__side_panel_component__["a" /* SidePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_6__accordion_components_tree_nodes_tree_nodes_component__["a" /* TreeNodesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__accordion_components_saved_patient_sets_saved_patient_sets_component__["a" /* SavedPatientSetsComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7_primeng_components_common_api__["TreeDragDropService"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__side_panel_component__["a" /* SidePanelComponent */]]
    })
], SidePanelModule);

//# sourceMappingURL=side-panel.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map