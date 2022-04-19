import * as React from "react"
import Layout from "../../components/layout/layout";
import * as styles from './projects-page.module.scss';
import {graphql} from "gatsby";
import {ProjectsQuery} from "../../../graphql-types";

type RenderProps = {
    data: ProjectsQuery,
    pageContext
}

const ProjectsPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    return (
        <Layout
            header={data.datoCmsHeader}
            footer={data.datoCmsFooter}
            lang={{
                defaultLocale: pageContext.defaultLocale,
                locale: pageContext.locale
            }}
        >
            <div className={styles.container}>

            </div>
        </Layout>
    )


}

export const pageQuery = graphql`
    query Projects($locale: String!) {
        datoCmsHeader(locale: { eq: $locale }) {
            ...HeaderFields
        }
        datoCmsFooter(locale: { eq: $locale }) {
            ...FooterFields
        }
    }
`


export default ProjectsPage
