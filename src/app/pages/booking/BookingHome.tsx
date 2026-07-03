import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Ticket, Hotel, UserCheck, Package, ArrowRight, Star, Clock } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const SERVICES = [
  { icon: <Ticket className="w-8 h-8" />, title: '门票预约', desc: '景区电子门票，扫码入园，无需排队', link: '/booking/tickets', color: 'from-[#FFB114] to-[#F59E0B]', price: '¥65起' },
  { icon: <Hotel className="w-8 h-8" />, title: '酒店民宿', desc: '精选徽派民宿、星级酒店，品质住宿', link: '/booking/hotels', color: 'from-[#0077B3] to-[#0EA5E9]', price: '¥288起' },
  { icon: <UserCheck className="w-8 h-8" />, title: '导游预约', desc: '专业讲解员，深度文化游览', link: '/booking/guides', color: 'from-[#39C668] to-[#34D399]', price: '¥200起' },
  { icon: <Package className="w-8 h-8" />, title: '套餐产品', desc: '门票+住宿+导游超值组合套餐', link: '/booking/packages', color: 'from-[#8B5CF6] to-[#A78BFA]', price: '¥588起' },
];

const HOT_PRODUCTS = [
  { name: '桃花潭+查济双景联票', price: '¥108', original: '¥123', image: IMAGES.lakeMountain, sales: 2856 },
  { name: '太平湖游船观光票', price: '¥80', original: '¥100', image: IMAGES.lakeBoat, sales: 1432 },
  { name: '查济古村门票', price: '¥58', original: '¥68', image: IMAGES.bridgeVillage, sales: 1923 },
  { name: '两日深度游套餐', price: '¥688', original: '¥888', image: IMAGES.sunsetLake, sales: 856 },
];

export function BookingHome() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="在线预约" subtitle="门票、酒店、导游一站式预订，轻松开启旅程" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约' }]} />

      {/* Service Cards */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={s.link} className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mx-auto mb-4`}>{s.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <p className="text-[#FFB114] font-bold text-lg mb-3">{s.price}</p>
                  <span className="inline-flex items-center gap-1 text-[#0077B3] text-sm font-medium group-hover:gap-2 transition-all">立即预订 <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Products */}
      <section className="py-16 px-8 bg-gradient-to-b from-white to-[#F6F8F8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="热门产品" subtitle="最受欢迎的预约产品" english="HOT PRODUCTS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOT_PRODUCTS.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to="/booking/tickets" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="h-40 overflow-hidden relative">
                    <ImageWithFallback src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">热销</div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2">{p.name}</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#FFB114] font-bold text-lg">{p.price}</span>
                      <span className="text-gray-300 text-xs line-through">{p.original}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">已售 {p.sales}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/booking/refund" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-xl">🔄</div>
            <div><h4 className="font-bold text-sm">退改签</h4><p className="text-gray-400 text-xs">订单退票、改签申请</p></div>
          </Link>
          <Link to="/user/orders" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl">📋</div>
            <div><h4 className="font-bold text-sm">我的订单</h4><p className="text-gray-400 text-xs">查看订单状态与详情</p></div>
          </Link>
          <Link to="/support/faq" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center text-xl">❓</div>
            <div><h4 className="font-bold text-sm">常见问题</h4><p className="text-gray-400 text-xs">预订相关问题解答</p></div>
          </Link>
        </div>
      </section>
    </div>
  );
}
