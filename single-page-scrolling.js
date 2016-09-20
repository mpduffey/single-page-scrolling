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
            { src: "img/galleryappleton-const-day-2.jpg" },
            { src: "img/gallery/appleton-const-day.jpg" },
            { src: "img/gallery/appleton-const-say-3.jpg" },
            { src: "img/gallery/candee-patty-gop.jpg" },
            { src: "img/gallery/darling-const-day.jpg" },
            { src: "img/gallery/lax-const-day.jpg" },
            { src: "img/gallery/mke-const-day-2.jpg" },
            { src: "img/gallery/mke-const-day-3.jpg" },
            { src: "img/gallery/mke-const-day.jpg" },
            { src: "img/gallery/mke-women-trump.jpg" },
            { src: "img/gallery/moore-waukesha-const-day.jpg" },
            { src: "img/gallery/north-shore-ofc-2.jpg" },
            { src: "img/gallery/north-shore-office.jpg" },
            { src: "img/gallery/rj-for-trump.jpg" },
            { src: "img/gallery/wash-cty-const-day.jpg" },
            { src: "img/gallery/waukesha-const-day.jpg" },
            { src: "img/gallery/west-bend-rally.jpg" },
            { src: "img/gallery/wausau-labor-day-parade.jpg" },
            { src: "img/gallery/appleton-const-day-4.jpg" },
        ];
        this.navMenu = [
            { link: "#intro", label: "Home" },
            { link: "#about", label: "About" },
            { link: "#calendar", label: "Calendar" },
            { link: "#gallery", label: "Gallery" },
            { link: "https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform", label: "Sign-up", external: true },
            { link: "#contact", label: "Contact" }
        ];
        this.aboutText = "We are women in the state of Wisconsin who support the election of Donald Trump and Governor Mike Pence to be President and Vice President of the United States. We believe in a strong national defense, a growing and robust economy, protection of our freedoms, and an America that is safe, secure, and prosperous for our futures, our children and our grandchildren.";
        this.calendarEvents = [
            {
                date: new Date(2016, 8, 17, 11),
                endDate: null,
                name: "Constitution Day Celebration",
                location: "La Crosse, Outagamie, Waukesha, Shawano, Wausau, West Bend, Milwaukee, and Dane County Victory Centers",
                contact: {
                    name: "Charlotte Rasmussen",
                    email: "charlotter@ceas.coop",
                    phone: "(715) 551-9724"
                }
            },
            {
                date: new Date(2016, 8, 17, 9),
                endDate: new Date(2016, 8, 17, 21),
                name: "Super Saturday",
                location: "All RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 8, 21, 18, 30),
                endDate: new Date(2016, 8, 21, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 8, 21, 17, 30),
                endDate: new Date(2016, 8, 21, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 8, 26, 18, 30),
                endDate: new Date(2016, 8, 26, 21),
                name: "Milwaukee Debate Watching Party",
                location: "Amelia’s - 724 East Layton Avenue, Milwaukee, WI",
                contact: {
                    name: "Darlene Wink",
                    phone: "(414) 553-8551"
                }
            },
            {
                date: new Date(2016, 8, 26, 19, 30),
                endDate: new Date(2016, 8, 26, 22),
                name: "Washington County Debate Watching Party",
                location: "West Bend GOP Office, 519 Hickory Street, West Bend, WI"
            },
            {
                date: new Date(2016, 8, 28, 17, 30),
                endDate: new Date(2016, 8, 28, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 8, 28, 18, 30),
                endDate: new Date(2016, 8, 28, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 9, 1, 18),
                endDate: new Date(2016, 9, 1, 20),
                name: "Republican Women of Dane County Meet & Greet US Senator Ron Johnson",
                location: "Fitchburg Victory Office, 2976 Triverton Pike Drive, Fitchburg, WI",
                contact: {
                    name: "Jordan Wileman",
                    phone: "(608) 358-4545",
                    email: "jwileman@wisgop.org"
                }
            },
            {
                date: new Date(2016, 9, 5, 17, 30),
                endDate: new Date(2016, 9, 5, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 9, 5, 18, 30),
                endDate: new Date(2016, 9, 5, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 9, 12, 17, 30),
                endDate: new Date(2016, 9, 12, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 9, 12, 18, 30),
                endDate: new Date(2016, 9, 12, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 9, 19, 17, 30),
                endDate: new Date(2016, 9, 19, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 9, 19, 18, 30),
                endDate: new Date(2016, 9, 19, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 9, 26, 17, 30),
                endDate: new Date(2016, 9, 26, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 9, 26, 18, 30),
                endDate: new Date(2016, 9, 26, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 10, 2, 17, 30),
                endDate: new Date(2016, 10, 2, 20),
                name: "Ladies' Night at Milwaukee's North Shore Victory Center",
                location: "500 West Brown Deer Road, Suite 104, Bayview, WI"
            },
            {
                date: new Date(2016, 10, 2, 18, 30),
                endDate: new Date(2016, 10, 2, 21),
                name: "Ladies' Night at the Victory Center",
                location: "Select RPW Victory Offices",
                contact: "Your Victory Office Field Director"
            },
            {
                date: new Date(2016, 10, 8, 7),
                endDate: new Date(2016, 10, 8, 20),
                name: "Election Day",
                location: "Your Local Voting Location"
            },
        ];
    }
    SinglePageScrolling = __decorate([
        core_1.Component({
            selector: 'single-page-scrolling',
            template: "\n\t\t<modal></modal>\n\t\t<nav-menu [menu]=\"navMenu\"></nav-menu>\n\t\t<sps-intro-section title=\"Wisconsin Women for Trump\" button-title=\"I Support Donald Trump! Sign Me Up!\" button-link=\"https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform\"></sps-intro-section>\n\t\t<sps-about-section about-img-src=\"img/gallery/wi-1.jpg\" [about-text]=\"aboutText\"></sps-about-section>\n\t\t<sps-event-calendar [events]=\"calendarEvents\"></sps-event-calendar>\n\t\t<img-gallery [images]=\"imgs\"></img-gallery>\n\t\t<sps-contact-section contact-text=\"Contact Wisconsin Women for Trump\" contact-email=\"wwft2016@gmail.com\"></sps-contact-section>\n\t\t<section id=\"footer\" class=\"section-padding bg-image overlay-dark dark-bg text-center\" data-stellar-background-ratio=\"0.5\" data-background-img=\"img/full/33.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"footer\">Paid For By Donald J. Trump for President</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\t.footer {margin: 10px auto; border: white 3px solid; padding: 20px; font-weight: 600; color: white; text-align: center; font-size: 16px;}\n\t\t#contact a:hover {color: white;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SinglePageScrolling);
    return SinglePageScrolling;
}());
exports.SinglePageScrolling = SinglePageScrolling;
//# sourceMappingURL=single-page-scrolling.js.map