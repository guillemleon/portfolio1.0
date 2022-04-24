import * as React from "react"
import * as styles from "./projects.module.scss"
import {useEffect, useRef} from "react"
import {graphql} from "gatsby"
import {ProjectsFieldsFragment} from "../../../../graphql-types"
import {displayImage} from "../../../global/functions/functions";

type RenderProps = {
    data: ProjectsFieldsFragment,
    lang: {
        locale: string,
        defaultLocale: string
    }
}

const Projects:React.FC<RenderProps> = ({data, lang}) => {

    const projects = useRef(null);
    const projectsList = useRef(null);

    useEffect(() => {
        loadAnimation()
        window && window.addEventListener('scroll', (e) => {
            loadAnimation()
        })
    }, [])

    return (
        <section ref={projects} id="projects" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{data.projectsTitle}</h1>
                <div className={styles.underline} />
                <ul ref={projectsList} className={styles.list}>
                    {data.projects.map(p => {
                        return (
                            <li className={styles.project}>
                                {displayImage(p.backgroundImage, styles.image, "cover")}
                                <a href={p.url} target={"_blank"} className={styles.overlay}>
                                    <h4 className={styles.projectTitle}>{p.title}</h4>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )

    function loadAnimation() {
        if(window.pageYOffset >= projects.current.offsetTop - 300) {
            projectsList.current.childNodes.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = "1"
                }, 200 * index)
            })
        }

    }
}

export const fragment = graphql`
    fragment ProjectsFields on DatoCmsHomePage {
        projectsTitle
        projects {
            title
            subtitle
            url
            backgroundImage {
              gatsbyImageData(layout: FIXED)
              format
              alt
            }
        }
    }
`

export default Projects
