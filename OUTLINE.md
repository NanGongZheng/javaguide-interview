# ☕ JavaGuide 面试突击 — 项目大纲

> 面向 Java 高级开发工程师面试的知识库网站
> 仓库：https://github.com/NanGongZheng/javaguide-interview
> 线上地址：https://nangongzheng.github.io/javaguide-interview/

---

## 📐 项目架构

```
个人网站/
├── index.html              # 首页（Hero 区 + 知识模块卡片 + 学习路线图）
├── css/style.css           # 全局样式（亮/暗色主题、响应式、代码高亮）
├── js/main.js              # 搜索、暗色模式、侧边栏、Q&A 折叠交互
├── pages/
│   ├── java-core.html      # Java 核心知识
│   ├── spring.html         # Spring 生态
│   ├── database.html       # MySQL 与 Redis
│   ├── distribution.html   # 分布式与系统设计
│   └── interview.html      # 高频面试题精选
├── README.md               # 项目说明
├── OUTLINE.md              # 本文件：项目大纲与进度
└── .gitignore
```

---

## 📖 知识模块大纲

### 1. Java 基础与进阶 (`pages/java-core.html`) ✅ 已完成

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
  - [x] Lambda 与函数式接口
  - [x] Stream API
  - [x] Optional
  - [x] Record、Sealed Class、Pattern Matching、Virtual Thread
- [x] **IO 与 NIO**（BIO vs NIO vs AIO、NIO 核心组件、Netty）
- [x] **反射与注解**（反射原理、注解原理）

### 2. Spring 全家桶 (`pages/spring.html`) ✅ 已完成

- [x] **IoC 与 DI**
  - [x] Bean 生命周期（8 个阶段完整流程）
  - [x] Bean 作用域（singleton、prototype、request、session）
  - [x] 循环依赖三级缓存解决方案
- [x] **AOP 面向切面**
  - [x] 核心概念（切面、连接点、切入点、通知）
  - [x] JDK 动态代理 vs CGLIB
  - [x] 统一日志切面实战代码
- [x] **Spring Boot**
  - [x] 自动配置原理（@EnableAutoConfiguration → spring.factories → @Conditional）
  - [x] 自定义 Starter 示例
  - [x] 启动流程（6 个阶段）
- [x] **Spring MVC**
  - [x] 请求处理流程（DispatcherServlet → HandlerMapping → HandlerAdapter）
  - [x] 常用注解表
  - [x] 全局异常处理实战代码
- [x] **Spring Cloud 总览** — 新旧技术栈全景对比表（Netflix / Alibaba / 官方 2022+）
- [x] **版本演进与选型** — 版本命名变革、Boot 3.x 重大变化、GraalVM/Virtual Thread 支持
- [x] **注册中心**
  - [x] 5 大注册中心横向对比（Eureka / Nacos / Consul / etcd / ZooKeeper）
  - [x] Nacos 2.x 深度解析（gRPC 架构、服务发现流程、AP/CP 模式）
  - [x] Nacos 面试高频问题（实时性保证、vs Eureka 区别）
- [x] **配置中心**
  - [x] 4 大配置中心对比（Config / Nacos / Apollo / Consul KV）
  - [x] Nacos 配置管理实战（共享配置、扩展配置、@RefreshScope 动态刷新）
- [x] **API 网关**
  - [x] 网关技术对比（Zuul 1.x / Gateway / Zuul 2.x / APISIX）
  - [x] Spring Cloud Gateway 核心概念（Route / Predicate / Filter）
  - [x] 完整配置示例（路由、限流、熔断、跨域、动态路由）
  - [x] 自定义全局鉴权过滤器代码
- [x] **负载均衡**
  - [x] Ribbon vs Spring Cloud LoadBalancer 对比与迁移指南
  - [x] 负载策略详解（轮询、随机、权重、响应时间、最小并发）
- [x] **服务调用**
  - [x] 4 种方案对比（RestTemplate / OpenFeign / gRPC / RestClient）
  - [x] OpenFeign 完整实战（声明式接口、降级工厂、使用示例）
  - [x] Spring Cloud RestClient 新特性（Fluent API）
- [x] **熔断与限流**
  - [x] Hystrix vs Sentinel vs Resilience4j 三方对比
  - [x] Sentinel 工作流程（Slot Chain）、注解实战、Nacos 动态规则推送
  - [x] Resilience4j 核心用法（断路器 + 限流 + 重试组合）
