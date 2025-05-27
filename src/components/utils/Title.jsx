

const Title = ({ backgroundText, frontText, className = "" }) => {
  return (
    <div className={`relative h-12 sm:h-24 lg:h-32 text-center py-8 ${className}`}>
      {/* Texto de fondo - grande y gris muy claro */}
      <h2 className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-slate-300 opacity-30 select-none pointer-events-none">
        {backgroundText}
      </h2>

      {/* Texto de frente - más pequeño y oscuro */}
      <h1 className="absolute left-1/2 -translate-x-1/2 -bottom-2 z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full px-4">
        {frontText}
      </h1>
    </div>
  )
}

export default Title
