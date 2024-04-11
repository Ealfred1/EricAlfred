import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const SingleItem = ({ item }) => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({ 
		target: ref, 
		// offset: ["start start", "end start"],
	})

	const y = useTransform(scrollYProgress, [0,1], ["-300", "300"])

	return (
		<section className="py-96">
			<div className="container flex items-center justify-center w-full h-full overflow-hidden">
				<div className="max-w-5xl h-full mx-auto flex gap-[50px] items-center justify-center">
					<div className="flex-1 h-[50%]" ref={ref}>						
						<img src={item.img} alt="" className="w-full h-full object-cover" />
					</div>
					<motion.div className="text-container flex-1 flex flex-col gap-[20px] z-[3]" style={{ y }}>
						<h2 className="text-[2rem] font-bold">{ item.title }</h2>
						<p className="text-lg text-gray-300">{ item.description }</p>
						<p className="text-lg text-[#6852ba]">{ item.stack }</p>
						<button className="demo-btn">View Demo</button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default SingleItem