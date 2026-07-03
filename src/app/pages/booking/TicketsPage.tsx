import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, Users, Minus, Plus, ChevronRight, Star, Clock, MapPin } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const TICKETS = [
  { id: 1, spot: '桃花潭', image: IMAGES.lakeMountain, types: [{ name: '成人票', price: 65, original: 75 }, { name: '学生票', price: 35, original: 40 }, { name: '儿童/老人票', price: 0, original: 0, note: '免费' }] },
  { id: 2, spot: '查济古村', image: IMAGES.bridgeVillage, types: [{ name: '成人票', price: 58, original: 68 }, { name: '学生票', price: 30, original: 35 }] },
  { id: 3, spot: '太平湖', image: IMAGES.lakeBoat, types: [{ name: '成人票(含游船)', price: 80, original: 100 }, { name: '纯门票', price: 40, original: 50 }] },
  { id: 4, spot: '双景联票(桃花潭+查济)', image: IMAGES.garden, types: [{ name: '成人联票', price: 108, original: 143 }, { name: '学生联票', price: 58, original: 75 }] },
];

export function TicketsPage() {
  const [selectedSpot, setSelectedSpot] = useState(0);
  const [selectedDate, setSelectedDate] = useState('2026-04-15');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const ticket = TICKETS[selectedSpot];
  const total = ticket.types.reduce((sum, t) => sum + (quantities[t.name] || 0) * t.price, 0);

  return (
    <div>
      <PageBanner image={IMAGES.lakeMountain} title="门票预约" subtitle="在线购票，扫码入园" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '门票预约' }]} />

      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Spot Selection */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>选择景点</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TICKETS.map((t, i) => (
                  <button key={t.id} onClick={() => { setSelectedSpot(i); setQuantities({}); }} className={`rounded-xl overflow-hidden border-2 transition-all ${selectedSpot === i ? 'border-[#FFB114] shadow-lg' : 'border-transparent hover:border-gray-200'}`}>
                    <div className="h-24 overflow-hidden"><ImageWithFallback src={t.image} alt={t.spot} className="w-full h-full object-cover" /></div>
                    <p className="p-2 text-xs font-medium text-center">{t.spot}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>选择日期</h2>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {Array.from({ length: 7 }, (_, i) => {
                  const d = new Date(2026, 3, 13 + i);
                  const ds = d.toISOString().split('T')[0];
                  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
                  return (
                    <button key={ds} onClick={() => setSelectedDate(ds)} className={`flex flex-col items-center px-5 py-3 rounded-xl border transition-all shrink-0 ${selectedDate === ds ? 'bg-[#FFB114] text-white border-[#FFB114]' : 'bg-white border-gray-200 hover:border-[#FFB114]'}`}>
                      <span className="text-xs">周{weekdays[d.getDay()]}</span>
                      <span className="text-lg font-bold">{d.getDate()}</span>
                      <span className="text-xs">{d.getMonth() + 1}月</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ticket Types */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>选择票种</h2>
              <div className="space-y-4">
                {ticket.types.map(t => (
                  <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      {t.note && <span className="text-green-600 text-xs">{t.note}</span>}
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-[#FFB114] font-bold text-xl">¥{t.price}</span>
                        {t.original > 0 && <span className="text-gray-300 text-sm line-through">¥{t.original}</span>}
                      </div>
                    </div>
                    {t.price > 0 && (
                      <div className="flex items-center gap-3">
                        <button onClick={() => setQuantities(q => ({ ...q, [t.name]: Math.max(0, (q[t.name] || 0) - 1) }))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"><Minus className="w-4 h-4" /></button>
                        <span className="w-8 text-center font-bold">{quantities[t.name] || 0}</span>
                        <button onClick={() => setQuantities(q => ({ ...q, [t.name]: (q[t.name] || 0) + 1 }))} className="w-8 h-8 rounded-full bg-[#FFB114] hover:bg-[#e9a010] text-white flex items-center justify-center transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>订单摘要</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between"><span className="text-gray-400">景点</span><span className="font-medium">{ticket.spot}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">日期</span><span className="font-medium">{selectedDate}</span></div>
                {ticket.types.filter(t => (quantities[t.name] || 0) > 0).map(t => (
                  <div key={t.name} className="flex justify-between">
                    <span className="text-gray-400">{t.name} x{quantities[t.name]}</span>
                    <span className="font-medium">¥{t.price * (quantities[t.name] || 0)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400">合计</span>
                  <span className="text-3xl font-bold text-[#FFB114]">¥{total}</span>
                </div>
              </div>
              <Link to="/booking/confirm" className={`block w-full text-center font-semibold py-3 rounded-full transition-colors ${total > 0 ? 'bg-[#FFB114] hover:bg-[#e9a010] text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                立即预订
              </Link>
              <p className="text-gray-400 text-xs mt-3 text-center">支持微信、支付宝等多种支付方式</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
