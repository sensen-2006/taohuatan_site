import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { User, Calendar, ShoppingBag, Heart, MessageCircle, FileText, Settings, ChevronRight, Bell, Shield, Globe, Tag, Receipt, Mail, Lock, Camera, LogOut } from 'lucide-react';
import { Header } from '../../components/shared/Header';
import { Footer } from '../../components/shared/Footer';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const MENU = [
  { label: '个人中心', path: '/user', icon: <User className="w-4 h-4" /> },
  { label: '我的预约', path: '/user/bookings', icon: <Calendar className="w-4 h-4" /> },
  { label: '我的订单', path: '/user/orders', icon: <ShoppingBag className="w-4 h-4" /> },
  { label: '我的收藏', path: '/user/favorites', icon: <Heart className="w-4 h-4" /> },
  { label: '我的评论', path: '/user/comments', icon: <MessageCircle className="w-4 h-4" /> },
  { label: '我的游记', path: '/user/travelogs', icon: <FileText className="w-4 h-4" /> },
  { label: '消息中心', path: '/user/messages', icon: <Bell className="w-4 h-4" /> },
  { label: '我的优惠券', path: '/user/coupons', icon: <Tag className="w-4 h-4" /> },
  { label: '我的发票', path: '/user/invoices', icon: <Receipt className="w-4 h-4" /> },
  { label: '设置', path: '/user/settings', icon: <Settings className="w-4 h-4" /> },
];

