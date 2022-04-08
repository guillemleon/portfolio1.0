import React, { useState } from 'react';
import * as styles from './header.module.scss'
import useWindowWidth from "../../../hooks/use-window-width";
import BurgerMenu from "./burguer-menu/burger-menu";
import {graphql} from "gatsby";
import {HeaderFieldsFragment} from "../../../../graphql-types";

type RenderProps = {
    data: HeaderFieldsFragment,
    lang: {
        locale: string,
        defaultLocale: string
    }
}

const Header: React.FC<RenderProps> = ({ data, lang }) => {

    const isTablet = useWindowWidth() < 1140;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.container} style={{ height: menuOpen ? "100vh" : 100 }}>
            <section className={styles.content}>
                {renderLogo()}
                <div className={styles.separationLine} />
                {!isTablet ? renderLinksDesktop() : renderBurgerIcon()}
                {isTablet && menuOpen && (
                    <BurgerMenu />
                )}
            </section>
        </nav>
    );

    function renderLinksDesktop(): JSX.Element {
        return (
            <ul className={styles.linksList}>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{data.about}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{data.skills}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{data.projects}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a
                        className={styles.link}
                        href={lang.locale === lang.defaultLocale ? "/contact" : `/${lang.locale}/contact`}
                    >
                        {data.contact}
                    </a>
                </li>
            </ul>
        )
    }

    function renderLogo(): JSX.Element {
        return (
            <div className={styles.logoContainer}>
                <a href={lang.locale === lang.defaultLocale ? "/" : `/${lang.locale}`} className={styles.logo}>GL</a>
            </div>
        )
    }

    function renderBurgerIcon(): JSX.Element {
        return (
            <div className={styles.buttonBurgerContainer}>
                <div
                    className={!menuOpen ? styles.buttonBurger : styles.buttonBurgerOpen}
                    onClick={() => openMenu()}
                />
            </div>
        )
    }

    function openMenu(): void {
        setMenuOpen(!menuOpen);
    }
}

export const fragment = graphql`
    fragment HeaderFields on DatoCmsHeader {
        about
        contact
        projects
        skills
    }
`

export default Header;
