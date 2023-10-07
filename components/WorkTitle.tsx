'use client'
import styles from './workTitle.module.scss'

export default function WorkTitle(props: any) {
    const lightMode = props.lightMode
    const skill = props.skill
    return (
        <div className={lightMode ? styles.titleLight : styles.titleDark} style={{color: props.color}}>
                <h1>{props.title}</h1>
                <ul>
                    {
                        skill.map((item: any) => <li key={item} style={{backgroundColor: props.color}}>{item}</li>)
                    }
                </ul>
        </div>
    )
}