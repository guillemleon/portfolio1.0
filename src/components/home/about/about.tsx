import * as React from "react"
import * as styles from './about.module.scss'
import {useEffect, useRef} from "react"
import PictureProfile from "../../../assets/images/profile.jpg";

type RenderProps = {}

const About:React.FC<RenderProps> = (pageContext) => {

    const animatedElements = {
        title: useRef(null),
        image: useRef(null),
        text: useRef(null),
        text1: useRef(null),
        text2: useRef(null),
        button: useRef(null)
    }

    useEffect(() => {
        if(typeof window !== undefined) {
            if(about && window.scrollY >= about.offsetTop - 500) loadInitialAnimationState()
        }
        window.addEventListener('scroll', () => {
            if(typeof window !== undefined) {
                const about = typeof window !== "undefined" && document.getElementById("about");
                if(about && window.scrollY >= about.offsetTop - 500) loadInitialAnimationState()
            }
        })
    })

    return (
        <section id="about" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.aboutInfo}>
                    <h1 className={styles.title} ref={animatedElements.title}>
                        ABOUT ME
                    </h1>
                    <div className={styles.mainData}>
                        <div className={styles.imageContainer} ref={animatedElements.image}>
                            <img className={styles.image} src={PictureProfile} alt=""/>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.text} ref={animatedElements.text}>
                                I'm currently working in Extia with the JAMSTACK technology.
                                That includes ReactJS, gatsby and DatoCMS. That makes pages faster and is easier to
                                manage the translations and add new content for the contributors.
                            </p>
                            <p className={styles.text} ref={animatedElements.text1}>
                                My knowledge is focused mainly on React, React Native, Redux for the state management,
                                gatsby, Typescript, some angular and relational databases like MySQL or Postgres.
                                Also I'd love to learn new technologies like Vue. On the backend side my knowledge
                                is academic and focused on NodeJS and Express, PHP and some django.
                            </p>
                            <p className={styles.text} ref={animatedElements.text2}>
                                I'm quick learner and eager to improve my skills as a developer. I'm interested in
                                constant learning as a frontend and backend developer.
                            </p>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} ref={animatedElements.button}>
                                    SEE RESUME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    function loadInitialAnimationState() {
        let index = 0;
        for (const [key, value] of Object.entries(animatedElements)) {
            if(value.current) {
                setInterval(() => {
                    value.current.style.transform = "translateY(0px)";
                }, 200 * index)
                index++;
            }
        }
    }

}


export default About
