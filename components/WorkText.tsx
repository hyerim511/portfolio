'use client'
import styles from './WorkTitle.module.scss'

export default function WorkText(props: any) {
    return (
        <div className={styles.text}>
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}