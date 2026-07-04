import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, MapPin, Star } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { routeData } from '../../data/routes-data';
import { IMAGES } from '../../components/shared/images';

export function RoutesOverview() {
  return (
    <div>
      <PageBanner
        image={IMAGES.sunsetLake}
        title="路线预览"
        subtitle="把桃花潭、查济、太平湖与非遗体验组织成可答辩、可展示、可预约的文旅线路。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '路线预览' }]}
      />

      <section className="px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="精选路线方案"
            subtitle="从经典一日游到摄影采风线路，每一条都可继续进入详情页、地图页和预约入口。"
            english="ROUTE COLLECTION"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {routeData.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <article className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm hover:shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="h-72 overflow-hidden">
                      <ImageWithFallback
                        src={route.image}
                        alt={route.name}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#8D7556]">
                        <span className="rounded-full bg-[#F8F1E4] px-3 py-1">{route.duration}</span>
                        <span className="rounded-full bg-[#EEF3F1] px-3 py-1">{route.tags[0]}</span>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold text-[#24343B]">{route.name}</h2>
                      <p className="mt-2 text-sm text-[#7A868B]">{route.subtitle}</p>
                      <p className="mt-4 text-sm leading-7 text-[#52636A]">{route.shortDescription}</p>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#617178]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {route.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {route.stops.join(' / ')}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-4 w-4 fill-[#C9932C] text-[#C9932C]" />
                          {route.rating}
                        </span>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-2xl font-bold text-[#C9932C]">{route.priceLabel}</p>
                        <div className="flex gap-3">
                          <Link
                            to={`/routes/${route.id}`}
                            className="rounded-full bg-[#486B72] px-5 py-2 text-sm font-medium text-white hover:bg-[#3e5d63]"
                          >
                            查看详情
                          </Link>
                          <Link
                            to="/routes/map"
                            className="rounded-full bg-[#F4EFE6] px-5 py-2 text-sm font-medium text-[#41535F] hover:bg-[#e7dece]"
                          >
                            查看地图
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
