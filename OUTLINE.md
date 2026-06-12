# ☕ java知识点总结 — 项目大纲

> 面向 Java 高级开发工程师面试的知识库网站
> 仓库：https://github.com/NanGongZheng/javaguide-interview
> 线上地址：https://nangongzheng.github.io/javaguide-interview/

---

## 📐 项目架构

```
个人网站/
├── index.html              # 首页（Hero 区 + 知识模块卡片 + 学习路线图）
├── css/style.css           # 全局样式（亮/暗色、响应式、浮动目录、回到顶部）
├── js/main.js              # 搜索、暗色模式、侧边栏、Q&A 折叠、浮动目录、滚动高亮、回到顶部
├── pages/
│   ├── java-core.html      # Java 核心知识（集合/并发/JVM/新特性/IO/反射）
│   ├── spring.html         # Spring 全家桶（IoC/AOP/Boot/MVC/Cloud 12 子章节/事务）
│   ├── database.html       # MySQL 与 Redis（索引/事务/优化/数据结构/高可用）
│   ├── distribution.html   # 分布式与系统设计（理论/锁/事务/MQ/设计题/设计模式）
│   ├── projects.html       # 实战项目（5 个项目 + 技术栈 + 亮点 + 难题 + STAR 模板）
│   └── interview.html      # 高频面试题精选（60+ 题可展开折叠）
├── README.md               # 项目说明
├── OUTLINE.md              # 本文件：项目大纲与进度
└── .gitignore
```

---

## 🚀 Git 提交记录

| 提交 | 说明 |
|------|------|
| `55e6249` | init: java知识点总结网站 |
| `446eca8` | docs: 添加项目大纲与 TODO 清单 |
| `7d12c6b` | feat: 大幅扩充 Spring Cloud 内容（新旧对比 + 12 子章节） |
| `2042072` | feat: 所有页面补全二级目录，支持页面内快速定位 |
| `f99bdc9` | feat: 右侧浮动目录（滚动高亮）+ 一键回到顶部按钮 |

---

## 📖 知识模块大纲

### 1. Java 基础与进阶 (`pages/java-core.html`) ✅

- [x] **集合框架**
  - [x] HashMap 底层原理（数组+链表+红黑树、put 流程、容量为 2 的幂）
  - [x] ConcurrentHashMap（CAS + synchronized、分段锁对比）
  - [x] ArrayList vs LinkedList 对比表
  - [x] TreeMap 与 LinkedHashMap（LRU 缓存实现）
- [x] **并发编程**
  - [x] 线程池原理（7 个核心参数、任务提交流程、4 种拒绝策略）
  - [x] synchronized vs ReentrantLock 对比表
  - [x] AQS 原理（state、CLH 队列、独占/共享模式）
  - [x] volatile 关键字（可见性、有序性、DCL 单例）
  - [x] ThreadLocal 原理与内存泄漏
- [x] **JVM 虚拟机**
  - [x] JVM 内存区域（堆、栈、方法区、程序计数器）
  - [x] 垃圾回收算法（标记-清除、标记-整理、复制、分代）
  - [x] 垃圾收集器（Serial → CMS → G1 → ZGC）
  - [x] JVM 调优参数（堆、GC、诊断）
  - [x] 类加载机制与双亲委派模型
- [x] **Java 8-21 新特性**
  - [x] Lambda 与函数式接口、Stream API、Optional
  - [x] Record、Sealed Class、Text Block、Pattern Matching
  - [x] **Virtual Thread 虚拟线程**（创建方式、pinning 问题、vs 平台线程对比）
  - [x] **Structured Concurrency 结构化并发**（ShutdownOnFailure/ShutdownOnSuccess）
  - [x] **Scoped Values 作用域值**（ThreadLocal 替代方案）
  - [x] **Sequenced Collections**（统一有序集合 API）
  - [x] **Pattern Matching for switch**（配合 Sealed Class 穷举检查）
