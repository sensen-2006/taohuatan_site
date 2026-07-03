import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Users, MapPin, Star, ArrowRight, Filter } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const FILTERS = { duration: ['全部', '一日游', '两日游', '三日游'], type: ['全部', '休闲', '深度', '亲子', '摄影', '自驾', '徒步'], crowd: ['全部', '情侣', '家庭', '朋友', '独行'] };

const ROUTES = [
  { id: 'one-day', name: '一日精华游', duration: '1天', image: IMAGES.lakeMountain, price: '¥268', rating: 4.9, crowd: '所有人群', desc: '桃花潭→查济古村，一天领略两大核心景区', tags: ['经典', '热门'], stops: ['桃花潭', '查济古村'] },
  { id: 'two-day', name: '两日深度游', duration: '2天1晚', image: IMAGES.bridgeVillage, price: '¥688', rating: 4.8, crowd: '情侣/朋友', desc: '桃花潭→查济→太平湖，深度体验山水人文', tags: ['深度', '推荐'], stops: ['桃花潭', '查济古村', '太平湖'] },
  { id: 'three-day', name: '三日全景游', duration: '3天2晚', image: IMAGES.sunsetLake, price: '¥1280', rating: 4.9, crowd: '家庭/朋友', desc: '全景游览，文化体验与自然观光完美结合', tags: ['全景', '最全'], stops: ['桃花潭', '查济', '太平湖', '宣纸文化园'] },
  { id: 'family', name: '家庭亲子游', duration: '2天1晚', image: IMAGES.family, price: '¥888', rating: 4.7, crowd: '亲子家庭', desc: '寓教于乐，让孩子在旅途中感受传统文化', tags: ['亲子', '文化体验'], stops: ['桃花潭', '宣纸体验馆', '查济'] },
  { id: 'photography', name: '摄影打卡游', duration: '3天2晚', image: IMAGES.photography, price: '¥980', rating: 4.9, crowd: '摄影爱好者', desc: '日出、古村、湖景，最佳摄影机位全攻略', tags: ['摄影', '打卡'], stops: ['桃花潭日出', '查济晨雾', '太平湖日落'] },
  { id: 'self-drive', name: '自驾路线', duration: '2-3天', image: IMAGES.road, price: '自由行', rating: 4.6, crowd: '自驾游客', desc: '灵活安排，自驾穿越皖南最美风景线', tags: ['自驾', '自由'], stops: ['泾县出发', '桃花潭', '查济', '太平湖'] },
  { id: 'hiking', name: '徒步慢游', duration: '2天1晚', image: IMAGES.hiking, price: '¥458', rating: 4.8, crowd: '户外爱好者', desc: '用脚步丈量山水，感受原生态自然之美', tags: ['徒步', '户外'], stops: ['月亮湾', '桃花潭', '水墨汀溪'] },
];

export function RoutesOverview() {
  const [activeDuration, setActiveDuration] = useState('全部');
  const filtered = ROUTES.filter(r => activeDuration === '全部' || r.duration.includes(activeDuration.replace('游', '')));

  return (
    <div>
      <PageBanner image={IMAGES.hiking} title="路线预览" subtitle="精心规划的游览路线，让每一步都不虚此行" breadcrumbs={[{ label: '首页', path: '/' }, { label: '路线预览' }]} />

      <section className="py-8 px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto flex gap-3 flex-wrap">
          {FILTERS.duration.map(d => (
            <button key={d} onClick={() => setActiveDuration(d)} className={`px-5 py-2 rounded-full text-sm transition-all ${activeDuration === d ? 'bg-[#FFB114] text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{d}</button>
          ))}
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto space-y-8">
          {filtered.map((route, i) => (
            <motion.div key={route.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={`/routes/${route.id}`} className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="md:w-80 h-56 md:h-auto overflow-hidden shrink-0">
                  <ImageWithFallback src={route.image} alt={route.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {route.tags.map(t => <span key={t} className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-3 py-1 rounded-full">{t}</span>)}
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{route.name}</h3>
                    <p className="text-gray-500 mb-4">{route.desc}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{route.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" />{route.crowd}</span>
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-[#FFB114]" />{route.rating}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {route.stops.join(' → ')}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-[#FFB114]">{route.price}</span>
                    <span className="flex items-center gap-2 text-[#0077B3] font-medium group-hover:gap-3 transition-all">查看详情 <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Preview CTA */}
      <section className="py-16 px-8 bg-gradient-to-b from-[#F6F8F8] to-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-br from-[#0077B3] to-[#0EA5E9] rounded-3xl p-12 text-white text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>路线地图总览</h3>
            <p className="text-white/70 mb-6">在地图上查看所有路线的景点分布与连接方式</p>
            <Link to="/routes/map" className="inline-flex items-center gap-2 bg-white text-[#0077B3] font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all">
              查看地图 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
