import React from 'react';
import styles from './layout.module.scss';
import Header from "./header/header";

type RenderProps = {}

const Layout: React.FC<RenderProps> = ({ children }) => {
    return (
        <div className={styles.globalContainer}>
            <Header />
            <main id="main" className={styles.layoutContent}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
