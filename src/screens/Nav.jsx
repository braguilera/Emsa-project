import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
//import SocialNetworks from '../components/ui/SocialNetworks';
import Logo from '../assets/nav/Logo.png'
import SocialNetworks from '../components/utils/SocialNetworks';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation('nav');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (href) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const navLinks = t("nav", { returnObjects: true });

  const menuVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.3 } },
    exit: { x: '100%', opacity: 0, transition: { type: 'tween', duration: 0.3 } },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0 },
  };

  const navClass = scrolled 
    ? "fixed left-0 w-full z-50 bg-slate-900 text-slate-50 shadow-md transition-all duration-200" 
    : "fixed left-0 w-full z-50 text-slate-50 transition-all duration-300";

  return (
    <section className={navClass}>
      <article className="px-4 xl:px-0 py-2 flex items-center justify-between">
        <a 
          href='#home'
          onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('#home');
          }}
          className=' w-40 mx-10 block lg:hidden '
        >
              <img src={Logo} alt='Teich Logo' className='w-40 hover:scale-[97%] transition-all duration-300' />
        </a>
        <ul className=" hidden lg:flex items-center justify-between w-full px-8 space-x-6">
          <li>
            <a 
              href='#home'
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('#home');
              }}
              className=' w-40 mx-10'
            >
              {/*<img src={LogoBase} alt='Teich Logo' className='hidden lg:block xl:hidden w-10 hover:scale-[97%] transition-all duration-300'/>*/}
              <img src={Logo} alt='Teich Logo' className='block lg:hidden xl:block xl:w-40  hover:scale-[97%] transition-all duration-300' />
            </a>
          </li>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block font-bold hover:text-primary py-2 text-sm lg:text-base transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
              >
                {t(link.title)}
              </a>
            </li>
          ))}
          <SocialNetworks textColor='text-slate-100'></SocialNetworks>

          <footer className="flex justify-center">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-200 border border-gray-300 text-primary py-1.5 lg:py-2 px-2 lg:px-4 rounded focus:outline-none focus:border-pink-500 transition-all duration-300"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="pt">Portuguës</option>
            </select>
          </footer>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

      </article>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black z-40"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={backdropVariants}
              onClick={toggleMenu}
            />

            <motion.article
              className="fixed top-0 right-0 h-full bg-gray-100 p-8 w-64 shadow-lg z-50 flex flex-col justify-between"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuVariants}
            >
              <header className="flex justify-between items-center">
                <a 
                  href='#home'
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('#home');
                  }}
                >
                  {/*<img src={LogoBase} alt='Teich Logo' className='w-10'/>*/}
                </a>
                <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                  <X className="h-6 w-6 text-primary" />
                </button>
              </header>

              <hr className="border-t border-secondary my-4" />

              <ul className="space-y-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="block text-gray-800 font-bold hover:text-pink-500 py-2 transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavLinkClick(link.href);
                      }}
                    >
                      {t(link.title)}
                    </a>
                  </li>
                ))}
              </ul>

              <hr className="border-t border-secondary my-4" />

              <SocialNetworks center={"justify-center"}/>

              <footer className="flex justify-center">
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-gray-200 border border-gray-300 text-primary py-2 px-4 rounded focus:outline-none focus:border-primary transition-all duration-300"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="de">Deutsch</option>
                  <option value="pt">Português</option>
                </select>
              </footer>
            </motion.article>
          </>
        )}
      </AnimatePresence>


    </section>
  );
};

export default Nav;