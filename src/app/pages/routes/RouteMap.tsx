import { Link } from 'react-router';
import { MapPin, Route } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';

const MAP_POINTS = [
  {
    title: '桃花潭',
    desc: '平台主入口景点，适合串联门票预约与文化展示。',
    x: '18%',
    y: '42%',
  },
  {
    title: '查济古村',
    desc: '徽派古村核心场景，适合摄影、住宿与攻略联动。',
    x: '46%',
    y: '36%',
  },
  {
    title: '宣纸文化园',
    desc: '非遗体验与亲子研学的重要内容节点。',
    x: '58%',
    y: '58%',
  },
  {
    title: '太平湖',
    desc: '湖景度假与日落摄影场景，适合套餐和酒店演示。',
    x: '80%',
    y: '28%',
  },
];

export function RouteMap() {
  return (
    <div>
      <PageBanner
        image={IMAGES.sunsetLake}
        title="路线地图"
        subtitle="以示意方式呈现桃花潭、查济、宣纸文化园与太平湖的文旅联动关系。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '路线预览', path: '/routes' },
          { label: '路线地图' },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1280px] space-y-8">
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.22em] text-[#8D7556]">SCENIC CONNECTIONS</p>
                <h2 className="mt-2 text-3xl font-bold text-[#24343B]">皖南文旅路线示意图</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] px-4 py-2 text-sm text-[#41535F]">
                <Route className="h-4 w-4" />
                当前为答辩演示地图
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f4f7f6,#f9f5ee)] p-6">
              <div className="relative h-[420px] rounded-[24px] border border-[#E6DDD1] bg-[radial-gradient(circle_at_20%_20%,rgba(201,147,44,0.12),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(72,107,114,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(243,247,246,0.92))]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M18 42 C32 35, 38 34, 46 36 S56 45, 58 58 S72 40, 80 28"
                    fill="none"
                    stroke="#C9932C"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                </svg>

                {MAP_POINTS.map((point) => (
                  <div
                    key={point.title}
                    className="absolute w-48 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: point.x, top: point.y }}
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#C9932C] text-white shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="rounded-[20px] border border-white/70 bg-white/92 p-4 shadow-sm backdrop-blur">
                      <h3 className="font-bold text-[#24343B]">{point.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-[#617178]">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link
              to="/routes/one-day"
              className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#24343B]">查看一日精华游</h3>
              <p className="mt-2 text-sm leading-7 text-[#52636A]">适合从路线详情继续进入套餐预约与答辩主流程。</p>
            </Link>
            <Link
              to="/booking/packages"
              className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#24343B]">进入套餐预约</h3>
              <p className="mt-2 text-sm leading-7 text-[#52636A]">将路线叙事直接衔接到订单确认、支付和成功页。</p>
            </Link>
            <Link
              to="/community/guides"
              className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#24343B]">查看出行攻略</h3>
              <p className="mt-2 text-sm leading-7 text-[#52636A]">把路线地图与社区攻略内容联动展示，增强平台完整度。</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
