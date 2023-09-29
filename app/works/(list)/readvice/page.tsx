import Link from 'next/link'
import styles from './page.module.scss'

import Image from 'next/image'
import imageFlowchart from './readvice-2.png'
import imageDesign from './readvice-3.png'

import WorkTitle from '@/components/WorkTitle'
import WorkText from '@/components/WorkText'
import DevSection from '@/components/DevSection'

export default function Readvice() {
    return (
        <main className={styles.readvice}>
            <WorkTitle 
                mode={true} 
                title="readvice"
                skill={["design","development","php","mysql"]}
            />
            <section className={styles.contentFirst}>
                <WorkText 
                    title={`Project Period: May 15 to Jun 8, 2023 \n Team Members: 3 (including myself)`}
                    paragraph="[readvice] is a user-friendly book data website designed to simplify the book discovery process. Users can effortlessly search for books based on criteria like genre, title, and author. The platform also empowers users to curate their personalized book lists and engage in meaningful discussions by leaving comments on individual books. Leveraging the extensive book database of [goodreads], a renowned book community website, [readvice] offers an enhanced reading experience."
                />
                <WorkText 
                    title="Planning" 
                    paragraph="To emphasize simplicity and user-friendliness, we prioritized key functions such as book search and personalized lists. This streamlined approach ensures a seamless and intuitive user experience."
                />
                <Image
                    src={imageFlowchart}
                    alt="readvice-flowchart" 
                />
            </section>
            <section className={styles.contentSecond}>
                <WorkText 
                    title="Design" 
                    paragraph="Derived from the fusion of 'read' and 'advice,' the name [readvice] reflects our vision. Our branding strategy intertwines these elements into a dynamic logo. While the platform centers around books, we consciously opted for a vibrant design style to infuse a sense of joy and accessibility."
                />
                <Image
                    src={imageDesign}
                    alt="readvice-subpage" 
                />
            </section>
            <DevSection text={
                [
                    {
                        title: "OOP Paradigm",
                        paragraph: "The foundation of the site is built on the Object-Oriented Programming (OOP) paradigm, ensuring scalability and maintainability."
                    },
                    {
                        title: "DAO with PDO",
                        paragraph: "We implemented Data Access Object (DAO) using PHP Data Object (PDO) to seamlessly connect with the MySQL database."
                    },
                    {
                        title: "HTTP protocol",
                        paragraph: "HTTP requests, including GET and POST, facilitate efficient communication with the database. We also employed SESSION for post-login page control."
                    }
                ]
            }/>
        </main>
    )
}