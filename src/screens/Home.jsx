import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import gifEmsa from "../assets/home/GIF_Emsa.gif"

const Home = () => {
  const { t } = useTranslation('home')

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
    </section>
  )
}

export default Home