import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MarkdownService } from 'ngx-markdown';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  wikidir = "../../assets/wiki/";
  title: string;
  content: string;
  sidebar = this.wikidir + "_Sidebar" + ".md";
  footer = this.wikidir + "_Footer" + ".md";

  constructor(private route: ActivatedRoute, private location: Location, private wiki: WikiService, public md: MarkdownService) {

    var name = this.route.snapshot.paramMap.getAll("page");
    var module = this.route.snapshot.paramMap.getAll("module");
    
    if (module.length > 0) {
      this.title = module[0].toLocaleUpperCase() + " :: " + name[0].replace("-", " ").replace("-", " ").replace("-", " ");
      this.content = this.wikidir + module[0] + "/" + name[0] + ".md";
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
