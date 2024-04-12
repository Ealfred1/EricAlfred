import { useState } from 'react'
import { SKILLS } from '../../utils/data.js'
import SkillCard from './SkillCard/SkillCard'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard'

const Skills = () => {
	const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

	const handleSelectSkill = (data) => {
		setSelectedSkill(data)
	}

	return (
		<section className="skills-container px-3 pt-[7rem] my-[4rem] relative" id="skills">
			<h4 className="text-[1.3rem] mb-[2rem] lg:text-[1.5rem] font-semibold lg:mb-[3.5rem]">Technical Proficiency</h4>
			<div className="skill-content pb-16 flex-col-reverse lg:flex-row flex items-start gap-[3rem]">
				<div className="skills">
					{ SKILLS.map((item) => (
						<SkillCard 
							key={item.title}
							iconUrl={item.icon}
							title={item.title}
							isActive={selectedSkill.title === item.title}
							onClick={() => handleSelectSkill(item)}
							 />
					)) }
				</div>
				<div className="skill-info w-full lg:w-auto flex-1">
					<SkillInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
				</div>
			</div>
		</section>
	)
}

export default Skills