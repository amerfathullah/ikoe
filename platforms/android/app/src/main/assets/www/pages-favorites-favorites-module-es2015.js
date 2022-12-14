(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.favorites.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding ion-margin-bottom\">\n        <ion-card *ngIf=\"!favorites.length\" class=\"ion-margin-top bg-white\">\n          <ion-card-content>\n            <p class=\"ion-text-center\">\n              <ion-text color=\"primary\">{{ 'app.pages.favorites.title.nores' | translate }}</ion-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let favorite of favorites\">\n            <ion-item tappable routerLink=\"/venue-detail/{{favorite.venue.id}}\">\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"favorite.venue.thumb\">\n              </ion-thumbnail>\n              <ion-label>\n                <h2>\n                  <ion-text color=\"primary\">{{favorite.venue.name}}</ion-text>\n                </h2>\n                <p>{{favorite.venue.price | currency }}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"deleteItem(favorite)\">{{ 'app.label.remove' | translate }}</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/favorites/favorites.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/favorites/favorites.page.ts");








const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_7__["FavoritesPage"]
    }
];
let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_7__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n:host ion-list.list-md {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL0M6XFx4YW1wcFxcaHRkb2NzXFxpa29lL3NyY1xcYXBwXFxwYWdlc1xcZmF2b3JpdGVzXFxmYXZvcml0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdGQUFBO0FDQVI7QURJUTtFQUNJLFVBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICAmLmxpc3QtbWQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn1cbjpob3N0IGlvbi1saXN0Lmxpc3QtbWQge1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");




let FavoritesPage = class FavoritesPage {
    constructor(navCtrl, translate, venues) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.venues = venues;
        this.favorites = [];
    }
    ngOnInit() {
        this.getFavorites();
    }
    deleteItem(favorite) {
        this.venues.unfavorite(favorite)
            .then(() => {
            this.getFavorites();
        })
            .catch(error => alert(JSON.stringify(error)));
    }
    getFavorites() {
        this.venues.getFavorites()
            .then(data => { this.favorites = data; });
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"] }
];
FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.page.scss */ "./src/app/pages/favorites/favorites.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]])
], FavoritesPage);



/***/ })

}]);
//# sourceMappingURL=pages-favorites-favorites-module-es2015.js.map