(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/downloads/downloads.component.ts");
/* harmony import */ var _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wiki/wiki.component */ "./src/app/wiki/wiki.component.ts");






// The routes for the Angular router
var routes = [
    // The main page should be "home"
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    // Redirect to the main page
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    // Downloads Page
    {
        path: 'download',
        component: _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_4__["DownloadsComponent"]
    },
    // Redirect to the download page if the path is "downloads"
    {
        path: 'downloads',
        redirectTo: 'download',
        pathMatch: 'full'
    },
    // Wiki page with module
    {
        path: 'wiki/:module/:page',
        component: _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_5__["WikiComponent"]
    },
    // Wiki page without module
    {
        path: 'wiki/:page',
        component: _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_5__["WikiComponent"]
    },
    // Go to the default wiki page if nothing is defined
    {
        path: 'wiki',
        redirectTo: 'wiki/Home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--The site's header, with the YamlToBot logo and text name-->\n<div id=\"site_header\">\n  \n  <div id=\"logo\">\n    <!--In case Angular can't find the desired page, allow the user to click the logo to go home-->\n    <a routerLink=\"/home\"><img src=\"https://content.yamltobot.com/common/logos/logo.svg\"></a>\n  </div>\n\n  <div id=\"title\">\n    <h1>YamlToBot</h1>\n  </div>\n\n</div>\n\n<!--The main content of the website, wherever the user goes-->\n<router-outlet></router-outlet>\n\n<!--The website's footer-->\n<div class=\"footer\">\n\n  <!--Flex container for the 3 different footer columns-->\n  <div class=\"footer_content\">\n    \n    <div class=\"footer_column\">\n\n      <h3>Sitemap</h3>\n\n      <p><a routerLink=\"/home\">Home</a></p>\n\n      <p><a routerLink=\"/download\">Download</a></p>\n\n      <p><a routerLink=\"/wiki\">Wiki</a></p>\n\n    </div>\n    \n    <div class=\"footer_column\">\n\n      <h3>External Links</h3>\n\n      <p><a href=\"https://justinschaaf.com\">Personal Website</a></p>\n\n      <p><a href=\"https://liberapay.com/justinhschaaf\">Donate</a></p>\n\n      <p><a href=\"https://github.com/YamlToBot/YamlToBot\">YamlToBot Source</a></p>\n\n      <p><a href=\"https://github.com/YamlToBot/yamltobot.com\">Website Source</a></p>\n\n    </div>\n    \n    <div class=\"footer_column\">\n\n      <h3>Wiki</h3>\n\n      <p><a href=\"wiki\">Main Page</a></p>\n\n      <p><a href=\"wiki/--Pages\">Page List</a></p>\n\n      <p><a href=\"https://github.com/YamlToBot/content.yamltobot.com\">Contribute</a></p>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#site_header {\n  display: flex;\n  background-color: #555555;\n  color: #FFFFFF; }\n  #site_header #logo {\n    margin: 5pt 15pt;\n    width: 70pt; }\n  #site_header #title {\n    margin: 5pt 15pt;\n    font-weight: medium; }\n  .footer {\n  margin: 48pt 0 0 0;\n  padding: 10pt;\n  background-color: #555555;\n  color: #ffffff; }\n  .footer .footer_content {\n    max-width: 720pt;\n    margin: auto;\n    display: flex; }\n  .footer .footer_content .footer_column {\n      min-width: 240pt;\n      width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdXN0aVxcUHJvZ3JhbW1pbmdcXHlhbWx0b2JvdC5jb20vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGFBQWE7RUFFYix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0VBTGxCO0lBUVEsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQVRuQjtJQWFRLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQU0zQjtFQUVJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTtFQUxsQjtJQVVRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBWnJCO01BZVksZ0JBQWdCO01BQ2hCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBTaXRlIEhlYWRlciwgQ29udGFpbmluZyBZYW1sVG9Cb3QgTG9nbyBhbmQgVGV4dFxyXG4jc2l0ZV9oZWFkZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgICNsb2dvIHtcclxuICAgICAgICBtYXJnaW46IDVwdCAxNXB0O1xyXG4gICAgICAgIHdpZHRoOiA3MHB0O1xyXG4gICAgfVxyXG5cclxuICAgICN0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHQgMTVwdDtcclxuICAgICAgICBmb250LXdlaWdodDogbWVkaXVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gU2l0ZSBmb290ZXIsIHdpdGggMyBkaWZmZXJlbnQgY29sdW1uc1xyXG4uZm9vdGVyIHtcclxuXHJcbiAgICBtYXJnaW46IDQ4cHQgMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAxMHB0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIC8vIEZvb3RlciBGbGV4IENvbnRhaW5lclxyXG4gICAgLmZvb3Rlcl9jb250ZW50IHtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MjBwdDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmZvb3Rlcl9jb2x1bW4ge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB0O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'y2b-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/downloads/downloads.component.ts");
/* harmony import */ var _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wiki/wiki.component */ "./src/app/wiki/wiki.component.ts");
/* harmony import */ var _downloads_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./downloads.service */ "./src/app/downloads.service.ts");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wiki.service */ "./src/app/wiki.service.ts");

