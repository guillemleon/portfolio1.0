import * as React from "react"
import * as styles from './about.module.scss'
import {useEffect, useRef} from "react"
import PictureProfile from "../../../assets/images/profile.jpg";
import {graphql} from "gatsby";
import {AboutFieldsFragment} from "../../../../graphql-types";

type RenderProps = {
    data: AboutFieldsFragment
}

const About:React.FC<RenderProps> = ({data}) => {

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
            const about = typeof window !== "undefined" && document.getElementById("about");
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
                        {data.aboutTitle}
                    </h1>
                    <div className={styles.mainData}>
                        <div className={styles.imageContainer} ref={animatedElements.image}>
                            <img className={styles.image} src={PictureProfile} alt=""/>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.text} ref={animatedElements.text}>
                                {data.aboutParagraphOne}
                            </p>
                            <p className={styles.text} ref={animatedElements.text1}>
                                {data.aboutParagraphTwo}
                            </p>
                            <p className={styles.text} ref={animatedElements.text2}>
                                {data.aboutParagraphThree}
                            </p>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} ref={animatedElements.button}>
                                    {data.seeResumeButtonTitle}
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

export const fragment = graphql`
    fragment AboutFields on DatoCmsHomePage {
        aboutTitle
        seeResumeButtonTitle
        aboutImage {
            gatsbyImageData(layout: FIXED)
            format
            alt
        }
        aboutParagraphOne
        aboutParagraphTwo
        aboutParagraphThree
    }
`

export default About
