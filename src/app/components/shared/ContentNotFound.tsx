import { Link } from 'react-router';

interface ContentNotFoundProps {
  title?: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
}

export function ContentNotFound({
  title = '内容不存在',
  description = '当前内容可能尚未配置、链接有误，或演示数据暂未提供。',
  backTo = '/',
  backLabel = '返回首页',
}: ContentNotFoundProps) {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-[680px] rounded-[32px] border border-gray-100 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FAF3E4] text-3xl text-[#B07A0F]">
          山
        </div>
        <h1 className="mb-3 text-3xl font-bold text-[#24343B]">{title}</h1>
        <p className="mb-8 leading-8 text-[#617178]">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={backTo}
            className="rounded-full bg-[#C9932C] px-8 py-3 font-semibold text-white hover:bg-[#b58323]"
          >
            {backLabel}
          </Link>
          <Link
            to="/support/announcements"
            className="rounded-full bg-[#F4EFE6] px-8 py-3 font-medium text-[#41535F] hover:bg-[#e7dece]"
          >
            查看平台公告
          </Link>
        </div>
      </div>
    </section>
  );
}
