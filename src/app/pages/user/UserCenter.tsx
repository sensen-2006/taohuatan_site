import { Link, Outlet, useLocation } from 'react-router';
import {
  Bell,
  Calendar,
  Camera,
  ChevronRight,
  FileText,
  Globe,
  Heart,
  Lock,
  LogOut,
  Mail,
  MessageCircle,
  Receipt,
  Settings,
  Shield,
  ShoppingBag,
  Tag,
  User,
} from 'lucide-react';
import { toast } from 'sonner';
import { Header } from '../../components/shared/Header';
import { Footer } from '../../components/shared/Footer';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { IMAGES } from '../../components/shared/images';
import { useDemoApp } from '../../providers/DemoAppProvider';

const MENU = [
  { label: '个人中心', path: '/user', icon: <User className="h-4 w-4" /> },
  { label: '我的预约', path: '/user/bookings', icon: <Calendar className="h-4 w-4" /> },
  { label: '我的订单', path: '/user/orders', icon: <ShoppingBag className="h-4 w-4" /> },
  { label: '我的收藏', path: '/user/favorites', icon: <Heart className="h-4 w-4" /> },
  { label: '我的评论', path: '/user/comments', icon: <MessageCircle className="h-4 w-4" /> },
  { label: '我的游记', path: '/user/travelogs', icon: <FileText className="h-4 w-4" /> },
  { label: '消息中心', path: '/user/messages', icon: <Bell className="h-4 w-4" /> },
  { label: '我的优惠券', path: '/user/coupons', icon: <Tag className="h-4 w-4" /> },
  { label: '我的发票', path: '/user/invoices', icon: <Receipt className="h-4 w-4" /> },
  { label: '设置', path: '/user/settings', icon: <Settings className="h-4 w-4" /> },
];

const userFont =
  '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif';

function DemoSwitch({
  label,
  active = true,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => toast.message(`${label}当前为演示开关，正式版可接入真实设置保存。`)}
      className="relative h-6 w-11 rounded-full"
      style={{ backgroundColor: active ? '#C9932C' : '#CBD4D6' }}
    >
      <span
        className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow"
        style={{ left: active ? '22px' : '2px' }}
      />
    </button>
  );
}

