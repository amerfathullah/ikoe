function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venue-checkout-venue-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-checkout/venue-checkout.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-checkout/venue-checkout.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVenueCheckoutVenueCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.venuecheckout.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n\n    <ion-card class=\"ion-no-margin venueCard\">\n      <ion-img [src]=\"venue.thumb\"></ion-img>\n    \n      <ion-card-title color=\"light\">\n        <strong>{{ venue.name }}</strong>\n      </ion-card-title>\n      <ion-card-subtitle color=\"light\">\n        {{ dateFrom | date: 'MMM dd, yyyy'}} - {{ dateTo | date: 'MMM dd, yyyy'}}\n      </ion-card-subtitle>    \n      <div class=\"shadow\"></div>\n      <ion-card-content>\n        <ion-badge slot=\"start\" color=\"dark\" class=\"rooms\">\n          <ion-icon name=\"checkmark\" color=\"light\"></ion-icon>\n          {{ 'app.label.freecancel' | translate }}\n        </ion-badge>\n        <ion-badge slot=\"end\" color=\"success\" class=\"price\">\n          {{ 'app.label.totalvat' | translate }}\n          <h2><strong>{{ room.price | currency:'MYR':'code' }}</strong></h2>\n        </ion-badge>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item color=\"primary\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"room.thumb\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2><strong>{{ room.name }}</strong></h2>\n        <h3>\n          Seats: {{ room.seats }}\n        </h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-card class=\"ion-no-margin bg-white\">\n      <ion-card-content class=\"ion-no-padding\">\n\n        <ion-item color=\"dark\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/avatar.png\">\n          </ion-avatar>\n          <h2 class=\"fw700 w100\">\n            <ion-text color=\"light\">John</ion-text>\n          </h2>\n          <ion-badge slot=\"end\" color=\"primary\">\n            <ion-icon name=\"person\" color=\"light\"></ion-icon>\n            Student\n          </ion-badge>\n        </ion-item>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"ion-no-margin bg-primary\">\n      <ion-card-content>\n\n        <ion-segment [(ngModel)]=\"paymethods\" color=\"light\">\n          <ion-segment-button value=\"creditcard\">\n            {{ 'app.label.cc' | translate }}\n          </ion-segment-button>\n          <ion-segment-button value=\"onlinebanking\">\n            {{ 'app.label.pp' | translate }}\n          </ion-segment-button>\n        </ion-segment>\n\n        <div class=\"ccFlags\" [ngSwitch]=\"paymethods\">\n          <ion-grid *ngSwitchCase=\"'creditcard'\" class=\"ion-padding\">\n            <ion-row>\n              <ion-col class=\"ion-no-padding ion-text-center\">\n                <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=\"\n                  alt=\"Visa\" />\n                <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==\"\n                  alt=\"mastercard\">\n                <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==\"\n                  alt=\"discover\">\n                <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=\"\n                  alt=\"Amex\">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input inputmode=\"text\" color=\"light\" placeholder=\"Card Holder\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input placeholder=\"Card Number\" color=\"light\" inputmode=\"text\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-item color=\"primary\" class=\"ion-no-padding\">\n                  <ion-select placeholder=\"MM\" class=\"max-width full-width\">\n                    <ion-select-option value=\"01\">01</ion-select-option>\n                    <ion-select-option value=\"02\">02</ion-select-option>\n                    <ion-select-option value=\"03\">03</ion-select-option>\n                    <ion-select-option value=\"04\">04</ion-select-option>\n                    <ion-select-option value=\"05\">05</ion-select-option>\n                    <ion-select-option value=\"06\">06</ion-select-option>\n                    <ion-select-option value=\"07\">07</ion-select-option>\n                    <ion-select-option value=\"08\">08</ion-select-option>\n                    <ion-select-option value=\"09\">09</ion-select-option>\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"11\">11</ion-select-option>\n                    <ion-select-option value=\"12\">12</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item color=\"primary\" class=\"ion-no-padding\">\n                  <ion-select placeholder=\"YY\" color=\"light\" class=\"text1\">\n                    <ion-select-option value=\"19\">19</ion-select-option>\n                    <ion-select-option value=\"20\">20</ion-select-option>\n                    <ion-select-option value=\"21\">21</ion-select-option>\n                    <ion-select-option value=\"22\">22</ion-select-option>\n                    <ion-select-option value=\"23\">23</ion-select-option>\n                    <ion-select-option value=\"24\">24</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-item color=\"primary\" class=\"ion-no-padding\">\n                  <ion-input placeholder=\"CVV\" inputmode=\"text\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button class=\"ion-margin-top\" size=\"large\" shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"makeBooking(venue)\">\n                  <ion-icon slot=\"start\" name=\"card\"></ion-icon>\n                  {{ 'app.button.checkout' | translate }} ({{ room.price | currency:'MYR':'code' }})\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n          <ion-grid *ngSwitchCase=\"'onlinebanking'\" class=\"ion-padding\">\n            <ion-row>\n              <ion-col>\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input type=\"text\" color=\"light\" placeholder=\"Username\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input placeholder=\"Password\" color=\"light\" type=\"password\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button class=\"ion-margin-top\" size=\"large\" shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"makeBooking(venue)\">\n                  <ion-icon slot=\"start\" name=\"wallet\"></ion-icon>\n                  {{ 'app.button.checkout' | translate }} ({{ room.price | currency:'MYR':'code' }})\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/venue-checkout/venue-checkout.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/venue-checkout/venue-checkout.module.ts ***!
    \***************************************************************/

  /*! exports provided: VenueCheckoutPageModule */

  /***/
  function srcAppPagesVenueCheckoutVenueCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VenueCheckoutPageModule", function () {
      return VenueCheckoutPageModule;
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


    var _venue_checkout_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./venue-checkout.page */
    "./src/app/pages/venue-checkout/venue-checkout.page.ts");

    var routes = [{
      path: '',
      component: _venue_checkout_page__WEBPACK_IMPORTED_MODULE_7__["VenueCheckoutPage"]
    }];

    var VenueCheckoutPageModule = function VenueCheckoutPageModule() {
      _classCallCheck(this, VenueCheckoutPageModule);
    };

    VenueCheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_venue_checkout_page__WEBPACK_IMPORTED_MODULE_7__["VenueCheckoutPage"]]
    })], VenueCheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/venue-checkout/venue-checkout.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/venue-checkout/venue-checkout.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVenueCheckoutVenueCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-card {\n  border-radius: 0;\n}\n\nion-card.venueCard {\n  position: relative;\n}\n\nion-card.venueCard ion-img {\n  margin-bottom: -3px;\n}\n\nion-card.venueCard ion-card-subtitle {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 2;\n}\n\nion-card.venueCard ion-card-title {\n  font-size: 18px;\n  position: absolute;\n  top: 18%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\n\nion-card.venueCard ion-card-subtitle {\n  font-size: 14px;\n  position: absolute;\n  top: 8%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\n\nion-card.venueCard ion-card-content {\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n}\n\nion-card.venueCard .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\n\nion-card.venueCard .price {\n  right: 2%;\n  bottom: 30%;\n  position: absolute;\n}\n\nion-card.venueCard .rooms {\n  left: 2%;\n  position: absolute;\n  bottom: 30%;\n}\n\n.ccFlags img {\n  max-width: 32px;\n  display: inline;\n}\n\nion-select {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVudWUtY2hlY2tvdXQvQzpcXHhhbXBwXFxodGRvY3NcXGlrb2Uvc3JjXFxhcHBcXHBhZ2VzXFx2ZW51ZS1jaGVja291dFxcdmVudWUtY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92ZW51ZS1jaGVja291dC92ZW51ZS1jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQ0FKOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURFRTtFQUNFLGtCQUFBO0FDQUo7O0FEQ0k7RUFDRSxtQkFBQTtBQ0NOOztBRENJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDTjs7QURDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FDQ047O0FEQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQ0NSOztBRENJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDTjs7QURDSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQ0NOOztBRENJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NOOztBRENJO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBREtFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNGSjs7QURNQTtFQUNJLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbnVlLWNoZWNrb3V0L3ZlbnVlLWNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgJi52ZW51ZUNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpb24taW1nIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNSU7XG4gICAgICBsZWZ0OiA1JTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTglO1xuICAgICAgbGVmdDogNSU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsLjQpO1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDglO1xuICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsLjQpO1xuICAgICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAuc2hhZG93IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVyZW0gcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuOTUpXG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICByaWdodDogMiU7XG4gICAgICBib3R0b206IDMwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLnJvb21zIHtcbiAgICAgIGxlZnQ6IDIlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAzMCU7XG4gICAgfVxuICB9XG59XG5cbi5jY0ZsYWdzIHtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMycHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKSA7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbmlvbi1jYXJkLnZlbnVlQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jYXJkLnZlbnVlQ2FyZCBpb24taW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cbmlvbi1jYXJkLnZlbnVlQ2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgbGVmdDogNSU7XG4gIHotaW5kZXg6IDI7XG59XG5pb24tY2FyZC52ZW51ZUNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIGxlZnQ6IDUlO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuaW9uLWNhcmQudmVudWVDYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOCU7XG4gIGxlZnQ6IDUlO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuaW9uLWNhcmQudmVudWVDYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICBib3R0b206IDA7XG59XG5pb24tY2FyZC52ZW51ZUNhcmQgLnNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVyZW0gcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjk1KTtcbn1cbmlvbi1jYXJkLnZlbnVlQ2FyZCAucHJpY2Uge1xuICByaWdodDogMiU7XG4gIGJvdHRvbTogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5pb24tY2FyZC52ZW51ZUNhcmQgLnJvb21zIHtcbiAgbGVmdDogMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMCU7XG59XG5cbi5jY0ZsYWdzIGltZyB7XG4gIG1heC13aWR0aDogMzJweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/venue-checkout/venue-checkout.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/venue-checkout/venue-checkout.page.ts ***!
    \*************************************************************/

  /*! exports provided: VenueCheckoutPage */

  /***/
  function srcAppPagesVenueCheckoutVenueCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VenueCheckoutPage", function () {
      return VenueCheckoutPage;
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

    var VenueCheckoutPage = /*#__PURE__*/function () {
      function VenueCheckoutPage(navCtrl, toastCtrl, loadingCtrl, translate, route, venues) {
        _classCallCheck(this, VenueCheckoutPage);

        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.route = route;
        this.venues = venues;
        this.paymethods = 'creditcard'; // date from

        this.dateFrom = new Date(); // date to

        this.dateTo = new Date();
        this.venueID = this.route.snapshot.paramMap.get('venueID');
        this.roomID = this.route.snapshot.paramMap.get('roomID');
        this.venue = this.venues.getItem(this.venueID);
        this.room = this.venues.getRoom(this.venueID, this.roomID);
      }

      _createClass(VenueCheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.room);
        }
      }, {
        key: "makeBooking",
        value: function makeBooking() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      duration: 2000
                    });

                  case 2:
                    loader = _context2.sent;
                    loader.present();
                    loader.onWillDismiss().then(function (l) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var toast;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.toastCtrl.create({
                                  showCloseButton: false,
                                  cssClass: 'bg-profile',
                                  message: 'your booking was successful!',
                                  duration: 3000,
                                  position: 'bottom'
                                });

                              case 2:
                                toast = _context.sent;
                                toast.present();
                                this.venues.booking(this.venue).then(function (response) {
                                  setTimeout(function () {
                                    loader.dismiss();
                                    toast.present(); // back to home page

                                    _this2.navCtrl.navigateForward('/home');
                                  }, 3000);
                                });

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }); // end

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return VenueCheckoutPage;
    }();

    VenueCheckoutPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]
      }];
    };

    VenueCheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-venue-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./venue-checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-checkout/venue-checkout.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./venue-checkout.page.scss */
      "./src/app/pages/venue-checkout/venue-checkout.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _providers__WEBPACK_IMPORTED_MODULE_3__["VenueProvider"]])], VenueCheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-venue-checkout-venue-checkout-module-es5.js.map