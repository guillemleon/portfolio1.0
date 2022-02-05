import * as React from "react"
import * as styles from './skills.module.scss'
import {useEffect, useRef, useState} from "react"

type RenderProps = {}

const About:React.FC<RenderProps> = (pageContext) => {

    const animatedElements = {
        title: useRef(null),
        selector1: useRef(null),
        selector2: useRef(null),
        selector3: useRef(null),
        allGroupSkills: useRef(null),
    };
    const skillsDataInitial = [
        {
            id: "skill-group-1",
            group: "front",
            selected: true,
            style: styles.selector1,
            selectedStyle: styles.selector1selected,
            data: [
                { name: "React", icon: "" },
                { name: "React Native", icon: "" },
                { name: "Redux", icon: "" },
                { name: "Gatsby", icon: "" },
                { name: "Angular", icon: "" },
                { name: "Typescript", icon: "" },
                { name: "Javascript", icon: "" },
                { name: "SCSS", icon: "" },
                { name: "CSS", icon: "" },
                { name: "HTML", icon: "" },
            ]
        },
        {
            id: "skill-group-2",
            group: "back",
            selected: false,
            style: styles.selector2,
            selectedStyle: styles.selector2selected,
            data: [
                { name: "NodeJS", icon: "" },
                { name: "Express", icon: "" },
                { name: "Java", icon: "" },
                { name: "Spring", icon: "" },
                { name: "Django", icon: "" },
                { name: "MySQL", icon: "" },
                { name: "Postgres", icon: "" },
                { name: "MongoDB", icon: "" },
            ]
        },{
            id: "skill-group-3",
            group: "tools",
            selected: false,
            style: styles.selector3,
            selectedStyle: styles.selector3selected,
            data: [
                { name: "Azure DevOps", icon: "" },
                { name: "Git", icon: "" },
                { name: "DatoCMS", icon: "" },
                { name: "Webstorm", icon: "" },
                { name: "Visual Studio Code", icon: "" },
                { name: "Linux", icon: "" },
            ]
        }
    ]
    const [skillsData, setSkillsData] = useState(skillsDataInitial)
    const [skillsList, setSkillsList] = useState(skillsData[0].data)
    const [currentSkillGroupName, setCurrentSkillGroupName] = useState(skillsData[0].group)

    useEffect(() => {
        loadInitialAnimationState()
    })

    return (
        <section id="skills" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>MY SKILLS</h1>
                <div className={styles.skillsData}>
                    <div className={styles.selectorsContainer}>
                        {skillsData.map((skillGroup) => {

                            return (
                                <button
                                    id={skillGroup.id}
                                    key={skillGroup.id}
                                    className={skillGroup.selected ? skillGroup.selectedStyle : skillGroup.style}
                                    onClick={() => selectSkillsGroup(skillGroup.id)}
                                >
                                    {skillGroup.group}
                                </button>
                            )

                        })}
                    </div>
                    <ul className={styles.skillsCollectionContainer}>
                        <h2 className={styles.currentSkillGroupTitle}>{currentSkillGroupName}</h2>
                        {skillsList.map((skill) => {
                            return (
                                <li className={styles.skillContainer}>
                                    <p className={styles.skill}>{skill.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )

    function loadInitialAnimationState() {}

    function selectSkillsGroup(id: string): void {
        let skillsDataCopy = [...skillsData]

        skillsDataCopy.map((item) => {
            if (item.id === id) {
                item.selected = true
                setSkillsList(item.data)
                setCurrentSkillGroupName(item.group)
            } else {
                item.selected = false
            }
        })

        setSkillsData(skillsDataCopy);
    }

}


export default About
