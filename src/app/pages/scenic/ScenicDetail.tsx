import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, Clock, Heart, MapPin, Share2, Star } from 'lucide-react';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { scenicData, scenicMap } from '../../data/scenic';
import { ContentNotFound } from '../../components/shared/ContentNotFound';
import { useDemoApp } from '../../providers/DemoAppProvider';

export function ScenicDetail() {
  const { id } = useParams();
  const spot = id ? scenicMap[id] : null;
  const { toggleFavorite, favorites } = useDemoApp();

  if (!spot) {
    return (
      <ContentNotFound
        title="景点内容不存在"
        description="你访问的景点详情暂时没有配置，可返回景点列表继续浏览已整理好的内容。"
        backTo="/scenic"
        backLabel="返回景点列表"
      />
    );
  }

  const isFavorite = favorites.some((item) => item.id === spot.id && item.type === 'scenic');
  const relatedSpots = scenicData.filter((item) => item.id !== spot.id).slice(0, 3);

  return (
    <div>
      <section className="relative h-[420px] overflow-hidden">
        <ImageWithFallback
          src={spot.bannerImage}
          alt={spot.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/32 to-black/10" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-8 pb-10">
          <nav className="mb-4 flex items-center gap-1 text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              首页
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/scenic" className="hover:text-white">
              景点介绍
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{spot.name}</span>
          </nav>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-5xl font-bold text-white">{spot.name}</h1>
              <p className="mt-2 text-sm text-white/70">{spot.englishName}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#C9932C] text-[#C9932C]" />
                  {spot.rating}（{spot.reviews} 条评价）
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {spot.openingHours}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {spot.address}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  toggleFavorite({
                    id: spot.id,
                    type: 'scenic',
                    name: spot.name,
                    image: spot.cardImage,
                    path: `/scenic/${spot.id}`,
                  })
                }
                className={`rounded-full px-5 py-3 text-sm backdrop-blur ${
                  isFavorite
                    ? 'bg-[#C9932C] text-white'
                    : 'bg-white/20 text-white hover:bg-white/28'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? '已收藏' : '加入收藏'}
                </span>
              </button>
              <Link
                to="/community/publish"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/28"
              >
                <Share2 className="h-4 w-4" />
                分享见闻
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-8 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">景点简介</h2>
              <p className="leading-8 text-[#52636A]">{spot.longDescription}</p>
            </motion.section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">图片欣赏</h2>
              <div className="grid grid-cols-2 gap-4">
                {spot.gallery.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className={`${index === 0 ? 'col-span-2 h-64' : 'h-44'} overflow-hidden rounded-2xl`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${spot.name}-${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">核心亮点</h2>
              <div className="flex flex-wrap gap-3">
                {spot.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#F8F1E4] px-5 py-2.5 text-sm font-medium text-[#8D6A1F]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">推荐玩法</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {spot.activities.map((activity) => (
                  <div
                    key={activity.title}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md"
                  >
                    <div className="mb-3 text-2xl text-[#8D6A1F]">{activity.icon}</div>
                    <h4 className="font-bold text-[#24343B]">{activity.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[#5D6C72]">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">历史与文化</h2>
              <div className="rounded-[28px] border border-[#E8D8AF] bg-[#FAF5E9] p-8">
                <p className="leading-8 text-[#5D6C72]">{spot.history}</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">游览贴士</h2>
              <ul className="space-y-3">
                {spot.tips.map((tip, index) => (
                  <li key={tip} className="flex items-start gap-3 text-sm leading-7 text-[#52636A]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F1F2] text-xs font-bold text-[#486B72]">
                      {index + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="sticky top-24 rounded-[28px] border border-[#E8E1D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,242,233,0.98))] p-6 shadow-sm">
              <div className="mb-6 text-center">
                <p className="text-3xl font-bold text-[#C9932C]">{spot.priceLabel}</p>
                <p className="text-sm text-[#8B989D]">当前演示票价</p>
              </div>
              <div className="mb-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#8B989D]">开放时间</span>
                  <span className="font-medium text-[#24343B]">{spot.openingHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B989D]">推荐季节</span>
                  <span className="font-medium text-[#24343B]">{spot.bestSeason}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B989D]">建议时长</span>
                  <span className="font-medium text-[#24343B]">{spot.travelDuration}</span>
                </div>
              </div>
              <Link
                to="/booking/tickets"
                className="block rounded-full bg-[#C9932C] py-3 text-center font-semibold text-white hover:bg-[#b58323]"
              >
                立即预约门票
              </Link>
              <Link
                to="/booking/guides"
                className="mt-3 block rounded-full bg-[#486B72] py-3 text-center font-semibold text-white hover:bg-[#3e5d63]"
              >
                预约讲解服务
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <SectionTitle title="相关景点推荐" english="RELATED SCENIC SPOTS" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedSpots.map((item) => (
              <Link
                key={item.id}
                to={`/scenic/${item.id}`}
                className="group block overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <ImageWithFallback
                    src={item.cardImage}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#24343B]">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5D6C72]">{item.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