// Stuff from Angular



// Other External Dependencies

// Website stuff





// Website services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_8__["DownloadsComponent"],
                _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_9__["WikiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                _downloads_service__WEBPACK_IMPORTED_MODULE_10__["DownloadsService"],
                _wiki_service__WEBPACK_IMPORTED_MODULE_11__["WikiService"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/downloads.service.ts":
/*!**************************************!*\
  !*** ./src/app/downloads.service.ts ***!
  \**************************************/
/*! exports provided: DownloadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsService", function() { return DownloadsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DownloadsService = /** @class */ (function () {
    function DownloadsService(http) {
        this.http = http;
        // GitHub API URL
        this.url = "https://api.github.com/repos/YamlToBot/YamlToBot/releases";
    }
    /**
     *
     * Gets all of the releases from GitHub
     *
     * @returns a Promise of an array of release objects
     *
     */
    DownloadsService.prototype.getReleases = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Most of this is based on https://egghead.io/lessons/angular-fetch-data-from-an-api-using-the-httpclient-in-angular
            var releasesHttp = _this.http.get(_this.url);
            releasesHttp.forEach(function (value) {
                var releases = Object.keys(value).map(function (i) { return value[i]; });
                resolve(releases);
            });
        });
    };
    /**
     *
     * Gets the latest release that isn't a prerelease from GitHub
     *
     * @returns A Promise of the latest release's object
     * @author Justin Schaaf
     *
     */
    DownloadsService.prototype.getLatestRelease = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var releases = _this.getReleases();
            releases.then(function (releases) {
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
    };
    /**
     *
     * Gets the latest prerelease from GitHub
     *
     * @returns A Promise of the latest prerelease's object
     * @author Justin Schaaf
     *
     */
    DownloadsService.prototype.getLatestPrerelease = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var releases = _this.getReleases();
            releases.then(function (releases) {
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
    };
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
    DownloadsService.prototype.getServiceDownloadLink = function (release, service) {
        var assets = [];
        assets = release["assets"];
        for (var i = 0; i < assets.length; i++) {
            var asset = assets[i];
            if ((asset["name"] + "").includes(service)) {
                return asset["browser_download_url"] + "";
            }
        }
    };
    DownloadsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DownloadsService);
    return DownloadsService;
}());



/***/ }),