- [x] **IO 与 NIO**（BIO vs NIO vs AIO、NIO 核心组件、Netty）
- [x] **反射与注解**（反射原理、注解原理）

### 2. Spring 全家桶 (`pages/spring.html`) ✅

- [x] **IoC 与 DI** — Bean 生命周期、作用域、循环依赖三级缓存
- [x] **AOP 面向切面** — 核心概念、JDK 动态代理 vs CGLIB、日志切面实战
- [x] **Spring Boot** — 自动配置原理、自定义 Starter、启动流程
- [x] **Spring MVC** — 请求处理流程、常用注解、全局异常处理
- [x] **Spring Cloud 总览** — Netflix vs Alibaba vs 官方 2022+ 新旧全景对比表
- [x] **版本演进与选型** — 版本命名变革、Boot 3.x 重大变化、GraalVM/Virtual Thread
- [x] **注册中心** — Eureka/Nacos/Consul/etcd/ZK 五方对比 + Nacos 2.x gRPC 深度解析
- [x] **配置中心** — Config/Nacos/Apollo/Consul KV 对比 + Nacos 动态刷新实战
- [x] **API 网关** — Zuul/Gateway/APISIX 对比 + 完整路由配置 + 自定义鉴权过滤器
- [x] **负载均衡** — Ribbon vs LoadBalancer 对比与迁移指南
- [x] **服务调用** — RestTemplate/OpenFeign/gRPC/RestClient 四方对比 + Feign 实战
- [x] **熔断与限流** — Hystrix/Sentinel/Resilience4j 三方对比 + Slot Chain 流程图
- [x] **Seata 分布式事务** — AT/TCC/SAGA/XA 对比 + AT 两阶段原理 + 配置实战
- [x] **可观测性** — Sleuth → Micrometer Tracing 演进 + SkyWalking
- [x] **Service Mesh** — Spring Cloud vs Istio 架构对比 + Envoy Sidecar
- [x] **事务管理** — 7 种传播行为、事务失效 8 种场景

### 3. MySQL 与 Redis (`pages/database.html`) ✅

- [x] **MySQL 索引** — B+ 树、聚簇/非聚簇索引、联合索引、索引失效场景
- [x] **MySQL 事务** — ACID、隔离级别、MVCC 原理、InnoDB 锁机制
- [x] **查询优化** — EXPLAIN 分析、慢查询优化、分库分表
- [x] **Redis 基础** — 五种数据类型、跳表原理、缓存三大问题、缓存与 DB 一致性
- [x] **Redis 高可用** — 持久化（RDB/AOF/混合）、主从、Sentinel、Cluster
- [x] **Spring 整合 Redis** — @Cacheable 注解、Redisson 分布式锁

### 4. 分布式与系统设计 (`pages/distribution.html`) ✅

- [x] **分布式理论** — CAP/BASE、分布式 ID 方案（雪花算法等）
- [x] **分布式锁** — Redis/ZK/数据库对比、RedLock、Redisson 看门狗
- [x] **分布式事务** — 2PC/TCC/SAGA/本地消息表/Seata AT
- [x] **消息队列** — RabbitMQ/Kafka/RocketMQ 选型、消息丢失、幂等、顺序性
- [x] **经典系统设计** — 秒杀系统、短链接、接口幂等
- [x] **设计模式** — 单例、策略、模板方法、观察者、SOLID 原则

### 5. 实战项目 (`pages/projects.html`) ✅

- [x] **电商秒杀系统** — 高并发秒杀、Redis Lua 原子扣减、MQ 异步下单、多级缓存
- [x] **即时通讯系统** — Netty WebSocket、消息可靠性三件套、多端同步、已读回执
- [x] **外卖点餐平台** — 订单状态机、Redis GEO 附近商家、延迟队列、统一支付网关
- [x] **短链接服务** — Base62 编码、两级缓存、布隆过滤器防穿透、异步统计
- [x] **企业级权限管理系统** — RBAC 模型、数据权限无侵入、JWT + Redis 黑名单、操作审计
- [x] **面试技巧** — STAR 法则、项目描述万能公式、常见追问应对

