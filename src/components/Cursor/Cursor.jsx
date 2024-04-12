import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
	const [position, setPosition] = useState({ x:0, y:0 })

	useEffect(() => {
		const mousemove = (e) => {
			setPosition({ x:e.clientX, y:e.clientY })
		}

		window.addEventListener("mousemove", mousemove)

		return () => {
			window.removeEventListener("mousemove", mousemove)
		}
	}, [])

	return (
		<motion.div className="w-[30px] h-[30px] rounded-full fixed z-[9999] border border-white flex items-center justify-center" animate={{ x:position.x+10, y:position.y+10 }}>
			<span className="w-[10px] h-[10px] rounded-full bg-[#a993fe]"></span>
		</motion.div>
	)
}

export default Cursor