/***/ "./src/app/downloads/downloads.component.html":
/*!****************************************************!*\
  !*** ./src/app/downloads/downloads.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The navigation bar at the top of the page, right under the YamlToBot logo-->\n<div class=\"tabbar\">\n\n  <div class=\"tab_spacer\">\n    <p>Shh, this tab doesn't exist...</p>\n  </div>\n\n  <div class=\"tab_deselected\">\n    <a routerLink=\"/home\"><h3>Home</h3></a>\n  </div>\n  \n  <div class=\"tab\">\n    <a routerLink=\"/download\"><h3>Download</h3></a>\n  </div>\n\n  <div class=\"tab_deselected\">\n    <a routerLink=\"/wiki\"><h3>Wiki</h3></a>\n  </div>\n  \n  <div class=\"tab_deselected\">\n    <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liberapay.com/justinhschaaf/\"><h3>Donate</h3></a>\n  </div>\n\n</div>\n\n<!--The body of the webpage-->\n<div class=\"content\">\n\n  <h1 class=\"title\">Downloads</h1>\n\n  <div class=\"featured\">\n\n    <!--The latest stable release-->\n    <div class=\"card\">\n\n      <div class=\"card_header stable\">\n        <h3>Latest Release</h3>\n      </div>\n\n      <div class=\"card_content\">\n        <button class=\"button discord\" (click)=\"download(latest, 'discord')\"><h3>Discord</h3></button>\n        <button class=\"button twitch\" (click)=\"download(latest, 'twitch')\"><h3>Twitch</h3></button>\n      </div>\n\n    </div>\n\n    <!--The latest prerelease-->\n    <div class=\"card\">\n\n      <div class=\"card_header pre\">\n        <h3>Latest Pre Release</h3>\n      </div>\n\n      <div class=\"card_content\">\n        <button class=\"button discord\" (click)=\"download(latestPre, 'discord')\"><h3>Discord</h3></button>\n        <button class=\"button twitch\" (click)=\"download(latestPre, 'twitch')\"><h3>Twitch</h3></button>\n      </div>\n\n    </div>\n\n  </div>\n\n  <br>\n\n  <!--The table containing all of the releases-->\n  <div class=\"downloads_table\">\n\n    <div class=\"card\">\n  \n      <div class=\"card_header\">\n        <h3>Other Downloads</h3>\n      </div>\n  \n      <!--Iterate through each release-->\n      <div *ngFor=\"let release of releases; index as i\" class=\"downloads_table_item\">\n  \n        <!--The [ngClass] updates depending on if it's the latest stable release or if it is a prerelease-->\n        <div [ngClass]=\"{'pre': release.prerelease, 'stable': i == 0 && !release.prerelease }\" class=\"downloads_table_item_name\">\n          <h4>{{ release.name }}</h4>\n        </div>\n  \n        <button class=\"button discord\" (click)=\"download(release, 'discord')\"><h3>Discord</h3></button>\n        <button class=\"button twitch\" (click)=\"download(release, 'twitch')\"><h3>Twitch</h3></button>\n  \n      </div>\n  \n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/downloads/downloads.component.scss":
/*!****************************************************!*\
  !*** ./src/app/downloads/downloads.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  padding: 1pt;\n  text-align: center;\n  border-bottom: 0.5pt solid #cccccc; }\n\n.stable {\n  background-color: #eeffee;\n  color: #008800; }\n\n.pre {\n  background-color: #ffeeee;\n  color: #880000; }\n\n.featured {\n  display: flex; }\n\n.featured .card {\n    width: 45%;\n    margin: auto; }\n\n.featured .card .card_content {\n      padding: 0pt;\n      display: flex; }\n\n.featured .card .card_content button {\n        width: 50%; }\n\n.downloads_table .card {\n  width: 95%;\n  margin: auto; }\n\n.downloads_table .card .downloads_table_item {\n    border-top: 1pt solid #cccccc;\n    display: flex;\n    height: 48pt; }\n\n.downloads_table .card .downloads_table_item .downloads_table_item_name {\n      width: 50%;\n      text-align: center; }\n\n.downloads_table .card .downloads_table_item button {\n      width: 25%;\n      height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWRzL0M6XFxVc2Vyc1xcanVzdGlcXFByb2dyYW1taW5nXFx5YW1sdG9ib3QuY29tL3NyY1xcYXBwXFxkb3dubG9hZHNcXGRvd25sb2Fkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLFlBQVk7RUFFWixrQkFBa0I7RUFDbEIsa0NBQWtDLEVBQUE7O0FBS3RDO0VBQ0kseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUlsQjtFQUVJLGFBQWEsRUFBQTs7QUFGakI7SUFPUSxVQUFVO0lBQ1YsWUFBWSxFQUFBOztBQVJwQjtNQVlZLFlBQVk7TUFDWixhQUFhLEVBQUE7O0FBYnpCO1FBZ0JnQixVQUFVLEVBQUE7O0FBVTFCO0VBS1EsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFOcEI7SUFXWSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVksRUFBQTs7QUFieEI7TUFnQmdCLFVBQVU7TUFDVixrQkFBa0IsRUFBQTs7QUFqQmxDO01BcUJnQixVQUFVO01BQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciB0aGUgaGVhZGluZyB0aGF0IHNheXMgXCJEb3dubG9hZHNcIiB0byB0aXRsZSB0aGUgd2VicGFnZVxyXG4udGl0bGUge1xyXG5cclxuICAgIHBhZGRpbmc6IDFwdDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVwdCBzb2xpZCAjY2NjY2NjO1xyXG5cclxufVxyXG5cclxuLy8gQ29sb3JzIGZvciBhIHN0YWJsZSByZWxlYXNlXHJcbi5zdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZmZlZTtcclxuICAgIGNvbG9yOiAjMDA4ODAwO1xyXG59XHJcblxyXG4vLyBDb2xvcnMgZm9yIGEgcHJlcmVsZWFzZVxyXG4ucHJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZWU7XHJcbiAgICBjb2xvcjogIzg4MDAwMDtcclxufVxyXG5cclxuLy8gRmVhdHVyZWQgZG93bmxvYWRzXHJcbi5mZWF0dXJlZCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAvLyBDYXJkIGVsZW1lbnQgY3VzdG9taXphdGlvbnNcclxuICAgIC5jYXJkIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgIC5jYXJkX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogMHB0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIFRoZSB0YWJsZSBvZiBkb3dubG9hZHNcclxuLmRvd25sb2Fkc190YWJsZSB7XHJcblxyXG4gICAgLy8gQ2FyZCBlbGVtZW50IGN1c3RvbWl6YXRpb25zXHJcbiAgICAuY2FyZCB7XHJcblxyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAvLyBBIHJvdyBpbiB0aGUgdGFibGVcclxuICAgICAgICAuZG93bmxvYWRzX3RhYmxlX2l0ZW0ge1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB0IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhwdDtcclxuXHJcbiAgICAgICAgICAgIC5kb3dubG9hZHNfdGFibGVfaXRlbV9uYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/downloads/downloads.component.ts":
/*!**************************************************!*\
  !*** ./src/app/downloads/downloads.component.ts ***!
  \**************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../downloads.service */ "./src/app/downloads.service.ts");



