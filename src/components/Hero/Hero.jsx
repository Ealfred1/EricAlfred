import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Memoji from '../../assets/memoji.jpeg';
import ReactIcon from '../../assets/react_img.png';
import HtmlIcon from '../../assets/html_img.png';
import CssIcon from '../../assets/css_img.png';
import JsIcon from '../../assets/js_img.png';
import PythonIcon from '../../assets/python_img.png';

const Hero = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	  useEffect(() => {
	    const handleResize = () => {
	      setIsMobileView(window.innerWidth <= 640); // Adjust the breakpoint as needed
	    };

	    handleResize(); // Check initially
	    window.addEventListener('resize', handleResize); // Listen for resize events

	    return () => {
	      window.removeEventListener('resize', handleResize); // Cleanup
	    };
  }, []);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariants = {
  	initial: {
  		x: 0,
  	},
  	animate: {
  		x: "-220%",
  		transition: {
  			repeat: Infinity,
  			repeatType: "mirror",
  			duration: 20,
  		},
  	},
  }

  return (
    <section className={`hero-container`}>
      <motion.div
        className="hero-content"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-[2.2rem] leading-[3rem] md:text-[3rem] text-center lg:text-left mt-[3rem] lg:mt-0 md:leading-[4rem] lg:text-[3.8rem] font-bold mb-[1.5rem] lg:leading-[5rem]"
          variants={textVariants}
        >
          Crafting Digital Experiences with Passion
        </motion.h2>
        <motion.p
          className="text-[0.8rem] leading-[1.3rem] w-auto text-center lg:text-left lg:w-[80%] md:text-[0.9rem] md:leading-[1.6rem] lg:text-[1rem] font-semibold lg:leading-[2rem]"
          variants={textVariants}
        >
          Passionate Frontend Developer and Designer | Transforming ideas into
          Seamless and Visually Stunning Web Solutions.
          <br />
          <br />
          Dedicated to delivering immersive online experiences that captivate
          and engage audiences.
        </motion.p>
        <motion.div
          className="mt-5 flex items-center justify-center gap-x-4 lg:absolute lg:left-2 cursor-pointer"
          variants={textVariants}
        >
          <motion.div
            className="flex items-center justify-center border border-[#7e61e7] rounded-full h-[2.5rem] w-[2.5rem]"
            variants={textVariants}
          >
            <a href="https://m.facebook.com/profile.php?id=100086285746377">
              <span className="pi pi-facebook text-center text-[#a993fe]"></span>
            </a>
          </motion.div>

          <motion.div
            className=" flex items-center justify-center border border-[#7e61e7] rounded-full h-[2.5rem] w-[2.5rem] relative"
            variants={textVariants}
          >
            <a href="">
              <span className="pi pi-twitter text-center text-[#a993fe]"></span>
            </a>
          </motion.div>
          <motion.div
            className=" flex items-center justify-center border border-[#7e61e7] rounded-full h-[2.5rem] w-[2.5rem] relative"
            variants={textVariants}
          >
            <a href="">
              <span className="pi pi-linkedin text-center text-[#a993fe]"></span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
       <motion.div
        className="slidingContainer w-[50%] z-[-2] font-bold absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
      	Creative Web Developer
      </motion.div>
      <div className="flex-1 flex flex-col items-center gap-[1rem] md:gap-[2rem] my-[2rem] lg:mt-[2rem] hero-img">
        <div>
          <div className="tech-icon">
            <img src={ReactIcon} alt="React Icon" />
          </div>
          <img src={Memoji} alt="Memoji" className="rounded-3xl" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={HtmlIcon} alt="Html Icon" />
          </div>
          <div className="tech-icon">
            <img src={CssIcon} alt="Css Icon" />
          </div>
          <div className="tech-icon">
            <img src={JsIcon} alt="Js Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
