import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import gifEmsa from "../assets/home/GIF_Emsa.gif"
import ContactForm from "../components/utils/ContactForm"
import { Phone } from 'lucide-react';
import { useState } from "react";


const Home = () => {
  const { t } = useTranslation('home')
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1
      }
    },
    hover: { 
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex flex-col items-center justify-center p-4 pt-20 sm:pt-32 sm:px-20 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <motion.img 
        src={gifEmsa} 
        alt="Fondo EMSA"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay oscuro para mejorar contraste del texto */}
      <motion.div 
        className="absolute inset-0 bg-black/60 z-0"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Contenido */}
      <motion.article 
        className="text-center max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 leading-tight text-gray-200"
          variants={textVariants}
        >
          <span>{t("textPrimaryPart1")} </span>
          <span className="text-primary font-bold">{t("textPrimaryPart1Highlighted")}</span>
          <span>{t("textPrimaryPart2")}</span>
          <span className="text-primary font-bold">{t("textPrimaryPart2Highlighted")}</span>
          <span>{t("textPrimaryPart3")}</span>
          <span className="font-bold">{t("textPrimaryPart4")}</span>
        </motion.h1>

        <motion.p 
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight text-gray-200"
          variants={textVariants}
        >
          <span>{t("textSecondary")}</span>
          <span className="text-primary font-bold">{t("textSecondaryHighlighted")}</span>
          <span>{t("textSecondaryPart1")}</span>
        </motion.p>

        <motion.p 
          className="text-2xl  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-gray-200"
          variants={textVariants}
        >
          <span>{t("textThird")}</span>
          <span className="text-primary font-bold">{t("textThirdHighlighted")}</span>
          <span>{t("textThirdPart1")}</span>
        </motion.p>

        </motion.article>
          <motion.button 
          className='rounded-full p-2 w-fit border-2 border-white fixed right-4 bottom-4 sm:right-16 sm:bottom-16 cursor-pointer z-30 bg-[#25D366] shadow-md hover:scale-110 transition-all duration-300'
          onClick={handleOpenContactForm}
          aria-label="Contact Us"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          <Phone fill='#fff' stroke='transparent' />
        </motion.button>

        {showContactForm && (
          <div 
            className="fixed inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center p-4 z-50"
            initial="hidden"
            animate="visible"
            variants={modalVariants}
          >
            <motion.div 
              className="w-full max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ContactForm onClose={handleCloseContactForm} />
            </motion.div>
          </div>
        )}
    </section>
  )
}

export default Home