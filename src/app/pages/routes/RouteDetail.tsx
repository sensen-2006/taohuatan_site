import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Users, MapPin, Star, Calendar, ChevronRight, ArrowRight, AlertCircle, DollarSign } from 'lucide-react';
import { IMAGES } from '../../components/shared/images';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const ROUTE_DATA: Record<string, any> = {
  'one-day': {
    name: '一日精华游', duration: '1天', image: IMAGES.lakeMountain, price: '¥268/人', rating: 4.9, crowd: '所有人群',
    desc: '一天时间，精华路线，领略桃花潭与查济古村两大核心景区的精髓。',
    timeline: [
      { time: '08:00', title: '集合出发', desc: '泾县游客中心集合，乘车前往桃花潭', icon: '🚌' },
      { time: '08:30', title: '抵达桃花潭', desc: '开始游览桃花潭景区，参观踏歌古岸、文昌阁', icon: '🏞️' },
      { time: '10:30', title: '湖上泛舟', desc: '乘坐竹筏游览桃花潭，感受诗中意境', icon: '🛶' },
      { time: '11:30', title: '午餐时间', desc: '在景区附近品尝地道徽菜', icon: '🍜' },
      { time: '13:00', title: '前往查济', desc: '车程约30分钟', icon: '🚌' },
      { time: '13:30', title: '查济古村', desc: '漫步古村，参观祠堂、古民居、石板巷', icon: '🏘️' },
      { time: '16:00', title: '返程', desc: '结束愉快的一日游', icon: '👋' },
    ],
    includes: ['景区门票（桃花潭+查济）', '往返交通', '导游讲解', '午餐一顿'],
    excludes: ['个人消费', '旅游保险', '竹筏费用（可选）'],
    notes: ['请穿着舒适的步行鞋', '随身携带防晒用品和饮用水', '集合时间请勿迟到', '雨天照常出行，请备好雨具'],
  },
  'two-day': {
    name: '两日深度游', duration: '2天1晚', image: IMAGES.bridgeVillage, price: '¥688/人', rating: 4.8, crowd: '情侣/朋友',
    desc: '深度游览桃花潭、查济古村和太平湖三大景区，含一晚特色民宿住宿。',
    timeline: [
      { time: 'Day1 08:00', title: '集合出发', desc: '泾县游客中心集合', icon: '🚌' },
      { time: 'Day1 09:00', title: '桃花潭景区', desc: '全方位游览桃花潭', icon: '🏞️' },
      { time: 'Day1 12:00', title: '午餐', desc: '桃花潭镇特色午餐', icon: '🍜' },
      { time: 'Day1 14:00', title: '查济古村', desc: '深度探索古村落', icon: '🏘️' },
      { time: 'Day1 18:00', title: '入住民宿', desc: '入住查济特色民宿', icon: '🏨' },
      { time: 'Day2 07:00', title: '晨拍古村', desc: '清晨拍摄古村晨雾', icon: '📷' },
      { time: 'Day2 09:00', title: '前往太平湖', desc: '车程约1小时', icon: '🚌' },
      { time: 'Day2 10:00', title: '太平湖游览', desc: '乘船环湖观光', icon: '🚢' },
      { time: 'Day2 15:00', title: '返程', desc: '愉快返程', icon: '👋' },
    ],
    includes: ['全部景区门票', '往返交通', '导游讲解', '一晚民宿住宿', '两顿午餐+一顿晚餐'],
    excludes: ['个人消费', '旅游保险'],
    notes: ['请携带身份证办理住宿', '建议携带相机拍摄', '第二天早起可拍摄最美晨雾'],
  },
  'three-day': {
    name: '三日全景游', duration: '3天2晚', image: IMAGES.sunsetLake, price: '¥1280/人', rating: 4.9, crowd: '家庭/朋友',
    desc: '三天全景游览，深度体验所有核心景区及文化体验项目。',
    timeline: [
      { time: 'Day1 08:00', title: '集合出发', desc: '前往桃花潭', icon: '🚌' },
      { time: 'Day1 09:00', title: '桃花潭全景游', desc: '深度游览桃花潭所有景点', icon: '🏞️' },
      { time: 'Day1 14:00', title: '宣纸文化园', desc: '体验宣纸制作工艺', icon: '📜' },
      { time: 'Day1 18:00', title: '入住酒店', desc: '桃花潭度假酒店', icon: '🏨' },
      { time: 'Day2 07:00', title: '查济古村', desc: '一整天深度探索查济', icon: '🏘️' },
      { time: 'Day2 12:00', title: '徽菜体验', desc: '学做徽菜', icon: '🍲' },
      { time: 'Day2 15:00', title: '茶道体验', desc: '品鉴泾县兰香茶', icon: '🍵' },
      { time: 'Day3 08:00', title: '太平湖', desc: '乘船环湖+岛屿探险', icon: '🚢' },
      { time: 'Day3 14:00', title: '返程', desc: '满载而归', icon: '🎉' },
    ],
    includes: ['全部景区门票', '全程交通', '专业导游', '2晚住宿', '全部餐食', '文化体验项目'],
    excludes: ['个人消费', '旅游保险', '额外自选项目'],
    notes: ['最全面的行程，适合时间充裕的游客', '含多项文化体验活动', '住宿为当地四星级标准'],
  },
  family: {
    name: '家庭亲子游', duration: '2天1晚', image: IMAGES.family, price: '¥888/人', rating: 4.7, crowd: '亲子家庭',
    desc: '专为亲子家庭设计，寓教于乐，让孩子在旅途中感受传统文化之美。',
    timeline: [
      { time: 'Day1 09:00', title: '桃花潭', desc: '讲述李白故事，亲子互动游戏', icon: '🏞️' },
      { time: 'Day1 11:00', title: '宣纸体验', desc: '亲子手工造纸体验', icon: '📜' },
      { time: 'Day1 14:00', title: '查济写生', desc: '亲子绘画活动', icon: '🎨' },
      { time: 'Day1 18:00', title: '民宿入住', desc: '亲子主题民宿', icon: '🏡' },
      { time: 'Day2 09:00', title: '自然探索', desc: '溪边捉鱼、植物辨识', icon: '🌿' },
      { time: 'Day2 14:00', title: '返程', desc: '带着作品回家', icon: '🎁' },
    ],
    includes: ['门票', '交通', '亲子导游', '住宿', '手工体验材料', '餐食'],
    excludes: ['个人消费', '旅游保险'],
    notes: ['适合3-12岁儿童家庭', '含多项亲子互动体验', '配备亲子导游'],
  },
  photography: {
    name: '摄影打卡游', duration: '3天2晚', image: IMAGES.photography, price: '¥980/人', rating: 4.9, crowd: '摄影爱好者',
    desc: '专业摄影路线，覆盖日出、晨雾、古村、湖景等最佳机位。',
    timeline: [
      { time: 'Day1 05:00', title: '桃花潭日出', desc: '最佳日出拍摄机位', icon: '🌅' },
      { time: 'Day1 10:00', title: '古镇街拍', desc: '万村老街人文摄影', icon: '📸' },
      { time: 'Day1 16:00', title: '黄昏光影', desc: '金色光线下的建筑拍摄', icon: '🌇' },
      { time: 'Day2 05:30', title: '查济晨雾', desc: '薄雾中的古村如水墨画', icon: '🌫️' },
      { time: 'Day2 10:00', title: '古建细节', desc: '马头墙、木雕、石雕特写', icon: '🔍' },
      { time: 'Day3 06:00', title: '太平湖日出', desc: '湖面倒影最佳时刻', icon: '🏞️' },
      { time: 'Day3 14:00', title: '返程', desc: '满载作品而归', icon: '📷' },
    ],
    includes: ['门票', '交通', '摄影导师指导', '住宿', '餐食'],
    excludes: ['摄影器材', '个人消费'],
    notes: ['建议携带三脚架', '早起拍摄日出，请做好准备', '可交流摄影心得'],
  },
  'self-drive': {
    name: '自驾路线', duration: '2-3天', image: IMAGES.road, price: '自由行', rating: 4.6, crowd: '自驾游客',
    desc: '灵活自由，自驾穿越皖南最美风景线，随走随停。',
    timeline: [
      { time: 'Day1', title: '泾县→桃花潭', desc: '约40分钟车程，沿途风景优美', icon: '🚗' },
      { time: 'Day1', title: '桃花潭游览', desc: '自由安排游览时间', icon: '🏞️' },
      { time: 'Day1', title: '桃花潭→查济', desc: '约30分钟车程', icon: '🚗' },
      { time: 'Day2', title: '查济→太平湖', desc: '约1小时车程，山路弯多', icon: '🚗' },
      { time: 'Day2', title: '太平湖游览', desc: '可选择游船或自驾环湖', icon: '🚢' },
      { time: 'Day3', title: '返程', desc: '可走不同路线返回', icon: '🏠' },
    ],
    includes: ['路线规划', '景区停车指引', '推荐住宿清单'],
    excludes: ['门票', '餐食', '住宿', '油费', '过路费'],
    notes: ['山路弯多，注意行车安全', '景区周边有停车场', '节假日建议提前预订住宿', '携带导航设备或下载离线地图'],
  },
  hiking: {
    name: '徒步慢游', duration: '2天1晚', image: IMAGES.hiking, price: '¥458/人', rating: 4.8, crowd: '户外爱好者',
    desc: '用脚步丈量山水，在徒步中感受原生态自然之美。',
    timeline: [
      { time: 'Day1 07:00', title: '月亮湾出发', desc: '沿溪边徒步', icon: '🥾' },
      { time: 'Day1 10:00', title: '桃花潭', desc: '抵达桃花潭景区', icon: '🏞️' },
      { time: 'Day1 14:00', title: '古道徒步', desc: '走古徽道前往查济', icon: '🛤️' },
      { time: 'Day1 17:00', title: '查济休整', desc: '入住古村民宿', icon: '🏡' },
      { time: 'Day2 07:00', title: '水墨汀溪', desc: '溪谷徒步探险', icon: '🌊' },
      { time: 'Day2 14:00', title: '返程', desc: '乘车返回', icon: '🚌' },
    ],
    includes: ['门票', '导游', '住宿', '餐食', '户外保险'],
    excludes: ['个人装备', '个人消费'],
    notes: ['需要一定体力基础', '穿专业徒步鞋', '携带足够饮用水', '听从领队安排'],
  },
};

