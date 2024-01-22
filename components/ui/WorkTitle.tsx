'use client'
import styles from '@styles/components/workLayout.module.scss'

export default function WorkTitle(props: any) {
    const darkMode = props.darkMode
    const skill = props.skill
    return (
        <div className={darkMode ? styles.titleDark : styles.titleLight} style={{color: props.color || "inherit"}}>
                <h1>{props.title}</h1>
                <ul>
                    {
                        skill.map((item: any) => <li key={item} style={{backgroundColor: props.color}}>{item}</li>)
                    }
                </ul>
        </div>
    )
}