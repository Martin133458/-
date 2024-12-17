import React, { useEffect } from 'react'
import "./Hero.css"
import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS


const Hero = () => {

   useEffect(() => {
      AOS.init({
        duration: 1000, // Длительность анимации в миллисекундах
        once: false,     // Анимация срабатывает только один раз при скролле
      });
    }, []);
  

  return (
    <>
    <section>
      <div className="container">
         <div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div>
         <div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="800"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="1000"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="1200" className="hero__box"></div>
         </div>
         <div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div>
         <div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div><div className="hero__wrapper">
               <div data-aos="zoom-in-up"data-aos-delay="200"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="400"  className="hero__box"></div>
               <div data-aos="zoom-in-up" data-aos-delay="600" className="hero__box"></div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Hero