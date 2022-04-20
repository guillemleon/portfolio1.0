import * as React from "react"
import * as styles from './about-component.module.scss'
import {graphql} from "gatsby";
import {displayImage} from "../../../../global/functions/functions";

type RenderProps = {
    data: any
}

const AboutComponent:React.FC<RenderProps> = ({data}) => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {displayImage(data.icon, styles.icon)}
            </div>
            <h4 className={styles.title}>{data.title}</h4>
            <p className={styles.subtitle}>{data.subtitle}</p>
        </div>
    )

}

export const fragment = graphql`
    fragment AboutComponentFields on DatoCmsHomePage {
        aboutItems {
            title
            subtitle
            id
            icon {
                format
                gatsbyImageData(layout: FIXED)
                url
                alt
            }
        }
    }
`

export default AboutComponent
