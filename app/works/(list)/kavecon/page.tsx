'use client'
import Image from 'next/image'
import imageDetail from '@public/works/kavecon/kavecon-3.png'
import imageCart from '@public/works/kavecon/kavecon-4.png'

import WorkTitle from '@components/WorkTitle'
import WorkText from '@components/WorkText'
import WorkLink from '@components/WorkLink'
import BtnBack from '@components/BtnBack'

import styles from '@styles/works/kavecon.module.scss'

export default function Kavecon() {
    const pointColor = "#57FF79"

    return (
        <main className={styles.kavecon}>
            <WorkTitle 
                darkMode={true} 
                title="kavecon"
                skill={["UI/UX design"]}
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
                            title="Font" 
                            paragraph="The site caters to both domestic and international users. Users can choose from four different languages (EN, KR, JP, CH), and the default language is English.
                            In terms of font, Noto Sans CJK was used to cater to all languages without errors, and the font's file size is lighter than Noto Sans. Manrope was used for pointed numbers such as the counter."
                            padding="10%"
                        />
                        <div>
                            <p><span className={styles.fontNoto}>Noto Sans CJK</span><br /><span className={styles.fontManrope}>Manrope</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contentSecond}>
                <WorkText 
                    paragraph="On the concert detail page, the previous design used several pages for one concert, making it difficult for users to find the functions they need. The page needed to be reorganized and independent. The concept for this page is the [Concert]. To ensure that the concert is highlighted, the top area has a big title and an image with light. The client wanted to use videos, but some concerts didn't have video content. Therefore, it was sized primarily for video but can also use an image. Users can check information or promotion videos, purchase tickets, or merchandise on a single page. This page was the most crucial part of the renewal project."
                />
                <Image
                    src={imageDetail}
                    alt="kavecon-subpage detail" 
                />
                <Image
                    src={imageCart}
                    alt="kavecon-subpage cart" 
                />
            </section>
            <WorkLink color={pointColor} web="https://kavecon.com/" />
        </main>
    )
}