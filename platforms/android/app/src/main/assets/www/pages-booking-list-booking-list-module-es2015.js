(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booking-list-booking-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-list/booking-list.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-list/booking-list.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.bookinglist.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding ion-margin-bottom\">\n        <ion-card *ngIf=\"!bookings.length\" class=\"ion-margin-top bg-white\">\n          <ion-card-content>\n            <p class=\"ion-text-center\">\n              <ion-text color=\"primary\">{{ 'app.pages.bookinglist.title.nores' | translate }}</ion-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n  \n        <ion-list class=\"ion-no-padding\" *ngIf=\"bookings.length\">\n\n          <ion-item tappable routerLink=\"/venue-detail/{{booking.venue.id}}\" *ngFor=\"let booking of bookings\">\n            <ion-thumbnail slot=\"start\">\n              <img [src]=\"booking.venue.thumb\">\n            </ion-thumbnail>\n            <ion-label>\n              <h2>\n                <ion-text color=\"primary\">{{booking.venue.name}}</ion-text>\n              </h2>\n              <p>{{booking.venue.price | currency }}</p>\n              <ion-badge color=\"success\">{{ 'app.label.booked' | translate }}</ion-badge>\n            </ion-label>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/booking-list/booking-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/booking-list/booking-list.module.ts ***!
  \***********************************************************/
/*! exports provided: BookingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function() { return BookingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _booking_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking-list.page */ "./src/app/pages/booking-list/booking-list.page.ts");








const routes = [
    {
        path: '',
        component: _booking_list_page__WEBPACK_IMPORTED_MODULE_7__["BookingListPage"]
    }
];
let BookingListPageModule = class BookingListPageModule {
};
BookingListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_booking_list_page__WEBPACK_IMPORTED_MODULE_7__["BookingListPage"]]
    })
], BookingListPageModule);



/***/ }),

/***/ "./src/app/pages/booking-list/booking-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/booking-list/booking-list.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZy1saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxpa29lL3NyY1xcYXBwXFxwYWdlc1xcYm9va2luZy1saXN0XFxib29raW5nLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29raW5nLWxpc3QvYm9va2luZy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29raW5nLWxpc3QvYm9va2luZy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKSA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/booking-list/booking-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/booking-list/booking-list.page.ts ***!
  \*********************************************************/
/*! exports provided: BookingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPage", function() { return BookingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");




let BookingListPage = class BookingListPage {
    constructor(navCtrl, translate, venues) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.venues = venues;
        this.bookings = [];
    }
    ngOnInit() {
        this.getBookings();
    }
    getBookings() {
        this.venues.getBookings()
            .then(data => { this.bookings = data; });
    }
};
BookingListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"] }
];
BookingListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-list/booking-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking-list.page.scss */ "./src/app/pages/booking-list/booking-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]])
], BookingListPage);



/***/ })

}]);
//# sourceMappingURL=pages-booking-list-booking-list-module-es2015.js.map