import React from 'react'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
	return (
		<div className={`skill-card ${isActive ? 'active' : ''}`} onClick={() => onClick()}>
			<div className="skill-icons w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] flex items-center justify-center bg-[#2a2252] rounded-[0.65rem] border border-[#6852ba] absolute top-[-1rem] left-[-1rem]">
				<div className={iconUrl}></div>
			</div>
			<span className="font-semibold text-[1rem] lg:text-[1.3rem]">{ title }</span>
		</div>
	)
}

export default SkillCard