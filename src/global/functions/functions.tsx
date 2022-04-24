import {ReactSVG} from "react-svg";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";

export function displayImage(img, style, objectFit: any = "contain") {
    if (img.format === "svg") {
        return <ReactSVG src={img.url} className={style}/>
    } else {
        return (
            <GatsbyImage
                image={img.gatsbyImageData}
                alt={img.alt || ""}
                className={style}
                objectFit={objectFit}
            />
        )
    }
}