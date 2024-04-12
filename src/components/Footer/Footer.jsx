import React from 'react'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<div className="flex justify-between items-center mt-10 p-6 border-t border-t-[#6751b9]">
			<div>&copy; Eric Alfred {year}</div>
			<div className="flex items-center justify-center gap-x-4 cursor-pointer">
	          <div className="social-icon">
	            <a href="https://m.facebook.com/profile.php?id=100086285746377" className='grid place-content-center'>
	              <span className="pi pi-facebook text-center text-[#a993fe]"></span>
	            </a>
	          </div>

	          <div className="social-icon">
	            <a href="" className="grid place-content-center">
	              <span className="pi pi-twitter text-center text-[#a993fe]"></span>
	            </a>
	          </div>
	          <div className="social-icon">
	            <a href="" className="grid place-content-center">
	              <span className="pi pi-linkedin text-[#a993fe]"></span>
	            </a>
	          </div>
        </div>
		</div>
	)
}

export default Footer