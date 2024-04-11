import { useState, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import project from '../../data/projects.json' 
import SingleItem from './SingleItem'

const Projects = () => {
	const ref = useRef()
	const { scrollYProgress } = useScroll({ 
		target: ref, 
		offset: ["end end", "start start"] 
	})
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	})

	return (
		<section id="projects" className="project-container relative" ref={ref}>
		<div className="progress sticky top-0 left-0 pt-[50px] text-center text-white text-[2rem] md:text-6xl font-bold bg-transparent backdrop-blur-3xl z-[1000]">
			<h2 className="">Featured Works</h2>
			<motion.div style={{ scaleX }} className="progress-bar mt-3 h-[8px] rounded-[2rem] bg-[#6751b9]"></motion.div>
		</div>

			{ project.map((item) => (
				<SingleItem item={item} key={item.id} />
			)) }
		</section>
	)
}

export default Projects