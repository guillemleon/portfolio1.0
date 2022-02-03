import React from 'react';
import styles from './home.module.scss'
import Layout from "../components/layout/layout";
import arrow from '../assets/vectors/arrow.svg'
import {ReactSVG} from "react-svg";

type RenderProps = {}

const Home: React.FC<RenderProps> = ({ }) => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>HELLO,</h1>
                    <h1 className={styles.title}>
                        I'M
                        <h1 className={styles.titleGreen}> GUILLEM</h1>
                    </h1>
                </div>
                <div className={styles.continueCircle}>
                    <ReactSVG className={styles.arrow} src={arrow}></ReactSVG>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
