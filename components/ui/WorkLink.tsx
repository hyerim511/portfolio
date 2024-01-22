'use client'
import Link from 'next/link'
import styles from '@styles/components/workLayout.module.scss'
import ArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight'
import Contact from './ContactForm'
import Popup from 'reactjs-popup'
import { useState } from "react"

export default function WorkLink(props: any) {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)

    return (
        <section className={styles.link}>
            { props.web ? 
                <button style={{color: props.color || "inherits"}}>
                    <Link href={props.web} target="_blank"><ArrowRight />Visit Website</Link>
                </button>
                : <button style={{color: props.color || "inherits"}}>
                    <Link href={props.git}  target="_blank"><ArrowRight />See Github</Link>
                </button>
            }
            <button style={{color: props.color}} onClick={() => setOpen(o => !o)}>
                <ArrowRight />Any Question?
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <Contact close={closeModal}/>
            </Popup>
        </section>
    )
}