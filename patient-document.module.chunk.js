webpackJsonp(["patient-document.module"],{

/***/ "../../../../../src/app/modules/patient-document/patient-document.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/patient-document/patient-document.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  patient-document works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/modules/patient-document/patient-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDocumentComponent; });
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

var PatientDocumentComponent = (function () {
    function PatientDocumentComponent() {
    }
    PatientDocumentComponent.prototype.ngOnInit = function () {
    };
    return PatientDocumentComponent;
}());
PatientDocumentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-patient-document',
        template: __webpack_require__("../../../../../src/app/modules/patient-document/patient-document.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/patient-document/patient-document.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PatientDocumentComponent);

//# sourceMappingURL=patient-document.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/patient-document/patient-document.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDocumentModule", function() { return PatientDocumentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_document_component__ = __webpack_require__("../../../../../src/app/modules/patient-document/patient-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_document_routing__ = __webpack_require__("../../../../../src/app/modules/patient-document/patient-document.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PatientDocumentModule = (function () {
    function PatientDocumentModule() {
    }
    return PatientDocumentModule;
}());
PatientDocumentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__patient_document_routing__["a" /* routing */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__patient_document_component__["a" /* PatientDocumentComponent */]]
    })
], PatientDocumentModule);

//# sourceMappingURL=patient-document.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/patient-document/patient-document.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_document_component__ = __webpack_require__("../../../../../src/app/modules/patient-document/patient-document.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__patient_document_component__["a" /* PatientDocumentComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=patient-document.routing.js.map

/***/ })

});
//# sourceMappingURL=patient-document.module.chunk.js.map