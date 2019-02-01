import { Component, OnInit } from '@angular/core';

import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public latestRelease: {};

  constructor(private downloadService: DownloadsService) {

    setTimeout(function() {

      this.latestRelease = downloadService.getLatestRelease();

      console.log(this.latestRelease);

    }, 500);

  }

  ngOnInit() {

    /*setInterval(function() {
      console.log(this.latestRelease);
    }, 1000);*/

  }

  downloadDiscord() {

    var latestRelease2 = this.latestRelease;
    console.log(latestRelease2);
    window.open(this.downloadService.getServiceDownloadLink(this.latestRelease, "discord"));
  }

  downloadTwitch() {
    window.open(this.downloadService.getServiceDownloadLink(this.latestRelease, "twitch"));
  }

}