export function UserLayout() {
  const location = useLocation();
  const { user } = useDemoApp();

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F8F8]" style={{ fontFamily: userFont }}>
      <Header />
      <div className="flex flex-1">
        <aside className="hidden w-72 shrink-0 border-r border-gray-100 bg-white lg:block">
          <div className="border-b border-gray-100 p-6">
            <div className="relative overflow-hidden rounded-[24px]">
              <ImageWithFallback
                src={IMAGES.lakeMountain}
                alt="个人中心背景图"
                className="h-36 w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(23,34,39,0.72))]" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/88 text-lg font-bold text-[#24343B]">
                  {user.avatar}
                </div>
                <h3 className="font-bold text-white">{user.nickname}</h3>
                <p className="text-xs text-white/70">{user.email}</p>
              </div>
            </div>
          </div>
          <nav className="p-3">
            {MENU.map((item) => {
              const active =
                location.pathname === item.path ||
                (item.path !== '/user' && location.pathname.startsWith(item.path));

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
                    active
                      ? 'bg-[#F8F1E4] font-medium text-[#8D6A1F]'
                      : 'text-[#5D6C72] hover:bg-[#F5F6F5]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export function UserDashboard() {
  const { user, orders, favorites } = useDemoApp();
  const recentOrders = orders.slice(0, 2);
  const recentBookings = orders.slice(0, 3);

  return (
    <div className="max-w-[1040px]">
      <div className="mb-8 rounded-[30px] border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F7EFE0] text-2xl font-bold text-[#8D6A1F]">
              {user.avatar}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#24343B]">{user.nickname}</h2>
              <p className="mt-2 text-sm text-[#617178]">{user.bio}</p>
              <p className="mt-1 text-xs text-[#8B989D]">
                {user.phone} / {user.email}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="rounded-full bg-[#C9932C] px-5 py-2 text-sm font-medium text-white hover:bg-[#b58323]"
            >
              继续预约
            </Link>
            <Link
              to="/community/publish"
              className="rounded-full bg-[#F4EFE6] px-5 py-2 text-sm font-medium text-[#41535F] hover:bg-[#e7dece]"
            >
              发布游记
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          {
            label: '待出行',
            value: orders.filter((item) => item.status === '待出行').length,
            color: 'text-[#C9932C]',
          },
          {
            label: '待处理售后',
            value: orders.filter((item) => item.status.includes('处理中')).length,
            color: 'text-[#9B4C46]',
          },
          { label: '收藏内容', value: favorites.length, color: 'text-[#486B72]' },
          { label: '历史订单', value: orders.length, color: 'text-[#6F8F63]' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm"
          >
            <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
            <p className="mt-2 text-xs text-[#7A868B]">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#24343B]">最近订单</h3>
            <Link to="/user/orders" className="text-sm text-[#486B72] hover:underline">
              查看全部
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="rounded-[20px] bg-[#F7F8F8] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#24343B]">{order.title}</h4>
                    <p className="mt-1 text-xs text-[#7A868B]">
                      {order.date} / {order.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#C9932C]">￥{order.amount}</p>
                    <p className="text-xs text-[#617178]">{order.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#24343B]">最近预约</h3>
            <Link to="/user/bookings" className="text-sm text-[#486B72] hover:underline">
              查看全部
            </Link>
          </div>
          <div className="space-y-4">
            {recentBookings.map((order) => (
              <div
                key={order.id}
                className="rounded-[20px] border border-[#EFEAE0] bg-[#FAF7F1] p-4"
              >
                <p className="text-sm font-bold text-[#24343B]">{order.title}</p>
                <p className="mt-1 text-xs text-[#7A868B]">
                  {order.date} / {order.scenicLabel}
                </p>
                {order.scheduleLabel ? (
                  <p className="mt-1 text-xs text-[#7A868B]">{order.scheduleLabel}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { icon: '票', label: '门票预约', link: '/booking/tickets' },
          { icon: '宿', label: '酒店民宿', link: '/booking/hotels' },
          { icon: '记', label: '写游记', link: '/community/publish' },
          { icon: '问', label: '帮助中心', link: '/support/faq' },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.link}
            className="rounded-[22px] border border-gray-100 bg-white p-4 text-center shadow-sm hover:shadow-md"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7EFE0] text-lg font-bold text-[#8D6A1F]">
              {item.icon}
            </div>
            <p className="text-sm font-medium text-[#24343B]">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MyBookings() {
  const { orders } = useDemoApp();

  return (
    <div className="max-w-[1000px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">我的预约</h2>
      <div className="space-y-4">
        {orders.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h4 className="text-sm font-bold text-[#24343B]">{item.title}</h4>
              <p className="mt-1 text-xs text-[#7A868B]">
                {item.date} /{' '}
                {item.lineItems.map((line) => `${line.name} x ${line.quantity}`).join('，')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[#F4EFE6] px-3 py-1 text-xs text-[#8D6A1F]">
                {item.status}
              </span>
              <span className="font-bold text-[#C9932C]">￥{item.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MyFavorites() {
  const { favorites, toggleFavorite } = useDemoApp();
  const typeMap = {
    scenic: '景点',
    route: '路线',
    guide: '攻略',
    travelog: '游记',
  } as const;

  return (
    <div className="max-w-[1000px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">我的收藏</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {favorites.map((favorite) => (
          <div
            key={`${favorite.type}-${favorite.id}`}
            className="overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm"
          >
            <div className="h-36 overflow-hidden">
              <ImageWithFallback
                src={favorite.image}
                alt={favorite.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <Link
                  to={favorite.path}
                  className="text-sm font-bold text-[#24343B] hover:text-[#486B72]"
                >
                  {favorite.name}
                </Link>
                <p className="mt-1 text-xs text-[#7A868B]">{typeMap[favorite.type]}</p>
              </div>
              <button
                type="button"
                onClick={() => toggleFavorite(favorite)}
                className="text-sm text-[#9B4C46] hover:underline"
              >
                取消收藏
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MyComments() {
  const comments = [
    {
      target: '桃花潭',
      text: '清晨薄雾很有氛围，适合慢慢走，也适合做首页展示。',
      date: '2026-04-10',
      likes: 12,
    },
    {
      target: '查济古村',
      text: '建筑层次特别丰富，适合拍照，也很适合答辩里的视觉展示。',
      date: '2026-04-08',
      likes: 8,
    },
  ];

  return (
    <div className="max-w-[1000px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">我的评论</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={`${comment.target}-${comment.date}`}
            className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded-full bg-[#F8F1E4] px-2 py-1 text-xs text-[#8D6A1F]">
                {comment.target}
              </span>
              <span className="text-xs text-[#8B989D]">{comment.date}</span>
            </div>
            <p className="text-sm text-[#52636A]">{comment.text}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-[#8B989D]">
              <span>点赞 {comment.likes}</span>
              <button
                type="button"
                onClick={() => toast.message('评论删除当前为演示操作。')}
                className="text-[#9B4C46] hover:underline"
              >
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MyTravelogs() {
  const items = [
    {
      title: '春日桃花潭，一场关于诗意的旅行',
      date: '2026-04-10',
      status: '已发布',
      views: 2856,
      likes: 328,
    },
    {
      title: '查济古村三日记',
      date: '2026-04-08',
      status: '草稿',
      views: 0,
      likes: 0,
    },
  ];

  return (
    <div className="max-w-[1000px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#24343B]">我的游记</h2>
        <Link
          to="/community/publish"
          className="rounded-full bg-[#C9932C] px-5 py-2 text-sm font-medium text-white hover:bg-[#b58323]"
        >
          写新游记
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h4 className="text-sm font-bold text-[#24343B]">{item.title}</h4>
              <p className="mt-1 text-xs text-[#7A868B]">
                {item.date} / {item.status}
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#8B989D]">
              {item.status === '已发布' ? (
                <>
                  <span>浏览 {item.views}</span>
                  <span>点赞 {item.likes}</span>
                </>
              ) : null}
              <button
                type="button"
                onClick={() =>
                  toast.message('游记编辑当前由发布页承接，这里保留为演示提示。')
                }
                className="text-[#486B72] hover:underline"
              >
                编辑
              </button>
              <button
                type="button"
                onClick={() => toast.message('游记删除当前为演示操作。')}
                className="text-[#9B4C46] hover:underline"
              >
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SettingsPage() {
  const { user, logout } = useDemoApp();

  return (
    <div className="max-w-[680px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">设置</h2>
      <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center gap-4 border-b border-gray-50 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7EFE0] text-xl font-bold text-[#8D6A1F]">
            {user.avatar}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#24343B]">{user.nickname}</h4>
            <p className="text-xs text-[#8B989D]">点击头像可进入正式版更换头像流程。</p>
          </div>
          <button
            type="button"
            onClick={() => toast.message('更换头像当前保留为演示提示。')}
            className="text-[#8B989D]"
          >
            <Camera className="h-5 w-5" />
          </button>
        </div>

        {[
          { label: '昵称', value: user.nickname, icon: <User className="h-4 w-4" /> },
          { label: '手机号', value: user.phone, icon: <Mail className="h-4 w-4" /> },
          { label: '密码', value: '••••••••', icon: <Lock className="h-4 w-4" /> },
          {
            label: '账号安全',
            value: '',
            icon: <Shield className="h-4 w-4" />,
            link: '/user/security',
          },
          {
            label: '通知设置',
            value: '',
            icon: <Bell className="h-4 w-4" />,
            link: '/user/notifications',
          },
          {
            label: '隐私设置',
            value: '',
            icon: <Shield className="h-4 w-4" />,
            link: '/user/privacy',
          },
          {
            label: '语言设置',
            value: '简体中文',
            icon: <Globe className="h-4 w-4" />,
            link: '/user/language',
          },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.link || '/user/settings'}
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50"
          >
            <span className="text-[#8B989D]">{item.icon}</span>
            <span className="flex-1 text-sm text-[#24343B]">{item.label}</span>
            <span className="text-sm text-[#8B989D]">{item.value}</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          logout();
          toast.message('你已退出当前演示账号。');
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-medium text-red-500 hover:bg-red-100"
      >
        <LogOut className="h-4 w-4" />
        退出登录
      </button>
    </div>
  );
}

export function MessagesPage() {
  const items = [
    {
      icon: '票',
      title: '订单确认',
      desc: '你的桃花潭 + 查济联票已确认，可按日期出行。',
      time: '2 小时前',
      unread: true,
    },
    {
      icon: '评',
      title: '互动提醒',
      desc: '有用户回复了你的游记评论，欢迎前往社区查看。',
      time: '5 小时前',
      unread: true,
    },
    {
      icon: '告',
      title: '景区公告',
      desc: '桃花潭春季开放时间调整通知已发布。',
      time: '1 天前',
      unread: false,
    },
    {
      icon: '惠',
      title: '优惠活动',
      desc: '双景联票限时优惠仍在进行，可继续前往预约页体验。',
      time: '2 天前',
      unread: false,
    },
  ];

  return (
    <div className="max-w-[1000px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">消息中心</h2>
      <div className="mb-6 flex gap-3">
        {['全部', '系统通知', '订单消息', '互动消息'].map((tab, index) => (
          <button
            key={tab}
            type="button"
            onClick={() => toast.message(`${tab}当前为演示分类标签。`)}
            className={`rounded-full px-4 py-2 text-sm ${
              index === 0 ? 'bg-[#C9932C] text-white' : 'bg-gray-100 text-[#5D6C72]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className={`flex items-start gap-4 rounded-[24px] border bg-white p-5 shadow-sm ${
              item.unread ? 'border-[#E9D8B5]' : 'border-gray-100'
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F7EFE0] text-sm font-bold text-[#8D6A1F]">
              {item.icon}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[#24343B]">{item.title}</h4>
                {item.unread ? <span className="h-2 w-2 rounded-full bg-red-500" /> : null}
              </div>
              <p className="mt-1 text-sm text-[#52636A]">{item.desc}</p>
            </div>
            <span className="whitespace-nowrap text-xs text-[#8B989D]">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CouponsPage() {
  const items = [
    {
      amount: '￥50',
      condition: '满 300 可用',
      name: '春季门票优惠券',
      expire: '2026-05-31',
      type: '门票',
    },
    {
      amount: '9 折',
      condition: '住宿专享',
      name: '湖景住宿折扣券',
      expire: '2026-06-30',
      type: '酒店',
    },
    {
      amount: '￥30',
      condition: '满 200 可用',
      name: '新用户礼券',
      expire: '2026-04-30',
      type: '通用',
    },
  ];

  return (
    <div className="max-w-[1000px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">我的优惠券</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm"
          >
            <div className="flex w-28 flex-col items-center justify-center bg-gradient-to-b from-[#C9932C] to-[#D8AE54] p-6 text-white">
              <span className="text-2xl font-bold">{item.amount}</span>
              <span className="text-xs text-white/75">{item.condition}</span>
            </div>
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h4 className="text-sm font-bold text-[#24343B]">{item.name}</h4>
                <p className="text-xs text-[#8B989D]">
                  {item.type} / 有效期至 {item.expire}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  toast.message('优惠券使用当前为演示提示，可前往在线预约继续体验。')
                }
                className="self-end rounded-full bg-[#C9932C] px-4 py-1 text-xs text-white hover:bg-[#b58323]"
              >
                立即使用
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InvoicesPage() {
  const { invoices } = useDemoApp();

  return (
    <div className="max-w-[1000px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">我的发票</h2>
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.orderId}
            className="flex flex-col gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h4 className="text-sm font-bold text-[#24343B]">订单 {invoice.orderId}</h4>
              <p className="mt-1 text-xs text-[#7A868B]">
                {invoice.createdAt} / 抬头 {invoice.title} / 金额 ￥{invoice.amount}
              </p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs ${
                invoice.status === '已开票'
                  ? 'bg-green-50 text-green-600'
                  : 'bg-amber-50 text-amber-600'
              }`}
            >
              {invoice.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SecurityPage() {
  const items = [
    { label: '登录密码', desc: '已设置', action: '修改' },
    { label: '手机号绑定', desc: '138****8000', action: '更换' },
    { label: '邮箱绑定', desc: 'traveler@taohuatan.cn', action: '查看' },
    { label: '第三方账号', desc: '微信 / 支付宝演示绑定入口', action: '管理' },
    { label: '实名认证', desc: '演示版不接真实认证', action: '说明' },
  ];

  return (
    <div className="max-w-[680px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">账号安全</h2>
      <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between border-b border-gray-50 px-6 py-4 last:border-b-0"
          >
            <div>
              <p className="text-sm font-medium text-[#24343B]">{item.label}</p>
              <p className="text-xs text-[#8B989D]">{item.desc}</p>
            </div>
            <button
              type="button"
              onClick={() => toast.message(`${item.label}当前为演示设置项。`)}
              className="text-sm text-[#486B72] hover:underline"
            >
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NotificationsPage() {
  return (
    <div className="max-w-[680px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">通知设置</h2>
      <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
        {[
          '订单状态通知',
          '优惠活动提醒',
          '社区互动提醒',
          '景区公告通知',
          '系统消息提醒',
        ].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between border-b border-gray-50 px-6 py-4 last:border-b-0"
          >
            <span className="text-sm text-[#24343B]">{item}</span>
            <DemoSwitch label={item} active={index !== 3} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PrivacySettingsPage() {
  return (
    <div className="max-w-[680px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">隐私设置</h2>
      <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
        {[
          '允许他人查看我的收藏',
          '允许他人查看我的游记',
          '允许他人给我发私信',
          '展示在线状态',
        ].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between border-b border-gray-50 px-6 py-4 last:border-b-0"
          >
            <span className="text-sm text-[#24343B]">{item}</span>
            <DemoSwitch label={item} active={index < 2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LanguagePage() {
  const languages = [
    { label: '简体中文', active: true },
    { label: 'English', active: false },
    { label: '日本語', active: false },
  ];

  return (
    <div className="max-w-[680px]">
      <h2 className="mb-6 text-2xl font-bold text-[#24343B]">语言设置</h2>
      <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
        {languages.map((language) => (
          <button
            key={language.label}
            type="button"
            onClick={() =>
              toast.message(`${language.label}当前为演示语言选项，正式版可切换多语言内容。`)
            }
            className={`flex w-full items-center justify-between border-b border-gray-50 px-6 py-4 text-left last:border-b-0 ${
              language.active ? 'text-[#8D6A1F]' : 'text-[#24343B]'
            }`}
          >
            <span className="text-sm font-medium">{language.label}</span>
            {language.active ? <span>已启用</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
