import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateProvider, VenueProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-checkout',
  templateUrl: './venue-checkout.page.html',
  styleUrls: ['./venue-checkout.page.scss'],
})
export class VenueCheckoutPage implements OnInit {
  venue: any;
  venueID: string;
  room: any;
  roomID: any;
  paymethods: string = 'creditcard';
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();


  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    public venues: VenueProvider
  ) {
   this.venueID = this.route.snapshot.paramMap.get('venueID');
   this.roomID = this.route.snapshot.paramMap.get('roomID');
   this.venue = this.venues.getItem(this.venueID);
   this.room = this.venues.getRoom(this.venueID, this.roomID)
  }

  ngOnInit() {
    console.log(this.room);
  }

  async makeBooking() {
    // send booking info
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: false,
        cssClass: 'bg-profile',
        message: 'your booking was successful!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      this.venues.booking(this.venue)
      .then(response => {
        setTimeout(() => {
          loader.dismiss();
          toast.present();
          // back to home page
          this.navCtrl.navigateForward('/home');
        }, 3000)
      });
    });
    // end
  }

}
