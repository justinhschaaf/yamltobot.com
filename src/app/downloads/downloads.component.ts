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

    // Create a local instance of DownloadsComponent.
    // It's redundant, I know, but JS has no better
    // way of calling "this" in the .then() function
    var dc = this;

    // Get a list of releases
    downloadService.getReleases().then(function(releases) {
      dc.releases = releases;
    });

    // Get the latest release object
    downloadService.getLatestRelease().then(function(release) {
      dc.latest = release;
    });

    // Get the latest prerelease object
    downloadService.getLatestPrerelease().then(function(release) {
      dc.latestPre = release;
    });

  }

  ngOnInit() {
  }

  // The function for downloading a file. It gets the 
  // download link from the release and sends the user there.
  download(release: {}, service: string) {

    window.open(this.downloadService.getServiceDownloadLink(release, service));

  }

}
