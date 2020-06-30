import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialButton({icon, link}) {
    return (
        <a href={link} target='_blank'>
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}
