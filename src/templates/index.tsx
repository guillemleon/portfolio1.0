import * as React from "react"
import Layout from "../components/layout/layout";
import * as styles from './home.module.scss';
import arrow from '../assets/vectors/arrow.svg'
import {ReactSVG} from "react-svg";
import {useEffect, useRef} from "react";
import About from "../components/home/about/about";
import Skills from "../components/home/skills/skills";

type RenderProps = {}

const IndexPage:React.FC<RenderProps> = (pageContext) => {

    let coverElements = {
        content: useRef(null),
        title: useRef(null),
        title2: useRef(null),
        title3: useRef(null),
        button: useRef(null),
    }

    useEffect(() => {
        loadInitialAnimationState()
    })

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}  ref={coverElements.content}>
                    <h1 className={styles.title} ref={coverElements.title}>HELLO,</h1>
                    <h1 className={styles.title} ref={coverElements.title2}>
                        I'M
                        <div className={styles.titleGreen} ref={coverElements.title3}> GUILLEM</div>
                    </h1>
                </div>
                <div className={styles.continueCircle} ref={coverElements.button} onClick={() => scrollToAbout()}>
                    <ReactSVG className={styles.arrow} src={arrow}></ReactSVG>
                </div>
            </div>
            <About />
            <Skills />
        </Layout>
    )

    function loadInitialAnimationState() {
        let index = 0;
        for (const [key, value] of Object.entries(coverElements)) {
            if(value.current) {
                setInterval(() => {
                    value.current.style.transform = "translateY(0px)";
                }, 200 * index)
                index++;
            }
        }
    }

    function scrollToAbout() {
        const about = typeof window !== "undefined" && document.getElementById("about");
        if(about) {
            window.scrollTo({
                top: about.offsetTop,
                behavior: "smooth"
            })
        }
    }

}


export default IndexPage
