import { useState } from 'react';
import { Link } from 'react-router';
import { Star, MapPin, Wifi, Coffee, Car, Filter } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const HOTELS = [
  { id: 1, name: '桃花潭度假酒店', type: '星级酒店', rating: 4.8, reviews: 326, price: 588, original: 788, image: IMAGES.hotel, location: '桃花潭景区旁', amenities: ['WiFi', '早餐', '停车', '空调'], rooms: [{ name: '豪华大床房', price: 588 }, { name: '山景双床房', price: 688 }, { name: '湖景套房', price: 988 }] },
  { id: 2, name: '查济古韵民宿', type: '特色民宿', rating: 4.9, reviews: 218, price: 388, original: 488, image: IMAGES.bridgeVillage, location: '查济古村内', amenities: ['WiFi', '早餐', '茶室'], rooms: [{ name: '徽派标间', price: 388 }, { name: '古韵大床房', price: 488 }, { name: '院景套房', price: 688 }] },
  { id: 3, name: '太平湖畔客栈', type: '湖景民宿', rating: 4.7, reviews: 156, price: 458, original: 558, image: IMAGES.sunsetLake, location: '太平湖景区', amenities: ['WiFi', '湖景', '停车', '钓鱼'], rooms: [{ name: '湖景标间', price: 458 }, { name: '湖景大床房', price: 558 }] },
  { id: 4, name: '泾县文旅大酒店', type: '商务酒店', rating: 4.5, reviews: 432, price: 288, original: 398, image: IMAGES.huizhouArch, location: '泾县城区', amenities: ['WiFi', '早餐', '停车', '健身'], rooms: [{ name: '商务标间', price: 288 }, { name: '商务大床', price: 358 }] },
];

const FILTERS = ['全部', '星级酒店', '特色民宿', '湖景民宿', '商务酒店'];

export function HotelsPage() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filtered = HOTELS.filter(h => activeFilter === '全部' || h.type === activeFilter);

  return (
    <div>
      <PageBanner image={IMAGES.hotel} title="酒店民宿" subtitle="精选品质住宿，感受徽派生活" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '酒店民宿' }]} />

      <section className="py-8 px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto flex gap-3 flex-wrap items-center">
          <Filter className="w-4 h-4 text-gray-400" />
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === f ? 'bg-[#FFB114] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{f}</button>
          ))}
        </div>
      </section>

      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto space-y-6">
          {filtered.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-80 h-56 md:h-auto shrink-0 overflow-hidden">
                  <ImageWithFallback src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>{hotel.name}</h3>
                        <span className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-2 py-0.5 rounded-full">{hotel.type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#FFB114] fill-[#FFB114]" />{hotel.rating} ({hotel.reviews}条)</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{hotel.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-300 text-sm line-through">¥{hotel.original}</span>
                      <p className="text-2xl font-bold text-[#FFB114]">¥{hotel.price}<span className="text-xs text-gray-400 font-normal">起/晚</span></p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    {hotel.amenities.map(a => (
                      <span key={a} className="text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">{a}</span>
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    {hotel.rooms.map(r => (
                      <div key={r.name} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2">
                        <span className="text-sm">{r.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#FFB114]">¥{r.price}/晚</span>
                          <Link to="/booking/confirm" className="bg-[#FFB114] hover:bg-[#e9a010] text-white text-xs px-4 py-1.5 rounded-full transition-colors">预订</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
