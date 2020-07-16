import React from 'react';
import { useRef, useEffect } from 'react';

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaEye } from 'react-icons/fa';

import './portfolio.scss';
import './portfolioRes.scss';

import Modal from './Modal';

const Portfolio = (props) => {

    let cardRef = useRef(null);
    let cardHoverRef = useRef(null);
    const projects = props.projects;
    const projectSelected = props.projectSelected;
    const changeProjectSelected = props.changeProjectSelected;
    
   
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        let cardClass = cardRef.className;

        gsap.fromTo("."+cardClass, { x: 2000 }, {
            scrollTrigger: ".portfolio",
            x: 0,
            duration: 1,
            autoAlpha: 0.85,
            ease: Power3.easeInOut,
            transformPerspective:900, 
            transformOrigin:"center",
            stagger: {
                each: 0.3,
            },
          });
    }, []);

    const cardStartEffect = (e) => {
        gsap.to(e.target.children[0], { scale: 1.1, autoAlpha: 0.10, ease: Power3.easeOut, duration: 0.5 })
        gsap.to(e.target.children[1], {  autoAlpha: 1, ease: Power3.easeOut, duration: 0.5 })
        gsap.to(e.target.children[1], {  rotate: -360, scale: 1.1, repeat: 1, yoyo: true, duration: 0.5 })
    };

    const cardStopEffect = (e) => {
        gsap.to(e.target.children[0], { scale: 1, delay: 0, autoAlpha: 1, ease: Power3.easeOut, })
        gsap.to(e.target.children[1], {  rotate: 0, autoAlpha: 0, ease: Power3.easeOut, duration: 0.5 })
    };

    const showProjectInModal = (projectId) => {

        return () => {
            changeProjectSelected(projectId);
        };
    };

    return (
        <section className="portfolio">

            <div className="portfolio-cards">

                { projects.map(project => (
                    <div className="portfolio-card" onClick={showProjectInModal(project.id)} onMouseEnter={cardStartEffect} onMouseLeave={cardStopEffect} key={project.id} ref={ elem => cardRef = elem }>                                 
                         <img className="portfolio-logo" src={ project.logo } alt=""/>
                         <div className="portfolio-card-hover" ref={ elem => cardHoverRef = elem }>
                             <FaEye />
                         </div>
                    </div>
                )) }

            </div>

            {  projectSelected && <Modal projectId={props.projectSelected} data={props.projects} changeProjectSelected={props.changeProjectSelected} /> }
            
        </section>
    );
};

export default Portfolio;