import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { WikiComponent } from './wiki/wiki.component';

import { DownloadsService } from './downloads.service';
import { WikiService } from './wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadsComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    DownloadsService,
    WikiService,
    MarkdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
