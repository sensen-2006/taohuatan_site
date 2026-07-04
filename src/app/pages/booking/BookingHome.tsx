import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Hotel, Package, Ticket, UserCheck } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { IMAGES } from '../../components/shared/images';

const SERVICES = [
  {
    icon: <Ticket className="h-8 w-8" />,
    title: '门票预约',
    desc: '选择景点、日期、票种与人数，直接进入演示下单流程。',
    link: '/booking/tickets',
    color: 'from-[#C9932C] to-[#E0B44C]',
    price: '￥65 起',
  },
  {
    icon: <Hotel className="h-8 w-8" />,
    title: '酒店民宿',
    desc: '覆盖桃花潭、查济与太平湖周边住宿，支持演示预订。',
    link: '/booking/hotels',
    color: 'from-[#486B72] to-[#6A8C92]',
    price: '￥288 起',
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: '导游讲解',
    desc: '选择讲解老师与服务时段，补足平台服务型产品形态。',
    link: '/booking/guides',
    color: 'from-[#6F8F63] to-[#8FA37E]',
    price: '￥180 起',
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: '精选套餐',
    desc: '门票、住宿、讲解打包组合，适合展示整合能力。',
    link: '/booking/packages',
    color: 'from-[#8A6B4F] to-[#A38260]',
    price: '￥268 起',
  },
];

const HOT_PRODUCTS = [
  {
    name: '桃花潭 + 查济联票',
    price: '￥108',
    original: '￥143',
    image: IMAGES.lakeMountain,
    sales: 2856,
    link: '/booking/tickets',
  },
  {
    name: '查济古韵民宿',
    price: '￥388',
    original: '￥488',
    image: IMAGES.bridgeVillage,
    sales: 1268,
    link: '/booking/hotels',
  },
  {
    name: '张老师讲解服务',
    price: '￥200',
    original: '￥260',
    image: IMAGES.tourGuide,
    sales: 926,
    link: '/booking/guides',
  },
  {
    name: '两日深度套餐',
    price: '￥688',
    original: '￥958',
    image: IMAGES.sunsetLake,
    sales: 856,
    link: '/booking/packages',
  },
];

export function BookingHome() {
  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="在线预约"
        subtitle="围绕桃花潭、查济与太平湖，完成一条可展示、可答辩、可部署的前端预约闭环。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '在线预约' }]}
      />

      <section className="px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 rounded-[32px] border border-[#E8E1D2] bg-[linear-gradient(135deg,rgba(247,242,233,0.96),rgba(255,255,255,0.96))] p-8 shadow-sm">
            <p className="text-sm tracking-[0.28em] text-[#8D7556]">DEMO JOURNEY</p>
            <h2 className="mt-3 text-3xl font-bold text-[#24343B]">推荐答辩演示入口</h2>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-[#52636A]">
              从“门票预约”进入，选择景点、日期、票种与人数后，可依次进入订单确认、在线支付、预约成功，再跳转“我的订单”完成闭环展示。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/booking/tickets"
                className="rounded-full bg-[#C9932C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b58323]"
              >
                从门票预约开始
              </Link>
              <Link
                to="/booking/packages"
                className="rounded-full bg-[#F4EFE6] px-6 py-3 text-sm font-medium text-[#41535F] hover:bg-[#e9decc]"
              >
                查看套餐方案
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={service.link}
                  className="group block h-full rounded-[28px] border border-gray-100 bg-white p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#24343B]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#66767D]">{service.desc}</p>
                  <p className="mt-4 text-lg font-bold text-[#C9932C]">{service.price}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#486B72] group-hover:gap-2">
                    立即进入
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#F5F7F6] px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="热门预约产品"
            subtitle="用更接近真实业务的产品卡片，承接预约入口与订单演示。"
            english="BOOKING HIGHLIGHTS"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOT_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={product.link}
                  className="group block overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-[#C9932C] px-3 py-1 text-xs text-white">
                      推荐
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-bold text-[#24343B]">{product.name}</h4>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-[#C9932C]">{product.price}</span>
                      <span className="text-xs text-gray-300 line-through">{product.original}</span>
                    </div>
                    <p className="mt-2 text-xs text-[#7A868B]">演示销量 {product.sales}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
          <Link
            to="/booking/refund"
            className="flex items-center gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6E7E5] text-lg font-bold text-[#9B4C46]">
              退
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#24343B]">退票与改签</h4>
              <p className="mt-1 text-xs text-[#7A868B]">展示售后查询、退票申请与改签流程。</p>
            </div>
          </Link>
          <Link
            to="/booking/invoice"
            className="flex items-center gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F1F2] text-lg font-bold text-[#486B72]">
              票
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#24343B]">发票申请</h4>
              <p className="mt-1 text-xs text-[#7A868B]">对最新演示订单提交电子发票申请。</p>
            </div>
          </Link>
          <Link
            to="/user/orders"
            className="flex items-center gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2E8] text-lg font-bold text-[#6F8F63]">
              单
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#24343B]">我的订单</h4>
              <p className="mt-1 text-xs text-[#7A868B]">成功页可直接跳转到这里，作为预约闭环终点。</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
