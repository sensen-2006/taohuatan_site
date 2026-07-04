import { createBrowserRouter } from 'react-router';
import { Layout, HomeLayout } from './components/shared/Layout';
import { Home } from './pages/Home';
import { ScenicOverview } from './pages/scenic/ScenicOverview';
import { ScenicDetail } from './pages/scenic/ScenicDetail';
import { RoutesOverview } from './pages/routes/RoutesOverview';
import { RouteDetail } from './pages/routes/RouteDetail';
import { RouteMap } from './pages/routes/RouteMap';
import { BookingHome } from './pages/booking/BookingHome';
import { TicketsPage } from './pages/booking/TicketsPage';
import { HotelsPage } from './pages/booking/HotelsPage';
import { GuidesPage } from './pages/booking/GuidesPage';
import { PackagesPage } from './pages/booking/PackagesPage';
import { OrderConfirm, PaymentPage, BookingSuccess, RefundPage, InvoicePage } from './pages/booking/BookingFlow';
import { CommunityHome } from './pages/community/CommunityHome';
import { TravelogList, TravelogDetail, GuideList, GuideDetail, GalleryPage, PublishPage, AuthorProfile, CommentsPage, DraftsPage, ReportPage } from './pages/community/CommunityPages';
import { LoginPage, RegisterPage } from './pages/user/AuthPages';
import { UserLayout, UserDashboard, MyBookings, MyFavorites, MyComments, MyTravelogs, SettingsPage, MessagesPage, CouponsPage, InvoicesPage, SecurityPage, NotificationsPage, PrivacySettingsPage, LanguagePage } from './pages/user/UserCenter';
import { UserOrdersPage } from './pages/user/UserOrdersPage';
import { AboutPage, ContactPage, ContactSuccess, ServiceCenter, FAQPage, TransportPage, ParkingPage, AnnouncementsPage, AnnouncementDetail, PrivacyPolicyPage, TermsPage, NotFoundPage } from './pages/support/SupportPages';
import { SearchPage } from './pages/SearchPage';

export const router = createBrowserRouter([
  // Home with transparent header
  {
    path: '/',
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
    ],
  },
  // Auth pages (no header/footer)
  { path: '/user/login', Component: LoginPage },
  { path: '/user/register', Component: RegisterPage },
  // User center (custom layout)
  {
    path: '/user',
    Component: UserLayout,
    children: [
      { index: true, Component: UserDashboard },
      { path: 'bookings', Component: MyBookings },
      { path: 'orders', Component: UserOrdersPage },
      { path: 'favorites', Component: MyFavorites },
      { path: 'comments', Component: MyComments },
      { path: 'travelogs', Component: MyTravelogs },
      { path: 'messages', Component: MessagesPage },
      { path: 'coupons', Component: CouponsPage },
      { path: 'invoices', Component: InvoicesPage },
      { path: 'settings', Component: SettingsPage },
      { path: 'security', Component: SecurityPage },
      { path: 'notifications', Component: NotificationsPage },
      { path: 'privacy', Component: PrivacySettingsPage },
      { path: 'privacy-settings', Component: PrivacySettingsPage },
      { path: 'language', Component: LanguagePage },
    ],
  },
  // All other pages with standard header
  {
    path: '/',
    Component: Layout,
    children: [
      // Scenic
      { path: 'scenic', Component: ScenicOverview },
      { path: 'scenic/:id', Component: ScenicDetail },
      // Routes
      { path: 'routes', Component: RoutesOverview },
      { path: 'routes/map', Component: RouteMap },
      { path: 'routes/:id', Component: RouteDetail },
      // Booking
      { path: 'booking', Component: BookingHome },
      { path: 'booking/tickets', Component: TicketsPage },
      { path: 'booking/hotels', Component: HotelsPage },
      { path: 'booking/guides', Component: GuidesPage },
      { path: 'booking/packages', Component: PackagesPage },
      { path: 'booking/confirm', Component: OrderConfirm },
      { path: 'booking/payment', Component: PaymentPage },
      { path: 'booking/success', Component: BookingSuccess },
      { path: 'booking/refund', Component: RefundPage },
      { path: 'booking/invoice', Component: InvoicePage },
      // Community
      { path: 'community', Component: CommunityHome },
      { path: 'community/travelogs', Component: TravelogList },
      { path: 'community/travelog/:id', Component: TravelogDetail },
      { path: 'community/guides', Component: GuideList },
      { path: 'community/guide/:id', Component: GuideDetail },
      { path: 'community/gallery', Component: GalleryPage },
      { path: 'community/publish', Component: PublishPage },
      { path: 'community/author/:id', Component: AuthorProfile },
      { path: 'community/comments', Component: CommentsPage },
      { path: 'community/drafts', Component: DraftsPage },
      { path: 'community/report', Component: ReportPage },
      // Support
      { path: 'support/about', Component: AboutPage },
      { path: 'support/contact', Component: ContactPage },
      { path: 'support/contact-success', Component: ContactSuccess },
      { path: 'support/service-center', Component: ServiceCenter },
      { path: 'support/faq', Component: FAQPage },
      { path: 'support/transport', Component: TransportPage },
      { path: 'support/parking', Component: ParkingPage },
      { path: 'support/announcements', Component: AnnouncementsPage },
      { path: 'support/announcement/:id', Component: AnnouncementDetail },
      { path: 'support/privacy', Component: PrivacyPolicyPage },
      { path: 'support/terms', Component: TermsPage },
      { path: 'search', Component: SearchPage },
      // 404
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
