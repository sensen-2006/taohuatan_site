import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  ArrowLeft,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  RefreshCw,
  Shield,
} from 'lucide-react';
import { toast } from 'sonner';
import { ContentNotFound } from '../../components/shared/ContentNotFound';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageBanner } from '../../components/shared/PageBanner';
import {
  calculateDraftAmount,
  demoContactDefaults,
  formatDraftTravelerSummary,
  getDraftTravelerCount,
  paymentMethods,
} from '../../data/booking';
import { useDemoApp } from '../../providers/DemoAppProvider';
import type { DemoBookingDraft, DemoOrder } from '../../data/types';

const STEPS = ['选择产品', '确认订单', '在线支付', '预约成功'];

function StepHeader({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
      {STEPS.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              index <= activeIndex ? 'bg-[#C9932C] text-white' : 'bg-[#E5E7E8] text-[#A1A9AD]'
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm ${
              index <= activeIndex ? 'font-medium text-[#24343B]' : 'text-[#A1A9AD]'
            }`}
          >
            {step}
          </span>
          {index < STEPS.length - 1 ? (
            <ChevronRight className="h-4 w-4 text-[#D3D8DA]" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function getCategoryLabel(category: DemoBookingDraft['category']) {
  switch (category) {
    case 'hotel':
      return '住宿预约';
    case 'guide':
      return '讲解服务';
    case 'package':
      return '套餐预约';
    default:
      return '门票预约';
  }
}

function getPaymentMethodName(id: string) {
  return paymentMethods.find((item) => item.id === id)?.name || '微信支付';
}

function formatCurrency(value: number) {
  return `￥${value.toFixed(2)}`;
}

function OrderSummaryCard({
  draft,
  showContact,
}: {
  draft: DemoBookingDraft;
  showContact?: boolean;
}) {
  const amount = calculateDraftAmount(draft);

  return (
    <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="h-28 w-full shrink-0 overflow-hidden rounded-[22px] sm:w-44">
          <ImageWithFallback
            src={draft.image}
            alt={draft.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E8F1F2] px-3 py-1 text-xs text-[#486B72]">
              {getCategoryLabel(draft.category)}
            </span>
            <span className="rounded-full bg-[#FAF7F1] px-3 py-1 text-xs text-[#8D7556]">
              {draft.scenicLabel}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-[#24343B]">{draft.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#52636A]">{draft.subtitle}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 rounded-[24px] bg-[#F7F8F8] p-6 md:grid-cols-2">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#7A868B]">预约日期</span>
          <span className="font-medium text-[#24343B]">{draft.date}</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#7A868B]">人数 / 数量</span>
          <span className="font-medium text-[#24343B]">{getDraftTravelerCount(draft)}</span>
        </div>
        {draft.scheduleLabel ? (
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[#7A868B]">时段 / 时长</span>
            <span className="font-medium text-[#24343B]">{draft.scheduleLabel}</span>
          </div>
        ) : null}
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#7A868B]">预约内容</span>
          <span className="text-right font-medium text-[#24343B]">
            {formatDraftTravelerSummary(draft)}
          </span>
        </div>
        {showContact ? (
          <>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-[#7A868B]">联系人</span>
              <span className="font-medium text-[#24343B]">{draft.contactName}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-[#7A868B]">手机号</span>
              <span className="font-medium text-[#24343B]">{draft.contactPhone}</span>
            </div>
          </>
        ) : null}
      </div>

      <div className="mt-6 space-y-3">
        {draft.lineItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b border-[#EFEFEF] pb-3 text-sm"
          >
            <span className="text-[#52636A]">
              {item.name} x {item.quantity}
            </span>
            <span className="font-medium text-[#24343B]">
              {formatCurrency(item.unitPrice * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-end justify-between">
        <span className="text-sm text-[#7A868B]">合计金额</span>
        <span className="text-3xl font-bold text-[#C9932C]">{formatCurrency(amount)}</span>
      </div>
    </div>
  );
}

function OrderEmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <ContentNotFound
      title={title}
      description={description}
      backTo="/booking"
      backLabel="返回在线预约"
    />
  );
}

export function OrderConfirm() {
  const navigate = useNavigate();
  const { bookingDraft, saveBookingDraft } = useDemoApp();
  const [contactName, setContactName] = useState(
    bookingDraft?.contactName || demoContactDefaults.name,
  );
  const [contactPhone, setContactPhone] = useState(
    bookingDraft?.contactPhone || demoContactDefaults.phone,
  );
  const [contactEmail, setContactEmail] = useState(
    bookingDraft?.contactEmail || demoContactDefaults.email,
  );

  if (!bookingDraft) {
    return (
      <OrderEmptyState
        title="当前还没有待确认的预约订单"
        description="请先从门票、酒店、导游或套餐页面选择一个产品，再继续演示下单流程。"
      />
    );
  }

  const handleSubmit = () => {
    if (!contactName.trim()) {
      toast.error('请填写联系人姓名。');
      return;
    }

    if (!/^1\\d{10}$/.test(contactPhone.trim())) {
      toast.error('请输入 11 位手机号，用于演示订单确认。');
      return;
    }

    saveBookingDraft({
      ...bookingDraft,
      contactName: contactName.trim(),
      contactPhone: contactPhone.trim(),
      contactEmail: contactEmail.trim() || demoContactDefaults.email,
    });
    navigate('/booking/payment');
  };

  return (
    <div>
      <PageBanner
        image={bookingDraft.image}
        title="确认订单"
        subtitle="请核对预约摘要，并补齐联系人信息后继续支付。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '确认订单' },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1080px]">
          <StepHeader activeIndex={1} />

          <OrderSummaryCard draft={bookingDraft} />

          <div className="mt-8 rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8D7556]">CONTACT</p>
              <h3 className="text-2xl font-bold text-[#24343B]">联系人与出行信息</h3>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[#52636A]">联系人</span>
                <input
                  value={contactName}
                  onChange={(event) => setContactName(event.target.value)}
                  className="w-full rounded-[18px] border border-[#E5E7E8] bg-[#F7F8F8] px-4 py-3 text-sm outline-none transition focus:border-[#C9932C]"
                  placeholder="请输入联系人姓名"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-[#52636A]">手机号</span>
                <input
                  value={contactPhone}
                  onChange={(event) => setContactPhone(event.target.value)}
                  className="w-full rounded-[18px] border border-[#E5E7E8] bg-[#F7F8F8] px-4 py-3 text-sm outline-none transition focus:border-[#C9932C]"
                  placeholder="请输入手机号"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-[#52636A]">邮箱（选填）</span>
                <input
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.target.value)}
                  className="w-full rounded-[18px] border border-[#E5E7E8] bg-[#F7F8F8] px-4 py-3 text-sm outline-none transition focus:border-[#C9932C]"
                  placeholder="用于接收演示订单通知"
                />
              </label>
            </div>

            <div className="mt-6 rounded-[22px] bg-[#FAF7F1] px-5 py-4 text-sm leading-7 text-[#6A7A80]">
              演示提示：当前为前端闭环，联系人信息仅保存在浏览器本地状态中，不会提交至真实后端。
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-sm text-[#52636A] transition-colors hover:text-[#24343B]"
            >
              <ArrowLeft className="h-4 w-4" />
              返回在线预约
            </Link>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-full bg-[#C9932C] px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b58323]"
            >
              提交订单
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PaymentPage() {
  const navigate = useNavigate();
  const { bookingDraft, pendingOrderId, completePayment } = useDemoApp();
  const [methodId, setMethodId] = useState('wechat');
  const [countdown, setCountdown] = useState(29 * 60 + 58);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((current) => (current > 0 ? current - 1 : current));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (!bookingDraft) {
    return (
      <OrderEmptyState
        title="当前没有待支付的预约订单"
        description="如果你是直接访问此页面，请先完成预约选择与订单确认。"
      />
    );
  }

  const amount = calculateDraftAmount(bookingDraft);
  const paymentMethodName = getPaymentMethodName(methodId);
  const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
  const seconds = String(countdown % 60).padStart(2, '0');

  const handlePayment = () => {
    const order = completePayment(paymentMethodName);

    if (order) {
      navigate('/booking/success');
    }
  };

  return (
    <div>
      <PageBanner
        image={bookingDraft.image}
        title="在线支付"
        subtitle="订单号、金额与支付方式均来自当前预约草稿，便于答辩展示前后对应。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '在线支付' },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[760px]">
          <StepHeader activeIndex={2} />

          <div className="rounded-[28px] border border-[#E8E1D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,242,233,0.98))] p-8 text-center shadow-sm">
            <p className="text-sm text-[#7A868B]">待支付订单号</p>
            <p className="mt-2 text-lg font-semibold tracking-[0.08em] text-[#24343B]">
              {pendingOrderId}
            </p>
            <p className="mt-5 text-sm text-[#7A868B]">应付金额</p>
            <p className="mt-2 text-5xl font-bold text-[#C9932C]">{formatCurrency(amount)}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F6E7E5] px-4 py-2 text-sm text-[#9B4C46]">
              <Clock className="h-4 w-4" />
              请在 {minutes}:{seconds} 内完成演示支付
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#24343B]">选择支付方式</h3>
            <div className="mt-6 space-y-3">
              {paymentMethods.map((item) => {
                const active = item.id === methodId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMethodId(item.id)}
                    className={`flex w-full items-center gap-4 rounded-[22px] border px-5 py-4 text-left transition-all ${
                      active
                        ? 'border-[#C9932C] bg-[#FBF4E7]'
                        : 'border-gray-200 bg-white hover:border-[#d9c7a8]'
                    }`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F3F4F4] text-sm font-bold text-[#486B72]">
                      {item.icon}
                    </span>
                    <span className="flex-1 text-sm font-medium text-[#24343B]">
                      {item.name}
                    </span>
                    {active ? <CheckCircle className="h-5 w-5 text-[#C9932C]" /> : null}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-[22px] bg-[#F7F8F8] px-5 py-4 text-sm leading-7 text-[#52636A]">
              演示提示：点击“确认支付”后，会直接模拟支付成功，并把订单写入本地“我的订单”列表。
            </div>
          </div>

          <button
            type="button"
            onClick={handlePayment}
            className="mt-8 w-full rounded-full bg-[#C9932C] py-4 text-lg font-semibold text-white transition-colors hover:bg-[#b58323]"
          >
            确认支付 {formatCurrency(amount)}
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#7A868B]">
            <Shield className="h-4 w-4" />
            当前为前端演示支付，不连接真实微信、支付宝或银联网关。
          </p>
        </div>
      </section>
    </div>
  );
}

export function BookingSuccess() {
  const { latestOrderId, orders } = useDemoApp();
  const order = orders.find((item) => item.id === latestOrderId) || null;

  if (!order) {
    return (
      <OrderEmptyState
        title="还没有可展示的成功订单"
        description="请先完成一次预约与演示支付，再回来查看成功页。"
      />
    );
  }

  return (
    <div>
      <section className="px-8 py-20">
        <div className="mx-auto max-w-[760px]">
          <StepHeader activeIndex={3} />

          <div className="rounded-[32px] border border-gray-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2E8]">
              <CheckCircle className="h-10 w-10 text-[#6F8F63]" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-[#24343B]">预约成功</h2>
            <p className="mt-3 text-sm text-[#52636A]">
              订单号 {order.id} 已生成，并已同步到“我的订单”。
            </p>

            <div className="mt-8 rounded-[24px] bg-[#F7F8F8] p-6 text-left">
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#7A868B]">预约产品</span>
                  <span className="text-right font-medium text-[#24343B]">{order.title}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#7A868B]">预约日期</span>
                  <span className="font-medium text-[#24343B]">{order.date}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#7A868B]">人数 / 数量</span>
                  <span className="font-medium text-[#24343B]">{getDraftTravelerCount(order)}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#7A868B]">预约内容</span>
                  <span className="text-right font-medium text-[#24343B]">
                    {formatDraftTravelerSummary(order)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#7A868B]">联系人</span>
                  <span className="font-medium text-[#24343B]">{order.contactName}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#7A868B]">支付金额</span>
                  <span className="text-xl font-bold text-[#C9932C]">
                    {formatCurrency(order.amount)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[22px] bg-[#FAF7F1] px-5 py-4 text-left text-sm leading-7 text-[#6A7A80]">
              温馨提示：当前订单为前端演示订单，可继续点击“查看我的订单”或“申请发票”，展示后续服务链路。
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/user/orders"
                className="rounded-full bg-[#C9932C] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b58323]"
              >
                查看我的订单
              </Link>
              <Link
                to="/"
                className="rounded-full bg-[#F3F4F4] px-8 py-3 text-sm font-medium text-[#41535F] transition-colors hover:bg-[#E8EBEB]"
              >
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function RefundOrderCard({
  order,
  onRefund,
  onReschedule,
}: {
  order: DemoOrder;
  onRefund: () => void;
  onReschedule: () => void;
}) {
  return (
    <div className="rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs tracking-[0.08em] text-[#8D7556]">订单号 {order.id}</p>
          <h3 className="mt-3 text-xl font-bold text-[#24343B]">{order.title}</h3>
          <div className="mt-3 space-y-2 text-sm text-[#52636A]">
            <p>预约日期：{order.date}</p>
            <p>预约内容：{formatDraftTravelerSummary(order)}</p>
            <p>订单金额：{formatCurrency(order.amount)}</p>
            <p>当前状态：{order.status}</p>
          </div>
        </div>
        <div className="flex min-w-[240px] flex-col gap-3">
          <button
            type="button"
            onClick={onRefund}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F6E7E5] px-5 py-3 text-sm font-medium text-[#9B4C46] transition-colors hover:bg-[#f1d7d4]"
          >
            <RefreshCw className="h-4 w-4" />
            申请退票
          </button>
          <button
            type="button"
            onClick={onReschedule}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8F1F2] px-5 py-3 text-sm font-medium text-[#486B72] transition-colors hover:bg-[#dbe8ea]"
          >
            <FileText className="h-4 w-4" />
            申请改签
          </button>
        </div>
      </div>
    </div>
  );
}

export function RefundPage() {
  const { orders, submitRefundRequest } = useDemoApp();
  const [keyword, setKeyword] = useState('');

  const filteredOrders = orders.filter((order) => {
    if (!keyword.trim()) {
      return true;
    }

    return [order.id, order.title, order.contactPhone || '']
      .join(' ')
      .toLowerCase()
      .includes(keyword.trim().toLowerCase());
  });

  return (
    <div>
      <PageBanner
        image={orders[0]?.image || ''}
        title="退票与改签"
        subtitle="支持查询演示订单并提交退票或改签申请，所有按钮都有明确反馈。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '退票与改签' },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-[1080px] space-y-8">
          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#24343B]">查询演示订单</h2>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                className="flex-1 rounded-[18px] border border-[#E5E7E8] bg-[#F7F8F8] px-4 py-3 text-sm outline-none transition focus:border-[#C9932C]"
                placeholder="输入订单号、产品名或手机号"
              />
              <button
                type="button"
                onClick={() => toast.message('已按当前关键词筛选演示订单。')}
                className="rounded-full bg-[#486B72] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3e5d63]"
              >
                查询订单
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#24343B]">演示退改规则</h3>
            <div className="mt-6 space-y-3">
              {[
                ['出行前 3 天以上', '支持全额退票', '支持免费改签'],
                ['出行前 1-3 天', '收取 10% 手续费', '支持一次改签'],
                ['出行当天', '原则上不可退', '仅演示提交申请'],
              ].map(([time, refund, change]) => (
                <div
                  key={time}
                  className="grid grid-cols-1 gap-3 rounded-[20px] bg-[#F7F8F8] px-5 py-4 text-sm text-[#52636A] md:grid-cols-3"
                >
                  <span className="font-medium text-[#24343B]">{time}</span>
                  <span>{refund}</span>
                  <span>{change}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <RefundOrderCard
                  key={order.id}
                  order={order}
                  onRefund={() => submitRefundRequest(order.id, 'refund')}
                  onReschedule={() => submitRefundRequest(order.id, 'reschedule')}
                />
              ))
            ) : (
              <div className="rounded-[26px] border border-dashed border-[#D8D1C5] bg-[#FAF7F1] px-6 py-10 text-center text-sm text-[#7A868B]">
                没有找到匹配的演示订单，请换一个关键词试试。
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export function InvoicePage() {
  const { latestOrderId, orders, invoices, submitInvoiceRequest } = useDemoApp();
  const latestOrder = orders.find((order) => order.id === latestOrderId) || orders[0] || null;
  const latestInvoice = invoices.find((invoice) => invoice.orderId === latestOrder?.id) || null;
  const [title, setTitle] = useState(latestInvoice?.title || '个人');
  const [email, setEmail] = useState(latestInvoice?.email || demoContactDefaults.email);

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error('请填写发票抬头。');
      return;
    }

    if (!email.trim()) {
      toast.error('请填写接收邮箱。');
      return;
    }

    submitInvoiceRequest({
      title: title.trim(),
      email: email.trim(),
    });
  };

  return (
    <div>
      <PageBanner
        image={latestOrder?.image || ''}
        title="发票申请"
        subtitle="基于最近一笔演示订单提交电子发票申请，补齐预约后的服务动作。"
        breadcrumbs={[
          { label: '首页', path: '/' },
          { label: '在线预约', path: '/booking' },
          { label: '发票申请' },
        ]}
      />

      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#24343B]">填写发票信息</h2>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-[#52636A]">发票抬头</span>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="w-full rounded-[18px] border border-[#E5E7E8] bg-[#F7F8F8] px-4 py-3 text-sm outline-none transition focus:border-[#C9932C]"
                  placeholder="个人或公司名称"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-[#52636A]">接收邮箱</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-[18px] border border-[#E5E7E8] bg-[#F7F8F8] px-4 py-3 text-sm outline-none transition focus:border-[#C9932C]"
                  placeholder="用于接收电子发票"
                />
              </label>
            </div>

            <div className="mt-6 rounded-[22px] bg-[#FAF7F1] px-5 py-4 text-sm leading-7 text-[#6A7A80]">
              演示说明：此处不连接真实税控系统，提交后仅更新前端订单与发票状态。
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-6 w-full rounded-full bg-[#C9932C] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b58323]"
            >
              提交发票申请
            </button>
          </div>

          <div className="space-y-6">
            {latestOrder ? (
              <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#24343B]">对应订单</h3>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#7A868B]">订单号</span>
                    <span className="font-medium text-[#24343B]">{latestOrder.id}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#7A868B]">预约产品</span>
                    <span className="text-right font-medium text-[#24343B]">
                      {latestOrder.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#7A868B]">订单金额</span>
                    <span className="font-medium text-[#24343B]">
                      {formatCurrency(latestOrder.amount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#7A868B]">当前状态</span>
                    <span className="font-medium text-[#24343B]">
                      {latestInvoice?.status || latestOrder.invoiceStatus}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-[#D8D1C5] bg-[#FAF7F1] px-6 py-10 text-center text-sm text-[#7A868B]">
                当前还没有可申请发票的演示订单。
              </div>
            )}

            <Link
              to="/booking/refund"
              className="block rounded-[24px] border border-gray-100 bg-white px-6 py-5 text-sm font-medium text-[#486B72] shadow-sm transition-shadow hover:shadow-md"
            >
              如需进一步展示售后流程，可继续前往退票与改签页面
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
