(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SingularCoverTest';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material */ "./src/app/material/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_policies_policies_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/policies/policies.interface */ "./src/app/services/policies/policies.interface.ts");
/* harmony import */ var _services_policies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/policies */ "./src/app/services/policies/index.ts");
/* harmony import */ var _redux_reducers_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./redux/reducers/reducers */ "./src/app/redux/reducers/reducers.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _redux_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./redux/effects */ "./src/app/redux/effects/index.ts");
/* harmony import */ var _components_policies_table_policies_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/policies-table/policies-table.component */ "./src/app/components/policies-table/policies-table.component.ts");
/* harmony import */ var _components_policies_tails_policies_tails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/policies-tails/policies-tails.component */ "./src/app/components/policies-tails/policies-tails.component.ts");
/* harmony import */ var _components_favs_modal_favs_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/favs-modal/favs-modal.component */ "./src/app/components/favs-modal/favs-modal.component.ts");
/* harmony import */ var _components_favs_list_favs_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/favs-list/favs-list.component */ "./src/app/components/favs-list/favs-list.component.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_policies_table_policies_table_component__WEBPACK_IMPORTED_MODULE_20__["PoliciesTableComponent"],
                _components_policies_tails_policies_tails_component__WEBPACK_IMPORTED_MODULE_21__["PoliciesTailsComponent"],
                _components_favs_modal_favs_modal_component__WEBPACK_IMPORTED_MODULE_22__["FavsModalComponent"],
                _components_favs_list_favs_list_component__WEBPACK_IMPORTED_MODULE_23__["FavsListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_redux_reducers_reducers__WEBPACK_IMPORTED_MODULE_15__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([_redux_effects__WEBPACK_IMPORTED_MODULE_19__["PoliciesEffect"]]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_24__["NgScrollbarModule"]
            ],
            providers: [{
                    provide: _services_policies_policies_interface__WEBPACK_IMPORTED_MODULE_13__["IPoliciesService"],
                    useClass: _services_policies__WEBPACK_IMPORTED_MODULE_14__["PoliciesService"]
                }],
            entryComponents: [
                _components_favs_modal_favs_modal_component__WEBPACK_IMPORTED_MODULE_22__["FavsModalComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/favs-list/favs-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favs-list/favs-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"w-80 p-fav-modal pt-1\">\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n</mat-form-field>\n<ng-scrollbar #scrollable>\n  <div *ngIf=\"resultsFound\">\n    <div class=\"scrollable-div\">\n      <div *ngFor=\"let fav of favsList\" class=\"p-fav-modal px-xs-0 justify-content-between\">\n        <div class=\"align-items-center\">\n          <img matTooltip=\"{{fav.kind | titlecase }}\" class=\"fix-image-size mr-5px\" src=\"../../../assets/images/{{fav.kindImage}}\" alt=\"\">\n          <h4>{{fav.name | titlecase}}</h4>\n        </div>\n        <div class=\"align-items-center justify-content-between\">\n          <h4>{{fav.brand | titlecase}}</h4>\n          <img class=\"fix-image-size ml-5px\" src=\"../../../assets/images/{{fav.brandImage}}\" alt=\"\">\n          <span><i matTooltip=\"Remove policy from favourites\" [matTooltipPosition]=\"'below'\" class=\"fa fa-times ml-1 pointer delete-from-favs-icon\"\n              (click)=\"removeFavFromFavs(fav)\"></i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!resultsFound\" class=\"justify-content-center w-100\">\n    <h3>No results found</h3>\n  </div>\n</ng-scrollbar>"

/***/ }),

