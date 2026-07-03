import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function PageBanner({ image, title, subtitle, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative h-[340px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-end px-8 pb-12 max-w-[1280px] mx-auto">
        {breadcrumbs && (
          <nav className="flex items-center gap-1 text-white/60 text-sm mb-4">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                {item.path ? (
                  <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-white/90">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-white text-4xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{title}</h1>
        {subtitle && <p className="text-white/70 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
