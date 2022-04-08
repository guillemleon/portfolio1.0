import * as React from "react"
import Layout from "../../components/layout/layout";
import * as styles from './contact-page.module.scss';
import {graphql} from "gatsby";

type RenderProps = {
    data: any,
    pageContext
}

const ContactPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    return (
        <Layout header={data.datoCmsHeader}>
            <div className={styles.container}>

            </div>
        </Layout>
    )


}

export const pageQuery = graphql`
    query Contact($locale: String!) {
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
    }
`


export default ContactPage
