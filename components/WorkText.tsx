'use client'
import styles from '@styles/components/workLayout.module.scss'
import { motion } from "framer-motion"

export default function WorkText(props: any) {
    return (
        <div className={styles.text} style={{paddingTop: props.padding}} >
            <h4>{props.title}</h4>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
            >{props.paragraph}</motion.p>
        </div>
    )
}