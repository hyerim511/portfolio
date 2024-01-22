'use client'
import { useState } from 'react'
import Image from 'next/image'
import Accordion from '@/components/ui/Accordion'
import styles from '@styles/components/devSection.module.scss'

export default function DevSection(props: any) {
    const [clicked, setClicked] = useState(0)
    const { devTexts } = props
    const [image, setImage] = useState(devTexts[0].image)
    const handleToggle = (index: any) => {
        if (clicked === index) {
         return setClicked(0)
        }
        setClicked(index);
        switch (index) {
            case 0: 
                setImage(devTexts[0].image)
                break;
            case 1: 
                setImage(devTexts[1].image)
                break;
            case 2: 
                setImage(devTexts[2].image)
                break;
            default:
                setImage(devTexts[0].image)
                break;
        }
    }
    
    return (
        <section className={styles.contentDev}>
            <div className={styles.devLeft}>
                <h4>Development</h4>
                <ul>
                    {
                        devTexts.map((devText: any, index: any) => 
                            <Accordion key={index} devText={devText} onToggle={() => handleToggle(index)} active={clicked === index}/>
                        )
                    }
                </ul>
            </div>
            <div className={styles.devRight}>
                <Image
                    src={image}
                    alt="readvice-subpage" 
                />
            </div>
        </section>
    )
}