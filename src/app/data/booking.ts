import { IMAGES } from '../components/shared/images';
import type {
  DemoBookingDraft,
  DemoBookingLineItem,
  GuideBookingItem,
  HotelItem,
  PackageItem,
  TicketProduct,
} from './types';

export const ticketProducts: TicketProduct[] = [
  {
    id: 'ticket-taohuatan',
    scenicId: 'taohuatan',
    spotName: '桃花潭景区',
    description: '以诗意山水和临水古岸为核心，适合首次到访与课程答辩主线展示。',
    image: IMAGES.lakeMountain,
    ticketTypes: [
      { id: 'adult', name: '成人票', price: 65, originalPrice: 75 },
      { id: 'student', name: '学生票', price: 35, originalPrice: 40 },
      { id: 'senior', name: '优待票', price: 20, originalPrice: 30, note: '需凭证件核验' },
    ],
  },
  {
    id: 'ticket-chaji',
    scenicId: 'chaji',
    spotName: '查济古村',
    description: '白墙黑瓦与溪桥巷陌交织成村，适合古村建筑与人文内容展示。',
    image: IMAGES.bridgeVillage,
    ticketTypes: [
      { id: 'adult', name: '成人票', price: 58, originalPrice: 68 },
      { id: 'student', name: '学生票', price: 30, originalPrice: 35 },
    ],
  },
  {
    id: 'ticket-taipinghu',
    scenicId: 'taipinghu',
    spotName: '太平湖',
    description: '以湖景度假、游船观光与山水慢游为主题，适合展示高端休闲旅游气质。',
    image: IMAGES.sunsetLake,
    ticketTypes: [
      { id: 'cruise', name: '游船联票', price: 80, originalPrice: 100 },
      { id: 'entry', name: '景区门票', price: 40, originalPrice: 50 },
    ],
  },
  {
    id: 'ticket-combo',
    spotName: '桃花潭 + 查济联票',
    description: '平台主推的一站式组合产品，可直接承接预约、支付和订单演示闭环。',
    image: IMAGES.garden,
    ticketTypes: [
      { id: 'adult-combo', name: '成人联票', price: 108, originalPrice: 143 },
      { id: 'student-combo', name: '学生联票', price: 58, originalPrice: 75 },
    ],
  },
];

export const hotelData: HotelItem[] = [
  {
    id: 'taohuatan-resort',
    name: '桃花潭度假酒店',
    type: '湖景度假酒店',
    rating: 4.8,
    reviews: 326,
    price: 588,
    originalPrice: 788,
    image: IMAGES.hotel,
    location: '桃花潭景区南入口约 800 米',
    description: '临湖而建，适合高端接待、景区度假与课程展示中的品质住宿场景。',
    amenities: ['湖景露台', '双人早餐', '停车位', '静心书吧'],
    rooms: [
      { id: 'resort-queen', name: '豪华大床房', price: 588, bedType: '1 晚 / 2 人' },
      { id: 'resort-twin', name: '山景双床房', price: 688, bedType: '1 晚 / 2 人' },
      { id: 'resort-suite', name: '湖景套房', price: 988, bedType: '1 晚 / 2-3 人' },
    ],
  },
  {
    id: 'chaji-homestay',
    name: '查济古韵民宿',
    type: '徽派精品民宿',
    rating: 4.9,
    reviews: 218,
    price: 388,
    originalPrice: 488,
    image: IMAGES.bridgeVillage,
    location: '查济古村核心片区',
    description: '住进古村院落，适合夜宿查济与徽派生活方式展示。',
    amenities: ['院落茶室', '双人早餐', '拍照庭院', '入住指引'],
    rooms: [
      { id: 'chaji-standard', name: '徽派标准间', price: 388, bedType: '1 晚 / 2 人' },
      { id: 'chaji-queen', name: '古韵大床房', price: 488, bedType: '1 晚 / 2 人' },
      { id: 'chaji-suite', name: '庭院套房', price: 688, bedType: '1 晚 / 2-3 人' },
    ],
  },
  {
    id: 'taipinghu-lodge',
    name: '太平湖湖畔客栈',
    type: '湖景轻度假民宿',
    rating: 4.7,
    reviews: 156,
    price: 458,
    originalPrice: 558,
    image: IMAGES.sunsetLake,
    location: '太平湖观景岸线',
    description: '适合湖区慢游、摄影和轻度假场景，强化平台的生活方式感。',
    amenities: ['湖景房', '观景台', '停车位', '下午茶'],
    rooms: [
      { id: 'lake-twin', name: '湖景双床房', price: 458, bedType: '1 晚 / 2 人' },
      { id: 'lake-queen', name: '湖景大床房', price: 558, bedType: '1 晚 / 2 人' },
    ],
  },
  {
    id: 'jingxian-hotel',
    name: '泾县文旅酒店',
    type: '城市配套酒店',
    rating: 4.5,
    reviews: 432,
    price: 288,
    originalPrice: 398,
    image: IMAGES.huizhouArch,
    location: '泾县城区主干道',
    description: '适合自驾中转、会务接待与综合配套住宿展示。',
    amenities: ['早餐', '停车场', '健身区', '会议室'],
    rooms: [
      { id: 'biz-twin', name: '商务标间', price: 288, bedType: '1 晚 / 2 人' },
      { id: 'biz-queen', name: '商务大床房', price: 358, bedType: '1 晚 / 2 人' },
    ],
  },
];

