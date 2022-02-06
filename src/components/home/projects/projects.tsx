import * as React from "react"
import * as styles from './projects.module.scss'
import {useEffect} from "react"

type RenderProps = {}

const Projects:React.FC<RenderProps> = (pageContext) => {

    useEffect(() => {}, [])

    return (
        <section id="projects" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>PROJECTS</h1>
            </div>
        </section>
    )
}


export default Projects
