import type { AnnouncementItem } from './types';

export const announcementData: AnnouncementItem[] = [
  {
    id: 'spring-hours',
    title: '桃花潭景区春季开放时间调整通知',
    category: '景区公告',
    date: '2026-03-20',
    important: true,
    summary: '为配合春季客流与活动安排，桃花潭景区开放时间调整为 08:00 - 17:30。',
    introduction: '为更好承接春季游览高峰，桃花潭景区对开放时间与现场服务节奏进行如下调整。',
    bullets: ['开放时间调整为 08:00 - 17:30', '16:50 后停止当日现场检票', '讲解服务需提前在线预约'],
    paragraphs: [
      '请已预约游客合理安排出发时间，尽量错峰到达。',
      '本次调整同步适用于前端演示中的门票预约、订单确认与出行提示文案。',
    ],
    issuer: '桃花潭景区运营中心',
  },
  {
    id: 'chaji-maintenance',
    title: '查济古村部分街巷维护提示',
    category: '出行提示',
    date: '2026-03-16',
    important: false,
    summary: '查济古村西侧两段石板路进行日常维护，建议游客按照现场引导绕行。',
    introduction: '为保障古村街巷安全与游览品质，查济古村近期将对局部路段进行小范围维护。',
    paragraphs: [
      '维护期间主游览线路保持开放，摄影、住宿与导览服务可照常体验。',
      '如需更安静的游览体验，建议优先选择上午时段进入村落。',
    ],
    issuer: '查济古村管理服务处',
  },
  {
    id: 'holiday-booking',
    title: '清明假期预约量上升提示',
    category: '预约提醒',
    date: '2026-03-28',
    important: true,
    summary: '假期期间门票、住宿与讲解服务预约量上升，建议提前完成在线预订。',
    introduction: '清明假期为皖南文旅出行高峰时段，平台建议游客尽量提前完成预约。',
    bullets: ['门票产品可提前 7 天预约', '热门民宿房型数量有限', '讲解服务建议至少提前 1 天锁定'],
    paragraphs: [
      '当前项目为前端演示版，库存、订单与支付均为 mock 数据展示。',
      '答辩演示时可通过该公告页展示平台的通知触达与服务说明能力。',
    ],
    issuer: '平台运营组',
  },
];

export const announcementMap = Object.fromEntries(
  announcementData.map((item) => [item.id, item]),
);
