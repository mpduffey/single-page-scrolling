import {Component} from '@angular/core';

@Component({
	selector:		'single-page-scrolling',
	template:		`
		<modal></modal>
		<nav-menu [menu]="navMenu"></nav-menu>
		<sps-intro-section title="Wisconsin Women for Trump" button-title="I Support Donald Trump! Sign Me Up!" button-link="https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform"></sps-intro-section>
		<sps-about-section about-img-src="img/gallery/wi-1.jpg" [about-text]="aboutText"></sps-about-section>
		<sps-event-calendar [events]="calendarEvents"></sps-event-calendar>
		<img-gallery [images]="imgs"></img-gallery>
		<sps-contact-section contact-text="Contact Wisconsin Women for Trump" contact-email="wwft2016@gmail.com"></sps-contact-section>
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
		{src: "img/galleryappleton-const-day-2.jpg"},
		{src: "img/gallery/appleton-const-day.jpg"},
		{src: "img/gallery/appleton-const-say-3.jpg"},
		{src: "img/gallery/candee-patty-gop.jpg"},
		{src: "img/gallery/darling-const-day.jpg"},
		{src: "img/gallery/lax-const-day.jpg"},
		{src: "img/gallery/mke-const-day-2.jpg"},
		{src: "img/gallery/mke-const-day-3.jpg"},
		{src: "img/gallery/mke-const-day.jpg"},
		{src: "img/gallery/mke-women-trump.jpg"},
		{src: "img/gallery/moore-waukesha-const-day.jpg"},
		{src: "img/gallery/north-shore-ofc-2.jpg"},
		{src: "img/gallery/north-shore-office.jpg"},
		{src: "img/gallery/rj-for-trump.jpg"},
		{src: "img/gallery/wash-cty-const-day.jpg"},
		{src: "img/gallery/waukesha-const-day.jpg"}
	];
	navMenu = [
		{link: "#intro", label: "Home"},
		{link: "#about", label: "About"},
		{link: "#calendar", label: "Calendar"},
		{link: "#gallery", label: "Gallery"},
		{link: "https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform", label: "Sign-up", external: true},
		{link: "#contact", label: "Contact"}
	];
	aboutText = "We are women in the state of Wisconsin who support the election of Donald Trump and Governor Mike Pence to be President and Vice President of the United States. We believe in a strong national defense, a growing and robust economy, protection of our freedoms, and an America that is safe, secure, and propserous for our futures, our children and our grandchildren.";
	calendarEvents = [
		{
			date:				new Date(2016,8,17,11),
			endDate:		null,
			name:				"Constitution Day Celebration",
			location:		"La Crosse, Outagamie, Waukesha, Shawano, Wausau, West Bend, Milwaukee, and Dane County Victory Centers",
			contact:		{
				name:				"Charlotte Rasmussen",
				email:			"charlotter@ceas.coop",
				phone:			"(715) 551-9724"
			}
		},
		{
			date:				new Date(2016,8,17,9),
			endDate:		new Date(2016,8,17,21),
			name:				"Super Saturday",
			location:		"All RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,8,21,18,30),
			endDate:		new Date(2016,8,21,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,8,26,18,30),
			endDate:		new Date(2016,8,26,21),
			name:				"Milwaukee Debate Watching Party",
			location:		"Amelia’s - 724 East Layton Avenue, Milwaukee, WI",
			contact:		{
				name:				"Darlene Wink",
				phone:			"(414) 553-8551"
			}
		},
		{
			date:				new Date(2016,8,26,19,30),
			endDate:		new Date(2016,8,26,22),
			name:				"Washington County Debate Watching Party",
			location:		"West Bend GOP Office, 519 Hickory Street, West Bend, WI"
		},
		{
			date:				new Date(2016,8,28,18,30),
			endDate:		new Date(2016,8,28,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,9,1,18),
			endDate:		new Date(2016,9,1,20),
			name:				"Republican Women of Dane County Meet & Greet US Senator Ron Johnson",
			location:		"Fitchburg Victory Office, 2976 Triverton Pike Drive, Fitchburg, WI",
			contact:		{
				name:				"Jordan Wileman",
				phone:			"(608) 358-4545",
				email:			"jwileman@wisgop.org"
			}
		},
		{
			date:				new Date(2016,9,5,18,30),
			endDate:		new Date(2016,9,5,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,9,12,18,30),
			endDate:		new Date(2016,9,12,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,9,19,18,30),
			endDate:		new Date(2016,9,19,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,9,26,18,30),
			endDate:		new Date(2016,9,26,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,10,2,18,30),
			endDate:		new Date(2016,10,2,21),
			name:				"Ladies' Night at the Victory Center",
			location:		"Select RPW Victory Offices",
			contact:		"Your Victory Office Field Director"
		},
		{
			date:				new Date(2016,10,8,7),
			endDate:		new Date(2016,10,8,20),
			name:				"Election Day",
			location:		"Your Local Voting Location"
		},
	];
}