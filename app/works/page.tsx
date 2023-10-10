'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import ClearIcon from '@mui/icons-material/Clear';


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
                <li><a onClick={(e) => linkTo(e)}>Jewelry lane</a></li>
                <li><a onClick={(e) => linkTo(e)}>Mungmung</a></li>
                <li><a onClick={(e) => linkTo(e)}>Fake museum</a></li>
            </ul>
            <div>
                <p><Link href="https://github.com/hyerim511">See other development projects in Github</Link></p>
                <p><Link href="https://www.figma.com/proto/KQkqEg0YJ2VKtVCepYo33Q/Haley-Kim?page-id=123%3A5736&type=design&node-id=550-1498&viewport=309%2C453%2C0.12&t=WjSo5P4ImecfCJPw-1&scaling=contain&starting-point-node-id=550%3A1498&mode=design">See other Design projects in Figma</Link></p>
            </div>
        </main>
    )
}