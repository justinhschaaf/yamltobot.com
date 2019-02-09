import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(public http: HttpClient) { }

  /**
   * @deprecated Just pass a path to the <markdown> element
   * 
   * Get the content of a wiki page
   * 
   * @param name The name of the wiki page
   * @param module The module in which the page is in
   * @returns The promise of the wiki's raw Markdown content, unparsed
   * 
   */
  getWikiPage(name: string[], module: string[]): Promise<string> {

    return new Promise((resolve, reject) => {

      var location = "";

      if (module.length > 0) {
        location += "/" + module[0] + "/" + name[0];
      } else {
        location += "/" + name[0];
      }
  
      // https://stackoverflow.com/questions/44601590/ionic-3-get-contents-of-an-asset-file
      this.http.get("https://content.justinschaaf.com/wikicontent" + location + ".md", {responseType: 'text'})
      .subscribe(text => {
        // Fulfill the promise
        resolve(text);
      });
      
    });

  }

}