### 6. 高频面试题精选 (`pages/interview.html`) ✅

- [x] **Java 基础题**（6 题）— HashMap、ConcurrentHashMap、synchronized/Lock、volatile、线程池、JVM GC
- [x] **Spring 题**（7 题）— 自动配置、Bean 生命周期、事务失效、循环依赖、AOP、事务传播行为、Boot 自动配置原理
- [x] **数据库题**（8 题）— B+ 树、MVCC、慢 SQL、缓存三大问题、Redis/MySQL 一致性、主从复制、MyBatis #{} vs ${}、MyBatis 缓存
- [x] **分布式题**（6 题）— 分布式锁、消息可靠性、CAP/BASE、秒杀设计、分布式 ID 生成、MQ 选型
- [x] **场景经验题**（6 题）— STAR 法则、CPU 飙高排查、OOM 排查、接口限流、短链接设计、CI/CD 流程

---

## ✅ 已完成事项

| 日期 | 事项 | 状态 |
|------|------|------|
| 2026-06-13 | 项目初始化：HTML/CSS/JS 框架搭建 | ✅ |
| 2026-06-13 | 首页 index.html（Hero + 卡片 + 学习路线） | ✅ |
| 2026-06-13 | Java 核心知识页（6 大模块，20 个子节点） | ✅ |
| 2026-06-13 | Spring 全家桶页（IoC/AOP/Boot/MVC + Cloud 12 子章节 + 事务） | ✅ |
| 2026-06-13 | 数据库页（MySQL 索引/事务/优化 + Redis 基础/高可用，21 个子节点） | ✅ |
| 2026-06-13 | 分布式与系统设计页（6 大模块，22 个子节点） | ✅ |
| 2026-06-13 | 面试题精选页（5 大分类，24 道题） | ✅ |
| 2026-06-13 | 暗色模式切换（自动记忆偏好） | ✅ |
| 2026-06-13 | 全站搜索功能（⌘K 快捷键，索引已同步 Spring Cloud 子章节） | ✅ |
| 2026-06-13 | 响应式布局（移动端侧边栏 + 汉堡菜单） | ✅ |
| 2026-06-13 | GitHub 仓库创建 & Pages 部署 | ✅ |
| 2026-06-13 | Spring Cloud 大幅扩充（新旧对比 + 12 个子章节 + 流程图 + 实战代码） | ✅ |
| 2026-06-13 | 所有页面补全二级目录（页面内 TOC，点击跳转） | ✅ |
| 2026-06-13 | 右侧浮动目录（固定定位 + 滚动高亮 + 移动端折叠） | ✅ |
| 2026-06-13 | 一键回到顶部按钮（滚动 300px 后出现） | ✅ |
| 2026-06-13 | 项目名称改为「java知识点总结」 | ✅ |
| 2026-06-13 | JDK 21 新特性大幅扩充（Virtual Thread/Structured Concurrency/Scoped Values/Sequenced Collections/Pattern Matching for switch） | ✅ |
| 2026-06-13 | 新增 MyBatis 深入章节（架构流程/#{} vs ${}/动态 SQL/缓存/插件/面试题） | ✅ |
| 2026-06-13 | 面试题扩充至 36+ 道（新增 12 道：虚拟线程、String 不可变、abstract vs interface、事务传播、Boot 自动配置、主从复制、MyBatis、分布式 ID、MQ 选型、短链接、CI/CD） | ✅ |
| 2026-06-13 | 新增「实战项目」页面（5 个项目 + 技术栈 + 亮点 + 难题 + STAR 模板 + 面试技巧） | ✅ |

---

## ✨ 已实现功能清单

