import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, MapPin, Search, Star } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { scenicData } from '../../data/scenic';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const categories = ['全部', ...new Set(scenicData.map((item) => item.category))];

export function ScenicOverview() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScenic = scenicData.filter((item) => {
    const inCategory = activeCategory === '全部' || item.category === activeCategory;
    const inSearch =
      !searchTerm ||
      item.name.includes(searchTerm) ||
      item.shortDescription.includes(searchTerm) ||
      item.tags.some((tag) => tag.includes(searchTerm));

    return inCategory && inSearch;
  });

  return (
    <div>
      <PageBanner
        image={scenicData[0].bannerImage}
        title="景点介绍"
        subtitle="探索桃花潭、查济、太平湖与宣纸文化园，理解本平台“山水 + 古村 + 文化 + 度假”的完整叙事。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '景点介绍' }]}
      />

      <section className="border-b border-gray-100 bg-white px-8 py-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm ${activeCategory === category ? 'bg-[#C9932C] text-white' : 'bg-[#F4EFE6] text-[#41535F] hover:bg-[#e7dece]'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B989D]" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="搜索景点、文化体验或标签"
                className="w-full rounded-full border border-[#E6DECF] bg-[#F7F3EB] py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25 lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredScenic.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={`/scenic/${spot.id}`} className="group block overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback src={spot.cardImage} alt={spot.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/45 px-3 py-1 text-xs text-white">
                      <Star className="h-3.5 w-3.5 fill-[#C9932C] text-[#C9932C]" />
                      {spot.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-full bg-[#C9932C] px-3 py-1 text-xs text-white">
                      {spot.priceLabel}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-baseline gap-2">
                      <h3 className="text-xl font-bold text-[#24343B]">{spot.name}</h3>
                      <span className="text-xs text-[#8B989D]">{spot.englishName}</span>
                    </div>
                    <p className="text-sm leading-7 text-[#5D6C72]">{spot.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#8B989D]">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{spot.openingHours}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{spot.address}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {spot.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#F8F1E4] px-3 py-1 text-xs text-[#8D6A1F]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#F4F7F6] px-8 py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="文化体验延展"
            subtitle="平台并不只展示自然景观，也同时呈现宣纸、古村、徽派建筑与江南生活方式。"
            english="CULTURAL EXTENSION"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-[28px]">
              <ImageWithFallback src={scenicData[3].cardImage} alt={scenicData[3].name} className="h-80 w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#24343B]">从山水风景走向非遗文化</h3>
              <p className="mt-4 text-sm leading-8 text-[#5D6C72]">
                在答辩中，这一块能帮助项目从“旅游网页”提升为“文旅数字化展示平台”。它解释了为什么平台里既有景点，也有宣纸文化园、社区游记和亲子研学路线。
              </p>
              <Link to="/scenic/xuanzhi" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#486B72] hover:gap-3">
                查看宣纸文化园
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
