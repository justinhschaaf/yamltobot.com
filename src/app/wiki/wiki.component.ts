import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
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

  content: string;
  sidebar: string;
  footer: string;

  constructor(private route: ActivatedRoute, private location: Location, private wiki: WikiService, public md: MarkdownService) {
    this.getWikiPage();
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

    // Configure image max width
    this.md.renderer.image = (href: string, title: string, text: string) => {
      // Based off of https://github.com/markedjs/marked/blob/master/lib/marked.js#L1056-L1068
      var out = '<img src="' + href + '" alt="' + title + '" style="max-width: 90%;"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">";
      return out;
    };

  }

  getWikiPage() {

    var name = this.route.snapshot.paramMap.getAll("page");
    var module = this.route.snapshot.paramMap.getAll("module");
    var md = this.md;

    console.log(module);
    
    var content = "";
    var sidebar = "";
    var footer = "";

    var getContentPromise = this.wiki.getWikiPage(name, module);
    getContentPromise.then(function(text) {
      content = text;
    });

    var getSidebarPromise = this.wiki.getWikiPage(["_Sidebar"], []);
    getSidebarPromise.then(function(text) {
      sidebar = text;
    });

    var getFooterPromise = this.wiki.getWikiPage(["_Footer"], []);
    getFooterPromise.then(function(text) {
      footer = text;
    });

    setTimeout(function() {

      // Update the main Wiki content
      this.content = content;
      if (module.length > 0) {
        document.getElementById("wikicontent_title").innerHTML = "<h1>" + module[0].toLocaleUpperCase() + " :: " + name[0].replace("-", " ").replace("-", " ").replace("-", " ") + "<\h1>"
      } else {
        document.getElementById("wikicontent_title").innerHTML = "<h1>" + name[0].replace("-", " ") + "<\h1>"
      }
      document.getElementById("wikicontent").innerHTML = md.compile(this.content);

      // Update the sidebar
      this.sidebar = sidebar;
      document.getElementById("sidebar").innerHTML = md.compile(this.sidebar);

      // Update the footer
      this.footer = footer;
      document.getElementById("footer").innerHTML = md.compile(this.footer);

    }, 500);

  }

}
