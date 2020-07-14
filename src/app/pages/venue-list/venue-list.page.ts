import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, VenueProvider } from '../../providers';

import { environment } from '../../../environments/environment';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.page.html',
  styleUrls: ['./venue-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class VenueListPage implements OnInit {
  venueLists: String = 'cardlist';
  agmStyles: any[] = environment.agmStyles;
  venues: any;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public VenueService: VenueProvider
  ) {
    this.venues = this.VenueService.getAll();
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
