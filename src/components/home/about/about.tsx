import * as React from "react"
import * as styles from './about.module.scss'
import PictureProfile from "../../../assets/images/profile.jpg";
import {graphql} from "gatsby";
import {AboutFieldsFragment} from "../../../../graphql-types";
import AboutComponent from "./about-component/about-component";
import {useEffect, useRef} from "react";

type RenderProps = {
    data: AboutFieldsFragment
}

const About:React.FC<RenderProps> = ({data}) => {

    const aboutCards = useRef(null);

    useEffect(() => {
        loadAnimation()
    }, [])

    return (
        <section id="about" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{data.aboutTitle}</h1>
                <div className={styles.underline} />
                <div ref={aboutCards} className={styles.aboutItemsGroup}>
                    {data.aboutItems.map(item => {
                        return (
                            <AboutComponent key={item.id} data={item} />
                        )
                    })}
                </div>
                <div className={styles.imageContainer}>
                    <img src={PictureProfile} className={styles.image} alt="Guillem"/>
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.description}>
                        {data.aboutDescription}
                        <a
                            className={styles.link}
                            href="http://localhost:3000/cv/guillem-leon-cv.pdf"
                        >
                            {" " + data.seeResumeButtonTitle}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )

    function loadAnimation() {
        aboutCards.current.childNodes.forEach((item, index) => {
            setTimeout(() => {
                item.childNodes[0].style.transform = "rotateY(0deg)"
            }, 200 * index / 2)
        })
    }

}

export const fragment = graphql`
    fragment AboutFields on DatoCmsHomePage {
        aboutTitle
        aboutDescription
        seeResumeButtonTitle
        aboutImage {
            gatsbyImageData(layout: FIXED)
            format
            alt
        }
        ...AboutComponentFields
    }
`

export default About
