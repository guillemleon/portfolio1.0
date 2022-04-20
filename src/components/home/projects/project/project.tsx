import * as React from "react"
import * as styles from './project.module.scss'
import {graphql} from "gatsby";
import {ProjectFieldsFragment} from "../../../../../graphql-types";
import {GatsbyImage} from "gatsby-plugin-image";
import useWindowWidth from "../../../../hooks/use-window-width";
import {Fragment} from "react";

type RenderProps = {
    data: ProjectFieldsFragment,
}

const Project:React.FC<RenderProps> = ({data}) => {

    const isMobile = useWindowWidth() < 640;

    return (
        <Fragment />
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
