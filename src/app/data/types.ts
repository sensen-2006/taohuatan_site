export interface ScenicActivity {
  title: string;
  description: string;
  icon: string;
}

export interface ScenicItem {
  id: string;
  name: string;
  englishName: string;
  category: string;
  rating: number;
  reviews: number;
  priceLabel: string;
  openingHours: string;
  address: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  highlights: string[];
  tips: string[];
  history: string;
  gallery: string[];
  bannerImage: string;
  cardImage: string;
  bestSeason: string;
  travelDuration: string;
  activities: ScenicActivity[];
}

export interface RouteTimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface RouteItem {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  crowd: string;
  rating: number;
  priceLabel: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  stops: string[];
  image: string;
  timeline: RouteTimelineItem[];
  includes: string[];
  excludes: string[];
  notes: string[];
}

export interface AuthorItem {
  id: string;
  name: string;
  avatar: string;
  role: string;
  city: string;
  bio: string;
  signature: string;
  followers: number;
  following: number;
  likes: number;
  posts: number;
  specialties: string[];
  coverImage: string;
}

export interface TravelogComment {
  name: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
}

export interface TravelogSection {
  title: string;
  body: string;
  image?: string;
}

export interface TravelogItem {
  id: string;
  title: string;
  coverImage: string;
  authorId: string;
  date: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
  excerpt: string;
  intro: string;
  sections: TravelogSection[];
  commentList: TravelogComment[];
}

export interface GuideSection {
  title: string;
  body: string;
  bullets?: string[];
  image?: string;
}

export interface GuideItem {
  id: string;
  title: string;
  coverImage: string;
  authorId: string;
  date: string;
  views: number;
  tags: string[];
  summary: string;
  sections: GuideSection[];
  helpfulCount: number;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  important: boolean;
  summary: string;
  introduction: string;
  bullets?: string[];
  paragraphs: string[];
  issuer: string;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  note?: string;
}

export interface TicketProduct {
  id: string;
  scenicId?: string;
  spotName: string;
  description: string;
  image: string;
  ticketTypes: TicketType[];
}

export interface HotelRoom {
  id: string;
  name: string;
  price: number;
  bedType: string;
}

export interface HotelItem {
  id: string;
  name: string;
  type: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  image: string;
  location: string;
  description: string;
  amenities: string[];
  rooms: HotelRoom[];
}

export interface GuideBookingItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  price: number;
  languages: string[];
  specialty: string;
  experience: string;
  tours: number;
  intro: string;
}

export interface PackageItem {
  id: string;
  routeId?: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  duration: string;
  crowd: string;
  rating: number;
  sales: number;
  tag: string;
  includes: string[];
  description: string;
}

export interface DemoBookingLineItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface DemoBookingDraft {
  category: 'ticket' | 'hotel' | 'guide' | 'package';
  title: string;
  subtitle: string;
  scenicLabel: string;
  image: string;
  date: string;
  scheduleLabel?: string;
  lineItems: DemoBookingLineItem[];
  notes?: string[];
  contactHint?: string;
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
}

export interface DemoOrder extends DemoBookingDraft {
  id: string;
  status: string;
  amount: number;
  paymentMethod: string;
  createdAt: string;
  invoiceStatus: string;
}
