'use client'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import OtherList from './components/OtherList'

import BtnBack from '@/components/BtnBack'

import imageCosmos1 from './images/cosmos-1.jpeg'
import imageCosmos2 from './images/cosmos-2.jpeg'

import styles from './page.module.scss'

export default function Other() {
    const settings = {
        // dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        speed: 500,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />
    }
    const workList = [
        {
            title: "cosmos, a walk through the cosmos",
            skill: ["Design", "Exhibition Design"],
            link: "https://github.com/hyerim511/",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid minima ipsum. Qui iste eligendi, magnam sint sunt cumque harum officia laboriosam unde nihil, illum autem debitis cum fuga natus."
        },
        {
            title: "cosmos, a walk through the cosmos",
            skill: ["Design", "Exhibition Design"],
            link: "https://github.com/hyerim511/",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid minima ipsum. Qui iste eligendi, magnam sint sunt cumque harum officia laboriosam unde nihil, illum autem debitis cum fuga natus."
        },
        {
            title: "cosmos, a walk through the cosmos",
            skill: ["Design", "Exhibition Design"],
            link: "https://github.com/hyerim511/",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid minima ipsum. Qui iste eligendi, magnam sint sunt cumque harum officia laboriosam unde nihil, illum autem debitis cum fuga natus."
        }
    ]
    return (
        <main className={styles.other}>
            <BtnBack />
            <Slider {...settings}>
                {
                    workList.map((work: any) => 
                        <OtherList 
                            key={work.title}
                            title={work.title}
                            skill={work.skill}
                            link={work.link}
                            paragraph={work.paragraph}
                        />
                    )
                }
            </Slider>
      </main>
    )
}