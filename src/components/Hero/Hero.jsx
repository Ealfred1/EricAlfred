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
				<h2 className="text-[3.8rem] font-bold mb-[1.5rem] leading-[5rem]">Crafting Digital Experiences with Passion</h2>
				<p className="w-[80%] text-[1rem] font-semibold leading-[2rem]">
					Passionate Frontend Web Developer | Transforming ideas into Seamless and Visually Stunning Web Solutions
				</p>
			</div>
			<div className="flex-1 flex flex-col items-center gap-[2rem] mt-[2rem] hero-img">
				<div>
					<div className="tech-icon">
						<img src={ReactIcon} alt="Hero Image" />
					</div>
					<img src={Memoji} alt="React Icon" />
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