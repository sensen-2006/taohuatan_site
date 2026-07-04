interface SectionTitleProps {
  title: string;
  subtitle?: string;
  english?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  title,
  subtitle,
  english,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      {english ? (
        <p className="mb-2 text-[11px] tracking-[0.28em] text-[#8D7556]">
          {english}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-[#24343B]">{title}</h2>
      {subtitle ? (
        <p
          className={`mt-3 text-sm leading-7 text-[#5D6C72] ${
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={`mt-4 h-[2px] w-16 bg-gradient-to-r from-[#C9932C] via-[#7E9C86] to-[#486B72] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
