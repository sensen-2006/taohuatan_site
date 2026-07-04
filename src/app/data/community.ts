import { IMAGES } from '../components/shared/images';
import type { AuthorItem, GuideItem, TravelogItem } from './types';

export const authorData: AuthorItem[] = [
  {
    id: 'traveler-xiaowang',
    name: '旅行者小棠',
    avatar: '桃',
    role: '旅行写作者',
    city: '南京',
    bio: '偏爱江南水乡与诗意山水，喜欢把值得慢下来的地方写成温柔的旅行故事。',
    signature: '愿每一次出发，都能换回一段值得反复回味的风景。',
    followers: 1200,
    following: 56,
    likes: 3862,
    posts: 28,
    specialties: ['游记创作', '慢旅行', '水乡摄影'],
    coverImage: IMAGES.sunsetLake,
  },
  {
    id: 'photographer-alin',
    name: '摄影师阿岚',
    avatar: '影',
    role: '风光摄影师',
    city: '合肥',
    bio: '长期记录皖南古村与山水，擅长晨雾、建筑和湖景镜头。',
    signature: '最好的光线，往往藏在最安静的时刻。',
    followers: 3500,
    following: 88,
    likes: 5280,
    posts: 45,
    specialties: ['晨雾摄影', '古村取景', '建筑细节'],
    coverImage: IMAGES.bridgeVillage,
  },
  {
    id: 'foodie-xiaochen',
    name: '美食家小辰',
    avatar: '味',
    role: '地方风味作者',
    city: '杭州',
    bio: '喜欢在旅行中寻找一座城市真正的烟火气，也喜欢写藏在巷子里的味道。',
    signature: '一道地方菜，也能讲出一座城的生活故事。',
    followers: 2800,
    following: 92,
    likes: 4210,
    posts: 32,
    specialties: ['地方美食', '旅行攻略', '城市观察'],
    coverImage: IMAGES.tea,
  },
  {
    id: 'mom-ali',
    name: '宝妈阿黎',
    avatar: '亲',
    role: '亲子旅行博主',
    city: '上海',
    bio: '擅长规划兼顾体验、教育与安全感的亲子旅行，让旅途变成孩子的成长课堂。',
    signature: '陪孩子一起看世界，也是重新认识自己。',
    followers: 2100,
    following: 64,
    likes: 2960,
    posts: 19,
    specialties: ['亲子路线', '非遗研学', '家庭住宿'],
    coverImage: IMAGES.family,
  },
];

export const travelogData: TravelogItem[] = [
  {
    id: 'spring-taohuatan',
    title: '春日桃花潭：一场关于诗意的旅程',
    coverImage: IMAGES.lakeMountain,
    authorId: 'traveler-xiaowang',
    date: '2026-04-10',
    likes: 328,
    comments: 56,
    views: 2856,
    tags: ['游记', '桃花潭', '春日'],
    excerpt: '三月的桃花潭不喧闹，薄雾与水面慢慢展开，像一首能走进去的诗。',
    intro: '这篇游记适合展示平台的社区氛围、景点内容深度和用户互动能力。',
    sections: [
      {
        title: '初到桃花潭',
        body: '车刚停下时，眼前的水面和远山都带着薄雾，场景并不浓烈，却很有东方水乡的节制与安静。',
        image: IMAGES.lakeMountain,
      },
      {
        title: '沿古岸慢行',
        body: '真正动人的不是某一处建筑，而是整条古岸和周围街巷那种不急不躁的节奏。',
        image: IMAGES.garden,
      },
      {
        title: '湖上轻泛',
        body: '竹筏慢慢划开水面时，山与倒影被拉得很长，特别适合做首页与答辩中的情绪镜头。',
        image: IMAGES.lakeBoat,
      },
    ],
    commentList: [
      { name: '旅行爱好者', avatar: '旅', text: '看完这篇就想马上出发，氛围感很强。', time: '2 小时前', likes: 12 },
      { name: '古村迷', avatar: '村', text: '桃花潭真的适合慢慢待着，不需要赶景点。', time: '5 小时前', likes: 8 },
      { name: '摄影新手', avatar: '拍', text: '想知道你拍湖上倒影时用的机位。', time: '1 天前', likes: 3 },
    ],
  },
  {
    id: 'chaji-three-days',
    title: '查济古村三日记：在白墙黑瓦之间慢下来',
    coverImage: IMAGES.bridgeVillage,
    authorId: 'photographer-alin',
    date: '2026-04-08',
    likes: 256,
    comments: 42,
    views: 1923,
    tags: ['游记', '查济', '古村'],
    excerpt: '查济最迷人的不是某一座古宅，而是整片村落被时间温柔留下来的样子。',
    intro: '这篇内容适合与查济详情页、路线详情页和住宿模块一起展示。',
    sections: [
      {
        title: '白墙黑瓦与溪桥',
        body: '走进查济后，能明显感受到建筑与水系之间的关系，这种秩序感是很多旅游景区不具备的。',
        image: IMAGES.bridgeVillage,
      },
      {
        title: '院落里的时间',
        body: '午后的院落不喧哗，门窗、砖木和光影会让人自然地放慢步伐。',
        image: IMAGES.huizhouArch,
      },
      {
        title: '适合被反复讲述的古村',
        body: '如果要做课程答辩，查济非常适合承担“文化深度”和“视觉层次”的说明任务。',
        image: IMAGES.garden,
      },
    ],
    commentList: [
      { name: '木作爱好者', avatar: '木', text: '建筑细节写得很有画面感。', time: '3 小时前', likes: 9 },
      { name: '阿禾', avatar: '禾', text: '这种古村真适合住一晚。', time: '8 小时前', likes: 5 },
    ],
  },
  {
    id: 'taipinghu-sunset',
    title: '在太平湖等一场日落，把山水留给黄昏',
    coverImage: IMAGES.sunsetLake,
    authorId: 'photographer-alin',
    date: '2026-04-06',
    likes: 212,
    comments: 31,
    views: 1658,
    tags: ['游记', '太平湖', '日落'],
    excerpt: '当湖面开始发金，远山慢慢收进雾里，整片空间像被放轻了声音。',
    intro: '这篇游记更适合与湖景酒店、摄影路线和高端度假视觉统一展示。',
    sections: [
      {
        title: '湖面开始发亮',
        body: '太平湖的动人之处不在热闹，而在日落前那种越来越安静的光线变化。',
        image: IMAGES.sunsetLake,
      },
      {
        title: '适合放慢节奏',
        body: '如果桃花潭适合讲故事，太平湖更适合讲“气质”。它让平台看起来更完整，也更高端。',
        image: IMAGES.lakeBoat,
      },
    ],
    commentList: [
      { name: '小舟', avatar: '舟', text: '这组湖面色调太适合做答辩背景了。', time: '1 天前', likes: 7 },
    ],
  },
];

