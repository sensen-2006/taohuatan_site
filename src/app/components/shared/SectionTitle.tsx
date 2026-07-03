interface SectionTitleProps {
  title: string;
  subtitle?: string;
  english?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, english, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      {english && <p className="text-[#FFB114] text-xs tracking-[0.3em] uppercase mb-2">{english}</p>}
      <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm max-w-lg mx-auto">{subtitle}</p>}
      <div className={`mt-4 w-16 h-0.5 bg-gradient-to-r from-[#FFB114] to-[#0077B3] ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