- [x] **分布式事务 Seata**
  - [x] AT / TCC / SAGA / XA 四种模式对比
  - [x] AT 模式两阶段原理详解（undo_log、全局锁）
  - [x] @GlobalTransactional 实战配置
- [x] **可观测性**
  - [x] Sleuth → Micrometer Tracing 演进
  - [x] Micrometer Tracing + OpenTelemetry 配置
  - [x] SkyWalking 国产 APM 方案
- [x] **Service Mesh**
  - [x] Spring Cloud vs Service Mesh 架构对比
  - [x] Istio 核心架构（Control Plane + Envoy Sidecar）
  - [x] Istio 核心功能（流量管理、安全、可观测、弹性）
- [x] **事务管理**
  - [x] 7 种事务传播行为
  - [x] 事务失效的 8 种场景（含代码示例）

### 3. MySQL 与 Redis (`pages/database.html`) ✅ 已完成

- [x] **MySQL 索引**
  - [x] B+ 树原理
  - [x] 聚簇索引 vs 非聚簇索引、覆盖索引
  - [x] 联合索引与最左前缀原则
  - [x] 索引失效的 6 种场景
- [x] **MySQL 事务**
  - [x] ACID 与 undo/redo log
  - [x] 四种隔离级别
  - [x] MVCC 原理（版本链 + Read View、RC vs RR）
  - [x] InnoDB 锁机制（S/X/IS/IX/Gap/Next-Key Lock）
- [x] **查询优化**
  - [x] EXPLAIN 分析（type、key、rows、Extra）
  - [x] 慢查询优化思路
  - [x] 分库分表方案
- [x] **Redis 基础**
  - [x] 五种数据类型及底层编码
  - [x] 跳表（SkipList）原理
  - [x] 缓存穿透、击穿、雪崩及解决方案
  - [x] 缓存与数据库一致性（Cache Aside、延迟双删）
- [x] **Redis 高可用**
  - [x] 持久化（RDB / AOF / 混合）
  - [x] 主从复制、Sentinel 哨兵、Redis Cluster
- [x] **Spring 整合 Redis**（@Cacheable 注解、Redisson 分布式锁）

### 4. 分布式与系统设计 (`pages/distribution.html`) ✅ 已完成

- [x] **分布式理论**
  - [x] CAP 定理（CP vs AP 系统举例）
  - [x] BASE 理论
  - [x] 分布式 ID 生成方案对比（UUID、雪花算法、号段模式）
- [x] **分布式锁**
  - [x] 三种方案对比（Redis / ZooKeeper / 数据库）
  - [x] Redis 分布式锁核心问题（SET NX EX、Lua 解锁）
  - [x] RedLock 算法及争议
  - [x] Redisson 看门狗机制
- [x] **分布式事务**
  - [x] 方案对比（2PC / TCC / SAGA / 本地消息表 / Seata AT）
  - [x] Seata 四种模式
  - [x] 本地消息表方案
- [x] **消息队列**
  - [x] RabbitMQ / Kafka / RocketMQ 选型对比表
  - [x] 消息丢失三个环节及解决方案
  - [x] 消息幂等性（4 种方案）
  - [x] 消息顺序性（分区有序）
  - [x] 延迟队列实现方案
- [x] **经典系统设计**
  - [x] 秒杀系统（分层架构 + 核心代码）
  - [x] 短链接系统
  - [x] 接口幂等设计（4 种方案）
- [x] **设计模式**
  - [x] 单例模式（枚举、DCL）
  - [x] 策略模式（Spring 自动注入消除 if-else）
  - [x] 模板方法模式
  - [x] 观察者模式（Spring 事件机制）
  - [x] SOLID 原则

### 5. 高频面试题精选 (`pages/interview.html`) ✅ 已完成

- [x] **Java 基础题**（6 题）
  - [x] HashMap 底层原理
  - [x] ConcurrentHashMap 线程安全
  - [x] synchronized vs ReentrantLock
  - [x] volatile 作用和原理
  - [x] 线程池核心参数与任务提交流程
  - [x] JVM 垃圾回收算法与 G1
