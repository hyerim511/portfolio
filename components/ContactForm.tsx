import { useRef, useState } from "react"
import styles from '@styles/components/contactForm.module.scss'
import ClearIcon from '@mui/icons-material/Clear'
import emailjs from '@emailjs/browser'

export default function ContactForm(props: any) {
    const form = useRef(null)
    const [isSended, setSent] = useState(true)

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_0gvw4tj', 'template_79gz5ng', form.current!, '_MjTAr3ks5cV7_Bw7')
            .then((result) => {
                console.log(result.text)
                setSent(false)
            }, (error) => {
                console.log(error.text)
            })
        }
    return (
        <div className={styles.contact}>
            <div onClick={props.close} className={styles.close}>
                <ClearIcon sx={{ fontSize: 40 }} />
            </div>
            {isSended ? 
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">Name</label>
                    <input type="text" name="user_name" id="user_name" />
                    <label htmlFor="user_email">Email</label>
                    <input type="email" name="user_email" id="user_email" />
                    <label htmlFor="message">Message to Haley</label>
                    <textarea name="message" id="message"></textarea>
                    <input type="submit" value="Send this message" />
                </form>
                : 
                <div className={styles.text}>
                    <p style={{fontSize: "3em"}}>Thanks!</p>
                    <p>I&apos;ll answer as soon as possible :)</p>
                </div>
            }
        </div>
    )
}