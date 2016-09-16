import {Component} from '@angular/core';

@Component({
	selector:		'single-page-scrolling',
	template:		`
		<modal></modal>
		<nav2-menu></nav2-menu>
		<intro-section></intro-section>
		<about-section></about-section>
		<event-calendar></event-calendar>
		<img-gallery [images]="imgs"></img-gallery>
		<sps-contact-section></sps-contact-section>
		<section id="footer" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div class="footer">Paid For By Donald J. Trump for President</div>
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
	imgs = [
		{src: "img/gallery/wi-1.jpg"},
		{src: "img/gallery/wi-2.jpg"},
		{src: "img/gallery/wwft-waukesha.jpg"},
	]
}