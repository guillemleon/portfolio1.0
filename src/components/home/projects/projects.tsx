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
