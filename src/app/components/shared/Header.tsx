import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Globe, Menu, Search, User, X } from 'lucide-react';
import { toast } from 'sonner';

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

  const headerClass = transparent
    ? 'fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-black/60 to-black/35 backdrop-blur-sm'
    : 'sticky top-0 z-50 border-b border-[#E9ECEB] bg-white/88 backdrop-blur-xl';

  const navText = transparent
    ? 'text-white/80 hover:text-white'
    : 'text-[#516268] hover:text-[#24343B]';

  const iconText = transparent
    ? 'text-white/70 hover:text-white'
    : 'text-[#617178] hover:text-[#24343B]';

  return (
    <header className={headerClass}>
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9932C] text-lg font-bold text-white">
            桃
          </div>
          <div>
            <h1 className={`text-[1.125rem] font-bold ${transparent ? 'text-white' : 'text-[#24343B]'}`}>
              桃花潭景区
            </h1>
            <p className={`text-xs ${transparent ? 'text-white/60' : 'text-[#8B989D]'}`}>
              数字化展示与预约平台
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path));

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  active ? 'text-[#C9932C]' : navText
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/search?q=桃花潭" className={`p-2 transition-colors ${iconText}`}>
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/user" className={`p-2 transition-colors ${iconText}`}>
            <User className="h-5 w-5" />
          </Link>
          <button
            type="button"
            className={`flex items-center gap-1 p-2 text-sm transition-colors ${iconText}`}
            onClick={() =>
              toast.message('站内当前默认使用简体中文，语言切换保留为演示入口。')
            }
          >
            <Globe className="h-5 w-5" />
            <span>中文</span>
          </button>
          <button
            type="button"
            className={`p-2 transition-colors lg:hidden ${iconText}`}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#ECEFEE] bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2 p-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#41535F] hover:bg-[#F5F6F5]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/search?q=桃花潭"
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#41535F] hover:bg-[#F5F6F5]"
              onClick={() => setMobileOpen(false)}
            >
              全站搜索
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
