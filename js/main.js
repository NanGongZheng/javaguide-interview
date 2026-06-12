// ===== JavaGuide Interview - Main JS =====

// Search Index
const searchIndex = [
  { title: 'Java 集合框架', desc: 'HashMap、ArrayList、ConcurrentHashMap 源码分析', url: 'pages/java-core.html#collections', keywords: 'hashmap arraylist linkedlist treemap collections map set list' },
  { title: 'Java 并发编程', desc: '线程池、锁机制、CAS、AQS 原理详解', url: 'pages/java-core.html#concurrency', keywords: 'thread pool lock synchronized reentrantlock cas aqs volatile' },
  { title: 'JVM 虚拟机', desc: '内存模型、垃圾回收、类加载机制', url: 'pages/java-core.html#jvm', keywords: 'jvm gc classloader memory heap stack metaspace' },
  { title: 'Java 新特性', desc: 'Java 8-21 Stream、Lambda、Record、Sealed Class', url: 'pages/java-core.html#new-features', keywords: 'stream lambda record sealed var pattern matching' },
  { title: 'Spring Boot', desc: '自动配置原理、Starter 机制、常用注解', url: 'pages/spring.html#spring-boot', keywords: 'springboot autoconfiguration starter annotation bean' },
  { title: 'Spring MVC', desc: '请求处理流程、拦截器、异常处理', url: 'pages/spring.html#spring-mvc', keywords: 'dispatcher servlet handler interceptor controller rest' },
  { title: 'Spring Cloud 总览', desc: '新旧技术栈全景对比，Netflix vs Alibaba vs 官方', url: 'pages/spring.html#spring-cloud', keywords: 'spring cloud netflix alibaba 微服务' },
  { title: 'Spring Cloud 版本演进', desc: '版本命名变革、Boot 3.x 重大变化、版本对应关系', url: 'pages/spring.html#cloud-version', keywords: 'version boot3 jakarta graalvm virtual thread' },
  { title: '注册中心对比', desc: 'Eureka vs Nacos vs Consul vs etcd vs ZooKeeper', url: 'pages/spring.html#cloud-register', keywords: 'eureka nacos consul etcd zookeeper register 注册中心' },
  { title: '配置中心', desc: 'Nacos 配置管理、动态刷新、Spring Cloud Config vs Apollo', url: 'pages/spring.html#cloud-config', keywords: 'nacos config apollo consul config 配置中心' },
  { title: 'API 网关', desc: 'Spring Cloud Gateway、Zuul 对比、限流过滤器、鉴权', url: 'pages/spring.html#cloud-gateway', keywords: 'gateway zuul apisix 网关 路由 限流' },
  { title: '负载均衡', desc: 'Ribbon vs Spring Cloud LoadBalancer 迁移指南', url: 'pages/spring.html#cloud-lb', keywords: 'ribbon loadbalancer 负载均衡 轮询 权重' },
  { title: '服务调用', desc: 'OpenFeign、RestTemplate、gRPC、Spring Cloud RestClient', url: 'pages/spring.html#cloud-call', keywords: 'feign openfeign resttemplate grpc restclient 服务调用' },
  { title: '熔断与限流', desc: 'Hystrix vs Sentinel vs Resilience4j 对比与实战', url: 'pages/spring.html#cloud-circuit', keywords: 'hystrix sentinel resilience4j 熔断 限流 降级' },
  { title: 'Seata 分布式事务', desc: 'AT/TCC/SAGA/XA 四种模式原理与实战配置', url: 'pages/spring.html#cloud-seata', keywords: 'seata at tcc saga xa 分布式事务' },
  { title: '可观测性', desc: 'Micrometer Tracing、SkyWalking、链路追踪演进', url: 'pages/spring.html#cloud-observability', keywords: 'micrometer sleuth zipkin skywalking tracing metrics 可观测性' },
  { title: 'Service Mesh', desc: 'Istio、Envoy、Spring Cloud vs Service Mesh 对比', url: 'pages/spring.html#cloud-mesh', keywords: 'istio envoy service mesh sidecar 服务网格' },
  { title: 'Spring 事务', desc: '事务传播、隔离级别、事务失效场景', url: 'pages/spring.html#transaction', keywords: 'transaction propagation isolation rollback' },
  { title: 'MySQL 索引', desc: 'B+ 树原理、索引优化、慢查询分析', url: 'pages/database.html#mysql-index', keywords: 'mysql index b+ tree explain slow query optimize' },
  { title: 'MySQL 事务', desc: 'ACID、MVCC、锁机制、死锁处理', url: 'pages/database.html#mysql-transaction', keywords: 'mvcc acid innodb lock deadlock isolation' },
  { title: 'Redis 数据结构', desc: '五种基础类型、底层编码、使用场景', url: 'pages/database.html#redis', keywords: 'redis string list set hash zset skiplist' },
  { title: 'Redis 高可用', desc: '主从、哨兵、集群、持久化', url: 'pages/database.html#redis-ha', keywords: 'redis cluster sentinel replication rdb aof persistence' },
  { title: '分布式锁', desc: 'Redis/ZooKeeper/数据库实现方案对比', url: 'pages/distribution.html#distributed-lock', keywords: 'distributed lock redis zookeeper redlock' },
  { title: '消息队列', desc: 'RabbitMQ、Kafka、RocketMQ 选型与实战', url: 'pages/distribution.html#mq', keywords: 'mq rabbitmq kafka rocketmq message queue consumer producer' },
  { title: '系统设计', desc: '秒杀系统、短链接、消息推送等经典设计', url: 'pages/distribution.html#system-design', keywords: 'system design seckill url shortener high concurrency' },
  { title: '设计模式', desc: '单例、工厂、策略、模板方法等常用模式', url: 'pages/distribution.html#design-patterns', keywords: 'design pattern singleton factory strategy template observer' },
  { title: '面试题精选', desc: '高频 Java 后端面试题与详细解答', url: 'pages/interview.html', keywords: 'interview question answer 面试题' },
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initSearch();
  initQA();
  highlightActiveNav();
});

// ===== Theme =====
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
    // Set initial icon
    const current = document.documentElement.getAttribute('data-theme');
    toggle.textContent = current === 'dark' ? '☀️' : '🌙';
  }
}

// ===== Sidebar =====
function initSidebar() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay?.classList.toggle('active');
    });

    overlay?.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
}

// ===== Search =====
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 1) {
      results.classList.remove('active');
      return;
    }

    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.keywords.includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-secondary);font-size:14px;">没有找到相关内容</div>';
    } else {
      results.innerHTML = matches.map(item =>
        `<a href="${getBasePath()}${item.url}" class="search-result-item">
          <div class="title">${item.title}</div>
          <div class="desc">${item.desc}</div>
        </a>`
      ).join('');
    }
    results.classList.add('active');
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      results.classList.remove('active');
    }
  });

  // Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape') {
      results.classList.remove('active');
      input.blur();
    }
  });
}

function getBasePath() {
  const path = window.location.pathname;
  // Check if we're in a pages/ subdirectory
  if (path.includes('/pages/')) {
    return '../';
  }
  return '';
}

// ===== Q&A Accordion =====
function initQA() {
  document.querySelectorAll('.qa-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.qa-item');
      const wasOpen = item.classList.contains('open');
      // Close all others
      document.querySelectorAll('.qa-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ===== Active Nav =====
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// ===== Smooth scroll for TOC =====
document.addEventListener('click', (e) => {
  const tocLink = e.target.closest('.toc-list a');
  if (tocLink) {
    e.preventDefault();
    const target = document.querySelector(tocLink.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
