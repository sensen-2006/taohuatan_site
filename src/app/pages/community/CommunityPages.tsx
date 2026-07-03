import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, MessageCircle, Eye, Star, Clock, Share2, Bookmark, ArrowLeft, Search, Upload, Image, Video, Tag, Send, ChevronRight, ThumbsUp, Flag } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// Travelog List
export function TravelogList() {
  const posts = [
    { id: 1, title: '春日桃花潭，一场关于诗意的旅行', author: '旅行者小王', avatar: '👨', cover: IMAGES.lakeMountain, likes: 328, comments: 56, views: 2856, date: '2026-04-10', excerpt: '三月的桃花潭，春风拂面，桃花正盛。沿着踏歌古岸漫步...' },
    { id: 2, title: '查济古村三日记：穿越明清的时光', author: '摄影师阿林', avatar: '👩', cover: IMAGES.bridgeVillage, likes: 256, comments: 42, views: 1923, date: '2026-04-08', excerpt: '推开那扇古老的木门，仿佛穿越到了明清时代...' },
    { id: 3, title: '太平湖日落：最美时刻的记录', author: '背包客小李', avatar: '🧑', cover: IMAGES.sunsetLake, likes: 189, comments: 28, views: 1456, date: '2026-04-05', excerpt: '当夕阳的余晖洒在太平湖面上，整个世界都安静了...' },
    { id: 4, title: '徽州美食之旅：味蕾上的文化', author: '美食家小陈', avatar: '👧', cover: IMAGES.tea, likes: 412, comments: 89, views: 3421, date: '2026-04-03', excerpt: '臭鳜鱼、毛豆腐、徽州烧饼...每一道都是文化的传承...' },
    { id: 5, title: '带娃游桃花潭：亲子旅行全记录', author: '宝妈阿丽', avatar: '👩‍👧', cover: IMAGES.family, likes: 198, comments: 34, views: 1867, date: '2026-04-01', excerpt: '带着5岁的女儿来桃花潭，没想到她比我还兴奋...' },
    { id: 6, title: '自驾皖南：一路风景一路歌', author: '自驾达人', avatar: '🧔', cover: IMAGES.road, likes: 267, comments: 45, views: 2345, date: '2026-03-28', excerpt: '从合肥出发，沿着G50高速一路向南...' },
  ];

  return (
    <div>
      <PageBanner image={IMAGES.lakeMountain} title="游记列表" subtitle="来自旅行者的真实分享" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '游记列表' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Link key={post.id} to={`/community/travelog/${post.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-48 overflow-hidden"><ImageWithFallback src={post.cover} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <div className="p-6">
                <h3 className="font-bold mb-2 group-hover:text-[#0077B3] transition-colors" style={{ fontFamily: '"Noto Serif SC", serif' }}>{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm"><span>{post.avatar}</span><span className="text-gray-600 text-xs">{post.author}</span><span className="text-gray-300 text-xs">· {post.date}</span></div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{post.comments}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Travelog Detail
export function TravelogDetail() {
  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.lakeMountain})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative h-full flex flex-col justify-end px-8 pb-10 max-w-[900px] mx-auto">
          <div className="flex gap-2 mb-3">{['游记', '桃花潭'].map(t => <span key={t} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">{t}</span>)}</div>
          <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>春日桃花潭，一场关于诗意的旅行</h1>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">👨 旅行者小王</span>
            <span>2026-04-10</span>
            <span className="flex items-center gap-1"><Eye className="w-4 h-4" />2,856</span>
          </div>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-8 py-12">
        {/* Actions */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-100 transition-colors"><Heart className="w-4 h-4" />328</button>
            <button className="flex items-center gap-2 bg-gray-50 text-gray-500 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"><Bookmark className="w-4 h-4" />收藏</button>
            <button className="flex items-center gap-2 bg-gray-50 text-gray-500 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"><Share2 className="w-4 h-4" />分享</button>
          </div>
          <Link to="/community/travelogs" className="text-gray-400 text-sm hover:text-gray-600 flex items-center gap-1"><ArrowLeft className="w-4 h-4" />返回列表</Link>
        </div>

        {/* Content */}
        <article className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">三月的桃花潭，春风拂面，桃花正盛。从泾县城区出发，约四十分钟车程便到达了桃花潭景区。刚一下车，便被眼前的景色所震撼——碧绿的潭水、两岸的青山、远处的薄雾，一切都像是一幅水墨画。</p>
          <div className="rounded-2xl overflow-hidden mb-6"><ImageWithFallback src={IMAGES.lakeMountain} alt="桃花潭" className="w-full h-80 object-cover" /></div>
          <h2 className="text-2xl font-bold my-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>踏歌古岸</h2>
          <p className="text-gray-600 leading-relaxed mb-6">沿着踏歌古岸漫步，脚下是千年的青石板路。这里就是当年李白与汪伦告别的地方。"桃花潭水深千尺，不及汪伦送我情"——站在这里，你才能真正体会到这首诗的意境。</p>
          <div className="rounded-2xl overflow-hidden mb-6"><ImageWithFallback src={IMAGES.garden} alt="古岸" className="w-full h-80 object-cover" /></div>
          <h2 className="text-2xl font-bold my-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>湖上泛舟</h2>
          <p className="text-gray-600 leading-relaxed mb-6">下午，我们乘坐竹筏在潭面上漂流。清澈的潭水倒映着两岸的山色和蓝天白云，船夫撑一杆竹篙，小舟缓缓前行。这一刻，时间仿佛停止了。</p>
          <div className="rounded-2xl overflow-hidden mb-6"><ImageWithFallback src={IMAGES.lakeBoat} alt="泛舟" className="w-full h-80 object-cover" /></div>
          <p className="text-gray-600 leading-relaxed">如果你也在寻找一个远离城市喧嚣的地方，桃花潭是一个完美的选择。这里有诗，有画，有故事，也有你想要的宁静。</p>
        </article>

        {/* Comments */}
        <section className="mt-16">
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>评论 (56)</h3>
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">😊</div>
            <div className="flex-1">
              <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30 resize-none" rows={3} placeholder="写下你的评论..." />
              <div className="flex justify-end mt-2"><button className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">发表评论</button></div>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { name: '旅游爱好者', avatar: '🧑', text: '太美了！看完你的游记我也想去了', time: '2小时前', likes: 12 },
              { name: '古村迷', avatar: '👩', text: '桃花潭确实是个好地方，我去年也去过', time: '5小时前', likes: 8 },
              { name: '摄影新手', avatar: '📷', text: '请问这些照片是什么相机拍的？', time: '1天前', likes: 3 },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg shrink-0">{c.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{c.name}</span>
                    <span className="text-gray-400 text-xs">{c.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{c.text}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <button className="flex items-center gap-1 hover:text-[#FFB114]"><ThumbsUp className="w-3 h-3" />{c.likes}</button>
                    <button className="hover:text-[#0077B3]">回复</button>
                    <button className="hover:text-red-500 flex items-center gap-1"><Flag className="w-3 h-3" />举报</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Guide List & Detail
export function GuideList() {
  const guides = [
    { id: 1, title: '2026桃花潭完全攻略', cover: IMAGES.lakeMountain, author: '官方编辑', views: 5623, date: '2026-04-01', tags: ['攻略', '桃花潭'] },
    { id: 2, title: '查济古村拍照指南：10个最佳机位', cover: IMAGES.bridgeVillage, author: '摄影师阿林', views: 3214, date: '2026-03-28', tags: ['攻略', '摄影'] },
    { id: 3, title: '太平湖亲子游全攻略', cover: IMAGES.family, author: '宝妈阿丽', views: 2876, date: '2026-03-25', tags: ['攻略', '亲子'] },
    { id: 4, title: '泾县美食地图', cover: IMAGES.tea, author: '美食家小陈', views: 4521, date: '2026-03-20', tags: ['攻略', '美食'] },
  ];

  return (
    <div>
      <PageBanner image={IMAGES.bridgeVillage} title="攻略列表" subtitle="实用旅行攻略，助你轻松出行" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '攻略列表' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map(g => (
            <Link key={g.id} to={`/community/guide/${g.id}`} className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
              <div className="w-56 shrink-0 overflow-hidden"><ImageWithFallback src={g.cover} alt={g.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-2">{g.tags.map(t => <span key={t} className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-2 py-0.5 rounded-full">{t}</span>)}</div>
                  <h3 className="font-bold mb-2 group-hover:text-[#0077B3] transition-colors" style={{ fontFamily: '"Noto Serif SC", serif' }}>{g.title}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{g.author}</span><span>{g.date}</span><span className="flex items-center gap-1"><Eye className="w-3 h-3" />{g.views}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function GuideDetail() {
  return (
    <div>
      <PageBanner image={IMAGES.lakeMountain} title="2026桃花潭完全攻略" subtitle="官方编辑 · 2026-04-01" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '攻略', path: '/community/guides' }, { label: '攻略详情' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="flex gap-4 mb-8">
            {['攻略', '桃花潭', '必看'].map(t => <span key={t} className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-3 py-1 rounded-full">{t}</span>)}
          </div>
          <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
            <p className="text-sm text-blue-700 font-medium">📌 摘要：本攻略涵盖桃花潭景区的交通、门票、住宿、餐饮、必游景点等全部实用信息，助你轻松规划完美行程。</p>
          </div>
          <article className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>一、交通指南</h2>
            <p className="text-gray-600 leading-relaxed mb-4">桃花潭位于安徽省宣城市泾县，可通过高铁、大巴、自驾等方式到达。</p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2 text-sm text-gray-600">
              <p>🚄 <strong>高铁：</strong>乘高铁至泾县站，再转乘大巴或出租车约40分钟</p>
              <p>🚌 <strong>大巴：</strong>合肥/南京均有直达泾县的大巴</p>
              <p>🚗 <strong>自驾：</strong>G50沪渝高速泾县出口下</p>
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>二、门票信息</h2>
            <p className="text-gray-600 leading-relaxed mb-4">成人票65元/人，学生票35元/人。建议购买双景联票（桃花潭+查济）108元，更划算。</p>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>三、最佳游览路线</h2>
            <p className="text-gray-600 leading-relaxed mb-4">建议沿以下路线游览：景区入口 → 踏歌古岸 → 文昌阁 → 中华第一祠 → 湖上竹筏 → 万村老街</p>
            <div className="rounded-2xl overflow-hidden mb-6"><ImageWithFallback src={IMAGES.garden} alt="路线" className="w-full h-64 object-cover" /></div>
          </article>
          <div className="mt-8 flex items-center gap-4">
            <button className="flex items-center gap-2 bg-red-50 text-red-500 px-5 py-2.5 rounded-full text-sm"><Heart className="w-4 h-4" />有用 (326)</button>
            <button className="flex items-center gap-2 bg-gray-50 text-gray-500 px-5 py-2.5 rounded-full text-sm"><Bookmark className="w-4 h-4" />收藏</button>
            <button className="flex items-center gap-2 bg-gray-50 text-gray-500 px-5 py-2.5 rounded-full text-sm"><Share2 className="w-4 h-4" />分享</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Gallery
export function GalleryPage() {
  const images = [
    { src: IMAGES.lakeMountain, title: '晨雾桃花潭', author: '摄影师阿林', likes: 456, h: 'h-64' },
    { src: IMAGES.bridgeVillage, title: '查济古桥', author: '旅行者小王', likes: 328, h: 'h-48' },
    { src: IMAGES.sunsetLake, title: '太平湖日落', author: '背包客小李', likes: 567, h: 'h-56' },
    { src: IMAGES.huizhouArch, title: '徽派建筑', author: '建筑迷', likes: 234, h: 'h-52' },
    { src: IMAGES.tea, title: '泾县茶道', author: '茶人小刘', likes: 189, h: 'h-44' },
    { src: IMAGES.garden, title: '桃花潭公园', author: '园林爱好者', likes: 145, h: 'h-60' },
    { src: IMAGES.calligraphy, title: '水墨意境', author: '画家老周', likes: 378, h: 'h-48' },
    { src: IMAGES.hiking, title: '山间小路', author: '徒步达人', likes: 267, h: 'h-56' },
  ];

  return (
    <div>
      <PageBanner image={IMAGES.photography} title="图片视频" subtitle="用镜头记录最美瞬间" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '图片视频' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
              <ImageWithFallback src={img.src} alt={img.title} className={`w-full ${img.h} object-cover group-hover:scale-105 transition-transform duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-sm">{img.title}</h4>
                <div className="flex items-center justify-between text-white/70 text-xs mt-1">
                  <span>{img.author}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{img.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Publish Page
export function PublishPage() {
  const [type, setType] = useState('travelog');
  return (
    <div>
      <PageBanner image={IMAGES.calligraphy} title="发布内容" subtitle="分享你的旅行故事和精彩瞬间" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '发布内容' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="flex gap-3 mb-8">
            {[{ id: 'travelog', label: '游记' }, { id: 'guide', label: '攻略' }, { id: 'photo', label: '图片' }, { id: 'video', label: '视频' }].map(t => (
              <button key={t.id} onClick={() => setType(t.id)} className={`px-5 py-2 rounded-full text-sm transition-all ${type === t.id ? 'bg-[#FFB114] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{t.label}</button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
            <div><label className="text-sm text-gray-500 mb-1 block">标题</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="输入标题..." /></div>

            {(type === 'travelog' || type === 'guide') && (
              <div>
                <label className="text-sm text-gray-500 mb-1 block">正文内容</label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex gap-2 p-2 border-b border-gray-200 text-gray-400">
                    <button className="p-1 hover:text-gray-600">B</button>
                    <button className="p-1 hover:text-gray-600">I</button>
                    <button className="p-1 hover:text-gray-600">H</button>
                    <button className="p-1 hover:text-gray-600"><Image className="w-4 h-4" /></button>
                    <button className="p-1 hover:text-gray-600"><Video className="w-4 h-4" /></button>
                  </div>
                  <textarea className="w-full p-4 text-sm focus:outline-none resize-none bg-transparent" rows={10} placeholder="写下你的故事..." />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm text-gray-500 mb-1 block">上传{type === 'photo' ? '图片' : type === 'video' ? '视频' : '封面图'}</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-[#FFB114] transition-colors cursor-pointer">
                <Upload className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-400 text-sm">点击或拖拽上传</p>
                <p className="text-gray-300 text-xs mt-1">支持 JPG、PNG、MP4 格式</p>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">标签</label>
              <div className="flex gap-2 flex-wrap">
                {['桃花潭', '查济', '太平湖', '美食', '摄影', '亲子', '自驾', '徒步'].map(t => (
                  <button key={t} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600 hover:bg-[#FFB114]/10 hover:text-[#B07A0F] transition-colors flex items-center gap-1"><Tag className="w-3 h-3" />{t}</button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button className="text-gray-400 text-sm">保存草稿</button>
              <button className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2"><Send className="w-4 h-4" />发布</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Author Profile
export function AuthorProfile() {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#1A2A32] to-[#2A3A42] pt-24 pb-12 px-8">
        <div className="max-w-[1280px] mx-auto flex items-end gap-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFB114] to-[#F59E0B] flex items-center justify-center text-4xl shadow-xl border-4 border-white/20">👨</div>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>旅行者小王</h1>
            <p className="text-white/60 text-sm mt-1">热爱旅行，用文字记录每一段美好时光</p>
            <div className="flex items-center gap-6 mt-4 text-sm text-white/50">
              <span><strong className="text-white">28</strong> 篇内容</span>
              <span><strong className="text-white">1,200</strong> 粉丝</span>
              <span><strong className="text-white">56</strong> 关注</span>
              <span><strong className="text-white">3,862</strong> 获赞</span>
            </div>
          </div>
          <button className="bg-[#FFB114] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e9a010] transition-colors">+ 关注</button>
        </div>
      </section>
      <section className="py-12 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-4 mb-8 border-b border-gray-100">
            {['全部内容', '游记', '攻略', '图片'].map((tab, i) => (
              <button key={tab} className={`pb-3 px-2 text-sm font-medium border-b-2 transition-colors ${i === 0 ? 'border-[#FFB114] text-[#FFB114]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>{tab}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[IMAGES.lakeMountain, IMAGES.garden, IMAGES.sunsetLake].map((img, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-44 overflow-hidden"><ImageWithFallback src={img} alt={`作品${i + 1}`} className="w-full h-full object-cover" /></div>
                <div className="p-4">
                  <h4 className="font-bold text-sm mb-2">旅行故事 {i + 1}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{100 + i * 50}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{20 + i * 10}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Comments Page
export function CommentsPage() {
  return (
    <div>
      <PageBanner image={IMAGES.tea} title="热门评论" subtitle="来自游客的真实评价" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '热门评论' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto space-y-6">
          {[
            { name: '旅游爱好者', avatar: '🧑', text: '桃花潭真的太美了！特别是清晨的时候，薄雾弥漫，像仙境一样。强烈推荐！', time: '2天前', likes: 89, spot: '桃花潭' },
            { name: '古建迷', avatar: '👩', text: '查济古村保存得非常完好，每一栋建筑都有故事。如果有时间，一定要听当地人讲讲这些老房子的历史。', time: '3天前', likes: 67, spot: '查济古村' },
            { name: '自驾达人', avatar: '🧔', text: '自驾来的，沿途风景非常美。景区停车方便，价格也合理。下次还要带家人来！', time: '5天前', likes: 45, spot: '太平湖' },
            { name: '亲子游', avatar: '👩‍👧', text: '带孩子来的，小朋友对宣纸制作非常感兴趣。寓教于乐，非常好的体验。', time: '1周前', likes: 56, spot: '宣纸文化园' },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl shrink-0">{c.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">{c.name}</span>
                    <span className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-2 py-0.5 rounded-full">{c.spot}</span>
                    <span className="text-gray-400 text-xs ml-auto">{c.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{c.text}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <button className="flex items-center gap-1 hover:text-[#FFB114]"><ThumbsUp className="w-3 h-3" />{c.likes}</button>
                    <button className="hover:text-[#0077B3]">回复</button>
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

// Drafts Page
export function DraftsPage() {
  return (
    <div>
      <PageBanner image={IMAGES.calligraphy} title="草稿箱" subtitle="你未发布的内容" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '草稿箱' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto space-y-4">
          {[
            { title: '未完成的查济游记', date: '2026-04-11', type: '游记' },
            { title: '太平湖摄影攻略', date: '2026-04-09', type: '攻略' },
          ].map((d, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">{d.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{d.type} · 保存于 {d.date}</p>
              </div>
              <div className="flex gap-3">
                <button className="text-[#0077B3] text-sm hover:underline">继续编辑</button>
                <button className="text-red-400 text-sm hover:underline">删除</button>
              </div>
            </div>
          ))}
          {/* Empty state if no drafts */}
        </div>
      </section>
    </div>
  );
}

// Report Page
export function ReportPage() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="举报反馈" subtitle="帮助我们维护社区环境" breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动', path: '/community' }, { label: '举报反馈' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[600px] mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>提交举报</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">举报类型</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30">
                <option>垃圾广告</option><option>不实信息</option><option>侵权内容</option><option>其他</option>
              </select>
            </div>
            <div><label className="text-sm text-gray-500 mb-1 block">详细说明</label><textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30 resize-none" rows={5} placeholder="请详细描述举报原因..." /></div>
            <div><label className="text-sm text-gray-500 mb-1 block">截图（选填）</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#FFB114] transition-colors">
                <Upload className="w-8 h-8 mx-auto text-gray-300 mb-2" /><p className="text-gray-400 text-xs">上传截图证据</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 bg-[#FFB114] hover:bg-[#e9a010] text-white py-3 rounded-full font-semibold transition-colors">提交举报</button>
        </div>
      </section>
    </div>
  );
}
