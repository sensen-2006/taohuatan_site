import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, Clock, MapPin, Calendar, ChevronRight, Heart, Share2, Camera, Users, Ticket } from 'lucide-react';
import { IMAGES } from '../../components/shared/images';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const SPOT_DATA: Record<string, any> = {
  taohuatan: {
    name: '桃花潭', en: 'Taohuatan', bannerImage: IMAGES.lakeMountain, rating: 4.9, reviews: 2856,
    desc: '桃花潭位于安徽省宣城市泾县桃花潭镇，因唐代诗人李白"桃花潭水深千尺，不及汪伦送我情"的千古名句而闻名天下。景区融自然山水与人文景观于一体，是国家5A级旅游景区。',
    time: '08:00 - 17:30', price: '¥65/人', address: '安徽省宣城市泾县桃花潭镇',
    highlights: ['踏歌古岸', '万村老街', '文昌阁', '中华第一祠', '义门'],
    history: '桃花潭始建于唐代，距今已有1300多年历史。唐天宝年间，诗仙李白应泾县名士汪伦之邀来此做客，留下了"桃花潭水深千尺，不及汪伦送我情"的千古绝唱。此后，桃花潭便成为文人墨客竞相游览的胜地。',
    tips: ['建议游览时间：3-4小时', '最佳季节：春季3-5月、秋季9-11月', '穿舒适的步行鞋', '携带防晒用品和饮用水'],
    gallery: [IMAGES.lakeMountain, IMAGES.garden, IMAGES.sunsetLake, IMAGES.bridgeVillage],
    plays: [
      { name: '踏歌古岸漫步', desc: '沿着李白当年走过的古岸散步，感受诗中意境', icon: '🚶' },
      { name: '古镇探秘', desc: '穿梭于万村老街，品味徽派建筑之美', icon: '🏘️' },
      { name: '湖上泛舟', desc: '乘坐竹筏或游船，欣赏两岸山水', icon: '🛶' },
      { name: '日出摄影', desc: '清晨到湖边拍摄薄雾晨光', icon: '📷' },
    ]
  },
  chaji: {
    name: '查济古村', en: 'Chaji Village', bannerImage: IMAGES.bridgeVillage, rating: 4.8, reviews: 1923,
    desc: '查济古村位于泾县城西60公里处，是中国现存规模最大的明清古村落之一。村落依山傍水，白墙黛瓦，小桥流水，保存了大量的明清古建筑，被誉为"中华写生第一村"。',
    time: '全天开放（建议白天游览）', price: '¥58/人', address: '安徽省宣城市泾县桃花潭镇查济村',
    highlights: ['德公厅屋', '二甲祠', '宝公祠', '洪公祠', '古桥群'],
    history: '查济古村始建于唐武德年间，距今已有1380多年的历史。鼎盛时期，查济有钱十万，人口数千，有祠堂108座、庙宇108座、桥梁108座。如今仍保存有古民居200余幢，古建筑群落规模宏大。',
    tips: ['建议游览时间：4-5小时', '清晨和黄昏光线最适合摄影', '古村石板路较滑，注意安全', '尝尝当地的毛豆腐和臭鳜鱼'],
    gallery: [IMAGES.bridgeVillage, IMAGES.huizhouArch, IMAGES.calligraphy, IMAGES.tea],
    plays: [
      { name: '古建筑巡礼', desc: '探访祠堂、古民居，感受徽派建筑精髓', icon: '🏛️' },
      { name: '写生创作', desc: '在最美的角落支起画架，描绘古村风貌', icon: '🎨' },
      { name: '民俗体验', desc: '参与当地传统民俗活动', icon: '🎭' },
      { name: '美食探店', desc: '品味徽菜与地道小吃', icon: '🍲' },
    ]
  },
  taipinghu: {
    name: '太平湖', en: 'Taiping Lake', bannerImage: IMAGES.lakeBoat, rating: 4.7, reviews: 1456,
    desc: '太平湖位于安徽省黄山市与宣城市交界处，湖面面积达88平方公里，是安徽省最大的人工湖。湖水清澈碧绿，四周青山环绕，被誉为"黄山情侣"。',
    time: '08:00 - 18:00', price: '¥80/人（含游船）', address: '安徽省黄山市黄山区太平湖风景区',
    highlights: ['猴岛', '龙窑寨', '黄金岛', '共幸湖湾', '太平湖大桥'],
    history: '太平湖原名陈村水库，建于1970年。因大坝建在太平县境内而得名。湖区四周群山环抱，湖中岛屿星罗棋布，形成了独特的"山中有水、水中有山"的自然景观。',
    tips: ['建议游览时间：半天至一天', '夏季注意防晒，秋季最佳', '游船有多种线路可选', '可以体验垂钓活动'],
    gallery: [IMAGES.lakeBoat, IMAGES.sunsetLake, IMAGES.lakeMountain, IMAGES.hiking],
    plays: [
      { name: '湖上游船', desc: '乘船环湖，饱览湖光山色', icon: '🚢' },
      { name: '岛屿探险', desc: '登上猴岛等湖中小岛探索', icon: '🏝️' },
      { name: '湖畔垂钓', desc: '在宁静的湖畔享受垂钓乐趣', icon: '🎣' },
      { name: '日落观景', desc: '在最佳观景台欣赏湖面日落', icon: '🌅' },
    ]
  },
  'huizhou-culture': {
    name: '徽文化介绍', en: 'Hui Culture', bannerImage: IMAGES.calligraphy, rating: 4.6, reviews: 876,
    desc: '徽州文化是中国三大地域文化之一，涵盖了徽派建筑、新安理学、徽商文化、徽州教育、新安医学、新安画派、徽墨歙砚、徽菜等众多领域，是中华文明的重要组成部分。',
    time: '09:00 - 17:00', price: '免费', address: '安徽省宣城市泾县',
    highlights: ['徽派建筑群', '徽商文化展', '新安画派', '文房四宝', '徽菜文化'],
    history: '徽州文化源远流长，始于秦汉，兴于唐宋，鼎盛于明清。徽州人"十三在邑，十七在外"，形成了独特的徽商文化。徽商在商业上的成功，反哺了家乡的教育、建筑和艺术，创造了灿烂的徽州文化。',
    tips: ['建议参观时间：2-3小时', '可预约文化讲解服务', '适合文化爱好者深度体验', '可配合查济古村一同游览'],
    gallery: [IMAGES.calligraphy, IMAGES.huizhouArch, IMAGES.tea, IMAGES.garden],
    plays: [
      { name: '文房四宝体验', desc: '亲手体验徽墨、宣纸制作工艺', icon: '✒️' },
      { name: '徽派建筑解读', desc: '专业导游讲解徽派建筑文化', icon: '🏛️' },
      { name: '茶道体验', desc: '品鉴泾县兰香等本地名茶', icon: '🍵' },
      { name: '徽菜品鉴', desc: '体验正宗徽菜烹饪', icon: '🥘' },
    ]
  },
  jingxian: {
    name: '泾县文旅总览', en: 'Jingxian Overview', bannerImage: IMAGES.huizhouArch, rating: 4.5, reviews: 1200,
    desc: '泾县隶属安徽省宣城市，地处皖南山区，是中国宣纸之乡、中国木梳之乡。县域旅游资源丰富，拥有桃花潭、查济古村、太平湖等众多知名景区。',
    time: '全天', price: '-', address: '安徽省宣城市泾县',
    highlights: ['桃花潭景区', '查济古村', '宣纸文化园', '月亮湾', '水墨汀溪'],
    history: '泾县建县于汉初，历史悠久，文化底蕴深厚。这里是宣纸的发源地，也是新四军军部旧址所在地。泾县素有"汉家旧县，江左名区"的美誉。',
    tips: ['建议游览天数：2-3天', '可自驾或乘坐大巴前往', '四季皆宜，春秋最佳', '住宿推荐桃花潭镇或县城'],
    gallery: [IMAGES.huizhouArch, IMAGES.lakeMountain, IMAGES.bridgeVillage, IMAGES.road],
    plays: [
      { name: '宣纸文化体验', desc: '参观宣纸生产过程，亲手造纸', icon: '📜' },
      { name: '红色旅游', desc: '参观新四军军部旧址纪念馆', icon: '🏴' },
      { name: '乡村骑行', desc: '在美丽乡村间骑行探索', icon: '🚴' },
      { name: '特产采购', desc: '带回正宗宣纸、徽墨等特产', icon: '🛍️' },
    ]
  },
};

