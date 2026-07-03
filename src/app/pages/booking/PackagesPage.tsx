import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, Clock, Users, Check, ArrowRight } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const PACKAGES = [
  { id: 1, name: '一日精华套餐', price: 268, original: 358, image: IMAGES.lakeMountain, duration: '1天', crowd: '2-6人', rating: 4.9, sales: 1856, tag: '热销', includes: ['桃花潭+查济门票', '往返交通', '午餐一顿', '专业导游'], desc: '一天领略两大核心景区精华' },
  { id: 2, name: '两日深度套餐', price: 688, original: 958, image: IMAGES.bridgeVillage, duration: '2天1晚', crowd: '2-4人', rating: 4.8, sales: 856, tag: '推荐', includes: ['全部景区门票', '民宿住宿', '全部餐食', '专业导游', '文化体验'], desc: '深度体验桃花潭、查济与太平湖' },
  { id: 3, name: '家庭亲子套餐', price: 888, original: 1280, image: IMAGES.family, duration: '2天1晚', crowd: '家庭', rating: 4.7, sales: 432, tag: '亲子', includes: ['全部门票', '亲子民宿', '手工体验', '亲子导游', '全部餐食'], desc: '寓教于乐的亲子文化之旅' },
  { id: 4, name: '摄影尊享套餐', price: 1280, original: 1680, image: IMAGES.photography, duration: '3天2晚', crowd: '2-8人', rating: 4.9, sales: 326, tag: '尊享', includes: ['全部门票', '精品住宿', '摄影导师', '全部餐食', '交通'], desc: '专业摄影路线，大片拍不停' },
];

export function PackagesPage() {
  return (
    <div>
      <PageBanner image={IMAGES.sunsetLake} title="套餐产品" subtitle="精选超值组合套餐，一站式旅行体验" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '套餐产品' }]} />

      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto space-y-8">
          {PACKAGES.map((pkg, i) => (
            <motion.div key={pkg.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-96 h-64 md:h-auto shrink-0 relative overflow-hidden">
                    <ImageWithFallback src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-[#FFB114] text-white text-xs px-3 py-1 rounded-full">{pkg.tag}</div>
                  </div>
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{pkg.name}</h3>
                    <p className="text-gray-500 mb-4">{pkg.desc}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{pkg.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" />{pkg.crowd}</span>
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-[#FFB114]" />{pkg.rating}</span>
                      <span>已售 {pkg.sales}</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-xs text-gray-400 mb-2">套餐包含：</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.includes.map(item => (
                          <span key={item} className="flex items-center gap-1 text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full"><Check className="w-3 h-3" />{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#FFB114]">¥{pkg.price}</span>
                        <span className="text-gray-300 line-through">¥{pkg.original}</span>
                        <span className="text-xs text-red-500">省¥{pkg.original - pkg.price}</span>
                      </div>
                      <Link to="/booking/confirm" className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                        立即购买 <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
