import { Component, OnInit } from '@angular/core';

import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'y2b-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private downloadService: DownloadsService) {
  }

  ngOnInit() {
  }

  // Get the proper latest download link from the Download Service and send the user there
  download(module: string) {

    var ds = this.downloadService;
    ds.getLatestRelease().then(function(release) {
      window.open(ds.getServiceDownloadLink(release, module));
    });

  }

}
