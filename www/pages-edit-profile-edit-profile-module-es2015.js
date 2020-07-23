(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.editprofile.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-content class=\"bg-profile\">\n      <img src=\"assets/img/avatar.png\">\n      <h1 class=\"fw500\">John</h1>\n      <h2 color=\"light\" class=\"ion-margin-bottom\">Student</h2>\n      <ion-button icon-left color=\"secondary\">\n        <ion-icon name=\"photos\"></ion-icon> \n        {{ 'app.label.edit' | translate }} / {{ 'app.label.insertavatar' | translate }}\n      </ion-button>\n    </ion-card-content>\n  \n    <ion-grid fixed class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-padding\">\n\n          <ion-list class=\"ion-margin-bottom\">\n            <ion-list-header color=\"light\">\n              <ion-label class=\"fw700\">{{ 'app.label.userdata' | translate }}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.fullname' | translate }}:</ion-label>\n              <ion-input inputmode=\"text\" placeholder=\"Ex..: John\" value=\"John\"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.email' | translate }}:</ion-label>\n              <ion-input inputmode=\"email\" placeholder=\"Ex.: name@email.com\" value=\"john@test.com\"></ion-input>\n            </ion-item>\n    \n          </ion-list>\n\n          <ion-list>\n            <ion-radio-group>\n              <ion-list-header color=\"light\">\n                <ion-label class=\"fw700\">{{ 'app.label.usertype' | translate }}</ion-label>\n              </ion-list-header>\n          \n              <ion-item>\n                <ion-label color=\"primary\">Student</ion-label>\n                <ion-radio slot=\"start\" value=\"student\" checked></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label color=\"primary\">Normal User</ion-label>\n                <ion-radio slot=\"start\" value=\"normal user\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <ion-item>\n              <ion-label class=\"text-1x\">{{ 'app.pages.editprofile.avail.text' | translate }}</ion-label>\n              <ion-checkbox></ion-checkbox>\n            </ion-item>\n          </ion-list>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-button class=\"ion-no-margin\" size=\"large\" expand=\"full\" color=\"dark\" (click)=\"sendData()\">{{ 'app.label.edit' | translate }}</ion-button>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");








const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0M6XFx4YW1wcFxcaHRkb2NzXFxpa29lL3NyY1xcYXBwXFxwYWdlc1xcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FDQUo7O0FES0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREdJO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRE47O0FESU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUNIUjs7QURNTTtFQUVFLGtCQUFBO0FDTFI7O0FEa0JJO0VBQ0Usa0RBQUE7QUNoQk47O0FEcUJJO0VBQ0UsU0FBQTtBQ25CTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cblxuLnByb2ZpbGUge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gcGFkZGluZy1ib3R0b206IDI4cHg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI4cHggcmdiYSgyNTUsMjU1LDI1NSwgLjY1KTtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICAvLyBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgLy8gICBoMyB7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIC8vICAgICBjb2xvcjogI2ZmZjtcbiAgICAvLyAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBpb24taW5wdXQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbSB7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn1cblxuLnByb2ZpbGUgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGltZyB7XG4gIGhlaWdodDogMTI4cHg7XG4gIHdpZHRoOiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGgxIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnByb2ZpbGUgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4ucHJvZmlsZSBpb24tYnV0dG9tIGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");




let EditProfilePage = class EditProfilePage {
    constructor(navCtrl, loadingCtrl, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
    }
    ngOnInit() {
    }
    sendData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // send booking info
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    showCloseButton: true,
                    cssClass: 'bg-profile',
                    message: 'Your Data was Edited!',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.navCtrl.navigateForward('/home');
            }));
            // end
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es2015.js.map