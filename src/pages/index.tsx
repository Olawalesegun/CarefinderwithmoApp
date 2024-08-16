import { useEffect, useState } from 'react';
import Footer from '@/components/HomePage/Footer';
import Header from '@/components/HomePage/Header';
import HospitalsNear from '@/components/HomePage/HospitalsNear';
import InfoSection from '@/components/HomePage/InfoSection';
import InfoSectionTwo from '@/components/HomePage/InfoSectionTwo';
import NavBar from '@/components/HomePage/NavBar';
import PharmaciesNear from '@/components/HomePage/PharmaciesNear';
import Testimonies from '@/components/HomePage/Testimonies';
import Trust from '@/components/HomePage/Trust';
import Head from 'next/head';
import PopUpModal from '@/components/mainComp/PopUpModal';

const HomePageHeader: React.FC = () => {
	return (
		<>
			<Head>
				<title>CareFinder withMo</title>
				<meta
					name="description"
					content="Your next Stop for all things related to finding care."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<NavBar />
			<Header />
			<InfoSection />
			<InfoSectionTwo />
			<HospitalsNear />
			<PharmaciesNear />
			<Trust />
			<Testimonies />
			<Footer />
		</>
	);
};

export default HomePageHeader;
