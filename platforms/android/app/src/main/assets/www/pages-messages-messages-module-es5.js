function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-margin-bottom ion-no-padding\">\n        <ion-card *ngIf=\"!messages.length\" class=\"ion-margin-top bg-white\">\n          <ion-card-content>\n            <p text-center>\n              <ion-text color=\"primary\">You have no messages.</ion-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n  \n        <ion-list class=\"ion-no-padding\">\n          <ion-item-sliding *ngFor=\"let message of messages\">\n            <ion-item tappable routerLink=\"/message/{{message.id}}\">\n              <ion-label>\n                <h2 [ngClass]=\"{'fw700 text-white': !message.read}\">\n                  <ion-icon name=\"mail\" slot=\"start\" color=\"dark\" *ngIf=\"!message.read\"></ion-icon>\n                  <ion-icon name=\"mail-open\" slot=\"start\" color=\"primary\" *ngIf=\"message.read\"></ion-icon>\n                  <ion-text color=\"primary\">{{message.title}}</ion-text>\n                </h2>\n                <p [ngClass]=\"{'text-light': !message.read}\">\n                  <ion-text color=\"dark\">{{message.senderName}} ??? {{message.date | date: 'MM/dd/yyyy'}}</ion-text>\n                </p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"deleteItem(message)\">Remove</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/messages/messages.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/messages/messages.module.ts ***!
    \***************************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcAppPagesMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/pages/messages/messages.page.ts");

    var routes = [{
      path: '',
      component: _messages_page__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"]
    }];

    var MessagesPageModule = function MessagesPageModule() {
      _classCallCheck(this, MessagesPageModule);
    };

    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"]]
    })], MessagesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/messages/messages.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/messages/messages.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvQzpcXHhhbXBwXFxodGRvY3NcXGlrb2Uvc3JjXFxhcHBcXHBhZ2VzXFxtZXNzYWdlc1xcbWVzc2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/messages/messages.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/messages/messages.page.ts ***!
    \*************************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcAppPagesMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
      return MessagesPage;
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


    var _providers_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/message/message.service */
    "./src/app/providers/message/message.service.ts");

    var MessagesPage = /*#__PURE__*/function () {
      function MessagesPage(messageService) {
        _classCallCheck(this, MessagesPage);

        this.messageService = messageService;
        this.messages = [];
      }

      _createClass(MessagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMessages();
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(message) {
          this.messageService.delMessage(message);
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          this.messages = this.messageService.getMessages();
        }
      }]);

      return MessagesPage;
    }();

    MessagesPage.ctorParameters = function () {
      return [{
        type: _providers_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.page.scss */
      "./src/app/pages/messages/messages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], MessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-messages-messages-module-es5.js.map