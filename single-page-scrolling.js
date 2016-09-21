"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SinglePageScrolling = (function () {
    function SinglePageScrolling() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SinglePageScrolling.prototype, "app", void 0);
    SinglePageScrolling = __decorate([
        core_1.Component({
            selector: 'single-page-scrolling',
            template: "\n\t\t<nav-menu [menu]=\"app.navMenu\"></nav-menu>\n\t\t<sps-intro-section [title]=\"app.intro.title\" [button-title]=\"app.intro.buttonTitle\" [button-link]=\"app.intro.buttonLink\"></sps-intro-section>\n\t\t<sps-about-section [about]=\"app.about\"></sps-about-section>\n\t\t<sps-event-calendar [events]=\"app.calendar.events\"></sps-event-calendar>\n\t\t<img-gallery *ngIf=\"app.gallery\" [gallery]=\"app.gallery\"></img-gallery>\n\t\t<sps-membership [membership]=\"app.membership\"></sps-membership>\n\t\t<sps-contact-section [contact-text]=\"app.contact.text\" [contact-email]=\"app.contact.email\"></sps-contact-section>\n\t\t<sps-footer [footer]=\"app.footer\"></sps-footer>\n\t",
            styles: ["\n\t\t#contact a:hover {color: white;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SinglePageScrolling);
    return SinglePageScrolling;
}());
exports.SinglePageScrolling = SinglePageScrolling;
//# sourceMappingURL=single-page-scrolling.js.map