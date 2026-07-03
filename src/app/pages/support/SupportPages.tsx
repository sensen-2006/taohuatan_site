import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Car, Bus, Train, ArrowRight, AlertCircle, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// About Us
export function AboutPage() {
  return (
    <div>
      <PageBanner image={IMAGES.lakeMountain} title="关于我们" subtitle="桃花潭景区数字化展示与预约平台" breadcrumbs={[{ label: '首页', path: '/' }, { label: '关于我们' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="rounded-2xl overflow-hidden h-72"><ImageWithFallback src={IMAGES.lakeMountain} alt="桃花潭" className="w-full h-full object-cover" /></div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>平台介绍</h2>
              <p className="text-gray-600 leading-relaxed mb-4">桃花潭景区数字化展示与预约平台是安徽省泾县文旅局主导建设的智慧旅游项目，旨在为游客提供一站式的景区信息查询、路线规划、在线预约和社区互动服务。</p>
              <p className="text-gray-600 leading-relaxed">平台涵盖桃花潭、查济古村、太平湖等核心景区，通过数字化手段展示徽州文化的独特魅力，让更多人了解并爱上这片土地。</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ num: '100万+', label: '年接待游客' }, { num: '15+', label: '核心景点' }, { num: '4.8', label: '平均评分' }].map(s => (
              <div key={s.label} className="text-center bg-gradient-to-br from-[#FFB114]/10 to-[#0077B3]/10 rounded-2xl p-8">
                <p className="text-4xl font-bold text-[#FFB114] mb-2">{s.num}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Us
export function ContactPage() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="联系我们" subtitle="我们随时为您提供帮助" breadcrumbs={[{ label: '首页', path: '/' }, { label: '联系我们' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>联系方式</h2>
            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, title: '地址', content: '安徽省宣城市泾县桃花潭镇' },
                { icon: <Phone className="w-5 h-5" />, title: '电话', content: '0563-5880088' },
                { icon: <Mail className="w-5 h-5" />, title: '邮箱', content: 'info@taohuatan.com' },
                { icon: <Clock className="w-5 h-5" />, title: '工作时间', content: '周一至周日 08:00-18:00' },
              ].map(c => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0077B3]/10 text-[#0077B3] flex items-center justify-center shrink-0">{c.icon}</div>
                  <div><p className="font-bold text-sm">{c.title}</p><p className="text-gray-500 text-sm">{c.content}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>在线留言</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="姓名" />
                <input className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="电话" />
              </div>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30" placeholder="邮箱" />
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30">
                <option>咨询类型</option><option>门票咨询</option><option>住宿咨询</option><option>投诉建议</option><option>其他</option>
              </select>
              <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB114]/30 resize-none" rows={5} placeholder="请输入您的留言..." />
              <Link to="/support/contact-success" className="block w-full bg-[#FFB114] hover:bg-[#e9a010] text-white text-center py-3 rounded-xl font-semibold transition-colors">提交留言</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Success
export function ContactSuccess() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-[500px] mx-auto text-center bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-green-500" /></div>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>提交成功！</h2>
        <p className="text-gray-500 mb-8">我们已收到您的留言，将在1-2个工作日内回复。</p>
        <Link to="/" className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-8 py-3 rounded-full font-semibold transition-colors">返回首页</Link>
      </div>
    </section>
  );
}

// Service Center
export function ServiceCenter() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="游客服务中心" subtitle="为您提供全方位的旅游服务" breadcrumbs={[{ label: '首页', path: '/' }, { label: '游客服务中心' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🎫', title: '票务服务', desc: '门票购买、退改签、团队票务' },
            { icon: '🗺️', title: '导览服务', desc: '景区地图、导游预约、讲解器租赁' },
            { icon: '🧳', title: '行李寄存', desc: '免费行李寄存服务' },
            { icon: '🏥', title: '医疗救助', desc: '紧急医疗服务、急救药品' },
            { icon: '♿', title: '无障碍服务', desc: '轮椅租借、无障碍通道' },
            { icon: '📸', title: '摄影服务', desc: '专业摄影师跟拍预约' },
            { icon: '🍽️', title: '餐饮推荐', desc: '景区周边餐厅推荐' },
            { icon: '🛒', title: '特产购物', desc: '正宗本地特产选购' },
            { icon: '📞', title: '投诉建议', desc: '服务质量反馈通道' },
          ].map(s => (
            <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-3xl">{s.icon}</span>
              <h4 className="font-bold mt-3 mb-1" style={{ fontFamily: '"Noto Serif SC", serif' }}>{s.title}</h4>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// FAQ
export function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: '桃花潭景区的开放时间是什么？', a: '桃花潭景区每日08:00-17:30开放，夏季延长至18:00。售票处关闭时间为闭园前1小时。', cat: '基本信息' },
    { q: '门票价格是多少？有优惠政策吗？', a: '成人票65元/人，学生票35元/人（凭有效学生证）。1.2米以下儿童和65岁以上老人免票。推荐购买双景联票（桃花潭+查济）108元更划算。', cat: '门票' },
    { q: '景区有停车场吗？收费标准如何？', a: '景区设有大型停车场，小型车15元/天，大型车30元/天。节假日建议提前到达确保车位。', cat: '交通' },
    { q: '如何到达桃花潭景区？', a: '可乘坐高铁至泾县站后转乘大巴或出租车（约40分钟），也可自驾经G50沪渝高速泾县出口下。', cat: '交通' },
    { q: '景区内有餐厅吗？', a: '景区内及周边有多家餐厅，提供正宗徽菜和地方特色小吃。推荐品尝臭鳜鱼、毛豆腐等特色菜品。', cat: '餐饮' },
    { q: '可以退票吗？退票规则是什么？', a: '使用前3天可全额退款，1-3天退款80%，使用前1天内退款50%，使用当天不可退款。', cat: '门票' },
    { q: '景区有无障碍设施吗？', a: '景区主要游览路线设有无障碍通道，游客服务中心提供免费轮椅租借服务。', cat: '服务' },
  ];
  return (
    <div>
      <PageBanner image={IMAGES.tea} title="常见问题" subtitle="快速找到你需要的答案" breadcrumbs={[{ label: '首页', path: '/' }, { label: '常见问题' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[800px] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-2 py-0.5 rounded-full">{faq.cat}</span>
                  <span className="font-medium text-sm">{faq.q}</span>
                </div>
                {openIdx === i ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5"><p className="text-gray-600 text-sm leading-relaxed pl-[68px]">{faq.a}</p></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Transport Guide
export function TransportPage() {
  return (
    <div>
      <PageBanner image={IMAGES.road} title="交通指南" subtitle="多种方式轻松抵达桃花潭" breadcrumbs={[{ label: '首页', path: '/' }, { label: '交通指南' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Train className="w-8 h-8" />, title: '高铁', color: 'from-[#0077B3] to-[#0EA5E9]', items: ['合肥南站 → 泾县站（约1.5小时）', '南京南站 → 泾县站（约2小时）', '上海虹桥站 → 泾县站（约3.5小时）', '泾县站 → 景区（大巴/出租约40分钟）'] },
            { icon: <Bus className="w-8 h-8" />, title: '大巴', color: 'from-[#39C668] to-[#34D399]', items: ['合肥汽车站 → 泾县（每日多班）', '南京汽车站 → 泾县', '宣城汽车站 → 泾县（约1小时）', '泾县 → 桃花潭镇（班车）'] },
            { icon: <Car className="w-8 h-8" />, title: '自驾', color: 'from-[#FFB114] to-[#F59E0B]', items: ['G50沪渝高速 → 泾县出口', '合肥方向：约3小时', '南京方向：约3.5小时', '上海方向：约5小时', '景区提供停车场'] },
          ].map(t => (
            <div key={t.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center mb-4`}>{t.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: '"Noto Serif SC", serif' }}>{t.title}</h3>
              <ul className="space-y-3">{t.items.map(item => <li key={item} className="text-sm text-gray-600 flex items-start gap-2"><span className="text-[#FFB114] mt-1">•</span>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Parking
export function ParkingPage() {
  return (
    <div>
      <PageBanner image={IMAGES.road} title="停车信息" subtitle="景区停车场分布及收费标准" breadcrumbs={[{ label: '首页', path: '/' }, { label: '停车信息' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: '桃花潭主停车场', spaces: 200, price: '小型车15元/天', distance: '距景区入口200m' },
              { name: '查济停车场', spaces: 150, price: '小型车10元/天', distance: '距古村入口100m' },
              { name: '太平湖停车场', spaces: 300, price: '小型车20元/天', distance: '距码头50m' },
              { name: '游客中心停车场', spaces: 100, price: '前30分钟免费', distance: '游客中心旁' },
            ].map(p => (
              <div key={p.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold mb-3" style={{ fontFamily: '"Noto Serif SC", serif' }}>{p.name}</h4>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between"><span>车位数</span><span className="font-medium text-gray-700">{p.spaces}个</span></div>
                  <div className="flex justify-between"><span>收费标准</span><span className="font-medium text-gray-700">{p.price}</span></div>
                  <div className="flex justify-between"><span>距离</span><span className="font-medium text-gray-700">{p.distance}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Announcements
export function AnnouncementsPage() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="景区公告" subtitle="了解最新景区动态" breadcrumbs={[{ label: '首页', path: '/' }, { label: '景区公告' }]} />
      <section className="py-16 px-8">
        <div className="max-w-[800px] mx-auto space-y-4">
          {[
            { title: '关于2026年春季开放时间调整的通知', date: '2026-04-10', tag: '通知', important: true },
            { title: '桃花潭景区五一假期接待安排', date: '2026-04-08', tag: '公告', important: true },
            { title: '查济古村修缮工程进展公告', date: '2026-04-05', tag: '公告', important: false },
            { title: '太平湖游船线路优化通知', date: '2026-04-01', tag: '通知', important: false },
            { title: '景区电子门票系统升级公告', date: '2026-03-28', tag: '系统', important: false },
          ].map((a, i) => (
            <Link key={i} to={`/support/announcement/${i + 1}`} className="block bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {a.important && <span className="text-red-500 text-xs mt-1">🔴</span>}
                  <div>
                    <h4 className="font-bold text-sm group-hover:text-[#0077B3] transition-colors">{a.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-2 py-0.5 rounded-full">{a.tag}</span>
                      <span className="text-gray-400 text-xs">{a.date}</span>
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-300 rotate-[-90deg]" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Announcement Detail
export function AnnouncementDetail() {
  return (
    <div>
      <PageBanner image={IMAGES.garden} title="景区公告详情" breadcrumbs={[{ label: '首页', path: '/' }, { label: '景区公告', path: '/support/announcements' }, { label: '公告详情' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs bg-[#0077B3]/10 text-[#0077B3] px-2 py-0.5 rounded-full">通知</span>
            <span className="text-gray-400 text-xs">2026-04-10</span>
          </div>
          <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>关于2026年春季开放时间调整的通知</h1>
          <div className="prose max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>尊敬的游客朋友们：</p>
            <p>随着春季到来，为更好地服务广大游客，桃花潭景区自2026年4月15日起调整开放时间如下：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>景区开放时间：07:30 - 18:00（原08:00 - 17:30）</li>
              <li>售票时间：07:30 - 17:00</li>
              <li>游船运营时间：08:00 - 17:30</li>
            </ul>
            <p>请各位游客合理安排出行时间。如有疑问，请拨打服务热线：0563-5880088。</p>
            <p className="text-right">桃花潭景区管理委员会<br />2026年4月10日</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Privacy Policy
export function PrivacyPolicyPage() {
  return (
    <div>
      <PageBanner image={IMAGES.calligraphy} title="隐私政策" breadcrumbs={[{ label: '首页', path: '/' }, { label: '隐私政策' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-8 border border-gray-100">
          <p className="text-gray-400 text-sm mb-6">最后更新：2026年4月1日</p>
          {[
            { title: '一、信息收集', content: '我们在您使用平台服务时，可能会收集您主动提供的个人信息，包括但不限于姓名、手机号、身份证号等，用于完成预约和订单服务。' },
            { title: '二、信息使用', content: '我们仅在提供服务所必需的范围内使用您的个人信息，包括完成预约订单、发送通知消息、改善服务质量等。' },
            { title: '三、信息保护', content: '我们采用行业标准的安全措施保护您的个人信息，防止未经授权的访问、使用或披露。' },
            { title: '四、信息共享', content: '未经您的同意，我们不会向任何第三方共享您的个人信息，法律法规要求除外。' },
            { title: '五、联系方式', content: '如您对本隐私政策有任何疑问，请联系我们：info@taohuatan.com' },
          ].map(s => (
            <div key={s.title} className="mb-6">
              <h3 className="font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Terms of Service
export function TermsPage() {
  return (
    <div>
      <PageBanner image={IMAGES.calligraphy} title="服务条款" breadcrumbs={[{ label: '首页', path: '/' }, { label: '服务条款' }]} />
      <section className="py-12 px-8">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-8 border border-gray-100">
          <p className="text-gray-400 text-sm mb-6">最后更新：2026年4月1日</p>
          {[
            { title: '一、服务说明', content: '本平台为桃花潭景区官方数字化展示与预约平台，提供景区信息展示、路线推荐、在线预约、社区互动等服务。' },
            { title: '二、用户责任', content: '用户应当提供真实准确的个人信息，不得利用本平台从事任何违法活动，不得发布虚假信息。' },
            { title: '三、预约规则', content: '通过本平台完成的预约订单受相关退改签政策约束，具体规则以下单时页面显示为准。' },
            { title: '四、知识产权', content: '本平台的所有内容（包括文字、图片、设计等）均受知识产权法保护，未经授权不得使用。' },
            { title: '五、免责声明', content: '因不可抗力导致的服务中断或延迟，本平台不承担责任。因天气原因导致景区临时关闭，已购门票可按退改签政策处理。' },
          ].map(s => (
            <div key={s.title} className="mb-6">
              <h3 className="font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// 404 Page
export function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-8">
      <div className="text-center">
        <div className="text-8xl mb-6">🏞️</div>
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Noto Serif SC", serif' }}>页面未找到</h2>
        <p className="text-gray-500 mb-8">抱歉，您要找的页面可能已经移动或不存在。<br />不如回到首页，继续探索桃花潭之美？</p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="bg-[#FFB114] hover:bg-[#e9a010] text-white px-8 py-3 rounded-full font-semibold transition-colors">返回首页</Link>
          <Link to="/scenic" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors">浏览景点</Link>
        </div>
      </div>
    </section>
  );
}
