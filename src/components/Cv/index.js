import React, { useEffect } from "react";
import "./cv.scss";
import "./cvRes.scss";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cv = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cv",
                toggleActions: "play play pause reverse",
            },
        });
        tl.to(".cv-presentation", {
            duration: 1,
            opacity: 1,
            ease: Power3.easeInOut,
        });
        tl.to(".cv-parcours", {
            duration: 1,
            opacity: 1,
            ease: Power3.easeInOut,
        });
        tl.to(".cv-competences", {
            duration: 1,
            opacity: 1,
            ease: Power3.easeInOut,
        });
    }, []);

    return (
        <section className="cv" id="cv">
            <div className="cv-presentation">
                <p>
                    Passionné par l'informatique, étant de nature curieuse, je me suis rapidement épanoui dans ce vaste
                    monde qui me permet chaque jour de découvrir et d'apprendre de nouvelles choses.
                </p>
                <p>
                    Après un parcours assez atypique je me suis tourné vers O'clock, une école labellisée Grande École
                    du numérique, où j'ai suivi une formation intense pour devenir Développeur Front End avec
                    spécialisation React.
                </p>
            </div>

            <div className="cv-parcours">
                <div className="experiences_container">
                    <h3 className="experiences-title">EXPÉRIENCES</h3>
                    <div className="experiences">
                        <div className="experience">
                            <div className="experience-name">Développeur Front-end (Projet)</div>
                            <div className="experience-date">AOUT 2020 - SEPT 2020</div>
                            <div className="experience-content">
                                Conception et développement en équipe de 5 de l'application iTongue, un réseau social
                                d'entraide pour l’apprentissage des langues à travers l'audio.
                            </div>
                        </div>
                        <div className="experience">
                            <div className="experience-name">Auto-Entrepreneur</div>
                            <div className="experience-date">SEPT 2017 - AUJOURD'HUI</div>
                            <div className="experience-content">
                                Editeur de sites SEO / Wordpress / Affiliation / eCommerce
                                <br />
                                Création site : clgecrew.fr / decodelise.com (avant ma formation).
                            </div>
                        </div>
                        <div className="experience">
                            <div className="experience-name">Webmaster / MediaBuyer</div>
                            <div className="experience-date">OCT 2014 - MARS 2018</div>
                            <p className="experience-content">
                                Gestion de campagnes publicitaires, affiliation, optimisation des landing pages.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parcours-separation">
                    <div className="parcours-hr"></div>
                </div>
                <div className="formations_container">
                    <h3 className="formations-title">FORMATIONS</h3>
                    <div className="formations">
                        <div className="formation">
                            <div className="formation-name">Développeur Web et Web Mobile</div>
                            <div className="formation-date">Délivré en avril. 2021</div>
                            <div className="formation-content">
                                <p>Titre professionnel de niveau 5</p>
                            </div>
                        </div>
                        <div className="formation">
                            <div className="formation-name">Certification Opquast</div>
                            <div className="formation-date">
                                Délivré en nov. 2020 -{" "}
                                <a rel="nofollow" href="https://directory.opquast.com/fr/certificat/JMOGAV/">
                                    Voir la référence
                                </a>
                            </div>
                            <div className="formation-content">
                                <p>Maîtrise de la qualité en projet Web</p>
                            </div>
                        </div>
                        <div className="formation">
                            <div className="formation-name">École O'Clock - Grande École du Numérique</div>
                            <div className="formation-date">MARS 2020 - SEPT 2020</div>
                            <div className="formation-content">
                                <p>Formation intensive (700H) avec une méthodologie d'apprentissage bien développée.</p>

                                <p>
                                    <strong>Les fondamentaux :</strong> HTML/CSS, utilisation de Git, Javascript coté
                                    client avec la syntaxe ES6
                                </p>

                                <p>
                                    <strong>Serveur :</strong> NodeJS Express PostGreSQL, création d'API REST,
                                    architecture MVC.
                                </p>

                                <p>
                                    <strong>Spécialisation :</strong> React, Redux, Hooks, Middlewares, Axios,
                                    WebScokets.
                                </p>
                                <p>
                                    <strong>Projet final :</strong> En équipe de cinq pendant 1 mois nous avons réalisé
                                    un projet en situation réelle. (
                                    <a href="https://github.com/GautierCo/iTongue">iTongue</a>)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-competences">
                <div className="competence-block">
                    <FaReact className="competence-icon" color="#2CDCFA" />
                    <p className="competence-label">React</p>
                </div>

                <div className="competence-block">
                    <FaJs className="competence-icon" color="#F7DF1D" />
                    <p className="competence-label">Javascript</p>
                </div>

                <div className="competence-block">
                    <FaHtml5 className="competence-icon" color="#E54C20" />
                    <p className="competence-label">HTML5</p>
                </div>

                <div className="competence-block">
                    <FaCss3Alt className="competence-icon" color="#2699F8" />
                    <p className="competence-label">CSS3</p>
                </div>

                <div className="competence-block">
                    <FaNodeJs className="competence-icon" color="#88C043" />
                    <p className="competence-label">NodeJS</p>
                </div>
            </div>
        </section>
    );
};

export default Cv;
