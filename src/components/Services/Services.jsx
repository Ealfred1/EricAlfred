import { useState } from 'react'
import { motion } from 'framer-motion'
import PeopleImg from '../../assets/bg2.jpg'

const Services = () => {
	return (
		<motion.section className="services-container pb-3 mb-48 flex items-center flex-col justify-between">
			<motion.div className="mb-[2rem] flex-[2] flex flex-col items-center">
				<div className="flex">
					<h1 className="text-[2rem] md:text-6xl font-bold">The<span className="span"> Services</span> I Render</h1>
				</div>
			</motion.div>
			<motion.div className="text-container flex-1 self-end flex items-center gap-[20px] mb-5">
				<p className="text-[0.8rem] md:text-[1rem] font-[200] text-gray-400 text-right">I focus on helping your brand grow 
				<br /> and move forward!</p>
				<hr className="md:w-[250px] border-t border-t-[0.5px] border-t-gray-500" />
			</motion.div>
			<motion.div className="overflow-hidden flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-around md:gap-4 lg:flex lg:flex-row lg:gap-[24px]">
				<div className="services-box">
					<h2>Custom Web Development</h2>
					<p>I create beautiful interfaces with HTML</p>
				</div>
				<div className="services-box">
					<h2>Custom Web Development</h2>
					<p>I create beautiful interfaces with HTML</p>
				</div>
				<div className="services-box">
					<h2>Custom Web Development</h2>
					<p>I create beautiful interfaces with HTML</p>
				</div>
				<div className="services-box">
					<h2>Custom Web Development</h2>
					<p>I create beautiful interfaces with HTML</p>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default Services
