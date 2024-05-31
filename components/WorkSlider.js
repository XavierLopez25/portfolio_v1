import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'University Knowledge',
          path: '/UniversityKnowledge.png',
          link: 'https://xtsebas.github.io/',
        },
        {
          title: 'Live Chat',
          path: '/Live Chat.png',
          link: 'https://tiburoncin.lat/22716/Lab05_WEB/index.html',
        },
        {
          title: 'Warframe Blog',
          path: '/Warframe Blog.png',
          link: 'https://tiburoncin.lat/22716/warframe_blog_react/index.html',
        },
        {
          title: 'Fashion Frame Blog',
          path: '/Fashion Frame Blog.png',
          link: 'https://fashion-frame-blog.vercel.app/home',
        },
      ],
    },
    {
      images: [
        {
          title: 'The Cozy Whiskers',
          path: '/The Cozy Whiskers.png',
          link: 'https://the-cozy-whiskers.vercel.app/',
        },
        {
          title: 'Calculator with Testing',
          path: '/Calculator with Testing.png',
          link: 'https://calculator-testing.vercel.app/calculator',
        },
        {
          title: 'TikTok Zenith [TikTok Redesign]',
          path: '/TikTok Zenith.png',
          link: 'https://www.canva.com/design/DAF68JFJWeY/lBOQXIITUUe4Zt-vxWBjOw/edit?utm_content=DAF68JFJWeY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        },
        {
          title: 'Whatpay!? [WhatsApp Redesign]',
          path: '/Whatpay.png',
          link: 'https://www.figma.com/proto/4hQQyr8BJHPzZp6Z60sJL0/WhatPay!%3F-by-Xavier-L%C3%B3pez?node-id=0-2&t=dCkZqdumUtMrYSmR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2',
        },
      ],
    },
    {
      images: [
        {
          title: 'Steam for Moms [Redesign]',
          path: '/Steam for Moms.png',
          link: 'https://www.figma.com/proto/7pqb1JbBFcTaezDtFpzBJZ/Steam-for-Moms?page-id=0%3A1&node-id=64-3&viewport=1135%2C346%2C0.06&t=B2xR0wGeLspZJJBh-1&scaling=scale-down&starting-point-node-id=64%3A3',
        },
        {
          title: 'SentiMind',
          path: '/SentiMind.png',
          link: 'https://www.figma.com/proto/yM1WLqS1n7EEylrLXgaE8v/SentiMind?page-id=0%3A1&node-id=18-15&viewport=896%2C613%2C0.26&t=7ntgFT77Bsi4oZfD-1&scaling=scale-down&starting-point-node-id=1%3A2', // Add the correct link here if available
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a
                    href={image.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center
                  justify-center group"
                      key={index}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt="" />
                        {/* overlay gradient*/}
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                        ></div>
                        {/*title */}
                        <div
                          className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/*title part 1*/}
                            <div className="delay-100">LIVE</div>
                            {/*title part 1*/}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/*icon*/}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
