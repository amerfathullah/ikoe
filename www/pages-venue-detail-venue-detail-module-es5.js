function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venue-detail-venue-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-detail/venue-detail.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-detail/venue-detail.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVenueDetailVenueDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{venue.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-slides pager=\"true\" class=\"ion-margin-bottom\">\n    <ion-slide *ngFor=\"let image of venue.images\" (click)=\"presentImage(image)\">\n      <img [src]=\"image\">\n      <div class=\"shadow\"></div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"ion-padding-horizontal\">\n\n    <ion-segment [(ngModel)]=\"VenueSegment\" color=\"primary\">\n      <ion-segment-button value=\"details\">\n        <ion-label>{{ 'app.label.details' | translate }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"rooms\">\n        <ion-label>{{ 'app.label.rooms' | translate }}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    \n    <div [ngSwitch]=\"VenueSegment\">\n      <div *ngSwitchCase=\"'details'\">\n\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white animated fadeIn\">\n          <ion-card-content>\n            <ion-card-title>\n              <ion-text color=\"primary\">{{ 'app.label.about' | translate }}</ion-text>\n            </ion-card-title>\n          \n            <ion-text color=\"dark\" class=\"ion-margin-bottom\">\n              <p>{{venue.description}}</p>\n            </ion-text>\n            \n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white animated fadeIn\">\n          <ion-card-content>\n            <ion-card-title class=\"ion-margin-bottom\">\n              <ion-text color=\"primary\">{{ 'app.label.amenities' | translate }}</ion-text>\n            </ion-card-title>\n\n            <ion-chip class=\"ion-margin-left\" color=\"primary\" *ngFor=\"let services of venue.services\">\n              <ion-icon [name]=\"services.icon\"></ion-icon>\n              <ion-label>{{services.name}}</ion-label>\n            </ion-chip>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white animated fadeIn\">\n          <ion-card-content>\n            <ion-card-title class=\"ion-margin-bottom\">\n              <ion-text color=\"primary\">{{ 'app.label.features' | translate }}</ion-text>\n            </ion-card-title>\n        \n            <ion-text color=\"dark\">\n              <p>{{venue.features}}</p>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n\n      </div>\n\n      <div *ngSwitchCase=\"'rooms'\" [@staggerIn]='venue.rooms.length'>\n\n        <ion-card class=\"ion-no-margin ion-margin-vertical bg-white\" *ngFor=\"let room of venue.rooms\">\n          <img [src]=\"room.thumb\">\n\n          <ion-card-content>\n            \n            <ion-card-subtitle>\n              <ion-text color=\"secondary\">Seats: {{room.seats}}</ion-text>\n            </ion-card-subtitle>\n\n            <ion-card-title>\n              <ion-text color=\"primary\">{{room.name}}</ion-text>\n            </ion-card-title>\n\n            <p><ion-text color=\"primary\">{{room.room_info}}</ion-text></p>\n            \n            <ion-button size=\"large\" shape=\"round\" expand=\"full\" color=\"success\" (click)=\"checkout(venue.id, room.id)\">\n              <ion-icon slot=\"start\" name=\"book\"></ion-icon>\n              {{ 'app.label.book' | translate }} ({{ room.price | currency:'MYR':'code' }})\n            </ion-button>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"animated fadeIn\">\n    <ion-toolbar color=\"primary\">\n      <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"4\" class=\"ion-no-padding\" offset=\"4\">\n              <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"tertiary\" (click)=\"favorite(venue)\">\n                <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\n                {{ 'app.button.fav' | translate }}\n              </ion-button>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/venue-detail/venue-detail.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/venue-detail/venue-detail.module.ts ***!
    \***********************************************************/

  /*! exports provided: VenueDetailPageModule */

  /***/
  function srcAppPagesVenueDetailVenueDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VenueDetailPageModule", function () {
      return VenueDetailPageModule;
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


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _venue_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./venue-detail.page */
    "./src/app/pages/venue-detail/venue-detail.page.ts");

    var routes = [{
      path: '',
      component: _venue_detail_page__WEBPACK_IMPORTED_MODULE_8__["VenueDetailPage"]
    }];

    var VenueDetailPageModule = function VenueDetailPageModule() {
      _classCallCheck(this, VenueDetailPageModule);
    };

    VenueDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAqRNFcPoIxELGf8S1ZvIXJnYTSTqU7yA0'
      })],
      declarations: [_venue_detail_page__WEBPACK_IMPORTED_MODULE_8__["VenueDetailPage"]]
    })], VenueDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/venue-detail/venue-detail.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/venue-detail/venue-detail.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVenueDetailVenueDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nagm-map {\n  height: 180px;\n}\n\nagm-map .gmnoprint {\n  display: none !important;\n}\n\nion-slides {\n  box-shadow: 0 4px 16px rgba(var(--ion-color-dark-rgb), 0.4);\n}\n\nion-slides ion-slide .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVudWUtZGV0YWlsL0M6XFx4YW1wcFxcaHRkb2NzXFxpa29lL3NyY1xcYXBwXFxwYWdlc1xcdmVudWUtZGV0YWlsXFx2ZW51ZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92ZW51ZS1kZXRhaWwvdmVudWUtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FERUU7RUFDRSx3QkFBQTtBQ0FKOztBRElBO0VBQ0UsMkRBQUE7QUNERjs7QURHSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVudWUtZGV0YWlsL3ZlbnVlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcbiAgfVxufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgLmdtbm9wcmludCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1zbGlkZXMge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwuNCk7XG4gIGlvbi1zbGlkZSB7XG4gICAgLnNoYWRvdyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cmVtIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjk1KVxuICAgIH1cbiAgfVxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTgwcHg7XG59XG5hZ20tbWFwIC5nbW5vcHJpbnQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cmVtIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC45NSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/venue-detail/venue-detail.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/venue-detail/venue-detail.page.ts ***!
    \*********************************************************/

  /*! exports provided: VenueDetailPage */

  /***/
  function srcAppPagesVenueDetailVenueDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VenueDetailPage", function () {
      return VenueDetailPage;
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
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers */
    "./src/app/providers/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../modal/image/image.page */
    "./src/app/pages/modal/image/image.page.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var VenueDetailPage = /*#__PURE__*/function () {
      function VenueDetailPage(navCtrl, asCtrl, toastCtrl, modalCtrl, translate, venues, route, router) {
        _classCallCheck(this, VenueDetailPage);

        this.navCtrl = navCtrl;
        this.asCtrl = asCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.venues = venues;
        this.route = route;
        this.router = router;
        this.venueID = this.route.snapshot.paramMap.get('id');
        this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].agmStyles;
        this.VenueSegment = 'details';
        this.venue = this.venues.getItem(this.venueID);
      }

      _createClass(VenueDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.venue);
        }
      }, {
        key: "checkout",
        value: function checkout(venueID, roomID) {
          this.navCtrl.navigateForward("venue-checkout/".concat(venueID, "/").concat(roomID)); // this.router.navigate(['../../venue-checkout', { venueID: venueID, roomID: roomID }], { relativeTo: this.route });
          // return await modal.present();
        }
      }, {
        key: "presentImage",
        value: function presentImage(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_5__["ImagePage"],
                      componentProps: {
                        value: image
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "favorite",
        value: function favorite(venue) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.venues.favorite(venue).then(function (property) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var toast;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.toastCtrl.create({
                                  showCloseButton: true,
                                  message: 'Venue added on Favorites list.',
                                  duration: 2000,
                                  position: 'bottom'
                                });

                              case 2:
                                toast = _context2.sent;
                                toast.present();

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "share",
        value: function share() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.asCtrl.create({
                      header: 'Share Venue:',
                      buttons: [{
                        text: 'Facebook',
                        role: 'facebook',
                        icon: 'logo-facebook',
                        handler: function handler() {
                          console.log('Facebook clicked');
                        }
                      }, {
                        text: 'Twitter',
                        icon: 'logo-twitter',
                        handler: function handler() {
                          console.log('Twitter clicked');
                        }
                      }, {
                        text: 'Google+',
                        icon: 'logo-googleplus',
                        handler: function handler() {
                          console.log('Google+ clicked');
                        }
                      }, {
                        text: 'Instagram',
                        icon: 'logo-instagram',
                        handler: function handler() {
                          console.log('Instagram clicked');
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "range",
        value: function range(n) {
          return new Array(n);
        }
      }]);

      return VenueDetailPage;
    }();

    VenueDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    VenueDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-venue-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./venue-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-detail/venue-detail.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
        opacity: 0,
        transform: "translate3d(0,10px,0)"
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
        opacity: 1,
        transform: "translate3d(0,0,0)"
      }))]), {
        optional: true
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./venue-detail.page.scss */
      "./src/app/pages/venue-detail/venue-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"], _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], VenueDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-venue-detail-venue-detail-module-es5.js.map