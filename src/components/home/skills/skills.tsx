import * as React from "react"
import * as styles from './skills.module.scss'
import Skillss from "../../../config/skills";
import {graphql} from "gatsby";
import {SkillsFieldsFragment} from "../../../../graphql-types";
import {useRef, useState} from "react";
import SkillPercentage from "./skill-percentage/skill-percentage";

type RenderProps = {
    data: SkillsFieldsFragment
}

const Skills:React.FC<RenderProps> = ({data}) => {

    const getSkillsGroup = () => {
        let group = [];
        data.skills.map((item, index) => {
            group.push({id: item.id, title: item.title, selected: index === 0 ? true : false});
        })
        return group;
    }
    const slider = useRef(null);
    const [skillsGroup, setSkillsGroup] = useState(getSkillsGroup())

    return (
        <section id="skills" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{data.skillsTitle}</h1>
                <div className={styles.underline} />
                <nav className={styles.selectors}>
                    {data.skills.map(skill => {
                        return (
                            <div key={skill.id} className={styles.skillTitle} onClick={(e) => {handleSelection(e, skill)}}>{skill.title}</div>
                        )
                    })}
                    <div ref={slider} className={styles.slider} />
                </nav>
                <ul className={styles.list}>
                    {data.skills.find(s => s.id === (skillsGroup.find(s => s.selected === true).id)).skills.map(skill => {
                        return (
                            <SkillPercentage data={skill} />
                        )
                    })}
                </ul>
            </div>
        </section>
    )

    function handleSelection(e, skill) {
        // Move slider
        slider.current.style.left = e.currentTarget.offsetLeft + "px";
        // Select group
        let copyGroup = [...skillsGroup];
        copyGroup.map(item => {
            item.selected = false;
            if (item.id === skill.id) item.selected = true;
        })
        setSkillsGroup(copyGroup);
    }

}

export const fragment = graphql`
    fragment SkillsFields on DatoCmsHomePage {
        skills {
            id
            title
            skills {
                id
                name
                percentage
            }
        }
        skillsTitle
    }
`


export default Skills
