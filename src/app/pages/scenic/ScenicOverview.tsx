import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, MapPin, Clock, ArrowRight, Search } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const CATEGORIES = ['全部', '自然风光', '古村落', '湖泊', '文化遗产', '徽派建筑'];

const ALL_SPOTS = [
  { id: 'taohuatan', name: '桃花潭', en: 'Taohuatan', image: IMAGES.lakeMountain, rating: 4.9, category: '自然风光', desc: '李白诗中"桃花潭水深千尺"的千年诗意之地', tags: ['5A景区', '诗词文化'], time: '08:00-17:30', price: '¥65' },
  { id: 'chaji', name: '查济古村', en: 'Chaji Village', image: IMAGES.bridgeVillage, rating: 4.8, category: '古村落', desc: '中国现存最大的明清古村落群', tags: ['古村落', '徽派建筑'], time: '全天开放', price: '¥58' },
  { id: 'taipinghu', name: '太平湖', en: 'Taiping Lake', image: IMAGES.lakeBoat, rating: 4.7, category: '湖泊', desc: '青山绿水间的天然画廊', tags: ['自然风光', '游船'], time: '08:00-18:00', price: '¥80' },
  { id: 'huizhou-culture', name: '徽文化博物馆', en: 'Hui Culture Museum', image: IMAGES.calligraphy, rating: 4.6, category: '文化遗产', desc: '深入了解徽州千年文化精髓', tags: ['博物馆', '文化体验'], time: '09:00-17:00', price: '免费' },
  { id: 'jingxian', name: '泾县文旅', en: 'Jingxian Tourism', image: IMAGES.huizhouArch, rating: 4.5, category: '徽派建筑', desc: '泾县整体旅游资源总览', tags: ['综合', '区域游'], time: '全天', price: '-' },
  { id: 'garden', name: '桃花潭公园', en: 'Taohuatan Park', image: IMAGES.garden, rating: 4.4, category: '自然风光', desc: '湖畔公园，休闲漫步好去处', tags: ['公园', '休闲'], time: '06:00-20:00', price: '免费' },
];

export function ScenicOverview() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = ALL_SPOTS.filter(s => (activeCategory === '全部' || s.category === activeCategory) && (!searchTerm || s.name.includes(searchTerm)));

  return (
    <div>
      <PageBanner image={IMAGES.lakeMountain} title="景点介绍" subtitle="探索泾县桃花潭地区的自然与人文瑰宝" breadcrumbs={[{ label: '首页', path: '/' }, { label: '景点介绍' }]} />

      {/* Search & Filter */}
      <section className="py-10 px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setActiveCategory(c)} className={`px-5 py-2 rounded-full text-sm transition-all ${activeCategory === c ? 'bg-[#FFB114] text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{c}</button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="搜索景点..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30 w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Spots Grid */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((spot, i) => (
              <motion.div key={spot.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={`/scenic/${spot.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#FFB114] fill-[#FFB114]" />{spot.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-[#FFB114] text-white text-xs px-3 py-1 rounded-full">{spot.price}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>{spot.name}</h3>
                      <span className="text-gray-400 text-xs">{spot.en}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{spot.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{spot.time}</span>
                    </div>
                    <div className="flex gap-2">{spot.tags.map(t => <span key={t} className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-2.5 py-1 rounded-full">{t}</span>)}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-[#F6F8F8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="徽州文化" subtitle="千年徽州文明，在这片土地上留下了深深的印记" english="HUI CULTURE" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden h-80">
              <ImageWithFallback src={IMAGES.calligraphy} alt="徽文化" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>白墙黑瓦间的千年文明</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">徽州文化是中国传统文化的重要组成部分，涵盖徽派建筑、徽商文化、徽州教育、新安医学、徽菜等多个领域。桃花潭所在的泾县，正是这一文化圈的核心区域之一。</p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">在这里，你可以看到保存完好的明清古建筑群，感受徽派建筑"四水归堂"的独特智慧，品味千年古村落的人文气息。</p>
              <Link to="/scenic/huizhou-culture" className="inline-flex items-center gap-2 text-[#0077B3] font-medium text-sm hover:gap-3 transition-all">
                了解更多徽文化 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-r from-[#0077B3] to-[#0EA5E9] rounded-3xl p-12 text-white text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>景区地图导览</h3>
            <p className="text-white/70 mb-6">查看景区全景地图，规划你的最佳游览路线</p>
            <Link to="/routes/map" className="inline-flex items-center gap-2 bg-white text-[#0077B3] font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all">
              打开地图 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
