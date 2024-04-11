import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../../assets/winsmart.png'

const SingleItem = ({ item }) => {
	const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    const animationVariants = {
        hidden: { opacity: 0, X: 300, y: 300 },
        visible: { opacity: 1, X: 0, y: 0, transition: { duration: 1, staggerChildren: 0.1 } },
    };
    console.log(item.img)

	return (
		<section className="py-36">
			<div className="container flex items-center justify-center w-full h-full">
				<motion.div 
					className="max-w-5xl h-full mx-auto flex gap-[50px] flex-col md:flex-row items-center justify-center"
					initial="hidden"
            		animate={isInView ? 'visible' : 'hidden'}
            		ref={ref}
					>
					<div className="flex-1 h-[15rem]">						
						<img src="/src/assets/taskify.png" alt={item.title} className="w-full h-full object-cover rounded-xl" />
					</div>
					<div className="text-container flex-1 flex flex-col gap-[20px] z-[2]">
						<h2 className="text-[2rem] font-bold">{ item.title }</h2>
						<p className="text-lg text-gray-300">{ item.description }</p>
						<p className="text-lg text-[#6852ba]">{ item.stack }</p>
						<a className="demo-btn" href={item.link}>View Demo</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default SingleItem