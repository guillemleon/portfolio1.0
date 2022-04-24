import React, {useEffect, useRef, useState} from 'react';
import * as styles from './header.module.scss'
import useWindowWidth from "../../../hooks/use-window-width";
import BurgerMenu from "./burguer-menu/burger-menu";
import {graphql} from "gatsby";
import {HeaderFieldsFragment} from "../../../../graphql-types";

type RenderProps = {
    data: HeaderFieldsFragment,
    isContactPage?: boolean,
    lang: {
        locale: string,
        defaultLocale: string
    }
}

const Header: React.FC<RenderProps> = ({ data, isContactPage = false, lang }) => {

    const isTablet = useWindowWidth() < 960;
    const [menuOpen, setMenuOpen] = useState(false);
    const header = useRef(null);

    useEffect(() => {
        (window && !isContactPage) && window.addEventListener('scroll', (e) => {
            getHeaderColor()
        })
    }, [])

    return (
        <nav ref={header} className={styles.container} style={{ height: menuOpen ? "100vh" : 100, backgroundColor: isContactPage ? "#3A3A3A" : "#0D0D0D" }}>
            <section className={styles.content}>
                {renderLogo()}
                <div className={styles.separationLine} />
                {!isTablet ? (isContactPage ? renderLinksDesktopContact() : renderLinksDesktop()) : (isContactPage ? renderLinksDesktopContact() : renderBurgerIcon())}
                {isTablet && menuOpen && (
                    <BurgerMenu isContactPage={isContactPage} />
                )}
            </section>
        </nav>
    );

    function renderLinksDesktop(): JSX.Element {
        return (
            <ul className={styles.linksList}>
                <li className={styles.linkContainer}>
                    <button className={styles.link} onClick={() => moveTo("about")}>{data.about}</button>
                </li>
                <li className={styles.linkContainer}>
                    <button className={styles.link} onClick={() => moveTo("skills")}>{data.skills}</button>
                </li>
                <li className={styles.linkContainer}>
                    <button className={styles.link} onClick={() => moveTo("projects")}>{data.projects}</button>
                </li>
                <li className={styles.linkContainer}>
                    <a
                        className={styles.link}
                        href={lang.locale === lang.defaultLocale ? "/contact" : `/${lang.locale}/contact`}
                    >
                        {data.contact}
                    </a>
                </li>
                <li className={styles.langContainer}>
                    <a className={styles.lang} href={isContactPage ? "/contact" : "/"}>EN</a>
                    <p className={styles.lang} style={{margin: "0 8px"}}>|</p>
                    <a className={styles.lang} href={isContactPage ? "/es/contact" : "/es"}>ES</a>
                </li>
            </ul>
        )
    }

    function renderLinksDesktopContact(): JSX.Element {
        return (
            <ul className={styles.linksList} style={{width: "auto"}}>
                <li className={styles.langContainer}>
                    <a className={styles.lang} href={isContactPage ? "/contact" : "/"}>EN</a>
                    <p className={styles.lang} style={{margin: "0 8px"}}>|</p>
                    <a className={styles.lang} href={isContactPage ? "/es/contact" : "/es"}>ES</a>
                </li>
            </ul>
        )
    }

    function moveTo(id: string) {
        window && window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: "smooth"
        })
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

    function getHeaderColor() {
        console.log(window.pageYOffset)
        console.log(document.getElementById("skills").offsetTop)
        console.log(header.current.style.backgroundColor)
        if(window.pageYOffset >= 0) {
            header.current.style.backgroundColor = "#0D0D0D"
        }
        if(window.pageYOffset >= document.getElementById("about").offsetTop - 100) {
            header.current.style.backgroundColor = "#3A3A3A"
        }
        if(window.pageYOffset >= document.getElementById("skills").offsetTop - 100) {
            header.current.style.backgroundColor = "#4E4E4E"
        }
        if(window.pageYOffset >= document.getElementById("projects").offsetTop - 100) {
            header.current.style.backgroundColor = "#6A6A6A"
        }
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
