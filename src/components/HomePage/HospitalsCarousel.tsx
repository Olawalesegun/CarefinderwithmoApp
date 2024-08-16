import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, A11y } from 'swiper';
import HomepageStyles from '@/styles/HomePage.module.css';
import MedicalCentreCard from '../hospCards/MedicalCentreCard';
import { useState, useEffect } from 'react';
import { MedicalCentreData } from '@/data/medicalCentres';

interface Hospital {
  image: string;
  hospital: string;
  location: string;
  distance: string;
  specialists: number;
  type: 'hospital' | string;
};

export default function HospitalsCarousel() {
  const [slides, setSlides] = useState<number>(3.5);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    typeof window !== 'undefined' ? window.innerWidth : undefined
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    if (windowWidth) {
      if (windowWidth <= 500) {
        setSlides(1.1);
      } else if (windowWidth <= 700) {
        setSlides(1.5);
      } else if (windowWidth <= 900) {
        setSlides(2);
      } else if (windowWidth <= 1024) {
        setSlides(2.5);
      } else if (windowWidth <= 1440) {
        setSlides(3.5);
      } else if (windowWidth >= 1500) {
        setSlides(5);
      }
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]); 

  const hospitals: Hospital[] = MedicalCentreData ? MedicalCentreData.filter(
    (item) => item.type === 'hospital') : [];

  return (
    <div className={HomepageStyles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        speed={600}
        direction={'horizontal'}
        slidesPerView={slides}
        spaceBetween={30}
        grabCursor={true}
        wrapperClass={HomepageStyles.hospitalsCarousel}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        className={HomepageStyles.swiper}  

      >
        <div className={HomepageStyles.hospitalsCarousel}>
          {hospitals.map((x, index) => (
            <SwiperSlide key={index} style={{ width: 'fit-content' }}>
              <MedicalCentreCard details={x} width={310} height={280} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
