import React from 'react';

import { useRef, useEffect, useState } from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import javascriptSvg from './svg/javascript.svg';

import './cv.scss';

const Cv = () => {

    return (

        <section className="page-two">

            {/* 
            <section className="page-two">

                <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
                    <path id="path" fill="none" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"></path>
                    <g id="rect">
                        <image className="javascript-svg" href={ javascriptSvg } x="0" y="0" height="20" width="20" />
                    </g>
                </svg>
            </section>
            */}
        </section>

    );
};

export default Cv;