- [x] **Spring 题**（5 题）
  - [x] Spring Boot 自动配置原理
  - [x] Bean 生命周期
  - [x] 事务失效场景
  - [x] 循环依赖解决方案
  - [x] AOP 实现原理
- [x] **数据库题**（5 题）
  - [x] 为什么用 B+ 树
  - [x] MVCC 原理
  - [x] 慢 SQL 优化
  - [x] 缓存三大问题
  - [x] Redis 与 MySQL 一致性
- [x] **分布式题**（4 题）
  - [x] 分布式锁方案对比
  - [x] 消息不丢失 & 幂等性
  - [x] CAP 与 BASE 理论
  - [x] 秒杀系统设计
- [x] **场景经验题**（4 题）
  - [x] 项目经验 STAR 法则
  - [x] 线上 CPU 飙高排查
  - [x] 线上 OOM 排查
  - [x] 接口限流方案

---

## ✅ 已完成事项

| 日期 | 事项 | 状态 |
|------|------|------|
| 2026-06-13 | 项目初始化：HTML/CSS/JS 框架搭建 | ✅ |
| 2026-06-13 | 首页 index.html（Hero + 卡片 + 学习路线） | ✅ |
| 2026-06-13 | Java 核心知识页（集合/并发/JVM/新特性/IO/反射） | ✅ |
| 2026-06-13 | Spring 全家桶页（IoC/AOP/Boot/MVC/Cloud/事务） | ✅ |
| 2026-06-13 | 数据库页（MySQL 索引/事务/优化 + Redis 基础/高可用） | ✅ |
| 2026-06-13 | 分布式与系统设计页（理论/锁/事务/MQ/设计题/设计模式） | ✅ |
| 2026-06-13 | 面试题精选页（50+ 题可展开折叠） | ✅ |
| 2026-06-13 | 暗色模式切换（自动记忆偏好） | ✅ |
| 2026-06-13 | 全站搜索功能（⌘K 快捷键） | ✅ |
| 2026-06-13 | 响应式布局（移动端侧边栏 + 汉堡菜单） | ✅ |
| 2026-06-13 | GitHub 仓库创建 & Pages 部署 | ✅ |
| 2026-06-13 | Git 初始提交 & 推送 | ✅ |

---

## 📋 TODO List

### 内容扩充（高优先级）

- [ ] **算法与数据结构模块** — 新增页面，覆盖排序、链表、二叉树、动态规划等高频算法题
- [ ] **计算机网络** — TCP 三次握手/四次挥手、HTTP/HTTPS、HTTP/2 & HTTP/3、DNS 解析
- [ ] **操作系统** — 进程 vs 线程、死锁条件、内存管理、IO 多路复用
- [ ] **场景设计题补充** — 聊天系统、Feed 流、权限系统设计
- [ ] **项目经验模板** — 提供 STAR 法则模板和示例，帮助组织项目描述

### 功能优化（中优先级）

- [ ] **代码块复制按钮** — 点击一键复制代码
- [ ] **目录锚点高亮** — 滚动时自动高亮当前章节
- [ ] **题目难度筛选** — 面试题页面支持按难度/分类过滤
- [ ] **收藏功能** — localStorage 记录收藏的题目
- [ ] **进度追踪** — 标记已学习的知识点，显示学习进度
- [ ] **阅读时间估算** — 每篇文章显示预计阅读时间

### 体验优化（低优先级）

- [ ] **页面加载动画** — 骨架屏 / 渐入效果
- [ ] **回到顶部按钮** — 长页面快速回到顶部
- [ ] **SEO 优化** — meta description、Open Graph、sitemap.xml
- [ ] **PWA 支持** — 离线访问、添加到主屏幕
- [ ] **访问统计** — 接入不蒜子或 Google Analytics
- [ ] **GitHub Action** — 自动化构建检查（链接有效性、HTML 校验）
- [ ] **自定义域名** — 绑定个人域名替换 github.io 地址

---

## 🔧 技术栈

| 类别 | 技术 |
|------|------|
| 前端 | 原生 HTML + CSS + JavaScript（零依赖） |
| 样式 | CSS Variables（主题切换）、CSS Grid/Flexbox（响应式） |
| 交互 | 原生 JS（搜索、暗色模式、侧边栏、Q&A 折叠） |
| 部署 | GitHub Pages（main 分支自动部署） |
| 版本控制 | Git + GitHub |
