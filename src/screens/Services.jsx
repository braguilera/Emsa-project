import Title from "../components/utils/Title"
import { useTranslation } from "react-i18next"
import CardServices from "../components/ui/CardServices"
import decoration from "../assets/services/decoration.png"

const Services = () => {
  const { t } = useTranslation("services")

  const services = t("services", { returnObjects: true })

  return (
    <section id="services" className="relative min-h-screen py-8 sm:py-12 lg:py-16">
      <Title backgroundText={t("backTitle")} frontText={t("frontTitle")} />
      <img src={decoration} className="absolute top-0 w-1/4"/>
      <article className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-start justify-items-center">
          {services.map((service, index) => (
            <CardServices key={index} service={service}/>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Services
