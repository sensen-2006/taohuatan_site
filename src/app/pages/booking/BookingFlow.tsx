import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ChevronRight, CheckCircle, Clock, CreditCard, Shield, ArrowLeft, FileText, RefreshCw } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';

// Order Confirm Page
export function OrderConfirm() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="确认订单" subtitle="请核实订单信息并填写出行人资料" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '确认订单' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[900px] mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {['选择产品', '确认订单', '在线支付', '预约成功'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= 1 ? 'bg-[#FFB114] text-white' : 'bg-gray-200 text-gray-400'}`}>{i + 1}</div>
                <span className={`text-sm ${i <= 1 ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{step}</span>
                {i < 3 && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>订单信息</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">产品名称</span><span className="font-medium">桃花潭+查济双景联票</span></div>
              <div className="flex justify-between"><span className="text-gray-400">游览日期</span><span className="font-medium">2026-04-15</span></div>
              <div className="flex justify-between"><span className="text-gray-400">成人票 x2</span><span className="font-medium">¥216</span></div>
              <div className="flex justify-between"><span className="text-gray-400">学生票 x1</span><span className="font-medium">¥58</span></div>
              <div className="border-t border-gray-100 pt-3 flex justify-between"><span className="font-bold">合计</span><span className="text-2xl font-bold text-[#FFB114]">¥274</span></div>
            </div>
          </div>

          {/* Traveler Info */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>出行人信息</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-sm text-gray-500 mb-1 block">姓名</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="请输入姓名" /></div>
              <div><label className="text-sm text-gray-500 mb-1 block">手机号</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="请输入手机号" /></div>
              <div><label className="text-sm text-gray-500 mb-1 block">身份证号</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="请输入身份证号" /></div>
              <div><label className="text-sm text-gray-500 mb-1 block">邮箱（选填）</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="用于接收订单确认" /></div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center">
            <Link to="/booking" className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm"><ArrowLeft className="w-4 h-4" />返回</Link>
            <Link to="/booking/payment" className="bg-[#FFB114] hover:bg-[#e9a010] text-white font-semibold px-10 py-3 rounded-full transition-colors">提交订单</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Payment Page
export function PaymentPage() {
  const [method, setMethod] = useState('wechat');
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="在线支付" subtitle="请选择支付方式完成付款" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '在线支付' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[600px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            {['选择产品', '确认订单', '在线支付', '预约成功'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= 2 ? 'bg-[#FFB114] text-white' : 'bg-gray-200 text-gray-400'}`}>{i + 1}</div>
                <span className={`text-sm hidden md:block ${i <= 2 ? 'font-medium' : 'text-gray-400'}`}>{step}</span>
                {i < 3 && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8 text-center">
            <p className="text-gray-400 text-sm mb-2">订单金额</p>
            <p className="text-4xl font-bold text-[#FFB114] mb-2">¥274.00</p>
            <div className="flex items-center justify-center gap-2 text-red-500 text-sm"><Clock className="w-4 h-4" />请在 29:58 内完成支付</div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>选择支付方式</h3>
            <div className="space-y-3">
              {[{ id: 'wechat', name: '微信支付', icon: '💚' }, { id: 'alipay', name: '支付宝', icon: '💙' }, { id: 'unionpay', name: '银联支付', icon: '💳' }].map(m => (
                <button key={m.id} onClick={() => setMethod(m.id)} className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${method === m.id ? 'border-[#FFB114] bg-[#FFB114]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="text-2xl">{m.icon}</span>
                  <span className="font-medium">{m.name}</span>
                  {method === m.id && <CheckCircle className="w-5 h-5 text-[#FFB114] ml-auto" />}
                </button>
              ))}
            </div>
          </div>

          <Link to="/booking/success" className="block w-full bg-[#FFB114] hover:bg-[#e9a010] text-white text-center font-semibold py-4 rounded-full transition-colors text-lg">确认支付 ¥274.00</Link>
          <p className="text-center text-gray-400 text-xs mt-4 flex items-center justify-center gap-1"><Shield className="w-3.5 h-3.5" />安全支付，信息加密保护</p>
        </div>
      </section>
    </div>
  );
}

// Success Page
export function BookingSuccess() {
  return (
    <div>
      <section className="py-20 px-8">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            {['选择产品', '确认订单', '在线支付', '预约成功'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-[#FFB114] text-white">{i + 1}</div>
                <span className="text-sm font-medium hidden md:block">{step}</span>
                {i < 3 && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>预约成功！</h2>
            <p className="text-gray-500 mb-6">订单号：TH20260415001</p>

            <div className="bg-gray-50 rounded-xl p-6 text-left mb-8 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">产品</span><span>桃花潭+查济双景联票</span></div>
              <div className="flex justify-between"><span className="text-gray-400">日期</span><span>2026-04-15</span></div>
              <div className="flex justify-between"><span className="text-gray-400">数量</span><span>成人x2 学生x1</span></div>
              <div className="flex justify-between"><span className="text-gray-400">金额</span><span className="font-bold text-[#FFB114]">¥274.00</span></div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 mb-8 text-left">
              <p className="text-sm text-amber-700 font-medium mb-2">🎉 温馨提示</p>
              <ul className="text-xs text-amber-600 space-y-1">
                <li>• 电子门票已发送至您的手机</li>
                <li>• 入园时请出示手机二维码</li>
                <li>• 如需退改，请提前一天申请</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <Link to="/user/orders" className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-8 py-3 rounded-full font-semibold transition-colors">查看订单</Link>
              <Link to="/" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors">返回首页</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Refund Page
export function RefundPage() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="退改签" subtitle="订单退票、改签服务" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '退改签' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto">
          {/* Search */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>查询订单</h3>
            <div className="flex gap-4">
              <input className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="请输入订单号或手机号" />
              <button className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-6 py-3 rounded-xl font-medium transition-colors">查询</button>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>退改规则</h3>
            <div className="space-y-4">
              {[
                { time: '使用前3天', refund: '全额退款', change: '免费改签' },
                { time: '使用前1-3天', refund: '退款80%', change: '收取10%手续费' },
                { time: '使用前1天内', refund: '退款50%', change: '收取20%手续费' },
                { time: '使用当天', refund: '不可退款', change: '不可改签' },
              ].map(rule => (
                <div key={rule.time} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 text-sm">
                  <span className="font-medium">{rule.time}</span>
                  <span className="text-green-600">{rule.refund}</span>
                  <span className="text-blue-600">{rule.change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Order */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>订单 TH20260415001</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between"><span className="text-gray-400">产品</span><span>桃花潭+查济双景联票</span></div>
              <div className="flex justify-between"><span className="text-gray-400">日期</span><span>2026-04-15</span></div>
              <div className="flex justify-between"><span className="text-gray-400">金额</span><span className="font-bold">¥274.00</span></div>
              <div className="flex justify-between"><span className="text-gray-400">状态</span><span className="text-green-600">已支付</span></div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"><RefreshCw className="w-4 h-4" />申请退票</button>
              <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"><FileText className="w-4 h-4" />申请改签</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Invoice Page
export function InvoicePage() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="发票信息" subtitle="填写发票开具信息" breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约', path: '/booking' }, { label: '发票信息' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[600px] mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>发票信息</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">发票类型</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30">
                <option>电子普通发票</option><option>增值税专用发票</option>
              </select>
            </div>
            <div><label className="text-sm text-gray-500 mb-1 block">发票抬头</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="个人或公司名称" /></div>
            <div><label className="text-sm text-gray-500 mb-1 block">税号（企业必填）</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="统一社会信用代码" /></div>
            <div><label className="text-sm text-gray-500 mb-1 block">接收邮箱</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="用于接收电子发票" /></div>
          </div>
          <button className="w-full mt-6 bg-[#FFB114] hover:bg-[#e9a010] text-white py-3 rounded-full font-semibold transition-colors">提交发票申请</button>
        </div>
      </section>
    </div>
  );
}
