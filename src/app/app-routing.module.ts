import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'venue-list', loadChildren: () => import('./pages/venue-list/venue-list.module').then(m => m.VenueListPageModule) },
  { path: 'venue-detail/:id', loadChildren: () => import('./pages/venue-detail/venue-detail.module').then(m => m.VenueDetailPageModule) },
  { path: 'venue-checkout/:venueID/:roomID', loadChildren: () => import('./pages/venue-checkout/venue-checkout.module').then(m => m.VenueCheckoutPageModule) },
  { path: 'booking-list', loadChildren: () => import('./pages/booking-list/booking-list.module').then(m => m.BookingListPageModule) },
  { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  { path: 'support', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule) },
  { path: 'messages', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule) },
  { path: 'message/:id', loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
