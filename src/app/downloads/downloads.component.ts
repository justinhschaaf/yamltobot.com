import { Component, OnInit } from '@angular/core';
import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'y2b-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  releases: any[];
  latest: {};
  latestPre: {};

  constructor(private downloadService: DownloadsService) {

    var dc = this;

    downloadService.getReleases().then(function(releases) {
      dc.releases = releases;
    });

    downloadService.getLatestRelease().then(function(release) {
      dc.latest = release;
    });

    downloadService.getLatestPrerelease().then(function(release) {
      dc.latestPre = release;
    });

  }

  ngOnInit() {
  }

  download(release: {}, service: string) {

    window.open(this.downloadService.getServiceDownloadLink(release, service));

  }

  downloadTwitch(release: {}) {

    var ds = this.downloadService;
    ds.getLatestRelease().then(function(release) {
      window.open(ds.getServiceDownloadLink(release, "twitch"));
    });
    
  }

}
