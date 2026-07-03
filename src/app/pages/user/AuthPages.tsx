import { Link } from 'react-router';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '../../components/shared/images';

export function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.lakeMountain})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A32]/80 to-[#0077B3]/60" />
        <div className="relative h-full flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#FFB114] rounded-xl flex items-center justify-center text-white font-bold text-xl" style={{ fontFamily: '"Noto Serif SC", serif' }}>桃</div>
            <div><h1 className="text-white text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>桃花潭景区</h1><p className="text-white/50 text-xs">数字化展示与预约平台</p></div>
          </div>
          <h2 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>探索·桃花潭之美</h2>
          <p className="text-white/60 text-lg">登录账户，开启你的诗意之旅</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-[#F6F8F8]">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>欢迎回来</h2>
          <p className="text-gray-400 mb-8">登录你的账户继续探索</p>
          <div className="space-y-4">
            <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" /><input className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="手机号 / 邮箱" /></div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input type={showPwd ? 'text' : 'password'} className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="密码" />
              <button onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">{showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-500"><input type="checkbox" className="rounded" />记住我</label>
              <a href="#" className="text-[#0077B3] hover:underline">忘记密码？</a>
            </div>
            <Link to="/user" className="block w-full bg-[#FFB114] hover:bg-[#e9a010] text-white text-center font-semibold py-3.5 rounded-xl transition-colors">登 录</Link>
            <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div><div className="relative flex justify-center"><span className="bg-[#F6F8F8] px-4 text-gray-400 text-xs">其他登录方式</span></div></div>
            <div className="grid grid-cols-3 gap-3">
              {['💚 微信', '💙 支付宝', '📱 短信'].map(m => <button key={m} className="bg-white border border-gray-200 rounded-xl py-3 text-sm hover:border-gray-300 transition-colors">{m}</button>)}
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">还没有账户？<Link to="/user/register" className="text-[#0077B3] font-medium hover:underline">立即注册</Link></p>
        </div>
      </div>
    </div>
  );
}

export function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.bridgeVillage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A32]/80 to-[#0077B3]/60" />
        <div className="relative h-full flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#FFB114] rounded-xl flex items-center justify-center text-white font-bold text-xl" style={{ fontFamily: '"Noto Serif SC", serif' }}>桃</div>
            <div><h1 className="text-white text-xl font-bold" style={{ fontFamily: '"Noto Serif SC", serif' }}>桃花潭景区</h1><p className="text-white/50 text-xs">数字化展示与预约平台</p></div>
          </div>
          <h2 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>加入我们</h2>
          <p className="text-white/60 text-lg">注册账户，享受更多专属服务</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-[#F6F8F8]">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>创建账户</h2>
          <p className="text-gray-400 mb-8">注册后即可享受预约、社区等全部功能</p>
          <div className="space-y-4">
            <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" /><input className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="昵称" /></div>
            <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" /><input className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="手机号" /></div>
            <div className="flex gap-3">
              <input className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="验证码" />
              <button className="bg-[#0077B3] text-white px-6 rounded-xl text-sm font-medium hover:bg-[#006299] transition-colors whitespace-nowrap">获取验证码</button>
            </div>
            <div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" /><input type="password" className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="设置密码（至少6位）" /></div>
            <label className="flex items-start gap-2 text-xs text-gray-400"><input type="checkbox" className="rounded mt-0.5" /><span>我已阅读并同意<Link to="/support/terms" className="text-[#0077B3]">服务条款</Link>和<Link to="/support/privacy" className="text-[#0077B3]">隐私政策</Link></span></label>
            <Link to="/user" className="block w-full bg-[#FFB114] hover:bg-[#e9a010] text-white text-center font-semibold py-3.5 rounded-xl transition-colors">注 册</Link>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">已有账户？<Link to="/user/login" className="text-[#0077B3] font-medium hover:underline">立即登录</Link></p>
        </div>
      </div>
    </div>
  );
}