/***/ "./src/app/components/favs-list/favs-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/favs-list/favs-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  position: relative;\n  display: block;\n  cursor: pointer; }\n\nspan:before {\n  content: '';\n  position: absolute;\n  width: 0%;\n  height: 1px;\n  top: 50%;\n  margin-top: -0.5px;\n  background: black; }\n\nspan:hover:before {\n  background: black;\n  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1); }\n\n@media (min-width: 100px) and (max-width: 450px) {\n  span:hover:before {\n    width: 57vw !important; }\n  span:before {\n    left: -56vw !important; } }\n\n@media (min-width: 450.01px) and (max-width: 767.99px) {\n  span:hover:before {\n    width: 64vw; }\n  span:before {\n    left: -63vw; } }\n\n@media (min-width: 768px) and (max-width: 1700px) {\n  span:hover:before {\n    width: 44vw; }\n  span:before {\n    left: -44vw; } }\n\n@media (min-width: 1700.01px) {\n  span:hover:before {\n    width: 46vw; }\n  span:before {\n    left: -46vw; } }\n\n.delete-from-favs-icon {\n  color: black;\n  transition: color 0.2s ease; }\n\n.delete-from-favs-icon:hover {\n  color: #ff5253; }\n\n.scrollable-div {\n  height: 56vh; }\n\n@media (max-width: 450px) {\n  .px-xs-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2ZhdnMtbGlzdC9mYXZzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSm9yZGkvRG9jdW1lbnRzL0VzdHVkaW9zL1dlYkRldmVsb3BtZW50L1Npbmd1bGFyQ292ZXJUZXN0L1Npbmd1bGFyQ292ZXJUZXN0L3NyYy9hcHAvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLHlEQUF1RCxFQUN4RDs7QUFFRDtFQUNFO0lBQ0UsdUJBQXNCLEVBQ3ZCO0VBRUQ7SUFDRSx1QkFBc0IsRUFDdkIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsWUFBVyxFQUNaO0VBRUQ7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFO0lBQ0UsWUFBVyxFQUNaO0VBRUQ7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFO0lBQ0UsWUFBVyxFQUNaO0VBRUQ7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFLSDtFQUNFLGFBQVk7RUFDWiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSxlQ3RFa0IsRUR1RW5COztBQUNEO0VBQ0ksYUFBWSxFQUNmOztBQUNEO0VBQ0k7SUFDSSwyQkFBMEI7SUFDMUIsNEJBQTJCLEVBQzlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhdnMtbGlzdC9mYXZzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy9jb2xvcnNcIjtcbi8vU3RhcnQ6IFN0cmlrZXRocm91Z2ggYW5pbWF0aW9uXG5cbnNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNwYW46YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0wLjVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbnNwYW46aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIC41cyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIHNwYW46aG92ZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogNTd2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgc3BhbjpiZWZvcmUge1xuICAgIGxlZnQ6IC01NnZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MC4wMXB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk5cHgpIHtcbiAgc3Bhbjpob3ZlcjpiZWZvcmUge1xuICAgIHdpZHRoOiA2NHZ3O1xuICB9XG5cbiAgc3BhbjpiZWZvcmUge1xuICAgIGxlZnQ6IC02M3Z3O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xuICBzcGFuOmhvdmVyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDQ0dnc7XG4gIH1cblxuICBzcGFuOmJlZm9yZSB7XG4gICAgbGVmdDogLTQ0dnc7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE3MDAuMDFweCkge1xuICBzcGFuOmhvdmVyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDQ2dnc7XG4gIH1cblxuICBzcGFuOmJlZm9yZSB7XG4gICAgbGVmdDogLTQ2dnc7XG4gIH1cbn1cblxuLy9FbmQ6IFN0cmlrZXRocm91Z2ggYW5pbWF0aW9uXG5cbi5kZWxldGUtZnJvbS1mYXZzLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmRlbGV0ZS1mcm9tLWZhdnMtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAkYXdlc29tZVJlZDtcbn1cbi5zY3JvbGxhYmxlLWRpdntcbiAgICBoZWlnaHQ6IDU2dmg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpe1xuICAgIC5weC14cy0we1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIkYXdlc29tZVllbGxvdzogI2ZmZWMwMDtcbiRhd2Vzb21lWWVsbG93LW9wYWNpdHk2MDogI2ZmZWUwMDlkO1xuJGF3ZXNvbWVSZWQ6ICNmZjUyNTM7Il19 */"

/***/ }),

/***/ "./src/app/components/favs-list/favs-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favs-list/favs-list.component.ts ***!
  \*************************************************************/
/*! exports provided: FavsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavsListComponent", function() { return FavsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _redux_actions_policies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/policies.actions */ "./src/app/redux/actions/policies.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavsListComponent = /** @class */ (function () {
    function FavsListComponent(store) {
        this.store = store;
    }
    FavsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favsList = [];
        this.resultsFound = false;
        this.store.subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data.policies.policiesList);
            _this.favsList = _this.returnFavsPoliciesOfAllPolicies(_this.dataSource);
            _this.resultsFound = _this.checkIfNoResultsFound(_this.favsList);
        });
    };
    FavsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.favsList = this.returnFavsPoliciesOfAllPolicies(this.dataSource);
        this.resultsFound = this.checkIfNoResultsFound(this.favsList);
    };
    FavsListComponent.prototype.checkIfNoResultsFound = function (data) {
        var results = true;
        if (data.length === 0) {
            results = false;
        }
        else {
            results = true;
        }
        return results;
    };
    FavsListComponent.prototype.returnFavsPoliciesOfAllPolicies = function (data) {
        var favsList = [];
        for (var _i = 0, _a = data.filteredData; _i < _a.length; _i++) {
            var policy = _a[_i];
            if (policy.favouritePolicy) {
                favsList.push(policy);
            }
        }
        return favsList;
    };
    FavsListComponent.prototype.removeFavFromFavs = function (fav) {
        this.store.dispatch(new _redux_actions_policies_actions__WEBPACK_IMPORTED_MODULE_3__["UnmarkPolicyAsFavAction"](fav));
    };
    FavsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favs-list',
            template: __webpack_require__(/*! ./favs-list.component.html */ "./src/app/components/favs-list/favs-list.component.html"),
            styles: [__webpack_require__(/*! ./favs-list.component.scss */ "./src/app/components/favs-list/favs-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FavsListComponent);
    return FavsListComponent;
}());



/***/ }),

/***/ "./src/app/components/favs-modal/favs-modal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/favs-modal/favs-modal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative\">\n<i (click)=\"closeModal()\" class=\"fa fa-times close-icon\"></i>\n</div>\n<div class=\"justify-content-between align-items-center p-fav-modal\">\n  <h1>Favourite List</h1>\n  <i class=\"fa fa-heart yellow-heart\"></i>\n</div>\n<mat-divider></mat-divider>\n<app-favs-list></app-favs-list>"

/***/ }),

