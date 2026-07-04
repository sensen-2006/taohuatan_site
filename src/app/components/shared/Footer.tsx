import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C2B31] px-8 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9932C] font-bold">
                桃
              </div>
              <div>
                <h3 className="text-lg font-bold">桃花潭景区数字化展示与预约平台</h3>
                <p className="text-xs text-white/50">Taohuatan Cultural Tourism Demo Platform</p>
              </div>
            </div>
            <p className="mb-4 max-w-md text-sm leading-7 text-white/65">
              以安徽泾县桃花潭、查济、太平湖为核心，面向课程答辩、项目展示与前端部署的文旅数字化演示平台。
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                安徽省宣城市泾县桃花潭镇
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                0563-5880088
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                service@taohuatan.cn
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">平台导览</h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li><Link to="/scenic" className="hover:text-white">景点介绍</Link></li>
              <li><Link to="/routes" className="hover:text-white">路线预览</Link></li>
              <li><Link to="/booking" className="hover:text-white">在线预约</Link></li>
              <li><Link to="/community" className="hover:text-white">社区互动</Link></li>
              <li><Link to="/user" className="hover:text-white">个人中心</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">游客服务</h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li><Link to="/support/faq" className="hover:text-white">常见问题</Link></li>
              <li><Link to="/support/transport" className="hover:text-white">交通指南</Link></li>
              <li><Link to="/support/parking" className="hover:text-white">停车信息</Link></li>
              <li><Link to="/support/service-center" className="hover:text-white">服务中心</Link></li>
              <li><Link to="/support/announcements" className="hover:text-white">景区公告</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">平台说明</h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li><Link to="/support/about" className="hover:text-white">关于我们</Link></li>
              <li><Link to="/support/contact" className="hover:text-white">联系我们</Link></li>
              <li><Link to="/support/privacy" className="hover:text-white">隐私政策</Link></li>
              <li><Link to="/support/terms" className="hover:text-white">服务条款</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 桃花潭景区数字化展示与预约平台。当前版本为前端课程演示版。</p>
          <p>备案与支付、票务、登录能力均为展示说明，不代表真实商用系统。</p>
        </div>
      </div>
    </footer>
  );
}
