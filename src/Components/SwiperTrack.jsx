// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles/stylesSwiperTrack.css';

// import required modules
import { FreeMode } from 'swiper';

import TrackBlock from './BlockTrack';

function SwiperTrack({ blocks }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="swiperTrack"
      >
        {blocks?.map(block => (
          <SwiperSlide key={`block${block.name}`}>
            <TrackBlock key={block?.name} block={block} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperTrack;
