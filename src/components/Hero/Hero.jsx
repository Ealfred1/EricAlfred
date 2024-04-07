import { useState } from 'react'
import Memoji from '../../assets/memoji.jpeg'
import ReactIcon from '../../assets/react_img.png'
import HtmlIcon from '../../assets/html_img.png'
import CssIcon from '../../assets/css_img.png'
import JsIcon from '../../assets/js_img.png'
import PythonIcon from '../../assets/python_img.png'

const Hero = () => {
	return (
		<section className="hero-container">
			<div className="hero-content">
				<h2 className="text-[2.2rem] leading-[3rem] md:text-[3rem] text-center lg:text-left mt-[3rem] lg:mt-0 md:leading-[4rem] lg:text-[3.8rem] font-bold mb-[1.5rem] lg:leading-[5rem]">Crafting Digital Experiences with Passion</h2>
				<p className="text-[0.8rem] leading-[1.3rem] w-auto text-center lg:text-left lg:w-[80%] md:text-[0.9rem] md:leading-[1.6rem] lg:text-[1rem] font-semibold lg:leading-[2rem]">
					Passionate Frontend Developer and Designer | Transforming ideas into Seamless and Visually Stunning Web Solutions.<br /><br />
					Dedicated to delivering immersive online experiences that captivate and engage audiences.
				</p>
				<div className="mt-5 flex items-center justify-center gap-x-4 lg:absolute lg:left-2">
					<div className=" flex items-center justify-center border border-[#7e61e7] rounded-full h-[2.5rem] w-[2.5rem] relative">
						<a href=""><span className="pi pi-facebook"></span></a>	
					</div>
					
					<div className=" flex items-center justify-center border border-[#7e61e7] rounded-full h-[2.5rem] w-[2.5rem] relative">
						<a href=""><span className="pi pi-twitter"></span></a>
					</div>
					<div className=" flex items-center justify-center border border-[#7e61e7] rounded-full h-[2.5rem] w-[2.5rem] relative">
						<a href=""><span className="pi pi-linkedin"></span></a>	
					</div>
				</div>
			</div>
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
	)
}

export default Hero