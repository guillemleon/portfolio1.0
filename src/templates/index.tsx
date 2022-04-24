import * as React from "react"
import Layout from "../components/layout/layout";
import * as styles from './home.module.scss';
import arrow from '../assets/vectors/icons/arrowDown.svg'
import {ReactSVG} from "react-svg";
import {useEffect, useRef} from "react";
import About from "../components/home/about/about";
import Skills from "../components/home/skills/skills";
import Projects from "../components/home/projects/projects";
import {graphql} from "gatsby";
import {HomeQuery} from "../../graphql-types";

type RenderProps = {
    data: HomeQuery,
    pageContext
}

const IndexPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    let coverElements = {
        content: useRef(null),
        title: useRef(null),
        title2: useRef(null),
        title3: useRef(null),
        subtitle: useRef(null),
    }

    useEffect(() => {
        loadInitialAnimationState()
    })

    return (
        <Layout
            header={data.datoCmsHeader}
            footer={data.datoCmsFooter}
            lang={{
                defaultLocale: pageContext.defaultLocale,
                locale: pageContext.locale
            }}
        >
            <div id="home" className={styles.container}>
                <div className={styles.topBlock}  ref={coverElements.content}>
                    <h1 className={styles.title} ref={coverElements.title}>{data.datoCmsHomePage.coverTitleOne}</h1>
                    <h1 className={styles.title} ref={coverElements.title2}>
                        {data.datoCmsHomePage.coverTitleTwo}
                        <div className={styles.titleGreen} ref={coverElements.title3}>{' ' + data.datoCmsHomePage.coverTitleThree}</div>
                    </h1>
                    <h4 className={styles.subtitle} ref={coverElements.subtitle}>{data.datoCmsHomePage.coverSubtitle}</h4>
                </div>
                <div className={styles.bottomBlock}>
                    <div className={styles.continueCircle} onClick={() => scrollToAbout()}>
                        <ReactSVG className={styles.arrow} src={arrow} />
                    </div>
                </div>
            </div>
            <About data={data.datoCmsHomePage} />
            <Skills data={data.datoCmsHomePage} />
            <Projects
                data={data.datoCmsHomePage}
                lang={{
                    defaultLocale: pageContext.defaultLocale,
                    locale: pageContext.locale
                }}
            />
        </Layout>
    )

    function loadInitialAnimationState() {
        let index = 0;
        for (const [key, value] of Object.entries(coverElements)) {
            if(value.current) {
                setInterval(() => {
                    value.current.style.opacity = 1;
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

export const pageQuery = graphql`
    query Home($locale: String!) {
        datoCmsHomePage(locale: { eq: $locale }) {
            coverTitleOne
            coverTitleThree
            coverTitleTwo
            coverSubtitle
            ...ProjectsFields
            ...SkillsFields
            ...AboutFields
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
        datoCmsFooter(locale: { eq: $locale }) {
            ...FooterFields
        }
    }
`


export default IndexPage
