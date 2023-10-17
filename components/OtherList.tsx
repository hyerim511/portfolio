import styles from '@styles/components/otherList.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@mui/icons-material/Link';

export default function OtherList(props: any) {
    const skill = props.skill

    return (
        <section className={styles.otherList}>
            <div className={styles.image}>
                {props.image1 ? 
                    <Image
                        src={props.image1}
                        alt={props.title}
                        className={styles.mainImage} 
                    /> : null
                }
                {props.image2 ? 
                    <Image
                        src={props.image2}
                        alt={props.title}
                        className={styles.subImage}
                    /> : null
                }
                {props.image3 ? 
                    <Image
                        src={props.image3}
                        alt={props.title}
                        className={styles.verticalImage}
                    /> : null
                }
                {props.imageLogo ? 
                    <Image
                        src={props.imageLogo}
                        alt={props.title}
                        className={styles.logoImage}
                    /> : null
                }
                <div className={styles.dim}></div>
            </div>
            <div className={styles.information}>
                <h1>{props.title}</h1>
                <ul>
                    {
                        skill.map((skill: string) => <li key={skill}>{skill}</li>)
                    }
                    <li><Link href={props.link} target='_blank'><LinkIcon /></Link></li>
                </ul>
                { props.paragraph ?
                    <p>{props.paragraph}</p>
                    : null
                }
            </div>
        </section>
    )
}