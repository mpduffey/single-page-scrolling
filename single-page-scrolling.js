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
        this.imgs = [
            { src: "img/gallery/wi-1.jpg" },
            { src: "img/gallery/wi-2.jpg" },
            { src: "img/gallery/wwft-waukesha.jpg" },
        ];
    }
    SinglePageScrolling = __decorate([
        core_1.Component({
            selector: 'single-page-scrolling',
            template: "\n\t\t<modal></modal>\n\t\t<nav2-menu></nav2-menu>\n\t\t<intro-section></intro-section>\n\t\t<about-section></about-section>\n\t\t<event-calendar></event-calendar>\n\t\t<img-gallery [images]=\"imgs\"></img-gallery>\n\t\t<sps-contact-section></sps-contact-section>\n\t\t<section id=\"footer\" class=\"section-padding bg-image overlay-dark dark-bg text-center\" data-stellar-background-ratio=\"0.5\" data-background-img=\"img/full/33.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"footer\">Paid For By Donald J. Trump for President</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\t.footer {margin: 10px auto; border: white 3px solid; padding: 20px; font-weight: 600; color: white; text-align: center; font-size: 16px;}\n\t\t#contact a:hover {color: white;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SinglePageScrolling);
    return SinglePageScrolling;
}());
exports.SinglePageScrolling = SinglePageScrolling;
//# sourceMappingURL=single-page-scrolling.js.map