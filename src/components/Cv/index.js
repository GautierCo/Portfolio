import React, { useEffect } from 'react';
import './cv.scss';
import './cvRes.scss';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cv = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cv",
                toggleActions: "play play pause reverse"
            },
        })
        tl.to('.cv-presentation', {             
            duration: 1,
            opacity: 1,
            ease: Power3.easeInOut,
        });
        tl.to('.cv-parcours', {             
            duration: 1,
            opacity: 1,
            ease: Power3.easeInOut,
        });
        tl.to('.cv-competences', {             
            duration: 1,
            opacity: 1,
            ease: Power3.easeInOut,
        });

    }, []);

    return (
        <section className="cv" id="cv">
            
            <div className="cv-presentation">
                <p>Depuis tout petit j'ai toujours été passionné par l'informatique, étant de nature curieuse je me suis rapidement épanoui dans ce vaste monde qui me permet chaque jour de découvrir et d'apprendre de nouvelles choses.</p>
                <p>Après un parcours assez atypique je me suis tourné vers O'clock, une école labellisée Grande École du numérique, où je suis actuellement une formation intense de 5 mois pour devenir Développeur Front End avec spécialisation React. </p>
            </div>

            <div className="cv-parcours">
                <div className="experiences">
                <h3 className="experiences-title">EXPÉRIENCES</h3>
                    <div className="exerience">
                        <div className="experience-name">Auto-Entrepreneur</div>
                        <div className="experience-date">SEPT 2017 - AUJOURD'HUI</div>
                        <div className="experience-content">
                        Création site : clgecrew.fr / decodelise.com
                        (avant ma formation).<br />
                        SEO / Wordpress / Affiliation / Boutique en ligne
                        </div>
                    </div>
                    <div className="experience">
                        <div className="experience-name">Webmaster / MediaBuyer</div>
                        <div className="experience-date">OCT 2014 - MARS 2018</div>
                        <p className="experience-content">
                        Gestion de campagnes de publicités, affiliation,
                        optimisation des landings pages.<br />
                        </p>
                    </div>
                </div>
                
                <div className="parcours-separation">
                    <div className="parcours-hr"></div>
                </div>

                <div className="formations">
                    <h3 className="formations-title">FORMATIONS</h3>
                    
                    <div className="formation">
                        <div className="formation-name">
                            École O'Clock - Grande École du Numérique
                        </div>
                        <div className="formation-date">MARS 2020 - SEPT 2020</div>
                        <div className="formation-content">

                        <p>Formation intensive (700H) avec une méthodologie d'apprentissage bien développé.</p>

                        <p><strong>Les fondamentaux :</strong> HTML/CSS, utilisation de
                        Git, Javascript avec la syntaxe ES6, POO</p>

                        <p><strong>Coté serveur :</strong> NodeJS Express PostGreSQL,
                        création d'API REST, structure MVC.</p>

                        <p><strong>Spécialisation :</strong>  React, Redux, les Hooks, les
                        middlewares, Axios, les WebScokets.</p>
                        <p><strong>Projet final :</strong> En équipe de quatre pendant 1
                        mois nous avons réalisé un projet en situation réelle.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="cv-competences">
                <div className="competence-block">
                    <FaReact className="competence-icon" color="#2CDCFA"/>
                    <p className="competence-label">React</p>
                </div>

                <div className="competence-block">
                    <FaJs className="competence-icon" color="#F7DF1D"/>
                    <p className="competence-label">Javascript</p>
                </div>

                <div className="competence-block">
                    <FaHtml5 className="competence-icon" color="#E54C20"/>
                    <p className="competence-label">HTML5</p>
                </div>

                <div className="competence-block">
                    <FaCss3Alt className="competence-icon" color="#2699F8"/>
                    <p className="competence-label">CSS3</p>
                </div>

                <div className="competence-block">
                    <FaNodeJs className="competence-icon" color="#88C043"/>
                    <p className="competence-label">NodeJS</p>
                </div>
            </div>

        </section>
    );
};

export default Cv;