import React from 'react';
import { useRef, useEffect } from 'react';

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Projects from './projects';
import './portfolio.scss';
import './portfolioRes.scss';

const Portfolio = () => {

    let cardRef = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        let cardClass = cardRef.className;

        gsap.fromTo("."+cardClass, { x: 1000 }, {
            scrollTrigger: ".portfolio",
            x: 0,
            duration: 1,
            autoAlpha: 0.75,
            ease: Power3.easeInOut,
            transformPerspective:900, 
            transformOrigin:"center",
            stagger: {
                each: 0.3,
            },
          });
    });

    const cardStartEffect = (e) => {
        gsap.to(e.target, { scale: 1.1, autoAlpha: 1, ease: Power3.easeOut, duration: 0.5 })
    };

    const cardStopEffect = (e) => {
        gsap.to(e.target, { scale: 1, delay: 0, autoAlpha: 0.75, ease: Power3.easeOut, })
    };

    return (
        <section className="portfolio">

            <div className="portfolio-cards">
                { Projects.map((project, i) => (

                    <div className="portfolio-card" onMouseEnter={cardStartEffect} onMouseLeave={cardStopEffect} key={project.id} ref={ elem => cardRef = elem }>                                 
                         <img className="portfolio-logo" src={ project.logo } alt=""/> 
                        {/*<h4 className="portfolio-title">{ project.name }</h4>*/}
                    </div>

                )) }
            </div>
        </section>
    );
};

export default Portfolio;