var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent(downloadService) {
        this.downloadService = downloadService;
        // Create a local instance of DownloadsComponent.
        // It's redundant, I know, but JS has no better
        // way of calling "this" in the .then() function
        var dc = this;
        // Get a list of releases
        downloadService.getReleases().then(function (releases) {
            dc.releases = releases;
        });
        // Get the latest release object
        downloadService.getLatestRelease().then(function (release) {
            dc.latest = release;
        });
        // Get the latest prerelease object
        downloadService.getLatestPrerelease().then(function (release) {
            dc.latestPre = release;
        });
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    // The function for downloading a file. It gets the 
    // download link from the release and sends the user there.
    DownloadsComponent.prototype.download = function (release, service) {
        window.open(this.downloadService.getServiceDownloadLink(release, service));
    };
    DownloadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'y2b-downloads',
            template: __webpack_require__(/*! ./downloads.component.html */ "./src/app/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.scss */ "./src/app/downloads/downloads.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_downloads_service__WEBPACK_IMPORTED_MODULE_2__["DownloadsService"]])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The navigation bar at the top of the page, right under the YamlToBot logo-->\n<div class=\"tabbar\">\n\n  <div class=\"tab_spacer\">\n    <p>Shh, this tab doesn't exist...</p>\n  </div>\n\n  <div class=\"tab\">\n    <a routerLink=\"/home\"><h3>Home</h3></a>\n  </div>\n  \n  <div class=\"tab_deselected\">\n    <a routerLink=\"/download\"><h3>Download</h3></a>\n  </div>\n\n  <div class=\"tab_deselected\">\n    <a routerLink=\"/wiki\"><h3>Wiki</h3></a>\n  </div>\n  \n  <div class=\"tab_deselected\">\n    <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liberapay.com/justinhschaaf/\"><h3>Donate</h3></a>\n  </div>\n\n</div>\n  \n<!--The banner at the top of the page with a BG image and name-->\n<div class=\"banner banner_home\">\n\n  <div class=\"banner_content\">\n\n    <h1>YamlToBot</h1>\n\n    <h3>Make chat bots easily.</h3>\n\n  </div>\n\n</div>\n\n<!--The body of the webpage-->\n<div class=\"content\">\n\n  <h2>What is YamlToBot?</h2>\n\n  <p>\n    YamlToBot is an application that allows you to host your own chat bot for Discord or Twitch.\n    You are able to customize your bot with a wide range of commands through a simple configuration\n    file, or you could even make your own custom scripts to run!\n  </p>\n\n  <br>\n\n  <!--Promotional Phrase: \"Configure, Run, Done!\"-->\n  <div class=\"home_steps_container\">\n\n    <div class=\"card\">\n\n      <img src=\"assets/images/home_step_0.png\">\n\n      <h2>Configure,</h2>\n\n    </div>\n\n    <div class=\"card\">\n\n      <img src=\"assets/images/home_step_1.png\">\n\n      <h2>Run,</h2>\n\n    </div>\n\n    <div class=\"card\">\n\n      <img src=\"assets/images/home_step_2.png\">\n\n      <h2>Done!</h2>\n\n    </div>\n\n  </div>\n\n  <br>\n\n  <!--Even though \"align\" is colored red in VS Code, it works perfectly fine-->\n  <h1 align=\"center\">Ready to get started?</h1>\n\n  <!--The container for the download and wiki cards-->\n  <div class=\"home_started_container\">\n\n    <div class=\"card\">\n\n      <div class=\"card_header\">\n        <h2>Download</h2>\n      </div>\n\n      <div class=\"card_content\">\n        <button class=\"button discord\" (click)=\"download('discord')\"><h3>Discord</h3></button>\n        <button class=\"button twitch\" (click)=\"download('twitch')\"><h3>Twitch</h3></button>\n      </div>\n\n    </div>\n\n    <div class=\"card\">\n\n      <div class=\"card_header\">\n        <h2>Wiki</h2>\n      </div>\n\n      <div class=\"card_content\">\n        <button class=\"button wiki\" routerLink=\"/wiki/Home\"><h3>Home</h3></button>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner_home {\n  background-image: url(\"/assets/images/home_banner.png\"); }\n\n.home_steps_container {\n  display: flex; }\n\n.home_steps_container .card {\n    width: 30%;\n    height: 180pt;\n    padding: 1%;\n    margin: 10pt auto;\n    text-align: center; }\n\n.home_steps_container .card img {\n      width: 98%;\n      height: 70%;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-attachment: fixed;\n      background-size: cover;\n      border-radius: 10pt; }\n\n.home_started_container {\n  display: flex; }\n\n.home_started_container .card {\n    width: 45%;\n    margin: 5pt auto; }\n\n.home_started_container .card .card_content {\n      padding: 0pt;\n      display: flex; }\n\n.home_started_container .card .card_content button {\n        width: 50%; }\n\n.home_started_container .card .card_content .wiki {\n        width: 100%;\n        background-color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xceWFtbHRvYm90LmNvbS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVEQUF1RCxFQUFBOztBQUkzRDtFQUVJLGFBQWEsRUFBQTs7QUFGakI7SUFPUSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFFakIsa0JBQWtCLEVBQUE7O0FBWjFCO01Ba0JZLFVBQVU7TUFDVixXQUFXO01BRVgsNEJBQTRCO01BQzVCLDJCQUEyQjtNQUMzQiw0QkFBNEI7TUFDNUIsc0JBQXNCO01BRXRCLG1CQUFtQixFQUFBOztBQVMvQjtFQUVJLGFBQWEsRUFBQTs7QUFGakI7SUFPUSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7O0FBUnhCO01BWVksWUFBWTtNQUNaLGFBQWEsRUFBQTs7QUFiekI7UUFpQmdCLFVBQVUsRUFBQTs7QUFqQjFCO1FBcUJnQixXQUFXO1FBQ1gseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gQmFubmVyIEJhY2tncm91bmQgZm9yIEhvbWVcclxuLmJhbm5lcl9ob21lIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZV9iYW5uZXIucG5nJyk7XHJcbn1cclxuXHJcbi8vIENvbmZpZywgUnVuLCBEb25lLlxyXG4uaG9tZV9zdGVwc19jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLy8gQ2FyZCBlbGVtZW50IGN1c3RvbWl6YXRpb25cclxuICAgIC5jYXJkIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB0O1xyXG4gICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgIG1hcmdpbjogMTBwdCBhdXRvO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC8vIFJlc2l6ZSBhbGwgb2YgdGhlIGltYWdlcyB0byBiZSB0aGUgc2FtZSBzaXplIGluIG9yZGVyIGZvclxyXG4gICAgICAgIC8vIHRoZSB0ZXh0IHRvIGxpbmUgdXAgYW5kIGZvciB0aGUgY2FyZHMgdG8gYmUgdGhlIHNhbWUgaGVpZ2h0XHJcbiAgICAgICAgaW1nIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5OCU7IC8vIDI1MHB0XHJcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBwdDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIEZvciB0aGUgXCJMZXQncyBHZXQgU3RhcnRlZFwiIHNlY3Rpb25cclxuLmhvbWVfc3RhcnRlZF9jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLy8gQ2FyZCBlbGVtZW50IGN1c3RvbWl6YXRpb25cclxuICAgIC5jYXJkIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW46IDVwdCBhdXRvO1xyXG5cclxuICAgICAgICAuY2FyZF9jb250ZW50IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBwdDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgYnV0dG9ucyBmb3IgZG93bmxvYWRpbmcgRGlzY29yZC9Ud2l0Y2ggdG8gNTAlIG9mIHRoZSB3aWR0aCBvZiB0aGUgY2FyZFxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndpa2kge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../downloads.service */ "./src/app/downloads.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(downloadService) {
        this.downloadService = downloadService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // Get the proper latest download link from the Download Service and send the user there
    HomeComponent.prototype.download = function (module) {
        var ds = this.downloadService;
        ds.getLatestRelease().then(function (release) {
            window.open(ds.getServiceDownloadLink(release, module));
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'y2b-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_downloads_service__WEBPACK_IMPORTED_MODULE_2__["DownloadsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/wiki.service.ts":
/*!*********************************!*\
  !*** ./src/app/wiki.service.ts ***!
  \*********************************/
/*! exports provided: WikiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiService", function() { return WikiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WikiService = /** @class */ (function () {
    function WikiService(http) {
        this.http = http;
    }
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
    WikiService.prototype.getWikiPage = function (name, module) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var location = "";
            if (module.length > 0) {
                location += "/" + module[0] + "/" + name[0];
            }
            else {
                location += "/" + name[0];
            }
            // https://stackoverflow.com/questions/44601590/ionic-3-get-contents-of-an-asset-file
            _this.http.get("https://content.justinschaaf.com/wikicontent" + location + ".md", { responseType: 'text' })
                .subscribe(function (text) {
                // Fulfill the promise
                resolve(text);
            });
        });
    };
    WikiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WikiService);
    return WikiService;
}());



