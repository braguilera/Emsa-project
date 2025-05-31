const Title = ({ backgroundText, frontText, className = "" }) => {
  return (
    <div className={`relative w-full h-24 lg:h-32 text-center py-8 ${className}`}>
      <h2 className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center text-5xl sm:text-6xl md:text-8xl font-bold text-slate-300 opacity-30 select-none pointer-events-none">
        {backgroundText}
      </h2>

      <h1 className="absolute left-1/2 text-secondary -translate-x-1/2 -bottom-2 z-10 text-xl sm:text-3xl md:text-4xl font-bold w-full px-4">
        {frontText}
      </h1>
    </div>
  )
}

export default Title
