import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';
import heroImage from '../../imports/9.png';
import { IMAGES } from '../components/shared/images';
import { SectionTitle } from '../components/shared/SectionTitle';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { scenicData } from '../data/scenic';
import { routeData } from '../data/routes-data';
import { travelogData } from '../data/community';

const featuredSpots = scenicData.slice(0, 3);
const featuredRoutes = routeData.slice(0, 4);
const featuredCommunity = travelogData.slice(0, 4);

export function Home() {
  return (
    <div>
      <section className="relative min-h-[680px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,28,32,0.78),rgba(55,84,88,0.44),rgba(201,147,44,0.25))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1280px] flex-col justify-center px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.32em] text-white/72">TAOHUATAN CULTURAL TOURISM</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.14] text-white lg:text-7xl">
              桃花潭景区数字化展示与预约平台
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              以桃花潭、查济古村、太平湖为核心，面向课程答辩、项目展示与
              Vercel 部署演示的高端文旅前端平台。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9932C] px-8 py-3 font-semibold text-white hover:bg-[#b58323]"
            >
              在线预约
              <Calendar className="h-5 w-5" />
            </Link>
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 rounded-full bg-white/18 px-8 py-3 font-semibold text-white backdrop-blur hover:bg-white/26"
            >
              查看路线
              <MapPin className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="核心景点"
            subtitle="围绕诗意山水、徽派古村、湖居度假与非遗体验，构建更完整的皖南文旅展示结构。"
            english="TAOHUATAN SCENIC SPOTS"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/scenic/${spot.id}`}
                  className="group block overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm hover:shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <ImageWithFallback
                      src={spot.cardImage}
                      alt={spot.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/48 px-3 py-1 text-xs text-white">
                      <Star className="h-3.5 w-3.5 fill-[#C9932C] text-[#C9932C]" />
                      {spot.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-baseline gap-2">
                      <h3 className="text-xl font-bold text-[#24343B]">{spot.name}</h3>
                      <span className="text-xs text-[#8B989D]">{spot.englishName}</span>
                    </div>
                    <p className="text-sm leading-7 text-[#5D6C72]">{spot.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {spot.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F8F1E4] px-3 py-1 text-xs text-[#8D6A1F]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#F4F7F6] px-8 py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="精选路线"
            subtitle="把桃花潭、查济、太平湖与文化体验串成可展示、可答辩、可预约的完整故事线。"
            english="CURATED ROUTES"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={`/routes/${route.id}`}
                  className="block rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
                >
                  <p className="text-xs tracking-[0.22em] text-[#8D7556]">{route.duration}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#24343B]">{route.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5D6C72]">{route.shortDescription}</p>
                  <p className="mt-4 font-bold text-[#C9932C]">{route.priceLabel}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="在线预约"
            subtitle="门票、住宿、讲解与套餐预约已形成完整前端演示闭环，可直接进入确认订单、支付、成功和我的订单。"
            english="BOOKING DEMO"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                title: '门票预约',
                desc: '选择景点、日期、票种与人数后，直接进入订单确认页。',
                link: '/booking/tickets',
              },
              {
                title: '酒店民宿',
                desc: '展示高端文旅场景中的湖景酒店与徽派民宿。',
                link: '/booking/hotels',
              },
              {
                title: '导游讲解',
                desc: '用服务型产品补齐平台的完整业务形态。',
                link: '/booking/guides',
              },
              {
                title: '整合套餐',
                desc: '适合答辩时重点展示平台组合产品能力。',
                link: '/booking/packages',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#24343B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5D6C72]">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#486B72]">
                  立即进入
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#F4F7F6] to-white px-8 py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="社区内容"
            subtitle="用游记、攻略、作者主页与图文分享，让平台不只是一处预约入口，而是真正能被展示和讲述的文旅社区。"
            english="COMMUNITY STORIES"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredCommunity.map((item) => (
              <Link
                key={item.id}
                to={`/community/travelog/${item.id}`}
                className="group block overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <ImageWithFallback
                    src={item.coverImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold leading-7 text-[#24343B]">{item.title}</h3>
                  <p className="mt-2 text-xs text-[#8B989D]">
                    {item.date} / 浏览 {item.views}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-8 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.sunsetLake})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,34,38,0.88),rgba(72,107,114,0.72),rgba(201,147,44,0.22))]" />
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-4xl font-bold">从展示到答辩，已经具备一条完整可演示主线</h2>
          <p className="mt-4 text-lg leading-8 text-white/78">
            可以从首页进入景点、路线、在线预约、社区互动或个人中心，完成课程答辩所需的核心前端演示闭环。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/booking/tickets"
              className="rounded-full bg-[#C9932C] px-8 py-3 font-semibold text-white hover:bg-[#b58323]"
            >
              从门票预约开始演示
            </Link>
            <Link
              to="/community"
              className="rounded-full bg-white/18 px-8 py-3 font-semibold text-white backdrop-blur hover:bg-white/26"
            >
              查看社区内容
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
