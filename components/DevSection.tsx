'use client'
import { useState } from 'react';
import styles from './devSection.module.scss'

import Image from 'next/image'
import imageDev1 from '@/app/works/(list)/readvice/dev1.png'
import imageDev2 from '@/app/works/(list)/readvice/dev2.png'
import imageDev3 from '@/app/works/(list)/readvice/dev3.png'



export default function DevSection(props: any) {
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(imageDev1);
    const devText = props.text
    const showContent = (item: any) => {
        setIsActive(!isActive)
        const itemIndex = devText.indexOf(item)
        switch (itemIndex) {
            case 0: 
                setImage(imageDev1)
                break;
            case 1: 
                setImage(imageDev2)
                break;
            case 2: 
                setImage(imageDev3)
                break;
            default:
                setImage(imageDev1)
                break;
        }
    }
    return (
        <section className={styles.contentDev}>
                <div className="devLeft">
                    <h4>Development</h4>
                    <ul>
                        {
                            devText.map((item: any) => 
                                <li key={item.title} onClick={() => showContent(item)}>
                                    <h5>{item.title}</h5>
                                    <p>{item.paragraph}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="devRight">
                    <Image
                        src={image}
                        alt="readvice-subpage" 
                    />
                </div>
            </section>
    )
}