import { Link } from 'react-router';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A2A32] text-white pt-16 pb-8 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FFB114] rounded-xl flex items-center justify-center font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>桃</div>
              <div>
                <h3 className="font-bold" style={{ fontFamily: '"Noto Serif SC", serif', fontSize: '1.125rem' }}>桃花潭景区</h3>
                <p className="text-white/50 text-xs">Taohuatan Scenic Area</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-4 max-w-sm">安徽省宣城市泾县桃花潭镇，一个承载千年诗意与徽州文化的山水胜地。</p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />安徽省宣城市泾县桃花潭镇</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" />0563-5880088</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" />info@taohuatan.com</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: '"Noto Serif SC", serif' }}>景区服务</h4>
            <ul className="text-white/50 text-sm space-y-2">
              <li><Link to="/scenic" className="hover:text-white transition-colors">景点介绍</Link></li>
              <li><Link to="/routes" className="hover:text-white transition-colors">路线预览</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">在线预约</Link></li>
              <li><Link to="/booking/tickets" className="hover:text-white transition-colors">门票预订</Link></li>
              <li><Link to="/booking/hotels" className="hover:text-white transition-colors">住宿预订</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: '"Noto Serif SC", serif' }}>游客中心</h4>
            <ul className="text-white/50 text-sm space-y-2">
              <li><Link to="/support/faq" className="hover:text-white transition-colors">常见问题</Link></li>
              <li><Link to="/support/transport" className="hover:text-white transition-colors">交通指南</Link></li>
              <li><Link to="/support/parking" className="hover:text-white transition-colors">停车信息</Link></li>
              <li><Link to="/support/service-center" className="hover:text-white transition-colors">游客服务</Link></li>
              <li><Link to="/support/announcements" className="hover:text-white transition-colors">景区公告</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: '"Noto Serif SC", serif' }}>法律信息</h4>
            <ul className="text-white/50 text-sm space-y-2">
              <li><Link to="/support/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/support/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              <li><Link to="/support/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link to="/support/terms" className="hover:text-white transition-colors">服务条款</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 桃花潭景区数字化展示与预约平台. All rights reserved.</p>
          <p>皖ICP备XXXXXXXX号-1</p>
        </div>
      </div>
    </footer>
  );
}
