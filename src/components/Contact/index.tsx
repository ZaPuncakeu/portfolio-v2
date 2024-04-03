import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useScroll } from '../../hooks/useScroll';

export default function Contact() {
    const { text } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { scrollY } = useScroll();

    const [displayed, setDisplayed] = useState(false);

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
            id="contact" 
            style={{height: '100vh'}}
            ref={ref}
        >
        </div>
        :
        <motion.div 
            id="contact" 
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
            <h1><i className='fa fa-envelope'></i>&nbsp;{text.Contact.title}</h1>
            <br />
            <p>
                {text.Contact.description}
            </p>
            {/*
            <div className='contacts-container'>
                <div className='socials-container'>
                    <a 
                        href={`mailto:${text.Contact.socials.email}`}
                        target='_blank'
                    >
                        <i className='fa fa-envelope'></i>
                        <br /><br />
                        {text.Contact.socials.email}
                    </a>
            
                    <a
                        href={`https://Wa.me/${text.Contact.socials.whatsapp}`} 
                        target='_blank'
                    >
                        <i className='fa fa-whatsapp'></i>
                        <br /><br />
                        {text.Contact.socials.whatsapp}
                    </a>

                    <a 
                        href={`https://www.linkedin.com${text.Contact.socials.linkedin}`} 
                        target='_blank'
                    >
                        <i className='fa fa-linkedin'></i>
                        <br /><br />
                        {text.Contact.socials.linkedin}
                    </a>
                </div>
                <div className='or-section'>
                    <div className='line'></div>
                    OR
                    <div className='line'></div>
                </div>
                
                <form>
                    <input type="text" />
                </form>
            </div>
        */}
        </motion.div>
    )
}
