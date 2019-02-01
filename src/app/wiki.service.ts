import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(public http: HttpClient) { }

  getWikiPage(name: string[], module: string[]): Promise<string> {

    return new Promise((resolve, reject) => {

      var location = "";
  
      /*for (var i = 0; i < name.length; i++) {
        location += "/" + name[i];
      }*/

      if (module.length > 0) {
        location += "/" + module[0] + "/" + name[0];
      } else {
        location += "/" + name[0];
      }
  
      // https://stackoverflow.com/questions/44601590/ionic-3-get-contents-of-an-asset-file
      this.http.get("../assets/wiki" + location + ".md", {responseType: 'text'})
          //.map(res => res.text())
          .subscribe(text => {
            console.log("This code did run!");
            console.log(text);
            resolve(text);
          })
          /*.catch(error => {
            console.error("Path not found with error:", error);
          })*/;
      
    });

  }

}