/***/ }),

/***/ "./src/app/wiki/wiki.component.html":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The navigation bar at the top of the page, right under the YamlToBot logo-->\n<div class=\"tabbar\">\n\n  <div class=\"tab_spacer\">\n    <p>Shh, this tab doesn't exist...</p>\n  </div>\n\n  <div class=\"tab_deselected\">\n    <a routerLink=\"/home\"><h3>Home</h3></a>\n  </div>\n  \n  <div class=\"tab_deselected\">\n    <a routerLink=\"/download\"><h3>Download</h3></a>\n  </div>\n\n  <div class=\"tab\">\n    <a routerLink=\"/wiki\"><h3>Wiki</h3></a>\n  </div>\n  \n  <div class=\"tab_deselected\">\n    <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liberapay.com/justinhschaaf/\"><h3>Donate</h3></a>\n  </div>\n\n</div>\n\n<!--The body of the webpage-->\n<div class=\"content wikicontent\">\n\n  <!--The flex container of the wiki stuff-->\n  <div id=\"wiki\">\n\n    <!--\n      Start with the footer. In the SCSS for the wiki,\n      the content is reversed so that the sidebar appears\n      at the top on mobile.\n    -->\n    <div id=\"footer_container\">\n      <div class=\"card\">\n        <div id=\"footer\">\n          <markdown [src]=\"footer\"></markdown>\n        </div>\n      </div>\n    </div>\n\n    <!--The wiki page itself-->\n    <div id=\"wikicontent_container\">\n      <div id=\"wikicontent_title\"><h1>{{ title }}</h1></div>\n      <div id=\"wikicontent\">\n        <markdown [src]=\"content\"></markdown>\n      </div>\n    </div>\n\n    <!--The sidebar-->\n    <div id=\"sidebar_container\">\n      <div class=\"card\">\n        <div id=\"sidebar\">\n          <markdown [src]=\"sidebar\"></markdown>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/wiki/wiki.component.scss":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wikicontent {\n  /*\r\n        Most of these elements use IDS rather\r\n        than classes from when I used a different\r\n        system to fetch the markdown files and\r\n        display them rather than just having\r\n        ngx-markdown handle the rendering itself\r\n        and just passing the path to it.\r\n    */ }\n  .wikicontent #wiki {\n    display: flex;\n    flex-wrap: wrap-reverse; }\n  .wikicontent #wiki #wikicontent_container {\n      width: 70%;\n      min-width: 240pt;\n      margin: 0 auto auto; }\n  .wikicontent #wiki #wikicontent_container #wikicontent_title {\n        padding: 1pt;\n        text-align: center;\n        border-bottom: 0.5pt solid #cccccc; }\n  .wikicontent #wiki #wikicontent_container #wikicontent {\n        margin: 8pt; }\n  .wikicontent #wiki #wikicontent_container #wikicontent img {\n          max-width: 100%; }\n  .wikicontent #wiki #sidebar_container {\n      width: 25%;\n      min-width: 180pt;\n      margin: 0 auto auto; }\n  .wikicontent #wiki #sidebar_container .card #sidebar {\n        margin: 8pt; }\n  .wikicontent #wiki #footer_container {\n      width: 70%;\n      min-width: 240pt; }\n  .wikicontent #wiki #footer_container .card {\n        width: 100%;\n        margin: 10pt 0; }\n  .wikicontent #wiki #footer_container .card #footer {\n          margin: 8pt; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lraS9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xceWFtbHRvYm90LmNvbS9zcmNcXGFwcFxcd2lraVxcd2lraS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lraS93aWtpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUk7Ozs7Ozs7S0NLQyxFREVDO0VBVE47SUFjUSxhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7RUFmL0I7TUFtQlksVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTtFQXJCL0I7UUF5QmdCLFlBQVk7UUFFWixrQkFBa0I7UUFDbEIsa0NBQWtDLEVBQUE7RUE1QmxEO1FBaUNnQixXQUFXLEVBQUE7RUFqQzNCO1VBb0NvQixlQUFlLEVBQUE7RUFwQ25DO01BOENZLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUFoRC9CO1FBb0RvQixXQUFXLEVBQUE7RUFwRC9CO01BNkRZLFVBQVU7TUFDVixnQkFBZ0IsRUFBQTtFQTlENUI7UUFrRWdCLFdBQVc7UUFDWCxjQUFjLEVBQUE7RUFuRTlCO1VBc0VvQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93aWtpL3dpa2kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgU0NTUyBmb3IgdGhlIHdpa2lcclxuLndpa2ljb250ZW50IHtcclxuICAgIFxyXG4gICAgLypcclxuICAgICAgICBNb3N0IG9mIHRoZXNlIGVsZW1lbnRzIHVzZSBJRFMgcmF0aGVyXHJcbiAgICAgICAgdGhhbiBjbGFzc2VzIGZyb20gd2hlbiBJIHVzZWQgYSBkaWZmZXJlbnRcclxuICAgICAgICBzeXN0ZW0gdG8gZmV0Y2ggdGhlIG1hcmtkb3duIGZpbGVzIGFuZFxyXG4gICAgICAgIGRpc3BsYXkgdGhlbSByYXRoZXIgdGhhbiBqdXN0IGhhdmluZ1xyXG4gICAgICAgIG5neC1tYXJrZG93biBoYW5kbGUgdGhlIHJlbmRlcmluZyBpdHNlbGZcclxuICAgICAgICBhbmQganVzdCBwYXNzaW5nIHRoZSBwYXRoIHRvIGl0LlxyXG4gICAgKi9cclxuXHJcbiAgICAvLyBUaGUgd2lraSdzIGZsZXggY29udGFpbmVyXHJcbiAgICAjd2lraSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuICAgIFxyXG4gICAgICAgIC8vIFRoZSBtYWluIHdpa2kgcGFnZVxyXG4gICAgICAgICN3aWtpY29udGVudF9jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAjd2lraWNvbnRlbnRfdGl0bGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB0O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHQgc29saWQgI2NjY2NjYztcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAjd2lraWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBUaGUgc2lkZWJhclxyXG4gICAgICAgICNzaWRlYmFyX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAjc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBUaGUgd2lraSBmb290ZXJcclxuICAgICAgICAjZm9vdGVyX2NvbnRhaW5lciB7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB0O1xyXG5cclxuICAgICAgICAgICAgLmNhcmQge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB0IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAjZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhwdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLndpa2ljb250ZW50IHtcbiAgLypcclxuICAgICAgICBNb3N0IG9mIHRoZXNlIGVsZW1lbnRzIHVzZSBJRFMgcmF0aGVyXHJcbiAgICAgICAgdGhhbiBjbGFzc2VzIGZyb20gd2hlbiBJIHVzZWQgYSBkaWZmZXJlbnRcclxuICAgICAgICBzeXN0ZW0gdG8gZmV0Y2ggdGhlIG1hcmtkb3duIGZpbGVzIGFuZFxyXG4gICAgICAgIGRpc3BsYXkgdGhlbSByYXRoZXIgdGhhbiBqdXN0IGhhdmluZ1xyXG4gICAgICAgIG5neC1tYXJrZG93biBoYW5kbGUgdGhlIHJlbmRlcmluZyBpdHNlbGZcclxuICAgICAgICBhbmQganVzdCBwYXNzaW5nIHRoZSBwYXRoIHRvIGl0LlxyXG4gICAgKi8gfVxuICAud2lraWNvbnRlbnQgI3dpa2kge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7IH1cbiAgICAud2lraWNvbnRlbnQgI3dpa2kgI3dpa2ljb250ZW50X2NvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbWluLXdpZHRoOiAyNDBwdDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIGF1dG87IH1cbiAgICAgIC53aWtpY29udGVudCAjd2lraSAjd2lraWNvbnRlbnRfY29udGFpbmVyICN3aWtpY29udGVudF90aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDFwdDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVwdCBzb2xpZCAjY2NjY2NjOyB9XG4gICAgICAud2lraWNvbnRlbnQgI3dpa2kgI3dpa2ljb250ZW50X2NvbnRhaW5lciAjd2lraWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDhwdDsgfVxuICAgICAgICAud2lraWNvbnRlbnQgI3dpa2kgI3dpa2ljb250ZW50X2NvbnRhaW5lciAjd2lraWNvbnRlbnQgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgICAud2lraWNvbnRlbnQgI3dpa2kgI3NpZGViYXJfY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBtaW4td2lkdGg6IDE4MHB0O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gYXV0bzsgfVxuICAgICAgLndpa2ljb250ZW50ICN3aWtpICNzaWRlYmFyX2NvbnRhaW5lciAuY2FyZCAjc2lkZWJhciB7XG4gICAgICAgIG1hcmdpbjogOHB0OyB9XG4gICAgLndpa2ljb250ZW50ICN3aWtpICNmb290ZXJfY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtaW4td2lkdGg6IDI0MHB0OyB9XG4gICAgICAud2lraWNvbnRlbnQgI3dpa2kgI2Zvb3Rlcl9jb250YWluZXIgLmNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxMHB0IDA7IH1cbiAgICAgICAgLndpa2ljb250ZW50ICN3aWtpICNmb290ZXJfY29udGFpbmVyIC5jYXJkICNmb290ZXIge1xuICAgICAgICAgIG1hcmdpbjogOHB0OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/wiki/wiki.component.ts":
/*!****************************************!*\
  !*** ./src/app/wiki/wiki.component.ts ***!
  \****************************************/
