import { useLanguage } from '../../../hooks/useLanguage';
import './style.scss'

interface CardProps{
    mkey: string
    data: any
}
export default function Card({ mkey, data }:CardProps) {
    const { text } = useLanguage();

    return(
        <div key={mkey} className='project-card'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${data.img})`
                }}
            >
            </div>
            <br />
            <h4>{data.title}</h4>
            <br />
            <p className='text-container'>
                {data.description}
            </p>
            <br />
            
            <span><b>{data.tools.title}</b> {data.tools.tools.join(' - ')}</span>
            <br /><br />
            <div className='buttons'>
                {
                    data.github ?
                    <a href={data.github} target='_blank'>
                        <button className='git-btn'><i className='fa fa-github'></i>&nbsp;{text.Global['check-repo']}</button>
                    </a>
                    :
                    null
                }

                {
                    data.website ?
                    <a href={data.website} target='_blank'>
                        <button className='web-btn'><i className='fa fa-globe'></i>&nbsp;{text.Global['check-website']}</button>
                    </a>
                    :
                    null
                }
            </div>
        </div>
    )
}