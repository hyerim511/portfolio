import styles from './otherList.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@mui/icons-material/Link';

export default function OtherList(props: any) {
    const skill = props.skill

    return (
        <section className={styles.otherList}>
            <div className={styles.image}>
                {props.image1 && 
                    <Image
                        src={props.image1}
                        alt="Cosmos"
                        className={styles.mainImage} 
                    />
                }
                {props.image2 && 
                    <Image
                        src={props.image2}
                        alt="Cosmos" 
                        className={styles.subImage}
                    />
                }
                {props.image3 && 
                    <Image
                        src={props.image3}
                        alt="Cosmos" 
                        className={styles.verticalImage}
                    />
                }
                {props.imageLogo && 
                    <Image
                        src={props.imageLogo}
                        alt="Cosmos" 
                        className={styles.logoImage}
                    />
                }
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