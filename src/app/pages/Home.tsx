import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Calendar, MapPin, Users, ChevronDown, Star, Clock, ArrowRight, Camera, Compass } from 'lucide-react';
import heroImage from '../../imports/9.png';
import { IMAGES } from '../components/shared/images';
import { SectionTitle } from '../components/shared/SectionTitle';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const SPOTS = [
  { id: 'taohuatan', name: '桃花潭', en: 'Taohuatan', image: IMAGES.lakeMountain, rating: 4.9, desc: '李白诗中"桃花潭水深千尺"的千年诗意之地', tags: ['5A景区', '诗词文化'] },
  { id: 'chaji', name: '查济古村', en: 'Chaji Village', image: IMAGES.bridgeVillage, rating: 4.8, desc: '中国现存最大的明清古村落群，白墙黑瓦间的徽州记忆', tags: ['古村落', '徽派建筑'] },
  { id: 'taipinghu', name: '太平湖', en: 'Taiping Lake', image: IMAGES.lakeBoat, rating: 4.7, desc: '青山绿水间的天然画廊，摄影爱好者的天堂', tags: ['自然风光', '游船'] },
];

const ROUTES_DATA = [
  { name: '一日精华游', duration: '1天', icon: '⚡', desc: '桃花潭→查济→返程', color: 'from-[#FFB114] to-[#F59E0B]' },
  { name: '两日深度游', duration: '2天1晚', icon: '🌙', desc: '桃花潭→查济→太平湖', color: 'from-[#0077B3] to-[#0EA5E9]' },
  { name: '家庭亲子游', duration: '2天1晚', icon: '👨‍👩‍👧‍👦', desc: '亲子互动·文化体验', color: 'from-[#39C668] to-[#34D399]' },
  { name: '摄影打卡游', duration: '3天2晚', icon: '📷', desc: '日出·古村·湖景全拍', color: 'from-[#8B5CF6] to-[#A78BFA]' },
];

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[650px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="relative h-full flex flex-col justify-center px-8 lg:px-16 py-20 pt-32 max-w-[1280px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/15 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center text-2xl">⛩️</div>
              <div>
                <p className="text-white/70 text-sm tracking-widest" style={{ fontFamily: '"Noto Serif SC", serif' }}>Taohuatan</p>
                <p className="text-white/50 text-xs">数字化展示与预约平台</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-[672px] mb-8">
            <h1 className="text-white text-5xl lg:text-7xl font-bold mb-3 drop-shadow-lg" style={{ fontFamily: '"Noto Serif SC", serif', lineHeight: 1.1 }}>探索·桃花潭之美</h1>
            <p className="text-white/85 text-xl font-light">净水青山，人文遗风</p>
          </motion.div>
          <motion.div className="flex gap-4 flex-wrap" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Link to="/booking" className="flex items-center gap-2 bg-[#FFB114] hover:bg-[#e9a010] text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all hover:scale-105">
              <span>立即预约</span><Calendar className="w-5 h-5" />
            </Link>
            <Link to="/routes" className="flex items-center gap-2 bg-[#0077B3] hover:bg-[#006299] text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all hover:scale-105">
              <span>游览路线</span><MapPin className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><ChevronDown className="w-6 h-6 text-white/70" /></div>
      </section>

      {/* Scenic Spots */}
      <section className="py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="精选景点" subtitle="桃花潭、查济古村、太平湖——三大核心景区等你探索" english="FEATURED SPOTS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPOTS.map((spot, i) => (
              <motion.div key={spot.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Link to={`/scenic/${spot.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#FFB114] fill-[#FFB114]" />{spot.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>{spot.name}</h3>
                      <span className="text-gray-400 text-xs">{spot.en}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{spot.desc}</p>
                    <div className="flex gap-2">
                      {spot.tags.map(t => <span key={t} className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-2.5 py-1 rounded-full">{t}</span>)}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/scenic" className="inline-flex items-center gap-2 text-[#0077B3] hover:text-[#005a8a] font-medium transition-colors">
              查看全部景点 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Routes Preview */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-[#F6F8F8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="精选路线" subtitle="专业路线规划，让每一步都值得期待" english="CURATED ROUTES" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROUTES_DATA.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to="/routes" className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center text-2xl mb-4`}>{r.icon}</div>
                  <h3 className="font-bold mb-1" style={{ fontFamily: '"Noto Serif SC", serif' }}>{r.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3"><Clock className="w-3.5 h-3.5" />{r.duration}</div>
                  <p className="text-gray-500 text-sm">{r.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="在线预约" subtitle="门票、酒店、导游一站式预订，轻松出行" english="ONLINE BOOKING" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎫', title: '门票预订', desc: '景区电子门票，扫码入园', link: '/booking/tickets', price: '¥65起' },
              { icon: '🏨', title: '酒店民宿', desc: '精选徽派民宿与星级酒店', link: '/booking/hotels', price: '¥288起' },
              { icon: '🧑‍🏫', title: '导游预约', desc: '专业讲解员，深度文化游', link: '/booking/guides', price: '¥200起' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={item.link} className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                  <div className="text-[#FFB114] font-bold text-lg">{item.price}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#F6F8F8] to-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="社区互动" subtitle="分享你的旅途故事，发现更多精彩" english="COMMUNITY" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '日出桃花潭', author: '旅行者小王', avatar: '👨', likes: 328, image: IMAGES.sunsetLake },
              { title: '查济古村漫步', author: '摄影师阿林', avatar: '👩', likes: 256, image: IMAGES.huizhouArch },
              { title: '太平湖游船记', author: '背包客小李', avatar: '🧑', likes: 189, image: IMAGES.lakeBoat },
              { title: '徽州美食之旅', author: '美食家小陈', avatar: '👧', likes: 412, image: IMAGES.tea },
            ].map((post, i) => (
              <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to="/community" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="h-40 overflow-hidden">
                    <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{post.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">{post.avatar} {post.author}</span>
                      <span>❤️ {post.likes}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.sunsetLake})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A32]/90 to-[#0077B3]/80" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>准备好探索桃花潭了吗？</h2>
          <p className="text-white/70 text-lg mb-8">体验古徽州文化，感受江南水乡的诗意与宁静</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/booking" className="bg-[#FFB114] hover:bg-[#e9a010] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">立即预约体验</Link>
            <Link to="/community" className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all border border-white/30">查看旅客评价</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
