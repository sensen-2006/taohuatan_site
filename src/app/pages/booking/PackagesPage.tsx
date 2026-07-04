import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Clock, Star, Users } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { buildPackageDraft, getUpcomingBookingDates, packageData } from '../../data/booking';
import { useDemoApp } from '../../providers/DemoAppProvider';

const DATE_OPTIONS = getUpcomingBookingDates(7);

export function PackagesPage() {
  const navigate = useNavigate();
  const { saveBookingDraft } = useDemoApp();
  const [travelDate, setTravelDate] = useState(DATE_OPTIONS[0].value);
  const [travelers, setTravelers] = useState(2);

  const handleBookPackage = (packageId: string) => {
    const pkg = packageData.find((item) => item.id === packageId);
    if (!pkg) return;
    saveBookingDraft(buildPackageDraft({ pkg, travelDate, travelers }));
    navigate('/booking/confirm');
  };

  return (
    <div>
      <PageBanner
        image={packageData[0].image}
        title="套餐预约"
        subtitle="把门票、住宿、讲解与路线叙事整合为可直接下单的演示产品。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '套餐预约' },
        ]}
      />

      <section className="border-b border-gray-100 bg-white px-8 py-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 lg:grid-cols-[auto_auto] lg:justify-end">
          <label className="flex items-center gap-3 rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-4 py-3 text-sm text-[#52636A]">
            <span>出行日期</span>
            <select
              value={travelDate}
              onChange={(event) => setTravelDate(event.target.value)}
              className="bg-transparent text-[#24343B] outline-none"
            >
              {DATE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value} {option.weekday}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-3 rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-4 py-3 text-sm text-[#52636A]">
            <span>出行人数</span>
            <select
              value={travelers}
              onChange={(event) => setTravelers(Number(event.target.value))}
              className="bg-transparent text-[#24343B] outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map((value) => (
                <option key={value} value={value}>
                  {value} 人
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1280px] space-y-6">
          {packageData.map((pkg) => (
            <article
              key={pkg.id}
              className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="h-72 overflow-hidden">
                  <ImageWithFallback src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#F8F1E4] px-3 py-1 text-xs text-[#8D6A1F]">
                      {pkg.tag}
                    </span>
                    <span className="rounded-full bg-[#EEF3F1] px-3 py-1 text-xs text-[#486B72]">
                      {pkg.duration}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-[#24343B]">{pkg.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#52636A]">{pkg.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#617178]">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {pkg.crowd}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#C9932C] text-[#C9932C]" />
                      {pkg.rating}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {pkg.includes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-3 py-1 text-xs text-[#7A868B]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-3xl font-bold text-[#C9932C]">￥{pkg.price}</p>
                      <p className="mt-1 text-xs text-gray-300 line-through">￥{pkg.originalPrice}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleBookPackage(pkg.id)}
                      className="rounded-full bg-[#C9932C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b58323]"
                    >
                      预约该套餐
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
