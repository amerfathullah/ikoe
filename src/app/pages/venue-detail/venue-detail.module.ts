import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

import { VenueDetailPage } from './venue-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VenueDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqRNFcPoIxELGf8S1ZvIXJnYTSTqU7yA0'
    })
  ],
  declarations: [VenueDetailPage]
})
export class VenueDetailPageModule {}
