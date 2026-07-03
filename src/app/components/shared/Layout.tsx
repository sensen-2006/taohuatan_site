import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ transparentHeader = false }: { transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen bg-[#F6F8F8] flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header transparent={transparentHeader} />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}

export function HomeLayout() {
  return <Layout transparentHeader />;
}