/***/ "./src/app/components/favs-modal/favs-modal.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/favs-modal/favs-modal.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes heartbeat {\n  0% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  20% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  40% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  60% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  80% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  100% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); } }\n\n@keyframes heartbeat {\n  0% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  20% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  40% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  60% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  80% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  100% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); } }\n\n.fa-heart {\n  font-size: 2rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-animation: heartbeat 1s infinite;\n          animation: heartbeat 1s infinite; }\n\n.close-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: grey;\n  transition: color 0.2s ease; }\n\n.close-icon:hover {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2ZhdnMtbW9kYWwvZmF2cy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBR3JCO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBR3JCO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBLEVBQUE7O0FBdEJ6QjtFQUNFO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBR3JCO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBR3JCO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsK0JBQXFCO1lBQXJCLHVCQUFxQixFQUFBLEVBQUE7O0FBSXpCO0VBQ0UsZ0JBQWU7RUFDZixvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLHlDQUFnQztVQUFoQyxpQ0FBZ0MsRUFDakM7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFFBQU07RUFDTixZQUFXO0VBQ1gsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZzLW1vZGFsL2ZhdnMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gIH1cblxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICB9XG59XG5cbi5mYS1oZWFydCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBhbmltYXRpb246IGhlYXJ0YmVhdCAxcyBpbmZpbml0ZTtcbn1cbi5jbG9zZS1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuLmNsb3NlLWljb246aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufTtcblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/favs-modal/favs-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/favs-modal/favs-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: FavsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavsModalComponent", function() { return FavsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavsModalComponent = /** @class */ (function () {
    function FavsModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    FavsModalComponent.prototype.ngOnInit = function () {
    };
    FavsModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    FavsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favs-modal',
            template: __webpack_require__(/*! ./favs-modal.component.html */ "./src/app/components/favs-modal/favs-modal.component.html"),
            styles: [__webpack_require__(/*! ./favs-modal.component.scss */ "./src/app/components/favs-modal/favs-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], FavsModalComponent);
    return FavsModalComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer bg-primary justify-content-center align-items-center\">\n  <div>Made with</div>\n  <i class=\"fa fa-heart mx-5px\"></i>\n  <div>for SingularCover</div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 5rem;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.mx-5px {\n  margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixnQ0FBK0IsRUFDbEM7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlclxue1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi5teC01cHh7XG4gICAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section bg-accent min-background-height\">\n  <app-policies-table class=\"hide-md\"></app-policies-table>\n  <app-policies-tails class=\"show-md\"></app-policies-tails>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-background-height {\n  min-height: calc( 76vh - 80px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQixFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi1iYWNrZ3JvdW5kLWhlaWdodHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKCA3NnZoIC0gODBweCApO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_policies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/policies */ "./src/app/services/policies/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _redux___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/* */ "./src/app/redux/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _redux___WEBPACK_IMPORTED_MODULE_3__["GetPoliciesAction"]());
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")],
            providers: [_services_policies__WEBPACK_IMPORTED_MODULE_1__["PoliciesService"]]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar justify-content-between align-items-center px-2\">\n  <div class=\"justify-content-center align-items-center\">\n    <img class=\"mx-1\" src=\"../../../assets/singular-cover_logo.svg\" alt=\"singular-cover-logo\">\n    <h4 class=\"hide-md mx-1\">Frontend Test</h4>\n  </div>\n  <div class=\"fav-button-div mx-1 justify-content-center align-items-center\"  (click)=\"openFavsModal()\">\n    <i class=\"fa fa-heart\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  height: 5.125rem;\n  background-color: white;\n  position: fixed;\n  top: 0;\n  width: 90%;\n  z-index: 1; }\n\n.fav-button-div {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.fav-button-div:hover {\n  transition: background-color .2s ease-in-out;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQix3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixPQUFNO0VBQ04sV0FBVTtFQUNWLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsNkNBQTRDO0VBQzVDLHFDQUFvQyxFQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBoZWlnaHQ6IDUuMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA5MCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mYXYtYnV0dG9uLWRpdiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmF2LWJ1dHRvbi1kaXY6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _favs_modal_favs_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favs-modal/favs-modal.component */ "./src/app/components/favs-modal/favs-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(dialog) {
        this.dialog = dialog;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openFavsModal = function () {
        var dialogRef = this.dialog.open(_favs_modal_favs_modal_component__WEBPACK_IMPORTED_MODULE_2__["FavsModalComponent"], {
            backdropClass: 'backdrop-modal-class',
            panelClass: 'panel-modal-class'
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/policies-table/policies-table.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/policies-table/policies-table.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n</mat-form-field>\n<div class=\"mat-elevation-z2\">\n<table *ngIf=\"resultsFound\" mat-table matSort [dataSource]=\"dataSource\" >\n\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name | titlecase}} </td>\n  </ng-container>\n\n  <!-- Kind Column -->\n  <ng-container matColumnDef=\"kind\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Kind </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.kind | titlecase}} </td>\n  </ng-container>\n\n  <!-- Company Column -->\n  <ng-container matColumnDef=\"brand\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.brand | titlecase}} </td>\n  </ng-container>\n\n  <!-- Company Image Column -->\n  <ng-container matColumnDef=\"brandImage\">\n    <th mat-header-cell *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <img class=\"fix-image-size\" src=\"../../../assets/images/{{element.brandImage}}\" alt=\"\"></td>\n  </ng-container>\n\n  <!-- Price Column -->\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} $ </td>\n  </ng-container>\n\n  <!-- Add to Fav Column -->\n  <ng-container matColumnDef=\"addToFav\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element\">\n      <div (click)=\"toggleFavPolicy(element)\">\n        <i *ngIf=\"!element.favouritePolicy\" class=\"far fa-heart pointer\"></i>\n        <i *ngIf=\"element.favouritePolicy\" class=\"fa fa-heart pointer red-heart\"></i>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<mat-paginator *ngIf=\"resultsFound\" [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n</div>\n<div *ngIf=\"!resultsFound\" class=\"justify-content-center w-100\">\n  <h3>No Results Found</h3>\n</div>"

/***/ }),

/***/ "./src/app/components/policies-table/policies-table.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/policies-table/policies-table.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table,\n.mat-form-field {\n  width: 100%; }\n\n.fa-heart {\n  transition: color 0.2s ease; }\n\n.fa-heart:hover {\n  color: #ff5253; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3BvbGljaWVzLXRhYmxlL3BvbGljaWVzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0pvcmRpL0RvY3VtZW50cy9Fc3R1ZGlvcy9XZWJEZXZlbG9wbWVudC9TaW5ndWxhckNvdmVyVGVzdC9TaW5ndWxhckNvdmVyVGVzdC9zcmMvYXBwL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFLFlBQVcsRUFHWjs7QUFDRDtFQUNFLDRCQUEyQixFQUM1Qjs7QUFDRDtFQUNFLGVDVmtCLEVEV25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2xpY2llcy10YWJsZS9wb2xpY2llcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL2NvbG9yc1wiO1xuXG50YWJsZSxcbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvL3RhYmxlLWxheW91dDogZml4ZWQ7XG5cbn1cbi5mYS1oZWFydHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuLmZhLWhlYXJ0OmhvdmVye1xuICBjb2xvcjogJGF3ZXNvbWVSZWQ7XG59XG4iLCIkYXdlc29tZVllbGxvdzogI2ZmZWMwMDtcbiRhd2Vzb21lWWVsbG93LW9wYWNpdHk2MDogI2ZmZWUwMDlkO1xuJGF3ZXNvbWVSZWQ6ICNmZjUyNTM7Il19 */"

/***/ }),

/***/ "./src/app/components/policies-table/policies-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/policies-table/policies-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: PoliciesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesTableComponent", function() { return PoliciesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_redux_actions_policies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/redux/actions/policies.actions */ "./src/app/redux/actions/policies.actions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoliciesTableComponent = /** @class */ (function () {
    function PoliciesTableComponent(store) {
        this.store = store;
        this.displayedColumns = ['name', 'kind', 'brand', 'brandImage', 'price', 'addToFav'];
    }
    PoliciesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageSize = 5;
        this.resultsFound = true;
        this.store.subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data.policies.policiesList);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    PoliciesTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        console.log(this.dataSource.filteredData);
        if (this.dataSource.filteredData.length === 0) {
            this.resultsFound = false;
        }
        else {
            this.resultsFound = true;
        }
    };
    PoliciesTableComponent.prototype.toggleFavPolicy = function (policy) {
        if (policy.favouritePolicy === false) {
            this.store.dispatch(new app_redux_actions_policies_actions__WEBPACK_IMPORTED_MODULE_2__["SetPolicyAsFavAction"](policy));
        }
        else {
            this.store.dispatch(new app_redux_actions_policies_actions__WEBPACK_IMPORTED_MODULE_2__["UnmarkPolicyAsFavAction"](policy));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PoliciesTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PoliciesTableComponent.prototype, "sort", void 0);
    PoliciesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policies-table',
            template: __webpack_require__(/*! ./policies-table.component.html */ "./src/app/components/policies-table/policies-table.component.html"),
            styles: [__webpack_require__(/*! ./policies-table.component.scss */ "./src/app/components/policies-table/policies-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], PoliciesTableComponent);
    return PoliciesTableComponent;
}());



/***/ }),

/***/ "./src/app/components/policies-tails/policies-tails.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/policies-tails/policies-tails.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"justify-content-center algn-items-center\">\n<div>\n  <mat-form-field class=\"w-100\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n  </mat-form-field>\n</div>\n<button></button>\n</div>\n<mat-accordion *ngIf=\"resultsFound\">\n  <mat-expansion-panel *ngFor=\"let policy of dataSourceForTail\">\n    <mat-expansion-panel-header>\n      <div class=\"tile-row algn-items-center justify-content-between w-100\">\n        <div class=\"policy-tail-name\">\n          <mat-panel-title>\n            {{policy.name}}\n          </mat-panel-title>\n        </div>\n        <div class=\"policy-tail-price\">\n          <mat-panel-description>\n            {{policy.price}}$\n            <div class=\"ml-1 pointer\" (click)=\"toggleFavPolicy(policy)\">\n              <i *ngIf=\"!policy.favouritePolicy\" class=\"far fa-heart pointer\"></i>\n              <i *ngIf=\"policy.favouritePolicy\" class=\"fa fa-heart pointer red-heart\"></i>\n            </div>\n          </mat-panel-description>\n        </div>\n      </div>\n    </mat-expansion-panel-header>\n    <div class=\"tile-expanded-row algn-items-center justify-content-between w-100\">\n      <div class=\"policy-tail-kind\">\n        <mat-panel-description>\n          <img class=\"fix-image-size mr-1\" src=\"../../../assets/images/{{policy.kindImage}}\" alt=\"\">\n          {{policy.kind | titlecase}}\n        </mat-panel-description>\n      </div>\n      <div class=\"policy-tail-brand\">\n        <mat-panel-description>\n          {{policy.brand | titlecase}}\n          <img class=\"fix-image-size ml-1\" src=\"../../../assets/images/{{policy.brandImage}}\" alt=\"\">\n        </mat-panel-description>\n      </div>\n    </div>\n  </mat-expansion-panel>\n  <mat-paginator class=\"b-r-3px mat-elevation-z2\" *ngIf=\"resultsFound\" [length]=\"length\" [pageIndex]=\"pageIndex\"\n    [pageSize]=\"pageSize\" [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons (page)=\"paginationEvent($event)\"></mat-paginator>\n</mat-accordion>\n\n<div *ngIf=\"!resultsFound\" class=\"justify-content-center w-100\">\n  <h3>No Results Found</h3>\n</div>"

/***/ }),

/***/ "./src/app/components/policies-tails/policies-tails.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/policies-tails/policies-tails.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".b-r-3px {\n  border-radius: 3px; }\n\n.fa-heart {\n  transition: color 0.2s ease; }\n\n.fa-heart:hover {\n  color: #ff5253; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb3JkaS9Eb2N1bWVudHMvRXN0dWRpb3MvV2ViRGV2ZWxvcG1lbnQvU2luZ3VsYXJDb3ZlclRlc3QvU2luZ3VsYXJDb3ZlclRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3BvbGljaWVzLXRhaWxzL3BvbGljaWVzLXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0pvcmRpL0RvY3VtZW50cy9Fc3R1ZGlvcy9XZWJEZXZlbG9wbWVudC9TaW5ndWxhckNvdmVyVGVzdC9TaW5ndWxhckNvdmVyVGVzdC9zcmMvYXBwL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsNEJBQTJCLEVBQzVCOztBQUVEO0VBQ0UsZUNUa0IsRURVbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvbGljaWVzLXRhaWxzL3BvbGljaWVzLXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvY29sb3JzXCI7XG5cbi5iLXItM3B4IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZmEtaGVhcnQge1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG5cbi5mYS1oZWFydDpob3ZlciB7XG4gIGNvbG9yOiAkYXdlc29tZVJlZDtcbn1cbiAgIiwiJGF3ZXNvbWVZZWxsb3c6ICNmZmVjMDA7XG4kYXdlc29tZVllbGxvdy1vcGFjaXR5NjA6ICNmZmVlMDA5ZDtcbiRhd2Vzb21lUmVkOiAjZmY1MjUzOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/policies-tails/policies-tails.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/policies-tails/policies-tails.component.ts ***!
  \***********************************************************************/
/*! exports provided: PoliciesTailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesTailsComponent", function() { return PoliciesTailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/redux/actions */ "./src/app/redux/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoliciesTailsComponent = /** @class */ (function () {
    function PoliciesTailsComponent(store) {
        this.store = store;
    }
    PoliciesTailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageIndex = 0;
        this.pageSize = 5;
        this.resultsFound = true;
        var startSlice = this.pageIndex * this.pageSize;
        var endSlice = startSlice + this.pageSize;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.store.subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data.policies.policiesList);
            _this.dataSourceForTail = _this.dataSource.filteredData.slice(startSlice, endSlice);
            _this.dataSource.paginator = _this.paginator;
            // this.dataSource.sort = this.sort;
        });
    };
    PoliciesTailsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        var startSlice = this.pageIndex * this.pageSize;
        var endSlice = startSlice + this.pageSize;
        this.dataSourceForTail = this.dataSource.filteredData.slice(startSlice, endSlice);
        if (this.dataSource.filteredData.length === 0) {
            this.resultsFound = false;
        }
        else {
            this.resultsFound = true;
        }
    };
    PoliciesTailsComponent.prototype.paginationEvent = function (event) {
        this.dataSourceForTail = this.dataSource.filteredData;
        console.log(this.dataSourceForTail);
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        var startSlice = this.pageIndex * this.pageSize;
        var endSlice = startSlice + this.pageSize;
        this.dataSourceForTail = this.dataSource.filteredData.slice(startSlice, endSlice);
    };
    PoliciesTailsComponent.prototype.toggleFavPolicy = function (policy) {
        if (policy.favouritePolicy === false) {
            this.store.dispatch(new app_redux_actions__WEBPACK_IMPORTED_MODULE_3__["SetPolicyAsFavAction"](policy));
        }
        else {
            this.store.dispatch(new app_redux_actions__WEBPACK_IMPORTED_MODULE_3__["UnmarkPolicyAsFavAction"](policy));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PoliciesTailsComponent.prototype, "paginator", void 0);
    PoliciesTailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policies-tails',
            template: __webpack_require__(/*! ./policies-tails.component.html */ "./src/app/components/policies-tails/policies-tails.component.html"),
            styles: [__webpack_require__(/*! ./policies-tails.component.scss */ "./src/app/components/policies-tails/policies-tails.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], PoliciesTailsComponent);
    return PoliciesTailsComponent;
}());



/***/ }),

