import {Component, Input} from '@angular/core';

@Component({
	selector:		'single-page-scrolling',
	template:		`
		<nav-menu [menu]="app.navMenu"></nav-menu>
		<sps-intro-section [title]="app.intro.title" [button-title]="app.intro.buttonTitle" [button-link]="app.intro.buttonLink"></sps-intro-section>
		<sps-about-section [about]="app.about"></sps-about-section>
		<sps-event-calendar [events]="app.calendar.events"></sps-event-calendar>
		<img-gallery *ngIf="app.gallery" [gallery]="app.gallery"></img-gallery>
		<sps-membership [membership]="app.membership"></sps-membership>
		<sps-contact-section [contact-text]="app.contact.text" [contact-email]="app.contact.email"></sps-contact-section>
		<sps-footer [footer]="app.footer"></sps-footer>
	`,
	styles:			[`
		#contact a:hover {color: white;}
	`]
})

export class SinglePageScrolling {
	@Input() app;
}