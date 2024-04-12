import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SingleItem = ({ item }) => {
    const { ref, inView } = useInView();

    const animationVariants = {
        hidden: { opacity: 0, x: 70, y: 0 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, staggerChildren: 0.1 } },
    };

    return (
        <section className="py-16 md:py-36 overflow-x-hidden">
            <div className="container flex items-center justify-center w-full h-full">
                <motion.div
                    className="max-w-5xl h-full mx-auto flex gap-[50px] flex-col md:flex-row md:items-center md:justify-center px-2"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants}
                >
                    <div className="flex-1 h-[15rem]">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="text-container flex-1 flex flex-col gap-[20px] z-[2]">
                        <h2 className="text-[2rem] font-bold">{item.title}</h2>
                        <p className="text-lg text-gray-300">{item.description}</p>
                        <p className="text-lg text-[#6852ba]">{item.stack}</p>
                        <a className="demo-btn" href={item.link}>View Demo</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SingleItem;
