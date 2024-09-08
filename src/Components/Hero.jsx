import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/AmitProfile.jpeg";
import CV from "../../src/assets/AmitKCV.pdf";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" id="Home">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-6xl font-medium tracking-tight lg:mt-16 lg:text-6xl"
            >
              Amit Chaurasia
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                     tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* <div className="hover:bg-white p-2 rounded-lg ">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-500 md:hidden "
                download="AmitCV.pdf"
              >
                <h2 className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:text-purple-900 bg-clip-text hover:bg-white text-center">
                  Resume
                </h2>
              </a>
            </div> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
