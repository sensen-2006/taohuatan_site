import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, ChevronRight, Clock, Star, X } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const MAP_SPOTS = [
  { id: 'taohuatan', name: '桃花潭', x: 35, y: 45, image: IMAGES.lakeMountain, desc: '5A级景区，李白名诗诞生地', time: '08:00-17:30' },
  { id: 'chaji', name: '查济古村', x: 55, y: 35, image: IMAGES.bridgeVillage, desc: '中国最大明清古村落', time: '全天开放' },
  { id: 'taipinghu', name: '太平湖', x: 75, y: 55, image: IMAGES.lakeBoat, desc: '安徽最大人工湖', time: '08:00-18:00' },
  { id: 'jingxian', name: '泾县城区', x: 20, y: 30, image: IMAGES.huizhouArch, desc: '游客集散中心', time: '全天' },
  { id: 'xuanzhi', name: '宣纸文化园', x: 25, y: 55, image: IMAGES.calligraphy, desc: '非遗宣纸制作体验', time: '09:00-17:00' },
  { id: 'shuimo', name: '水墨汀溪', x: 45, y: 65, image: IMAGES.hiking, desc: '原生态徒步胜地', time: '08:00-17:00' },
];

const ROUTE_LINES = [
  { from: 'jingxian', to: 'taohuatan', label: '40min' },
  { from: 'taohuatan', to: 'chaji', label: '30min' },
  { from: 'chaji', to: 'taipinghu', label: '60min' },
  { from: 'jingxian', to: 'xuanzhi', label: '20min' },
  { from: 'taohuatan', to: 'shuimo', label: '25min' },
];

export function RouteMap() {
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);
  const spot = MAP_SPOTS.find(s => s.id === selectedSpot);

  return (
    <div>
      <PageBanner image={IMAGES.sunsetLake} title="路线地图" subtitle="查看景区分布与路线连接" breadcrumbs={[{ label: '首页', path: '/' }, { label: '路线预览', path: '/routes' }, { label: '路线地图' }]} />

      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-3">
              <div className="relative bg-gradient-to-br from-[#E8F4FD] to-[#F0FAF0] rounded-3xl overflow-hidden border border-gray-200 shadow-sm" style={{ aspectRatio: '16/10' }}>
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0,119,179,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,179,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                {/* Decorative mountains */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 Q15,50 30,70 Q45,40 60,65 Q75,45 90,60 L100,80 L100,100 L0,100Z" fill="rgba(34,139,34,0.08)" />
                  <path d="M0,90 Q20,70 40,85 Q60,65 80,80 L100,90 L100,100 L0,100Z" fill="rgba(34,139,34,0.05)" />
                </svg>

                {/* Route lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {ROUTE_LINES.map((line, i) => {
                    const from = MAP_SPOTS.find(s => s.id === line.from)!;
                    const to = MAP_SPOTS.find(s => s.id === line.to)!;
                    const midX = (from.x + to.x) / 2;
                    const midY = (from.y + to.y) / 2 - 5;
                    return (
                      <g key={i}>
                        <path d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`} stroke="#0077B3" strokeWidth="0.4" fill="none" strokeDasharray="1.5,1" opacity="0.6" />
                        <text x={midX} y={midY + 3} textAnchor="middle" className="text-[2px] fill-[#0077B3]" fontWeight="bold">{line.label}</text>
                      </g>
                    );
                  })}
                </svg>

                {/* Spot markers */}
                {MAP_SPOTS.map(s => (
                  <button key={s.id} onClick={() => setSelectedSpot(s.id)} className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all ${selectedSpot === s.id ? 'z-20 scale-110' : 'z-10 hover:scale-105'}`} style={{ left: `${s.x}%`, top: `${s.y}%` }}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${selectedSpot === s.id ? 'bg-[#FFB114]' : 'bg-[#0077B3]'} text-white`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-gray-700 mt-1 whitespace-nowrap bg-white/80 px-2 py-0.5 rounded-full shadow-sm">{s.name}</p>
                  </button>
                ))}

                {/* Title */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow">
                  <h3 className="font-bold text-sm" style={{ fontFamily: '"Noto Serif SC", serif' }}>泾县景区分布图</h3>
                  <p className="text-gray-400 text-xs">Jingxian Scenic Area Map</p>
                </div>

                {/* Legend */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow text-xs">
                  <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 rounded-full bg-[#0077B3]" /><span>景点标记</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#FFB114]" /><span>当前选中</span></div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-4">
              <h3 className="font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>景点列表</h3>
              {MAP_SPOTS.map(s => (
                <button key={s.id} onClick={() => setSelectedSpot(s.id)} className={`w-full text-left rounded-xl p-4 transition-all border ${selectedSpot === s.id ? 'bg-[#FFB114]/10 border-[#FFB114]/30 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <ImageWithFallback src={s.image} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{s.name}</h4>
                      <p className="text-gray-400 text-xs">{s.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Spot Detail */}
          {spot && (
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>{spot.name}</h3>
                  <p className="text-gray-500 text-sm">{spot.desc}</p>
                </div>
                <button onClick={() => setSelectedSpot(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{spot.time}</span>
              </div>
              <div className="flex gap-3">
                <Link to={`/scenic/${spot.id}`} className="bg-[#0077B3] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#006299] transition-colors">查看详情</Link>
                <Link to="/booking/tickets" className="bg-[#FFB114] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e9a010] transition-colors">预订门票</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
