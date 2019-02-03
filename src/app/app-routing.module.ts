import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedsComponent }      from './feeds/feeds.component';
import { FeedDetailComponent }  from './feed-detail/feed-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/feeds', pathMatch: 'full' },
  { path: 'detail/:id', component: FeedDetailComponent },
  { path: 'feeds', component: FeedsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
