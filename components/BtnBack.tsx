import Link from 'next/link'
import SouthIcon from '@mui/icons-material/South';
import styles from '@styles/components/btn.module.scss'

export default function BtnBack() {
    return (
        <div className={styles.back}>
            <Link href='/works'>
                <p>Back to List</p>
                <SouthIcon sx={{ fontSize: 80 }} />
            </Link>
        </div>
    )
}