import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {

  releases: any[];
  latest: {};
  latestPre: {};

  constructor(private http: HttpClient) {

    const url = "https://api.github.com/repos/justinhschaaf/YamlToBot/releases";

    // https://egghead.io/lessons/angular-fetch-data-from-an-api-using-the-httpclient-in-angular
    var releasesHttp = this.http.get(url);

    releasesHttp.forEach((value) => {
      
      this.releases = Object.keys(value).map(i => value[i]);

      for (var i = 0; i < this.releases.length; i++) {

        var release = this.releases[i];

        if (release["prerelease"] != true && this.latest == undefined) {
          this.latest = release;
        } else if (release["prerelease"] == true && this.latestPre == undefined) {
          this.latestPre = release;
        }

      }

      console.log(this.releases);
      console.log(this.latest);
      console.log(this.latestPre);

    });

  }

  public getReleases(): {} {
    return this.releases;
  }

  public getLatestRelease(): {} {
    return this.latest;
  }

  public getLatestPrerelease(): {} {
    return this.latestPre;
  }

  public getServiceDownloadLink(release: {}, service: string) {

    console.log(release);

    var assets = [];
    assets = release["assets"];

    for (var i = 0; i < assets.length; i++) {

      var asset = assets[i];

      if ((asset["name"] + "").includes(service)) {
        return asset["browser_download_url"] + "";
      }

    }

  }

}
