import { Link } from 'react-router';
import { BookOpen, Camera, Edit3, Users } from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { IMAGES } from '../../components/shared/images';
import { authorData, guideData, travelogData } from '../../data/community';

export function CommunityHome() {
  return (
    <div>
      <PageBanner
        image={IMAGES.photography}
        title="社区互动"
        subtitle="用游记、攻略、作者主页、发布与评论模块，让平台具备真实的内容社区展示气质。"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '社区互动' }]}
      />

      <section className="px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { icon: <BookOpen className="h-6 w-6" />, label: '游记列表', link: '/community/travelogs' },
              { icon: <Edit3 className="h-6 w-6" />, label: '攻略列表', link: '/community/guides' },
              { icon: <Camera className="h-6 w-6" />, label: '图文分享', link: '/community/gallery' },
              { icon: <Users className="h-6 w-6" />, label: '发布内容', link: '/community/publish' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7EFE0] text-[#8D6A1F]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#24343B]">{item.label}</h3>
                <p className="mt-2 text-sm text-[#617178]">可继续进入详情页与演示互动链路。</p>
              </Link>
            ))}
          </div>

          <SectionTitle
            title="热门游记"
            subtitle="把真实旅行分享与景点、路线、作者主页连接起来。"
            english="TRAVELOGS"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {travelogData.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/community/travelog/${item.id}`}
                className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-lg"
              >
                <div className="h-52 overflow-hidden">
                  <ImageWithFallback
                    src={item.coverImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-7 text-[#24343B]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#617178]">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#F5F7F6] px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="精选攻略"
            subtitle="让社区不只是展示内容，还能承接出行决策和路线理解。"
            english="GUIDES"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {guideData.map((item) => (
              <Link
                key={item.id}
                to={`/community/guide/${item.id}`}
                className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <p className="text-xs tracking-[0.18em] text-[#8D7556]">{item.date}</p>
                <h3 className="mt-3 text-lg font-bold text-[#24343B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#52636A]">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            title="作者主页"
            subtitle="支持从内容跳转到作者，补齐社区平台的完整结构。"
            english="AUTHORS"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {authorData.map((author) => (
              <Link
                key={author.id}
                to={`/community/author/${author.id}`}
                className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7EFE0] text-xl font-bold text-[#8D6A1F]">
                  {author.avatar}
                </div>
                <h3 className="text-lg font-bold text-[#24343B]">{author.name}</h3>
                <p className="mt-2 text-sm text-[#617178]">{author.role}</p>
                <p className="mt-3 text-sm leading-7 text-[#52636A]">{author.bio}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