export const guideBookingData: GuideBookingItem[] = [
  {
    id: 'guide-zhang',
    name: '张老师',
    avatar: '讲',
    rating: 4.9,
    reviews: 326,
    price: 200,
    languages: ['中文', 'English'],
    specialty: '桃花潭诗词文化讲解',
    experience: '8 年',
    tours: 1200,
    intro: '擅长把桃花潭诗意、历史和场景故事讲得清晰动人，适合答辩展示。',
  },
  {
    id: 'guide-li',
    name: '李导',
    avatar: '导',
    rating: 4.8,
    reviews: 218,
    price: 250,
    languages: ['中文', 'English', '日语'],
    specialty: '查济古建筑解读',
    experience: '6 年',
    tours: 860,
    intro: '更适合深度讲解徽派建筑、村落空间与历史脉络。',
  },
  {
    id: 'guide-wang',
    name: '王导',
    avatar: '湖',
    rating: 4.7,
    reviews: 156,
    price: 180,
    languages: ['中文'],
    specialty: '太平湖生态慢游',
    experience: '5 年',
    tours: 650,
    intro: '适合自然景观路线与慢节奏演示场景，讲解方式轻松亲和。',
  },
  {
    id: 'guide-chen',
    name: '陈导',
    avatar: '礼',
    rating: 4.9,
    reviews: 412,
    price: 300,
    languages: ['中文', 'English', 'Français'],
    specialty: '高端文旅接待讲解',
    experience: '10 年',
    tours: 2100,
    intro: '适合正式接待、多语言展示和高品质路线讲解场景。',
  },
];

export const packageData: PackageItem[] = [
  {
    id: 'package-one-day',
    routeId: 'one-day',
    name: '一日精华套餐',
    price: 268,
    originalPrice: 358,
    image: IMAGES.lakeMountain,
    duration: '1 天',
    crowd: '2-6 人',
    rating: 4.9,
    sales: 1856,
    tag: '热销',
    includes: ['桃花潭门票', '查济门票', '往返接驳', '午餐 1 份', '基础讲解'],
    description: '最适合课程答辩主线展示的一站式组合产品。',
  },
  {
    id: 'package-two-day',
    routeId: 'two-day',
    name: '两日深度套餐',
    price: 688,
    originalPrice: 958,
    image: IMAGES.bridgeVillage,
    duration: '2 天 1 晚',
    crowd: '2-4 人',
    rating: 4.8,
    sales: 856,
    tag: '推荐',
    includes: ['联票', '精品民宿', '早餐与正餐', '导游讲解', '湖区体验'],
    description: '可完整展示景点、住宿、套餐、支付与订单能力。',
  },
  {
    id: 'package-family',
    routeId: 'family',
    name: '亲子研学套餐',
    price: 888,
    originalPrice: 1280,
    image: IMAGES.family,
    duration: '2 天 1 晚',
    crowd: '亲子家庭',
    rating: 4.7,
    sales: 432,
    tag: '亲子',
    includes: ['全程门票', '亲子民宿', '手作体验', '研学讲解', '家庭餐食'],
    description: '适合展示平台面向细分客群的产品组织能力。',
  },
  {
    id: 'package-photo',
    routeId: 'photography',
    name: '摄影采风套餐',
    price: 1280,
    originalPrice: 1680,
    image: IMAGES.photography,
    duration: '3 天 2 晚',
    crowd: '2-8 人',
    rating: 4.9,
    sales: 326,
    tag: '高阶',
    includes: ['全程门票', '精选住宿', '机位建议', '专车接驳', '早餐'],
    description: '适合摄影采风、视觉展示与社区内容联动演示。',
  },
];

