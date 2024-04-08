import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PeopleImg from '../../assets/bg2.jpg'
import servicesData from '../../data/services.json'

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
}

const Services = () => {
	const ref = useRef()
	const isInView = useInView(ref, {margin: "-100px"})

	return (
		<motion.section className="services-container pb-3 mb-48 flex items-center flex-col justify-between" variants={variants} initial="initial" whileInView="animate">
			<motion.div className="mb-[2rem] flex-[2] flex flex-col items-center" variants={variants} >
				<motion.div className="flex">
					<h1 className="text-[2rem] md:text-6xl font-bold">The<span className="span hover:text-[#6852ba] duration-200"> Services</span> I Render</h1>
				</motion.div>
			</motion.div>
			<motion.div className="text-container flex-1 self-end flex items-center gap-[20px] mb-5" variants={variants}>
				<p className="text-[0.8rem] md:text-[1rem] font-[200] text-gray-400 text-right">I focus on helping your brand grow 
				<br /> and move forward!</p>
				<hr className="md:w-[250px] border-t border-t-[0.5px] border-t-gray-500" />
			</motion.div>
			<motion.div className="overflow-hidden flex flex-col gap-3 flex-nowrap justify-start md:flex-row md:flex-wrap md:justify-around md:gap-4 lg:flex-row lg:gap-[24px]" variants={variants}>
				{ servicesData.map((service) => (
					<motion.div key={service.id} className="services-box">
						<h2>{ service.title }</h2>
						<p>{ service.description }</p>
					</motion.div>
				)) }
			</motion.div>
		</motion.section>
	)
}

export default Services
