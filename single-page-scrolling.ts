import {Component, Input} from '@angular/core';

@Component({
	selector:		'single-page-scrolling',
	template:		`
		<modal></modal>
		<nav-menu [menu]="app.navMenu"></nav-menu>
		<sps-intro-section [title]="app.intro.title" [button-title]="app.intro.buttonTitle" [button-link]="app.intro.buttonLink"></sps-intro-section>
		<sps-about-section [about-img-src]="app.about.img" [about-text]="app.about.text"></sps-about-section>
		<sps-event-calendar [events]="app.calendar.events"></sps-event-calendar>
		<img-gallery [images]="gallery.imgs"></img-gallery>
		<sps-contact-section [contact-text]="app.contact.text" [contact-email]="app.contact.email"></sps-contact-section>
		<section id="footer" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div class="footer">{{app.footer.text}}</div>
				</div>
			</div>
		</section>
	`,
	styles:			[`
		.footer {margin: 10px auto; border: white 3px solid; padding: 20px; font-weight: 600; color: white; text-align: center; font-size: 16px;}
		#contact a:hover {color: white;}
	`]
})

export class SinglePageScrolling {
	@Input() app;
}