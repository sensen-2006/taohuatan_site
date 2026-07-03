import { useState } from 'react';
import { Link } from 'react-router';
import { Star, Globe, Clock, Users, MessageCircle } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';

const GUIDES = [
  { id: 1, name: '张老师', avatar: '👨‍🏫', rating: 4.9, reviews: 326, price: 200, languages: ['中文', 'English'], specialty: '桃花潭历史文化', experience: '8年', tours: 1200, intro: '资深讲解员，专精唐诗文化与桃花潭历史' },
  { id: 2, name: '李导', avatar: '👩‍🏫', rating: 4.8, reviews: 218, price: 250, languages: ['中文', 'English', '日本語'], specialty: '查济古建筑', experience: '6年', tours: 860, intro: '建筑学背景，擅长徽派建筑讲解' },
  { id: 3, name: '王导', avatar: '🧑‍🏫', rating: 4.7, reviews: 156, price: 180, languages: ['中文'], specialty: '太平湖生态', experience: '5年', tours: 650, intro: '自然爱好者，熟悉太平湖生态环境' },
  { id: 4, name: '陈导', avatar: '👩‍🎓', rating: 4.9, reviews: 412, price: 300, languages: ['中文', 'English', 'Français'], specialty: '全域文旅', experience: '10年', tours: 2100, intro: '全能型导游，三语讲解，深度文化游首选' },
];

export function GuidesPage() {
  const [langFilter, setLangFilter] = useState('全部');

  return (
    <div>
      <PageBanner image={IMAGES.tourGuide} title="导游预约" subtitle="专业讲解员，带你深度了解文化底蕴" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '导游预约' }]} />

      <section className="py-8 px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto flex gap-3 items-center">
          <Globe className="w-4 h-4 text-gray-400" />
          {['全部', '中文', 'English', '日本語', 'Français'].map(l => (
            <button key={l} onClick={() => setLangFilter(l)} className={`px-4 py-2 rounded-full text-sm transition-all ${langFilter === l ? 'bg-[#0077B3] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{l}</button>
          ))}
        </div>
      </section>

      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {GUIDES.filter(g => langFilter === '全部' || g.languages.includes(langFilter)).map(guide => (
            <div key={guide.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0077B3]/20 to-[#0EA5E9]/20 flex items-center justify-center text-4xl">{guide.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>{guide.name}</h3>
                      <p className="text-gray-400 text-sm">{guide.specialty}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#FFB114]">¥{guide.price}<span className="text-xs text-gray-400 font-normal">/次</span></p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm my-3">{guide.intro}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#FFB114]" />{guide.rating} ({guide.reviews}条)</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{guide.experience}经验</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{guide.tours}次服务</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">{guide.languages.map(l => <span key={l} className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-2 py-0.5 rounded-full">{l}</span>)}</div>
                    <Link to="/booking/confirm" className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">预约</Link>
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
