import { useState } from 'react'

const Navbar = () => {
	return (
		<>
			<nav className="bg-[rgba(0,0,0,0.1)] py-2 sticky top-0 z-[30] backdrop-blur-3xl">
				<div className="max-w-5xl flex items-center justify-between py-4 mx-auto">
					<div className="text-white text-2xl font-semibold">
						<h1 className="">Eric ✨️</h1>
					</div>

					<ul className="flex items-center gap-2 space-x-10">
						<li className="navlink"><a href="#home">Home</a></li>
						<li className="navlink"><a href="#home">Skills</a></li>
						<li className="navlink"><a href="#home">Projects</a></li>
						<li className="navlink"><a href="#home">Contact Me</a></li>
					</ul>

					<button className="menu-btn"></button>
				</div>
			</nav>
		</>
	)
}

export default Navbar