/***/ "./src/app/material/index.ts":
/*!***********************************!*\
  !*** ./src/app/material/index.ts ***!
  \***********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "./src/app/material/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/policy.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/policy.model.ts ***!
  \****************************************/
/*! exports provided: PolicyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModel", function() { return PolicyModel; });
var PolicyModel = /** @class */ (function () {
    function PolicyModel() {
    }
    return PolicyModel;
}());



/***/ }),

/***/ "./src/app/redux/actions/favourites.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/actions/favourites.actions.ts ***!
  \*****************************************************/
/*! exports provided: ActionFavouritesType, GetFavourites, InsertFavouriteItemToList, DeleteFavouriteItemFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFavouritesType", function() { return ActionFavouritesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFavourites", function() { return GetFavourites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertFavouriteItemToList", function() { return InsertFavouriteItemToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFavouriteItemFromList", function() { return DeleteFavouriteItemFromList; });
var ActionFavouritesType;
(function (ActionFavouritesType) {
    ActionFavouritesType["GET_FAVOURITES"] = "Get al policies list";
    ActionFavouritesType["INSERT_FAVOURITE"] = "Post new favourite item";
    ActionFavouritesType["DELETE_FAVOURITE"] = "Delete favourite item from list";
})(ActionFavouritesType || (ActionFavouritesType = {}));
var GetFavourites = /** @class */ (function () {
    function GetFavourites() {
        this.type = ActionFavouritesType.GET_FAVOURITES;
    }
    return GetFavourites;
}());

