import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';
import Card from './Card';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from '../../hooks/useWindowSize';
import { useScroll } from '../../hooks/useScroll';
import { LanguageHookInterface } from '../../types/language';

import { MobileAppsProps, WebsitesProps } from './index.d';
import { PortfolioWorkInterface } from '../../types/locale';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Portfolio() {
    const { text }:LanguageHookInterface = useLanguage();
    
    const { width } = useWindowSize();

    const { scrollY } = useScroll();

    const [displayed, setDisplayed] = useState<boolean>(false);

    const ref = useRef(null);

    useEffect(() => {
        if(!displayed) {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                setDisplayed(scrollY >= (top - 150));
            }
        }
    }, [scrollY]);
    
    return (
        !displayed ? 
        <div
            id="portfolio"
            style={{height: '100vh'}}
            ref={ref}
        >
        </div>
        :
        <motion.div
            id="portfolio"
            className='section-page'

            initial={{
                opacity: 0,
                y: 40
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 1
            }}
        >
            <br /><br />
            <h1>
                <i className='fa fa-suitcase'></i>&nbsp;{text.Portfolio.title}
            </h1>
            <br /><br />
            <div className='slider-container'>
                <Slider arrows={width >= 860} {...settings}>
                    <Websites title={text.Portfolio.categories[0].name} websites={text.Portfolio['websites']} />
                    <MobileApps title={text.Portfolio.categories[1].name} mobileApps={text.Portfolio['websites']} />
                </Slider>
                <br /><br />
            </div>
            
        </motion.div>
    )
}

function Websites({ title, websites }: WebsitesProps) {
    return (
        <motion.div
            initial={{
                height: "65px"
            }}

            animate={{
                height: "605px"
            }}

            transition={{
                delay: 2
            }}

            className='work-container'
        >
            <h3>{title}</h3>
            <br />
            <div>
                {
                    websites
                        .map((website: PortfolioWorkInterface, index: number) => {
                            return (
                                <Card
                                    key={`card-website-${JSON.stringify(website)}-${index}`}
                                    mkey={`website-${JSON.stringify(website)}-${index}`}
                                    data={website}
                                />
                            )
                        })
                }
            </div>
        </motion.div>
    )
}

function MobileApps({ title, mobileApps }: MobileAppsProps) {
    return (
        <motion.div
            initial={{
                height: "65px"
            }}

            animate={{
                height: "605px"
            }}

            transition={{
                delay: 2
            }}

            className='work-container'
        >
            <h3>{title}</h3>
            <br />
            <div>
                {
                    mobileApps
                        .map((app: PortfolioWorkInterface, index: number) => {
                            return (
                                <Card
                                    key={`card-mobile-${JSON.stringify(app)}-${index}`}
                                    mkey={`mobile-${JSON.stringify(app)}-${index}`}
                                    data={app}
                                />
                            )
                        })
                }
            </div>
        </motion.div>
    )
}
