import React from "react";
import { useRef, useEffect } from "react";

import "./modal.scss";
import "./modalRes.scss";
import { FaTimesCircle } from "react-icons/fa";

import { gsap, Power3 } from "gsap";
import ReactPlayer from "react-player/lazy";
import { Button } from "semantic-ui-react";
import parse from "html-react-parser";

const Modal = (props) => {
    /* Property */

    const { projectId, changeModalStatus } = props;
    const projectSelect = props.data.find((project) => project.id === projectId);

    /* Ref : */

    let modal = useRef(null);
    let exit = useRef(null);
    let name = useRef(null);
    let description = useRef(null);
    let theme = useRef(null);
    let technology = useRef(null);
    let image = useRef(null);
    let video = useRef(null);

    const exitModal = async () => {
        await gsap.fromTo(modal, { x: 0 }, { x: 1000, autoAlpha: 0, ease: Power3.easeOut, duration: 1 });
        props.changeProjectSelected(null);
        changeModalStatus(false);
    };

    useEffect(() => {
        gsap.fromTo(modal, { x: 1000 }, { x: 0, autoAlpha: 1, duration: 1.5, delay: 0.2 });

        const tl = gsap.timeline();

        tl.to(name, { delay: 0.5, ease: Power3.easeInOut, autoAlpha: 1, duration: 0.5 });
        tl.to(theme, { ease: Power3.easeInOut, autoAlpha: 1, duration: 0.5 });
        tl.to(description, { ease: Power3.easeInOut, autoAlpha: 1, duration: 0.5 });
        // tl.to(technology, { ease: Power3.easeInOut, autoAlpha: 1,  duration: 0.5 });
        projectSelect.video
            ? tl.to(video, { ease: Power3.easeInOut, autoAlpha: 1, duration: 0.5 })
            : tl.to(image, { ease: Power3.easeInOut, autoAlpha: 1, duration: 0.5 });
        tl.to(exit, { ease: Power3.easeInOut, autoAlpha: 1, rotate: 360 });
    }, []);

    return (
        <div className="modal" ref={(elem) => (modal = elem)}>
            <div className="modal-exit" onClick={exitModal} ref={(elem) => (exit = elem)}>
                <FaTimesCircle size="25px" className="times-circle" />
            </div>
            <h3 className="project-name" ref={(elem) => (name = elem)}>
                {projectSelect.name}
            </h3>
            <p className="project-theme" ref={(elem) => (theme = elem)}>
                {projectSelect.theme}
            </p>
            <p className="project-description" ref={(elem) => (description = elem)}>
                {parse(projectSelect.description)}
            </p>

            {/*
            <div className="project-technologies">
                { projectSelect.technology.map(tech => (
                    <div className="project-technology" ref={elem => technology = elem}>#{tech.name}</div>
                )) }
                </div>
            */}

            {projectSelect.video ? (
                <div className="project-videoContainer">
                    <iframe
                        className="project-video"
                        ref={(elem) => (video = elem)}
                        src={`https://www.youtube.com/embed/${projectSelect.video}?controls=1`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            ) : (
                <div className="project-imgContainer">
                    <img src={projectSelect.image} ref={(elem) => (image = elem)} className="project-image" />
                </div>
            )}

            <div className="project-btn">
                {projectSelect.url && (
                    <Button
                        href={projectSelect.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        content="Voir le site"
                        color="green"
                        icon="search"
                    />
                )}

                {projectSelect.urlGithub && (
                    <Button
                        href={projectSelect.urlGithub}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        content="Code source"
                        color="brown"
                        icon="github"
                    />
                )}
            </div>
        </div>
    );
};

export default Modal;
