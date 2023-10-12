import styles from './otherList.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@mui/icons-material/Link';

import imageCosmos from './../images/cosmos-1.jpeg'
import imageCosmos2 from './../images/cosmos-2.jpeg'

export default function OtherList(props: any) {
    const skill = props.skill

    return (
        <section className={styles.otherList}>
            <div className={styles.image}>
                <Image
                    src={imageCosmos}
                    alt="Cosmos" 
                />
                <Image
                    src={imageCosmos2}
                    alt="Cosmos" 
                />
                <div className={styles.dim}></div>
            </div>
            <div className={styles.information}>
                <h1>{props.title}</h1>
                <ul>
                    {
                        skill.map((skill: string) => <li>{skill}</li>)
                    }
                    <li><Link href={props.link} target='_blank'><LinkIcon /></Link></li>
                </ul>
                <p>{props.paragraph}</p>
            </div>
        </section>
    )
}