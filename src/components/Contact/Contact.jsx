import React from 'react'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { motion } from 'framer-motion'

const variants = {
	initial: {
		y: 500,
		opacty: 0,
	},
	animate: {
		y: 0,
		opacty: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1
		},
	},
}

const Contact = () => {
	return (
		<motion.section className="contact-container my-[4rem] relative" id="contact" variants={variants} initial="initial" whileInView="animate">
			<motion.h4 className="text-lg font-bold mb-[1rem] text-gray-500" variants={variants}>Have Something In Mind?</motion.h4>
			<motion.h2 className="text-5xl font-bold mb-[1rem] lg:mb-[3rem]" variants={variants}>Let's Bring It To Life</motion.h2>

			<motion.div className="contact-content flex flex-col-reverse lg:flex-row gap-[3rem]" variants={variants}>
				<motion.div className="flex-1" variants={variants}>
					<ContactInfoCard iconUrl="pi pi-envelope" text="alfrederic371@gmail.com" link="mailto:alfrederic371@gmail.com" />
					<ContactInfoCard iconUrl="pi pi-github" text="https://github.com/Ealfred1" link="https://github.com/Ealfred1" />
					<ContactInfoCard iconUrl="pi pi-phone" text="+2347010363424" link="https://wa.me/+2347010363424" />
				</motion.div>
				<div className="" variants={variants}></div>
			</motion.div>
		</motion.section>
	)
}

export default Contact