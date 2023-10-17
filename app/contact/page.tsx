'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from '@styles/contactPage.module.scss'
import ClearIcon from '@mui/icons-material/Clear';


export default function Contact() {
    const [email, setEmail] = useState("email")
    const [linkedin, setLinkedin] = useState("linkedin")
    const [github, setGithub] = useState("github")

    return (
        <main className={styles.contact}>
            <Link href='/'>
                <ClearIcon sx={{ fontSize: 80 }} />
            </Link>
            <ul>
                <li onMouseEnter={()=>setEmail("click to copy")} onMouseLeave={()=>setEmail("email")} onClick={() => {navigator.clipboard.writeText("kimhyerim511@gmail.com")}}>{email}</li>
                <li onMouseEnter={()=>setLinkedin("click to visit")} onMouseLeave={()=>setLinkedin("linkedin")}><Link href="https://www.linkedin.com/in/hyerim511/" target='_blank'>{linkedin}</Link></li>
                <li onMouseEnter={()=>setGithub("click to visit")} onMouseLeave={()=>setGithub("github")}><Link href="https://github.com/hyerim511/" target='_blank'>{github}</Link></li>
            </ul>
            <div>
                <p>My name is Hyerim <span>Haley</span> Kim</p>
                <p>I&apos;m in <span>Vancouver</span> now!</p>
                <small>I use Next.js with TypeScript for the main framework, SCSS for styling, and Vectary for 3D objects.</small>
            </div>
        </main>
    )
}