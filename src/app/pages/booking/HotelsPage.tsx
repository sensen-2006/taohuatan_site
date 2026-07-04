import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Filter, MapPin, Star } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageBanner } from '../../components/shared/PageBanner';
import { buildHotelDraft, getUpcomingBookingDates, hotelData } from '../../data/booking';
import { useDemoApp } from '../../providers/DemoAppProvider';

const DATE_OPTIONS = getUpcomingBookingDates(10);
const FILTERS = ['全部', '湖景度假酒店', '徽派精品民宿', '湖景轻度假民宿', '城市配套酒店'];

export function HotelsPage() {
  const navigate = useNavigate();
  const { saveBookingDraft } = useDemoApp();
  const [activeFilter, setActiveFilter] = useState('全部');
  const [checkInDate, setCheckInDate] = useState(DATE_OPTIONS[0].value);
  const [nights, setNights] = useState(1);
  const [roomCount, setRoomCount] = useState(1);

  const filteredHotels = hotelData.filter(
    (hotel) => activeFilter === '全部' || hotel.type === activeFilter,
  );

  const handleBookRoom = (hotelId: string, roomId: string) => {
    const hotel = hotelData.find((item) => item.id === hotelId);
    if (!hotel) {
      toast.error('当前房型信息不存在，请重新选择。');
      return;
    }

    saveBookingDraft(buildHotelDraft({ hotel, roomId, checkInDate, nights, roomCount }));
    navigate('/booking/confirm');
  };

  return (
    <div>
      <PageBanner
        image={hotelData[0].image}
        title="酒店民宿预约"
        subtitle="用于展示桃花潭、查济与太平湖周边的演示住宿产品，可直接进入确认页。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '酒店民宿' },
        ]}
      />

      <section className="border-b border-gray-100 bg-white px-8 py-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 xl:grid-cols-[1.3fr_1fr_auto_auto] xl:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="h-4 w-4 text-[#7A868B]" />
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm ${
                  activeFilter === filter
                    ? 'bg-[#486B72] text-white'
                    : 'bg-[#F3F4F4] text-[#52636A] hover:bg-[#E8EBEB]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-4 py-3 text-sm text-[#52636A]">
            <span>入住日期</span>
            <select
              value={checkInDate}
              onChange={(event) => setCheckInDate(event.target.value)}
              className="bg-transparent text-[#24343B] outline-none"
            >
              {DATE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value} {option.weekday}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-3 rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-4 py-3 text-sm text-[#52636A]">
            <span>住几晚</span>
            <select
              value={nights}
              onChange={(event) => setNights(Number(event.target.value))}
              className="bg-transparent text-[#24343B] outline-none"
            >
              {[1, 2, 3].map((value) => (
                <option key={value} value={value}>
                  {value} 晚
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-3 rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-4 py-3 text-sm text-[#52636A]">
            <span>房间数</span>
            <select
              value={roomCount}
              onChange={(event) => setRoomCount(Number(event.target.value))}
              className="bg-transparent text-[#24343B] outline-none"
            >
              {[1, 2, 3].map((value) => (
                <option key={value} value={value}>
                  {value} 间
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1280px] space-y-6">
          {filteredHotels.map((hotel) => (
            <article
              key={hotel.id}
              className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div className="h-64 shrink-0 overflow-hidden md:h-auto md:w-80">
                  <ImageWithFallback
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 p-8">
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-bold text-[#24343B]">{hotel.name}</h2>
                        <span className="rounded-full bg-[#E8F1F2] px-3 py-1 text-xs text-[#486B72]">
                          {hotel.type}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-[#66767D]">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-4 w-4 fill-[#C9932C] text-[#C9932C]" />
                          {hotel.rating}（{hotel.reviews} 条）
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {hotel.location}
                        </span>
                      </div>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#52636A]">
                        {hotel.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {hotel.amenities.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#E8E1D2] bg-[#FAF7F1] px-3 py-1 text-xs text-[#7A868B]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[22px] bg-[#FAF7F1] px-5 py-4 text-right">
                      <p className="text-sm text-[#7A868B]">参考起价</p>
                      <p className="mt-1 text-3xl font-bold text-[#C9932C]">￥{hotel.price}</p>
                      <p className="mt-1 text-xs text-gray-300 line-through">￥{hotel.originalPrice}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {hotel.rooms.map((room) => (
                      <div
                        key={room.id}
                        className="flex flex-col gap-4 rounded-[22px] bg-[#F7F8F8] px-5 py-4 md:flex-row md:items-center md:justify-between"
                      >
                        <div>
                          <h3 className="text-sm font-bold text-[#24343B]">{room.name}</h3>
                          <p className="mt-1 text-xs text-[#7A868B]">{room.bedType}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <div className="text-sm text-[#52636A]">
                            <span className="font-bold text-[#C9932C]">￥{room.price * nights}</span>
                            <span className="text-xs text-[#7A868B]"> / 间</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleBookRoom(hotel.id, room.id)}
                            className="rounded-full bg-[#C9932C] px-5 py-2 text-sm font-semibold text-white hover:bg-[#b58323]"
                          >
                            预约该房型
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