var InsertFavouriteItemToList = /** @class */ (function () {
    function InsertFavouriteItemToList(payload) {
        this.payload = payload;
        this.type = ActionFavouritesType.INSERT_FAVOURITE;
    }
    return InsertFavouriteItemToList;
}());

var DeleteFavouriteItemFromList = /** @class */ (function () {
    function DeleteFavouriteItemFromList(payload) {
        this.payload = payload;
        this.type = ActionFavouritesType.DELETE_FAVOURITE;
    }
    return DeleteFavouriteItemFromList;
}());



/***/ }),

/***/ "./src/app/redux/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/redux/actions/index.ts ***!
  \****************************************/
/*! exports provided: ActionPoliciesType, GetPoliciesAction, GetPoliciesActionSuccess, GetPoliciesActionFailed, SetPolicyAsFavAction, UnmarkPolicyAsFavAction, ActionFavouritesType, GetFavourites, InsertFavouriteItemToList, DeleteFavouriteItemFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _policies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.actions */ "./src/app/redux/actions/policies.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionPoliciesType", function() { return _policies_actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesAction", function() { return _policies_actions__WEBPACK_IMPORTED_MODULE_0__["GetPoliciesAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesActionSuccess", function() { return _policies_actions__WEBPACK_IMPORTED_MODULE_0__["GetPoliciesActionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesActionFailed", function() { return _policies_actions__WEBPACK_IMPORTED_MODULE_0__["GetPoliciesActionFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetPolicyAsFavAction", function() { return _policies_actions__WEBPACK_IMPORTED_MODULE_0__["SetPolicyAsFavAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnmarkPolicyAsFavAction", function() { return _policies_actions__WEBPACK_IMPORTED_MODULE_0__["UnmarkPolicyAsFavAction"]; });

/* harmony import */ var _favourites_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.actions */ "./src/app/redux/actions/favourites.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionFavouritesType", function() { return _favourites_actions__WEBPACK_IMPORTED_MODULE_1__["ActionFavouritesType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFavourites", function() { return _favourites_actions__WEBPACK_IMPORTED_MODULE_1__["GetFavourites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InsertFavouriteItemToList", function() { return _favourites_actions__WEBPACK_IMPORTED_MODULE_1__["InsertFavouriteItemToList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteFavouriteItemFromList", function() { return _favourites_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteFavouriteItemFromList"]; });





/***/ }),

/***/ "./src/app/redux/actions/policies.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/redux/actions/policies.actions.ts ***!
  \***************************************************/
/*! exports provided: ActionPoliciesType, GetPoliciesAction, GetPoliciesActionSuccess, GetPoliciesActionFailed, SetPolicyAsFavAction, UnmarkPolicyAsFavAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPoliciesType", function() { return ActionPoliciesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesAction", function() { return GetPoliciesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesActionSuccess", function() { return GetPoliciesActionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesActionFailed", function() { return GetPoliciesActionFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPolicyAsFavAction", function() { return SetPolicyAsFavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnmarkPolicyAsFavAction", function() { return UnmarkPolicyAsFavAction; });
var ActionPoliciesType;
(function (ActionPoliciesType) {
    ActionPoliciesType["GET_POLICIES"] = "[Policies] Get all policies list";
    ActionPoliciesType["GET_POLICIES_SUCCESS"] = "[Policies] Policies received succesfully";
    ActionPoliciesType["GET_POLICIES_FAILED"] = "[Policies] Policies reception failed";
    ActionPoliciesType["SET_POLICY_AS_FAV"] = "[Policies] Set police as favourite";
    ActionPoliciesType["UNMARK_POLICY_AS_FAV"] = "[Policies] Unmark police as favourite";
})(ActionPoliciesType || (ActionPoliciesType = {}));
var GetPoliciesAction = /** @class */ (function () {
    function GetPoliciesAction() {
        this.type = ActionPoliciesType.GET_POLICIES;
    }
    return GetPoliciesAction;
}());

var GetPoliciesActionSuccess = /** @class */ (function () {
    function GetPoliciesActionSuccess(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.GET_POLICIES_SUCCESS;
    }
    return GetPoliciesActionSuccess;
}());

var GetPoliciesActionFailed = /** @class */ (function () {
    function GetPoliciesActionFailed(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.GET_POLICIES_FAILED;
    }
    return GetPoliciesActionFailed;
}());

var SetPolicyAsFavAction = /** @class */ (function () {
    function SetPolicyAsFavAction(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.SET_POLICY_AS_FAV;
    }
    return SetPolicyAsFavAction;
}());

var UnmarkPolicyAsFavAction = /** @class */ (function () {
    function UnmarkPolicyAsFavAction(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.UNMARK_POLICY_AS_FAV;
    }
    return UnmarkPolicyAsFavAction;
}());



/***/ }),

/***/ "./src/app/redux/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/redux/effects/index.ts ***!
  \****************************************/
/*! exports provided: PoliciesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _policies_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.effects */ "./src/app/redux/effects/policies.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoliciesEffect", function() { return _policies_effects__WEBPACK_IMPORTED_MODULE_0__["PoliciesEffect"]; });


// export * from './favourites.effects';


/***/ }),

/***/ "./src/app/redux/effects/policies.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/redux/effects/policies.effects.ts ***!
  \***************************************************/
/*! exports provided: PoliciesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesEffect", function() { return PoliciesEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_policies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/policies */ "./src/app/services/policies/index.ts");
/* harmony import */ var _actions_policies_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/policies.actions */ "./src/app/redux/actions/policies.actions.ts");
/* harmony import */ var app_services_policies_policies_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/policies/policies.mapper */ "./src/app/services/policies/policies.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PoliciesEffect = /** @class */ (function () {
    function PoliciesEffect(actions$, policyService) {
        var _this = this;
        this.actions$ = actions$;
        this.policyService = policyService;
        this.getPolicies$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_policies_actions__WEBPACK_IMPORTED_MODULE_5__["ActionPoliciesType"].GET_POLICIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (actions) {
            return _this.policyService.getPolicies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (policies) {
                return new _actions_policies_actions__WEBPACK_IMPORTED_MODULE_5__["GetPoliciesActionSuccess"](app_services_policies_policies_mapper__WEBPACK_IMPORTED_MODULE_6__["PoliciesMapper"].policiesCollectionToPoliciesModelCollection(policies));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_policies_actions__WEBPACK_IMPORTED_MODULE_5__["GetPoliciesActionFailed"](err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PoliciesEffect.prototype, "getPolicies$", void 0);
    PoliciesEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            app_services_policies__WEBPACK_IMPORTED_MODULE_4__["PoliciesService"]])
    ], PoliciesEffect);
    return PoliciesEffect;
}());



