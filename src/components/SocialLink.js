import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialButton({icon, link}) {
    return (
        <a href={link}>
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}
