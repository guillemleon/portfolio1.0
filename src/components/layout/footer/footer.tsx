import React, { useState } from 'react';
import * as styles from './footer.module.scss'
import useWindowWidth from "../../../hooks/use-window-width";
import {graphql} from "gatsby";
import {FooterFieldsFragment} from "../../../../graphql-types";

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
                <section className={styles.mainLinks}>
                    {renderLogo()}
                    <ul className={styles.linksList}>
                        <li className={styles.linkContainer}>
                            <a className={styles.link} href={lang.locale === lang.defaultLocale ? "/projects" : `/${lang.locale}/projects`}>{data.projects}</a>
                        </li>
                        <li className={styles.linkContainer}>
                            <a className={styles.link} href={lang.locale === lang.defaultLocale ? "/contact" : `/${lang.locale}/contact`}>{data.contact}</a>
                        </li>
                        <li className={styles.linkContainer}>
                            <a target="_blank" className={styles.link} href="http://localhost:3000/cv/guillem_leon_cv.pdf">{data.resume}</a>
                        </li>
                    </ul>
                </section>
                <section className={styles.socialMediaContainer}>
                    <h2 className={styles.socialMediaTitle}>{data.socialMediaTitle}</h2>
                    <ul className={styles.socialMediaLinks}>
                        <li className={styles.linkContainer}>
                            <a href={data.linkedinUrl} target={"_blank"} className={styles.link}>{data.linkedin}</a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );

    function renderLogo(): JSX.Element {
        return (
            <div className={styles.logoContainer}>
                <a href={lang.locale === lang.defaultLocale ? "/" : `/${lang.locale}`} className={styles.logo}>GL</a>
            </div>
        )
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
    }
`

export default Footer;
