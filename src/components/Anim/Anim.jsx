import React from 'react';
import './Anim.css';

import { motion } from "framer-motion"; // Убедитесь, что Framer Motion установлен

const Anim = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="anim__wrap">
                        <motion.div 
                            className='anim__box' 
                            drag
                            dragSnapToOrigin 
                            dragConstraints={{ left: -500, right: 500, top: 100, bottom: 500 }} // Ограничения для перетаскивания
                            whileDrag={{ scale: 1.1 }} // Анимация при перетаскивании
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Anim;
