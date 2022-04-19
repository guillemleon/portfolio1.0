import React from 'react';
import * as styles from './layout.module.scss';
import Header from "./header/header";
import {HeaderFieldsFragment} from "../../../graphql-types";
import Footer from "./footer/footer";

type RenderProps = {
    header: HeaderFieldsFragment,
    footer: any,
    lang?: {
        locale: string,
        defaultLocale: string
    }
}

const Layout: React.FC<RenderProps> = ({ header, footer, children, lang }) => {
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
            <Footer data={footer} lang={lang} />
        </div>
    );
}

export default Layout;
