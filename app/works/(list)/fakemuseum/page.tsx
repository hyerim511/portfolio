'use client'
import { useRef } from "react";

import Image from 'next/image'

import Link from 'next/link'

import WorkTitle from '@components/WorkTitle'
import WorkText from '@components/WorkText'
import WorkLink from '@components/WorkLink'
import DevSection from '@components/DevSection'
import BtnBack from '@components/BtnBack'

import styles from '@styles/works/fake.module.scss'

export default function FakeMuseum() {
    // const pointColor = "#000"
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
        <main className={styles.fakemuseum}>
            <WorkTitle 
                lightMode={true} 
                title="fake museum"
                skill={["design","development","javascript"]}
            />
            <BtnBack />
            <section className={styles.contentFirst}>
                    <WorkText 
                        title={`Project Period: Oct 28 - Nov 6, 2022`}
                        paragraph={<span><Link href="http://www.fakemuseum.kr/">fAKE mUSEUM(Kang Jiyun, Lim Nare)</Link> <br />Graphic Design by <Link href="http://www.fakemuseum.kr/">PAPER COMPANY</Link></span>}
                    />
                <WorkText 
                    paragraph="fAKE mUSEUM is a project related to virtual exhibition spaces and images surrounding exhibitions. It deals with large-scale exhibition images that are sometimes distributed through online media, which can be even more prominent than the actual artworks or exhibits. Should we only perceive these exhibition images, which are created and displayed as exhibitions open and close, as secondary elements that are indirectly conveyed through online media such as SNS?

                    In order to explore the identity and significance of exhibition images that are no longer confined to artworks and exhibitions, as well as their relationship with [exhibitions], fAKE mUSEUM constructs and unveils a virtual exhibition space called 'fAKE mUSEUM,' where visitors can create or delete internal and external elements."
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