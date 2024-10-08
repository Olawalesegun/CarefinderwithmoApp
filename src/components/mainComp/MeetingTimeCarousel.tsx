import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PopUpModal from '@/styles/PopUpModal.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface MeetingDateCarouselProps {
  formUpdate: (field: string, value: string) => void;
}

interface TimeSlot {
  value: string;
}

export default function MeetingDateCarousel({ formUpdate }: MeetingDateCarouselProps): JSX.Element {
  const timeArray: TimeSlot[] = [];
  const start = 7 * 60;
  const end = 11.25 * 60;
  const interval = 15;

  for (let i = start; i < end; i += interval) {
    const time = `${Math.floor(i / 60)}:${(i % 60)
      .toString()
      .padStart(2, '0')}`;
    timeArray.push({ value: time });
  }

  return (
    <div className={PopUpModal.swiperTimeContainer}>
      <Swiper
        navigation={{
          nextEl: '.image6-swiper-button-next',
          prevEl: '.image6-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        modules={[Navigation]}
        slidesPerView={3.5}
        spaceBetween={30}
        wrapperClass={PopUpModal.wrapper}
        className={PopUpModal.swiper}
      >
        {timeArray.map((slot, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => formUpdate('meetingTime', slot.value)}
              className={PopUpModal.timeCarouselContainer}
            >
              <div className={PopUpModal.timeCarouselItem}>
                <h2>{slot.value}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
