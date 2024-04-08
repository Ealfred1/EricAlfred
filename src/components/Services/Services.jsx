import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/services.json';

const Services = () => {
    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    const animationVariants = {
        hidden: { opacity: 0, y: 300 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.1 } },
    };

    return (
        <motion.section
            className="services-container pb-3 mb-48 flex items-center flex-col justify-between"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            ref={ref}
        >
            <div className="mb-[2rem] flex-[2] flex flex-col items-center">
                <div className="flex">
                    <h1 className="text-[2rem] md:text-6xl font-bold">
                        The<span className="span hover:text-[#6852ba] duration-200"> Services</span> I Render
                    </h1>
                </div>
            </div>
            <div className="text-container flex-1 self-end flex items-center gap-[20px] mb-5">
                <p className="text-[0.8rem] md:text-[1rem] font-[200] text-gray-400 text-right">
                    I focus on helping your brand grow
                    <br /> and move forward!
                </p>
                <hr className="md:w-[250px] border-t border-t-[0.5px] border-t-gray-500" />
            </div>
            <motion.div
                className="overflow-hidden flex flex-col gap-3 flex-nowrap justify-start md:flex-row md:flex-wrap md:justify-around md:gap-4 lg:flex-row lg:gap-[24px]"
                variants={animationVariants}
            >
                {servicesData.map((service) => (
                    <motion.div key={service.id} className="services-box" variants={animationVariants}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Services;
