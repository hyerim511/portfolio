'use client'
import styles from './workTitle.module.scss'

export default function WorkText(props: any) {
    return (
        <div className={styles.text}>
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}