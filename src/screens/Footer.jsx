import React from 'react'
import { useTranslation } from 'react-i18next';
import logoFooter from '../assets/footer/logoFooter.png'
import SocialNetworks from '../components/utils/SocialNetworks';

const Footer = () => {
  const { t } = useTranslation('footer');
  
  const categoriesData = t("categoriesLinks", { returnObjects: true });
  const contactData = t("contactLinks", { returnObjects: true });

    const handleNavLinkClick = (href) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className='h-auto bg-footer text-slate-900 flex flex-col lg:flex-row lg:w-fill lg:justify-center gap-10 lg:gap-40 p-8 z-20'>
    
      <article className='flex flex-col items-center '>
        <img src={logoFooter}/>
        <h1 className='text-center lg:w-80'>{t("description")}</h1>
      </article>
      
      <article className='flex flex-col lg:justify-between items-center gap-4'>
        <h3 className='text-secondary font-bold'>{t("categoriesTitle")}</h3>
        {categoriesData.map((categorie, id) => (
          <a 
            key={id} 
            className='hover:text-primary transition-all cursor-pointer duration-300'
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick(categorie.href);
            }}
          >{categorie.name}</a>
        ))}
      </article>
      
      <article className='flex flex-col lg:justify-between  items-center gap-4'>
        <h3 className='text-secondary font-bold'>{t("contactTitle")}</h3>
        {contactData.map((contact, id) => (
          <a 
            key={id} 
            className='hover:text-primary cursor-pointer transition-all duration-300'
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"  
          >{contact.name}</a>
        ))}

      <aside className='lg:flex justify-center hidden'>
        <SocialNetworks/>
      </aside>
      </article>
      
      <aside className='flex justify-center lg:hidden'>
        <SocialNetworks/>
      </aside>
    </section>
  )
}

export default Footer
