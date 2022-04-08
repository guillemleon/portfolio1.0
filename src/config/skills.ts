import * as styles from "../components/home/skills/skills.module.scss";

export default class Skills {
    public static skillsList = [
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
}