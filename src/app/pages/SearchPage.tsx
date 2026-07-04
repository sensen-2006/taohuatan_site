import { Link, useSearchParams } from 'react-router';
import { PageBanner } from '../components/shared/PageBanner';
import { IMAGES } from '../components/shared/images';
import { scenicData } from '../data/scenic';
import { routeData } from '../data/routes-data';
import { travelogData } from '../data/community';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = (searchParams.get('q') || '').trim();

  const scenicResults = scenicData.filter((item) =>
    [item.name, item.shortDescription, item.tags.join(' ')].join(' ').includes(keyword),
  );
  const routeResults = routeData.filter((item) =>
    [item.name, item.subtitle, item.tags.join(' ')].join(' ').includes(keyword),
  );
  const travelogResults = travelogData.filter((item) =>
    [item.title, item.excerpt, item.tags.join(' ')].join(' ').includes(keyword),
  );

  const hasKeyword = keyword.length > 0;
  const hasAnyResult =
    scenicResults.length > 0 || routeResults.length > 0 || travelogResults.length > 0;

  return (
    <div>
      <PageBanner
        image={IMAGES.photography}
        title="站内搜索"
        subtitle="当前为前端演示搜索页，支持对景点、路线和社区内容进行基础检索。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '站内搜索' }]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1080px] space-y-8">
          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#24343B]">
              {hasKeyword ? `搜索关键词：${keyword}` : '请输入搜索关键词'}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#52636A]">
              推荐尝试搜索“桃花潭”“查济”“太平湖”“摄影”“亲子”等关键词。
            </p>
          </div>

          {hasKeyword && hasAnyResult ? (
            <div className="space-y-8">
              {scenicResults.length > 0 ? (
                <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#24343B]">景点结果</h3>
                  <div className="mt-4 space-y-4">
                    {scenicResults.map((item) => (
                      <Link key={item.id} to={`/scenic/${item.id}`} className="block rounded-[20px] bg-[#F7F8F8] p-4 hover:bg-[#f1f3f3]">
                        <p className="font-bold text-[#24343B]">{item.name}</p>
                        <p className="mt-2 text-sm text-[#52636A]">{item.shortDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {routeResults.length > 0 ? (
                <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#24343B]">路线结果</h3>
                  <div className="mt-4 space-y-4">
                    {routeResults.map((item) => (
                      <Link key={item.id} to={`/routes/${item.id}`} className="block rounded-[20px] bg-[#F7F8F8] p-4 hover:bg-[#f1f3f3]">
                        <p className="font-bold text-[#24343B]">{item.name}</p>
                        <p className="mt-2 text-sm text-[#52636A]">{item.shortDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {travelogResults.length > 0 ? (
                <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#24343B]">社区内容</h3>
                  <div className="mt-4 space-y-4">
                    {travelogResults.map((item) => (
                      <Link key={item.id} to={`/community/travelog/${item.id}`} className="block rounded-[20px] bg-[#F7F8F8] p-4 hover:bg-[#f1f3f3]">
                        <p className="font-bold text-[#24343B]">{item.title}</p>
                        <p className="mt-2 text-sm text-[#52636A]">{item.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {hasKeyword && !hasAnyResult ? (
            <div className="rounded-[28px] border border-dashed border-[#D8D1C5] bg-[#FAF7F1] px-8 py-16 text-center text-sm text-[#7A868B]">
              没有找到和“{keyword}”相关的演示内容，可换一个关键词再试试。
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
