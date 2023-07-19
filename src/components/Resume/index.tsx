import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';

interface ExperienceType {
    year: 2022,
    name: string
    date: string
    address: string
    website: string
    description: string
    institution: string
    bullets: string[]
}

interface ResumeDataProps {
    mkey: string
    experiences: ExperienceType[]
}

export default function Resume() {
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
            <h1><span className='fa fa-file-text-o'></span>&nbsp;{text.Resume.title}</h1>
            <br /><br />
            <div className='selection'>
                <button className={`${selected === 'work' ? 'selected' : ''}`} onClick={() => handleSelection('work')}>
                    {text.Resume.work_experience.title} <i className='fa fa-angle-down'></i>
                </button>
            </div>
            <br />
            {
                selected === "work" ?
                <ResumeData mkey={"work"} experiences={text.Resume.work_experience.work} />
                :
                selected === "edu" ?
                <ResumeData mkey={"edu"} experiences={text.Resume.education.edu} />
                :
                null
            }
        </motion.div>
    )
}

function ResumeData({mkey, experiences}:ResumeDataProps) {
    const [selectedExperience, setSelectedExperience] = useState(0);
    
    function handleSelect(selection:number) {
        setSelectedExperience(selection);
    }

    return(
        <motion.div 
            key={mkey} 
            id="content-container"

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
            <div className='exp-name'>
                {
                    experiences.map((exp, index) => {
                        return(
                            <button 
                                key={JSON.stringify(exp)} 
                                className={`${selectedExperience ===  index ? 'selected' : ''}`}
                                onClick={() => handleSelect(index)}
                            >
                                {exp.institution}
                            </button>
                        )
                    })
                }
            </div>

            <motion.div
                key={'w-'+JSON.stringify(experiences[selectedExperience])}
                className='experience'

                initial={{
                    opacity: 0
                }}

                animate={{
                    opacity: 1
                }}
            >
                <h2 id="resume-name">
                    {experiences[selectedExperience].name}
                </h2>
                <p>
                    <span id="resume-date">{experiences[selectedExperience].date} <b className='fa fa-globe'></b> </span>  
                    <a href={experiences[selectedExperience].website} target='_blank' id="resume-website">{experiences[selectedExperience].institution}</a>
                </p>
                <br />
                <p id='resume-description'>
                    {
                        experiences[selectedExperience]
                        .description.split('\n')
                        .map((item, index) => {
                            return (index === 0) ? item : [<br key={"line-break"+index} />, item]
                        })
                    }
                </p>
                <br />
                <ul id='resume-bullets'>
                    {
                        experiences[selectedExperience].bullets.map((info) => {
                            return(
                                <li>{info}</li>
                            )
                        })
                    }
                </ul>
            </motion.div>
        </motion.div>
    )
}