import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {

  url = "https://api.github.com/repos/justinhschaaf/YamlToBot/releases";

  releases: any[];
  latest: {};
  latestPre: {};

  constructor(private http: HttpClient) {
  }

  public getReleases(): Promise<any[]> {

    return new Promise((resolve, reject) => {

      // Most of this is based on https://egghead.io/lessons/angular-fetch-data-from-an-api-using-the-httpclient-in-angular
      var releasesHttp = this.http.get(this.url);
      releasesHttp.forEach((value) => {
        
        var releases = Object.keys(value).map(i => value[i]);
        resolve(releases);

      });

    });

  }

  public getLatestRelease(): Promise<{}> {

    return new Promise((resolve, reject) => {

      var releases = this.getReleases();
      releases.then(function(releases) {

        var latest = undefined;

        for (var i = 0; i < releases.length; i++) {

          var release = releases[i];

          if (release.prerelease != true && latest == undefined) {
            latest = release;
          }

        }

        resolve(latest);

      });

    });

  }

  public getLatestPrerelease(): Promise<{}> {

    return new Promise((resolve, reject) => {

      var releases = this.getReleases();
      releases.then(function(releases) {

        var latestPre = undefined;

        for (var i = 0; i < releases.length; i++) {

          var release = releases[i];

          if (release.prerelease == true && latestPre == undefined) {
            latestPre = release;
          }

        }

        resolve(latestPre);

      });

    });

  }

  public getServiceDownloadLink(release: {}, service: string): string {

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
