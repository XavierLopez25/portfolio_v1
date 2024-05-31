// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaDocker } from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiVite,
  SiVitest,
  SiJest,
} from 'react-icons/si';

import { BiLogoPostgresql } from 'react-icons/bi';

import React, { useState, useEffect } from 'react';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <BiLogoPostgresql />,
          <FaDocker />,
          <SiVite />,
          <SiVitest />,
          <SiJest />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Diploma of Academic Recognition',
        stage: '2022-2024',
      },
      {
        title: 'Cloud technology and server building with AWS',
        stage: '2023-2024',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - SentiMind',
        stage: '2024-present',
      },
      {
        title: 'Backend Developer - The Cozy Whiskers',
        stage: '2024-present',
      },
      {
        title: 'Fullstack Developer - Fashion Frame Blog',
        stage: '2024-present',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'AWS Serverless APIs & Apps',
        stage: '2023',
      },
      {
        title:
          'Bachelor of Science and Letters with Orientation in Computer Science, Communications and Support Services',
        stage: '2020-2021',
      },
      {
        title: 'Computer Science and Information Technology Engineering',
        stage: '2022-present',
      },
    ],
  },
];

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const About = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1700);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1700);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
        style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*text*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-5 xl:mt-0"
          >
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            6 year ago, I started with HTML5, CSS and JS as a web developer. Since then, I've done
            many projects for a restaurant, a Warframe blog, a calculator with testing purposes, all
            of them with React + Vite. I've also done a few projects with Figma and Photoshop, in
            which there are 3 redesigns and a own design.
          </motion.p>
          {/*counters*/}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/*experience*/}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/*projects*/}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>

              {/*clients*/}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              {/*awards*/}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/*info*/}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((infoItem, infoIndex) => (
              <div
                key={infoIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{infoItem.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{infoItem.stage}</div>
                <div className="flex flex-wrap justify-center xl:justify-start gap-x-4">
                  {infoItem.title === 'Web Development'
                    ? chunkArray(infoItem.icons, 7).map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center gap-x-4 mt-2">
                          {row.map((icon, iconIndex) => (
                            <div key={iconIndex} className="text-2xl text-white">
                              {icon}
                            </div>
                          ))}
                        </div>
                      ))
                    : infoItem.icons?.map((icon, iconIndex) => (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
