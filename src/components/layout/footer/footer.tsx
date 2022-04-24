import React, { useState } from 'react';
import * as styles from './footer.module.scss'
import useWindowWidth from "../../../hooks/use-window-width";
import {graphql} from "gatsby";
import {FooterFieldsFragment} from "../../../../graphql-types";
import {ReactSVG} from "react-svg";
import arrow from "../../../assets/vectors/icons/arrowUp.svg";
import linkedin from "../../../assets/vectors/icons/linkedin.svg";
import github from "../../../assets/vectors/icons/github.svg";
import cv from "../../../assets/vectors/icons/github.svg";

type RenderProps = {
    data: FooterFieldsFragment,
    lang: {
        locale: string,
        defaultLocale: string
    }
}

const Footer: React.FC<RenderProps> = ({ data, lang }) => {

    const isTablet = useWindowWidth() < 1140;

    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.buttonsContainer}>
                    <div className={styles.continueCircle} onClick={() => scrollToTop()}>
                        <ReactSVG className={styles.arrow} src={arrow} />
                    </div>
                    <section className={styles.links}>
                        <a href={data.linkedinUrl} className={styles.linkButton} target={"_blank"}>
                            <ReactSVG className={styles.icon} src={linkedin} />
                        </a>
                        <a href={data.githubUrl} className={styles.linkButton} target={"_blank"}>
                            <ReactSVG className={styles.icon} src={github} />
                        </a>
                        <a href={"http://localhost:3000/cv/guillem_leon_cv.pdf"} className={styles.linkButton} target={"_blank"}>
                            <h4 className={styles.buttonText}>CV</h4>
                        </a>
                    </section>
                    <h3 className={styles.nameText}>GUILLEM LEÓN FONT <h3 className={styles.year}>©2022</h3></h3>
                </div>
            </div>
        </footer>
    );

    function scrollToTop() {
        if(typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }
}

export const fragment = graphql`
    fragment FooterFields on DatoCmsFooter {
        resume
        contact
        projects
        socialMediaTitle
        linkedin
        linkedinUrl
        githubUrl
    }
`

export default Footer;
