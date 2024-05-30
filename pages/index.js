import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 
        xl:text-left h-full container mx-auto"
        >
          {/* title*/}
          <h1 className="h1">
            Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            As a student at Universidad del Valle de Guatemala studying Computer Science and
            Information Technology Engineering, I'm embracing a full-stack developer mindset, I
            integrate knowledge across backend systems, frontend interfaces, AI technologies, and
            database management. My goal is to transform ideas into digital reality, creating
            comprehensive and secure solutions.
          </p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div> image </div>
    </div>
  );
};

export default Home;
