import Image from 'next/image'

import WorkTitle from '@components/WorkTitle'
import WorkText from '@components/WorkText'
import WorkLink from '@components/WorkLink'
import BtnBack from '@components/BtnBack'

import styles from '@styles/works/mung.module.scss'

export default function Mungmung() {
    const pointColor = "#fff"

    return (
        <main className={styles.mungmung}>
            <WorkTitle 
                lightMode={false} 
                title="mungmung"
                skill={["design"]}
                color={pointColor}
            />
            <BtnBack />
            <section className={styles.content}>
                <WorkText 
                    paragraph="Mungmung is a delightful indie mobile game that was born out of sheer creativity and sibling collaboration. It all started when a 3D animator, who was also studying Unity, suggested to his sister (that's me!)—a graphic designer—that they should create a mobile game just for the fun of it. Together, we embarked on a journey to craft not only the application but also the very rules of the game. This project was truly a labor of love, and despite the modest number of downloads, we take immense pride in what we've achieved."
                />
                <WorkText 
                    title="The Gameplay" 
                    paragraph="Mungmung draws inspiration from classic puzzle games like Sudoku and Tetris. In the game, there are four types of puzzle pieces: short cross, short x, long cross, and long x. Players must strategically place these pieces to fill the squares on the board. But here's the catch: you can't place the same piece in the same spot more than twice. Victory is achieved when all the squares are successfully filled, allowing players to advance to the next stage of the game."
                    padding="0"
                />
                {/* <Image
                    src={imageFlowchart}
                    alt="readvice-flowchart" 
                /> */}
                <WorkText 
                    title="The Initial Vision" 
                    paragraph="Our game's main characters were lovingly inspired by our own dear friends, Maum and Sarang, two adorable Jindo dogs. Initially, we envisioned them as painters roaming around town to create artwork. Although we eventually tweaked the concept, we affectionately continued to refer to them as [Painters] throughout the project."
                />
                <WorkText 
                    title="The Concept" 
                    paragraph="After several rounds of trial and error, we settled on the concept of [Camping]. In this whimsical world, our two dogs embark on a camping adventure, stargazing under the night sky while toasting marshmallows. But watch out for the mischievous Villanets!"
                />
                <WorkText 
                    title="Animation" 
                    paragraph="Admittedly, I wasn't a pro with animation tools, so I took a more traditional approach to create all the GIF animations—frame by frame. It was a painstaking process, but it allowed us to infuse every animation with a personal touch."
                />
                <WorkText 
                    title="The Second Stage" 
                    paragraph="Following the game's launch, we decided to expand by introducing a new stage, [Tropical Beach]. While the initial stage captured the essence of a typical woodland camping trip, we wanted to evoke a completely different mood with the beach setting. Players can seamlessly switch between these stages using the trusty camping car."
                />
                <WorkText 
                    title="Villanets" 
                    paragraph="Villanets, our mischievous antagonists, serve as obstacles that keep players on their toes. We wanted to make sure they looked cute and fun despite their mischievous intentions."
                />
            </section>
            <WorkLink color={pointColor} web={true} url="https://apps.apple.com/ca/app/mungmung/id1513779984/"/>
        </main>
    )
}