import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Skills() {
    const { text } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');
    return (
        <motion.div 
            id="skills" 
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
            <h1><i className='fa fa-cogs'></i>&nbsp;{text.Skills.title}</h1>
            <br />
            <p>
                {text.Skills.description}
                <br /><br />
                {text.Skills.glimpse}
            </p>
            <br /><br />
            <div className='skills-container'>
                <div className='skills-filter'>
                    {
                        text.Skills.categories.map((cat:any) => {
                            return(
                                <button key={`skill-filter-${JSON.stringify(cat)}`} onClick={() => setSelectedCategory(cat.key)} className={`${cat.key === selectedCategory ? 'selected-category' : ''}`}>
                                    {cat.name}
                                </button>
                            )
                        })
                    }
                </div>

                <div className='skills-icons'>
                    {
                        Object.keys(text.Skills.skills)
                        .filter((skill_key:string) => 'all' === selectedCategory || skill_key === selectedCategory)
                        .map((cat:any, i:number) => {
                            return (text.Skills.skills[cat].map((skill:any, index:number) => {
                               return (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 40
                                        }}
                            
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                            
                                        transition={{
                                            duration: 1,
                                            delay: ((index + i) / 10)
                                        }}
                                        
                                        key={`${cat}-skill-${JSON.stringify(skill)}-${i}`} 
                                        className='skill-container'
                                    >
                                        {
                                            skill.icon.includes("devicon") ?
                                            <i className={`skill-icon ${skill.icon}`} style={{color: skill.color}}></i>
                                            :
                                            <Icon className='skill-icon' icon={skill.icon} color={skill.color}/>
                                        }
                                        <br /><br />
                                        <span>{skill.name}</span>
                                    </motion.div>
                               ) 
                            }))
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}
