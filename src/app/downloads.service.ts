import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {

  // GitHub API URL
  url = "https://api.github.com/repos/YamlToBot/YamlToBot/releases";

  constructor(private http: HttpClient) {
  }

  /**
   * 
   * Gets all of the releases from GitHub
   * 
   * @returns a Promise of an array of release objects
   * 
   */
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

  /**
   * 
   * Gets the latest release that isn't a prerelease from GitHub
   * 
   * @returns A Promise of the latest release's object
   * @author Justin Schaaf
   * 
   */
  public getLatestRelease(): Promise<{}> {

    return new Promise((resolve, reject) => {

      var releases = this.getReleases();
      releases.then(function(releases) {

        var latest = undefined;

        for (var i = 0; i < releases.length; i++) {

          var release = releases[i];

          // If the current release isn't a prerelease and the latest release hasn't been found
          if (release.prerelease != true && latest == undefined) {
            latest = release;
          }

        }

        // Fulfills the promise with the latest release
        resolve(latest);

      });

    });

  }

  /**
   * 
   * Gets the latest prerelease from GitHub
   * 
   * @returns A Promise of the latest prerelease's object
   * @author Justin Schaaf
   * 
   */
  public getLatestPrerelease(): Promise<{}> {

    return new Promise((resolve, reject) => {

      var releases = this.getReleases();
      releases.then(function(releases) {

        var latestPre = undefined;

        for (var i = 0; i < releases.length; i++) {

          var release = releases[i];

          // If the current release is a prerelease and the latest prerelease hasn't been found
          if (release.prerelease == true && latestPre == undefined) {
            latestPre = release;
          }

        }

        // Fulfills the promise with the latest prerelease
        resolve(latestPre);

      });

    });

  }

  /**
   * 
   * Gets a certain release from GitHub
   * 
   * @param id The id of the release
   * 
   * @returns a Promise of an array of release objects
   * 
   */
  public getRelease(id: Number): Promise<{}> {

    return new Promise((resolve, reject) => {

      // Most of this is based on https://egghead.io/lessons/angular-fetch-data-from-an-api-using-the-httpclient-in-angular
      var releasesHttp = this.http.get(this.url + "/" + id);
      releasesHttp.forEach((value) => {
        
        var release = value;
        resolve(release);

      });

    });

  }

  /**
   * 
   * Get a download link from the given release
   * 
   * @param release The release object which you want to get the download link from
   * @param service The service that you want to download. Should be either "discord" or "twitch"
   * @returns A string with the requested download link
   * @author Justin Schaaf
   * 
   */
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
