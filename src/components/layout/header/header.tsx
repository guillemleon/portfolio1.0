import React, { useState } from 'react';
import * as styles from './header.module.scss'
import useWindowWidth from "../../../hooks/use-window-width";
import BurgerMenu from "./burguer-menu/burger-menu";

type RenderProps = {}

const Header: React.FC<RenderProps> = ({ }) => {

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
                    <a className={styles.link} href="#">ABOUT</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">SKILLS</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">PROJECTS</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">CONTACT</a>
                </li>
            </ul>
        )
    }

    function renderLogo(): JSX.Element {
        return (
            <div className={styles.logoContainer}>
                <a href={"/"} className={styles.logo}>GL</a>
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

export default Header;
