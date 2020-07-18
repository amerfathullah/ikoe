(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venue-list-venue-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-list/venue-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-list/venue-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.venuelist.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n\n  <div class=\"ion-padding\">\n\n    <ion-segment [(ngModel)]=\"venueLists\" (ionChange)=\"segmentChanged($event)\" color=\"light\">\n      <ion-segment-button value=\"cardlist\">\n        <ion-icon name=\"apps\" color=\"tertiary\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"linelist\">\n        <ion-icon name=\"list\" color=\"tertiary\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]=\"venueLists\">\n      <div *ngSwitchCase=\"'cardlist'\" [@staggerIn]='venues?.length'>\n        <!-- # -->\n        <ion-card class=\"ion-no-margin ion-margin-bottom venuesCard\" tappable routerLink=\"/venue-detail/{{venue.id}}\" *ngFor=\"let venue of venues; let i = index\">\n          <ion-img [src]=\"venue.thumb\"></ion-img>\n        \n          <ion-card-title color=\"light\">{{ venue.name }}</ion-card-title>\n          <div class=\"shadow\"></div>\n          <ion-card-content>\n            <ion-badge slot=\"start\" color=\"dark\" class=\"rooms\">\n              <ion-icon name=\"book\" color=\"secondary\"></ion-icon>\n              {{ venue.numb_available_rooms }} {{ 'app.label.availrooms' | translate }}\n            </ion-badge>\n        \n            <ion-badge slot=\"end\" color=\"success\" class=\"price\">\n              <h3><strong>{{ venue.price | currency:'MYR':'code' }}</strong></h3>\n            </ion-badge>\n          </ion-card-content>\n        </ion-card>\n        <!-- # -->\n      </div>\n      <div *ngSwitchCase=\"'linelist'\" [@staggerIn]='venues.length'>\n        <!-- # -->\n        <ion-item color=\"primary\" tappable routerLink=\"/venue-detail/{{venue.id}}\" class=\"ion-margin-bottom\" *ngFor=\"let venue of venues; let i = index\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"venue.thumb\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2><strong>{{ venue.name }}</strong></h2>\n            <h3>\n              <ion-badge slot=\"start\" color=\"secondary\" class=\"rooms\">\n                <ion-icon name=\"book\" color=\"tertiary\"></ion-icon>\n                {{ venue.numb_available_rooms }} {{ 'app.label.availrooms' | translate }}\n              </ion-badge>\n            </h3>\n          </ion-label>\n        </ion-item>\n        <!-- # -->\n      </div>\n    </div>\n    <!-- # -->\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/venue-list/venue-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list.module.ts ***!
  \*******************************************************/
/*! exports provided: VenueListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueListPageModule", function() { return VenueListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _venue_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./venue-list.page */ "./src/app/pages/venue-list/venue-list.page.ts");









const routes = [
    {
        path: '',
        component: _venue_list_page__WEBPACK_IMPORTED_MODULE_8__["VenueListPage"]
    }
];
let VenueListPageModule = class VenueListPageModule {
};
VenueListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAqRNFcPoIxELGf8S1ZvIXJnYTSTqU7yA0'
            })
        ],
        declarations: [_venue_list_page__WEBPACK_IMPORTED_MODULE_8__["VenueListPage"]]
    })
], VenueListPageModule);



/***/ }),

/***/ "./src/app/pages/venue-list/venue-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) ;\n}\n\nagm-map {\n  height: 72vh;\n}\n\nagm-map .gmnoprint {\n  display: none !important;\n}\n\nion-card.venuesCard {\n  position: relative;\n}\n\nion-card.venuesCard ion-img {\n  margin-bottom: -3px;\n}\n\nion-card.venuesCard ion-card-subtitle {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 2;\n}\n\nion-card.venuesCard ion-card-title {\n  font-size: 18px;\n  position: absolute;\n  top: 15%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\n\nion-card.venuesCard ion-card-content {\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n}\n\nion-card.venuesCard .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\n\nion-card.venuesCard .price {\n  right: 2%;\n  bottom: 20%;\n  position: absolute;\n}\n\nion-card.venuesCard .rooms {\n  left: 0;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVudWUtbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcaWtvZS9zcmNcXGFwcFxccGFnZXNcXHZlbnVlLWxpc3RcXHZlbnVlLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92ZW51ZS1saXN0L3ZlbnVlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUZBQUE7QUNBSjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURHRTtFQUNFLHdCQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREdFO0VBQ0UsbUJBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDREo7O0FER0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQ0RKOztBREdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQ0RKOztBREdFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVudWUtbGlzdC92ZW51ZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpXG4gIH1cbn1cblxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiA3MnZoO1xuICAuZ21ub3ByaW50IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWNhcmQudmVudWVzQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW9uLWltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgfVxuICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogNSU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiA1JTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsMCwwLC40KTtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLnNoYWRvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXJlbSByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC45NSlcbiAgfVxuICAucHJpY2Uge1xuICAgIHJpZ2h0OiAyJTtcbiAgICBib3R0b206IDIwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnJvb21zIHtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gIH1cbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpIDtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogNzJ2aDtcbn1cbmFnbS1tYXAgLmdtbm9wcmludCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQudmVudWVzQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jYXJkLnZlbnVlc0NhcmQgaW9uLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG59XG5pb24tY2FyZC52ZW51ZXNDYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbiAgei1pbmRleDogMjtcbn1cbmlvbi1jYXJkLnZlbnVlc0NhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDUlO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuaW9uLWNhcmQudmVudWVzQ2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgYm90dG9tOiAwO1xufVxuaW9uLWNhcmQudmVudWVzQ2FyZCAuc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXJlbSByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuOTUpO1xufVxuaW9uLWNhcmQudmVudWVzQ2FyZCAucHJpY2Uge1xuICByaWdodDogMiU7XG4gIGJvdHRvbTogMjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5pb24tY2FyZC52ZW51ZXNDYXJkIC5yb29tcyB7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/venue-list/venue-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list.page.ts ***!
  \*****************************************************/
/*! exports provided: VenueListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueListPage", function() { return VenueListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let VenueListPage = class VenueListPage {
    constructor(navCtrl, translate, VenueService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.VenueService = VenueService;
        this.venueLists = 'cardlist';
        this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agmStyles;
        this.venues = this.VenueService.getAll();
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
};
VenueListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"] }
];
VenueListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-venue-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./venue-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-list/venue-list.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./venue-list.page.scss */ "./src/app/pages/venue-list/venue-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]])
], VenueListPage);



/***/ })

}]);
//# sourceMappingURL=pages-venue-list-venue-list-module-es2015.js.map