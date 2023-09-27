'use client'
import Link from 'next/link'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'


export default function WorkList() {
    const router = useRouter()

    function linkTo(e: any) {
        const name = e.target.innerText
        router.push(`/works/${name.toLowerCase()}`, { scroll: false })
    }

    return (
        <main className={styles.works}>
            <ul>
                <li><a onClick={(e) => linkTo(e)}>Readvice</a></li>
                <li><a href="#">Kavecon</a></li>
                <li><a href="#">Fake museum</a></li>
                <li><a href="#">Mungmung</a></li>
                <li><a href="#">Jewelry lane</a></li>
            </ul>
            <div>
                <p>See other development projects in Github</p>
                <p>See other Design projects in Figma</p>
            </div>
        </main>
    )
}