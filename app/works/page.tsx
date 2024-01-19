'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from '@styles/works.module.scss'
import ClearIcon from '@mui/icons-material/Clear'


export default function WorkList() {
    const router = useRouter()

    function linkTo(e: any) {
        const name = e.target.innerText
        router.push(`/works/${name.toLowerCase()}`, { scroll: false })
    }

    return (
        <main className={styles.works}>
            <Link href='/'>
                <ClearIcon sx={{ fontSize: 80 }} />
            </Link>
            <ul>
                <li><a onClick={(e) => linkTo(e)}>Readvice</a></li>
                <li><a onClick={(e) => linkTo(e)}>Kavecon</a></li>
                <li><a onClick={(e) => linkTo(e)}>JewelryLane</a></li>
                <li><a onClick={(e) => linkTo(e)}>Mungmung</a></li>
                <li><a onClick={(e) => linkTo(e)}>FakeMuseum</a></li>
            </ul>
            <div>
                <p><Link href="/works/other">See other projects</Link></p>
            </div>
        </main>
    )
}