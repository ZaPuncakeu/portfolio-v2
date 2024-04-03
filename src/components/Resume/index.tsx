import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.scss';
import { motion } from 'framer-motion';
import { useWindowSize } from '../../hooks/useWindowSize';

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

const options = [
    "work_experience",
    "education"
]

export default function Resume() {
    const { text } = useLanguage();
    const [selected, setSelected] = useState('work_experience');
    const [optionsOpened, setOptionsOpened] = useState(false);
    const [careerOpened, setCareerOpened] = useState(false);
    const { width } = useWindowSize();
    
    function toggleOptions() {
        setOptionsOpened(!optionsOpened);
    }

    function toggleCarrerOpened() {
        setCareerOpened(!careerOpened);
    }

    function handleSelection(selection:string) {
        setOptionsOpened(false);
        setSelected(selection);
        setCareerOpened(false);
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
                <div className='selection-container'>
                    <button className='selected type' onClick={() => toggleOptions()}>
                        {text.Resume[selected].title} &nbsp; <i className={`fa fa-angle-${optionsOpened ? 'left' : 'right'}`}></i>
                    </button>
                    {/*
                        width <= 860 &&
                        <button className='career-option' onClick={() => toggleCarrerOpened()}><i className={`fa fa-angle-${careerOpened ? 'up' : 'down'}`}/></button>
        */}
                </div>
                {
                    optionsOpened &&
                    options.filter(o => o !== selected).map((o, i) => {
                        return(
                            <motion.button 
                                className='type'
                                key={`option-${o}`} 
                                onClick={() => handleSelection(o)}
                                initial={{
                                    opacity: 0,
                                    x: -10
                                }}

                                animate= {{
                                    x: 0,
                                    opacity: 1
                                }}

                                transition={{
                                    duration: 0.5,
                                    delay: (i / 10)
                                }}
                            >
                                {text.Resume[o].title}
                            </motion.button>
                        )
                    })
                }
            </div>
            <br />
            {
                selected === "work_experience" ?
                <ResumeData key={"work-data"} mkey={"work"} experiences={text.Resume.work_experience.work} />
                :
                selected === "education" ?
                <ResumeData key={"edu-data"} mkey={"edu"} experiences={text.Resume.education.edu} />
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
        //career.setCareerOpened(false);
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
                        experiences[selectedExperience].bullets.map((info, index) => {
                            return(
                                <li key={`bullet-info-${index}`}>{info}</li>
                            )
                        })
                    }
                </ul>
            </motion.div>
        </motion.div>
    )
}