export function UserLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-[#F6F8F8] flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <div className="flex-1 flex">
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-100 shrink-0">
          {/* Profile summary */}
          <div className="p-6 border-b border-gray-100 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB114] to-[#F59E0B] flex items-center justify-center text-3xl mx-auto mb-3">👨</div>
            <h3 className="font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>旅行者小王</h3>
            <p className="text-gray-400 text-xs">hello@example.com</p>
          </div>
          <nav className="p-3">
            {MENU.map(item => (
              <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all mb-1 ${(location.pathname === item.path || (item.path !== '/user' && location.pathname.startsWith(item.path))) ? 'bg-[#FFB114]/10 text-[#B07A0F] font-medium' : 'text-gray-500 hover:bg-gray-50'}`}>
                {item.icon}{item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-8"><Outlet /></main>
      </div>
      <Footer />
    </div>
  );
}

// Dashboard
export function UserDashboard() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>个人中心</h2>
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[{ label: '待出行', value: '2', color: 'text-[#FFB114]' }, { label: '待评价', value: '3', color: 'text-[#0077B3]' }, { label: '收藏', value: '12', color: 'text-red-500' }, { label: '优惠券', value: '5', color: 'text-green-500' }].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-5 border border-gray-100 text-center">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-gray-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Recent Orders */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>最近订单</h3>
          <Link to="/user/orders" className="text-[#0077B3] text-sm">查看全部 →</Link>
        </div>
        <div className="space-y-4">
          {[
            { name: '桃花潭+查济双景联票', date: '2026-04-15', status: '待出行', price: '¥274', statusColor: 'text-green-600 bg-green-50' },
            { name: '查济古韵民宿 - 徽派标间', date: '2026-04-15', status: '已确认', price: '¥388', statusColor: 'text-blue-600 bg-blue-50' },
          ].map(o => (
            <div key={o.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div><h4 className="font-medium text-sm">{o.name}</h4><p className="text-gray-400 text-xs">{o.date}</p></div>
              <div className="flex items-center gap-4">
                <span className={`text-xs px-2 py-1 rounded-full ${o.statusColor}`}>{o.status}</span>
                <span className="font-bold text-sm">{o.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '🎫', label: '预订门票', link: '/booking/tickets' },
          { icon: '🏨', label: '预订住宿', link: '/booking/hotels' },
          { icon: '📝', label: '写游记', link: '/community/publish' },
          { icon: '❓', label: '帮助中心', link: '/support/faq' },
        ].map(q => (
          <Link key={q.label} to={q.link} className="bg-white rounded-xl p-4 border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">{q.icon}</div>
            <p className="text-xs font-medium">{q.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// My Bookings
export function MyBookings() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的预约</h2>
      <div className="space-y-4">
        {[
          { name: '桃花潭+查济双景联票', date: '2026-04-15', count: '成人x2 学生x1', status: '待出行', price: '¥274' },
          { name: '导游服务 - 张老师', date: '2026-04-15 09:00', count: '桃花潭讲解', status: '已确认', price: '¥200' },
          { name: '太平湖游船观光票', date: '2026-04-16', count: '成人x2', status: '已完成', price: '¥160' },
        ].map(b => (
          <div key={b.name} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm">{b.name}</h4>
              <p className="text-gray-400 text-xs mt-1">{b.date} · {b.count}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs px-3 py-1 rounded-full ${b.status === '待出行' ? 'bg-green-50 text-green-600' : b.status === '已确认' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>{b.status}</span>
              <span className="font-bold">{b.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// My Orders
export function MyOrders() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的订单</h2>
      <div className="flex gap-3 mb-6">
        {['全部', '待支付', '待出行', '已完成', '已取消'].map((tab, i) => (
          <button key={tab} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? 'bg-[#FFB114] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{tab}</button>
        ))}
      </div>
      <div className="space-y-4">
        {[
          { id: 'TH20260415001', name: '桃花潭+查济双景联票', date: '2026-04-15', status: '待出行', price: '¥274', statusColor: 'bg-green-50 text-green-600' },
          { id: 'TH20260414002', name: '查济古韵民宿 - 徽派标间', date: '2026-04-15-16', status: '已确认', price: '¥388', statusColor: 'bg-blue-50 text-blue-600' },
          { id: 'TH20260410003', name: '太平湖游船观光票', date: '2026-04-10', status: '已完成', price: '¥160', statusColor: 'bg-gray-50 text-gray-400' },
        ].map(o => (
          <div key={o.id} className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400">订单号：{o.id}</span>
              <span className={`text-xs px-3 py-1 rounded-full ${o.statusColor}`}>{o.status}</span>
            </div>
            <div className="flex items-center justify-between">
              <div><h4 className="font-bold text-sm">{o.name}</h4><p className="text-gray-400 text-xs mt-1">{o.date}</p></div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-lg">{o.price}</span>
                {o.status === '待出行' && <Link to="/booking/refund" className="text-[#0077B3] text-xs hover:underline">退改签</Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// My Favorites
export function MyFavorites() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的收藏</h2>
      <div className="flex gap-3 mb-6">
        {['景点', '路线', '攻略', '游记'].map((tab, i) => (
          <button key={tab} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? 'bg-[#FFB114] text-white' : 'bg-gray-100 text-gray-600'}`}>{tab}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: '桃花潭', image: IMAGES.lakeMountain, type: '景点' },
          { name: '查济古村', image: IMAGES.bridgeVillage, type: '景点' },
          { name: '太平湖', image: IMAGES.lakeBoat, type: '景点' },
        ].map(f => (
          <div key={f.name} className="bg-white rounded-xl overflow-hidden border border-gray-100 group">
            <div className="h-36 overflow-hidden"><ImageWithFallback src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-4 flex items-center justify-between">
              <div><h4 className="font-bold text-sm">{f.name}</h4><p className="text-gray-400 text-xs">{f.type}</p></div>
              <button className="text-red-400 hover:text-red-600"><Heart className="w-5 h-5 fill-current" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// My Comments
export function MyComments() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的评论</h2>
      <div className="space-y-4">
        {[
          { target: '桃花潭', text: '非常美丽的景区，值得一去！', date: '2026-04-10', likes: 12 },
          { target: '查济古村', text: '保存完好的古村落，历史感十足', date: '2026-04-08', likes: 8 },
        ].map((c, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs bg-[#FFB114]/10 text-[#B07A0F] px-2 py-0.5 rounded-full">{c.target}</span>
              <span className="text-gray-400 text-xs">{c.date}</span>
            </div>
            <p className="text-gray-600 text-sm">{c.text}</p>
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
              <span>❤️ {c.likes}</span>
              <button className="text-red-400 hover:underline">删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// My Travelogs
export function MyTravelogs() {
  return (
    <div className="max-w-[1000px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的游记</h2>
        <Link to="/community/publish" className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">+ 写游记</Link>
      </div>
      <div className="space-y-4">
        {[
          { title: '春日桃花潭，一场关于诗意的旅行', date: '2026-04-10', status: '已发布', views: 2856, likes: 328 },
          { title: '查济古村三日记', date: '2026-04-08', status: '草稿', views: 0, likes: 0 },
        ].map(t => (
          <div key={t.title} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm">{t.title}</h4>
              <p className="text-gray-400 text-xs mt-1">{t.date} · {t.status}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              {t.status === '已发布' && <><span>👁 {t.views}</span><span>❤️ {t.likes}</span></>}
              <button className="text-[#0077B3] hover:underline">编辑</button>
              <button className="text-red-400 hover:underline">删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Settings
export function SettingsPage() {
  return (
    <div className="max-w-[600px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>设置</h2>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
        <div className="p-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB114] to-[#F59E0B] flex items-center justify-center text-3xl">👨</div>
          <div className="flex-1"><h4 className="font-bold">旅行者小王</h4><p className="text-gray-400 text-xs">点击��换头像</p></div>
          <Camera className="w-5 h-5 text-gray-300" />
        </div>
        {[
          { label: '昵称', value: '旅行者小王', icon: <User className="w-4 h-4" /> },
          { label: '手机号', value: '138****8888', icon: <Mail className="w-4 h-4" /> },
          { label: '密码', value: '••••••', icon: <Lock className="w-4 h-4" /> },
          { label: '账号安全', value: '', icon: <Shield className="w-4 h-4" />, link: '/user/security' },
          { label: '通知设置', value: '', icon: <Bell className="w-4 h-4" />, link: '/user/notifications' },
          { label: '隐私设置', value: '', icon: <Shield className="w-4 h-4" />, link: '/user/privacy-settings' },
          { label: '语言设置', value: '中文', icon: <Globe className="w-4 h-4" />, link: '/user/language' },
        ].map(item => (
          <Link key={item.label} to={item.link || '/user/settings'} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
            <span className="text-gray-400">{item.icon}</span>
            <span className="flex-1 text-sm">{item.label}</span>
            <span className="text-gray-400 text-sm">{item.value}</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </Link>
        ))}
      </div>
      <button className="w-full mt-6 bg-red-50 text-red-500 py-3 rounded-xl font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2"><LogOut className="w-4 h-4" />退出登录</button>
    </div>
  );
}

// Messages
export function MessagesPage() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>消息中心</h2>
      <div className="flex gap-3 mb-6">
        {['全部', '系统通知', '订单消息', '互动消息'].map((tab, i) => (
          <button key={tab} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? 'bg-[#FFB114] text-white' : 'bg-gray-100 text-gray-600'}`}>{tab}</button>
        ))}
      </div>
      <div className="space-y-3">
        {[
          { icon: '🎫', title: '订单确认', desc: '您的桃花潭+查济双景联票已确认', time: '2小时前', unread: true },
          { icon: '💬', title: '新评论', desc: '旅游爱好者回复了您的游记', time: '5小时前', unread: true },
          { icon: '📢', title: '景区公告', desc: '桃花潭景区4月开放时间调整通知', time: '1天前', unread: false },
          { icon: '🎁', title: '优惠活动', desc: '春季特惠：双景联票限时9折', time: '2天前', unread: false },
        ].map((m, i) => (
          <div key={i} className={`bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4 ${m.unread ? 'border-l-4 border-l-[#FFB114]' : ''}`}>
            <span className="text-2xl">{m.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2"><h4 className="font-bold text-sm">{m.title}</h4>{m.unread && <span className="w-2 h-2 bg-red-500 rounded-full" />}</div>
              <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
            </div>
            <span className="text-gray-400 text-xs whitespace-nowrap">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Coupons
export function CouponsPage() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的优惠券</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { amount: '¥50', condition: '满300可用', name: '春季特惠券', expire: '2026-05-31', type: '门票' },
          { amount: '9折', condition: '住宿专享', name: '住宿折扣券', expire: '2026-06-30', type: '酒店' },
          { amount: '¥30', condition: '满200可用', name: '新人礼券', expire: '2026-04-30', type: '通用' },
        ].map(c => (
          <div key={c.name} className="bg-white rounded-xl overflow-hidden border border-gray-100 flex">
            <div className="bg-gradient-to-b from-[#FFB114] to-[#F59E0B] text-white p-6 flex flex-col items-center justify-center w-28">
              <span className="text-2xl font-bold">{c.amount}</span>
              <span className="text-xs text-white/70">{c.condition}</span>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div><h4 className="font-bold text-sm">{c.name}</h4><p className="text-gray-400 text-xs">{c.type}专用 · 有效期至 {c.expire}</p></div>
              <button className="self-end text-xs bg-[#FFB114] text-white px-4 py-1 rounded-full hover:bg-[#e9a010] transition-colors">立即使用</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Invoices
export function InvoicesPage() {
  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>我的发票</h2>
      <div className="space-y-4">
        {[
          { order: 'TH20260415001', amount: '¥274', status: '已开具', date: '2026-04-15' },
          { order: 'TH20260410003', amount: '¥160', status: '待开具', date: '2026-04-10' },
        ].map(inv => (
          <div key={inv.order} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-between">
            <div><h4 className="font-bold text-sm">订单 {inv.order}</h4><p className="text-gray-400 text-xs mt-1">{inv.date} · 金额 {inv.amount}</p></div>
            <span className={`text-xs px-3 py-1 rounded-full ${inv.status === '已开具' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>{inv.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Security, Notifications, Privacy Settings, Language Settings
export function SecurityPage() {
  return (
    <div className="max-w-[600px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>账号安全</h2>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
        {[
          { label: '登录密码', desc: '已设置', action: '修改' },
          { label: '手机号绑定', desc: '138****8888', action: '更换' },
          { label: '邮箱绑定', desc: '未绑定', action: '绑定' },
          { label: '微信绑定', desc: '已绑定', action: '解绑' },
          { label: '实名认证', desc: '已认证', action: '查看' },
        ].map(item => (
          <div key={item.label} className="flex items-center justify-between px-6 py-4">
            <div><p className="text-sm font-medium">{item.label}</p><p className="text-gray-400 text-xs">{item.desc}</p></div>
            <button className="text-[#0077B3] text-sm hover:underline">{item.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NotificationsPage() {
  return (
    <div className="max-w-[600px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>通知设置</h2>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
        {['订单状态通知', '优惠活动推送', '社区互动提醒', '景区公告通知', '系统消息'].map(item => (
          <div key={item} className="flex items-center justify-between px-6 py-4">
            <span className="text-sm">{item}</span>
            <div className="w-10 h-6 bg-[#FFB114] rounded-full relative cursor-pointer"><div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PrivacySettingsPage() {
  return (
    <div className="max-w-[600px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>隐私设置</h2>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
        {['允许他人查看我的收藏', '允许他人查看我的游记', '允许他人给我发消息', '展示在线状态'].map(item => (
          <div key={item} className="flex items-center justify-between px-6 py-4">
            <span className="text-sm">{item}</span>
            <div className="w-10 h-6 bg-gray-300 rounded-full relative cursor-pointer"><div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LanguagePage() {
  return (
    <div className="max-w-[600px]">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>语言设置</h2>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
        {[{ label: '简体中文', active: true }, { label: 'English', active: false }, { label: '日本語', active: false }].map(lang => (
          <button key={lang.label} className={`w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors ${lang.active ? 'text-[#FFB114]' : ''}`}>
            <span className="text-sm font-medium">{lang.label}</span>
            {lang.active && <span className="text-[#FFB114]">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
