import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from '../../hooks/useLanguage';
import { useWindowSize } from '../../hooks/useWindowSize';
import './style-desktop.scss';
import './style-mobile.scss';
import { RootState } from '../../store';
import { changeTheme } from '../../slices/themeSlice';
import { useEffect, useState } from 'react';
import { changeLanguage } from '../../slices/languageSlice';
import Contact from '../Contact';

export default function Navbar(){
    const { text } = useLanguage();
    const { width } = useWindowSize();
    const theme:string = useSelector((state: RootState) => state.theme.theme);
    const lang:string = useSelector((state: RootState) => state.language.language);

    const [ids, setIds] = useState([
        'home',
        'resume',
        'skills',
        'portfolio',
        'contact'
    ]);

    const [contactOpened, setContactOpened] = useState(false);

    return(
        <>
            {
                width > 860 ?
                    <DesktopNavbar text={text} theme={theme} ids={ids} language={lang} setContactOpened={setContactOpened}/>
                :
                    <MobileNavbar text={text} theme={theme} ids={ids} setContactOpened={setContactOpened}/>
            }

            {
                contactOpened ? 
                    <Contact onClose={() => setContactOpened(false)} />
                :
                    null
            }
        </>
    )
}

function DesktopNavbar({ text, theme, ids, language, setContactOpened }:any) {
    
    const dispatch = useDispatch();
    return (
        <nav id={`navbar-desktop`} className={`navbar-dark-mode`}>
            <div className='logo-nav'>
                {/*<div style={{
                    width: 80,
                    height: 80,
                    backgroundImage: `url(/images/my-pictures/anis_logo.png)`,
                    backgroundSize: 'cover'
                }}>

            </div>*/}
            </div>

            <div className='nav-container'>
                {
                    text.Navbar['nav-items'].map((nav:any, index:number) => {
                        return(
                            <button 
                                key={`nav-item-${index}`}
                                onClick={e => nav.icon.includes('envelope') ? setContactOpened(true) : document.querySelector(`#${ids[index]}`).scrollIntoView({ behavior: 'smooth' })}
                            >
                                <i className={nav.icon}></i>
                                &nbsp;&nbsp;
                                {nav.text}
                            </button>
                        )
                    })
                }
            </div>

            <div className='options-nav'>
                <button onClick={e => dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))} className={`fa ${theme === 'light' ? 'fa-sun-o' : 'fa-moon-o'} theme-button`}></button>
                <div
                    onClick={e => dispatch(changeLanguage('en'))} 
                    className={`${language === 'en' ? 'selected-lang' : ''}`}
                >
                    <img src="/images/icons/en.png" alt="" className={`flag-icon`}/>
                    <br />
                </div>
                <div
                    onClick={e => dispatch(changeLanguage('fr'))}  
                    className={`${language === 'fr' ? 'selected-lang' : ''}`}
                >
                    <img src="/images/icons/fr.png" alt="" className={`flag-icon`}/>
                    <br />
                </div>
            </div>
        </nav>
    )
}

function MobileNavbar({ text, theme, ids, language, setContactOpened }:any) {
    
    return (
        <nav id={`navbar-mobile`} className={`navbar-dark-mode`}>
            <div className='nav-container'>
                {
                    text.Navbar['nav-items'].map((nav:any, index:number) => {
                        return(
                            <button 
                                key={`nav-item-${index}`} 
                                onClick={e => nav.icon.includes('envelope') ? setContactOpened(true) : document.querySelector(`#${ids[index]}`).scrollIntoView({ behavior: 'smooth' })}
                            >
                                <i className={nav.icon}></i>
                                <br />
                                {nav.text}
                            </button>
                        )
                    })
                }
            </div>
        </nav>
    )
}