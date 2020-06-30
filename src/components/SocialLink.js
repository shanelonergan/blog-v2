import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialButton({icon, link}) {
    return (
        <div className='tooltip top twitter'>
            <a href={link} target='_blank'>
                <FontAwesomeIcon icon={icon}/>
            </a>
        </div>
    )
}
