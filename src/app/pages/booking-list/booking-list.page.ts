import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, VenueProvider } from '../../providers';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})

export class BookingListPage implements OnInit {
  bookings: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public venues: VenueProvider    
  ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.venues.getBookings()
      .then(data => { this.bookings = data; });
  }

}
