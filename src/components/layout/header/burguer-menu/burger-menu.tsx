import React, {useEffect} from 'react';
import * as styles from './burger-menu.module.scss'

type RenderProps = {}

const BurgerMenu: React.FC<RenderProps> = ({ }) => {

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
            </ul>
        )
    }

    function loadAnimation(): void {
        const linksList = document.getElementById("burgerMenuLinksList");
        if (linksList) {
            linksList.childNodes.forEach((child: any, index: any) => {
                setTimeout(() => {
                    child.style.transform = "translateY(0)";
                }, 200 * index)
            })
        }
    }
}

export default BurgerMenu;
