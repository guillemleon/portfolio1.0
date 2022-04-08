import * as React from "react"
import Layout from "../../components/layout/layout";
import * as styles from './projects-page.module.scss';
import {graphql} from "gatsby";

type RenderProps = {
    data: any,
    pageContext
}

const ProjectsPage:React.FC<RenderProps> = ({ data, pageContext }) => {

    return (
        <Layout header={data.datoCmsHeader}>
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
    }
`


export default ProjectsPage
