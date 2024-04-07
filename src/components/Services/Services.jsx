import { useState } from 'react'
import { motion } from 'framer-motion'
import PeopleImg from '../../assets/bg2.jpg'

const Services = () => {
	return (
		<motion.section className="services-container pb-3 mb-48 flex items-center flex-col justify-between">
			<motion.div className="text-container flex-1 self-end flex items-center gap-[20px]">
				<p className="text-[0.8rem] md:text-[1rem] font-[200] text-gray-400 text-right">I focus on helping your brand grow 
				<br /> and move forward!</p>
				<hr className="w-[250px] border-t border-t-[0.5px] border-t-gray-500" />
			</motion.div>
			<motion.div className="title-container flex-[2] flex flex-col items-center">
				<div className="title">
					<img src={PeopleImg} alt="People Image" className="w-[250px] h-[90px] rounded-[90px] object-cover" />
					<h1 className="text-5xl"><span className="font-bold">Unique</span> Ideas</h1>
				</div>
				<div className="title">
					<h1 className="text-5xl"><span className="font-bold">For Your</span> Business.</h1>
				</div>
			</motion.div>
			<motion.div className="list-containenr">
				<div className="box">
					
				</div>
			</motion.div>
		</motion.section>
	)
}

export default Services