import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  
  {
    path: 'download',
    component: DownloadsComponent
  },

  {
    path: 'downloads',
    redirectTo: 'download',
    pathMatch: 'full'
  },
  
  {
    path: 'wiki/:module/:page',
    component: WikiComponent
  },
  
  {
    path: 'wiki/:page',
    component: WikiComponent
  },

  {
    path: 'wiki',
    redirectTo: 'wiki/Home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
