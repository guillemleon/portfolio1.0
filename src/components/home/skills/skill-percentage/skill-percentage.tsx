import * as React from "react"
import * as styles from './skill-percentage.module.scss'

type RenderProps = {
    data: any
}

const SkillPercentage:React.FC<RenderProps> = ({data}) => {

    return (
        <li className={styles.container}>
            <h4 className={styles.name}>{data.name}</h4>
            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{
                        width: `${data.percentage}%`,
                    }}
                />
                <h4 className={styles.percentage}>{data.percentage + '%'}</h4>
            </div>
        </li>
    )

}

export default SkillPercentage
