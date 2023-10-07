'use client'
import Image from 'next/image'
import imageDesign from './images/readvice-3.png'
import imageDev1 from './images/dev1.png'
import imageDev2 from './images/dev2.png'
import imageDev3 from './images/dev3.png'

import WorkTitle from '@/components/WorkTitle'
import WorkText from '@/components/WorkText'
import WorkLink from '@/components/WorkLink'
import DevSection from '@/components/DevSection'
import BtnBack from '@/components/BtnBack'

import styles from './page.module.scss'

export default function Kavecon() {
    const devTexts = [
        {
            title: "OOP Paradigm",
            paragraph: "The foundation of the site is built on the Object-Oriented Programming (OOP) paradigm, ensuring scalability and maintainability.",
            image: imageDev1
        },
        {
            title: "DAO with PDO",
            paragraph: "We implemented Data Access Object (DAO) using PHP Data Object (PDO) to seamlessly connect with the MySQL database.",
            image: imageDev2
        },
        {
            title: "HTTP protocol",
            paragraph: "HTTP requests, including GET and POST, facilitate efficient communication with the database. We also employed SESSION for post-login page control.",
            image: imageDev3
        }
    ]
    const pointColor = "#57FF79"

    return (
        <main className={styles.kavecon}>
            <WorkTitle 
                lightMode={false} 
                title="kavecon"
                skill={["design"]}
                color={pointColor}
            />
            <BtnBack />
            <section className={styles.contentFirst}>
                <WorkText 
                    paragraph="KAVECON is a live streaming website based in South Korea that provides live streaming services, especially for K-pop concerts. This project started due to the need for renewal. They have made several changes to the functions since the beginning, and some UX and UI designs were not fitting at the start."
                />
                <WorkText 
                    title="Requirements" 
                    paragraph={`The concept was inspired by stage lights and is integrated throughout the entire site. The client also wanted to change the CI color, so thThe site is for international users. It's changed 4 different languages (EN, KR, JP, CH) automatically, and the default is English.\n
                    The design should be looking NEW.\n                  
                    Each concert page should be separated(not including information of other concerts).e primary color was applied to the website and branding. The background was also changed from light to dark colors to highlight the content and the concept.`}
                    padding="0"
                />
                <div className={styles.firstImg}></div>
                <div style={{paddingTop: "10%"}}>
                    <div className={styles.concept}>
                        <WorkText 
                            title="Concept" 
                            paragraph="The concept was inspired by stage lights and is integrated throughout the entire site. The client also wanted to change the CI color, so the primary color was applied to the website and branding. The background was also changed from light to dark colors to highlight the content and the concept."
                            padding="10%"
                        />
                        <div className={styles.conceptimg}>NEW</div>
                    </div>
                    <div className={styles.concept}>
                        <WorkText 
                            title="Concept" 
                            paragraph="The concept was inspired by stage lights and is integrated throughout the entire site. The client also wanted to change the CI color, so the primary color was applied to the website and branding. The background was also changed from light to dark colors to highlight the content and the concept."
                            padding="10%"
                        />
                        <div className={styles.conceptimg}>NEW</div>
                    </div>
                </div>
            </section>
            <section className={styles.contentSecond}>
                <WorkText 
                    title="Concept" 
                    paragraph="The concept was inspired by stage lights and is integrated throughout the entire site. The client also wanted to change the CI color, so the primary color was applied to the website and branding. The background was also changed from light to dark colors to highlight the content and the concept."
                />
                <Image
                    src={imageDesign}
                    alt="readvice-subpage" 
                />
            </section>
            <WorkLink color={pointColor} web={true}/>
        </main>
    )
}