import React from 'react';
import * as styles from './layout.module.scss';
import Header from "./header/header";
import {HeaderFieldsFragment} from "../../../graphql-types";

type RenderProps = {
    header: HeaderFieldsFragment,
    lang?: {
        locale: string,
        defaultLocale: string
    }
}

const Layout: React.FC<RenderProps> = ({ header, children, lang }) => {
    return (
        <div className={styles.globalContainer}>
            <Header
                data={header}
                lang={{
                    locale: lang.locale,
                    defaultLocale: lang.defaultLocale
                }}
            />
            <main id="main" className={styles.layoutContent}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
