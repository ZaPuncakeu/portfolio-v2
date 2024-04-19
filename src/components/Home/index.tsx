import { useLanguage } from '../../hooks/useLanguage';
import { LanguageHookInterface } from '../../types/language';
import './style.scss';
import { motion } from 'framer-motion';

export default function Home() {
    const { text }:LanguageHookInterface = useLanguage();
    return (
        <div id="home" className='section-page'>
            <div>
                <motion.h2
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
                    <span>{text.Home.greet}</span> <span className='wave'>👋</span>
                </motion.h2>

                <motion.h1
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
                        delay: 0.8
                    }}
                >
                    <span>{text.Home.me}</span>
                </motion.h1>
                <br />
                <motion.h3
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
                        delay: 1.4
                    }}
                >
                    <span>{text.Home.description}</span>
                </motion.h3>
                <br />
                <motion.p
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
                        delay: 1.6
                    }}
                >
                    <span>{text.Home.welcome}</span>
                </motion.p>

                {/*<button>
                    Checkout my resume!
                </button>*/}
            </div>

            <div>
                <motion.img
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
                        delay: 0.8
                    }}

                    src="/images/my-pictures/me-design.png" alt="" />
            </div>
        </div>
    )
}