/***/ }),

/***/ "./src/app/redux/index.ts":
/*!********************************!*\
  !*** ./src/app/redux/index.ts ***!
  \********************************/
/*! exports provided: ActionPoliciesType, GetPoliciesAction, GetPoliciesActionSuccess, GetPoliciesActionFailed, SetPolicyAsFavAction, UnmarkPolicyAsFavAction, ActionFavouritesType, GetFavourites, InsertFavouriteItemToList, DeleteFavouriteItemFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/redux/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionPoliciesType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPoliciesAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesActionSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPoliciesActionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPoliciesActionFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPoliciesActionFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetPolicyAsFavAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SetPolicyAsFavAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnmarkPolicyAsFavAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UnmarkPolicyAsFavAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionFavouritesType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionFavouritesType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFavourites", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFavourites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InsertFavouriteItemToList", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["InsertFavouriteItemToList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteFavouriteItemFromList", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteFavouriteItemFromList"]; });


// export * from './effects';
// export * from './reducers';


/***/ }),

/***/ "./src/app/redux/reducers/favourites.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/redux/reducers/favourites.reducers.ts ***!
  \*******************************************************/
/*! exports provided: InitialPoliciesState, FavouritesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPoliciesState", function() { return InitialPoliciesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesReducer", function() { return FavouritesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/redux/actions/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var InitialPoliciesState = {
    favouriteList: []
};
function FavouritesReducer(appState, action) {
    if (appState === void 0) { appState = InitialPoliciesState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionFavouritesType"].GET_FAVOURITES: {
            return __assign({}, appState);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionFavouritesType"].INSERT_FAVOURITE: {
            var newFavouriteList = this.appState.favouriteList.push(action.payload);
            return __assign({}, appState, { favouriteList: newFavouriteList });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionFavouritesType"].DELETE_FAVOURITE: {
            var deleteFavouriteItem_1 = action.payload;
            appState.favouriteList.forEach(function (favItem) {
                if (favItem.id === deleteFavouriteItem_1.id) {
                    appState.favouriteList.splice(appState.favouriteList.indexOf(favItem), 1);
                }
            });
            return appState;
        }
        default:
            return appState;
    }
}


/***/ }),

