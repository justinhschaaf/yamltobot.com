import { Component, OnInit, OnChanges } from '@angular/core';
import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'y2b-download-buttons',
  templateUrl: './download-buttons.component.html',
  styleUrls: ['./download-buttons.component.scss'],
  inputs: ['release']
})
export class DownloadButtonsComponent implements OnInit, OnChanges {

  release: {}|null = null;

  hasDiscord: boolean = false;
  hasTwitch: boolean = false;
  hasMixer: boolean = false;

  constructor(
    private downloadService: DownloadsService
  ) {}

  ngOnInit() {
    this.updateButtons();
  }

  ngOnChanges() {
    this.updateButtons();
  }

  updateButtons() {

    var assets = [];
    assets = this.release["assets"];

    for (var i = 0; i < assets.length; i++) {

      var asset = assets[i];

      if ((asset["name"] + "").includes("discord")) {
        this.hasDiscord = true;
      }

      if ((asset["name"] + "").includes("twitch")) {
        this.hasTwitch = true;
      }

      if ((asset["name"] + "").includes("mixer")) {
        this.hasMixer = true;
      }

    }

  }

  // The function for downloading a file. It gets the 
  // download link from the release and sends the user there.
  download(release: {}, service: string) {

    window.open(this.downloadService.getServiceDownloadLink(release, service));
    
  }

}
