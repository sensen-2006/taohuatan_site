import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Search, Heart, MessageCircle, Eye, ArrowRight, TrendingUp, Clock, Camera } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const TAGS = ['全部', '游记', '攻略', '摄影', '美食', '住宿', '交通', '亲子'];

const TRAVELOGS = [
  { id: 1, title: '春日桃花潭，一场关于诗意的旅行', author: '旅行者小王', avatar: '👨', cover: IMAGES.lakeMountain, likes: 328, comments: 56, views: 2856, date: '2026-04-10', tags: ['游记', '桃花潭'] },
  { id: 2, title: '查济古村三日记：穿越明清的时光', author: '摄影师阿林', avatar: '👩', cover: IMAGES.bridgeVillage, likes: 256, comments: 42, views: 1923, date: '2026-04-08', tags: ['游记', '查济'] },
  { id: 3, title: '太平湖日落：最美时刻的记录', author: '背包客小李', avatar: '🧑', cover: IMAGES.sunsetLake, likes: 189, comments: 28, views: 1456, date: '2026-04-05', tags: ['摄影', '太平湖'] },
  { id: 4, title: '泾县美食攻略：不可错过的徽菜', author: '美食家小陈', avatar: '👧', cover: IMAGES.tea, likes: 412, comments: 89, views: 3421, date: '2026-04-03', tags: ['攻略', '美食'] },
];

const GUIDES_CONTENT = [
  { id: 1, title: '2026桃花潭完全攻略', views: 5623, cover: IMAGES.lakeMountain },
  { id: 2, title: '查济古村拍照指南', views: 3214, cover: IMAGES.bridgeVillage },
  { id: 3, title: '太平湖亲子游攻略', views: 2876, cover: IMAGES.family },
];

const AUTHORS = [
  { name: '旅行者小王', avatar: '👨', posts: 28, followers: 1200 },
  { name: '摄影师阿林', avatar: '👩', posts: 45, followers: 3500 },
  { name: '美食家小陈', avatar: '👧', posts: 32, followers: 2800 },
];

export function CommunityHome() {
  return (
    <div>
      <PageBanner image={IMAGES.sunsetLake} title="社区互动" subtitle="分享旅途故事，发现更多精彩" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动' }]} />

      {/* Search & Tags */}
      <section className="py-8 px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 flex-wrap">{TAGS.map(t => <Link key={t} to={t === '全部' ? '/community' : `/community/travelogs`} className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-[#FFB114] hover:text-white transition-all">{t}</Link>)}</div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30 w-64" placeholder="搜索游记、攻略..." />
          </div>
        </div>
      </section>

      {/* Hot Travelogs */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle title="热门游记" english="HOT TRAVELOGS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAVELOGS.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/community/travelog/${post.id}`} className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
                  <div className="w-48 h-48 shrink-0 overflow-hidden">
                    <ImageWithFallback src={post.cover} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-2 mb-2">{post.tags.map(t => <span key={t} className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-2 py-0.5 rounded-full">{t}</span>)}</div>
                      <h3 className="font-bold mb-2 group-hover:text-[#0077B3] transition-colors" style={{ fontFamily: '"Noto Serif SC", serif' }}>{post.title}</h3>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-sm"><span>{post.avatar}</span><span className="text-gray-600">{post.author}</span><span className="text-gray-300">·</span><span className="text-gray-400 text-xs">{post.date}</span></div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" />{post.likes}</span>
                        <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{post.comments}</span>
                        <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{post.views}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/community/travelogs" className="inline-flex items-center gap-2 text-[#0077B3] font-medium text-sm hover:gap-3 transition-all">查看更多游记 <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Guides & Authors */}
      <section className="py-16 px-8 bg-gradient-to-b from-white to-[#F6F8F8]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Guides */}
          <div className="lg:col-span-2">
            <SectionTitle title="热门攻略" english="GUIDES" align="left" />
            <div className="space-y-4">
              {GUIDES_CONTENT.map((g, i) => (
                <Link key={g.id} to={`/community/guide/${g.id}`} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                  <span className="text-2xl font-bold text-gray-200 w-8">{i + 1}</span>
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0"><ImageWithFallback src={g.cover} alt={g.title} className="w-full h-full object-cover" /></div>
                  <div className="flex-1"><h4 className="font-bold text-sm group-hover:text-[#0077B3] transition-colors">{g.title}</h4><span className="text-xs text-gray-400 flex items-center gap-1"><Eye className="w-3 h-3" />{g.views}</span></div>
                </Link>
              ))}
            </div>
            <div className="mt-4"><Link to="/community/guides" className="text-[#0077B3] text-sm font-medium">查看全部攻略 →</Link></div>
          </div>
          {/* Authors */}
          <div>
            <SectionTitle title="推荐作者" english="AUTHORS" align="left" />
            <div className="space-y-4">
              {AUTHORS.map(a => (
                <Link key={a.name} to="/community/author/1" className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB114]/20 to-[#0077B3]/20 flex items-center justify-center text-2xl">{a.avatar}</div>
                  <div className="flex-1"><h4 className="font-bold text-sm">{a.name}</h4><p className="text-xs text-gray-400">{a.posts}篇内容 · {a.followers}粉丝</p></div>
                  <button className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-3 py-1 rounded-full hover:bg-[#0077B3] hover:text-white transition-colors">关注</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Publish CTA */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/community/gallery" className="group bg-gradient-to-br from-[#0077B3] to-[#0EA5E9] rounded-2xl p-10 text-white">
            <Camera className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>图片视频</h3>
            <p className="text-white/70 mb-4">浏览精美旅行照片和视频</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">立即浏览 <ArrowRight className="w-4 h-4" /></span>
          </Link>
          <Link to="/community/publish" className="group bg-gradient-to-br from-[#FFB114] to-[#F59E0B] rounded-2xl p-10 text-white">
            <TrendingUp className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>分享你的故事</h3>
            <p className="text-white/70 mb-4">发布游记、攻略、图片视频</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">立即发布 <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
