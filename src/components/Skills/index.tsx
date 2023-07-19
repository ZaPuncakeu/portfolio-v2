import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';

export default function Skills() {
    const { text } = useLanguage();
    const [selected, setSelected] = useState('work');

    function handleSelection(selection:string) {
        setSelected(selection);
    }

    return (
        <motion.div 
            id="resume" 
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
            
        </motion.div>
    )
}
