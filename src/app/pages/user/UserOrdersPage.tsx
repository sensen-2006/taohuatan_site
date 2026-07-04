import { Link } from 'react-router';
import { useDemoApp } from '../../providers/DemoAppProvider';

function getStatusColor(status: string) {
  if (status === '待出行') return 'bg-green-50 text-green-600';
  if (status === '已确认') return 'bg-blue-50 text-blue-600';
  if (status === '已完成') return 'bg-gray-100 text-gray-500';
  if (status.includes('处理中')) return 'bg-amber-50 text-amber-600';
  return 'bg-gray-100 text-gray-500';
}

export function UserOrdersPage() {
  const { orders } = useDemoApp();

  return (
    <div className="max-w-[1000px]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#24343B]">我的订单</h2>
          <p className="mt-2 text-sm text-[#6A7A80]">
            此处展示当前浏览器中的演示订单，最新完成支付的订单会排在最前面。
          </p>
        </div>
        <Link
          to="/booking"
          className="rounded-full bg-[#C9932C] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b58323]"
        >
          继续预约
        </Link>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <article
            key={order.id}
            className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs tracking-[0.08em] text-[#8D7556]">订单号 {order.id}</p>
                <h3 className="mt-2 text-lg font-bold text-[#24343B]">{order.title}</h3>
                <div className="mt-3 space-y-2 text-sm text-[#52636A]">
                  <p>预约日期：{order.date}</p>
                  <p>
                    预约内容：
                    {order.lineItems.map((item) => `${item.name} x ${item.quantity}`).join('，')}
                  </p>
                  <p>
                    联系人：{order.contactName || '演示联系人'} /{' '}
                    {order.contactPhone || '演示手机号'}
                  </p>
                  {order.scheduleLabel ? <p>补充信息：{order.scheduleLabel}</p> : null}
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end">
                <span className={`rounded-full px-3 py-1 text-xs ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                <p className="text-2xl font-bold text-[#C9932C]">￥{order.amount}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/booking/invoice"
                    className="text-xs text-[#486B72] hover:text-[#24343B]"
                  >
                    申请发票
                  </Link>
                  <Link
                    to="/booking/refund"
                    className="text-xs text-[#486B72] hover:text-[#24343B]"
                  >
                    退票 / 改签
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
