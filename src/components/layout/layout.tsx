import React from 'react';
import * as styles from './layout.module.scss';
import Header from "./header/header";
import {HeaderFieldsFragment} from "../../../graphql-types";

type RenderProps = {
    header: HeaderFieldsFragment
}

const Layout: React.FC<RenderProps> = ({ header, children }) => {
    return (
        <div className={styles.globalContainer}>
            <Header data={header} />
            <main id="main" className={styles.layoutContent}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
