import { SliderProps } from './Slider.props';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Slide } from '../Slide/Slide';


export const Slider = ({ id, picked_photo, photo_urls, isVoted }: SliderProps): JSX.Element => {
    return (
        <Swiper className={styles.slider}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            loop={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
            {
                isVoted ?
                    [photo_urls[picked_photo], ...photo_urls.filter((_, index) => index !== picked_photo)].map((p, i) => (
                        <SwiperSlide key={p}>
                            <Slide photo={p} alt={id + ' image ' + i} />
                        </SwiperSlide>
                    ))
                : 
                    <SwiperSlide>
                        <Slide photo={photo_urls[picked_photo]} alt={id + ' image 1'} />
                    </SwiperSlide>
            }
        </Swiper>
    );
};