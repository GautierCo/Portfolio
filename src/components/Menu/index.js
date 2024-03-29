import React from "react";
import "./menu.scss";
import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { useState } from "react";
import { Link } from "react-scroll";

const Menu = () => {
    const [toggled, setToggled] = useState(false);
    const [menuModal, setMenuModal] = useState(false);

    let header = useRef(null);
    let menuModalRef = useRef(null);
    let barOne = useRef(null);
    let barTwo = useRef(null);
    let barThree = useRef(null);

    const onToggle = () => {
        if (!toggled) {
            setToggled(!toggled);
            setMenuModal(!menuModal);
            gsap.to(barOne, 0.5, { strokeDashoffset: -1076 });
            gsap.to(barTwo, 0.5, { strokeDashoffset: -1250 });
            gsap.to(barThree, 0.5, { opacity: 0, x: -1000 });
            gsap.fromTo(menuModalRef, { y: -100 }, { y: 0, opacity: 1, visibility: "visible", display: "grid" });
        } else {
            setToggled(!toggled);
            setMenuModal(!menuModal);
            gsap.to(barOne, 0.5, { strokeDashoffset: 0 });
            gsap.to(barTwo, 0.5, { strokeDashoffset: 0 });
            gsap.to(barThree, 0.5, { opacity: 1, x: 0 });
            gsap.fromTo(menuModalRef, { y: 0 }, { y: -100, autoAlpha: true });
        }
    };

    useEffect(() => {
        gsap.fromTo(
            header,
            { y: -100 },
            { y: 0, delay: 3, visibility: "visible", display: "grid", ease: Power3.easeInOut }
        );
    }, []);

    return (
        <header className="menu" ref={(elem) => (header = elem)}>
            <div className="menu-logo">{"< />"}</div>
            <div className="menu-modal" ref={(elem) => (menuModalRef = elem)} style={{ display: "none" }}>
                <div className="menu-modal_links">
                    <Link
                        activeClass="active"
                        className="menu-modal_links__item"
                        to="presentation"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Présentation
                    </Link>
                    <Link
                        activeClass="active"
                        className="menu-modal_links__item"
                        to="cv"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        C.V
                    </Link>
                    <Link
                        activeClass="active"
                        className="menu-modal_links__item"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Projets
                    </Link>
                    <Link
                        activeClass="active"
                        className="menu-modal_links__item"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className="menu-button">
                <button onClick={onToggle}>
                    <svg x="0px" y="0px" viewBox="0 0 512 512">
                        <path
                            id="burger-bar-one"
                            ref={(elem) => (barOne = elem)}
                            className="path-1 path"
                            d="M50,116.7l404.2-0.2c0,0,84,12.4,140,10.4s97-96,86-127s-83.3-93.3-142,0s-84,116.6-84,116.6L50,391.3"
                        />
                        <path
                            id="burger-bar-two"
                            ref={(elem) => (barTwo = elem)}
                            className="path"
                            d="M462,391.1l-412,0.2c0,0-98.6,15.7-98.8,71.7c-0.2,36,93,90,147,96c32.7,3.6,247.4,0.9,343-54C521.1,459,462,391.1,462,391.1L50,116.7"
                        />
                        <line
                            id="burger-bar-three"
                            ref={(elem) => (barThree = elem)}
                            className="path"
                            x1="50"
                            y1="256"
                            x2="462"
                            y2="256"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Menu;
