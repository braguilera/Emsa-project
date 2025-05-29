import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const SocialNetworks = ({ textColor = "text-gray-600", hoverColor = "hover:text-primary", center }) => {
    const socialLinkClass = `${textColor} ${hoverColor}  transition-all duration-300`
    
    return (
        <aside className={`${center} flex space-x-3 lg:space-x-4 mb-4 sm:mt-4 items-center `}>
            <a 
                href="https://www.linkedin.com/in/emsa-log%C3%ADstica-0b1870362/" 
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Linkedin className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a 
                href="https://www.instagram.com/emsalogistica?igsh=MXc5cGRrbTc1ZWI3OA%3D%3D" 
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Instagram className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a 
                href="https://www.facebook.com/people/Emsa-Log%C3%ADstica/pfbid028QezzpiJyH7ewqCHNgbQ4iRAmAi2aGJCScv5V9HtVurmwV93FVTivHAAm4dLGCwNl/" 
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Facebook className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a 
                href="https://www.youtube.com/@EMSALOGISTICA"   
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Youtube className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
        </aside>
    )
}

export default SocialNetworks