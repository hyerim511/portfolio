'use client'
import styles from './devSection.module.scss'

export default function DevSection(props: any) {
    const {devText, index, onToggle, active} = props
    return (
        <li key={index} onClick={onToggle}>
            <h5>{devText.title}{active ? '-' : '+'}</h5>
            {active && <p>{devText.paragraph}</p>}
        </li>
    )
}