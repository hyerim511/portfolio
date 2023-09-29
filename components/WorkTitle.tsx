'use client'
import styles from './WorkTitle.module.scss'

export default function WorkTitle(props: any) {
    const isMode = props.mode
    const skill = props.skill
    return (
        <div className={isMode ? styles.titleLight : styles.titleDark}>
                <h1>{props.title}</h1>
                <ul>
                    {
                        skill.map((item: any) => <li key={item}>{item}</li>)
                    }
                </ul>
        </div>
    )
}