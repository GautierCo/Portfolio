import React from 'react';
import { useRef, useEffect } from 'react';

// GSAP : 
import { gsap, Power3 } from "gsap";
import { SplitText } from "gsap/SplitText";

// Font-Awesome :
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

// Assets :
import photo2 from './img/02.jpg';
import './presentation.scss';
import './presentationRes.scss';

const Presentation = () => {

    // Activation des plugins
    gsap.registerPlugin( SplitText );

    let photoRef = useRef(null);
    let title = useRef(null);
    let titleBorder = useRef(null);
    let name = useRef(null);
    let githubRef = useRef(null);
    let linkedinRef = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {

        /* Path 
        gsap.to("#rect", {
            duration: 5, 
            repeat: 12,
            repeatDelay: 3,
            yoyo: true,
            ease: "power1.inOut",
            motionPath:{
              path: "#path",
              align: "#path",
              autoRotate: true,
              alignOrigin: [0.5, 0.5]
            }
        });
        */

        const titleSplit = new SplitText(title, { type: "words", wordsClass: "titlesplit" });
        const nameSplit = new SplitText(name, { type: "chars" });

        // Step 1 : Photo
        tl.fromTo(photoRef, { y: -1280 }, {y: 0, opacity: 100, ease: Power3.easeInOut, duration: 1})
        tl.to(photoRef, { borderRadius: "50%", duration: 1.5, delay: 0.6 }, {y: 0})
        tl.to(photoRef, { border: "5px solid #1a1a1e", duration: 0.7, ease: Power3.easeOut})
 
        // Step 2 : Titre
        
        gsap.fromTo(titleSplit.words[0], 1 , { x: -1200 }, { x: 0, y: 0, ease: Power3.easeOut, opacity: 100, delay: 2 });
        gsap.fromTo(titleSplit.words[1], 1 , { y: -1200 }, { y: 0, y: 0, ease: Power3.easeOut, opacity: 100, delay: 2 });
        gsap.fromTo(titleSplit.words[2], 1 , { x: 1200 }, { x: 0, y: 0, ease: Power3.easeOut, opacity: 100, delay: 2 });

        tl.to(titleBorder, { width: '45px', duration: 0.3 });
        tl.to(title, { opacity: 100, duration: 0.5, ease: Power3.easeIn })

        // Step 4 Name
        tl.to(nameSplit.chars, { stagger: 0.1, ease: Power3.easeOut, duration: 0.5, visibility: "visible"});

        // Github & Linkedin icons
        gsap.fromTo(githubRef, { x: -1000  }, { x: 0, autoAlpha: 1, duration: 1,  ease: Power3.easeOut, delay: 3.5 });
        gsap.fromTo(linkedinRef, { x: 1000  }, { x: 0, autoAlpha: 1, duration: 1,  ease: Power3.easeOut, delay: 3.5 });

    }, []);
   

    const animateIcon = (e) => {
        gsap.fromTo(e.target, { y: 0 } , { y: -5, ease: Power3.easeOut, yoyo: true, repeat: 1} );
    };

    return (
        <div className="container">

            <section className="presentation">

                <h1 className="title" ref={ elem => title = elem }>Développeur Front-end Junior
                    <span className="title-border" ref={ elem => titleBorder = elem }></span>
                </h1>
                <img src={ photo2 } alt="Photo colasse gautier" className="photo" ref={ elem => photoRef = elem } ></img>
                
                <h3 className="name" ref={ elem => name = elem }>Gautier Colasse</h3>

                <div className="social-icons">
                    <a href="https://github.com/GautierCo" ref={ elem => githubRef = elem } onMouseEnter={animateIcon} target="_blank" rel="nofollow" className="github">
                        <FaGithubSquare size="2x" color="#F3D34A"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gautier-colasse-828294130/" ref={ elem => linkedinRef = elem } onMouseEnter={animateIcon} target="_blank" rel="nofollow" className="linkedin">
                        <FaLinkedin size="2x" color="#F3D34A"/>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Presentation;