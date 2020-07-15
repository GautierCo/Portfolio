import React from 'react';
import { useRef, useEffect } from 'react';

// GSAP : 
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Font-Awesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

// Assets :
import photo2 from './img/02.jpg';
import './presentation.scss';
import './presentationRes.scss';

const Presentation = () => {

    // Activation des plugins
    gsap.registerPlugin( SplitText, ScrollTrigger );

    let photoRef = useRef(null);
    let title = useRef(null);
    let titleBorder = useRef(null);
    let split = useRef(null);
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

        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        console.log(windowWidth, windowHeight)

        // Github & Linkedin icons
        gsap.fromTo(githubRef, { x: -1000  }, { x: 0, autoAlpha: 1, duration: 1,  ease: Power3.easeOut });
        gsap.fromTo(linkedinRef, { x: 1000  }, { x: 0, autoAlpha: 1, duration: 1,  ease: Power3.easeOut });

        // Step 1 : Photo
        tl.fromTo(photoRef, { y: -1280 }, {y: 0, opacity: 100, ease: Power3.easeInOut, duration: 1})
        tl.to(photoRef, { borderRadius: "50%", duration: 1.5, delay: 0.6 }, {y: 0})
        tl.to(photoRef, { border: "5px solid #F5D3C8", duration: 0.7 })
        // tl.to(photoRef, { y: 160 })

        // Step 2 : Titre
        tl.fromTo(titleSplit.words, 1 , { y: -1200 }, { y: 0, stagger: 0.3, y: 0, ease: Power3.easeOut, opacity: 100, duration: 0.2 });
        gsap.to(titleSplit.words[0], {scale: 1.2, duration: 0.2, repeat: 1, delay: 1.1, yoyo: true, position: "relative"});
        tl.to(titleBorder, { width: '45px', duration: 0.3 });
        tl.to(title, { opacity: 100, duration: 0.5, ease: Power3.easeIn })

        // Step 4 Name
        tl.to(nameSplit.chars, { stagger: 0.1, ease: Power3.easeOut, duration: 0.5, visibility: "visible"})
    });
   
    return (
        <div className="container">

            <section className="presentation">

                <h1 className="title" ref={ elem => title = elem }>Développeur Front-end Junior<span className="title-border" ref={ elem => titleBorder = elem }></span></h1>
                <img src={ photo2 } alt="Photo colasse gautier" className="photo" ref={ elem => photoRef = elem } ></img>
                
                <h3 className="name" ref={ elem => name = elem }>Gautier Colasse</h3>

                <div className="social-icons">
                    <a href="https://github.com/GautierCo" ref={ elem => githubRef = elem } target="_blank" rel="nofollow" className="github">
                        <FontAwesomeIcon icon={ faLinkedin }  size="2x" color="#F3D34A"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gautier-colasse-828294130/" ref={ elem => linkedinRef = elem } target="_blank" rel="nofollow" className="linkedin">
                        <FontAwesomeIcon icon={ faGithubSquare }  size="2x" color="#F3D34A"/>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Presentation;