'use client'
import Image from 'next/image'
import imageMain from '@public/works/fake/fake-1.png'
import imagePopup from '@public/works/fake/fake-2.png'

import Link from 'next/link'

import WorkTitle from '@/components/ui/WorkTitle'
import WorkText from '@/components/ui/WorkText'
import WorkLink from '@/components/ui/WorkLink'
import BtnBack from '@/components/ui/BtnBack'

import styles from '@styles/works/fake.module.scss'

export default function FakeMuseum() {

    return (
        <main className={styles.fakemuseum}>
            <WorkTitle 
                lightMode={true} 
                title="fake museum"
                skill={["development","javascript","UI/UX design"]}
            />
            <BtnBack />
            <section className={styles.content}>
                <Image
                    src={imageMain}
                    alt="Main page"
                    className={styles.imageMain} 
                />
                <Image
                    src={imagePopup}
                    alt="Pop-up" 
                    className={styles.imagePopup} 
                />
                <WorkText 
                    title={`Project Period: Oct 28 - Nov 6, 2022`}
                    paragraph={<span><Link href="http://www.fakemuseum.kr/">fAKE mUSEUM(Kang Jiyun, Lim Nare)</Link> <br />Graphic Design by <Link href="http://www.behance.net/papercompany/">PAPER COMPANY</Link></span>}
                    padding="60%"
                />
                <WorkText 
                    paragraph={`fAKE mUSEUM is a project related to virtual exhibition spaces and images surrounding exhibitions. It deals with large-scale exhibition images that are sometimes distributed through online media, which can be even more prominent than the actual artworks or exhibits. Should we only perceive these exhibition images, which are created and displayed as exhibitions open and close, as secondary elements that are indirectly conveyed through online media such as SNS? \n In order to explore the identity and significance of exhibition images that are no longer confined to artworks and exhibitions, as well as their relationship with [exhibitions], fAKE mUSEUM constructs and unveils a virtual exhibition space called "fAKE mUSEUM," where visitors can create or delete internal and external elements.`}
                    padding="5%"
                />
                <div className={styles.requirements}>
                    <h4>Requirements & Achievements</h4>
                    <ul>
                        <li>The main image should appear slowly initially</li>
                        <li>Each floor should have slide images displayed randomly</li>
                        <li>Each floor should have another pop-up for information</li>
                        <li>Sound on and off functionality on the main page</li>
                        <li>In the mobile viewport, the screen should be fixed in landscape orientation</li>
                        <li>In the mobile viewport, the pop-up head should be hidden and appear with touch</li>
                    </ul>
                </div>
            </section>
            <WorkLink git="https://github.com/hyerim511/fAKEmUSEUM/" />
        </main>
    )
}