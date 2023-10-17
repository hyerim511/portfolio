'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from '@styles/contactPage.module.scss'
import ClearIcon from '@mui/icons-material/Clear';


export default function Contact() {
    const [email, setEmail] = useState("email")
    const [linkedin, setLinkedin] = useState("linkedin")
    const textEmail = () => {
        setEmail("kimhyerim511@gmail.com")
    }
    return (
        <main className={styles.contact}>
            <Link href='/'>
                <ClearIcon sx={{ fontSize: 80 }} />
            </Link>
            <ul>
                <li onMouseEnter={()=>setEmail("click to copy")} onMouseLeave={()=>setEmail("email")} onClick={() => {navigator.clipboard.writeText("kimhyerim511@gmail.com")}}>{email}</li>
                <li onMouseEnter={()=>setLinkedin("click to visit")} onMouseLeave={()=>setLinkedin("linkedin")}><Link href="">{linkedin}</Link></li>
                <li>github</li>
            </ul>
            <div>
                <p>My name is Hyerim <span>Haley</span> Kim</p>
                <p>I&apos;m in <span>Vancouver</span> now!</p>
                <p>I use Next.js with TypeScript and SCSS for this site</p>
            </div>
        </main>
    )
}