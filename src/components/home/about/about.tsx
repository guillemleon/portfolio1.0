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

    const about = useRef(null);
    const picture = useRef(null);
    const description = useRef(null);
    const aboutCards = useRef(null);

    useEffect(() => {
        loadAnimation()
        window && window.addEventListener('scroll', (e) => {
            loadAnimation()
        })
    }, [])

    return (
        <section ref={about} id="about" className={styles.container}>
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
                <div ref={picture} className={styles.imageContainer}>
                    <img src={PictureProfile} className={styles.image} alt="Guillem"/>
                </div>
                <div ref={description} className={styles.descriptionContainer}>
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
        if(window.pageYOffset >= about.current.offsetTop - 300) {
            aboutCards.current.childNodes.forEach((item, index) => {
                setTimeout(() => {
                    item.childNodes[0].style.transform = "rotateY(0deg)"
                    item.childNodes[0].style.opacity = "1"
                    item.childNodes[1].style.opacity = "1"
                    item.childNodes[2].style.opacity = "1"
                }, 200 * index / 2)
            });
            setTimeout(() => {
                picture.current.style.transform = "rotateY(0deg)"
                picture.current.style.opacity = "1"
            }, 200 * aboutCards.current.childNodes.length / 2);
            setTimeout(() => {
                description.current.style.opacity = "1"
            }, 200 * (aboutCards.current.childNodes.length));
        }

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
