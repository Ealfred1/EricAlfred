import React from 'react'

const ContactInfoCard = ({ iconUrl, text, link }) => {
	return (
		<div className="flex flex-col items-center justify-center bg-[#130f2a] rounded-[0.65rem] border border-[#6751b9] p-[1.5rem] mb-[2rem]">
			<div className="icon w-[4rem] h-[4rem] flex items-center justify-center rounded-[0.5rem] bg-[#3d3072] mb-[0.8rem] ">
				<span className={`${iconUrl} text-[1.8rem] `}></span>
			</div>
			<a href={link} className="text-[0.9rem] font-medium hover:underline">{ text }</a>
		</div>
	)
}

export default ContactInfoCard