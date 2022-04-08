import * as React from "react"
import * as styles from './skills.module.scss'
import {useEffect, useRef, useState} from "react"
import Skills from "../../../config/skills";

type RenderProps = {}

const About:React.FC<RenderProps> = (pageContext) => {

    const animatedElements = {
        title: useRef(null),
        selectors: useRef(null),
        allGroupSkills: useRef(null),
    };
    const skillsDataInitial = Skills.skillsList;
    const [skillsData, setSkillsData] = useState(skillsDataInitial)
    const [skillsList, setSkillsList] = useState(skillsData[0].data)
    const [currentSkillGroupName, setCurrentSkillGroupName] = useState(skillsData[0].group)

    useEffect(() => {
        if(typeof window !== undefined) {
            const skills = typeof window !== "undefined" && document.getElementById("skills");
            if(skills && window.scrollY >= skills.offsetTop - 500) loadInitialAnimationState()
        }
        window.addEventListener('scroll', () => {
            if(typeof window !== undefined) {
                const skills = typeof window !== "undefined" && document.getElementById("skills");
                if(skills && window.scrollY >= skills.offsetTop - 500) loadInitialAnimationState()
            }
        })
    }, [])

    return (
        <section id="skills" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title} ref={animatedElements.title}>MY SKILLS</h1>
                <div className={styles.skillsData}>
                    <div className={styles.selectorsContainer} ref={animatedElements.selectors}>
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
                    <ul className={styles.skillsCollectionContainer} ref={animatedElements.allGroupSkills}>
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

    function loadInitialAnimationState() {
        let index = 0;
        for (const [key, value] of Object.entries(animatedElements)) {
            if(key === "title" || key === "allGroupSkills") {
                if(value.current) {
                    setInterval(() => {
                        value.current.style.transform = "translateY(0px)";
                    }, 200 * index)
                }
            } else {
                if(value.current) {
                    for (let i of value.current.children) {
                        setInterval(() => {
                            i.style.transform = "translateY(0px)";
                        }, 200 * index)
                        index++;
                    }
                    index = 0;
                }
            }
            index++;
        }
    }

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
