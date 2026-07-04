import { useState } from 'react';
import { Link, useParams } from 'react-router';
import {
  Bus,
  Car,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Mail,
  MapPin,
  Phone,
  Train,
} from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { announcementData, announcementMap } from '../../data/support';
import { ContentNotFound } from '../../components/shared/ContentNotFound';

function FaqItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[22px] border border-gray-100 bg-white p-5 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-bold text-[#24343B]">{title}</span>
        {open ? <ChevronUp className="h-4 w-4 text-[#8B989D]" /> : <ChevronDown className="h-4 w-4 text-[#8B989D]" />}
      </button>
      {open ? <p className="mt-4 text-sm leading-7 text-[#52636A]">{content}</p> : null}
    </div>
  );
}

export function AboutPage() {
  return (
    <div>
      <PageBanner
        image={IMAGES.lakeMountain}
        title="关于我们"
        subtitle="桃花潭景区数字化展示与预约平台项目说明"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '关于我们' }]}
      />
      <section className="px-8 py-16">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="h-72 overflow-hidden rounded-[28px]">
              <ImageWithFallback
                src={IMAGES.lakeMountain}
                alt="桃花潭平台视觉图"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#24343B]">平台定位</h2>
              <p className="mt-4 text-sm leading-8 text-[#52636A]">
                本项目围绕安徽泾县桃花潭、查济古村、太平湖等文旅资源展开，目标是完成一个可展示、可答辩、可部署的前端文旅数字平台。
              </p>
              <p className="mt-4 text-sm leading-8 text-[#52636A]">
                当前版本重点展示景点内容、路线规划、预约闭环、社区互动和个人中心等能力。登录、支付、订单、社区发布均为 mock 演示。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { num: '4 大', label: '核心业务板块' },
              { num: '20+', label: '可点击演示页面' },
              { num: '1 条', label: '完整预约闭环主线' },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] bg-gradient-to-br from-[#F7F2E8] to-[#EEF3F1] p-8 text-center">
                <p className="text-4xl font-bold text-[#C9932C]">{item.num}</p>
                <p className="mt-2 text-sm text-[#617178]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="联系我们"
        subtitle="当前为前端演示版联系页，表单提交后进入演示成功反馈页面。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '联系我们' }]}
      />
      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#24343B]">联系信息</h2>
            <div className="space-y-6">
              {[
                { icon: <MapPin className="h-5 w-5" />, title: '联系地址', content: '安徽省宣城市泾县桃花潭镇' },
                { icon: <Phone className="h-5 w-5" />, title: '服务热线', content: '0563-5880088' },
                { icon: <Mail className="h-5 w-5" />, title: '联系邮箱', content: 'service@taohuatan.cn' },
                { icon: <Clock className="h-5 w-5" />, title: '服务时间', content: '周一至周日 08:00 - 18:00' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F1F2] text-[#486B72]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#24343B]">{item.title}</p>
                    <p className="text-sm text-[#5D6C72]">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-[#24343B]">在线留言</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25" placeholder="姓名" />
                <input className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25" placeholder="电话" />
              </div>
              <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25" placeholder="邮箱" />
              <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25">
                <option>咨询类型</option>
                <option>景区咨询</option>
                <option>预约咨询</option>
                <option>投诉建议</option>
                <option>其他事项</option>
              </select>
              <textarea className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25" rows={5} placeholder="请输入留言内容" />
              <Link to="/support/contact-success" className="block rounded-xl bg-[#C9932C] py-3 text-center font-semibold text-white hover:bg-[#b58323]">
                提交留言
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ContactSuccess() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-[500px] rounded-[32px] border border-gray-100 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-[#24343B]">提交成功</h2>
        <p className="mt-3 text-sm leading-7 text-[#617178]">
          我们已经收到你的留言。当前为前端演示版本，页面会展示提交成功状态，但不会接入真实工单系统。
        </p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-[#C9932C] px-8 py-3 font-semibold text-white hover:bg-[#b58323]">
          返回首页
        </Link>
      </div>
    </section>
  );
}

export function ServiceCenter() {
  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="服务中心"
        subtitle="展示景区票务、交通、讲解、停车、售后与出行帮助等支撑能力。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '服务中心' }]}
      />
      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: '常见问题', desc: '快速查看答辩中常被问到的预约、退改和使用规则。', link: '/support/faq' },
            { title: '交通指南', desc: '从高铁、自驾和大巴三个方向说明到达方式。', link: '/support/transport' },
            { title: '停车说明', desc: '查看景区周边停车与接驳安排。', link: '/support/parking' },
            { title: '景区公告', desc: '展示平台的通知触达与信息发布能力。', link: '/support/announcements' },
            { title: '隐私政策', desc: '说明当前项目为前端 mock 演示版。', link: '/support/privacy' },
            { title: '服务条款', desc: '说明平台定位、演示边界与后续扩展方向。', link: '/support/terms' },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#24343B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#52636A]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function FAQPage() {
  const faqList = [
    {
      title: '当前平台可以真实下单吗？',
      content: '当前版本为前端演示版，登录、支付、订单、发票与社区发布均为 mock 演示，不接真实后端。',
    },
    {
      title: '刷新子页面会不会 404？',
      content: '项目已经补充前端路由回退配置，Vercel 部署后刷新景点、路线、社区和用户中心子页面都能回退到 index.html。',
    },
    {
      title: '预约流程是否完整？',
      content: '可以从门票预约进入，依次演示订单确认、在线支付、预约成功、我的订单、发票申请和退改签。',
    },
  ];

  return (
    <div>
      <PageBanner
        image={IMAGES.calligraphy}
        title="常见问题"
        subtitle="把老师最容易问到的问题预先整理到支撑页面里。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '常见问题' }]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[860px] space-y-4">
          {faqList.map((item) => (
            <FaqItem key={item.title} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function TransportPage() {
  return (
    <div>
      <PageBanner
        image={IMAGES.lakeMountain}
        title="交通指南"
        subtitle="适合答辩时展示平台对游客出行前决策的支撑能力。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '交通指南' }]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: <Train className="h-6 w-6" />, title: '高铁出行', desc: '可先到泾县或黄山周边站点，再转乘景区接驳或网约车。' },
            { icon: <Car className="h-6 w-6" />, title: '自驾前往', desc: '适合串联桃花潭、查济、太平湖，多景点转场更灵活。' },
            { icon: <Bus className="h-6 w-6" />, title: '大巴接驳', desc: '节假日可配合景区班车与团队接驳方案做演示说明。' },
          ].map((item) => (
            <div key={item.title} className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F1F2] text-[#486B72]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#24343B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#52636A]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ParkingPage() {
  return (
    <div>
      <PageBanner
        image={IMAGES.bridgeVillage}
        title="停车说明"
        subtitle="展示停车、接驳与高峰期分流提示，补齐游客服务信息。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '停车说明' }]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[920px] rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
          <div className="space-y-4 text-sm leading-8 text-[#52636A]">
            <p>1. 桃花潭主入口设有游客停车区，适合自驾游客集中停放。</p>
            <p>2. 查济古村周边建议使用景区外围停车点，再步行或接驳进入古村。</p>
            <p>3. 假期高峰时段建议提前完成在线预约，并尽量在上午错峰到达。</p>
            <p>4. 当前为前端演示版，停车余位与导航路径均为说明性内容。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AnnouncementsPage() {
  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="景区公告"
        subtitle="通过公告列表和详情页，展示平台的信息发布与通知触达能力。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '景区公告' }]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1080px] space-y-4">
          {announcementData.map((announcement) => (
            <Link
              key={announcement.id}
              to={`/support/announcement/${announcement.id}`}
              className="block rounded-[22px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-[#E8F1F2] px-2 py-1 text-xs text-[#486B72]">
                      {announcement.category}
                    </span>
                    {announcement.important ? (
                      <span className="rounded-full bg-red-50 px-2 py-1 text-xs text-red-500">
                        重要
                      </span>
                    ) : null}
                  </div>
                  <h4 className="font-bold text-[#24343B]">{announcement.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-[#5D6C72]">{announcement.summary}</p>
                </div>
                <span className="whitespace-nowrap text-xs text-[#8B989D]">{announcement.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function AnnouncementDetail() {
  const { id } = useParams();
  const announcement = id ? announcementMap[id] : null;

  if (!announcement) {
    return (
      <ContentNotFound
        title="公告不存在"
        description="你访问的公告详情未找到，可返回公告列表查看已整理好的系统通知。"
        backTo="/support/announcements"
        backLabel="返回公告列表"
      />
    );
  }

  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title={announcement.title}
        subtitle={announcement.summary}
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '景区公告', path: '/support/announcements' },
          { label: '公告详情' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[820px] rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-[#E8F1F2] px-2 py-1 text-xs text-[#486B72]">
              {announcement.category}
            </span>
            <span className="text-xs text-[#8B989D]">{announcement.date}</span>
          </div>
          <h1 className="mb-6 text-2xl font-bold text-[#24343B]">{announcement.title}</h1>
          <div className="space-y-4 text-sm leading-8 text-[#52636A]">
            <p>{announcement.introduction}</p>
            {announcement.bullets ? (
              <ul className="list-disc space-y-2 pl-5">
                {announcement.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {announcement.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="pt-4 text-right">
              {announcement.issuer}
              <br />
              {announcement.date}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PrivacyPolicyPage() {
  const sections = [
    { title: '一、信息收集', content: '当前演示版仅在浏览器本地保存部分预约草稿、订单和登录状态，不会向真实后端上传个人信息。' },
    { title: '二、信息用途', content: '这些演示数据仅用于前端页面展示、订单闭环演示与用户中心体验。' },
    { title: '三、信息共享', content: '当前项目不接真实第三方服务，不存在对外共享真实用户数据的流程。' },
    { title: '四、演示说明', content: '登录、支付、订单、发票、社区发布均为 mock 演示，不构成真实生产承诺。' },
    { title: '五、联系反馈', content: '如需课程演示说明或项目交付说明，可通过联系页面查看演示联系方式。' },
  ];

  return (
    <div>
      <PageBanner
        image={IMAGES.calligraphy}
        title="隐私政策"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '隐私政策' }]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[820px] rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
          <p className="mb-6 text-sm text-[#8B989D]">最后更新：2026 年 7 月 3 日</p>
          {sections.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="mb-2 font-bold text-[#24343B]">{section.title}</h3>
              <p className="text-sm leading-8 text-[#52636A]">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function TermsPage() {
  const sections = [
    { title: '一、平台说明', content: '本项目为“桃花潭景区数字化展示与预约平台”前端演示版，用于课程答辩、项目展示与部署演示。' },
    { title: '二、演示边界', content: '登录、支付、订单、社区发布、搜索等能力均为 mock 演示，不代表真实商用系统已经接入完整后端。' },
    { title: '三、内容使用', content: '站内文案、页面与结构主要用于展示交互、内容组织与前端能力，不构成真实票务或法律承诺。' },
    { title: '四、预约说明', content: '当前预约流程仅用于演示用户从选品、下单、支付到成功和订单页的前端闭环。' },
    { title: '五、后续扩展', content: '如需真实上线，仍需补充用户鉴权、支付接口、订单系统、内容审核与 CMS 等后端能力。' },
  ];

  return (
    <div>
      <PageBanner
        image={IMAGES.calligraphy}
        title="服务条款"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '服务条款' }]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[820px] rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
          <p className="mb-6 text-sm text-[#8B989D]">最后更新：2026 年 7 月 3 日</p>
          {sections.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="mb-2 font-bold text-[#24343B]">{section.title}</h3>
              <p className="text-sm leading-8 text-[#52636A]">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-8">
      <div className="text-center">
        <div className="mb-6 text-7xl text-[#C9932C]">404</div>
        <h2 className="text-2xl font-bold text-[#24343B]">页面未找到</h2>
        <p className="mt-3 text-sm leading-7 text-[#617178]">
          你访问的路径可能不存在、已调整，或者只是为了演示 404 页面而手动输入的测试地址。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="rounded-full bg-[#C9932C] px-8 py-3 font-semibold text-white hover:bg-[#b58323]">
            返回首页
          </Link>
          <Link
            to="/scenic"
            className="rounded-full bg-[#F4EFE6] px-8 py-3 font-medium text-[#41535F] hover:bg-[#e7dece]"
          >
            浏览景点
          </Link>
        </div>
      </div>
    </section>
  );
}
