import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider, VenueProvider } from '../../providers';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  openMenu: Boolean = false;
  searchQuery: String = '';
  items: string[];
  showItems: Boolean = false;
  type: any;
  block: any;
  level: any;

  agmStyles: any[] = environment.agmStyles;

  // search conditions
  public checkin = {
    name: this.translate.get('app.pages.home.label.checkin'),
    date: new Date().toISOString()
  };

  public checkout = {
    name: this.translate.get('app.pages.home.label.checkout'),
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
  };

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    public venues: VenueProvider
  ) {
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

  itemSelected(item: string) {
    this.showItems = false;
  }

  getItems(ev: any) {
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
    } else {
      this.showItems = false;
    }
  }

  // togglePopupMenu() {
  //   return this.openMenu = !this.openMenu;
  // }
  // // //
  async viewVenues() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateForward('venue-list');
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

}
