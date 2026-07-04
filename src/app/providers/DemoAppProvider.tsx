import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import { IMAGES } from '../components/shared/images';
import { calculateDraftAmount, demoContactDefaults } from '../data/booking';
import type { DemoBookingDraft, DemoOrder } from '../data/types';

interface DemoUser {
  nickname: string;
  avatar: string;
  email: string;
  phone: string;
  bio: string;
}

interface FavoriteItem {
  id: string;
  type: 'scenic' | 'route' | 'guide' | 'travelog';
  name: string;
  image: string;
  path: string;
}

interface InvoiceRecord {
  orderId: string;
  title: string;
  email: string;
  status: string;
  createdAt: string;
  amount: number;
}

interface DemoState {
  isLoggedIn: boolean;
  user: DemoUser;
  bookingDraft: DemoBookingDraft | null;
  pendingOrderId: string | null;
  latestOrderId: string | null;
  orders: DemoOrder[];
  favorites: FavoriteItem[];
  invoices: InvoiceRecord[];
}

interface DemoAppContextValue extends DemoState {
  login: (account?: string) => void;
  register: (nickname?: string, phone?: string) => void;
  logout: () => void;
  saveBookingDraft: (draft: DemoBookingDraft) => void;
  clearBookingDraft: () => void;
  completePayment: (paymentMethod: string) => DemoOrder | null;
  submitInvoiceRequest: (payload: { title: string; email: string }) => void;
  submitRefundRequest: (orderId: string, kind: 'refund' | 'reschedule') => void;
  toggleFavorite: (item: FavoriteItem) => void;
}

const STORAGE_KEY = 'taohuatan-demo-state-v1';

function createOrderId() {
  return `TH${Date.now().toString().slice(-10)}`;
}

const defaultState: DemoState = {
  isLoggedIn: false,
  user: {
    nickname: '旅行者小棠',
    avatar: '桃',
    email: demoContactDefaults.email,
    phone: '138****8000',
    bio: '偏爱皖南山水、徽派古村与慢节奏文旅体验，当前账号仅用于课程答辩与前端演示。',
  },
  bookingDraft: null,
  pendingOrderId: null,
  latestOrderId: 'TH20260415001',
  orders: [
    {
      id: 'TH20260415001',
      category: 'ticket',
      title: '桃花潭 + 查济联票',
      subtitle: '诗意山水与徽派古村的一站式当日游产品。',
      scenicLabel: '桃花潭 / 查济古村',
      image: IMAGES.lakeMountain,
      date: '2026-04-15',
      lineItems: [
        { id: 'adult-combo', name: '成人联票', quantity: 2, unitPrice: 108 },
        { id: 'student-combo', name: '学生联票', quantity: 1, unitPrice: 58 },
      ],
      notes: ['电子票为演示内容，可在成功页与我的订单中继续展示。'],
      contactHint: '演示联系人',
      contactName: '沈知行',
      contactPhone: '13800138000',
      contactEmail: demoContactDefaults.email,
      status: '待出行',
      amount: 274,
      paymentMethod: '微信支付',
      createdAt: '2026-04-10 14:25',
      invoiceStatus: '待开票',
    },
    {
      id: 'TH20260414002',
      category: 'hotel',
      title: '查济古韵民宿 - 徽派标准间',
      subtitle: '住进古村院落，体验皖南夜宿氛围。',
      scenicLabel: '查济古村',
      image: IMAGES.bridgeVillage,
      date: '2026-04-15',
      scheduleLabel: '1 晚',
      lineItems: [
        { id: 'chaji-standard', name: '徽派标准间', quantity: 1, unitPrice: 388 },
      ],
      notes: ['到店时出示演示订单号与入住人姓名即可完成前端核验展示。'],
      contactHint: '演示联系人',
      contactName: '沈知行',
      contactPhone: '13800138000',
      contactEmail: demoContactDefaults.email,
      status: '已确认',
      amount: 388,
      paymentMethod: '支付宝',
      createdAt: '2026-04-09 20:10',
      invoiceStatus: '已开票',
    },
    {
      id: 'TH20260410003',
      category: 'guide',
      title: '张老师讲解服务',
      subtitle: '桃花潭诗词文化深度讲解。',
      scenicLabel: '桃花潭景区',
      image: IMAGES.tourGuide,
      date: '2026-04-10',
      scheduleLabel: '09:00 - 11:00',
      lineItems: [
        { id: 'guide-zhang', name: '专业讲解服务', quantity: 1, unitPrice: 200 },
      ],
      notes: ['服务已完成，可继续前往社区页面展示游记与互动内容。'],
      contactHint: '演示联系人',
      contactName: '沈知行',
      contactPhone: '13800138000',
      contactEmail: demoContactDefaults.email,
      status: '已完成',
      amount: 200,
      paymentMethod: '银联支付',
      createdAt: '2026-04-08 11:00',
      invoiceStatus: '已开票',
    },
  ],
  favorites: [
    {
      id: 'taohuatan',
      type: 'scenic',
      name: '桃花潭',
      image: IMAGES.lakeMountain,
      path: '/scenic/taohuatan',
    },
    {
      id: 'one-day',
      type: 'route',
      name: '一日精华游',
      image: IMAGES.lakeMountain,
      path: '/routes/one-day',
    },
    {
      id: 'spring-taohuatan',
      type: 'travelog',
      name: '春日桃花潭：一场关于诗意的旅程',
      image: IMAGES.lakeMountain,
      path: '/community/travelog/spring-taohuatan',
    },
  ],
  invoices: [
    {
      orderId: 'TH20260414002',
      title: '个人',
      email: demoContactDefaults.email,
      status: '已开票',
      createdAt: '2026-04-15',
      amount: 388,
    },
    {
      orderId: 'TH20260415001',
      title: '个人',
      email: demoContactDefaults.email,
      status: '待开票',
      createdAt: '2026-04-15',
      amount: 274,
    },
  ],
};

