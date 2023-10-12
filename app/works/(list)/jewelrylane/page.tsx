'use client'
import { useRef } from "react";

import Image from 'next/image'
// import imageFlowchart from './images/readvice-2.png'
// import imageDesign from './images/readvice-3.png'
// import imageDev1 from './images/dev1.png'
// import imageDev2 from './images/dev2.png'
// import imageDev3 from './images/dev3.png'

import WorkTitle from '@/components/WorkTitle'
import WorkText from '@/components/WorkText'
import WorkLink from '@/components/WorkLink'
import DevSection from '@/components/DevSection'
import BtnBack from '@/components/BtnBack'

import styles from './page.module.scss'

export default function JewelryLane() {
    const pointColor = "#3D2624"
    const devTexts = [
            {
                title: "Product Showcase with Api",
                paragraph: "The website allows users to browse and view various jewelry products, including images, descriptions and pricing. It showcases the available designs, styles, and materials used in the jewelry pieces. The database based on Cartier Jewelry.",
                // image: imageDev1
            },
            {
                title: "Product Searching, Sorting and Filtering",
                paragraph: "To help customers find specific jewelry items, the website may have search functionality and filtering options based on categories such as type (necklaces, earrings, rings), materials (gold, silver, gemstones), price range, and more.",
                // image: imageDev2
            },
            {
                title: "HTTP protocol",
                paragraph: "HTTP requests, including GET and POST, facilitate efficient communication with the database. We also employed SESSION for post-login page control.",
                // image: imageDev3
            }
        ]

    return (
        <main className={styles.jewelry}>
            <WorkTitle 
                lightMode={true} 
                title="jewely lane"
                skill={["design","development","vue.js","api"]}
                color={pointColor}
            />
            <BtnBack />
            <section className={styles.contentFirst}>
                    <WorkText 
                        title={`Project Period: Jun 12 - Jul 5, 2023 \n Team Members: 3 (including myself)`}
                        paragraph="The JewelryLane project aims to develop a visually stunning and user-friendly e-commerce website for a jewelry shop, utilizing the power of the Vue.js framework and integrating it with an API for seamless product management and customer interactions. The website will provide a good shopping experience, showcasing a wide range of exquisite jewelry pieces while incorporating modern design principles and responsive web development techniques."
                    />
                <WorkText 
                    title="Planning" 
                    paragraph="To emphasize simplicity and user-friendliness, we prioritized key functions such as book search and personalized lists. This streamlined approach ensures a seamless and intuitive user experience."
                />
                {/* <Image
                    src={imageFlowchart}
                    alt="readvice-flowchart" 
                /> */}
            </section>
            <section className={styles.contentSecond}>
                <WorkText 
                    title="Design" 
                    paragraph="Derived from the fusion of 'read' and 'advice,' the name [readvice] reflects our vision. Our branding strategy intertwines these elements into a dynamic logo. While the platform centers around books, we consciously opted for a vibrant design style to infuse a sense of joy and accessibility."
                />
                {/* <Image
                    src={imageDesign}
                    alt="readvice-subpage" 
                /> */}
            </section>
            <DevSection devTexts={devTexts}/>
            <section className={styles.contentLast}>
                <h4>Key Achievements</h4>
                <ul>
                    <li>Developed a dynamic book data website using PHP, enabling seamless user interaction.</li>
                    <li>Implemented an intuitive search functionality, enhancing book discovery.</li>
                    <li>Integrated advanced filtering options for an enhanced browsing experience.</li>
                    <li>Empowered users to create and manage personalized book lists.</li>
                    <li>Introduced a robust comment system to foster user engagement and discussions.</li>
                    <li>Ensured optimal navigation through organized book data and pagination.</li>
                </ul>
                <h4>Future Enhancements</h4>
                <ul>
                    <li>Integrate social media sharing to facilitate book recommendations and widen user reach.</li>
                    <li>Implement direct purchase links, allowing users to buy books seamlessly.</li>
                    <li>Enrich user experience with an advanced recommendation algorithm, driven by user behavior analysis.</li>
                </ul>
            </section>
            <WorkLink git={true}/>
        </main>
    )
}