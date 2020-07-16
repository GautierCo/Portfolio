import React from 'react';
import { useRef, useEffect } from 'react';

import './modal.scss';
// import './modalRes.scss';
import { FaTimesCircle } from 'react-icons/fa';

import { gsap, Power3 } from "gsap";

const Modal = (props) => {

    /* Property */

    const projectId = props.projectId;
    const projectSelect = props.data.find(project => project.id == projectId );

    /* Ref : */

    let modal = useRef(null);
    let exit = useRef(null);
    let name = useRef(null);
    let description = useRef(null);
    let theme = useRef(null);
    let technology = useRef(null);
    let logo = useRef(null);

    const exitModal = async () => {
        
        await gsap.fromTo(modal, { x: 0 } ,{ x: 1000, width: "0%", duration: 1 });
        props.changeProjectSelected(null);
    };

    useEffect(() => {

        console.log(technology)
        gsap.fromTo(modal, { x: 1000 } ,{ x: 0, width: "100%", duration: 1.5 });

        const tl = gsap.timeline();

        tl.to(name, { delay: 0.5, ease: Power3.easeInOut, autoAlpha: 1,  duration: 0.5 });
        tl.to(theme, { ease: Power3.easeInOut, autoAlpha: 1,  duration: 0.5 });
        tl.to(description, { ease: Power3.easeInOut, autoAlpha: 1,  duration: 0.5 });

        
            tl.to(technology, { ease: Power3.easeInOut, autoAlpha: 1,  duration: 0.5 });
      
        

        tl.to(logo, { ease: Power3.easeInOut, autoAlpha: 1,  duration: 0.5 });
        tl.to(exit, { ease: Power3.easeInOut, autoAlpha: 1, rotate: 360 });
 
    }, [] );

    return (
        <div className="modal" ref={elem => modal = elem}>
            <div className="modal-exit" onClick={exitModal} ref={elem => exit = elem}>
                <FaTimesCircle size="25px" className="times-circle" />
            </div>
            <h3 className="project-name" ref={elem => name = elem}>{ projectSelect.name }</h3>
            <p className="project-theme" ref={elem => theme = elem}>{ projectSelect.theme }</p>
            <p className="project-description" ref={elem => description = elem}>{ projectSelect.description }</p>
            
            <div className="projects-technologies">
                { projectSelect.technology.map(tech => (
                    <div className="project-technology" ref={elem => technology = elem}>#{tech.name}</div>
                )) }
            </div>
            
            <img className="project-logo" ref={elem => logo = elem} src={ projectSelect.logo } alt=""/>
            <a href={projectSelect.url}  className="project-url" target="_blank">Visiter</a>
        </div>
    )
};

export default Modal;