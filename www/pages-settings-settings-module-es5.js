function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>App Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"bg-profile\">\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/avatar.png\" class=\"user-avatar\">\n    </ion-avatar>\n    <ion-label>\n      <ion-text color=\"light\">\n        <h2>\n          <strong>John</strong>\n        </h2>\n      </ion-text>\n      <ion-text color=\"tertiary\">\n        <h3>\n          john@email.com\n        </h3>\n      </ion-text>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"dark\" (click)=\"editProfile()\">\n        <ion-icon name=\"contact\"></ion-icon>\n        Edit Profile\n      </ion-button>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"secondary\" (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n        Logout\n      </ion-button>\n    </ion-label>\n  </ion-item>\n\n  <ion-list no-border>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>General</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"settings\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">App Language</ion-label>\n      <ion-select [(ngModel)]=\"lang\">\n        <ion-select-option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\"> Enable notifications </ion-label>\n      <ion-toggle [(ngModel)]=\"enableNotifications\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Currency</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"card\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Payment Method</ion-label>\n      <ion-select [(ngModel)]=\"paymentMethod\">\n        <ion-select-option *ngFor=\"let method of paymentMethods\" [value]=\"method\">{{method}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Other</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\">Enable History</ion-label>\n      <ion-toggle [(ngModel)]=\"enableHistory\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }];

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-avatar {\n  width: 68px;\n  height: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXHhhbXBwXFxodGRvY3NcXGlrb2Uvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQ0FKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA2OHB4O1xuICAgIGhlaWdodDogNjhweDtcbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDY4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/settings/settings.page.ts ***!
    \*************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppPagesSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(navCtrl) {
        _classCallCheck(this, SettingsPage);

        this.navCtrl = navCtrl;
        this.languages = ['English', 'Malay', 'Arabic'];
        this.paymentMethods = ['Online Banking', 'Credit Card'];
        this.currencies = ['USD', 'BRL', 'EUR'];
      }

      _createClass(SettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.navCtrl.navigateForward('edit-profile');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.navCtrl.navigateRoot('login');
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/pages/settings/settings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map