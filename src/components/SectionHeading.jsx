function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="badge-chip">{eyebrow}</span>
      <h2 className="text-balance mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  )
}

export default SectionHeading