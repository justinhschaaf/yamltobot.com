import { Component, OnInit } from '@angular/core';

import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'y2b-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  release: {};

  constructor(private downloadService: DownloadsService) {

    // Create a local instance of HomeComponent.
    // It's redundant, I know, but JS has no better
    // way of calling "this" in the .then() function
    var hc = this;

    // Get the latest release object
    downloadService.getLatestRelease().then(function(release) {
      hc.release = release;
    });

  }

  ngOnInit() {
  }

}
