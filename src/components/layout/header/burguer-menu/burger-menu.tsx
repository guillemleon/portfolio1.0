import React, {useEffect} from 'react';
import * as styles from './burger-menu.module.scss'

type RenderProps = {
    isContactPage: boolean
}

const BurgerMenu: React.FC<RenderProps> = ({ isContactPage }) => {

    useEffect(() => {
        loadAnimation();
    })

    return (
        <section className={styles.container}>
            {renderLinksDesktop()}
        </section>
    );

    function renderLinksDesktop(): JSX.Element {
        return (
            <ul id="burgerMenuLinksList" className={styles.linksList}>
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
                <li className={styles.langContainer}>
                    <a className={styles.lang} href={isContactPage ? "/contact" : "/"}>EN</a>
                    <p className={styles.lang}>|</p>
                    <a className={styles.lang} href={isContactPage ? "/es/contact" : "/es"}>ES</a>
                </li>
            </ul>
        )
    }

    function loadAnimation(): void {
        const linksList = document.getElementById("burgerMenuLinksList");
        if (linksList) {
            linksList.childNodes.forEach((child: any, index: any) => {
                setTimeout(() => {
                    child.style.transform = "translateY(0)";
                    child.style.opacity = "1";
                }, 200 * index)
            })
        }
    }
}

export default BurgerMenu;