export const paymentMethods = [
  { id: 'wechat', name: '微信支付', icon: '微' },
  { id: 'alipay', name: '支付宝', icon: '支' },
  { id: 'unionpay', name: '银联支付', icon: '银' },
] as const;

export const demoContactDefaults = {
  name: '沈知行',
  phone: '13800138000',
  email: 'traveler@taohuatan.cn',
};

export function getUpcomingBookingDates(days = 7) {
  const today = new Date();

  return Array.from({ length: days }, (_, index) => {
    const current = new Date(today);
    current.setDate(today.getDate() + index + 1);

    const value = current.toISOString().split('T')[0];
    const weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][current.getDay()];

    return {
      value,
      day: current.getDate(),
      month: current.getMonth() + 1,
      weekday,
    };
  });
}

export function calculateLineItemsAmount(lineItems: DemoBookingLineItem[]) {
  return lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function calculateDraftAmount(draft: DemoBookingDraft) {
  return calculateLineItemsAmount(draft.lineItems);
}

export function getDraftTravelerCount(draft: DemoBookingDraft) {
  return draft.lineItems.reduce((sum, item) => sum + item.quantity, 0);
}

export function formatDraftTravelerSummary(draft: DemoBookingDraft) {
  return draft.lineItems.map((item) => `${item.name} x ${item.quantity}`).join('，');
}

export function buildTicketDraft(args: {
  product: TicketProduct;
  selectedDate: string;
  quantities: Record<string, number>;
}): DemoBookingDraft {
  const lineItems = args.product.ticketTypes
    .filter((type) => (args.quantities[type.id] || 0) > 0)
    .map((type) => ({
      id: `${args.product.id}-${type.id}`,
      name: type.name,
      quantity: args.quantities[type.id],
      unitPrice: type.price,
    }));

  return {
    category: 'ticket',
    title: `${args.product.spotName}在线门票`,
    subtitle: args.product.description,
    scenicLabel: args.product.spotName,
    image: args.product.image,
    date: args.selectedDate,
    lineItems,
    notes: ['电子票将在演示支付后生成，可在成功页和我的订单中继续展示。'],
  };
}

export function buildHotelDraft(args: {
  hotel: HotelItem;
  roomId: string;
  checkInDate: string;
  nights: number;
  roomCount: number;
}): DemoBookingDraft {
  const room = args.hotel.rooms.find((item) => item.id === args.roomId) || args.hotel.rooms[0];

  return {
    category: 'hotel',
    title: `${args.hotel.name} - ${room.name}`,
    subtitle: args.hotel.description,
    scenicLabel: args.hotel.location,
    image: args.hotel.image,
    date: args.checkInDate,
    scheduleLabel: `${args.nights} 晚`,
    lineItems: [
      {
        id: room.id,
        name: room.name,
        quantity: args.roomCount,
        unitPrice: room.price * args.nights,
      },
    ],
    notes: ['演示订单默认包含入住指引与到店核验提示。'],
  };
}

export function buildGuideDraft(args: {
  guide: GuideBookingItem;
  serviceDate: string;
  sessionLabel: string;
}): DemoBookingDraft {
  return {
    category: 'guide',
    title: `${args.guide.name}讲解服务`,
    subtitle: args.guide.intro,
    scenicLabel: args.guide.specialty,
    image: IMAGES.tourGuide,
    date: args.serviceDate,
    scheduleLabel: args.sessionLabel,
    lineItems: [
      {
        id: args.guide.id,
        name: '专业讲解服务',
        quantity: 1,
        unitPrice: args.guide.price,
      },
    ],
    notes: ['导游服务为前端演示预约，可在成功页查看服务时段。'],
  };
}

export function buildPackageDraft(args: {
  pkg: PackageItem;
  travelDate: string;
  travelers: number;
}): DemoBookingDraft {
  return {
    category: 'package',
    title: args.pkg.name,
    subtitle: args.pkg.description,
    scenicLabel: '桃花潭 / 查济 / 太平湖',
    image: args.pkg.image,
    date: args.travelDate,
    scheduleLabel: args.pkg.duration,
    lineItems: [
      {
        id: args.pkg.id,
        name: `${args.pkg.name}（每人）`,
        quantity: args.travelers,
        unitPrice: args.pkg.price,
      },
    ],
    notes: ['套餐订单为前端演示闭环，不接真实库存与排期系统。'],
  };
}
