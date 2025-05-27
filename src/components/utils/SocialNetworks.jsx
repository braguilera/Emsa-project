import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const SocialNetworks = ({ textColor = "text-gray-600", hoverColor = "hover:text-primary", center }) => {
    const socialLinkClass = `${textColor} ${hoverColor}  transition-all duration-300`
    
    return (
        <aside className={`${center} flex space-x-3 lg:space-x-4 mb-4 sm:mt-4 items-center `}>
            <a 
                href="https://www.linkedin.com/in/teich-log%C3%ADstica-b85661365/" 
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Linkedin className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a 
                href="https://www.instagram.com/teichlogistica/" 
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Instagram className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a 
                href="https://www.facebook.com/profile.php?id=61575921904507" 
                className={socialLinkClass}
                target="_blank"
                rel="noopener noreferrer"  
            >
                <Facebook className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a 
                href="https://www.youtube.com/@TEICHLOGISTICA"   
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