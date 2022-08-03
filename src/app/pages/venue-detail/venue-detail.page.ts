import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, ToastController, ModalController } from '@ionic/angular';
import { TranslateProvider, VenueProvider } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';

import { ImagePage } from './../modal/image/image.page';
import { VenueCheckoutPage } from '../venue-checkout/venue-checkout.page'

import { environment } from '../../../environments/environment'

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.page.html',
  styleUrls: ['./venue-detail.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class VenueDetailPage implements OnInit {
  venue: any;
  venueID: any = this.route.snapshot.paramMap.get('id'); 
  agmStyles: any[] = environment.agmStyles;
  VenueSegment: string = 'details';

  constructor(
    public navCtrl: NavController,
    public asCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private translate: TranslateProvider,
    public venues: VenueProvider,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.venue = this.venues.getItem(this.venueID);
  }

  ngOnInit() {
    console.log(this.venue)
  }

  checkout(venueID: number, roomID: number) {
    this.navCtrl.navigateForward(`venue-checkout/${venueID}/${roomID}`);
    // this.router.navigate(['../../venue-checkout', { venueID: venueID, roomID: roomID }], { relativeTo: this.route });
    // return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async favorite(venue) {

    this.venues.favorite(venue)
      .then(async property => {
        const toast = await this.toastCtrl.create({
          showCloseButton: true,
          message: 'Venue added on Favorites list.',
          duration: 2000,
          position: 'bottom'
        });

        toast.present();
      });
  }

  async share() {
    const actionSheet = await this.asCtrl.create({
      header: 'Share Venue:',
      buttons: [{
        text: 'Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Facebook clicked');
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Twitter clicked');
        }
      }, {
        text: 'Google+',
        icon: 'logo-googleplus',
        handler: () => {
          console.log('Google+ clicked');
        }
      }, {
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          console.log('Instagram clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  range(n) {
    return new Array(n);
  }

}
