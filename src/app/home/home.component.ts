import { Component, OnInit } from '@angular/core';

import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private downloadService: DownloadsService) {
  }

  ngOnInit() {

    /*setInterval(function() {
      console.log(this.latestRelease);
    }, 1000);*/

  }

  downloadDiscord() {

    var ds = this.downloadService;
    ds.getLatestRelease().then(function(release) {
      window.open(ds.getServiceDownloadLink(release, "discord"));
    });

  }

  downloadTwitch() {

    var ds = this.downloadService;
    ds.getLatestRelease().then(function(release) {
      window.open(ds.getServiceDownloadLink(release, "twitch"));
    });
    
  }

}
