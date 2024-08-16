import HomepageStyles from '@/styles/HomePage.module.css';
import { useRouter } from 'next/router';

export default function Header() {
	const route = useRouter();
	return (
		<div className={HomepageStyles.headerContainer}>
			<header>
				<div className={HomepageStyles.headerText}>
					<h1>Your Next Stop For Quick Medical Access</h1>
					<p>
						Find the nearest hospital to you to get quick medical access today.
					</p>
					<div className={HomepageStyles.heroButtonsContainer}>
						<button
							className='Primary-Button'
							onClick={() => route.push('/Explore')}
						>
							Click To Start
						</button>
						<button className='Secondary-Button'>Learn More</button>
					</div>
				</div>
				<div className={HomepageStyles.headerImage}> </div>
			</header>
		</div>
	);
}
