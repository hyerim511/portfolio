'use client'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import OtherList from '@components/OtherList'
import BtnBack from '@/components/ui/BtnBack'

import imageCosmos1 from '@public/works/other/cosmos-1.jpeg'
import imageCosmos2 from '@public/works/other/cosmos-2.jpeg'
import imageSideways from '@public/works/other/sideways.jpeg'
import imageMilkt1 from '@public/works/other/milkt-1.png'
import imageMilkt2 from '@public/works/other/milkt-2.png'
import imageNipa from '@public/works/other/nipa.png'
import imageCacas1 from '@public/works/other/cacas-1.png'
import imageCacas2 from '@public/works/other/cacas-2.png'
import imageChart1 from '@public/works/other/chart-1.png'
import imageChart2 from '@public/works/other/chart-2.png'
import imageMath1 from '@public/works/other/math-1.png'
import imageMath2 from '@public/works/other/math-2.png'
import imageRallyz from '@public/works/other/rallyz.png'
import imageLabl from '@public/works/other/labl.png'
import imageAb from '@public/works/other/ab.png'
import imageSienu from '@public/works/other/sienu.png'
import imageSoon from '@public/works/other/soon.png'

import styles from '@styles/works/other.module.scss'

export default function Other() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        speed: 500,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />,
    }
    const workList = [
        {
            title: "cosmos, a walk through the cosmos",
            skill: ["Graphic Design", "Exhibition Design"],
            link: "https://www.acc.go.kr/main/performance.do?PID=0102&action=Read&bnkey=EM_0000002655/",
            paragraph: `[Cosmos, A Walk Through The Cosmos] marks the inaugural exhibition of the WTC (Walk Through Cinema) project. Inspired by the renowned documentary "Cosmos," which explores the wonders of the universe, this exhibition offers visitors the unique opportunity not only to watch the documentary but also to immerse themselves in the experience within the exhibition hall. In my role, I was responsible for graphic design work related to promotional materials, as well as contributing to certain aspects of the main entrance projection mapping.`,
            image1: imageCosmos1,
            image2: imageCosmos2
        },
        {
            title: "The Sideways Glance",
            skill: ["Graphic Design", "Poster Design"],
            link: "https://www.facebook.com/sayuji301/",
            paragraph: '[The Sideways Glance] is an exhibition that aims to reevaluate societal and personal blind spots that often go unnoticed unless consciously observed. Through unconventional perspectives, it sensitizes us to the errors and illusions in thought patterns that can easily result in exclusion from societal structures, highlighting the significance of a microscopic examination of what is commonly referred to as "systems." In my capacity, I was responsible for designing the poster. The poster was created using small dots in four different colours. Interestingly, when observed from a distance, it appears as a black and white poster. However, as they approach the poster, the colours gradually become visible.',
            image4: imageSideways
        },
        {
            title: "MilkT AI Listening",
            skill: ["UI/UX Design", "Graphic Design"],
            link: "https://high.milkt.co.kr/EventNew/20221123_puzzle/20221123_puzzle.aspx/",
            paragraph: '[MilkT AI Listening] is an online study program designed for high school students. Users have the opportunity to engage in study sessions and test their knowledge through engaging puzzle games. Additionally, the platform provides charts that allow users to track their progress and monitor their study journey. In my role, I was primarily responsible for UI/UX design, with a particular focus on the visual elements. I also contributed to the graphic design aspects of the puzzle games. Leveraging their unique character design, I incorporated these characters into the works of famous artists, such as Van Gogh, Edgar Degas, Raffaello, and Kim Hongdo.',
            image4: imageMilkt1,
            image3: imageMilkt2
        },
        {
            title: "NIPA SW/ICT Standard Terminology",
            skill: ["UI/UX Design", "Development", "Jquery"],
            link: "https://www.globalict.kr/mainTerm.do/",
            paragraph: 'This website is a part of Global ICT Portal by NIPA. In my role, I was responsible for UI/UX Design and Front-end development.',
            image1: imageNipa
        },
        {
            title: "CACAS",
            skill: ["UI/UX Design", "Development", "JavaScript", "Adobe Animate"],
            link: "http://cacas.io/",
            paragraph: 'CACAS provides applications with wearable machines for cats and dogs. It calculates the movement of cats and dogs and connects them with NFTs. In my role, I was responsible for UI/UX Design, graphic design for animation, and Front-end development.',
            image1: imageCacas1,
            image2: imageCacas2
        },
        {
            title: "Chart",
            skill: ["UI/UX Design", "Branding/CI/BI"],
            link: "https://www.chart.markets/",
            paragraph: 'Chart offers Chinese market analysis data to Korean companies. In my role, I was responsible for UI/UX Design and Branding Design. The CI conveys concepts of scalability, depth, multifaceted analysis, and success.',
            image1: imageChart1,
            image2: imageChart2
        },
        {
            title: "Hansol Plus Math",
            skill: ["UI/UX Design"],
            link: "https://www.miraenmath.co.kr/",
            paragraph: 'Hansol Plus Math Class is an educational company that offers mathematics education services for classrooms, teachers, and various branches.In my role, I was responsible for UI/UX design across six different websites, each serving different purposes, including promotion, student resources, classroom materials, the main company website, individual branches, and branch management. These websites needed to adhere to a consistent design system while retaining a unique identity for their respective functions. Despite the challenge of presenting large volumes of data, my focus was on creating simple and easy-to-read layouts. Upon the project\'s completion, the company transitioned from Hansol Plus Math to Miraen Math, maintaining the design I had implemented while updating the logo and company name.',
            image1: imageMath1,
            image2: imageMath2
        },
        {
            title: "Rallyz",
            skill: ["Branding/CI/BI"],
            link: "https://www.rallyz.co.kr/",
            paragraph: 'Rallyz is an educational institution management system. The brand identity was crafted to convey a sense of limitless potential, exuberance, and a positive educational environment. The exclamation mark serves as the central motif, symbolizing the excitement of learning and enlightenment.',
            imageLogo: imageRallyz
        },
        {
            title: "LABL Corporation",
            skill: ["Branding/CI/BI"],
            link: "http://www.lablchina.com/",
            paragraph: 'LABL Corporation is a Chinese social marketing company specializing in the introduction of Korean products to the Chinese market. Their corporate identity is inspired by their primary target market, which includes the fashion and cosmetics industries.',
            imageLogo: imageLabl
        },
        {
            title: "AB Media & Works",
            skill: ["Branding/CI/BI"],
            link: "http://www.abmwc.com/",
            paragraph: 'AB Media & Works is an IT and media production company based in South Korea. The name "AB" is a fusion of "Able" and "Box," symbolizing their boundless capabilities and vibrant spirit. The corporate identity reflects this by incorporating a distinctive 3D/2D box shape with three different shades, representing the various facets of their work.',
            imageLogo: imageAb
        },
        {
            title: "SIENU SNS marketing in China",
            skill: ["Graphic Design", "SNS Marketing Design"],
            link: "https://weibo.com/n/SIENU?tabtype=album",
            image1: imageSienu
        },
        {
            title: "Soon Plus SNS marketing in China",
            skill: ["Graphic Design", "SNS Marketing Design"],
            link: "https://weibo.com/n/SIENU?tabtype=album",
            image1: imageSoon
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
                            image1={work.image1}
                            image2={work.image2}
                            image3={work.image3}
                            image4={work.image4}
                            imageLogo={work.imageLogo}
                        />
                    )
                }
            </Slider>
      </main>
    )
}