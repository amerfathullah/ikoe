(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" class=\"animated fadeIn\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n<!-- [placeholder]=\"translate.get('userlist.search')\" -->\n<!-- {{ 'app.name' | translate }} -->\n        {{ 'app.name' | translate }} <ion-text color=\"secondary\" class=\"fw700\"> {{ 'app.version' | translate }}</ion-text>\n      </ion-text>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"tertiary\" (click)=\"messages()\">\n            <ion-icon name=\"mail\"></ion-icon>\n      </ion-button>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"tertiary\" (click)=\"editprofile()\">\n        <ion-icon name=\"contact\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding animated fadeIn fast\">\n\n  <div class=\"booking-card bg-dark\">\n    <ion-card class=\"searchcard animated fadeIn\">\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-grid class=\"ion-no-padding\">\n\n          <ion-row class=\"ion-no-padding ion-no-margin\">\n            <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin ion-text-center br bb datetime-btn\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label position=\"stacked\">\n                  <ion-icon name=\"calendar\" slot=\"start\" class=\"text-dark\"></ion-icon>\n                  <ion-text color=\"dark\">{{ checkin.name }}</ion-text>\n                </ion-label>\n\n                <ion-datetime class=\"text-primary\" displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"YYYY-MM-DD-HH-mm\" min=\"2020\" max=\"2120\" [(ngModel)]=\"checkin.date\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin ion-text-center bb datetime-btn\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label position=\"stacked\">\n                  <ion-icon name=\"calendar\" slot=\"start\" class=\"text-dark\"></ion-icon>\n                  <ion-text color=\"dark\">{{ checkout.name }}</ion-text>\n                </ion-label>\n                <ion-datetime class=\"text-primary\" displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"YYYY-MM-DD-HH-mm\" min=\"2020\" max=\"2120\" [(ngModel)]=\"checkout.date\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      <ion-card-content>\n\n        <ion-row class=\"adjust-qts\">\n          <ion-col size=\"4\" class=\"ion-no-padding br bb bl bt\">\n              <ion-item>\n                <ion-label class=\"ion-no-padding text08\">\n                    <ion-text color=\"dark\">{{ 'app.pages.home.label.types' | translate }}</ion-text>\n                </ion-label>\n                <ion-select [(ngModel)]=\"type\" cancelText=\"Cancel\" okText=\"OK\" color=\"primary\"  class=\"ion-no-padding text1 text-dark\">\n                  <ion-select-option value=\"Lecture Room\" selected=\"true\">Lecture Room</ion-select-option>\n                  <ion-select-option value=\"Tutorial Room\">Tutorial Room</ion-select-option>\n                  <ion-select-option value=\"Exam Hall\">Exam Hall</ion-select-option>\n                  <ion-select-option value=\"Auditorium\">Auditorium</ion-select-option>\n                  <ion-select-option value=\"Lecture Theatre\">Lecture Theatre</ion-select-option>\n                </ion-select>\n              </ion-item>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding br bb bt\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.block' | translate }}</ion-text>\n                </ion-label>\n                <ion-select [(ngModel)]=\"block\" cancelText=\"Cancel\" okText=\"OK\" class=\"ion-no-padding text1 text-dark\">\n                  <ion-select-option value=\"E1\" selected=\"true\">E1</ion-select-option>\n                  <ion-select-option value=\"E2\">E2</ion-select-option>\n                  <ion-select-option value=\"E3\">E3</ion-select-option>\n                  <ion-select-option value=\"E4\">E4</ion-select-option>\n                  <ion-select-option value=\"E5\">E5</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding bb bt br\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding ion-no-margin text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.level' | translate }}</ion-text>\n                </ion-label>\n                <ion-select [(ngModel)]=\"level\" cancelText=\"Cancel\" okText=\"OK\" class=\"ion-no-padding text1 text-dark\">\n                  <ion-select-option value=\"1\" selected=\"true\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-no-padding\">\n        \n          </ion-col>\n        </ion-row>\n        \n        <ion-row class=\"adjust-qts\">\n          <ion-col size=\"12\" class=\"ion-no-padding ion-margin-top ion-margin-bottom bb bt br bl\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding ion-no-margin text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.equipments' | translate }}</ion-text>\n                </ion-label>\n                <ion-select multiple=\"true\" cancelText=\"Cancel\" okText=\"OK\" class=\"ion-no-padding text08 text-dark\">\n                  <ion-select-option value=\"1\" selected=\"true\">Air Conditioner</ion-select-option>\n                  <ion-select-option value=\"2\">Wifi</ion-select-option>\n                  <ion-select-option value=\"3\">Projector</ion-select-option>\n                  <ion-select-option value=\"4\">Speakers</ion-select-option>\n                  <ion-select-option value=\"5\">Conference</ion-select-option>\n                  <ion-select-option value=\"6\">Computer</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>          \n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-button icon-left shape=\"round\" size=\"full\" color=\"primary\" (click)=\"viewVenues()\">\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-icon name=\"search\"></ion-icon>\n              {{ 'app.button.search' | translate }}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <hr class=\"bg-tertiary\">\n    \n  </div>\n  <!-- ## -->\n  <!-- ## -->\n  <!-- <popmenu></popmenu> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAqRNFcPoIxELGf8S1ZvIXJnYTSTqU7yA0'
            })
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light));\n}\n:host ion-list.list-md {\n  padding: 0;\n}\nion-content {\n  padding-bottom: 120px;\n}\nagm-map {\n  height: 180px;\n}\nagm-map .gmnoprint {\n  display: none !important;\n}\nion-card.venuesCard {\n  position: relative;\n}\nion-card.venuesCard ion-img {\n  margin-bottom: -3px;\n}\nion-card.venuesCard ion-card-subtitle {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 2;\n}\nion-card.venuesCard ion-card-title {\n  font-size: 18px;\n  position: absolute;\n  top: 15%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\nion-card.venuesCard ion-card-content {\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n}\nion-card.venuesCard .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\nion-card.venuesCard .price {\n  right: 2%;\n  bottom: 20%;\n  position: absolute;\n}\nion-card.venuesCard .rooms {\n  left: 0;\n  position: absolute;\n  bottom: 0;\n}\n.booking-card {\n  margin: -20px -20px 40px;\n  padding: 20px;\n  height: 60px;\n}\n.booking-card ion-card {\n  width: 100%;\n  background-color: #fff;\n  margin: 0 0 20px;\n}\n.booking-card ion-card.searchcard ion-item::shadow {\n  --inner-border-width: 0;\n}\n.booking-card ion-searchbar {\n  border-bottom: 1px solid rgba(79, 36, 172, 0.1);\n}\n.booking-card .br {\n  border-right: 1px solid rgba(79, 36, 172, 0.1);\n}\n.booking-card .bb {\n  border-bottom: 1px solid rgba(79, 36, 172, 0.1);\n}\n.booking-card .adjust-qts {\n  margin: 0 -20px 0;\n}\n.booking-card .datetime-btn {\n  background-color: rgba(79, 36, 172, 0.06);\n}\n.booking-card .datetime-btn ion-icon {\n  color: var(--ion-color-primary);\n}\n.booking-card .searchbar {\n  z-index: 1000;\n}\n.booking-card .searchbar-results {\n  position: absolute;\n  top: 50px;\n  left: 12px;\n  right: 12px;\n  z-index: 999;\n  padding-top: 12px;\n  border-radius: 12px;\n  box-shadow: 0 0 1px rgba(79, 36, 172, 0.06), 0 2px 4px rgba(79, 36, 172, 0.1), 0 0 100rem rgba(79, 36, 172, 0.85);\n}\n.booking-card .searchbar-results .item {\n  color: rgba(79, 36, 172, 0.85);\n}\n.br {\n  border-right: 1px solid rgba(79, 36, 172, 0.1);\n}\n.bb {\n  border-bottom: 1px solid rgba(79, 36, 172, 0.1);\n}\n.bt {\n  border-top: 1px solid rgba(79, 36, 172, 0.1);\n}\n.bl {\n  border-left: 1px solid rgba(79, 36, 172, 0.1);\n}\n.datetime-btn {\n  padding-top: 0;\n  padding-bottom: 0;\n  background-color: rgba(79, 36, 172, 0.06);\n}\n.datetime-btn ion-icon {\n  color: var(--ion-color-primary);\n}\n.datetime-btn ion-datetime {\n  padding-top: 5px;\n}\nion-select {\n  font-weight: 500;\n}\nion-select .select-icon {\n  position: relative;\n  width: 14px;\n  height: 18px;\n}\nion-scroll {\n  padding-bottom: 96px;\n}\nion-slide {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcaWtvZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUZBQUE7QUNBSjtBRElJO0VBQ0UsVUFBQTtBQ0ZOO0FET0E7RUFDRSxxQkFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0FDSkY7QURLRTtFQUNFLHdCQUFBO0FDSEo7QURPQTtFQUNFLGtCQUFBO0FDSkY7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURLRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDSEo7QURLRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDSEo7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSEo7QURLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQ0hKO0FES0U7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSEo7QURLRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNISjtBRE9BO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0pGO0FES0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FEU1E7RUFDRSx1QkFBQTtBQ1BWO0FEYUU7RUFDRSwrQ0FBQTtBQ1hKO0FEYUU7RUFDRSw4Q0FBQTtBQ1hKO0FEYUU7RUFDRSwrQ0FBQTtBQ1hKO0FEYUU7RUFDRSxpQkFBQTtBQ1hKO0FEYUU7RUFDRSx5Q0FBQTtBQ1hKO0FEWUk7RUFDRSwrQkFBQTtBQ1ZOO0FEYUU7RUFDRSxhQUFBO0FDWEo7QURhRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpSEFBQTtBQ1hKO0FEWUk7RUFDRSw4QkFBQTtBQ1ZOO0FEZUE7RUFDRSw4Q0FBQTtBQ1pGO0FEY0E7RUFDRSwrQ0FBQTtBQ1hGO0FEY0E7RUFDRSw0Q0FBQTtBQ1hGO0FEY0E7RUFDRSw2Q0FBQTtBQ1hGO0FEY0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQ1hGO0FEWUU7RUFDRSwrQkFBQTtBQ1ZKO0FEWUU7RUFDRSxnQkFBQTtBQ1ZKO0FEY0E7RUFFRSxnQkFBQTtBQ1pGO0FEYUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7QURlQTtFQUNFLG9CQUFBO0FDWkY7QURlQTtFQUNFLG9CQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgICYubGlzdC1tZCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTgwcHg7XG4gIC5nbW5vcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tY2FyZC52ZW51ZXNDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpb24taW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICB9XG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICBsZWZ0OiA1JTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLnNoYWRvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXJlbSByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuOTUpO1xuICB9XG4gIC5wcmljZSB7XG4gICAgcmlnaHQ6IDIlO1xuICAgIGJvdHRvbTogMjAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAucm9vbXMge1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuXG4uYm9va2luZy1jYXJkIHtcbiAgbWFyZ2luOiAtMjBweCAtMjBweCA0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgLy8gJjpsYXN0LW9mLXR5cGUge1xuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogODZweDtcbiAgICAvLyB9XG4gICAgJi5zZWFyY2hjYXJkIHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgJjo6c2hhZG93IHtcbiAgICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xuICB9XG4gIC5iciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbiAgfVxuICAuYmIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xuICB9XG4gIC5hZGp1c3QtcXRzIHtcbiAgICBtYXJnaW46IDAgLTIwcHggMDtcbiAgfVxuICAuZGF0ZXRpbWUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAzNiwgMTcyLCAwLjA2KTtcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICAuc2VhcmNoYmFyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIC5zZWFyY2hiYXItcmVzdWx0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSg3OSwgMzYsIDE3MiwgMC4wNiksIDAgMnB4IDRweCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpLCAwIDAgMTAwcmVtIHJnYmEoNzksIDM2LCAxNzIsIDAuODUpO1xuICAgIC5pdGVtIHtcbiAgICAgIGNvbG9yOiByZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KTtcbiAgICB9XG4gIH1cbn1cblxuLmJyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbn1cbi5iYiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xufVxuXG4uYnQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbn1cblxuLmJsIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xufVxuXG4uZGF0ZXRpbWUtYnRuIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAzNiwgMTcyLCAwLjA2KTtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgaW9uLWRhdGV0aW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG59XG5cbmlvbi1zZWxlY3Qge1xuICAvLyB3aWR0aDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLnNlbGVjdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG59XG5cbmlvbi1zY3JvbGwge1xuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbn1cblxuaW9uLXNsaWRlIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbn1cbjpob3N0IGlvbi1saXN0Lmxpc3QtbWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTgwcHg7XG59XG5hZ20tbWFwIC5nbW5vcHJpbnQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnZlbnVlc0NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY2FyZC52ZW51ZXNDYXJkIGlvbi1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xufVxuaW9uLWNhcmQudmVudWVzQ2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgbGVmdDogNSU7XG4gIHotaW5kZXg6IDI7XG59XG5pb24tY2FyZC52ZW51ZXNDYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiA1JTtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmlvbi1jYXJkLnZlbnVlc0NhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1jYXJkLnZlbnVlc0NhcmQgLnNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVyZW0gcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjk1KTtcbn1cbmlvbi1jYXJkLnZlbnVlc0NhcmQgLnByaWNlIHtcbiAgcmlnaHQ6IDIlO1xuICBib3R0b206IDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuaW9uLWNhcmQudmVudWVzQ2FyZCAucm9vbXMge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJvb2tpbmctY2FyZCB7XG4gIG1hcmdpbjogLTIwcHggLTIwcHggNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmJvb2tpbmctY2FyZCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMCAyMHB4O1xufVxuLmJvb2tpbmctY2FyZCBpb24tY2FyZC5zZWFyY2hjYXJkIGlvbi1pdGVtOjpzaGFkb3cge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cbi5ib29raW5nLWNhcmQgaW9uLXNlYXJjaGJhciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xufVxuLmJvb2tpbmctY2FyZCAuYnIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xufVxuLmJvb2tpbmctY2FyZCAuYmIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbn1cbi5ib29raW5nLWNhcmQgLmFkanVzdC1xdHMge1xuICBtYXJnaW46IDAgLTIwcHggMDtcbn1cbi5ib29raW5nLWNhcmQgLmRhdGV0aW1lLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDM2LCAxNzIsIDAuMDYpO1xufVxuLmJvb2tpbmctY2FyZCAuZGF0ZXRpbWUtYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5ib29raW5nLWNhcmQgLnNlYXJjaGJhciB7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uYm9va2luZy1jYXJkIC5zZWFyY2hiYXItcmVzdWx0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAxMnB4O1xuICByaWdodDogMTJweDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDc5LCAzNiwgMTcyLCAwLjA2KSwgMCAycHggNHB4IHJnYmEoNzksIDM2LCAxNzIsIDAuMSksIDAgMCAxMDByZW0gcmdiYSg3OSwgMzYsIDE3MiwgMC44NSk7XG59XG4uYm9va2luZy1jYXJkIC5zZWFyY2hiYXItcmVzdWx0cyAuaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KTtcbn1cblxuLmJyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbn1cblxuLmJiIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzksIDM2LCAxNzIsIDAuMSk7XG59XG5cbi5idCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDc5LCAzNiwgMTcyLCAwLjEpO1xufVxuXG4uYmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzksIDM2LCAxNzIsIDAuMSk7XG59XG5cbi5kYXRldGltZS1idG4ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDM2LCAxNzIsIDAuMDYpO1xufVxuLmRhdGV0aW1lLWJ0biBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZGF0ZXRpbWUtYnRuIGlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLXNlbGVjdCAuc2VsZWN0LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbmlvbi1zY3JvbGwge1xuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbn1cblxuaW9uLXNsaWRlIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let HomePage = class HomePage {
    constructor(navCtrl, menuCtrl, loadingCtrl, translate, venues) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.venues = venues;
        this.openMenu = false;
        this.searchQuery = '';
        this.showItems = false;
        this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agmStyles;
        // search conditions
        this.checkin = {
            name: this.translate.get('app.pages.home.label.checkin'),
            date: new Date().toISOString()
        };
        this.checkout = {
            name: this.translate.get('app.pages.home.label.checkout'),
            date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
        };
        this.venues = venues.getAll();
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    initializeItems() {
        this.items = [
            'La Belle Place - Rio de Janeiro',
            'Marshall Venue - Marshall Islands',
            'Maksoud Plaza - São Paulo',
            'Venue Copacabana - Rio de Janeiro',
            'Pousada Marés do amanhã - Maragogi'
        ];
    }
    itemSelected(item) {
        this.showItems = false;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.showItems = true;
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.showItems = false;
        }
    }
    // togglePopupMenu() {
    //   return this.openMenu = !this.openMenu;
    // }
    // // //
    viewVenues() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then(() => {
                this.navCtrl.navigateForward('venue-list');
            });
        });
    }
    editprofile() {
        this.navCtrl.navigateForward('edit-profile');
    }
    settings() {
        this.navCtrl.navigateForward('settings');
    }
    goToWalk() {
        this.navCtrl.navigateRoot('walkthrough');
    }
    logout() {
        this.navCtrl.navigateRoot('login');
    }
    register() {
        this.navCtrl.navigateForward('register');
    }
    messages() {
        this.navCtrl.navigateForward('messages');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map