export function RouteDetail() {
  const { id } = useParams();
  const route = ROUTE_DATA[id || 'one-day'] || ROUTE_DATA['one-day'];
  const otherRoutes = Object.entries(ROUTE_DATA).filter(([k]) => k !== id).slice(0, 3);

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${route.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="relative h-full flex flex-col justify-end px-8 pb-10 max-w-[1280px] mx-auto">
          <nav className="flex items-center gap-1 text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link to="/routes" className="hover:text-white">路线预览</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">{route.name}</span>
          </nav>
          <h1 className="text-white text-5xl font-bold mb-3" style={{ fontFamily: '"Noto Serif SC", serif' }}>{route.name}</h1>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{route.duration}</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" />{route.crowd}</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-[#FFB114]" />{route.rating}</span>
            <span className="text-2xl font-bold text-[#FFB114]">{route.price}</span>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>路线介绍</h2>
              <p className="text-gray-600 leading-relaxed">{route.desc}</p>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>行程时间轴</h2>
              <div className="space-y-0">
                {route.timeline.map((item: any, i: number) => (
                  <motion.div key={i} className="flex gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB114] to-[#F59E0B] flex items-center justify-center text-xl shadow-lg">{item.icon}</div>
                      {i < route.timeline.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-[#FFB114]/50 to-[#0077B3]/50 my-2" />}
                    </div>
                    <div className="pb-8 flex-1">
                      <p className="text-xs text-[#FFB114] font-medium mb-1">{item.time}</p>
                      <h4 className="font-bold mb-1" style={{ fontFamily: '"Noto Serif SC", serif' }}>{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Includes/Excludes */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold mb-4 text-green-700" style={{ fontFamily: '"Noto Serif SC", serif' }}>✅ 费用包含</h3>
                <ul className="space-y-2">{route.includes.map((i: string) => <li key={i} className="text-sm text-green-600 flex items-start gap-2"><span className="mt-1">•</span>{i}</li>)}</ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <h3 className="font-bold mb-4 text-red-700" style={{ fontFamily: '"Noto Serif SC", serif' }}>❌ 费用不含</h3>
                <ul className="space-y-2">{route.excludes.map((i: string) => <li key={i} className="text-sm text-red-600 flex items-start gap-2"><span className="mt-1">•</span>{i}</li>)}</ul>
              </div>
            </section>

            {/* Notes */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>注意事项</h2>
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <ul className="space-y-3">
                  {route.notes.map((n: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-amber-700">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{n}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#FFB114]">{route.price}</p>
                <p className="text-gray-400 text-sm">每人价格</p>
              </div>
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between"><span className="text-gray-400">时长</span><span className="font-medium">{route.duration}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">适合人群</span><span className="font-medium">{route.crowd}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">评分</span><span className="font-medium flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#FFB114] fill-[#FFB114]" />{route.rating}</span></div>
              </div>
              <Link to="/booking" className="block w-full bg-[#FFB114] hover:bg-[#e9a010] text-white text-center font-semibold py-3 rounded-full transition-colors mb-3">立即预约</Link>
              <Link to="/routes/map" className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center font-medium py-3 rounded-full transition-colors">查看地图</Link>
            </div>
          </div>
        </div>

        {/* Related Routes */}
        <section className="mt-20">
          <SectionTitle title="更多路线" english="MORE ROUTES" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRoutes.map(([key, r]) => (
              <Link key={key} to={`/routes/${key}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-44 overflow-hidden"><ImageWithFallback src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div className="p-5">
                  <h3 className="font-bold mb-1" style={{ fontFamily: '"Noto Serif SC", serif' }}>{r.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400"><Clock className="w-3.5 h-3.5" />{r.duration}<span className="text-[#FFB114] font-bold">{r.price}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
