import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from '../../hooks/useLanguage';
import { useWindowSize } from '../../hooks/useWindowSize';
import './style-desktop.scss';
import { RootState } from '../../store';
import { changeTheme } from '../../slices/themeSlice';

export default function Navbar(){
    const { text } = useLanguage();
    const { width } = useWindowSize();
    const theme:string = useSelector((state: RootState) => state.theme.theme);

    return(
        <>
            {
                width > 860 ?
                    <DesktopNavbar text={text} theme={theme} />
                :
                    null
            }
        </>
    )
}

function DesktopNavbar({ text, theme }:any) {
    
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
                            <button key={`nav-item-${index}`}>
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
                <button className='styled-button'>
                    {text.Global.resume}
                </button>
            </div>
        </nav>
    )
}