/*! exports provided: WikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiComponent", function() { return WikiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");




var WikiComponent = /** @class */ (function () {
    function WikiComponent(route, 
    //private wiki: WikiService, // The wiki service was used in alpha versions, but isn't anymore
    md) {
        this.route = route;
        this.md = md;
        /*
          Initialize Variables
        */
        // The place where wiki files are stored. The paths should be the same as the one taken to get to the wiki page itself
        this.wikidir = "https://content.yamltobot.com/wikicontent/";
        this.sidebar = this.wikidir + "--Sidebar" + ".md";
        this.footer = this.wikidir + "--Footer" + ".md";
        // Get the wiki page's name and module from the path
        var name = this.route.snapshot.paramMap.getAll("page");
        var module = this.route.snapshot.paramMap.getAll("module");
        // If a module is defined, add it to the content path
        if (module.length > 0) {
            this.title = module[0].toLocaleUpperCase() + " :: " + name[0].replace("-", " ").replace("-", " ").replace("-", " ");
            this.content = this.wikidir + module[0].toLowerCase() + "/" + name[0] + ".md";
        }
        else {
            this.title = name[0].replace("-", " ");
            this.content = this.wikidir + name[0] + ".md";
        }
    }
    WikiComponent.prototype.ngOnInit = function () {
        // Configure the markdown renderer
        // Add heading anchors
        // This is the example use of configuring the renderer in the ngx-markdown README. Find it at https://github.com/jfcere/ngx-markdown#renderer
        this.md.renderer.heading = function (text, level) {
            var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            return '<h' + level + '>' +
                '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
                '<span class="header-link"></span>' +
                '</a>' + text +
                '</h' + level + '>';
        };
    };
    WikiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'y2b-wiki',
            template: __webpack_require__(/*! ./wiki.component.html */ "./src/app/wiki/wiki.component.html"),
            styles: [__webpack_require__(/*! ./wiki.component.scss */ "./src/app/wiki/wiki.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]])
    ], WikiComponent);
    return WikiComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\yamltobot.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map