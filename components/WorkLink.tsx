import Link from 'next/link'
import styles from './workTitle.module.scss'
import ArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function WorkLink(props: any) {
    return (
        <section className={styles.link}>
            {props.web && <button style={{color: props.color}}><Link href=""><ArrowRight />Visit Website</Link></button>}
            {props.git && <button style={{color: props.color}}><Link href=""><ArrowRight />See Github</Link></button>}
            <button style={{color: props.color}}><Link href=""><ArrowRight />Any Question?</Link></button>
        </section>
    )
}