import * as React from "react"
import * as styles from './skills.module.scss'
import {useEffect, useRef, useState} from "react"
import Skillss from "../../../config/skills";

type RenderProps = {}

const Skills:React.FC<RenderProps> = (pageContext) => {

    return (
        <section id="skills" className={styles.container}>
            <div className={styles.content}>

            </div>
        </section>
    )

}


export default Skills
