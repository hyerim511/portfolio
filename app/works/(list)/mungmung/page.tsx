import Image from 'next/image'
import imageMain1 from '@public/works/mung/mung-2-1.png'
import imageMain2 from '@public/works/mung/mung-2-2.png'
import imageGame1 from '@public/works/mung/mung-3-1.png'
import imageGame2 from '@public/works/mung/mung-3-2.png'
import imageGame3 from '@public/works/mung/mung-3-3.png'
import imageInitial from '@public/works/mung/mung-4.png'
import imageConcept1 from '@public/works/mung/mung-5-1.png'
import imageConcept2 from '@public/works/mung/mung-5-2.png'
import imageConcept3 from '@public/works/mung/mung-5-3.png'
import imageConcept4 from '@public/works/mung/mung-5-4.png'
import imageConcept5 from '@public/works/mung/mung-5-5.png'
import imageAnimation1 from '@public/works/mung/mung-6-1.png'
import imageAnimation2 from '@public/works/mung/mung-6-2.png'
import imageSecond from '@public/works/mung/mung-7-1.png'
import imageVillanets from '@public/works/mung/mung-7-2.png'


import WorkTitle from '@/components/ui/WorkTitle'
import WorkText from '@/components/ui/WorkText'
import WorkLink from '@/components/ui/WorkLink'
import BtnBack from '@/components/ui/BtnBack'

import styles from '@styles/works/mung.module.scss'

export default function Mungmung() {
    const pointColor = "#fff"

    return (
        <main className={styles.mungmung}>
            <WorkTitle 
                darkMode={true} 
                title="mungmung"
                skill={["Graphic design", "UI/UX design"]}
            />
            <BtnBack />
            <section className={styles.content}>
                <div className={styles.first}>
                    <WorkText 
                        paragraph="Mungmung is a delightful indie mobile game that was born out of sheer creativity and sibling collaboration. It all started when a 3D animator, who was also studying Unity, suggested to his sister (that's me!)—a graphic designer—that they should create a mobile game just for the fun of it. Together, we embarked on a journey to craft not only the application but also the very rules of the game. This project was truly a labor of love, and despite the modest number of downloads, we take immense pride in what we've achieved."
                    />
                    <Image
                        src={imageMain1}
                        alt="Mungmung Main" 
                        className={styles.mainFirst} 
                    />
                    <Image
                        src={imageMain2}
                        alt="Mungmung Main"
                        className={styles.mainSecond} 
                    />
                </div>
                <div className={styles.gameplay}>
                    <WorkText 
                        title="The Gameplay" 
                        paragraph="Mungmung draws inspiration from classic puzzle games like Sudoku and Tetris. In the game, there are four types of puzzle pieces: short cross, short x, long cross, and long x. Players must strategically place these pieces to fill the squares on the board. But here's the catch: you can't place the same piece in the same spot more than twice. Victory is achieved when all the squares are successfully filled, allowing players to advance to the next stage of the game."
                        // padding="5%"
                    />
                    <div className={styles.imageList}>
                        <Image
                            src={imageGame1}
                            alt="Game Tutorial1" 
                        />
                        <Image
                            src={imageGame2}
                            alt="Game Tutorial2"
                        />
                        <Image
                            src={imageGame3}
                            alt="Game Tutorial3"
                        />
                    </div>
                </div>
                <div className={styles.initial}>
                    <WorkText 
                        title="The Initial Vision" 
                        paragraph="Our game's main characters were lovingly inspired by our own dear friends, Maum and Sarang, two adorable Jindo dogs. Initially, we envisioned them as painters roaming around town to create artwork. Although we eventually tweaked the concept, we affectionately continued to refer to them as [Painters] throughout the project."
                    />
                    <Image
                        src={imageInitial}
                        alt="The Initial Vision Design"
                    />
                </div>
                <div className={styles.concept}>
                    <WorkText 
                        title="The Concept" 
                        paragraph="After several rounds of trial and error, we settled on the concept of [Camping]. In this whimsical world, our two dogs embark on a camping adventure, stargazing under the night sky while toasting marshmallows. But watch out for the mischievous Villanets!"
                    />
                    <div className={styles.imageList}>
                        <Image
                            src={imageConcept1}
                            alt="Game Concept1" 
                        />
                        <Image
                            src={imageConcept2}
                            alt="Game Concept2" 
                        />
                        <Image
                            src={imageConcept3}
                            alt="Game Concept3" 
                        />
                        <Image
                            src={imageConcept4}
                            alt="Game Concept4" 
                        />
                        <Image
                            src={imageConcept5}
                            alt="Game Concept5" 
                        />
                    </div>
                </div>
                <div className={styles.animation}>
                    <WorkText 
                        title="Animation" 
                        paragraph="Admittedly, I wasn't a pro with animation tools, so I took a more traditional approach to create all the GIF animations—frame by frame. It was a painstaking process, but it allowed us to infuse every animation with a personal touch."
                    />
                    <Image
                            src={imageAnimation1}
                            alt="Game Animation frame1" 
                    />
                    <Image
                            src={imageAnimation2}
                            alt="Game Animation frame2" 
                    />
                </div>
                <div className={styles.second}>
                    <WorkText 
                        title="The Second Stage" 
                        paragraph="Following the game's launch, we decided to expand by introducing a new stage, [Tropical Beach]. While the initial stage captured the essence of a typical woodland camping trip, we wanted to evoke a completely different mood with the beach setting. Players can seamlessly switch between these stages using the trusty camping car."
                    />
                    <Image
                            src={imageSecond}
                            alt="Second stage" 
                    />
                </div>
                <div className={styles.villanets}>
                    <WorkText 
                        title="Villanets" 
                        paragraph="Villanets, our mischievous antagonists, serve as obstacles that keep players on their toes. We wanted to make sure they looked cute and fun despite their mischievous intentions."
                    />
                    <Image
                            src={imageVillanets}
                            alt="Villanets" 
                    />
                </div>
            </section>
            <WorkLink color={pointColor} web="https://apps.apple.com/ca/app/mungmung/id1513779984/" />
        </main>
    )
}