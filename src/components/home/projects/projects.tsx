import * as React from "react"
import * as styles from "./projects.module.scss"
import {useEffect} from "react"
import {graphql} from "gatsby"
import {ProjectsFieldsFragment} from "../../../../graphql-types"
import Project from "./project/project"

type RenderProps = {
    data: ProjectsFieldsFragment,
    lang: {
        locale: string,
        defaultLocale: string
    }
}

const Projects:React.FC<RenderProps> = ({data, lang}) => {

    return (
        <section id="projects" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{data.projectsTitle}</h1>
                <div className={styles.underline} />
                <div className={styles.highlightedProject}>
                    <Project data={data.highlightedProject[0]} isHighlighted={true} />
                </div>
                <div className={styles.projects}>
                    <Project data={data.projects[0]} color={"#0CF2B1"} />
                    <Project data={data.projects[1]} color={"#AB05F2"} />
                    <a href={lang.locale === lang.defaultLocale ? `/projects` : `/${lang.locale}/projects`} className={styles.seeAll}>SEE ALL</a>
                </div>
            </div>
        </section>
    )
}

export const fragment = graphql`
    fragment ProjectsFields on DatoCmsHomePage {
        projectsTitle
        highlightedProject {
            ...ProjectFields
        }
        projects {
            ...ProjectFields
        }
    }
`

export default Projects
