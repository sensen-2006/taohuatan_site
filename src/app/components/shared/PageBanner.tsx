import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function PageBanner({
  image,
  title,
  subtitle,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="relative h-[340px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,33,38,0.82),rgba(54,82,88,0.56),rgba(201,147,44,0.28))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative h-full max-w-[1280px] mx-auto px-8 pb-12 flex flex-col justify-end">
        {breadcrumbs ? (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/70">
            {breadcrumbs.map((item, index) => (
              <span key={`${item.label}-${index}`} className="flex items-center gap-1">
                {index > 0 ? <ChevronRight className="h-3.5 w-3.5" /> : null}
                {item.path ? (
                  <Link to={item.path} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/95">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-lg text-white/80">{subtitle}</p> : null}
      </div>
    </section>
  );
}