/***/ "./src/app/redux/reducers/policies.reducers.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/reducers/policies.reducers.ts ***!
  \*****************************************************/
/*! exports provided: InitialPoliciesState, PoliciesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPoliciesState", function() { return InitialPoliciesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesReducer", function() { return PoliciesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/redux/actions/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var InitialPoliciesState = {
    policiesList: [],
    loading: true,
    loaded: true,
    error: ''
};
function PoliciesReducer(appState, action) {
    if (appState === void 0) { appState = InitialPoliciesState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"].GET_POLICIES: {
            return __assign({}, appState, { loading: true, loaded: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"].GET_POLICIES_SUCCESS: {
            var receivedPoliciesList = action.payload;
            return __assign({}, appState, { loaded: true, loading: false, policiesList: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"].GET_POLICIES_FAILED: {
            var receivedPoliciesList = action.payload;
            return __assign({}, appState, { loaded: false, loading: false, policiesList: [], error: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"].SET_POLICY_AS_FAV:
            {
                var newFavPolicy_1 = action.payload;
                appState.policiesList.forEach(function (policy) {
                    if (policy.id === newFavPolicy_1.id) {
                        policy.favouritePolicy = true;
                    }
                });
            }
            return appState;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionPoliciesType"].UNMARK_POLICY_AS_FAV:
            {
                var unmarkedFavPolicy_1 = action.payload;
                appState.policiesList.forEach(function (policy) {
                    if (policy.id === unmarkedFavPolicy_1.id) {
                        policy.favouritePolicy = false;
                    }
                });
            }
            return appState;
        default: {
            return appState;
        }
    }
}


/***/ }),

