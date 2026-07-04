# 桃花潭景区数字化展示与预约平台

## 项目简介

本项目是一个面向课程答辩、项目展示和 Vercel 部署的前端演示版文旅平台，围绕安徽泾县桃花潭、查济古村、太平湖等文旅资源，完成景点展示、路线预览、在线预约、社区互动和用户中心等核心功能模块。

## 项目定位

- 项目名称：桃花潭景区数字化展示与预约平台
- 项目方向：安徽泾县桃花潭、查济、太平湖文旅数字化展示与预约平台
- 展示气质：中国高端文旅官网、徽派建筑、江南水乡、桃花潭、查济、太平湖
- 当前版本：前端 mock 演示版

## 技术栈

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- Sonner
- Lucide React

## 本地运行

```bash
npm install
npm run dev
```

默认启动后可通过本地开发地址访问项目。

## 构建方式

```bash
npm run build
```

构建产物输出在 `dist/` 目录。

## Vercel 部署方式

本项目已经补充前端路由回退配置，适合直接部署到 Vercel。

推荐配置：

- Install Command：`npm install`
- Build Command：`npm run build`
- Output Directory：`dist`

如果使用可视化面板部署，按以上三项填写即可。

## 主要页面路由

- `/`
- `/scenic`
- `/scenic/taohuatan`
- `/scenic/chaji`
- `/routes`
- `/routes/one-day`
- `/routes/map`
- `/booking`
- `/booking/tickets`
- `/booking/confirm`
- `/booking/payment`
- `/booking/success`
- `/community`
- `/community/travelogs`
- `/community/travelog/spring-taohuatan`
- `/community/guides`
- `/community/guide/taohuatan-guide`
- `/community/author/traveler-xiaowang`
- `/user/login`
- `/user`
- `/user/orders`
- `/support/faq`
- `/support/announcements`

## 答辩演示路径

### 1. 景点展示主线

`首页` → `景点介绍` → `桃花潭详情` → `立即预约门票`

### 2. 路线展示主线

`首页` → `路线预览` → `一日精华游` → `路线地图`

### 3. 预约闭环主线

`首页` → `在线预约` → `门票预约` → `确认订单` → `在线支付` → `预约成功` → `我的订单`

### 4. 社区内容主线

`首页` → `社区互动` → `游记详情` / `攻略详情` / `作者主页`

### 5. 用户中心主线

`登录页` → `个人中心` → `我的订单` / `我的收藏` / `设置`

### 6. 服务支撑主线

`页脚` → `FAQ` / `交通指南` / `景区公告` / `隐私政策` / `服务条款`

### 7. 异常页主线

任意不存在路径 → `404 页面` → `返回首页`

## 当前演示边界说明

以下模块均为前端 mock 演示，不接真实后端：

- 登录与注册
- 支付
- 订单
- 发票
- 退票与改签
- 社区发布
- 搜索

## 如果要做成真实平台，后续仍需补充

- 后端 API 服务
- 数据库与内容表结构
- 用户登录鉴权与权限体系
- 真实支付接口
- 订单管理系统
- 发票与售后系统
- 社区发布与内容审核后台
- 景点 / 路线 / 产品 CMS
- 图片资源管理与对象存储
- 域名、HTTPS、备案与正式部署流程