export const guideData: GuideItem[] = [
  {
    id: 'taohuatan-guide',
    title: '桃花潭半日游攻略：如何把诗意和体验都看完整',
    coverImage: IMAGES.lakeMountain,
    authorId: 'traveler-xiaowang',
    date: '2026-04-09',
    views: 1856,
    tags: ['攻略', '桃花潭', '半日游'],
    summary: '适合首次到访用户的高完成度攻略，也适合作为答辩中的“信息服务能力”展示。',
    sections: [
      {
        title: '推荐游览顺序',
        body: '建议从游客中心进入，先看主景，再沿古岸慢行，最后体验水面观景或讲解服务。',
        bullets: ['上午光线更柔和', '下午适合慢拍与休闲', '可直接衔接门票预约与讲解服务'],
        image: IMAGES.garden,
      },
      {
        title: '适合答辩展示的亮点',
        body: '桃花潭兼具品牌识别度、文化故事和视觉氛围，是最适合放在首页与主流程中的景点。',
      },
    ],
    helpfulCount: 268,
  },
  {
    id: 'chaji-photo-guide',
    title: '查济古村拍照与取景攻略',
    coverImage: IMAGES.bridgeVillage,
    authorId: 'photographer-alin',
    date: '2026-04-07',
    views: 1432,
    tags: ['攻略', '查济', '摄影'],
    summary: '适合想做内容创作、图文分享或答辩视觉展示的用户。',
    sections: [
      {
        title: '取景重点',
        body: '石桥、溪流、门窗、马头墙都很有层次，阴天和薄雾天更容易拍出东方感。',
        bullets: ['优先拍巷道纵深', '注意晨雾时段', '可搭配人物慢行镜头'],
        image: IMAGES.huizhouArch,
      },
    ],
    helpfulCount: 196,
  },
  {
    id: 'taipinghu-stay-guide',
    title: '太平湖住宿怎么选：从湖景到轻度假',
    coverImage: IMAGES.sunsetLake,
    authorId: 'foodie-xiaochen',
    date: '2026-04-05',
    views: 1210,
    tags: ['攻略', '太平湖', '住宿'],
    summary: '围绕湖景客栈、度假酒店和慢节奏体验给出前端演示版推荐。',
    sections: [
      {
        title: '住湖边还是住城里',
        body: '如果偏向氛围和答辩展示，建议优先湖边；如果追求交通和预算，可选城区配套酒店。',
        bullets: ['湖边更适合视觉展示', '城区更适合转场与中转', '套餐页可承接住宿推荐'],
        image: IMAGES.hotel,
      },
    ],
    helpfulCount: 158,
  },
];

export const authorMap = Object.fromEntries(authorData.map((item) => [item.id, item]));
export const travelogMap = Object.fromEntries(travelogData.map((item) => [item.id, item]));
export const guideMap = Object.fromEntries(guideData.map((item) => [item.id, item]));
