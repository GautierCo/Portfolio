import React from "react";
import { useRef, useEffect } from "react";

// GSAP :
import { gsap, Power3 } from "gsap";
import { SplitText } from "gsap/SplitText";

// Font-Awesome :
import { FaLinkedin, FaGithubSquare, FaDownload } from "react-icons/fa";

// Assets :
import photo2 from "./img/avatar.jpg";
import "./presentation.scss";
import "./presentationRes.scss";

// Components :
import Particles from "../Particles/";

const Presentation = () => {
    // Activation des plugins
    gsap.registerPlugin(SplitText);

    let photoRef = useRef(null);
    let title = useRef(null);
    let titleBorder = useRef(null);
    let name = useRef(null);
    let githubRef = useRef(null);
    let linkedinRef = useRef(null);
    let cvRef = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {
        const titleSplit = new SplitText(title, { type: "words", wordsClass: "titlesplit" });
        const nameSplit = new SplitText(name, { type: "chars" });

        // Step 1 : Photo
        tl.fromTo(photoRef, { y: -1280 }, { y: 0, opacity: 100, ease: Power3.easeInOut, duration: 1 });
        tl.to(photoRef, { borderRadius: "50%", duration: 1.5, delay: 0.6 }, { y: 0 });
        // tl.to(photoRef, { border: "5px solid #1a1a1e", duration: 0.7, ease: Power3.easeOut });

        // Step 2 : Titre

        gsap.fromTo(titleSplit.words[0], 1, { x: -1200 }, { x: 0, y: 0, ease: Power3.easeOut, opacity: 100, delay: 2 });
        gsap.fromTo(titleSplit.words[1], 1, { y: -1200 }, { y: 0, y: 0, ease: Power3.easeOut, opacity: 100, delay: 2 });
        gsap.fromTo(titleSplit.words[2], 1, { x: 1200 }, { x: 0, y: 0, ease: Power3.easeOut, opacity: 100, delay: 2 });

        tl.to(titleBorder, { width: "45px", duration: 0.3 });
        tl.to(title, { opacity: 100, duration: 0.5, ease: Power3.easeIn });

        // Step 4 Name
        tl.to(nameSplit.chars, { stagger: 0.1, ease: Power3.easeOut, duration: 0.5, visibility: "visible" });

        // Github & Linkedin icons
        gsap.fromTo(githubRef, { x: -1000 }, { x: 0, autoAlpha: 1, duration: 1, ease: Power3.easeOut, delay: 3.5 });
        gsap.fromTo(linkedinRef, { x: 1000 }, { x: 0, autoAlpha: 1, duration: 1, ease: Power3.easeOut, delay: 3.5 });
        gsap.to(cvRef, { x: 0, autoAlpha: 1, duration: 1, ease: Power3.easeOut, delay: 3.5 });
    }, []);

    const animateIcon = (icon) => {
        gsap.fromTo(icon, { y: 0 }, { y: -5, ease: Power3.easeOut, yoyo: true, repeat: 1, duration: 0.3 });
    };

    return (
        <section className="presentation" id="presentation">
            <Particles></Particles>

            <h1 className="title" ref={(elem) => (title = elem)}>
                Développeur Front-end React
                <span className="title-border" ref={(elem) => (titleBorder = elem)}></span>
            </h1>
            <img src={photo2} alt="Photo colasse gautier" className="photo" ref={(elem) => (photoRef = elem)}></img>

            <h3 className="name" ref={(elem) => (name = elem)}>
                Gautier Colasse
            </h3>

            <div className="social-icons">
                <a
                    href="https://github.com/GautierCo"
                    ref={(elem) => (githubRef = elem)}
                    onMouseEnter={() => animateIcon(githubRef)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="github"
                >
                    <FaGithubSquare color="#F3D34A" className="icon" />
                </a>
                <a
                    href={"/CV_GAUTIER_COLASSE.pdf"}
                    download
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    ref={(elem) => (cvRef = elem)}
                    onMouseEnter={() => animateIcon(cvRef)}
                >
                    <FaDownload color="#F3D34A" className="icon-s" />
                </a>
                <a
                    href="https://www.linkedin.com/in/gautier-colasse-828294130/"
                    ref={(elem) => (linkedinRef = elem)}
                    onMouseEnter={() => animateIcon(linkedinRef)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="linkedin"
                >
                    <FaLinkedin color="#F3D34A" className="icon" />
                </a>
            </div>
        </section>
    );
};

export default Presentation;
