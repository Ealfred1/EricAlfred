import { useState } from 'react'

const MobileNav = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
				<div className="w-[60vw] h-screen bg-[#342864] p-[2rem]">
					<div className="text-white text-2xl font-semibold mb-16">
						<h1 className="">Eric ✨️</h1>
					</div>
					<ul className="flex flex-col gap-4 ml-2 space-y-4">
						<li className="navlink"><a href="#home">Home</a></li>
						<li className="navlink"><a href="#home">Skills</a></li>
						<li className="navlink"><a href="#home">Projects</a></li>
						<li className="navlink"><a href="#home">Contact Me</a></li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobileNav