import { useState } from 'react'
import MobileNav from './MobileNav/MobileNav'

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
			<nav className="bg-[rgba(0,0,0,0.1)] py-2 sticky top-0 z-[30] backdrop-blur-3xl">
				<div className="max-w-5xl flex items-center justify-between py-4 mx-auto px-[1.8rem] md:px-[2rem]">
					<div className="text-white text-2xl font-semibold">
						<h1 className="">Eric ✨️</h1>
					</div>

					<ul className="flex items-center gap-2 space-x-10 hidden md:flex">
						<li className="navlink"><a href="#home">Home</a></li>
						<li className="navlink"><a href="#skills">Skills</a></li>
						<li className="navlink"><a href="#services">Services</a></li>
						<li className="navlink"><a href="#projects">Projects</a></li>
						<li className="navlink"><a href="#contact">Contact Me</a></li>
					</ul>
					
					<button className="menu-btn" onClick={toggleMenu}><span className={`pi ${openMenu ? 'pi-times' : 'pi-bars'} text-[1rem]`}></span></button>
				</div>
			</nav>
		</>
	)
}

export default Navbar