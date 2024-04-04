import './style.scss'
export default function ContactCard({
    icon,
    name,
    value,
    url
}) {
    return(
        <div className="contact-card">
            <div className='icon-value-container'>
                <i className={`fa fa-${icon} icon`}></i>
                <div>
                    <b>
                        {name}
                    </b>
                    <br />
                    {value}
                </div>
            </div>
            {
                url ?
                <a href={url} className='fa fa-external-link' target='_blank'></a> 
                :
                null
            }
        </div>
    )
}