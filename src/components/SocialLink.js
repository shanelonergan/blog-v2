import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialButton({icon, link, tooltip}) {
    return (
        <div className={'tooltip top ' + tooltip}>
            <a href={link} target='_blank'>
                <FontAwesomeIcon icon={icon}/>
            </a>
        </div>
    )
}
