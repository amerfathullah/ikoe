import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateProvider } from './providers/translate/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

import { Pages } from './interfaces/pages';
/**
 * Main Wrap App Component with starting methods
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /**
   * Creates an Array instance with <Pages> interface that receives all menu list.
   *
   * @type {Array<Pages>}
   * @memberof AppComponent
   */
  public appPages: Array<Pages>;
  /**
   * Creates an instance of AppComponent.
   * @param {Platform} platform
   * @param {SplashScreen} splashScreen
   * @param {StatusBar} statusBar
   * @param {TranslateProvider} translate
   * @param {TranslateService} translateService
   * @param {NavController} navCtrl
   * @memberof AppComponent
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateProvider,
    private translateService: TranslateService,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Venue List',
        url: '/venue-list',
        direct: 'forward',
        icon: 'list'
      },
      {
        title: 'Booking List',
        url: '/booking-list',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'Favorites',
        url: '/favorites',
        direct: 'forward',
        icon: 'heart'
      },
      {
        title: 'Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'settings'

      },
      {
        title: 'Support',
        url: '/support',
        direct: 'forward',
        icon: 'help-buoy'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle'
      }
    ];

    this.initializeApp();
  }
/**
 * Method that starts all Cordova and Factories
 *
 * @memberof AppComponent
 */
initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    }).catch(() => {
      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    });
  }
  /**
   * Navigate to Edit Profile Page
   *
   * @memberof AppComponent
   */
  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }
/**
 * Logout Method
 *
 * @memberof AppComponent
 */
logout() {
    this.navCtrl.navigateRoot('login');
  }
}
