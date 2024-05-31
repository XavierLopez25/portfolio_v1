import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description:
      'Crafting visually appealing designs that align with brand identity and user needs.',
  },
  {
    icon: <RxDesktop />,
    title: 'Frontend',
    description: 'Building responsive and interactive web applications using modern technologies.',
  },
  {
    icon: <RxReader />,
    title: 'Backend',
    description: 'Developing robust server-side logic and databases to support web applications.',
  },
  {
    icon: <RxRocket />,
    title: 'API REST',
    description: 'Creating RESTful APIs for seamless communication between client/server.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc*/}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
