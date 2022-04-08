import * as React from "react"
import Layout from "../components/layout/layout";
import * as styles from './home.module.scss';
import arrow from '../assets/vectors/arrow.svg'
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
        button: useRef(null),
    }

    useEffect(() => {
        loadInitialAnimationState()
    })

    return (
        <Layout header={data.datoCmsHeader}>
            <div className={styles.container}>
                <div className={styles.content}  ref={coverElements.content}>
                    <h1 className={styles.title} ref={coverElements.title}>{data.datoCmsHomePage.coverTitleOne}</h1>
                    <h1 className={styles.title} ref={coverElements.title2}>
                        {data.datoCmsHomePage.coverTitleTwo}
                        <div className={styles.titleGreen} ref={coverElements.title3}>{' ' + data.datoCmsHomePage.coverTitleThree}</div>
                    </h1>
                </div>
                <div className={styles.continueCircle} ref={coverElements.button} onClick={() => scrollToAbout()}>
                    <ReactSVG className={styles.arrow} src={arrow} />
                </div>
            </div>
            <About data={data.datoCmsHomePage} />
            <Skills />
            <Projects data={data.datoCmsHomePage}/>
        </Layout>
    )

    function loadInitialAnimationState() {
        let index = 0;
        for (const [key, value] of Object.entries(coverElements)) {
            if(value.current) {
                setInterval(() => {
                    value.current.style.transform = "translateY(0px)";
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
            ...ProjectsFields
            ...AboutFields
        }
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`


export default IndexPage
