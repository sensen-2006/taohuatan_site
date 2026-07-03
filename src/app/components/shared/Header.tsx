import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Search, User, Globe, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: '首页', path: '/' },
  { label: '景点介绍', path: '/scenic' },
  { label: '路线预览', path: '/routes' },
  { label: '在线预约', path: '/booking' },
  { label: '社区互动', path: '/community' },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const base = transparent
    ? 'fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-sm bg-gradient-to-b from-black/60 to-black/40'
    : 'sticky top-0 z-50 border-b border-gray-200 backdrop-blur-xl bg-white/90';
  const textColor = transparent ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  const activeColor = transparent ? 'text-[#FFB114]' : 'text-[#FFB114]';
  const logoText = transparent ? 'text-white' : 'text-gray-900';
  const subText = transparent ? 'text-white/60' : 'text-gray-400';
  const iconColor = transparent ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900';

  return (
    <header className={base}>
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFB114] rounded-xl flex items-center justify-center text-white font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>桃</div>
          <div>
            <h1 className={`${logoText} font-bold`} style={{ fontFamily: '"Noto Serif SC", serif', fontSize: '1.125rem' }}>Taohuatan</h1>
            <p className={`${subText} text-xs`}>数字化展示与预约平台</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? activeColor : textColor} transition-colors text-sm font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/search" className={`${iconColor} transition-colors p-2`}><Search className="w-5 h-5" /></Link>
          <Link to="/user" className={`${iconColor} transition-colors p-2`}><User className="w-5 h-5" /></Link>
          <button className={`${iconColor} transition-colors p-2 flex items-center gap-1 text-sm`}><Globe className="w-5 h-5" /><span>中文</span></button>
          <button className={`lg:hidden ${iconColor} transition-colors p-2`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {NAV_ITEMS.map(item => (
              <Link key={item.path} to={item.path} className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
