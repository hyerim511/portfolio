'use client'

import Image from 'next/image'
import imageChart from '@public/works/jewelry/jewelry-2.png'
import imageDev1 from '@public/works/jewelry/dev-1.png'
import imageDev2 from '@public/works/jewelry/dev-2.png'
import imageDev3 from '@public/works/jewelry/dev-3.png'

import WorkTitle from '@components/WorkTitle'
import WorkText from '@components/WorkText'
import WorkLink from '@components/WorkLink'
import DevSection from '@components/DevSection'
import BtnBack from '@components/BtnBack'

import styles from '@styles/works/jewelry.module.scss'

export default function JewelryLane() {
    const pointColor = "#3D2624"
    const devTexts = [
            {
                title: "Product Showcase with Api",
                paragraph: "The website allows users to browse and view various jewelry products, including images, descriptions and pricing. It showcases the available designs, styles, and materials used in the jewelry pieces. The database based on Cartier Jewelry.",
                image: imageDev1
            },
            {
                title: "Product Searching, Sorting and Filtering",
                paragraph: "To help customers find specific jewelry items, the website may have search functionality and filtering options based on categories such as type (necklaces, earrings, rings), materials (gold, silver, gemstones), price range, and more.",
                image: imageDev2
            },
            {
                title: "Booking System Utilizing POST Request",
                paragraph: "Our booking system employs the POST HTTP request method to process booking form submissions. The form data is efficiently saved in JSON format for future reference and management.",
                image: imageDev3
            }
        ]

    return (
        <main className={styles.jewelry}>
            <WorkTitle 
                lightMode={true} 
                title="jewely lane"
                skill={["development","vue.js","api","UI/UX design"]}
                color={pointColor}
            />
            <BtnBack />
            <section className={styles.contentFirst}>
                <WorkText 
                    title={`Project Period: Jun 12 - Jul 5, 2023 \n Team Members: 3 (including myself)`}
                    paragraph="The JewelryLane project aims to develop a visually stunning and user-friendly e-commerce website for a jewelry shop, utilizing the power of the Vue.js framework and integrating it with an API for seamless product management and customer interactions. The website will provide a good shopping experience, showcasing a wide range of exquisite jewelry pieces while incorporating modern design principles and responsive web development techniques."
                />
                
            </section>
            <section className={styles.contentSecond}>
                <WorkText 
                    title="Planning" 
                    paragraph="Using the Cartier database as a foundation, we aimed to create a straightforward e-commerce website. This project involved the development of an interactive client-side webpage built with Vue.js and an API constructed with PHP."
                />
                <Image
                    src={imageChart}
                    alt="Jewelry Lane - flowchart" 
                />
            </section>
            <DevSection devTexts={devTexts}/>
            <section className={styles.contentLast}>
                <h4>Key Achievements</h4>
                <ul>
                    <li>Developed product listing pages and individual product detail pages with API integration.</li>
                    <li>Implemented advanced features, including filtering, searching, and sorting functions for enhanced user experience.</li>
                    <li>Designed and integrated a user-friendly &lsquo;Add to Cart&rsquo; functionality.</li>
                    <li>Stored booking data efficiently within the API for streamlined management.</li>
                    <li>Ensured a responsive layout with a mobile navigation system for an optimized user interface.</li>
                </ul>
            </section>
            <WorkLink git="https://github.com/hyerim511/Jewelrylane/" />
        </main>
    )
}