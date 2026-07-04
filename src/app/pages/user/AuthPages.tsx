import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react';
import { toast } from 'sonner';
import { IMAGES } from '../../components/shared/images';
import { useDemoApp } from '../../providers/DemoAppProvider';

const demoFallbackPhone = '13800138000';

function BrandPanel({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="relative hidden lg:block lg:w-1/2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,34,38,0.86),rgba(42,77,84,0.68),rgba(201,147,44,0.34))]" />
      <div className="relative flex h-full flex-col justify-center px-16 text-white">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9932C] text-xl font-bold text-white">
            桃
          </div>
          <div>
            <h1 className="text-xl font-bold">桃花潭景区数字化展示与预约平台</h1>
            <p className="text-xs text-white/55">Taohuatan Cultural Tourism Demo Platform</p>
          </div>
        </div>
        <h2 className="mb-4 text-4xl font-bold">{title}</h2>
        <p className="max-w-xl text-lg leading-8 text-white/72">{subtitle}</p>
      </div>
    </div>
  );
}

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useDemoApp();
  const [showPwd, setShowPwd] = useState(false);
  const [account, setAccount] = useState('');

  const handleLogin = () => {
    login(account.trim());
    navigate('/user');
  };

  return (
    <div className="flex min-h-screen">
      <BrandPanel
        title="回到桃花潭的山水叙事里"
        subtitle="登录后可继续演示预约、订单、收藏、发票与消息中心等完整前端闭环，当前不接真实后端。"
        image={IMAGES.lakeMountain}
      />

      <div className="flex flex-1 items-center justify-center bg-[#F6F8F8] px-8 py-12">
        <div className="w-full max-w-md rounded-[30px] border border-white/70 bg-white/92 p-8 shadow-sm">
          <h2 className="mb-2 text-3xl font-bold text-[#24343B]">欢迎回来</h2>
          <p className="mb-8 text-sm leading-7 text-[#6A7A80]">
            当前为课程答辩演示登录页，点击登录后将直接进入个人中心。
          </p>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
              <input
                value={account}
                onChange={(event) => setAccount(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                placeholder="手机号或邮箱"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
              <input
                type={showPwd ? 'text' : 'password'}
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                placeholder="密码"
              />
              <button
                type="button"
                onClick={() => setShowPwd((current) => !current)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#617178]">
                <input type="checkbox" className="rounded" />
                记住我
              </label>
              <button
                type="button"
                className="text-[#486B72] hover:underline"
                onClick={() =>
                  toast.message('忘记密码当前保留为演示提示，正式版可接入短信或邮箱找回流程。')
                }
              >
                忘记密码？
              </button>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="block w-full rounded-xl bg-[#C9932C] py-3.5 text-center font-semibold text-white transition-colors hover:bg-[#b58323]"
            >
              登录并进入个人中心
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs text-gray-400">其他演示入口</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['微信登录', '支付宝登录', '短信登录'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toast.message(`${item}当前为演示按钮，正式版可接入真实授权。`)}
                  className="rounded-xl border border-gray-200 bg-white py-3 text-sm transition-colors hover:border-gray-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            还没有账号？
            <Link to="/user/register" className="font-medium text-[#486B72] hover:underline">
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useDemoApp();
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    register(nickname.trim() || '旅行者小棠', phone.trim() || demoFallbackPhone);
    navigate('/user');
  };

  return (
    <div className="flex min-h-screen">
      <BrandPanel
        title="创建你的桃花潭演示账号"
        subtitle="注册成功后会直接进入个人中心，用于展示预约订单、收藏内容、消息提醒与设置页面。"
        image={IMAGES.bridgeVillage}
      />

      <div className="flex flex-1 items-center justify-center bg-[#F6F8F8] px-8 py-12">
        <div className="w-full max-w-md rounded-[30px] border border-white/70 bg-white/92 p-8 shadow-sm">
          <h2 className="mb-2 text-3xl font-bold text-[#24343B]">创建账号</h2>
          <p className="mb-8 text-sm leading-7 text-[#6A7A80]">
            当前为前端演示注册页，不接真实短信与用户系统。
          </p>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
              <input
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                placeholder="昵称"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                placeholder="手机号"
              />
            </div>

            <div className="flex gap-3">
              <input
                className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                placeholder="验证码"
              />
              <button
                type="button"
                onClick={() => toast.message('验证码发送当前保留为演示提示，正式版可接入短信服务。')}
                className="whitespace-nowrap rounded-xl bg-[#486B72] px-6 text-sm font-medium text-white transition-colors hover:bg-[#3e5d63]"
              >
                获取验证码
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
              <input
                type="password"
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                placeholder="设置密码（演示）"
              />
            </div>

            <label className="flex items-start gap-2 text-xs leading-6 text-gray-400">
              <input type="checkbox" className="mt-1 rounded" />
              <span>
                我已阅读并同意
                <Link to="/support/terms" className="text-[#486B72]">
                  服务条款
                </Link>
                与
                <Link to="/support/privacy" className="text-[#486B72]">
                  隐私政策
                </Link>
              </span>
            </label>

            <button
              type="button"
              onClick={handleRegister}
              className="block w-full rounded-xl bg-[#C9932C] py-3.5 text-center font-semibold text-white transition-colors hover:bg-[#b58323]"
            >
              注册并进入个人中心
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            已有账号？
            <Link to="/user/login" className="font-medium text-[#486B72] hover:underline">
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