export function ScenicDetail() {
  const { id } = useParams();
  const spot = SPOT_DATA[id || 'taohuatan'] || SPOT_DATA.taohuatan;
  const otherSpots = Object.entries(SPOT_DATA).filter(([k]) => k !== id).slice(0, 3);

  return (
    <div>
      {/* Banner */}
      <section className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${spot.bannerImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="relative h-full flex flex-col justify-end px-8 pb-10 max-w-[1280px] mx-auto">
          <nav className="flex items-center gap-1 text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link to="/scenic" className="hover:text-white">景点介绍</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">{spot.name}</span>
          </nav>
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-white text-5xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{spot.name}</h1>
              <p className="text-white/60 text-sm mb-3">{spot.en}</p>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-[#FFB114] fill-[#FFB114]" />{spot.rating} ({spot.reviews}条评价)</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{spot.address}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-white/20 backdrop-blur p-3 rounded-full text-white hover:bg-white/30 transition-colors"><Heart className="w-5 h-5" /></button>
              <button className="bg-white/20 backdrop-blur p-3 rounded-full text-white hover:bg-white/30 transition-colors"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>景点简介</h2>
              <p className="text-gray-600 leading-relaxed">{spot.desc}</p>
            </motion.section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>图片欣赏</h2>
              <div className="grid grid-cols-2 gap-4">
                {spot.gallery.map((img: string, i: number) => (
                  <div key={i} className={`${i === 0 ? 'col-span-2 h-64' : 'h-44'} rounded-xl overflow-hidden`}>
                    <ImageWithFallback src={img} alt={`${spot.name} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>主要景观</h2>
              <div className="flex flex-wrap gap-3">
                {spot.highlights.map((h: string) => (
                  <span key={h} className="bg-[#FFB114]/10 text-[#B07A0F] px-5 py-2.5 rounded-full text-sm font-medium">{h}</span>
                ))}
              </div>
            </section>

            {/* Recommended Plays */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>推荐玩法</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {spot.plays.map((p: any) => (
                  <div key={p.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-3">{p.icon}</div>
                    <h4 className="font-bold mb-1" style={{ fontFamily: '"Noto Serif SC", serif' }}>{p.name}</h4>
                    <p className="text-gray-500 text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* History */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>历史文化</h2>
              <div className="bg-gradient-to-r from-[#FFF8E8] to-[#F0F9FF] rounded-2xl p-8 border border-[#FFB114]/20">
                <p className="text-gray-700 leading-relaxed">{spot.history}</p>
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>游玩贴士</h2>
              <ul className="space-y-3">
                {spot.tips.map((t: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-6 h-6 bg-[#0077B3]/10 text-[#0077B3] rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#FFB114]">{spot.price}</p>
                <p className="text-gray-400 text-sm">门票价格</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm"><Clock className="w-4 h-4 text-gray-400" /><div><p className="text-gray-400">开放时间</p><p className="font-medium">{spot.time}</p></div></div>
                <div className="flex items-center gap-3 text-sm"><MapPin className="w-4 h-4 text-gray-400" /><div><p className="text-gray-400">地址</p><p className="font-medium">{spot.address}</p></div></div>
                <div className="flex items-center gap-3 text-sm"><Star className="w-4 h-4 text-gray-400" /><div><p className="text-gray-400">评分</p><p className="font-medium">{spot.rating}/5.0 ({spot.reviews}条)</p></div></div>
              </div>
              <Link to="/booking/tickets" className="block w-full bg-[#FFB114] hover:bg-[#e9a010] text-white text-center font-semibold py-3 rounded-full transition-colors">立即预订</Link>
              <Link to="/booking/guides" className="block w-full mt-3 bg-[#0077B3] hover:bg-[#006299] text-white text-center font-semibold py-3 rounded-full transition-colors">预约导游</Link>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-20">
          <SectionTitle title="相关推荐" english="RELATED SPOTS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherSpots.map(([key, s]) => (
              <Link key={key} to={`/scenic/${key}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-44 overflow-hidden"><ImageWithFallback src={s.bannerImage} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div className="p-5">
                  <h3 className="font-bold mb-1" style={{ fontFamily: '"Noto Serif SC", serif' }}>{s.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
