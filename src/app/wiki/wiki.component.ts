import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'y2b-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  /*
    Initialize Variables
  */

  // The place where wiki files are stored. The paths should be the same as the one taken to get to the wiki page itself
  wikidir = "https://content.yamltobot.com/wikicontent/";

  // The wiki page's title
  title: string;

  // The location of the wiki page's content, sidebar, and footer
  content: string;
  sidebar = this.wikidir + "--Sidebar" + ".md";
  footer = this.wikidir + "--Footer" + ".md";

  constructor(
    private route: ActivatedRoute, 
    //private wiki: WikiService, // The wiki service was used in alpha versions, but isn't anymore
    public md: MarkdownService
  ) {

    // Get the wiki page's name and module from the path
    var name = this.route.snapshot.paramMap.getAll("page");
    var module = this.route.snapshot.paramMap.getAll("module");
    
    // If a module is defined, add it to the content path
    if (module.length > 0) {
      this.title = module[0].toLocaleUpperCase() + " :: " + name[0].replace("-", " ").replace("-", " ").replace("-", " ");
      this.content = this.wikidir + module[0].toLowerCase() + "/" + name[0] + ".md";
    } else {
      this.title = name[0].replace("-", " ");
      this.content = this.wikidir + name[0] + ".md";
    }

  }

  ngOnInit() {

    // Configure the markdown renderer

    // Add heading anchors
    // This is the example use of configuring the renderer in the ngx-markdown README. Find it at https://github.com/jfcere/ngx-markdown#renderer
    this.md.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<h' + level + '>' +
               '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
                 '<span class="header-link"></span>' +
               '</a>' + text +
             '</h' + level + '>';
    };

  }

}
