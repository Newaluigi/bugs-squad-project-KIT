import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RssComponent } from './pages/rss/rss.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'rss', component: RssComponent },
  { path: '404', component: Page404Component },
  { path: '500', component: Page500Component },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
