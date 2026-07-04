import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { toast } from 'sonner';
import {
  ArrowLeft,
  Bookmark,
  Eye,
  Flag,
  Heart,
  Image,
  MessageCircle,
  Send,
  Share2,
  ThumbsUp,
  Upload,
  Video,
} from 'lucide-react';
import { PageBanner } from '../../components/shared/PageBanner';
import { IMAGES } from '../../components/shared/images';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { ContentNotFound } from '../../components/shared/ContentNotFound';
import { authorData, authorMap, guideData, guideMap, travelogData, travelogMap } from '../../data/community';
import { useDemoApp } from '../../providers/DemoAppProvider';

export function TravelogList() {
  return (
    <div>
      <PageBanner
        image={IMAGES.lakeMountain}
        title="游记列表"
        subtitle="展示来自旅行者的真实分享，可继续跳转到详情页、作者主页和收藏动作。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '游记列表' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {travelogData.map((post) => {
            const author = authorMap[post.authorId];
            return (
              <Link
                key={post.id}
                to={`/community/travelog/${post.id}`}
                className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold leading-7 text-[#24343B] group-hover:text-[#486B72]">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5D6C72]">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-[#8B989D]">
                      {author.name} / {post.date}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8B989D]">
                      <span className="inline-flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export function TravelogDetail() {
  const { id } = useParams();
  const post = id ? travelogMap[id] : null;
  const { toggleFavorite, favorites } = useDemoApp();

  if (!post) {
    return (
      <ContentNotFound
        title="游记不存在"
        description="这篇游记暂时没有配置，可返回列表继续浏览已整理好的社区内容。"
        backTo="/community/travelogs"
        backLabel="返回游记列表"
      />
    );
  }

  const author = authorMap[post.authorId];
  const isFavorite = favorites.some((item) => item.id === post.id && item.type === 'travelog');

  return (
    <div>
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback src={post.coverImage} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative mx-auto flex h-full max-w-[900px] flex-col justify-end px-8 pb-10">
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/18 px-3 py-1 text-xs text-white">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/74">
            <span>
              {author.avatar} {author.name}
            </span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {post.views.toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-8 py-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => toast.success('点赞已记录到演示态。')}
              className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-500 hover:bg-red-100"
            >
              <Heart className="h-4 w-4" />
              {post.likes}
            </button>
            <button
              type="button"
              onClick={() =>
                toggleFavorite({
                  id: post.id,
                  type: 'travelog',
                  name: post.title,
                  image: post.coverImage,
                  path: `/community/travelog/${post.id}`,
                })
              }
              className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm text-[#516268] hover:bg-gray-100"
            >
              <Bookmark className={`h-4 w-4 ${isFavorite ? 'fill-current text-[#C9932C]' : ''}`} />
              {isFavorite ? '已收藏' : '收藏'}
            </button>
            <Link
              to={`/community/author/${author.id}`}
              className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm text-[#516268] hover:bg-gray-100"
            >
              <Share2 className="h-4 w-4" />
              查看作者
            </Link>
          </div>
          <Link
            to="/community/travelogs"
            className="inline-flex items-center gap-1 text-sm text-[#8B989D] hover:text-[#24343B]"
          >
            <ArrowLeft className="h-4 w-4" />
            返回列表
          </Link>
        </div>

        <article className="space-y-8">
          <p className="text-lg leading-9 text-[#52636A]">{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-bold text-[#24343B]">{section.title}</h2>
              <p className="mb-6 leading-8 text-[#52636A]">{section.body}</p>
              {section.image ? (
                <div className="overflow-hidden rounded-2xl">
                  <ImageWithFallback src={section.image} alt={section.title} className="h-80 w-full object-cover" />
                </div>
              ) : null}
            </section>
          ))}
        </article>

        <section className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-[#24343B]">
            评论（{post.commentList.length}）
          </h3>
          <div className="mb-8 flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg">评</div>
            <div className="flex-1">
              <textarea
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                rows={3}
                placeholder="写下你的评论"
              />
              <div className="mt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => toast.success('评论已写入演示态列表。')}
                  className="rounded-full bg-[#C9932C] px-6 py-2 text-sm font-medium text-white hover:bg-[#b58323]"
                >
                  发表评论
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {post.commentList.map((comment) => (
              <div key={`${comment.name}-${comment.time}`} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7EFE0] font-bold text-[#8D6A1F]">
                    {comment.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#24343B]">{comment.name}</p>
                    <p className="text-xs text-[#8B989D]">{comment.time}</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-[#52636A]">{comment.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function GuideList() {
  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="攻略列表"
        subtitle="用更结构化的信息承接路线理解、景点决策与答辩中的“信息服务能力”展示。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '攻略列表' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guideData.map((guide) => (
            <Link
              key={guide.id}
              to={`/community/guide/${guide.id}`}
              className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
            >
              <p className="text-xs tracking-[0.18em] text-[#8D7556]">{guide.date}</p>
              <h3 className="mt-3 text-lg font-bold text-[#24343B]">{guide.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#52636A]">{guide.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#EEF3F1] px-3 py-1 text-xs text-[#486B72]">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function GuideDetail() {
  const { id } = useParams();
  const guide = id ? guideMap[id] : null;

  if (!guide) {
    return (
      <ContentNotFound
        title="攻略不存在"
        description="这篇攻略暂时没有配置，可返回攻略列表继续浏览。"
        backTo="/community/guides"
        backLabel="返回攻略列表"
      />
    );
  }

  const author = authorMap[guide.authorId];

  return (
    <div>
      <PageBanner
        image={guide.coverImage}
        title={guide.title}
        subtitle={guide.summary}
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '攻略详情' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[900px] space-y-8">
          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#7A868B]">
              <span>
                {author.avatar} {author.name}
              </span>
              <span>{guide.date}</span>
              <span>浏览 {guide.views}</span>
              <span>有用 {guide.helpfulCount}</span>
            </div>
          </div>

          {guide.sections.map((section) => (
            <div key={section.title} className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#24343B]">{section.title}</h2>
              <p className="mt-4 text-sm leading-8 text-[#52636A]">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#52636A]">
                  {section.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              ) : null}
              {section.image ? (
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <ImageWithFallback src={section.image} alt={section.title} className="h-72 w-full object-cover" />
                </div>
              ) : null}
            </div>
          ))}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => toast.success('这篇攻略已记录为“有用”。')}
              className="rounded-full bg-[#C9932C] px-5 py-2 text-sm font-medium text-white hover:bg-[#b58323]"
            >
              觉得有用
            </button>
            <Link
              to={`/community/author/${author.id}`}
              className="rounded-full bg-[#F4EFE6] px-5 py-2 text-sm font-medium text-[#41535F] hover:bg-[#e7dece]"
            >
              查看作者主页
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function GalleryPage() {
  const galleryItems = travelogData.flatMap((item) =>
    item.sections
      .filter((section) => section.image)
      .map((section) => ({
        id: `${item.id}-${section.title}`,
        title: section.title,
        image: section.image as string,
        travelogTitle: item.title,
      })),
  );

  return (
    <div>
      <PageBanner
        image={IMAGES.photography}
        title="图文分享"
        subtitle="提炼社区中的视觉内容，用于答辩展示时快速呈现平台的东方气质。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '图文分享' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
              <div className="h-60 overflow-hidden">
                <ImageWithFallback src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#24343B]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#617178]">{item.travelogTitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function PublishPage() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="发布内容"
        subtitle="当前为前端演示发布页，不接真实后端与审核系统，但所有按钮都有明确反馈。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '发布内容' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[860px] rounded-[30px] border border-gray-100 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
              placeholder="输入标题"
            />
            <textarea
              rows={8}
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
              placeholder="写下你的游记、攻略或图文分享内容"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { icon: <Image className="h-5 w-5" />, label: '上传图片' },
                { icon: <Video className="h-5 w-5" />, label: '上传视频' },
                { icon: <Upload className="h-5 w-5" />, label: '保存草稿' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => toast.message(`${item.label}当前为演示按钮。`)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-gray-200 px-4 py-4 text-sm text-[#617178] hover:border-[#C9932C]"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => toast.success(`《${title || '未命名内容'}》已保存到演示草稿箱。`)}
              className="rounded-full bg-[#F4EFE6] px-6 py-3 text-sm font-medium text-[#41535F] hover:bg-[#e7dece]"
            >
              保存草稿
            </button>
            <button
              type="button"
              onClick={() => toast.success(`《${title || '未命名内容'}》已作为演示内容提交。`)}
              className="rounded-full bg-[#C9932C] px-6 py-3 text-sm font-medium text-white hover:bg-[#b58323]"
            >
              发布内容
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AuthorProfile() {
  const { id } = useParams();
  const author = id ? authorMap[id] : null;

  if (!author) {
    return (
      <ContentNotFound
        title="作者主页不存在"
        description="这位作者暂时没有配置，可返回社区首页继续浏览其他内容。"
        backTo="/community"
        backLabel="返回社区首页"
      />
    );
  }

  const relatedPosts = travelogData.filter((item) => item.authorId === author.id);
  const relatedGuides = guideData.filter((item) => item.authorId === author.id);

  return (
    <div>
      <section className="relative h-[360px] overflow-hidden">
        <ImageWithFallback src={author.coverImage} alt={author.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[1180px] items-end px-8 pb-10">
          <div className="rounded-[28px] bg-white/92 p-8 shadow-lg backdrop-blur">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7EFE0] text-2xl font-bold text-[#8D6A1F]">
              {author.avatar}
            </div>
            <h1 className="text-3xl font-bold text-[#24343B]">{author.name}</h1>
            <p className="mt-2 text-sm text-[#617178]">
              {author.city} / {author.role}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#52636A]">{author.bio}</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#24343B]">作者签名</h3>
              <p className="mt-3 text-sm leading-8 text-[#52636A]">{author.signature}</p>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#24343B]">代表游记</h3>
              <div className="space-y-4">
                {relatedPosts.map((item) => (
                  <Link key={item.id} to={`/community/travelog/${item.id}`} className="block rounded-[22px] bg-[#F7F8F8] p-4 hover:bg-[#f1f3f3]">
                    <h4 className="text-sm font-bold text-[#24343B]">{item.title}</h4>
                    <div className="mt-2 text-xs text-[#8B989D]">点赞 {item.likes} / {item.date}</div>
                  </Link>
                ))}
              </div>
            </div>

            {relatedGuides.length > 0 ? (
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[#24343B]">作者攻略</h3>
                <div className="space-y-4">
                  {relatedGuides.map((item) => (
                    <Link key={item.id} to={`/community/guide/${item.id}`} className="block rounded-[22px] bg-[#F7F8F8] p-4 hover:bg-[#f1f3f3]">
                      <h4 className="text-sm font-bold text-[#24343B]">{item.title}</h4>
                      <div className="mt-2 text-xs text-[#8B989D]">浏览 {item.views} / {item.date}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-bold text-[#24343B]">作者数据</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '粉丝', value: author.followers },
                  { label: '关注', value: author.following },
                  { label: '获赞', value: author.likes },
                  { label: '发文', value: author.posts },
                ].map((item) => (
                  <div key={item.label} className="rounded-[20px] bg-[#F7F8F8] p-4 text-center">
                    <p className="text-2xl font-bold text-[#C9932C]">{item.value}</p>
                    <p className="mt-1 text-xs text-[#7A868B]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-bold text-[#24343B]">擅长方向</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                {author.specialties.map((item) => (
                  <span key={item} className="rounded-full bg-[#F8F1E4] px-3 py-1 text-xs text-[#8D6A1F]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => toast.success(`已关注 ${author.name}（演示状态）。`)}
                  className="rounded-full bg-[#C9932C] px-5 py-2 text-sm font-medium text-white hover:bg-[#b58323]"
                >
                  关注作者
                </button>
                <button
                  type="button"
                  onClick={() => toast.message('私信功能当前保留为演示提示。')}
                  className="rounded-full bg-[#F4EFE6] px-5 py-2 text-sm font-medium text-[#41535F] hover:bg-[#e7dece]"
                >
                  私信作者
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CommentsPage() {
  const comments = [
    { name: '旅行爱好者', avatar: '旅', text: '桃花潭清晨真的很美，适合慢慢走。', time: '2 天前', likes: 89, spot: '桃花潭' },
    { name: '古建迷', avatar: '村', text: '查济古村保存得很完整，每一栋建筑都有层次。', time: '3 天前', likes: 67, spot: '查济古村' },
    { name: '亲子玩家', avatar: '亲', text: '宣纸文化园很适合带孩子一起体验。', time: '1 周前', likes: 56, spot: '宣纸文化园' },
  ];

  return (
    <div>
      <PageBanner
        image={IMAGES.tea}
        title="热门评论"
        subtitle="展示平台不仅有预约闭环，也有用户反馈与内容互动。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '热门评论' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[820px] space-y-6">
          {comments.map((comment) => (
            <div key={`${comment.name}-${comment.time}`} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-bold text-[#24343B]">{comment.name}</span>
                    <span className="rounded-full bg-[#F8F1E4] px-2 py-1 text-xs text-[#8D6A1F]">
                      {comment.spot}
                    </span>
                    <span className="ml-auto text-xs text-[#8B989D]">{comment.time}</span>
                  </div>
                  <p className="text-sm leading-7 text-[#52636A]">{comment.text}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-[#8B989D]">
                    <button
                      type="button"
                      onClick={() => toast.success('评论点赞已记录到演示态。')}
                      className="inline-flex items-center gap-1 hover:text-[#C9932C]"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      {comment.likes}
                    </button>
                    <button
                      type="button"
                      onClick={() => toast.message('评论回复当前为演示提示。')}
                      className="hover:text-[#486B72]"
                    >
                      回复
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function DraftsPage() {
  const drafts = [
    { title: '还没写完的查济游记', date: '2026-04-11', type: '游记' },
    { title: '太平湖摄影攻略草稿', date: '2026-04-09', type: '攻略' },
  ];

  return (
    <div>
      <PageBanner
        image={IMAGES.calligraphy}
        title="草稿箱"
        subtitle="用于演示平台支持内容暂存、继续编辑与发布的能力。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '草稿箱' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[820px] space-y-4">
          {drafts.map((draft) => (
            <div
              key={draft.title}
              className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-[#24343B]">{draft.title}</h4>
                <p className="mt-1 text-xs text-[#8B989D]">
                  {draft.type} / 保存于 {draft.date}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => toast.message('草稿继续编辑当前保留为演示说明。')}
                  className="text-sm text-[#486B72] hover:underline"
                >
                  继续编辑
                </button>
                <button
                  type="button"
                  onClick={() => toast.message('草稿删除当前为演示操作。')}
                  className="text-sm text-[#9B4C46] hover:underline"
                >
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ReportPage() {
  return (
    <div>
      <PageBanner
        image={IMAGES.garden}
        title="举报反馈"
        subtitle="用于演示平台支持社区内容反馈与审核入口，但当前不接真实审核系统。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '社区互动', path: '/community' },
          { label: '举报反馈' },
        ]}
      />
      <section className="px-8 py-12">
        <div className="mx-auto max-w-[620px] rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-bold text-[#24343B]">提交举报</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-[#617178]">举报类型</label>
              <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25">
                <option>垃圾广告</option>
                <option>不实信息</option>
                <option>侵权内容</option>
                <option>其他问题</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-[#617178]">详细说明</label>
              <textarea
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9932C]/25"
                rows={5}
                placeholder="请描述举报原因"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-[#617178]">截图（选填）</label>
              <button
                type="button"
                onClick={() => toast.message('截图上传当前为演示提示。')}
                className="w-full rounded-xl border-2 border-dashed border-gray-200 p-6 text-center hover:border-[#C9932C]"
              >
                <Upload className="mx-auto mb-2 h-8 w-8 text-gray-300" />
                <p className="text-xs text-[#7A868B]">上传截图证据</p>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.success('举报反馈已提交到演示态。')}
            className="mt-6 w-full rounded-full bg-[#C9932C] py-3 font-semibold text-white hover:bg-[#b58323]"
          >
            提交举报
          </button>
        </div>
      </section>
    </div>
  );
}
