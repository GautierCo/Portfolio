import React from 'react';
import { useRef, useEffect } from 'react';

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './portfolio.scss';
import './portfolioRes.scss';
import Modal from './Modal';

const Portfolio = (props) => {

    let cardRef = useRef(null);
    const projects = props.projects;
    const projectSelected = props.projectSelected;
    const changeProjectSelected = props.changeProjectSelected;
    
    /*
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
*/
    const cardStartEffect = (e) => {
        gsap.to(e.target, { scale: 1.1, autoAlpha: 1, ease: Power3.easeOut, duration: 0.5 })
    };

    const cardStopEffect = (e) => {
        gsap.to(e.target, { scale: 1, delay: 0, autoAlpha: 0.75, ease: Power3.easeOut, })
    };

    const showProjectInModal = (projectId) => {

        return () => {
            props.changeProjectSelected(projectId)
        };
    };

    return (
        <section className="portfolio">

            <div className="portfolio-cards">

                { projects.map(project => (
                    <div className="portfolio-card" onClick={showProjectInModal(project.id)} onMouseEnter={cardStartEffect} onMouseLeave={cardStopEffect} key={project.id} ref={ elem => cardRef = elem }>                                 
                         <img className="portfolio-logo" src={ project.logo } alt=""/> 
                    </div>
                )) }

            </div>

            { projectSelected && <Modal projectId={props.projectSelected} data={props.projects}/> }
            
        </section>
    );
};

export default Portfolio;