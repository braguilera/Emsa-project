import { useTranslation } from "react-i18next"
import gifEmsa from "../assets/home/GIF_Emsa.png"

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex flex-col items-center justify-center p-4 pt-20 sm:pt-32 sm:px-20 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img 
        src={gifEmsa} 
        alt="Fondo EMSA"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay oscuro para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Contenido */}
      <article className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 leading-tight text-white">
          <span>{t("textPrimaryPart1")} </span>
          <span className="text-orange-400 font-bold">{t("textPrimaryPart1Highlighted")}</span>
          <span>{t("textPrimaryPart2")}</span>
          <span className="text-orange-400 font-bold">{t("textPrimaryPart2Highlighted")}</span>
          <span>{t("textPrimaryPart3")}</span>
          <span className="font-bold">{t("textPrimaryPart4")}</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-relaxed text-gray-200">
          <span>{t("textSecondary")}</span>
          <span className="text-orange-400 font-bold">{t("textSecondaryHighlighted")}</span>
          <span>{t("textSecondaryPart1")}</span>
        </p>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-gray-300">
          <span>{t("textThird")}</span>
          <span className="text-orange-400 font-bold">{t("textThirdHighlighted")}</span>
          <span>{t("textThirdPart1")}</span>
        </p>
      </article>
    </section>
  )
}

export default Home
