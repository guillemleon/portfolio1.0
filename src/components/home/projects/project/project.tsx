import * as React from "react"
import * as styles from './project.module.scss'
import {graphql} from "gatsby";
import {ProjectFieldsFragment} from "../../../../../graphql-types";
import {GatsbyImage} from "gatsby-plugin-image";
import useWindowWidth from "../../../../hooks/use-window-width";

type RenderProps = {
    data: ProjectFieldsFragment,
    isHighlighted?: boolean,
    color?: string
}

const Project:React.FC<RenderProps> = ({data, isHighlighted, color}) => {

    const isMobile = useWindowWidth() < 640;
    const borderSize = isMobile ? 5 : 10;

    return (
        <a
            href={data.url}
            target={"_blank"}
            className={isHighlighted ? styles.linkContainerHighlighted : styles.linkContainer}
        >
            <div
                className={styles.container}
                style={{
                    border: isHighlighted ? `${borderSize}px solid black` : `${borderSize}px solid ${color}`
                }}
            >
                <div className={styles.backgroundImage}>
                    <GatsbyImage
                        image={data.backgroundImage.gatsbyImageData}
                        alt={"Project"}
                        className={styles.image}
                    />
                </div>
                <div className={isHighlighted ? styles.captionHighlighted : styles.caption}>
                    <h2 className={isHighlighted ? styles.titleHighlighted : styles.title}>{data.title}</h2>
                    <p className={isHighlighted ? styles.subtitleHighlighted : styles.subtitle}>{data.subtitle}</p>
                </div>
            </div>
        </a>
    )
}

export const fragment = graphql`
    fragment ProjectFields on DatoCmsProject {
        title
        subtitle
        url
        backgroundImage {
          gatsbyImageData(layout: FIXED)
          format
          alt
        }
    }
`

export default Project
