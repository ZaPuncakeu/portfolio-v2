import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';
import Card from './Card';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Portfolio() {
    const { text } = useLanguage();

    return (
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
                <Slider {...settings}>
                    <Websites text={text} />
                    <Websites text={text} />
                </Slider>
                <br /><br />
            </div>
            
        </motion.div>
    )
}

function Websites({ text }: any) {
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
            <h3>{text.Portfolio.categories[0].name}</h3>
            <br />
            <div>
                {
                    text.Portfolio.works.websites
                        .map((website: any, index: number) => {
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
