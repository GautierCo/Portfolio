import React from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { FaRocket } from 'react-icons/fa';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './scrolltotop.scss';

const ScrollToTop = () => {

    const location = useLocation();

    const handdleScrollToTop = () => {
        scroll.scrollToTop();
        // gsap.to('.rocket', { scrollTrigger: ".presentation", y: 100, autoAlpha: 0 }) 
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.rocket', { y: 100 }, {
            scrollTrigger: ".cv",
            y: 0,
            duration: 1,
            autoAlpha: 0.85,
            ease: Power3.easeInOut,
          });
    }, []);

    return (
        <div className="scroll-totop">
            { location.hash !== '/presentation' && 
                <FaRocket className="rocket" onClick={handdleScrollToTop}/>
            }
        </div>
    );
};

export default ScrollToTop;