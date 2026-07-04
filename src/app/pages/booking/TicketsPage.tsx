import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageBanner } from '../../components/shared/PageBanner';
import { buildTicketDraft, getUpcomingBookingDates, ticketProducts } from '../../data/booking';
import { useDemoApp } from '../../providers/DemoAppProvider';

const DATE_OPTIONS = getUpcomingBookingDates(7);

export function TicketsPage() {
  const navigate = useNavigate();
  const { saveBookingDraft } = useDemoApp();
  const [selectedProductId, setSelectedProductId] = useState(ticketProducts[0].id);
  const [selectedDate, setSelectedDate] = useState(DATE_OPTIONS[0].value);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const selectedProduct =
    ticketProducts.find((item) => item.id === selectedProductId) || ticketProducts[0];
  const selectedLineItems = selectedProduct.ticketTypes.filter(
    (ticketType) => (quantities[ticketType.id] || 0) > 0,
  );
  const totalCount = selectedLineItems.reduce(
    (sum, ticketType) => sum + (quantities[ticketType.id] || 0),
    0,
  );
  const totalAmount = selectedLineItems.reduce(
    (sum, ticketType) => sum + (quantities[ticketType.id] || 0) * ticketType.price,
    0,
  );

  const handleQuantityChange = (ticketTypeId: string, nextValue: number) => {
    setQuantities((current) => ({ ...current, [ticketTypeId]: Math.max(0, nextValue) }));
  };

  const handleSubmit = () => {
    if (totalCount === 0) {
      toast.error('请先选择至少 1 张票，再继续预约。');
      return;
    }

    saveBookingDraft(buildTicketDraft({ product: selectedProduct, selectedDate, quantities }));
    navigate('/booking/confirm');
  };

  return (
    <div>
      <PageBanner
        image={selectedProduct.image}
        title="门票预约"
        subtitle="选择景点、日期、票种与人数，进入完整的前端预约演示流程。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '门票预约' },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-[#24343B]">1. 选择景点</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {ticketProducts.map((product) => {
                  const active = product.id === selectedProductId;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        setSelectedProductId(product.id);
                        setQuantities({});
                      }}
                      className={`overflow-hidden rounded-[24px] border text-left ${
                        active
                          ? 'border-[#C9932C] bg-white shadow-lg'
                          : 'border-gray-200 bg-white hover:border-[#d9c7a8] hover:shadow-sm'
                      }`}
                    >
                      <div className="h-28 overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.spotName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-bold text-[#24343B]">{product.spotName}</p>
                        <p className="mt-2 text-xs leading-6 text-[#6A7A80]">
                          {product.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-[#24343B]">2. 选择日期</h2>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {DATE_OPTIONS.map((option) => {
                  const active = option.value === selectedDate;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSelectedDate(option.value)}
                      className={`min-w-[92px] shrink-0 rounded-[22px] border px-4 py-3 text-center ${
                        active
                          ? 'border-[#C9932C] bg-[#C9932C] text-white'
                          : 'border-gray-200 bg-white text-[#52636A] hover:border-[#d9c7a8]'
                      }`}
                    >
                      <p className="text-xs">{option.weekday}</p>
                      <p className="mt-1 text-2xl font-bold">{option.day}</p>
                      <p className="text-xs">{option.month} 月</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-[#24343B]">3. 选择票种与人数</h2>
              <div className="space-y-4">
                {selectedProduct.ticketTypes.map((ticketType) => {
                  const quantity = quantities[ticketType.id] || 0;
                  return (
                    <div
                      key={ticketType.id}
                      className="flex flex-col gap-4 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-[#24343B]">{ticketType.name}</h3>
                          {ticketType.note ? (
                            <span className="rounded-full bg-[#EEF2E8] px-3 py-1 text-xs text-[#6F8F63]">
                              {ticketType.note}
                            </span>
                          ) : null}
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#C9932C]">￥{ticketType.price}</span>
                          {ticketType.originalPrice ? (
                            <span className="text-sm text-gray-300 line-through">
                              ￥{ticketType.originalPrice}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end md:self-auto">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(ticketType.id, quantity - 1)}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F4] text-[#52636A] hover:bg-[#E8EBEB]"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center text-lg font-bold text-[#24343B]">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(ticketType.id, quantity + 1)}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9932C] text-white hover:bg-[#b58323]"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24 rounded-[28px] border border-[#E8E1D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,242,233,0.98))] p-7 shadow-sm">
              <p className="text-xs tracking-[0.22em] text-[#8D7556]">ORDER SUMMARY</p>
              <h3 className="mt-3 text-2xl font-bold text-[#24343B]">预约摘要</h3>
              <div className="mt-6 space-y-4 text-sm text-[#52636A]">
                <div className="flex items-center justify-between gap-4">
                  <span>景点</span>
                  <span className="text-right font-medium text-[#24343B]">
                    {selectedProduct.spotName}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>日期</span>
                  <span className="font-medium text-[#24343B]">{selectedDate}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>人数</span>
                  <span className="font-medium text-[#24343B]">{totalCount} 人</span>
                </div>
                {selectedLineItems.map((ticketType) => (
                  <div
                    key={ticketType.id}
                    className="flex items-center justify-between gap-4 border-t border-[#EFE8DB] pt-4"
                  >
                    <span>
                      {ticketType.name} x {quantities[ticketType.id]}
                    </span>
                    <span className="font-medium text-[#24343B]">
                      ￥{ticketType.price * (quantities[ticketType.id] || 0)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-[#E8E1D2] pt-5">
                <div className="flex items-end justify-between">
                  <span className="text-sm text-[#6A7A80]">合计金额</span>
                  <span className="text-3xl font-bold text-[#C9932C]">￥{totalAmount}</span>
                </div>
                <p className="mt-3 text-xs leading-6 text-[#7A868B]">
                  当前订单仅使用前端状态保存，不连接真实库存、短信与支付系统。
                </p>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-6 w-full rounded-full bg-[#C9932C] py-3 text-sm font-semibold text-white hover:bg-[#b58323]"
              >
                立即预订
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
