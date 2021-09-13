import React from "react";
import { useRef, useEffect } from "react";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaEye } from "react-icons/fa";

import "./portfolio.scss";
import "./portfolioRes.scss";

import Modal from "./Modal";

const Portfolio = (props) => {
    const { projects, projectSelected, changeProjectSelected, modalStatus, changeModalStatus } = props;

    const reverseProjects = [...projects].reverse();

    const showAllProjects = () => {
        gsap.fromTo(
            ".portfolio-card",
            { y: 30 },
            {
                scrollTrigger: ".portfolio",
                y: 0,
                duration: 1,
                autoAlpha: 0.85,
                ease: Power3.easeInOut,
                // transformPerspective:900,
                transformOrigin: "center",
                stagger: {
                    each: 0.3,
                },
            }
        );
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        showAllProjects();
    }, []);

    const cardStartEffect = (e) => {
        gsap.to(e.target.children[0], { scale: 1.1, autoAlpha: 0.1, ease: Power3.easeOut, duration: 0.5 });
        gsap.to(e.target.children[1], { autoAlpha: 1, ease: Power3.easeOut, duration: 0.5 });
        gsap.to(e.target.children[1], { rotate: -360, scale: 1.1, repeat: 1, yoyo: true, duration: 0.5 });
    };

    const cardStopEffect = (e) => {
        gsap.to(e.target.children[0], { scale: 1, delay: 0, autoAlpha: 1, ease: Power3.easeOut });
        gsap.to(e.target.children[1], { rotate: 0, autoAlpha: 0, ease: Power3.easeOut, duration: 0.5 });
    };

    const moveAllProjectsWithModal = () => {
        const tl = gsap.timeline();

        tl.to(".portfolio-card", { autoAlpha: 0, delay: modalStatus ? 0.3 : 0 });
        tl.fromTo(
            ".portfolio-card",
            { x: 0 },
            {
                x: 0,
                duration: 1.5,
                autoAlpha: 0.85,
                ease: Power3.easeInOut,
                stagger: {
                    each: 0.3,
                },
            }
        );
    };

    const showProjectInModal = (projectId) => {
        return () => {
            changeModalStatus(true);

            if (modalStatus === false) {
                moveAllProjectsWithModal();
            }

            changeProjectSelected(projectId);
        };
    };

    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-cards">
                {reverseProjects.map((project) => (
                    <div
                        className="portfolio-card"
                        onClick={showProjectInModal(project.id)}
                        onMouseEnter={cardStartEffect}
                        onMouseLeave={cardStopEffect}
                        key={project.id}
                    >
                        <img className="portfolio-logo" src={project.logo} alt="" />
                        <div className="portfolio-card-hover">
                            <FaEye size="32px" />
                        </div>
                    </div>
                ))}
            </div>

            {projectSelected && (
                <Modal
                    projectId={props.projectSelected}
                    data={props.projects}
                    changeProjectSelected={props.changeProjectSelected}
                    changeModalStatus={changeModalStatus}
                    moveAllProjectsWithModal={moveAllProjectsWithModal}
                    showAllProjects={showAllProjects}
                />
            )}
        </section>
    );
};

export default Portfolio;
