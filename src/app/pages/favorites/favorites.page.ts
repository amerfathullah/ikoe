import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, VenueProvider } from '../../providers';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage implements OnInit {
  favorites: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public venues: VenueProvider
  ) { }

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

}