| 功能 | 说明 |
|------|------|
| 🌙 暗色模式 | 一键切换，localStorage 记住偏好 |
| 🔍 全站搜索 | ⌘K 快捷键，覆盖所有知识点关键词 |
| 📑 页面内 TOC | 每个页面顶部目录，含一级 + 二级子节点，点击跳转 |
| 📑 右侧浮动目录 | 固定右侧，滚动自动高亮当前章节，移动端按钮呼出 |
| ↑ 回到顶部 | 滚动 300px 后出现，平滑滚动 |
| 📱 响应式 | 三档断点适配（960px / 1280px / 640px） |
| 💻 代码高亮 | 手写 span 着色（关键字/类型/字符串/注释/注解） |
| 📝 Q&A 折叠 | 面试题点击展开/收起，手风琴效果 |
| 🎨 卡片布局 | 首页知识模块卡片，hover 上浮 + 阴影 |

---

## 📋 TODO List

### 内容扩充（高优先级）

- [ ] **算法与数据结构模块** — 新增页面，覆盖排序、链表、二叉树、动态规划等高频算法题
- [ ] **计算机网络** — TCP 三次握手/四次挥手、HTTP/HTTPS、HTTP/2 & HTTP/3、DNS 解析
- [ ] **操作系统** — 进程 vs 线程、死锁条件、内存管理、IO 多路复用
- [ ] **场景设计题补充** — 聊天系统、Feed 流、权限系统、短链接进阶设计
- [ ] **项目经验模板** — 提供 STAR 法则模板和 3 个示例，帮助组织项目描述
- [ ] **Spring Cloud 补充** — RocketMQ 事务消息、分布式链路追踪实战、灰度发布方案

### 功能优化（中优先级）

- [ ] **代码块复制按钮** — 代码块右上角一键复制
- [ ] **题目难度筛选** — 面试题页面支持按难度（简单/中等/困难）过滤
- [ ] **收藏功能** — localStorage 记录收藏的题目，支持筛选已收藏
- [ ] **阅读进度追踪** — 标记已学习的知识点，显示学习进度百分比
- [ ] **阅读时间估算** — 每篇文章顶部显示预计阅读时间
- [ ] **SEO 优化** — meta description、Open Graph 标签、sitemap.xml

### 体验优化（低优先级）

- [ ] **页面加载动画** — 骨架屏 / 渐入效果
- [ ] **PWA 支持** — 离线访问、添加到主屏幕
- [ ] **访问统计** — 接入不蒜子或 Google Analytics
- [ ] **GitHub Action** — 自动化构建检查（链接有效性、HTML 校验）
- [ ] **自定义域名** — 绑定个人域名替换 github.io 地址
- [ ] **打印友好** — @media print 样式优化

---

## 🔧 技术栈

| 类别 | 技术 |
|------|------|
| 前端 | 原生 HTML + CSS + JavaScript（零依赖，无构建工具） |
| 样式 | CSS Variables（主题切换）、CSS Grid/Flexbox（响应式） |
| 交互 | 原生 JS（搜索、暗色模式、侧边栏、浮动目录、滚动高亮、Q&A 折叠、回到顶部） |
| 部署 | GitHub Pages（main 分支自动部署） |
| 版本控制 | Git + GitHub（gh CLI 管理） |

---

## 📊 页面统计

| 页面 | 文件大小 | 一级目录 | 二级子节点 | 锚点总数 |
|------|---------|---------|-----------|---------|
| index.html | 8 KB | — | — | — |
| java-core.html | 28 KB | 6 | 20 | 26 |
| spring.html | 50 KB | 16 | — | 16 |
| database.html | 18 KB | 6 | 21 | 27 |
| distribution.html | 21 KB | 6 | 22 | 28 |
| projects.html | 32 KB | 5 | — | 6 |
| interview.html | 38 KB | 5 | 36（题目） | 5 |
