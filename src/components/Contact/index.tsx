import { useLanguage } from '../../hooks/useLanguage';
import ContactCard from './ContactCard';
import './style.scss';
import { motion } from 'framer-motion';

export default function Contact({onClose}) {
    const { text } = useLanguage();
    return (
        <motion.div 
            id="contact" 

            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1
            }}
        >
            <motion.div 
                className='contact-container'
                initial={{
                    y: 25
                }}

                animate={{
                    y: 0
                }}

                transition={{
                    bounce: false,
                    duration: 0.5
                }}
            >
                <h2>{text.Contact.title}</h2>
                {
                    text.Contact.socials.map((social, index) => {
                        return(
                            <ContactCard
                                icon={social.icon}
                                key={JSON.stringify(social)+ "-" + index}
                                name={social.name}
                                value={social.value}
                                url={social.url}
                            />
                        )
                    })
                }

                <button className='close-btn' onClick={onClose}>
                    {text.Global.close}
                </button>
                
            </motion.div>
        </motion.div>
    )
}