const DemoAppContext = createContext<DemoAppContextValue | null>(null);

function loadInitialState(): DemoState {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultState;
  }

  try {
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function getOrderStatus(category: DemoBookingDraft['category']) {
  if (category === 'hotel' || category === 'guide') {
    return '已确认';
  }

  return '待出行';
}

export function DemoAppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(loadInitialState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const login = (account?: string) => {
    setState((current) => ({
      ...current,
      isLoggedIn: true,
      user: {
        ...current.user,
        email: account?.includes('@') ? account : current.user.email,
        phone: account && !account.includes('@') ? account : current.user.phone,
      },
    }));

    toast.success('已进入演示账号，现在可以继续查看订单、预约与用户中心内容。');
  };

  const register = (nickname?: string, phone?: string) => {
    setState((current) => ({
      ...current,
      isLoggedIn: true,
      user: {
        ...current.user,
        nickname: nickname || current.user.nickname,
        phone: phone ? `${phone.slice(0, 3)}****${phone.slice(-4)}` : current.user.phone,
      },
    }));

    toast.success('演示账号创建成功，已自动进入个人中心。');
  };

  const logout = () => {
    setState((current) => ({ ...current, isLoggedIn: false }));
    toast.message('已退出演示账号，本地浏览器中的演示订单与收藏会继续保留。');
  };

  const saveBookingDraft = (draft: DemoBookingDraft) => {
    setState((current) => ({
      ...current,
      bookingDraft: draft,
      pendingOrderId: current.pendingOrderId || createOrderId(),
    }));

    toast.success('预约草稿已保存，请继续确认订单信息。');
  };

  const clearBookingDraft = () => {
    setState((current) => ({
      ...current,
      bookingDraft: null,
      pendingOrderId: null,
    }));
  };

  const completePayment = (paymentMethod: string) => {
    if (!state.bookingDraft) {
      toast.error('当前没有待支付的演示订单，请先完成预约选择。');
      return null;
    }

    const order: DemoOrder = {
      ...state.bookingDraft,
      id: state.pendingOrderId || createOrderId(),
      amount: calculateDraftAmount(state.bookingDraft),
      status: getOrderStatus(state.bookingDraft.category),
      paymentMethod,
      createdAt: new Date().toLocaleString('zh-CN', { hour12: false }),
      invoiceStatus: '待开票',
    };

    setState((current) => ({
      ...current,
      isLoggedIn: true,
      latestOrderId: order.id,
      pendingOrderId: null,
      bookingDraft: null,
      orders: [order, ...current.orders],
      invoices: [
        {
          orderId: order.id,
          title: '个人',
          email: order.contactEmail || current.user.email,
          status: '待开票',
          createdAt: order.date,
          amount: order.amount,
        },
        ...current.invoices,
      ],
    }));

    toast.success('演示支付成功，订单已经同步到“我的订单”。');
    return order;
  };

  const submitInvoiceRequest = (payload: { title: string; email: string }) => {
    if (!state.latestOrderId) {
      toast.error('当前还没有可申请发票的演示订单。');
      return;
    }

    setState((current) => ({
      ...current,
      invoices: current.invoices.map((invoice) =>
        invoice.orderId === current.latestOrderId
          ? {
              ...invoice,
              title: payload.title,
              email: payload.email,
              status: '申请已提交',
            }
          : invoice,
      ),
      orders: current.orders.map((order) =>
        order.id === current.latestOrderId
          ? { ...order, invoiceStatus: '申请已提交' }
          : order,
      ),
    }));

    toast.success('发票申请已记录，当前为前端演示状态。');
  };

  const submitRefundRequest = (orderId: string, kind: 'refund' | 'reschedule') => {
    setState((current) => ({
      ...current,
      orders: current.orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: kind === 'refund' ? '退票处理中' : '改签处理中',
            }
          : order,
      ),
    }));

    toast.success(
      kind === 'refund'
        ? '退票申请已提交，当前为演示状态。'
        : '改签申请已提交，当前为演示状态。',
    );
  };

  const toggleFavorite = (item: FavoriteItem) => {
    const exists = state.favorites.some(
      (favorite) => favorite.id === item.id && favorite.type === item.type,
    );

    setState((current) => ({
      ...current,
      favorites: exists
        ? current.favorites.filter(
            (favorite) => !(favorite.id === item.id && favorite.type === item.type),
          )
        : [item, ...current.favorites],
    }));

    toast.message(exists ? '已从收藏中移除。' : '已加入收藏，可在个人中心查看。');
  };

  return (
    <DemoAppContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        saveBookingDraft,
        clearBookingDraft,
        completePayment,
        submitInvoiceRequest,
        submitRefundRequest,
        toggleFavorite,
      }}
    >
      {children}
    </DemoAppContext.Provider>
  );
}

export function useDemoApp() {
  const context = useContext(DemoAppContext);

  if (!context) {
    throw new Error('useDemoApp must be used within DemoAppProvider');
  }

  return context;
}
