import { Link, useParams } from 'react-router';
import { Clock, Heart, MapPin, Star } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ContentNotFound } from '../../components/shared/ContentNotFound';
import { routeData, routeMap } from '../../data/routes-data';
import { useDemoApp } from '../../providers/DemoAppProvider';

export function RouteDetail() {
  const { id } = useParams();
  const route = id ? routeMap[id] : null;
  const { favorites, toggleFavorite } = useDemoApp();

  if (!route) {
    return (
      <ContentNotFound
        title="路线内容不存在"
        description="你访问的路线详情暂时没有配置，可返回路线列表继续浏览。"
        backTo="/routes"
        backLabel="返回路线列表"
      />
    );
  }

  const isFavorite = favorites.some((item) => item.id === route.id && item.type === 'route');
  const relatedRoutes = routeData.filter((item) => item.id !== route.id).slice(0, 3);

  return (
    <div>
      <PageBanner
        image={route.image}
        title={route.name}
        subtitle={route.subtitle}
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '路线预览', path: '/routes' },
          { label: route.name },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="space-y-10">
            <div className="rounded-[30px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#617178]">
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
                  <p className="mt-4 text-sm leading-8 text-[#52636A]">{route.longDescription}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    toggleFavorite({
                      id: route.id,
                      type: 'route',
                      name: route.name,
                      image: route.image,
                      path: `/routes/${route.id}`,
                    })
                  }
                  className={`rounded-full px-5 py-2 text-sm ${
                    isFavorite
                      ? 'bg-[#C9932C] text-white'
                      : 'bg-[#F4EFE6] text-[#41535F] hover:bg-[#e7dece]'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                    {isFavorite ? '已收藏' : '加入收藏'}
                  </span>
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-gray-100 bg-white p-8 shadow-sm">
              <SectionTitle
                title="行程安排"
                subtitle="答辩时可重点讲这一段，它最能体现平台的路线组织能力。"
                english="TIMELINE"
              />
              <div className="space-y-5">
                {route.timeline.map((item, index) => (
                  <div key={`${item.time}-${item.title}`} className="flex gap-4">
                    <div className="flex w-16 shrink-0 flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7EFE0] font-bold text-[#8D6A1F]">
                        {item.icon}
                      </div>
                      {index < route.timeline.length - 1 ? (
                        <div className="mt-2 h-full w-px bg-[#E6DDD1]" />
                      ) : null}
                    </div>
                    <div className="flex-1 rounded-[24px] bg-[#F7F8F8] p-5">
                      <p className="text-xs tracking-[0.18em] text-[#8D7556]">{item.time}</p>
                      <h3 className="mt-2 text-lg font-bold text-[#24343B]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#52636A]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#24343B]">费用包含</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#52636A]">
                  {route.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#24343B]">费用不含</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#52636A]">
                  {route.excludes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#24343B]">出行提示</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {route.notes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#EEF3F1] px-4 py-2 text-sm text-[#486B72]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[30px] border border-[#E8E1D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,242,233,0.98))] p-7 shadow-sm">
                <p className="text-xs tracking-[0.22em] text-[#8D7556]">ROUTE INFO</p>
                <h3 className="mt-3 text-2xl font-bold text-[#24343B]">{route.name}</h3>
                <p className="mt-2 text-sm text-[#617178]">{route.crowd}</p>
                <p className="mt-5 text-3xl font-bold text-[#C9932C]">{route.priceLabel}</p>
                <div className="mt-6 space-y-3 text-sm text-[#52636A]">
                  <div className="flex justify-between">
                    <span>行程时长</span>
                    <span className="font-medium text-[#24343B]">{route.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>适合人群</span>
                    <span className="text-right font-medium text-[#24343B]">{route.crowd}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>主要站点</span>
                    <span className="text-right font-medium text-[#24343B]">
                      {route.stops.join(' / ')}
                    </span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Link
                    to="/booking/packages"
                    className="block rounded-full bg-[#C9932C] py-3 text-center font-semibold text-white hover:bg-[#b58323]"
                  >
                    预约同类套餐
                  </Link>
                  <Link
                    to="/routes/map"
                    className="block rounded-full bg-[#486B72] py-3 text-center font-semibold text-white hover:bg-[#3e5d63]"
                  >
                    查看路线地图
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[#24343B]">相关路线推荐</h3>
                <div className="space-y-4">
                  {relatedRoutes.map((item) => (
                    <Link
                      key={item.id}
                      to={`/routes/${item.id}`}
                      className="block rounded-[22px] bg-[#F7F8F8] p-4 hover:bg-[#f1f3f3]"
                    >
                      <p className="font-bold text-[#24343B]">{item.name}</p>
                      <p className="mt-1 text-xs text-[#7A868B]">{item.duration}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