/***/ "./src/app/redux/reducers/reducers.ts":
/*!********************************************!*\
  !*** ./src/app/redux/reducers/reducers.ts ***!
  \********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _policies_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.reducers */ "./src/app/redux/reducers/policies.reducers.ts");
/* harmony import */ var _favourites_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.reducers */ "./src/app/redux/reducers/favourites.reducers.ts");


var reducers = {
    policies: _policies_reducers__WEBPACK_IMPORTED_MODULE_0__["PoliciesReducer"],
    favourites: _favourites_reducers__WEBPACK_IMPORTED_MODULE_1__["FavouritesReducer"]
};


/***/ }),

/***/ "./src/app/services/policies/index.ts":
/*!********************************************!*\
  !*** ./src/app/services/policies/index.ts ***!
  \********************************************/
/*! exports provided: PoliciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _policies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.service */ "./src/app/services/policies/policies.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoliciesService", function() { return _policies_service__WEBPACK_IMPORTED_MODULE_0__["PoliciesService"]; });




/***/ }),

/***/ "./src/app/services/policies/policies.interface.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/policies/policies.interface.ts ***!
  \*********************************************************/
/*! exports provided: IPoliciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPoliciesService", function() { return IPoliciesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IPoliciesService = /** @class */ (function () {
    function IPoliciesService() {
    }
    IPoliciesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], IPoliciesService);
    return IPoliciesService;
}());



/***/ }),

/***/ "./src/app/services/policies/policies.mapper.ts":
/*!******************************************************!*\
  !*** ./src/app/services/policies/policies.mapper.ts ***!
  \******************************************************/
/*! exports provided: PoliciesMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesMapper", function() { return PoliciesMapper; });
/* harmony import */ var app_models_policy_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/models/policy.model */ "./src/app/models/policy.model.ts");

var PoliciesMapper = /** @class */ (function () {
    function PoliciesMapper() {
    }
    PoliciesMapper.policyToPolicyModel = function (policy) {
        var policyModel = new app_models_policy_model__WEBPACK_IMPORTED_MODULE_0__["PolicyModel"]();
        policyModel.id = policy.id;
        policyModel.name = policy.name;
        policyModel.kind = policy.kind;
        policyModel.kindImage = policy.kindImage;
        policyModel.price = policy.price;
        policyModel.brand = policy.brand;
        policyModel.brandImage = policy.brandImage;
        policyModel.favouritePolicy = false;
        return policyModel;
    };
    PoliciesMapper.policiesCollectionToPoliciesModelCollection = function (policies) {
        var _this = this;
        return policies.map(function (p) { return _this.policyToPolicyModel(p); });
    };
    return PoliciesMapper;
}());



/***/ }),

/***/ "./src/app/services/policies/policies.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/policies/policies.service.ts ***!
  \*******************************************************/
/*! exports provided: PoliciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesService", function() { return PoliciesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoliciesService = /** @class */ (function () {
    function PoliciesService(http) {
        this.http = http;
        this.dataUrl = 'http://localhost:3000/data';
    }
    PoliciesService.prototype.getPolicies = function () {
        return this.http.get(this.dataUrl);
    };
    PoliciesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PoliciesService);
    return PoliciesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBrDj7jqVFVo36tcsP-lE1VKoGuEvXAGjE',
        authDomain: 'scdata-fd8c5.firebaseapp.com',
        databaseURL: 'https://scdata-fd8c5.firebaseio.com',
        projectId: 'scdata-fd8c5',
        storageBucket: 'scdata-fd8c5.appspot.com',
        messagingSenderId: '260675017964'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Jordi/Documents/Estudios/WebDevelopment/SingularCoverTest/SingularCoverTest/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/Jordi/Documents/Estudios/WebDevelopment/SingularCoverTest/SingularCoverTest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map