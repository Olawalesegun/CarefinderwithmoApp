import Image from 'next/image';
import HomepageStyles from '@/styles/HomePage.module.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className={HomepageStyles.footerContainer}>
			<div className={HomepageStyles.carefinder}>
				<Link href='/' passHref>
					<Image
						src='/Logo-White.svg'
						alt='careFinder'
						height={80}
						width={80}
					/>
				</Link>
				<p>
					Find the nearest hospital to you to get quick medical access today.
				</p>
				<ul>
					<li>
						<Link href='/privacy'>Privacy</Link>
					</li>
					<li>
						<Link href='/terms'>Terms & Conditions</Link>
					</li>
				</ul>
			</div>
			<div className={HomepageStyles.pages}>
				<h3>Pages</h3>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/Explore'>Explore</Link>
					</li>
					<li>
						<Link href='/profile'>Profile</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
				</ul>
			</div>
			<div className={HomepageStyles.contacts}>
				<h3>Contacts</h3>
				<ul>
					<li>
						<Link href='mailto:olawalesegun0@gmail.com'>contact@carefinder.com</Link>
					</li>
					<li>
						<Link href='tel:+23490000'>+23490000</Link>
					</li>
					<li>
						<Link href='/'>Carefinder By Mo, Chatter House</Link>
					</li>
				</ul>
			</div>
			<div className={HomepageStyles.socials}>
				<h3>Socials</h3>
				<ul>
					<li>
						<Link href='https://www.instagram.com/'>Instagram</Link>
					</li>
					<li>
						<Link href='https://www.twitter.com/web3papi_'>Twitter</Link>
					</li>
					<li>
						<Link href='https://www.linkedin.com/in/segun-nuhu-olawale-977a4b19a/'>LinkedIn</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
