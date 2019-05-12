import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'y2b-download-details',
  templateUrl: './download-details.component.html',
  styleUrls: ['./download-details.component.scss']
})
export class DownloadDetailsComponent implements OnInit {

  release: {};

  constructor(
    private route: ActivatedRoute,
    private ds: DownloadsService
  ) {

    var ddc = this;

    var id: Number = parseInt(this.route.snapshot.paramMap.get("id"));

    ds.getRelease(id).then(function(release) {
      ddc.release = release;
    });

  }

  ngOnInit() {

  }

}
