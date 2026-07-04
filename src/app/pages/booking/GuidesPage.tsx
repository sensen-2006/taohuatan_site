import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Clock, Globe, Star, Users } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { buildGuideDraft, getUpcomingBookingDates, guideBookingData } from '../../data/booking';
import { useDemoApp } from '../../providers/DemoAppProvider';

const DATE_OPTIONS = getUpcomingBookingDates(7);
const SESSION_OPTIONS = ['09:00 - 11:00', '14:00 - 16:00', '16:30 - 18:00'];
const LANGUAGE_FILTERS = ['全部', '中文', 'English', '日语', 'Français'];

export function GuidesPage() {
  const navigate = useNavigate();
  const { saveBookingDraft } = useDemoApp();
  const [languageFilter, setLanguageFilter] = useState('全部');
  const [serviceDate, setServiceDate] = useState(DATE_OPTIONS[0].value);
  const [sessionLabel, setSessionLabel] = useState(SESSION_OPTIONS[0]);

  const visibleGuides = guideBookingData.filter(
    (guide) => languageFilter === '全部' || guide.languages.includes(languageFilter),
  );

  const handleBookGuide = (guideId: string) => {
    const guide = guideBookingData.find((item) => item.id === guideId);
    if (!guide) return;
    saveBookingDraft(buildGuideDraft({ guide, serviceDate, sessionLabel }));
    navigate('/booking/confirm');
  };

  return (
    <div>
      <PageBanner
        image={IMAGES.tourGuide}
        title="导游讲解预约"
        subtitle="通过选择讲解老师与服务时段，补足平台在服务型产品上的演示能力。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '导游讲解' },
        ]}
      />

      <section className="border-b border-gray-100 bg-white px-8 py-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 lg:grid-cols-[1.2fr_auto_auto] lg:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Globe className="h-4 w-4 text-[#7A868B]" />
            {LANGUAGE_FILTERS.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setLanguageFilter(language)}
                className={`rounded-full px-4 py-2 text-sm ${
                  languageFilter === language
                    ? 'bg-[#486B72] text-white'
                    : 'bg-[#F3F4F4] text-[#52636A] hover:bg-[#E8EBEB]'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-4 py-3 text-sm text-[#52636A]">
            <span>服务日期</span>
            <select
              value={serviceDate}
              onChange={(event) => setServiceDate(event.target.value)}
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
            <span>服务时段</span>
            <select
              value={sessionLabel}
              onChange={(event) => setSessionLabel(event.target.value)}
              className="bg-transparent text-[#24343B] outline-none"
            >
              {SESSION_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2">
          {visibleGuides.map((guide) => (
            <article
              key={guide.id}
              className="rounded-[30px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#E8F1F2,#F4EFE6)] text-3xl font-bold text-[#486B72]">
                  {guide.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-[#24343B]">{guide.name}</h2>
                      <p className="mt-1 text-sm text-[#6A7A80]">{guide.specialty}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-3xl font-bold text-[#C9932C]">￥{guide.price}</p>
                      <p className="text-xs text-[#7A868B]">每场讲解服务</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#52636A]">{guide.intro}</p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#66767D]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#C9932C] text-[#C9932C]" />
                      {guide.rating}（{guide.reviews} 条）
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      从业 {guide.experience}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      服务 {guide.tours} 次
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {guide.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full bg-[#E8F1F2] px-3 py-1 text-xs text-[#486B72]"
                      >
                        {language}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-[#7A868B]">
                      演示预约将自动带入当前选择的服务日期与时段。
                    </p>
                    <button
                      type="button"
                      onClick={() => handleBookGuide(guide.id)}
                      className="rounded-full bg-[#C9932C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b58323]"
                    >
                      预约该导游
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
