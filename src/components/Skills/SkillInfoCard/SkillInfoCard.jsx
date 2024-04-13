import React from 'react'

const SkillInfoCard = ({ heading, skills }) => {
	return (
		<div className="skill-info-card">
			<h5 className="text-[1.1rem] lg:text-[1.2rem] font-semibold py-[0.8rem] px-[2rem]">{ heading }</h5>
			<div className="skill-info-content p-[1.5rem] lg:p-[2rem]">
				{ skills.map((item, index) => (
					<React.Fragment key={`skills_${index}`}>
						<div className="skill-info flex items-center justify-between">
							<p className="">{item.skill}</p>
							{/* <p className="percentage text-[#ad8cfa]">{item.percentage}</p> */}
						</div>

						<div className="skill-progress-bg w-full h-[0.5rem] bg-[#382e68] rounded-[0.5rem] my-[1rem] overflow-hidden">
							<div className={`skill-progress`} style={{ width: item.percentage }}></div>
						</div>
					</React.Fragment>
				)) }
			</div>
		</div>
	)
}

export default SkillInfoCard