import Link from 'next/link'
import styles from './workTitle.module.scss'
import ArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function WorkLink() {
    return (
        <section className={styles.link}>
            <button><Link href=""><ArrowRight />See Github</Link></button>
            <button><Link href=""><ArrowRight />Any Question?</Link></button>
        </section>
    )
}