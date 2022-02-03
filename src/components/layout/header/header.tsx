import React from 'react';
import styles, {linkContainer, separationLine} from './header.module.scss'

type RenderProps = {}

const Header: React.FC<RenderProps> = ({ }) => {
    return (
        <nav className={styles.container}>
            <section className={styles.content}>
                <div className={styles.logoContainer}>
                    <a href={"/"} className={styles.logo}>GL</a>
                </div>
                <div className={styles.separationLine} />
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
            </section>
        </nav>
    );
}

export default Header;
